export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getCurrentLocale(pathname: string | null | undefined): Locale {
  const locale = pathname?.split("/").filter(Boolean)[0];
  return locale && isValidLocale(locale) ? locale : defaultLocale;
}

export function localizeHref(locale: Locale, href: string): string {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  const hrefWithoutLocale =
    normalizedHref.replace(/^\/(?:zh|en)(?=\/|$)/, "") || "/";

  return hrefWithoutLocale === "/"
    ? `/${locale}`
    : `/${locale}${hrefWithoutLocale}`;
}
