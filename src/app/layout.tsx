import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Cowork Bootcamp — Build .skills, Not Prompts",
  description:
    "Turn Claude into your highest performing employee by building .skills. 2-week live bootcamp starting February 23, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
