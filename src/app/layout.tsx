import type { Metadata } from "next";

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
      <head>
        {/* Tailwind CSS CDN: 100% Guaranteed styling in any environment */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      zinc: {
                        850: '#1f1f23',
                        950: '#09090b',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                background-color: #09090b;
                color: #fafafa;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 0;
              }
              .perspective-1000 {
                perspective: 1000px;
              }
              .transform-style-3d {
                transform-style: preserve-3d;
              }
              .backface-hidden {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
              }
              .rotate-y-180 {
                transform: rotateY(180deg);
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
