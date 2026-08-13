import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import { getDemoContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";

import ProductVideosClient from "../../demo/ProductVideosClient";
import { LifecycleRail } from "@/components/demo/AtlasDemo";
import { getDemoLocale } from "@/data/demo/scenario";

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
  const { scenario: demoScenario, copy: demoCopy } = getDemoLocale(lang);
  const pageCopy =
    lang === "zh"
      ? {
          heroEyebrow: "Atlas 演示",
          heroTitle: "产品演示与交互式界面",
          heroDescription:
            "通过两条产品线的视频和四个角色的交互式演示界面，了解 Atlas 如何组织运行时证据、支持调查协作，并将完成的调查沉淀为可复用的组织资产。",
          videosEyebrow: "Atlas 产品视频",
          videosTitle: "两条产品线，同一套运行时治理基础设施",
          videosDescription:
            "通过两条产品线的演示视频，了解 Atlas Runtime Investigation™ 如何帮助机器人 OEM 形成运行时证据和调查资产，以及 Atlas Runtime Sensor Governance™ 如何帮助传感器制造商建立运行时调查与客户协作能力。",
          interfacesEyebrow: "Atlas Demo UI",
          interfacesTitle: "从调查受理到管理层视图",
          interfacesDescription:
            "进入不同角色的演示页面，查看 Atlas 如何组织运行时证据、调查协作和治理指标。",
          interactiveDemo: {
            eyebrow: "Atlas V3 交互式演示",
            title: "打开完整 Atlas 调查工作台",
            description: "使用 Atlas v0.1.0 已脱敏冻结演示快照，查看 Evidence Pack、REF、历史 RGA、Context、Tier、EGP、IR / LL、Closure 与 Assist Vault 的完整受控调查链路。",
            meta: "演示 UI Only · 实际部署按客户组织方式定制",
            button: "打开 Atlas V3 演示界面",
          },
        }
      : {
          heroEyebrow: "Atlas Demos",
          heroTitle: "Product Demos and Interactive Interfaces",
          heroDescription:
            "Explore videos for both product lines and interactive demo interfaces for four roles to see how Atlas organizes runtime evidence, supports investigation collaboration, and turns completed investigations into reusable organizational assets.",
          videosEyebrow: "Atlas Product Videos",
          videosTitle:
            "Two Product Lines, One Runtime Governance Infrastructure",
          videosDescription:
            "Watch demo videos for both product lines to see how Atlas Runtime Investigation™ helps robot OEMs create runtime evidence and investigation assets, and how Atlas Runtime Sensor Governance™ helps sensor manufacturers establish runtime investigation and customer collaboration capabilities.",
          interfacesEyebrow: "Atlas Demo UI",
          interfacesTitle: "From Investigation Intake to Executive View",
          interfacesDescription:
            "Enter the role-specific demo pages to see how Atlas organizes runtime evidence, investigation collaboration, and governance metrics.",
          interactiveDemo: {
            eyebrow: "Atlas V3 Interactive Demo",
            title: "Open the Complete Atlas Investigation Workspace",
            description: "Explore the complete governed investigation chain across Evidence Pack, REF, Historical RGA, Context, Tier, EGP, IR / LL, Closure, and Assist Vault using a sanitized Atlas v0.1.0 frozen demo snapshot.",
            meta: "Demo UI only · Production deployment is tailored to the customer organization",
            button: "Open the Atlas V3 Demo",
          },
        };

  return (
    <div className="bg-white font-sans text-ink">
     {/* Hero */}
<Section id="demo-hero" className="bg-white">
  <div className="max-w-4xl">
    <Eyebrow>{pageCopy.heroEyebrow}</Eyebrow>

    <h1 className="mt-5 font-sans text-page-title font-semibold leading-tight tracking-tight text-ink md:text-page-title-md lg:text-page-title-lg">
      {pageCopy.heroTitle}
    </h1>

    <p className="mt-7 max-w-3xl text-body-lg leading-relaxed text-muted md:text-body-lg-md">
      {pageCopy.heroDescription}
    </p>
  </div>
</Section>

      {/* Atlas V3 interactive demo */}
      <Section id="atlas-v3-demo" className="bg-surface">
        <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{pageCopy.interactiveDemo.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{pageCopy.interactiveDemo.title}</h2>
              <p className="mt-5 text-body leading-8 text-muted">{pageCopy.interactiveDemo.description}</p>
              <p className="mt-4 font-mono text-code text-sensor-tan-text">{pageCopy.interactiveDemo.meta}</p>
            </div>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 bg-atlas-blue px-6 py-3 text-label font-semibold text-white transition-colors hover:bg-atlas-blue-dark" href={`https://atlas-investigation-ui.vercel.app/${lang}/`} rel="noopener noreferrer" target="_blank">
              {pageCopy.interactiveDemo.button}<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Product videos */}
      <Section id="atlas-product-videos" className="bg-surface">
        <div className="max-w-4xl">
          <Eyebrow>{pageCopy.videosEyebrow}</Eyebrow>

          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {pageCopy.videosTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-body leading-8 text-muted">
            {pageCopy.videosDescription}
          </p>
        </div>

        <div className="mt-12">
          <ProductVideosClient lang={lang} />
        </div>
      </Section>

    {/* Demo scenario */}
<Section id="demo-scenario" className="bg-white">
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
          <Eyebrow>{pageCopy.interfacesEyebrow}</Eyebrow>

          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {pageCopy.interfacesTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-body leading-8 text-muted">
            {pageCopy.interfacesDescription}
          </p>
          <p className="mt-4 border-l-4 border-yellow-500 bg-yellow-50 p-4 text-body leading-relaxed text-ink">
            {lang === "zh" ? `同一个 Demo Robotics 案例的四个角色视图 · ${demoScenario.ref} · 已脱敏演示数据 · 人工治理的调查 · ${demoCopy.governanceBoundary}` : `Four role views of the same Demo Robotics case · ${demoScenario.ref} · Sanitized demo data · Human-governed investigation.`}
          </p>
        </div>

        <div className="mt-8"><LifecycleRail lang={lang} /></div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.index.pages.map((page) => (
            <Card
              className="flex min-h-72 flex-col justify-between border-t-4 border-t-atlas-blue bg-white"
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
                <dl className="mt-5 grid gap-2 border-t border-border pt-4 text-caption">
                  <div><dt className="text-muted">{lang === "zh" ? "当前阶段" : "Current stage"}</dt><dd className="font-semibold text-ink">{(lang === "zh" ? ["REF / 运行时数据集", "EP / 历史 RGA / 调查上下文", "EGP / 传感器调查结果（IR）/ 传感器经验教训（LL）", "OEM 结案 / 辅助知识库"] : ["REF / Runtime Dataset", "EP / Historical RGA / Context", "EGP / Sensor IR / LL", "OEM Closure / Assist Vault"])[Number(page.id)-1]}</dd></div>
                  <div><dt className="text-muted">{lang === "zh" ? "调查资产" : "Artifact"}</dt><dd className="font-mono text-code text-ink">{[demoScenario.ref, demoScenario.evidencePack, demoScenario.engagementPack, lang === "zh" ? "治理指标" : "Governance Metrics"][Number(page.id)-1]}</dd></div>
                </dl>
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
              <Button href={localizeHref(lang, "/contact")}>
                {content.index.cta.button}
                <span aria-hidden="true" className="text-white">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section id="navigation" className="bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <Link
            className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
            href={localizeHref(lang, "/library/documentation")}
          >
            {lang === "zh" ? "← 企业交付" : "← Enterprise Delivery"}
          </Link>
          <Link
            className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
            href={localizeHref(lang, "/library/faq")}
          >
            {lang === "zh" ? "常见问题 →" : "FAQ →"}
          </Link>
        </div>
      </Section>
    </div>
  );
}
