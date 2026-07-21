import { notFound } from "next/navigation";

import InvestigationDemoClient from "./InvestigationDemoClient";
import { getDemoContent } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function InvestigationDemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getDemoContent(lang);

  return <InvestigationDemoClient content={content} />;
}
