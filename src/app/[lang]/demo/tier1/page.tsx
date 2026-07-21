import { notFound } from "next/navigation";

import Tier1DemoClient from "./Tier1DemoClient";
import { getLegacyTranslations } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function Tier1DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  return <Tier1DemoClient translations={await getLegacyTranslations(lang)} />;
}
