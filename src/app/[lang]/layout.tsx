import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";

import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import { locales, type Locale, isValidLocale } from "@/lib/i18n";
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

const metadataByLocale: Record<Locale, Metadata> = {
  zh: {
    title: "SensorDeck | 机器人运行时智能基础设施",
    description:
      "SensorDeck 为传感器制造商和机器人 OEM 提供机器人运行时智能基础设施及 Atlas 产品线。",
  },
  en: {
    title: "SensorDeck | Runtime Intelligence Infrastructure for Robotics",
    description:
      "SensorDeck provides runtime intelligence infrastructure and the Atlas product line for sensor manufacturers and robot OEMs.",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  return metadataByLocale[lang];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`h-full antialiased ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
