import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Cowork Bootcamp — Build .skills, Not Prompts",
  description:
    "Turn Claude into your highest performing employee by building .skills. 2-week live bootcamp starting April 6, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.BOOTCAMP_WIDGET_CONFIG = {
                apiUrl: 'https://dquuimhmbofdhdsbdbly.supabase.co/functions/v1/bootcamp-chat',
                brandColor: '#f35a1f',
                widgetTitle: 'Bootcamp Concierge',
                greeting: "Got questions about the Cowork Bootcamp? Ask away."
              };
            `,
          }}
        />
        <script src="/widget.js" defer />
      </body>
    </html>
  );
}
