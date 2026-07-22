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

  return (
    <div className="bg-white">
      {/* Problem Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-atlas-blue">
            {content.eyebrow}
          </p>

          <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {homeContent.theProblem.lead}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg sm:leading-8">
            {homeContent.sectionDescriptions.theProblem}
          </p>

          <p className="mt-8 text-base font-semibold text-atlas-blue sm:text-lg">
            {homeContent.theProblem.cta}
          </p>
        </div>
      </Section>

      {/* Main Comparison Image */}
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

      {/* Comparison Details */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">
            {content.comparisonTitle}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-border">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {homeContent.theProblem.comparison.withoutAtlas.title}
              </h3>

              <div className="mt-6 space-y-3">
                {homeContent.theProblem.comparison.withoutAtlas.steps.map(
                  (step, index) => (
                    <div key={step}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-sensor-tan-text">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-base text-ink">{step}</span>
                      </div>

                      {index <
                        homeContent.theProblem.comparison.withoutAtlas.steps
                          .length -
                          1 && (
                        <div className="ml-6 mt-2 text-muted">↓</div>
                      )}
                    </div>
                  ),
                )}
              </div>

              <p className="mt-6 text-sm font-semibold text-muted">
                {homeContent.theProblem.comparison.withoutAtlas.note}
              </p>
            </Card>

            <Card className="border-2 border-atlas-blue bg-surface-blue">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {homeContent.theProblem.comparison.withAtlas.title}
              </h3>

              <div className="mt-6 space-y-3">
                {homeContent.theProblem.comparison.withAtlas.steps.map(
                  (step, index) => (
                    <div key={step}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-atlas-blue">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-base font-medium text-ink">
                          {step}
                        </span>
                      </div>

                      {index <
                        homeContent.theProblem.comparison.withAtlas.steps
                          .length -
                          1 && (
                        <div className="ml-6 mt-2 text-atlas-blue">↓</div>
                      )}
                    </div>
                  ),
                )}
              </div>

              <p className="mt-6 text-sm font-semibold text-atlas-blue">
                {homeContent.theProblem.comparison.withAtlas.note}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why It Matters */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-5xl">
          <div className="border border-border bg-white p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {homeContent.theProblem.whyMatters.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-muted">
              {homeContent.theProblem.whyMatters.description}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-ink">
            {content.ctaTitle}
          </h2>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
    </div>
  );
}
