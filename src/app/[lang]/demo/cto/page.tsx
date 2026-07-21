import { notFound } from "next/navigation";

import CTODemoClient from "./CTODemoClient";
import { getLegacyTranslations } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function CTODemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  return <CTODemoClient translations={await getLegacyTranslations(lang)} />;
}
