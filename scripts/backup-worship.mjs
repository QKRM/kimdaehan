import { access, appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceBase = "https://countapi.mileshilliard.com/api/v1/get";
const counterPrefix = "kimdaehan_respect_archive_";
const firstTrackedDate = "2026-08-02";
const backupRoot = path.resolve(process.argv[2] ?? "worship-counter");

function koreaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function shiftDate(date, days) {
  const shifted = new Date(`${date}T00:00:00Z`);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted.toISOString().slice(0, 10);
}

function dateRange(start, end) {
  const dates = [];
  for (let date = start; date <= end; date = shiftDate(date, 1)) {
    dates.push(date);
  }
  return dates;
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function fetchCounter(name) {
  const key = `${counterPrefix}${name}`;
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(`${sourceBase}/${encodeURIComponent(key)}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(20_000),
      });

      if (response.status === 404) return 0;
      if (!response.ok) {
        throw new Error(`Counter API returned ${response.status}`);
      }

      const payload = await response.json();
      const value = Number(payload.value);
      if (!Number.isSafeInteger(value) || value < 0) {
        throw new Error(`Invalid counter value for ${name}`);
      }
      return value;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
      }
    }
  }

  throw lastError;
}

async function writeJson(file, value) {
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const capturedAt = new Date().toISOString();
const today = koreaDate();
const yesterday = shiftDate(today, -1);
const dailyDirectory = path.join(backupRoot, "daily");
const historyDirectory = path.join(backupRoot, "history");

await mkdir(dailyDirectory, { recursive: true });
await mkdir(historyDirectory, { recursive: true });

const refreshedDates = new Set([today, yesterday]);
const counts = new Map();
const [total, ...refreshedCounts] = await Promise.all([
  fetchCounter("worship-total"),
  ...[...refreshedDates].map((date) => fetchCounter(`worship-${date}`)),
]);

[...refreshedDates].forEach((date, index) => {
  counts.set(date, refreshedCounts[index]);
});

for (const date of dateRange(firstTrackedDate, today)) {
  const file = path.join(dailyDirectory, `${date}.json`);
  if (!counts.has(date) && !(await exists(file))) {
    counts.set(date, await fetchCounter(`worship-${date}`));
  }
}

for (const [date, count] of counts) {
  await writeJson(path.join(dailyDirectory, `${date}.json`), {
    date,
    count,
    captured_at: capturedAt,
  });
}

const todayCount = counts.get(today) ?? 0;
const latest = {
  captured_at: capturedAt,
  timezone: "Asia/Seoul",
  source: "countapi.mileshilliard.com",
  total,
  today: {
    date: today,
    count: todayCount,
  },
};

await writeJson(path.join(backupRoot, "latest.json"), latest);
await appendFile(
  path.join(historyDirectory, `${today}.ndjson`),
  `${JSON.stringify(latest)}\n`,
  "utf8",
);

const readmeFile = path.join(backupRoot, "README.md");
if (!(await exists(readmeFile))) {
  await writeFile(
    readmeFile,
    [
      "# Worship counter backups",
      "",
      "Automatic snapshots of the public worship counters.",
      "",
      "- `latest.json`: latest total and Korea-date count",
      "- `daily/`: latest preserved value for each Korea date",
      "- `history/`: five-minute snapshot history in NDJSON format",
      "",
    ].join("\n"),
    "utf8",
  );
}

const summaryFile = process.env.GITHUB_STEP_SUMMARY;
if (summaryFile) {
  const previousSummary = (await exists(summaryFile))
    ? await readFile(summaryFile, "utf8")
    : "";
  await writeFile(
    summaryFile,
    `${previousSummary}## Worship backup\n\n- Captured: ${capturedAt}\n- Total: ${total}\n- ${today}: ${todayCount}\n`,
    "utf8",
  );
}

