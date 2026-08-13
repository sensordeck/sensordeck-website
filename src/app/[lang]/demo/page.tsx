import { notFound, redirect } from "next/navigation";

import { isValidLocale, localizeHref } from "@/lib/i18n";

export default async function DemoRedirectPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  redirect(localizeHref(lang, "/library/demo"));
}
