import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import { getDemoContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>
  );
}

export default async function DemoIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getDemoContent(lang);

  return (
    <div className="bg-white font-sans text-ink">
      <Section id="demo-hero" className="bg-white">
        <div className="max-w-4xl">
          <Eyebrow>{content.index.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-sans text-page-title font-semibold leading-tight tracking-tight text-ink md:text-page-title-md lg:text-page-title-lg">
            {content.index.hero.title}
          </h1>
          <p className="mt-7 text-body-lg leading-relaxed text-muted md:text-body-lg-md">
            {content.index.hero.description}
          </p>
        </div>
      </Section>

      <Section id="demo-context" className="bg-surface">
        <div className="border border-border bg-white p-6 md:p-8">
          <Eyebrow>{content.index.scenario.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {content.index.scenario.title}
          </h2>
          <div className="mt-6 grid gap-4 text-label md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.customer}
              </p>
              <p className="mt-2 text-ink">{content.data.customerName}</p>
            </div>
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.robotSerialNumber}
              </p>
              <p className="mt-2 font-mono text-code text-ink">
                {refData.robot_sn}
              </p>
            </div>
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.refId}
              </p>
              <p className="mt-2 font-mono text-code text-ink">
                {refData.ref_id}
              </p>
            </div>
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.primaryEvidencePack}
              </p>
              <p className="mt-2 font-mono text-code text-ink">
                {refData.primary_ep}
              </p>
            </div>
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.egpId}
              </p>
              <p className="mt-2 font-mono text-code text-ink">
                {refData.egp_id}
              </p>
            </div>
            <div>
              <p className="font-mono text-code text-sensor-tan-text">
                {content.index.scenario.sensorFae}
              </p>
              <p className="mt-2 text-ink">
                {content.data.ref.sensorFaeName} (
                {content.data.ref.sensorFaeVendor})
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="demo-pages" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          {content.index.pages.map((page) => (
            <Card
              className="flex min-h-72 flex-col justify-between"
              key={page.id}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-code text-sensor-tan-text">
                    {page.id}
                  </span>
                  <span className="border border-border px-2 py-1 font-mono text-eyebrow uppercase tracking-eyebrow text-muted">
                    {page.role}
                  </span>
                </div>
                <h2 className="mt-8 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                  {page.title}
                </h2>
                <p className="mt-4 text-body leading-relaxed text-muted">
                  {page.description}
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <div className="mb-3 text-caption text-muted">{page.audience}</div>
                <Link
                  className="inline-flex items-center gap-2 text-label font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                  href={localizeHref(lang, page.href)}
                >
                  {content.index.viewDemo}
                  <ArrowLabel />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="demo-notice" className="bg-surface">
        <div className="border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 font-mono text-code text-atlas-blue">
              {content.index.notice.label}
            </span>
            <div>
              <p className="text-body leading-relaxed text-ink">
                {content.index.notice.description}
              </p>
              <p className="mt-4 text-body leading-relaxed text-muted">
                {content.index.notice.metrics}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="demo-cta" className="bg-white">
        <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>{content.index.cta.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {content.index.cta.title}
              </h2>
              <p className="mt-5 text-body leading-relaxed text-muted">
                {content.index.cta.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:contact@sensordeck.tech">
                {content.index.cta.button}
                <span aria-hidden="true" className="text-white">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
