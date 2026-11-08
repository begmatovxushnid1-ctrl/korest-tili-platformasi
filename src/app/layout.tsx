import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HanguGo - Koreys tili o'rganish platformasi",
  description: "Raqamli lug'at (단어장), interaktiv grammatika (연습장) va ovozli talaffuz bilan koreys tilini o'rganing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
