import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "김대한, 그는 누구인가 — RESPECT ARCHIVE";
const description = "휘문고 1학년 주전부터 청소년대표 4번, 두산 베어스의 오늘까지 이어지는 김대한 기사 아카이브.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: "ko_KR", images: [{ url: image, width: 1728, height: 920, alt: "김대한, 그는 누구인가" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
