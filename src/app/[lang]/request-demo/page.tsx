import { notFound } from "next/navigation";

import RequestDemoFormClient from "./RequestDemoFormClient";
import { getRequestDemoContent } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function RequestDemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getRequestDemoContent(lang);
  return <RequestDemoFormClient content={content} />;
}
