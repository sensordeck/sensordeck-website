import Link from "next/link";

import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
      {children}
    </p>
  );
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { faq, ui } = await getLibraryContent(lang);

  return (
    <div className="bg-white font-sans text-ink">

        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
            <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-sm">
            <Link className="text-muted hover:text-ink" href={localizeHref(lang, "/library")}>
              {ui.libraryLabel}
            </Link>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">FAQ</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="faq-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              {faq.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl heading-description">
              {faq.description}
            </p>
          </div>
        </Section>

        {/* FAQ Grid */}
        <Section id="faq-content" className="bg-surface">
          <div className="grid gap-6 lg:grid-cols-2">
            {faq.questions.map((item, index) => (
              <div
                className="border-l-2 border-atlas-blue bg-white p-6 md:p-8 stagger-item"
                key={item.question}
              >
                <span className="font-mono text-xs text-sensor-tan-text">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-ink">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Additional Resources */}
        <Section id="more-info" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>{ui.moreInfoEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
              {ui.moreResourcesTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-muted heading-description">
              {ui.moreResourcesDescription}
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Link
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/white-papers")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">01</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.readWhitePapers}
              </span>
            </Link>
            <Link
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/documentation")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">02</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.viewDocumentation}
              </span>
            </Link>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="mailto:contact@sensordeck.tech"
            >
              <span className="font-mono text-xs text-sensor-tan-text">03</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.contactUs}
              </span>
            </a>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/demo")}
            >
              {ui.previousDemo}
            </Link>
            <Link
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library")}
            >
              {ui.backToLibrary}
            </Link>
          </div>
        </Section>

    </div>
  );
}
