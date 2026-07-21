"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <Link
      className="flex min-h-11 shrink-0 items-center text-ink"
      href={`/${locale}`}
      aria-label={ariaLabel}
    >
      <Image
        alt="SensorDeck"
        className="h-10 w-auto sm:h-12 lg:h-16"
        height={360}
        priority
        unoptimized
        src="/logos/SensorDeck18.png"
        width={1364}
      />
    </Link>
  );
}

function NavigationLinks({
  ariaLabel,
  locale,
  mobile = false,
  navigation,
  onNavigate,
}: {
  ariaLabel: string;
  locale: Locale;
  mobile?: boolean;
  navigation: { label: string; href: string }[];
  onNavigate?: () => void;
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className={mobile ? "grid gap-1 border-t border-border pt-3" : "flex items-center gap-5"}
    >
      {navigation.map((item) => (
        <Link
          className="flex min-h-11 items-center rounded-sm px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue link-hover"
          href={localizeHref(locale, item.href)}
          key={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollSentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const copy = headerCopy[currentLocale];

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return;

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      });

      observer.observe(sentinel);
      return () => observer.disconnect();
    }

    let animationFrameId: number | null = null;
    let wasScrolled = false;

    const updateScrollState = () => {
      animationFrameId = null;
      const nextIsScrolled = window.scrollY > 50;

      if (nextIsScrolled !== wasScrolled) {
        wasScrolled = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }
    };

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div aria-hidden="true" className="relative h-0 w-full">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[51px] w-px"
          ref={scrollSentinelRef}
        />
      </div>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] ${
          isScrolled
            ? "border-border/60 bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "border-border bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-start gap-3 px-4 sm:h-18 sm:gap-6 sm:px-8 lg:px-10">
          <Brand ariaLabel={copy.brandAriaLabel} locale={currentLocale} />

          <div className="ml-auto hidden items-center gap-4 xl:flex">
            <NavigationLinks
              ariaLabel={copy.desktopNavigationAriaLabel}
              locale={currentLocale}
              navigation={copy.navigation}
            />
            <LanguageSwitcher currentLocale={currentLocale} />
            <Button
              href={localizeHref(currentLocale, "/contact")}
              className="px-3.5 py-2 text-xs"
            >
              {copy.requestDemo}
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <LanguageSwitcher compact currentLocale={currentLocale} />
            <div className="relative" ref={menuRef}>
              <button
                aria-controls="mobile-navigation-menu"
                aria-expanded={isMenuOpen}
                aria-label={copy.openMenuAriaLabel}
                className="flex size-11 cursor-pointer items-center justify-center rounded-md border border-border bg-white text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
                onClick={() => setIsMenuOpen((open) => !open)}
                type="button"
              >
                {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
              </button>
              {isMenuOpen ? (
                <div
                  className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-border bg-white p-4 shadow-[0_12px_32px_rgba(10,26,42,0.12)]"
                  id="mobile-navigation-menu"
                >
                  <NavigationLinks
                    ariaLabel={copy.mobileNavigationAriaLabel}
                    locale={currentLocale}
                    mobile
                    navigation={copy.navigation}
                    onNavigate={() => setIsMenuOpen(false)}
                  />
                  <Button
                    href={localizeHref(currentLocale, "/contact")}
                    className="mt-4 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {copy.requestDemo}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
