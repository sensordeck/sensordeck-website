import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
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
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
          <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-sm">
            <a className="text-muted hover:text-ink" href={localizeHref(lang, "/library")}>
              {ui.libraryLabel}
            </a>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">{ui.demoLabel}</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="demo-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
              {demo.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">
              {demo.description}
            </p>
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
                    <span className="font-mono text-xs text-sensor-tan-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  {item.disabled === true ? (
                    <span className="text-sm font-semibold text-muted">
                      {ui.comingSoon}
                    </span>
                  ) : (
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                      href={localizeHref(lang, item.href)}
                    >
                      {ui.view}
                      <ArrowLabel />
                    </a>
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
              <span className="mt-1 font-mono text-xs text-atlas-blue">
                {ui.note}
              </span>
              <div>
                <p className="text-sm leading-7 text-ink">
                  {ui.demoNote}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {ui.demoContactNote}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/documentation")}
            >
              {ui.previousDocumentation}
            </a>
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/faq")}
            >
              {ui.nextFaq}
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
