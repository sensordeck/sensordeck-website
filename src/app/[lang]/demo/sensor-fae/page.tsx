import { notFound } from "next/navigation";

import SensorFaeDemoClient from "./SensorFaeDemoClient";
import { getLegacyTranslations } from "@/lib/content";
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

  return (
    <SensorFaeDemoClient translations={await getLegacyTranslations(lang)} />
  );
}
