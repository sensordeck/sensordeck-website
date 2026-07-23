import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import { getDemoContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";

import ProductVideosClient from "./ProductVideosClient";

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
      {/* Hero */}
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

      {/* Product videos */}
      <Section id="atlas-product-videos" className="bg-surface">
        <div className="max-w-4xl">
          <Eyebrow>Atlas 产品视频</Eyebrow>

          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            两条产品线，同一套运行时治理基础设施
          </h2>

          <p className="mt-5 max-w-3xl text-body leading-8 text-muted">
            通过两条产品线的演示视频，了解 Atlas Runtime
            Investigation™ 如何帮助机器人 OEM
            形成运行时证据和调查资产，以及 Atlas Runtime Sensor
            Governance™ 如何帮助传感器制造商建立运行时调查与客户协作能力。
          </p>
        </div>

        <div className="mt-12">
          <ProductVideosClient />
        </div>
      </Section>

      {/* Demo scenario */}
      <Section id="demo-context" className="bg-white">
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
              <p className="mt-2 text-ink">
                {content.data.customerName}
              </p>
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

      {/* Demo UI pages */}
      <Section id="demo-pages" className="bg-surface">
        <div className="max-w-4xl">
          <Eyebrow>Atlas Demo UI</Eyebrow>

          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            从调查受理到管理层视图
          </h2>

          <p className="mt-5 max-w-3xl text-body leading-8 text-muted">
            进入不同角色的演示页面，查看 Atlas
            如何组织运行时证据、调查协作和治理指标。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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

                <h3 className="mt-8 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                  {page.title}
                </h3>

                <p className="mt-4 text-body leading-relaxed text-muted">
                  {page.description}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <div className="mb-3 text-caption text-muted">
                  {page.audience}
                </div>

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

      {/* Notice */}
      <Section id="demo-notice" className="bg-white">
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

      {/* CTA */}
      <Section id="demo-cta" className="bg-surface">
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
