import { notFound } from "next/navigation";

import Tier1DemoClient from "./Tier1DemoClient";
import { getDemoContent } from "@/lib/content";
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

  const content = await getDemoContent(lang);

  return <Tier1DemoClient content={content} />;
}
