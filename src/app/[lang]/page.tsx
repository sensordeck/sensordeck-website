import Image from "next/image";
import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { getHomeContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const homeContent = await getHomeContent(lang);
  const categoryImage =
    lang === "en"
      ? "/images/Sensordeck 1e.png"
      : "/images/Sensordeck 1.png";
  const problemImage =
    lang === "en"
      ? "/images/Sensordeck 2e.png"
      : "/images/Sensordeck 2.png";

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
     <section id="top" className="relative min-h-[680px] overflow-hidden border-b border-border bg-white sm:min-h-[640px] lg:min-h-[700px]">

  {/* Hero artwork */}
  {/* Desktop Hero */}
<Image
  src="/images/Sensordeck_hero3.png"
  alt="Atlas Runtime Governance"
  fill
  priority
  quality={100}
  unoptimized
  className="hidden lg:block object-cover"
  style={{ objectPosition: "left" }}
/>

{/* Mobile Hero */}
<Image
  src="/images/hero_mobile.png"
  alt="Atlas Runtime Governance"
  fill
  priority
  quality={100}
  unoptimized
  className="block lg:hidden object-cover"
  style={{ objectPosition: "center center" }}
/>
  {/* Overlay */}
<div className="absolute inset-0 flex items-start pt-8 sm:pt-20 lg:items-center lg:pt-0">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="max-w-[42rem]">

        <h1 className="
          font-semibold
          tracking-tight
          text-ink
          leading-[1.05]
          whitespace-pre-line

          text-4xl
          sm:text-5xl
          lg:text-6xl
          heading-title
        ">
          {homeContent.heroTitle}
        </h1>
        {/* Desktop */}
        <p className="
          hidden
          lg:block
          mt-3
          max-w-xl
          text-base
          sm:text-lg
          leading-7
          whitespace-pre-line
          text-ink
          heading-description
        ">
           {homeContent.heroSubtitleDesktop}
        </p>
        {/* Mobile */}
        <p className="
          block
          lg:hidden
          mt-3
          max-w-xl
          text-base
          sm:text-lg
          leading-7
          text-ink
          heading-description
        ">
         {homeContent.heroSubtitleMobile}
        </p>
       <p
  className="
    mt-3
    text-sm
    sm:text-base
    font-semibold
    text-atlas-blue
    whitespace-pre-line
  "
>
  {homeContent.heroValueProposition}
</p>

        <div className="absolute inset-x-4 bottom-4 mx-auto flex max-w-md flex-col gap-2 sm:inset-x-6 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:static lg:mx-0 lg:mt-8 lg:justify-start lg:px-0">
  <Button className="w-full sm:w-auto" href={localizeHref(lang, "/demo")} variant="primary">
    {homeContent.ctas.primary}
  </Button>

  <Button className="w-full sm:w-auto" href={localizeHref(lang, "/platform")} variant="secondary">
    {homeContent.ctas.viewArchitecture}
  </Button>

  <Button className="w-full sm:w-auto" href={localizeHref(lang, "/library/white-papers")} variant="secondary">
    {homeContent.ctas.readWhitePaper}
  </Button>
</div>
      </div>

    </div>
  </div>

</section>
        {/* Category definition */}
        <Section id="category" className="bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-atlas-blue uppercase mb-4">
                {homeContent.ui.sectionEyebrows.categoryDefinition}
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-6">
                {homeContent.sectionTitles.categoryDefinition}
              </h2>
              <p className="text-base lg:text-lg leading-8 text-muted mb-8">
                {homeContent.sectionDescriptions.categoryDefinition}
              </p>
              <Button href={localizeHref(lang, "/category")} variant="secondary">
                {homeContent.ui.learnMore}
                <ArrowLabel />
              </Button>
            </div>

            <div>
              <Image
                src={categoryImage}
                alt={homeContent.ui.categoryImageAlt}
                width={2000}
                height={1200}
                quality={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Section>

        {/* The problem */}
        <Section id="problem" className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-atlas-blue uppercase mb-4">
                {homeContent.ui.sectionEyebrows.theProblem}
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-6">
                {homeContent.sectionTitles.theProblem}
              </h2>
              <p className="text-base lg:text-lg leading-8 text-muted mb-8">
                {homeContent.sectionDescriptions.theProblem}
              </p>
              <Button href={localizeHref(lang, "/problem")} variant="secondary">
                {homeContent.theProblem.cta}
              </Button>
            </div>

            <div>
              <Image
                src={problemImage}
                alt={homeContent.ui.problemImageAlt}
                width={2065}
                height={762}
                quality={100}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </Section>

        {/* Why runtime governance is missing */}
        <Section id="governance" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.whyRuntimeGovernance}
            eyebrow={homeContent.ui.sectionEyebrows.whyRuntimeGovernance}
            title={homeContent.sectionTitles.whyRuntimeGovernance}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {homeContent.whyRuntimeGovernance.items.map((item: {label: string; description: string}, index: number) => (
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
        <Section id="products" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.productLines}
            eyebrow={homeContent.ui.sectionEyebrows.productLines}
            title={homeContent.sectionTitles.productLines}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {homeContent.productLines.map((product, index) => (
              <div
                className={`rounded-lg border p-6 card-enter flex flex-col overflow-hidden p-0 ${
                  index === 0
                    ? "bg-surface-blue border-surface-blue"
                    : "bg-surface-orange border-surface-orange"
                }`}
                key={product.name}
              >
                <div
                  className={`border-b border-border p-6 md:p-8 ${
                    index === 0 ? "bg-surface-blue" : "bg-surface-orange"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {homeContent.ui.productLabel} 0{index + 1}
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

                <div className={`grid flex-1 gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8 ${
                  index === 0 ? "bg-surface-blue" : "bg-surface-orange"
                }`}>
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {homeContent.ui.coreModules}
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
                      {homeContent.ui.productLifecycle}
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

                <div className={`border-t border-border px-6 py-5 md:px-8 ${
                  index === 0 ? "bg-surface-blue" : "bg-surface-orange"
                }`}>
                  <Button href={localizeHref(lang, product.link)} variant="secondary" className="w-full sm:w-auto">
                    {homeContent.ui.learnMore}
                    <ArrowLabel />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Platform capabilities */}
        <Section id="platform" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.platformCapabilities}
            eyebrow={homeContent.ui.sectionEyebrows.platformCapabilities}
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
        </Section>

        {/* Investigation lifecycle */}
        <Section id="technology" className="bg-white">
          <div id="lifecycle" className="scroll-mt-24">
            <SectionHeading
              description={homeContent.sectionDescriptions.investigationLifecycle}
              eyebrow={homeContent.ui.sectionEyebrows.investigationLifecycle}
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
                  {homeContent.ui.fiveWindowModel}
                </p>
                <p className="mt-4 text-xl leading-8 tracking-tight text-ink">
                  {homeContent.ui.fiveWindowDescription}
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
        <Section id="industry" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.roboticsIndustry}
            eyebrow={homeContent.ui.sectionEyebrows.roboticsIndustry}
            title={homeContent.sectionTitles.roboticsIndustry}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div className="border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {homeContent.ui.runtimeSurfaces}
              </p>
              <div className="mt-6 grid gap-3">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="size-2 rounded-full bg-atlas-blue" />
                  <span className="text-sm font-semibold text-ink">
                    {homeContent.ui.sensor}
                  </span>
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
        <Section id="evidence" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.evidenceOwnership}
            eyebrow={homeContent.ui.sectionEyebrows.evidenceOwnership}
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
                    {homeContent.ui.policy}
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
              {homeContent.ui.egpDescription}
            </p>
          </div>
        </Section>

        {/* Organizational memory / Historical RGA */}
        <Section id="memory" className="bg-surface">
          <SectionHeading
            description={homeContent.sectionDescriptions.organizationalMemory}
            eyebrow={homeContent.ui.sectionEyebrows.organizationalMemory}
            title={homeContent.sectionTitles.organizationalMemory}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="max-w-xl text-2xl leading-10 tracking-tight text-ink">
                {homeContent.ui.historicalRgaDescription}
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {homeContent.ui.historicalRgaBoundary}
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
                  {homeContent.ui.recallCandidate}
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
                    {homeContent.ui.retrievalReason}
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    {homeContent.ui.retrievalReasonValue}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                    {homeContent.ui.reviewBoundary}
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    {homeContent.ui.reviewBoundaryValue}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Technical white papers and documentation */}
        <Section id="resources" className="bg-white">
          <SectionHeading
            description={homeContent.sectionDescriptions.technicalResources}
            eyebrow={homeContent.ui.sectionEyebrows.technicalResources}
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
              <Eyebrow>{homeContent.ui.documentation}</Eyebrow>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                {homeContent.technicalResources.documentationDescription}
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button
                className="w-full sm:w-auto"
                href="https://docs.sensordeck.tech"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                {homeContent.ctas.documentation}
              </Button>
              <Button className="w-full sm:w-auto" href="#contact-form" variant="secondary">
                {homeContent.ctas.overview}
              </Button>
            </div>
          </div>
        </Section>

        {/* Final contact CTA */}
        <Section id="final-cta" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>{homeContent.ui.sectionEyebrows.finalCta}</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  {homeContent.sectionTitles.finalCta}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  {homeContent.ui.finalCtaDescription}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {homeContent.ui.illustrativeDemoData}
                </p>
              </div>
              <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")}>
                {homeContent.ui.contactUs}
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
