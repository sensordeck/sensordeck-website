import Link from "next/link";

import Card from "@/components/website/Card";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
      {children}
    </p>
  );
}

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>
  );
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { demo, ui } = await getLibraryContent(lang);

  return (
    <div className="bg-white font-sans text-ink">

        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
          <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-label">
            <Link className="text-muted hover:text-ink" href={localizeHref(lang, "/library")}>
              {ui.libraryLabel}
            </Link>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">{ui.demoLabel}</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="demo-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-sans text-page-title font-semibold leading-tight tracking-tight text-ink md:text-page-title-md lg:text-page-title-lg">
              {demo.title}
            </h1>
            <p className="mt-7 text-body-lg leading-relaxed text-muted md:text-body-lg-md">
              {demo.description}
            </p>
          </div>
        </Section>

        {/* Featured Atlas V3 Demo */}
        <Section id="atlas-v3-demo" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>{demo.featured.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{demo.featured.title}</h2>
                <p className="mt-5 text-body leading-8 text-muted">{demo.featured.description}</p>
                <p className="mt-4 font-mono text-code text-sensor-tan-text">{demo.featured.meta}</p>
              </div>
              <a className="inline-flex min-h-12 items-center justify-center gap-2 bg-atlas-blue px-6 py-3 text-label font-semibold text-white transition-colors hover:bg-atlas-blue-dark" href={`https://atlas-investigation-ui.vercel.app/${lang}/`} rel="noopener noreferrer" target="_blank">
                {demo.featured.button}<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Section>

        {/* Demo Items */}
        <Section id="demo-items" className="bg-surface">
          <div className="grid gap-4 md:grid-cols-2">
            {demo.items.map((item, index) => (
              <Card
                className={`flex min-h-56 flex-col justify-between ${
                  item.disabled === true ? "opacity-60" : ""
                }`}
                key={item.title}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-code text-sensor-tan-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-eyebrow uppercase tracking-eyebrow text-muted">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  {item.disabled === true ? (
                    <span className="text-label font-semibold text-muted">
                      {ui.comingSoon}
                    </span>
                  ) : (
                    <Link
                      className="inline-flex items-center gap-2 text-label font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                      href={localizeHref(lang, item.href)}
                    >
                      {ui.view}
                      <ArrowLabel />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Demo Note */}
        <Section id="demo-note" className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 font-mono text-code text-atlas-blue">
                {ui.note}
              </span>
              <div>
                <p className="text-body leading-relaxed text-ink">
                  {ui.demoNote}
                </p>
                <p className="mt-4 text-body leading-relaxed text-muted">
                  {ui.demoContactNote}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              className="text-label font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/documentation")}
            >
              {ui.previousDocumentation}
            </Link>
            <Link
              className="text-label font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/faq")}
            >
              {ui.nextFaq}
            </Link>
          </div>
        </Section>

    </div>
  );
}
