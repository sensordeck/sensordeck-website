"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "@/components/website/Button";
import { LanguageSwitcher } from "@/components/website/LanguageSwitcher";
import { getCurrentLocale, localizeHref, type Locale } from "@/lib/i18n";

const headerCopy: Record<
  Locale,
  {
    brandAriaLabel: string;
    desktopNavigationAriaLabel: string;
    mobileNavigationAriaLabel: string;
    openMenuAriaLabel: string;
    requestDemo: string;
    navigation: { label: string; href: string }[];
  }
> = {
  zh: {
    brandAriaLabel: "SensorDeck 首页",
    desktopNavigationAriaLabel: "主导航",
    mobileNavigationAriaLabel: "移动端导航",
    openMenuAriaLabel: "打开导航菜单",
    requestDemo: "申请演示",
    navigation: [
      { label: "产品", href: "/products" },
      { label: "平台", href: "/platform" },
      { label: "技术", href: "/technology" },
      { label: "资料库", href: "/library" },
      { label: "公司", href: "/company" },
      { label: "联系", href: "/contact" },
    ],
  },
  en: {
    brandAriaLabel: "SensorDeck home",
    desktopNavigationAriaLabel: "Primary navigation",
    mobileNavigationAriaLabel: "Mobile navigation",
    openMenuAriaLabel: "Open navigation menu",
    requestDemo: "Request Demo",
    navigation: [
      { label: "Products", href: "/products" },
      { label: "Platform", href: "/platform" },
      { label: "Technology", href: "/technology" },
      { label: "Library", href: "/library" },
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

function Brand({
  ariaLabel,
  locale,
}: {
  ariaLabel: string;
  locale: Locale;
}) {
  return (
    <a
      className="flex shrink-0 items-center text-ink"
      href={`/${locale}`}
      aria-label={ariaLabel}
    >
      <Image
        alt="SensorDeck"
        className="h-16 w-auto"
        height={360}
        priority
        unoptimized
        src="/logos/SensorDeck18.png"
        width={1364}
      />
    </a>
  );
}

function NavigationLinks({
  ariaLabel,
  locale,
  mobile = false,
  navigation,
}: {
  ariaLabel: string;
  locale: Locale;
  mobile?: boolean;
  navigation: { label: string; href: string }[];
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className={mobile ? "grid gap-1 border-t border-border pt-3" : "flex items-center gap-5"}
    >
      {navigation.map((item) => (
        <a
          className={`rounded-sm px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue link-hover ${
            mobile ? "block" : ""
          }`}
          href={localizeHref(locale, item.href)}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLocale = getCurrentLocale(usePathname());
  const copy = headerCopy[currentLocale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-[250ms] ease-in-out ${
        isScrolled
          ? "border-border/60 bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "border-border bg-white"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-start gap-6 px-5 transition-all duration-[250ms] ease-in-out sm:px-8 lg:px-10 ${
          isScrolled ? "min-h-16" : "min-h-18"
        }`}
      >
        <Brand ariaLabel={copy.brandAriaLabel} locale={currentLocale} />

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <NavigationLinks
            ariaLabel={copy.desktopNavigationAriaLabel}
            locale={currentLocale}
            navigation={copy.navigation}
          />
          <LanguageSwitcher currentLocale={currentLocale} />
          <Button
            href={localizeHref(currentLocale, "/contact")}
            className="min-h-10 px-3.5 py-2 text-xs"
          >
            {copy.requestDemo}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher currentLocale={currentLocale} />
          <details className="relative">
            <summary
              className="flex min-h-10 cursor-pointer list-none items-center rounded-md border border-border px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
              aria-label={copy.openMenuAriaLabel}
            >
              <svg className="h-5 w-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-lg border border-border bg-white p-4 shadow-[0_12px_32px_rgba(10,26,42,0.12)]">
              <NavigationLinks
                ariaLabel={copy.mobileNavigationAriaLabel}
                locale={currentLocale}
                mobile
                navigation={copy.navigation}
              />
              <Button
                href={localizeHref(currentLocale, "/contact")}
                className="mt-4 w-full"
              >
                {copy.requestDemo}
              </Button>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
