import { notFound } from "next/navigation";

import SensorFaeDemoClient from "./SensorFaeDemoClient";
import { getDemoContent } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function SensorFaeDemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getDemoContent(lang);

  return <SensorFaeDemoClient content={content} />;
}
