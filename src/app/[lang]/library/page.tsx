import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
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

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>
  );
}

export default async function LibraryIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getLibraryContent(lang);
  const { hero, cta, ui } = content;
  const libraryResources = ui.resourceCards;

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Hero */}
        <Section id="library-hero" className="bg-white">
          <div className="max-w-4xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl heading-title">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:mt-7 sm:text-xl sm:leading-9 md:text-2xl heading-description">
              {hero.subtitle}
            </p>
          </div>
        </Section>

        {/* Resources Grid */}
        <Section id="resources" className="bg-surface">
          <div className="grid gap-6 md:grid-cols-2">
            {libraryResources.map((resource) => (
              <Card
                className="flex min-h-0 flex-col justify-between stagger-item sm:min-h-64"
                key={resource.id}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan-text">
                      {resource.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {resource.items}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink">
                    {resource.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <a
                    className="-my-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                    href={localizeHref(lang, resource.href)}
                  >
                    {ui.browse}
                    <ArrowLabel />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Quick Links */}
        <Section id="quick-access" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>{ui.quickAccessEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
              {ui.quickAccessTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/white-papers")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">{ui.whitePapersLabel}</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.whitePapersLabel}
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/documentation")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">{ui.documentationLabel}</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.documentationLabel}
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/demo")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">{ui.demoLabel}</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.demoAndVideoLabel}
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href={localizeHref(lang, "/library/faq")}
            >
              <span className="font-mono text-xs text-sensor-tan-text">{ui.faqLabel}</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                {ui.faqLabel}
              </span>
            </a>
          </div>
        </Section>

        {/* CTA */}
        <Section id="library-cta" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5 sm:p-7 md:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>{cta.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl heading-title">
                  {cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg heading-description">
                  {cta.description}
                </p>
              </div>
              <div className="grid gap-3 sm:flex sm:flex-wrap">
                <Button className="w-full sm:w-auto" href="mailto:contact@sensordeck.tech">
                  {cta.primaryButton.text}
                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
                </Button>
                <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")} variant="secondary">
                  {cta.secondaryButton.text}
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
