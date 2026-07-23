import Link from "next/link";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase leading-normal tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
      {children}
    </p>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
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

  return (
    <div className="bg-white font-sans text-ink">
      {/* Hero */}
      <Section id="library-hero" className="bg-white">
        <div className="max-w-5xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="heading-title mt-5 max-w-4xl font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
            {hero.title}
          </h1>

          <p className="heading-description mt-6 max-w-3xl text-body-lg leading-relaxed text-muted sm:mt-7 sm:text-body-lg-md">
            {hero.subtitle}
          </p>
        </div>
      </Section>

      {/* Four resource cards */}
      <Section id="resources" className="bg-surface">
        <div className="grid gap-6 md:grid-cols-2">
          {ui.resourceCards.map((resource, index) => {
            const external = isExternalHref(resource.href);

            const href = external
              ? resource.href
              : localizeHref(lang, resource.href);

            const cardClassName =
              index === 0
                ? "stagger-item flex min-h-0 flex-col justify-between border-atlas-blue/40 bg-surface-blue sm:min-h-72"
                : "stagger-item flex min-h-0 flex-col justify-between sm:min-h-72";

            const cardContent = (
              <>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-code leading-normal text-atlas-blue">
                      {resource.id}
                    </span>

                    <span className="border border-border bg-white px-2 py-1 font-mono text-caption uppercase leading-normal tracking-eyebrow text-muted">
                      {resource.items}
                    </span>
                  </div>

                  <h2 className="mt-8 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                    {resource.title}
                  </h2>

                  <p className="mt-4 text-body leading-8 text-muted">
                    {resource.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-border pt-4">
                  <span className="-my-2 inline-flex min-h-11 items-center gap-2 text-label font-semibold leading-normal text-atlas-blue">
                    {ui.browse}
                    <span aria-hidden="true">
                      {external ? "↗" : "→"}
                    </span>
                  </span>
                </div>
              </>
            );

            if (external) {
              return (
                <a
                  key={resource.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className={cardClassName}>
                    {cardContent}
                  </Card>
                </a>
              );
            }

            return (
              <Link
                key={resource.id}
                href={href}
                className="block"
              >
                <Card className={cardClassName}>
                  {cardContent}
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section id="library-cta" className="bg-white">
        <div className="border border-atlas-blue/25 bg-surface-blue p-5 sm:p-7 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{cta.eyebrow}</Eyebrow>

              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {cta.title}
              </h2>

              <p className="heading-description mt-5 max-w-2xl text-body leading-relaxed text-muted md:text-body-lg">
                {cta.description}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button
                className="w-full sm:w-auto"
                href={localizeHref(lang, cta.primaryButton.href)}
              >
                {cta.primaryButton.text}
                <span aria-hidden="true" className="text-white">
                  →
                </span>
              </Button>

              <a
                href={cta.secondaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-atlas-blue hover:text-atlas-blue sm:w-auto"
              >
                {cta.secondaryButton.text}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
