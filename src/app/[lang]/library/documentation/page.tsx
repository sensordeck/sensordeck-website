import Link from "next/link";

import Button from "@/components/website/Button";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
      {children}
    </p>
  );
}

export default async function DocumentationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { documentation, ui } = await getLibraryContent(lang);

  return (
    <div className="bg-paper font-sans text-ink">

        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
            <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-sm">
            <Link className="text-muted hover:text-ink" href={localizeHref(lang, "/library")}>
              {ui.libraryLabel}
            </Link>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">{ui.documentationLabel}</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="documentation-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{documentation.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
              {documentation.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">
              {documentation.description}
            </p>
          </div>
        </Section>

        {/* Documentation Content */}
        <Section id="docs-content" className="bg-surface">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="border border-border bg-white p-6 md:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {ui.documentationTopics}
              </p>
              <ul className="mt-6 grid gap-3">
                {documentation.topics.map((topic) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-6 text-ink"
                    key={topic}
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-2xl leading-10 tracking-tight text-ink">
                  {ui.documentationHosting}
                </p>
                <p className="mt-6 text-base leading-8 text-muted">
                  {documentation.note}
                </p>
              </div>
              <div className="mt-8">
                <Button
                  href={documentation.link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {documentation.link.text}
                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Use Cases */}
        <Section id="use-cases" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>{ui.documentationFor}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {ui.documentationReferenceTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ui.documentationUseCases.map((item, index) => (
              <div
                className="border border-border bg-surface p-5"
                key={item}
              >
                <span className="font-mono text-xs text-sensor-tan-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/white-papers")}
            >
              {ui.previousWhitePapers}
            </Link>
            <Link
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/demo")}
            >
              {ui.nextDemo}
            </Link>
          </div>
        </Section>

    </div>
  );
}
