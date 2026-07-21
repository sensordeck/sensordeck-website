import { notFound } from "next/navigation";

import ContactFormClient from "./ContactFormClient";
import { getContactContent } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getContactContent(lang);
  return <ContactFormClient content={content} />;
}
