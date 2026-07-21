import type { Metadata } from "next";
import { headers } from "next/headers";

import { getCurrentLocale } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "SensorDeck | Runtime Intelligence Infrastructure for Robotics",
  description:
    "SensorDeck provides runtime intelligence infrastructure and the Atlas product line for sensor manufacturers and robot OEMs.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = getCurrentLocale(requestHeaders.get("x-sensordeck-pathname"));

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
