import type { Metadata } from "next";
import "./globals.css";

const title = "대한이는터진다 — 김대한 RESPECT ARCHIVE";
const description = "휘문고 1학년 주전부터 두산 베어스의 오늘까지, 기사와 주요 경기 영상으로 이어지는 김대한 아카이브.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kim-daehan-respect-archive.sbsansan4.chatgpt.site";
const basePath = process.env.GITHUB_PAGES === "true" ? "/kimdaehan" : "";
const image = `${siteUrl}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: { title, description, type: "website", locale: "ko_KR", images: [{ url: image, width: 1728, height: 920, alt: "대한이는터진다 — 김대한 RESPECT ARCHIVE" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
