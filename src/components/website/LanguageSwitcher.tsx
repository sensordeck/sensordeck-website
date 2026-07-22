"use client";

import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

export function LanguageSwitcher({
  compact = false,
  currentLocale,
}: {
  compact?: boolean;
  currentLocale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const copy = languageSwitcherCopy[currentLocale];

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Extract the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, "") || "/";

    // Navigate to the new locale path
    setIsOpen(false);
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-label={copy.ariaLabel}
        className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-2 text-label font-medium text-foreground transition-colors hover:text-atlas-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue sm:px-3"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <Globe aria-hidden="true" className="size-4" />
        <span className={compact ? "hidden sm:inline" : ""}>
          {copy.languageNames[currentLocale]}
        </span>
      </button>

      {isOpen ? (
        <div
          aria-label="语言选择"
          className="absolute right-0 z-[60] mt-1 w-36 overflow-hidden rounded-lg border border-border bg-white shadow-lg"
          role="group"
        >
          {locales.map((locale) => (
            <button
              aria-label={copy.switchTo[locale]}
              key={locale}
              onClick={() => switchLocale(locale)}
              type="button"
              className={`flex min-h-11 w-full items-center px-4 text-left text-label transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-atlas-blue ${
                locale === currentLocale
                  ? "bg-surface font-medium"
                  : ""
              }`}
            >
              {copy.languageNames[locale]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
