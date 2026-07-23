import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";

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
    <main className="bg-white font-sans text-ink">
      <Section
        id="library-hero"
        className="relative overflow-hidden border-b border-border bg-white"
      >
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
          aria-hidden="true"
        >
          <div className="absolute right-[-18%] top-[-22%] h-[520px] w-[520px] rounded-full border border-atlas-blue/10" />
          <div className="absolute right-[-4%] top-[4%] h-[360px] w-[360px] rounded-full border border-atlas-blue/15" />
          <div className="absolute right-[10%] top-[28%] h-[180px] w-[180px] rounded-full bg-surface-blue" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-5xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <h1 className="heading-title mt-5 max-w-4xl font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
              {hero.title}
            </h1>

            <p className="heading-description mt-6 max-w-3xl text-body-lg leading-relaxed text-muted sm:mt-7 sm:text-body-lg-md">
              {hero.subtitle}
            </p>
          </div>

          <div className="hidden border-l border-border pl-7 lg:block">
            <p className="font-mono text-caption font-semibold uppercase tracking-eyebrow text-atlas-blue">
              Atlas Runtime Governance™
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Product demonstrations, technical references, deployment
              guidance, and release information for engineering and management
              teams.
            </p>
          </div>
        </div>
      </Section>

      <Section id="start-here" className="bg-surface">
        <div className="mb-10 max-w-3xl md:mb-14">
          <Eyebrow>Start Here</Eyebrow>

          <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            Explore Atlas by Objective
          </h2>

          <p className="heading-description mt-5 text-body leading-relaxed text-muted md:text-body-lg">
            Choose the resource that best matches your evaluation, deployment,
            or investigation objective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ui.resourceCards.map((resource, index) => {
            const external = isExternalHref(resource.href);
            const href = external
              ? resource.href
              : localizeHref(lang, resource.href);

            const cardClassName =
              index === 0
                ? "stagger-item group flex h-full min-h-0 flex-col justify-between border-atlas-blue/35 bg-surface-blue transition duration-200 hover:-translate-y-1 hover:border-atlas-blue/60 hover:shadow-sm sm:min-h-[320px]"
                : "stagger-item group flex h-full min-h-0 flex-col justify-between bg-white transition duration-200 hover:-translate-y-1 hover:border-atlas-blue/40 hover:shadow-sm sm:min-h-[320px]";

            const cardContent = (
              <>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-code font-semibold leading-normal text-atlas-blue">
                      {resource.id}
                    </span>

                    <span className="border border-border bg-white px-2.5 py-1 font-mono text-caption uppercase leading-normal tracking-eyebrow text-muted">
                      {resource.items}
                    </span>
                  </div>

                  <h3 className="mt-9 max-w-xl font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                    {resource.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-body leading-8 text-muted">
                    {resource.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-5">
                  <span className="inline-flex min-h-11 items-center gap-2 text-label font-semibold leading-normal text-atlas-blue">
                    {ui.browse}

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
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
                  className="block h-full"
                >
                  <Card className={cardClassName}>{cardContent}</Card>
                </a>
              );
            }

            return (
              <Link
                key={resource.id}
                href={href}
                className="block h-full"
              >
                <Card className={cardClassName}>{cardContent}</Card>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section id="documentation-coverage" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <Eyebrow>{ui.quickAccessEyebrow}</Eyebrow>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {ui.quickAccessTitle}
            </h2>

            <p className="heading-description mt-5 text-body leading-relaxed text-muted md:text-body-lg">
              {ui.documentationHosting}
            </p>

            <div className="mt-8 border-l-2 border-atlas-blue bg-surface-blue px-5 py-4">
              <p className="text-sm leading-7 text-muted">
                English documentation is being developed. The current technical
                documentation center is available in Chinese.
              </p>
            </div>

            <a
              href="https://sensordeck.github.io/atlas-docs-cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-press button-hover mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {ui.viewDocumentation}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <p className="font-mono text-caption font-semibold uppercase tracking-eyebrow text-muted">
              {ui.documentationTopics}
            </p>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
              {ui.documentationReferenceTitle}
            </h3>

            <div className="mt-8 grid border-l border-t border-border sm:grid-cols-2">
              {ui.documentationUseCases.map((topic, index) => (
                <div
                  key={topic}
                  className="flex min-h-24 items-start gap-4 border-b border-r border-border bg-white p-5"
                >
                  <span className="mt-0.5 font-mono text-caption font-semibold text-atlas-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold leading-6 text-ink">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="library-cta" className="border-t border-border bg-surface">
        <div className="border border-atlas-blue/25 bg-surface-blue p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
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
    </main>
  );
}
