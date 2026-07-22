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

  const architectureStages = [
    {
      number: "01",
      title: "运行时观察",
      description: "持续观察并治理客户环境中的运行时数据。",
      modules: capabilities.slice(0, 3),
    },
    {
      number: "02",
      title: "证据生成",
      description: "将连续数据流压缩为有边界的事件证据。",
      modules: capabilities.slice(3, 4),
    },
    {
      number: "03",
      title: "调查组织",
      description: "形成统一上下文、历史候选和调查层级。",
      modules: capabilities.slice(4, 7),
    },
    {
      number: "04",
      title: "跨组织协作",
      description: "连接 OEM 工程团队与传感器制造商。",
      modules: capabilities.slice(7, 8),
    },
    {
      number: "05",
      title: "组织记忆与决策",
      description: "沉淀调查资产，并向管理层呈现治理结果。",
      modules: capabilities.slice(8, 10),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-border bg-white py-16 sm:py-20 md:py-28">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Platform Architecture
            </p>

            <h1 className="heading-title mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="heading-description mt-7 max-w-4xl text-xl leading-9 text-ink sm:text-2xl">
              {hero.subtitle}
            </p>

            <p className="heading-description mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {hero.description}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Architecture introduction */}
      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            <div>
              <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Architecture
              </p>

              <h2 className="heading-title mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {architecture.title}
              </h2>

              <p className="heading-description mt-6 max-w-3xl text-base leading-8 text-muted">
                {architecture.description}
              </p>

              <ul className="mt-8 space-y-4">
                {architecture.principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-4 text-sm leading-7 text-ink"
                  >
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-sensor-tan bg-white p-6 sm:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                Constitutional Boundary
              </p>

              <h3 className="mt-4 text-xl font-semibold text-ink">
                {architecture.constitutionalBoundary.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {architecture.constitutionalBoundary.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm leading-7 text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Architecture flow */}
      <section className="border-b border-border bg-white py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Runtime Evidence Flow
            </p>

            <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {ui.capabilitiesTitle}
            </h2>

            <p className="heading-description mt-5 text-base leading-8 text-muted">
              从持续观察，到事件证据、调查协作和组织记忆，Atlas
              将原本分散的运行时调查活动连接为一条完整链路。
            </p>
          </div>

          <div className="mt-12 space-y-6 md:mt-16">
            {architectureStages.map((stage) => (
              <div
                key={stage.number}
                className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.15em] text-atlas-blue">
                    {stage.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
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
                      <h4 className="text-xl font-semibold text-ink">
                        {capability.name}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {capability.description}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {capability.keyFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm leading-6 text-ink/75"
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

      {/* Product relationship */}
      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Two Products. One Infrastructure.
            </p>

            <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {productsRelationship.title}
            </h2>

            <p className="heading-description mt-5 text-base leading-8 text-muted">
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
                  <p className="font-mono text-xs font-semibold text-atlas-blue">
                    0{index + 1}
                  </p>

                  <p className="text-sm font-semibold text-atlas-blue">
                    {product.audience}
                  </p>
                </div>

                <h3 className="mt-6 max-w-lg text-2xl font-semibold leading-tight text-ink">
                  {product.name}
                </h3>

                <p className="mt-7 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {ui.coreModulesLabel}
                </p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.coreModules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-3 text-sm leading-6 text-ink/75"
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

      {/* Documentation */}
      <section className="border-b border-border bg-white py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Documentation
              </p>

              <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {documentation.title}
              </h2>

              <a
                href={documentation.documentationLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-hover mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark"
              >
                {documentation.documentationLink.title}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div>
              <p className="mb-7 text-base leading-8 text-muted">
                {documentation.documentationLink.description}
              </p>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {documentation.whitePapers.map((paper) => (
                  <article
                    key={paper.title}
                    className="border-t border-border pt-5"
                  >
                    <h3 className="text-base font-semibold text-ink">
                      {paper.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {paper.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="border-b border-border bg-surface py-16 sm:py-20 md:py-24">
  <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
        Next Step
      </p>

      <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {cta.title}
      </h2>

      <p className="heading-description mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
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
          className="button-press button-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue px-5 py-2.5 text-sm font-semibold text-atlas-blue transition-colors hover:bg-atlas-blue hover:text-white sm:w-auto"
        >
          {cta.secondaryButton}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </AnimatedSection>
</section>
    </div>
  );
}
