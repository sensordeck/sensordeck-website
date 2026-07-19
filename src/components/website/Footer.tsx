import Image from "next/image";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Products", href: "#products" },
      { label: "Platform", href: "#platform" },
      { label: "Technology", href: "#technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#company" },
      { label: "Principles", href: "#evidence" },
      { label: "Contact", href: "#request-demo" },
    ],
  },
  {
    title: "Library",
    links: [
      { label: "White Papers", href: "#resources" },
      { label: "Documentation", href: "https://docs.sensordeck.tech" },
      { label: "2-Min Overview", href: "#request-demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="company" className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_2fr] lg:px-10 lg:py-20">
        <div className="max-w-sm">
          <a className="inline-flex items-center" href="#top">
            <Image
              src="/logos/sensordeck-logo.png"
              alt="SensorDeck"
              width={160}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </a>
          <p className="mt-6 text-sm leading-7 text-white/65">
            Runtime intelligence infrastructure for robotics. Observe,
            understand, investigate, improve, and reuse.
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
            sensordeck.tech
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {group.title}
              </h2>
              <nav className="mt-4 grid gap-3" aria-label={`${group.title} footer links`}>
                {group.links.map((link) => (
                  <a
                    className="w-fit text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
                    style={{ transitionDuration: '150ms', transitionTimingFunction: 'var(--ease-out)' }}
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>© 2026 SensorDeck. All rights reserved.</span>
          <span className="font-mono">Runtime boundary / Evidence / Memory</span>
        </div>
      </div>
    </footer>
  );
}
