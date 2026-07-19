import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SensorDeck | 机器人运行时智能基础设施",
  description:
    "SensorDeck 为传感器制造商和机器人 OEM 提供机器人运行时智能基础设施及 Atlas 产品线。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
