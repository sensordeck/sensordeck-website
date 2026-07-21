import type { Metadata } from "next";

import "./globals.css";

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
    <html className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
