import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SensorDeck | Runtime Intelligence Infrastructure for Robotics",
  description:
    "SensorDeck provides runtime intelligence infrastructure and the Atlas product line for sensor manufacturers and robot OEMs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`h-full antialiased ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
