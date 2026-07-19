import Image from "next/image";
import AtlasWorkflowDiagram from "@/components/website/AtlasWorkflowDiagram";
import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import homeContent from "@/content/zh/home";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted md:text-lg heading-description">
        {description}
      </p>
    </div>
  );
}

function ArrowLabel({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={inverse ? "text-white" : "text-atlas-blue"}
    >
      →
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
     <Section id="top" className="relative overflow-hidden bg-white min-h-[600px] lg:min-h-[700px]">

  {/* Hero artwork */}
  <Image
    src="/images/hero_mobile.png"
    alt="Atlas Runtime Governance"
    fill
    priority
    quality={100}
    unoptimized
    className="object-cover"
    style={{ objectPosition: 'center bottom' }}
  />

  {/* Overlay */}
<div className="absolute inset-0 flex items-start pt-8 sm:pt-24 lg:items-center lg:pt-0">
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

      <div className="max-w-[42rem]">

        <h1 className="
          font-semibold
          tracking-tight
          text-ink
          leading-[1.05]

          text-4xl
          sm:text-5xl
          lg:text-6xl
          heading-title
        ">
          机器人运行时
          <br />
          智能治理基础设施
        </h1>

        <p className="
          mt-6
          max-w-xl
          text-base
          sm:text-lg
          leading-7
          text-ink
          heading-description
        ">
          {homeContent.heroSubtitle}
        </p>

        <p className="
          mt-5
          text-sm
          sm:text-base
          font-semibold
          text-atlas-blue
        " style={{ animation: 'fadeInUp var(--duration-normal) var(--ease-sensordeck) both', animationDelay: '200ms' }}>
          {homeContent.heroValueProposition}
        </p>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 px-4 lg:static lg:mt-8 lg:justify-start lg:px-0">
  <Button href="/demo" variant="primary">
    {homeContent.ctas.primary}
  </Button>

  <Button href="/platform" variant="secondary">
    {homeContent.ctas.viewArchitecture}
  </Button>

  <Button href="/library/whitepaper" variant="secondary">
    {homeContent.ctas.readWhitePaper}
  </Button>
</div>
      </div>

    </div>
  </div>

</Section>
        {/* Category definition */}
        <Section id="category" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.categoryDefinition}
            eyebrow="01 / 类别"
            title={homeContent.sectionTitles.categoryDefinition}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="border-l-2 border-sensor-tan pl-6">
              <p className="text-2xl leading-10 tracking-tight text-ink">
                {homeContent.categoryDefinition.lead}
              </p>
              <p className="mt-6 font-mono text-xs leading-6 text-muted">
                Sensor → Runtime boundary → Evidence → Investigation → Memory
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {homeContent.categoryDefinition.points.map((point, index) => (
                <Card key={point.label} className="stagger-item">
                  <span className="font-mono text-xs text-sensor-tan">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                    {point.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Why runtime governance is missing */}
        <Section id="governance" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.whyRuntimeGovernance}
            eyebrow="02 / 缺口"
            title={homeContent.sectionTitles.whyRuntimeGovernance}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {homeContent.whyRuntimeGovernance.items.map((item, index) => (
              <Card key={item.label} className="stagger-item">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-sensor-tan">
                    0{index + 1}
                  </span>
                  <span className="size-2 rounded-full bg-border" />
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-ink">
                  {item.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex gap-4 border border-border bg-surface px-5 py-4 text-sm leading-7 text-muted md:px-6">
            <span className="mt-1 font-mono text-xs text-sensor-tan">/</span>
            <p>{homeContent.whyRuntimeGovernance.boundaryNote}</p>
          </div>
        </Section>

        {/* Two Atlas product lines */}
        <Section id="products" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.productLines}
            eyebrow="03 / 产品"
            title={homeContent.sectionTitles.productLines}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {homeContent.productLines.map((product, index) => (
              <Card
                className="flex flex-col overflow-hidden p-0"
                key={product.name}
              >
                <div
                  className={`border-b border-border p-6 md:p-8 ${
                    index === 0 ? "bg-white" : "bg-surface-blue"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      产品 0{index + 1}
                    </span>
                    <span className="border border-border bg-white px-2.5 py-1 text-xs font-semibold text-muted">
                      {product.audience}
                    </span>
                  </div>
                  <h3 className="mt-8 max-w-md text-2xl font-semibold tracking-tight text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                    {product.description}
                  </p>
                </div>
                <div className="grid flex-1 gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      核心模块
                    </p>
                    <ul className="mt-4 grid gap-2.5">
                      {product.modules.map((module) => (
                        <li
                          className="flex items-start gap-2 text-sm leading-6 text-ink"
                          key={module}
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      产品生命周期
                    </p>
                    <div className="mt-4 grid gap-2">
                      {product.lifecycle.map((step, stepIndex) => (
                        <div className="flex items-center gap-3" key={step}>
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[10px] text-muted">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-ink">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-border px-6 py-4 md:px-8">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                    href="#platform"
                  >
                    探索共享平台
                    <ArrowLabel />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Platform capabilities */}
        <Section id="platform" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.platformCapabilities}
            eyebrow="04 / 平台"
            title={homeContent.sectionTitles.platformCapabilities}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.platformCapabilities.map((capability, index) => (
              <Card
                className={`stagger-item ${index === 0 ? "border-atlas-blue/35 bg-surface-blue" : ""}`}
                key={capability.title}
              >
                <span className="font-mono text-xs text-sensor-tan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-3 border border-ink/15 bg-ink p-5 text-sm text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {homeContent.constitutionalBoundary.map((item, index) => (
              <div className="flex items-start gap-3" key={item}>
                <span className="font-mono text-xs text-sensor-tan">
                  0{index + 1}
                </span>
                <span className="leading-6 text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Investigation lifecycle */}
        <Section id="technology" className="bg-surface">
          <div id="lifecycle" className="scroll-mt-24">
            <SectionHeading
              description={homeContent.sectionDescriptions.investigationLifecycle}
              eyebrow="05 / 调查生命周期"
              title={homeContent.sectionTitles.investigationLifecycle}
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {homeContent.investigationLifecycle.map((step, index) => (
                <div
                  className="relative border border-border bg-white p-5 stagger-item"
                  key={step.label}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < homeContent.investigationLifecycle.length - 1 ? (
                      <ArrowLabel />
                    ) : null}
                  </div>
                  <h3 className="mt-8 text-sm font-semibold leading-6 text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  五窗口证据模型
                </p>
                <p className="mt-4 text-xl leading-8 tracking-tight text-ink">
                  Evidence is bounded around the runtime deviation, not treated
                  as an unlimited archive.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-5">
                {homeContent.fiveWindowModel.map((window, index) => (
                  <div
                    className={`border p-4 stagger-item ${
                      index === 2
                        ? "border-atlas-blue bg-surface-blue five-window-center"
                        : "border-border bg-white"
                    }`}
                    key={window}
                  >
                    <span className="font-mono text-[10px] text-muted">
                      0{index + 1}
                    </span>
                    <p className="mt-6 text-sm font-semibold text-ink">{window}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Built for the robotics industry */}
        <Section id="industry" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.roboticsIndustry}
            eyebrow="06 / 机器人行业"
            title={homeContent.sectionTitles.roboticsIndustry}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div className="border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Runtime surfaces
              </p>
              <div className="mt-6 grid gap-3">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="size-2 rounded-full bg-atlas-blue" />
                  <span className="text-sm font-semibold text-ink">传感器</span>
                </div>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="size-2 rounded-full bg-sensor-tan" />
                  <span className="text-sm font-semibold text-ink">
                    Power / Bus / Timing
                  </span>
                </div>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="size-2 rounded-full bg-ink" />
                  <span className="text-sm font-semibold text-ink">
                    Linux / SBC / ROS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full border border-ink bg-white" />
                  <span className="text-sm font-semibold text-ink">
                    OEM / Sensor teams
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {homeContent.roboticsIndustry.audiences.map((audience) => (
                  <span
                    className="border border-sensor-tan/40 bg-[#fbf6f1] px-3 py-2 text-xs font-semibold text-ink"
                    key={audience}
                  >
                    {audience}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {homeContent.roboticsIndustry.surfaces.map((surface, index) => (
                  <div
                    className="flex min-h-16 items-center gap-3 border border-border px-4 py-3"
                    key={surface}
                  >
                    <span className="font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink">{surface}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Evidence ownership and privacy */}
        <Section id="evidence" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.evidenceOwnership}
            eyebrow="07 / 证据边界"
            title={homeContent.sectionTitles.evidenceOwnership}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {homeContent.evidenceOwnership.principles.map((principle, index) => (
              <Card key={principle.label} className="stagger-item">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-sensor-tan">
                    0{index + 1}
                  </span>
                  <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Policy
                  </span>
                </div>
                <h3 className="mt-9 text-lg font-semibold tracking-tight text-ink">
                  {principle.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 border border-atlas-blue/25 bg-surface-blue p-5 md:grid-cols-[auto_1fr] md:items-start md:p-6">
            <span className="font-mono text-xs font-semibold text-atlas-blue">
              EGP
            </span>
            <p className="text-sm leading-7 text-ink">
              Sensor Engagement Pack is the bounded collaboration surface from
              an OEM to a sensor manufacturer. It is not the same as an
              internal Evidence Pack™.
            </p>
          </div>
        </Section>

        {/* Organizational memory / Historical RGA */}
        <Section id="memory" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.organizationalMemory}
            eyebrow="08 / 组织记忆"
            title={homeContent.sectionTitles.organizationalMemory}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="max-w-xl text-2xl leading-10 tracking-tight text-ink">
                Historical RGA™ 是人工调查团队的召回、复用和参考系统。
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                它不会自动学习、确认根本原因或分配责任。检索到的候选项会附带检索原因和仍然存在的环境差异。
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {homeContent.organizationalMemory.labels.map((label) => (
                  <span
                    className="border border-border bg-surface px-3 py-2 text-xs font-medium text-ink"
                    key={label}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <Card className="border-ink/15 !bg-ink !text-white opacity-100 transform-none">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                  Historical RGA™ / Recall candidate
                </span>
                <span className="font-mono text-xs text-sensor-tan">
                  {homeContent.organizationalMemory.recallExample.reference}
                </span>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-white/50">
                {homeContent.organizationalMemory.recallExample.status}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {homeContent.organizationalMemory.recallExample.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/70">
                {homeContent.organizationalMemory.recallExample.note}
              </p>
              <div className="mt-8 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                    检索原因
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    运行时表面重叠。
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                    审查边界
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    环境差异保持明确。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Technical white papers and documentation */}
        <Section id="resources" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.technicalResources}
            eyebrow="09 / 资料库"
            title={homeContent.sectionTitles.technicalResources}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.technicalResources.whitePapers.map((paper, index) => (
              <Card className="flex min-h-44 flex-col justify-between stagger-item arrow-parent" key={paper}>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-sensor-tan">
                    WP-{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="arrow-slide">
                    <ArrowLabel />
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-semibold leading-7 tracking-tight text-ink">
                  {paper}
                </h3>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-8 border border-border bg-white p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <Eyebrow>规范文档</Eyebrow>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                {homeContent.technicalResources.documentationDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href="https://docs.sensordeck.tech"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                {homeContent.ctas.documentation}
              </Button>
              <Button href="#request-demo" variant="secondary">
                {homeContent.ctas.overview}
              </Button>
            </div>
          </div>
        </Section>

        {/* Final contact CTA */}
        <Section id="request-demo" className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>10 / 开始对话</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  {homeContent.sectionTitles.finalCta}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  如果您正在探索运行时治理、传感器证据或调查工作流，欢迎与我们聊聊您的场景。
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  仅限示意性演示数据
                </p>
              </div>
              <Button href="/contact">
                联系我们
                <ArrowLabel inverse />
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
