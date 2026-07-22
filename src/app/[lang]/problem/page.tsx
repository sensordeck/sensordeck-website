import Image from "next/image";
import Section from "@/components/website/Section";
import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import {
  getAuxiliaryPagesContent,
  getHomeContent,
} from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const [homeContent, auxiliaryContent] = await Promise.all([
    getHomeContent(lang),
    getAuxiliaryPagesContent(lang),
  ]);

  const content = auxiliaryContent.problem;
  const problem = homeContent.theProblem;

  return (
    <main className="bg-white">
      {/* Page Introduction */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
            {content.eyebrow}
          </p>

          <h1 className="mx-auto max-w-4xl font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
            {homeContent.sectionTitles.theProblem}
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-body-lg leading-9 text-muted sm:text-body-lg-md sm:leading-10">
            {problem.lead}
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-body-lg leading-9 text-muted sm:text-body-lg-md sm:leading-10">
            {homeContent.sectionDescriptions.theProblem}
          </p>
        </div>
      </Section>

      {/* Main Problem Image */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-7xl">
          <Image
            src={
              lang === "en"
                ? "/images/Sensordeck 2e.png"
                : "/images/Sensordeck 2.png"
            }
            alt={content.imageAlt}
            width={2065}
            height={762}
            quality={100}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      </Section>

      {/* Investigation Comparison */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {content.comparisonTitle}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="h-full border-2 border-border bg-white p-6 sm:p-8">
              <div className="border-b border-border pb-5">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  01
                </p>

                <h3 className="mt-3 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {problem.comparison.withoutAtlas.title}
                </h3>
              </div>

              <div className="mt-7">
                {problem.comparison.withoutAtlas.steps.map((step, index) => (
                  <div key={`${step}-${index}`}>
                    <div className="flex min-h-12 items-center gap-4">
                      <span className="w-7 shrink-0 font-mono text-caption text-sensor-tan-text">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-body leading-7 text-ink">
                        {step}
                      </span>
                    </div>

                    {index <
                      problem.comparison.withoutAtlas.steps.length - 1 && (
                      <div className="ml-[13px] h-5 border-l border-border" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-border pt-5 text-label font-semibold leading-6 text-muted">
                {problem.comparison.withoutAtlas.note}
              </p>
            </Card>

            <Card className="h-full border-2 border-atlas-blue bg-surface-blue p-6 sm:p-8">
              <div className="border-b border-atlas-blue/20 pb-5">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  02
                </p>

                <h3 className="mt-3 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {problem.comparison.withAtlas.title}
                </h3>
              </div>

              <div className="mt-7">
                {problem.comparison.withAtlas.steps.map((step, index) => (
                  <div key={`${step}-${index}`}>
                    <div className="flex min-h-12 items-center gap-4">
                      <span className="w-7 shrink-0 font-mono text-caption text-atlas-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-body font-medium leading-7 text-ink">
                        {step}
                      </span>
                    </div>

                    {index < problem.comparison.withAtlas.steps.length - 1 && (
                      <div className="ml-[13px] h-5 border-l border-atlas-blue/30" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-atlas-blue/20 pt-5 text-label font-semibold leading-6 text-atlas-blue">
                {problem.comparison.withAtlas.note}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why It Matters */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border border-border bg-white p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-14">
            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                03 / 为什么重要
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {problem.whyMatters.title}
              </h2>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-16">
              <p className="text-body-lg leading-9 text-muted">
                {problem.whyMatters.description}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing Statement */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
            Atlas Runtime Governance
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {content.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-body leading-8 text-muted sm:text-body-lg sm:leading-9">
            {problem.comparison.withAtlas.note}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              href={localizeHref(lang, "/contact")}
              variant="primary"
            >
              {content.requestDemo}
            </Button>

            <Button
              className="w-full sm:w-auto"
              href={localizeHref(lang, "/")}
              variant="secondary"
            >
              {content.backHome}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
