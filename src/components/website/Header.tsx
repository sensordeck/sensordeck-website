import Image from "next/image";

import Button from "@/components/website/Button";

const navigation = [
  { label: "产品", href: "/products" },
  { label: "平台", href: "/platform" },
  { label: "技术", href: "/technology" },
  { label: "资料库", href: "/library" },
  { label: "公司", href: "/company" },
  { label: "联系", href: "/contact" },
];

function Brand() {
  return (
    <a
      className="flex shrink-0 items-center text-ink"
      href="/"
      aria-label="SensorDeck 首页"
    >
      <Image
        alt="SensorDeck"
        className="h-16 w-auto"
        height={360}
        priority
        src="/logos/SensorDeck18.png"
        width={1364}
      />
    </a>
  );
}

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      aria-label={mobile ? "移动端导航" : "主导航"}
      className={mobile ? "grid gap-1 border-t border-border pt-3" : "flex items-center gap-5"}
    >
      {navigation.map((item) => (
        <a
          className={`rounded-sm px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue link-hover ${
            mobile ? "block" : ""
          }`}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function LanguageToggle() {
  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border bg-slate-50 p-1 font-mono text-[11px] font-semibold"
      aria-label="语言选择器"
    >
      <span className="px-2 py-1 text-muted" aria-label="英文">
        英文
      </span>
      <span className="rounded-sm bg-white px-2 py-1 text-ink shadow-[0_1px_2px_rgba(10,26,42,0.06)]">
        中文
      </span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-start gap-6 px-5 sm:px-8 lg:px-10">
        <Brand />

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <NavigationLinks />
          <LanguageToggle />
          <Button href="/#request-demo" className="min-h-10 px-3.5 py-2 text-xs">
            申请演示
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <details className="relative">
            <summary
              className="flex min-h-10 cursor-pointer list-none items-center rounded-md border border-border px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
              aria-label="打开导航菜单"
            >
              <svg className="h-5 w-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-lg border border-border bg-white p-4 shadow-[0_12px_32px_rgba(10,26,42,0.12)]">
              <NavigationLinks mobile />
              <Button href="/#request-demo" className="mt-4 w-full">
                申请演示
              </Button>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
