import { AnimatedSection } from "@/components/website/AnimatedSection";
import Button from "@/components/website/Button";
import { getPlatformContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const platformContent = await getPlatformContent(lang);

  const {
    ui,
    hero,
    architecture,
    capabilities,
    productsRelationship,
    documentation,
    cta,
  } = platformContent;

  const pageCopy =
    lang === "zh"
      ? {
          heroEyebrow: "Atlas Platform",
          architectureEyebrow: "Governance Architecture",
          boundaryEyebrow: "能力边界",
          flowEyebrow: "Runtime Evidence Flow",
          productsEyebrow: "Two Products. One Platform.",
          documentationEyebrow: "Platform Documentation",
          ctaEyebrow: "Next Step",
          evidenceFlowDescription:
            "Atlas 将持续观察、事件证据、调查协作与知识沉淀连接为一条可审查、可复用的运行时治理链路。",
          stages: [
            ["运行时观察", "持续观察并治理客户环境中的关键运行时信号。"],
            ["证据生成", "将连续数据压缩为有边界、可审查的事件证据。"],
            ["调查组织", "统一事件上下文、历史候选与调查路径。"],
            ["跨组织协作", "在明确边界内连接 OEM 与传感器工程团队。"],
            ["知识与决策", "沉淀调查成果并呈现治理绩效。"],
          ],
        }
      : {
          heroEyebrow: "Atlas Platform",
          architectureEyebrow: "Governance Architecture",
          boundaryEyebrow: "Capability Boundary",
          flowEyebrow: "Runtime Evidence Flow",
          productsEyebrow: "Two Products. One Platform.",
          documentationEyebrow: "Platform Documentation",
          ctaEyebrow: "Next Step",
          evidenceFlowDescription:
            "Atlas connects continuous observation, bounded evidence, investigation workflows, and reusable knowledge into one governed runtime chain.",
          stages: [
            [
              "Runtime Observation",
              "Continuously observe critical signals in the customer environment.",
            ],
            [
              "Evidence Generation",
              "Convert continuous data into bounded, reviewable event evidence.",
            ],
            [
              "Investigation Context",
              "Organize event context, historical candidates, and investigation paths.",
            ],
            [
              "Cross-Organization Collaboration",
              "Connect OEM and sensor engineering teams within explicit boundaries.",
            ],
            [
              "Knowledge and Decisions",
              "Preserve investigation outcomes and surface governance performance.",
            ],
          ],
        };

  const architectureStages = [
    {
      number: "01",
      title: pageCopy.stages[0][0],
      description: pageCopy.stages[0][1],
      modules: capabilities.slice(0, 3),
    },
    {
      number: "02",
      title: pageCopy.stages[1][0],
      description: pageCopy.stages[1][1],
      modules: capabilities.slice(3, 4),
    },
    {
      number: "03",
      title: pageCopy.stages[2][0],
      description: pageCopy.stages[2][1],
      modules: capabilities.slice(4, 7),
    },
    {
      number: "04",
      title: pageCopy.stages[3][0],
      description: pageCopy.stages[3][1],
      modules: capabilities.slice(7, 8),
    },
    {
      number: "05",
      title: pageCopy.stages[4][0],
      description: pageCopy.stages[4][1],
      modules: capabilities.slice(8, 10),
    },
  ];

  return (
    <main className="bg-white">
      <section className="border-b border-border bg-white py-16 sm:py-20 md:py-28">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
              {pageCopy.heroEyebrow}
            </p>

            <h1 className="heading-title mt-6 max-w-4xl font-sans text-page-title font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
              {hero.title}
            </h1>

            <p className="heading-description mt-7 max-w-4xl text-body-lg leading-9 text-ink sm:text-body-lg-md">
              {hero.subtitle}
            </p>

            <p className="heading-description mt-7 max-w-3xl text-body leading-8 text-muted sm:text-body-lg">
              {hero.description}
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            <div>
              <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
                {pageCopy.architectureEyebrow}
              </p>

              <h2 className="heading-title mt-4 max-w-3xl font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {architecture.title}
              </h2>

              <p className="heading-description mt-6 max-w-3xl text-body leading-8 text-muted">
                {architecture.description}
              </p>

              <ul className="mt-8 space-y-4">
                {architecture.principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-4 text-label leading-7 text-ink"
                  >
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-sensor-tan bg-white p-6 sm:p-8">
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {pageCopy.boundaryEyebrow}
              </p>

              <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                {architecture.constitutionalBoundary.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {architecture.constitutionalBoundary.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-code leading-7 text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-border bg-white py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
              {pageCopy.flowEyebrow}
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {ui.capabilitiesTitle}
            </h2>

            <p className="heading-description mt-5 text-body leading-8 text-muted">
              {pageCopy.evidenceFlowDescription}
            </p>
          </div>

          <div className="mt-12 space-y-6 md:mt-16">
            {architectureStages.map((stage) => (
              <div
                key={stage.number}
                className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <p className="font-mono text-caption font-semibold tracking-eyebrow text-atlas-blue">
                    {stage.number}
                  </p>

                  <h3 className="mt-3 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-label leading-7 text-muted">
                    {stage.description}
                  </p>
                </div>

                <div
                  className={`grid gap-5 ${
                    stage.modules.length > 1
                      ? "md:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {stage.modules.map((capability) => (
                    <article
                      key={capability.name}
                      className="rounded-lg border border-border bg-white p-6 transition-colors hover:border-atlas-blue/40"
                    >
                      <h4 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                        {capability.name}
                      </h4>

                      <p className="mt-3 text-label leading-7 text-muted">
                        {capability.description}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {capability.keyFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-label leading-6 text-ink/75"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-atlas-blue" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
              {pageCopy.productsEyebrow}
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {productsRelationship.title}
            </h2>

            <p className="heading-description mt-5 text-body leading-8 text-muted">
              {productsRelationship.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {productsRelationship.products.map((product, index) => (
              <article
                key={product.name}
                className="rounded-lg border border-border bg-white p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-caption font-semibold text-atlas-blue">
                    0{index + 1}
                  </p>

                  <p className="text-label font-semibold text-atlas-blue">
                    {product.audience}
                  </p>
                </div>

                <h3 className="mt-6 max-w-lg font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {product.name}
                </h3>

                <p className="mt-7 font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.coreModulesLabel}
                </p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.coreModules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-3 text-label leading-6 text-ink/75"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-atlas-blue" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-border bg-white py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
                {pageCopy.documentationEyebrow}
              </p>

              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {documentation.title}
              </h2>

              <a
                href={documentation.documentationLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-hover mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-label font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark"
              >
                {documentation.documentationLink.title}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div>
              <p className="mb-7 text-body leading-8 text-muted">
                {documentation.documentationLink.description}
              </p>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {documentation.whitePapers.map((paper) => (
                  <article
                    key={paper.title}
                    className="border-t border-border pt-5"
                  >
                    <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                      {paper.title}
                    </h3>

                    <p className="mt-2 text-label leading-7 text-muted">
                      {paper.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="border-b border-border bg-surface py-16 sm:py-20 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
              {pageCopy.ctaEyebrow}
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {cta.title}
            </h2>

            <p className="heading-description mx-auto mt-6 max-w-2xl text-body leading-8 text-muted">
              {cta.description}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                className="w-full sm:w-auto"
                href={localizeHref(lang, "/contact")}
                variant="primary"
              >
                {cta.primaryButton}
              </Button>

              <a
                href={documentation.documentationLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue px-5 py-2.5 text-label font-semibold text-atlas-blue transition-colors hover:bg-atlas-blue hover:text-white sm:w-auto"
              >
                {cta.secondaryButton}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
