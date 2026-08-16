import Button from "@/components/website/Button";
import Section from "@/components/website/Section";
import { getProductsContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function DotIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[10px] size-1.5 shrink-0 rounded-full bg-atlas-blue"
    />
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-label leading-7 text-ink md:text-body"
        >
          <DotIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function RuntimeSensorGovernancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const productsContent = await getProductsContent(lang);
  const product = productsContent.productA;

  const labels =
    lang === "zh"
      ? {
          heroEyebrow: "Atlas Runtime Sensor Governance",
          audienceLabel: "服务对象",
          valueEyebrow: "核心价值",
          valueTitle: "把每一次传感器‘救火’，变成全产品线的‘防火经验’。",
          valueDescription:
            "Atlas 帮助传感器制造商围绕真实部署环境，为每一款传感器建立动态的 Runtime Profile™（运行时画像）。系统自动接收并解析来自 OEM 的协同调查包（EGP），将每一次 Sensor FAE 的现场排查，从一次性的“成本消耗”转化为结构化的“知识资产”。历史调查（IR）、根因案例（RGA）与经验教训（LL）由此被持续召回与复用，让传感器的现场表现成为驱动下一代产品定义的永动机。",
          architectureEyebrow: "集成架构",
          architectureTitle: "平台应用架构",
          architectureDescription:
            "Atlas 部署在 OEM / ODM 机器人运行时证据边界之上，连接 OEM 整机调查与传感器厂 FAE、研发和质量闭环，同时保持双方数据、调查资产与最终关闭权边界清晰。",
          architectureAlt:
            "Atlas 在传感器厂与 OEM、ODM 运维架构中的五层平台应用架构图",
          modulesEyebrow: "产品能力",
          modulesTitle: "传感器运行时治理核心模块",
          modulesDescription:
            "从运行时观察、证据接收、Sensor REF 调查，到 IR、LL 和 Sensor Assist Vault，形成完整的传感器调查闭环。",
          lifecycleEyebrow: "完整流程",
          lifecycleTitle: "从运行时观察到未来复用",
          lifecycleDescription:
            "每一次完成的 Sensor REF 调查，都会成为下一次相似问题的历史起点。",
          outcomeEyebrow: "持续积累",
          outcomeTitle: "让 Sensor FAE 不再从零开始",
          outcomeDescription:
            "传感器制造商可以在自己的实验室、FAE 支持环境或客户协同调查环境中建立并拥有自己的调查资产。Atlas 将当前调查与历史案例连接起来，让工程经验持续沉淀为组织能力。",
          ctaTitle: "从一个 Sensor SKU 和一个真实运行场景开始",
          ctaDescription:
            "告诉我们您的传感器产品、机器人应用环境和当前 FAE 调查流程，我们将共同确认 Runtime Profile、EGP 协作边界和 Pilot 范围。",
        }
      : {
          heroEyebrow: "Atlas Runtime Sensor Governance",
          audienceLabel: "Designed for",
          valueEyebrow: "Core Value",
          valueTitle:
            "Turn sensor runtime investigations into continuously growing organizational capability",
          valueDescription:
            "Atlas helps sensor manufacturers establish Runtime Profiles across real deployment environments, receive OEM Engagement Packs, and convert each Sensor FAE investigation into reusable historical investigation assets.",
          architectureEyebrow: "Integration Architecture",
          architectureTitle: "Platform Application Architecture",
          architectureDescription:
            "Atlas operates above the OEM / ODM robotics runtime evidence boundary, connecting OEM full-system investigation with sensor FAE, engineering, and quality workflows while keeping data, investigation assets, and closure authority clearly separated.",
          architectureAlt:
            "Five-layer Atlas platform application architecture for sensor manufacturers and OEM or ODM operations",
          modulesEyebrow: "Product Capabilities",
          modulesTitle: "Core Sensor Runtime Governance Modules",
          modulesDescription:
            "From runtime observation and evidence intake to Sensor REF investigation, IR, LL, and Sensor Assist Vault, Atlas creates a complete sensor investigation lifecycle.",
          lifecycleEyebrow: "Lifecycle",
          lifecycleTitle: "From Runtime Observation to Future Reuse",
          lifecycleDescription:
            "Every completed Sensor REF investigation becomes the historical starting point for the next related issue.",
          outcomeEyebrow: "Continuous Accumulation",
          outcomeTitle: "Sensor FAE investigations no longer start from zero",
          outcomeDescription:
            "Sensor manufacturers can establish and own their investigation assets in their laboratories, FAE support environments, or customer collaboration environments. Atlas connects current investigations with historical cases and turns engineering experience into organizational capability.",
          ctaTitle:
            "Start with one Sensor SKU and one real runtime scenario",
          ctaDescription:
            "Tell us about your sensor product, robotics deployment environment, and current FAE investigation workflow. Together, we will define the Runtime Profile, EGP collaboration boundary, and Pilot scope.",
        };

  return (
    <main className="bg-white">
      {/* Hero */}
      <Section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
            {labels.heroEyebrow}
          </p>

          <h1 className="mt-5 max-w-5xl whitespace-pre-line font-sans text-page-title font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
            {product.name}
          </h1>

          <div className="mt-6 inline-flex border border-sensor-tan/40 bg-sensor-tan/10 px-4 py-2">
            <span className="text-caption font-semibold text-sensor-tan-text">
              {labels.audienceLabel}：{product.audience}
            </span>
          </div>

        <p className="mt-7 max-w-4xl whitespace-pre-line text-body-lg leading-8 text-muted sm:text-body-lg-md sm:leading-9">
  {product.description}
</p>
        </div>
      </Section>

      {/* Value Points */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {labels.valueEyebrow}
            </p>

            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {labels.valueTitle}
            </h2>

            <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">
              {labels.valueDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.valuePoints.map((item, index) => (
              <article
                key={item}
                className="min-h-[190px] border border-border bg-white p-6"
              >
                <span className="font-mono text-caption font-semibold text-atlas-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-body font-semibold leading-8 text-ink">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Platform Application Architecture */}
      <Section className="border-y border-border bg-white">
        <div className="mx-auto max-w-[1600px]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {labels.architectureEyebrow}
            </p>

            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {labels.architectureTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-body leading-8 text-muted md:text-body-lg">
              {labels.architectureDescription}
            </p>
          </div>

          <div className="mt-10 overflow-hidden border border-atlas-blue/15 bg-white shadow-[0_24px_70px_rgba(5,40,90,0.10)]">
            <img
              src={
                lang === "zh"
                  ? "/images/product/runtime-sensor-governance-architecture-zh.png"
                  : "/images/product/runtime-sensor-governance-architecture-en.png"
              }
              alt={labels.architectureAlt}
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Core Modules */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {labels.modulesEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {labels.modulesTitle}
              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">
                {labels.modulesDescription}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {product.coreModules.map((module, index) => (
                <div
                  key={module}
                  className="min-h-[120px] bg-surface p-6"
                >
                  <span className="font-mono text-caption font-semibold text-atlas-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-label font-semibold leading-7 text-ink md:text-body">
                    {module}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Lifecycle */}
      <Section className="bg-[#050b17]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {labels.lifecycleEyebrow}
            </p>

            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">
              {labels.lifecycleTitle}
            </h2>

            <p className="mt-5 text-body leading-8 text-white/70 md:text-body-lg">
              {labels.lifecycleDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {product.lifecycle.map((step, index) => (
              <article
                key={step}
                className="flex min-h-[190px] flex-col border border-white/15 bg-white/[0.04] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-caption font-semibold text-atlas-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index < product.lifecycle.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-label text-white/45"
                    >
                      →
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 text-label font-semibold leading-7 text-white md:text-body">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Organizational Outcome */}
      <Section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {labels.outcomeEyebrow}
            </p>

            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {labels.outcomeTitle}
            </h2>

            <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">
              {labels.outcomeDescription}
            </p>
          </div>

          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-9">
            <FeatureList items={product.valuePoints} />
          </div>
        </div>
      </Section>

          {/* CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
            Atlas Runtime Sensor Governance™
          </p>

          <h2 className="mt-5 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {labels.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-body leading-8 text-muted md:text-body-lg">
            {labels.ctaDescription}
          </p>

          <div className="mt-9 flex justify-center">
            <Button href={localizeHref(lang, "/contact")}>
              {productsContent.ctaText}
            </Button>
          </div>
        </div>
      </Section>

      {/* Back to Products */}
      <Section className="border-t border-border bg-surface py-6">
        <div className="mx-auto flex max-w-6xl">
          <Button
            href={localizeHref(lang, "/products")}
            variant="secondary"
          >
            {lang === "zh"
              ? "← 返回产品主页"
              : "← Back to Products"}
          </Button>
        </div>
      </Section>
    </main>
  );
}
