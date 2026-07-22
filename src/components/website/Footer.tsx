"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getCurrentLocale, localizeHref, type Locale } from "@/lib/i18n";

const footerCopy: Record<
  Locale,
  {
    backToTopAriaLabel: string;
    description: string;
    copyright: string;
    tagline: string;
    footerLinksLabel: (groupTitle: string) => string;
    groups: {
      title: string;
      links: { label: string; href: string }[];
    }[];
  }
> = {
  zh: {
    backToTopAriaLabel: "返回页面顶部",
    description:
      "Atlas 让核心工程资源聚焦研发与创造价值，让运行时事故调查成为组织能力。",
    copyright: "© 2026 SensorDeck。版权所有",
    tagline: "运行时边界 / 证据 / 记忆",
    footerLinksLabel: (groupTitle) => `${groupTitle}页脚链接`,
    groups: [
      {
        title: "探索",
        links: [
          { label: "产品", href: "/products" },
          { label: "平台", href: "/platform" },
          { label: "部署", href: "/technology" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "关于", href: "/company" },
          { label: "原则", href: "/company#principles" },
          { label: "联系", href: "/contact" },
        ],
      },
      {
        title: "技术资源",

links: [
  {
    label: "Atlas 中文文档",
    href: "/library",
  },
  {
    label: "参考资料",
    href: "/library/faq",
  },
  {
    label: "2分钟概览",
    href: "/library/demo",
  },
],
      },
    ],
  },
  en: {
    backToTopAriaLabel: "Back to top",
    description:
      "Atlas keeps core engineering resources focused on product development and value creation, while turning runtime incident investigation into an organizational capability.",
    copyright: "© 2026 SensorDeck. All rights reserved.",
    tagline: "Runtime Boundary / Evidence / Memory",
    footerLinksLabel: (groupTitle) => `${groupTitle} footer links`,
    groups: [
      {
        title: "Explore",
        links: [
          { label: "Products", href: "/products" },
          { label: "Platform", href: "/platform" },
          { label: "Technology", href: "/technology" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/company" },
          { label: "Principles", href: "/company#principles" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Library",
        links: [
          { label: "White Papers", href: "/library/white-papers" },
          { label: "Documentation", href: "https://docs.sensordeck.tech" },
          { label: "2-Min Overview", href: "/library/demo" },
        ],
      },
    ],
  },
};

export default function Footer() {
  const currentLocale = getCurrentLocale(usePathname());
  const copy = footerCopy[currentLocale];

  return (
    <footer id="company" className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_2fr] lg:px-10 lg:py-20">
        <div className="max-w-sm">
          <Link
            aria-label={copy.backToTopAriaLabel}
            className="inline-flex min-h-11 items-center"
            href={localizeHref(currentLocale, "/#top")}
          >
            <Image
              src="/logos/sensordeck-logo-white.png"
              alt="SensorDeck"
              width={160}
              height={40}
              unoptimized
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-6 text-body leading-8 text-white/75">
            {copy.description}
          </p>
          <p className="mt-5 font-mono text-eyebrow-md uppercase tracking-eyebrow text-white/68">
            sensordeck.tech
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {copy.groups.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-eyebrow-md font-semibold uppercase tracking-eyebrow text-white/70">
                {group.title}
              </p>
              <nav
                className="mt-4 grid gap-3"
                aria-label={copy.footerLinksLabel(group.title)}
              >
                {group.links.map((link) => {
                  const href = localizeHref(currentLocale, link.href);
                  const className =
                    "inline-flex min-h-11 w-fit items-center text-body text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue";
                  const style = {
                    transitionDuration: "var(--duration-tooltip)",
                    transitionTimingFunction: "var(--ease-out)",
                  };

                  return link.href.startsWith("http") ? (
                    <a
                      className={className}
                      href={href}
                      key={link.label}
                      rel="noreferrer"
                      style={style}
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      className={className}
                      href={href}
                      key={link.label}
                      style={style}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-caption text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>{copy.copyright}</span>
          <span className="font-mono">{copy.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
