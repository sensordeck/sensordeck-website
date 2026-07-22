import Link from "next/link";

import Card from "@/components/website/Card";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-eyebrow font-semibold uppercase leading-normal tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg heading-eyebrow text-atlas-blue">
      {children}
    </p>
  );
}

export default async function WhitePapersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { whitePapers, ui } = await getLibraryContent(lang);

  return (
    <div className="bg-white font-sans text-ink">

        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
          <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-label leading-normal">
            <Link
              className="text-muted hover:text-ink"
              href={localizeHref(lang, "/library")}
            >
              {ui.libraryLabel}
            </Link>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">{ui.whitePapersLabel}</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="white-papers-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{whitePapers.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg heading-title">
              {whitePapers.title}
            </h1>
            <p className="mt-7 text-body-lg leading-relaxed text-muted md:text-body-lg-md heading-description">
              {whitePapers.description}
            </p>
          </div>
        </Section>

        {/* White Papers Grid */}
        <Section id="papers" className="bg-surface">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whitePapers.papers.map((paper) => (
              <Card className="flex min-h-64 flex-col justify-between stagger-item" key={paper.id}>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-code leading-normal text-atlas-blue">
                      {paper.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-caption uppercase leading-normal tracking-eyebrow text-muted">
                      {paper.format}
                    </span>
                  </div>
                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {paper.title}
                  </h3>
                  <p className="mt-3 text-body leading-relaxed text-muted">
                    {paper.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-caption leading-normal text-muted">{paper.size}</span>
                  <button
                    className="inline-flex items-center gap-2 text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
                    disabled
                    type="button"
                  >
                    {ui.comingSoon}
                  </button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex gap-4 border border-border bg-white px-5 py-4 text-body leading-relaxed text-muted md:px-6">
            <span className="mt-1 font-mono text-code leading-normal text-atlas-blue">/</span>
            <p>
              {ui.whitePaperAvailability}
            </p>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library")}
            >
              ← {ui.backToLibrary}
            </Link>
            <Link
              className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/documentation")}
            >
              {ui.nextDocumentation}
            </Link>
          </div>
        </Section>

    </div>
  );
}
