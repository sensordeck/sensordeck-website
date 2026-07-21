"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale, locales } from "@/lib/i18n";

const languageSwitcherCopy: Record<
  Locale,
  {
    ariaLabel: string;
    languageNames: Record<Locale, string>;
    switchTo: Record<Locale, string>;
  }
> = {
  zh: {
    ariaLabel: "选择语言",
    languageNames: {
      zh: "中文",
      en: "English",
    },
    switchTo: {
      zh: "切换到中文",
      en: "Switch to English",
    },
  },
  en: {
    ariaLabel: "Select language",
    languageNames: {
      zh: "Chinese",
      en: "English",
    },
    switchTo: {
      zh: "Switch to Chinese",
      en: "Switch to English",
    },
  },
};

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const copy = languageSwitcherCopy[currentLocale];

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Extract the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, "") || "/";

    // Navigate to the new locale path
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative group">
      <button
        aria-label={copy.ariaLabel}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
        type="button"
      >
        <Globe className="h-4 w-4" />
        <span>{copy.languageNames[currentLocale]}</span>
      </button>

      <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-800 border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {locales.map((locale) => (
          <button
            aria-label={copy.switchTo[locale]}
            key={locale}
            onClick={() => switchLocale(locale)}
            type="button"
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-surface transition-colors first:rounded-t-lg last:rounded-b-lg ${
              locale === currentLocale
                ? "bg-surface font-medium"
                : ""
            }`}
          >
            {copy.languageNames[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
