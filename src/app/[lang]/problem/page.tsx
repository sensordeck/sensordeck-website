import Image from 'next/image';
import Section from '@/components/website/Section';
import Button from '@/components/website/Button';
import Card from '@/components/website/Card';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { getAuxiliaryPagesContent, getHomeContent } from '@/lib/content';
import { isValidLocale, localizeHref } from '@/lib/i18n';
import { notFound } from 'next/navigation';

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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
      {/* Hero Section */}
      <Section className="bg-surface">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wide text-atlas-blue uppercase mb-4">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-6">
            {homeContent.sectionTitles.theProblem}
          </h1>
          <p className="text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {homeContent.sectionDescriptions.theProblem}
          </p>
        </div>
      </Section>

      {/* Lead 文字 */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-8 text-xl leading-9 tracking-tight text-ink sm:text-2xl sm:leading-10">
            {homeContent.theProblem.lead}
          </p>
          <p className="text-xl font-semibold text-atlas-blue">
            {homeContent.theProblem.cta}
          </p>
        </div>
      </Section>

      {/* 大图展示 */}
      <Section className="bg-surface">
        <div className="mt-12">
          <Image
            src={lang === "en" ? "/images/Sensordeck 2e.png" : "/images/Sensordeck 2.png"}
            alt={content.imageAlt}
            width={2065}
            height={762}
            quality={100}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </Section>

      {/* 对比说明 */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-ink text-center mb-12">
            {content.comparisonTitle}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-border">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {homeContent.theProblem.comparison.withoutAtlas.title}
              </h3>
              <div className="mt-6 space-y-3">
                {homeContent.theProblem.comparison.withoutAtlas.steps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sensor-tan">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base text-ink">{step}</span>
                    </div>
                    {index < homeContent.theProblem.comparison.withoutAtlas.steps.length - 1 && (
                      <div className="ml-6 mt-2 text-muted">↓</div>
                    )}
                  </div>
                ))}
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
                {homeContent.theProblem.comparison.withAtlas.steps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-atlas-blue">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base font-medium text-ink">{step}</span>
                    </div>
                    {index < homeContent.theProblem.comparison.withAtlas.steps.length - 1 && (
                      <div className="ml-6 mt-2 text-atlas-blue">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-atlas-blue">
                {homeContent.theProblem.comparison.withAtlas.note}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* 为什么重要 */}
      <Section className="bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="border border-border bg-white p-5 sm:p-8 md:p-12">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              {homeContent.theProblem.whyMatters.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-muted">
              {homeContent.theProblem.whyMatters.description}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-6">
            {content.ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")} variant="primary">
              {content.requestDemo}
            </Button>
            <Button className="w-full sm:w-auto" href={localizeHref(lang, "/")} variant="secondary">
              {content.backHome}
            </Button>
          </div>
        </div>
      </Section>
      </main>
      <Footer />
    </div>
  );
}
