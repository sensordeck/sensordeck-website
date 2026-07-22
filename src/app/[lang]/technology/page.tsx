import { AnimatedSection } from "@/components/website/AnimatedSection";
import Button from "@/components/website/Button";
import { getTechnologyContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const technologyContent = await getTechnologyContent(lang);
  const { hero, sections, cta } = technologyContent;

  const deploymentStages = sections.filter((section) =>
    [
      "oem-deployment",
      "sensor-manufacturer-deployment",
      "pilot-to-production",
    ].includes(section.id),
  );

  const deploymentDetails = sections.filter(
    (section) =>
      ![
        "oem-deployment",
        "sensor-manufacturer-deployment",
        "pilot-to-production",
      ].includes(section.id),
  );

  return (
    <div className="bg-white text-ink">
      {/* Hero */}
      <section className="border-b border-border bg-white py-16 sm:py-20 md:py-28">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
              Deployment
            </p>

            <h1 className="heading-title mt-6 font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
             {hero.title}
</h1>

<p className="heading-description mt-7 max-w-4xl text-body-lg leading-8 text-muted sm:text-body-lg-md sm:leading-9">
  {hero.subtitle}
</p>
</div>
</AnimatedSection>
</section>

{/* Main deployment paths */}
      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
              Deployment Paths
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              两类部署对象，一条上线路径
            </h2>

            <p className="heading-description mt-5 text-body leading-8 text-muted">
              Atlas 分别支持机器人 OEM 和传感器制造商部署，并通过从
              Pilot 到 Production 的阶段化路径进入正式运行。
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {deploymentStages.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-lg border border-border bg-white p-6 sm:p-8"
              >
                <p className="font-mono text-caption font-semibold tracking-eyebrow text-atlas-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {section.title}
                </h3>

                <p className="mt-4 text-label leading-7 text-muted">
                  {section.description}
                </p>

                {section.content && (
                  <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-md bg-surface p-4 font-mono text-code leading-6 text-ink/75">
                    {section.content}
                  </pre>
                )}

                {section.explanation && (
                  <p className="mt-6 text-label leading-7 text-ink/75">
                    {section.explanation}
                  </p>
                )}

                {section.surfaces && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.surfaces.map((surface) => (
                      <span
                        key={surface}
                        className="rounded-full border border-border bg-white px-3 py-1.5 text-caption text-muted"
                      >
                        {surface}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Deployment details */}
      <section className="border-b border-border bg-white py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
              Deployment Guide
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              从部署边界到 Production 就绪
            </h2>

            <p className="heading-description mt-5 text-body leading-8 text-muted">
              每一次 Atlas 部署都从明确的运行环境、数据范围和调查目标开始，
              再通过金丝雀验证和 Pilot 进入正式生产运行。
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {deploymentDetails.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.34fr_0.66fr]"
              >
                <div>
                  <p className="font-mono text-caption font-semibold tracking-eyebrow text-atlas-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-label leading-7 text-muted">
                    {section.description}
                  </p>
                </div>

                <div>
                  {section.content && (
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-border bg-surface p-5 font-mono text-code leading-7 text-ink/75">
                      {section.content}
                    </pre>
                  )}

                  {section.explanation && (
                    <p
                      className={`text-body leading-8 text-ink/75 ${
                        section.content ? "mt-6" : ""
                      }`}
                    >
                      {section.explanation}
                    </p>
                  )}

                  {section.comparedTo && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.comparedTo.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-md border border-border bg-white p-4 text-label leading-6 text-ink/75"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.surfaces && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {section.surfaces.map((surface) => (
                        <div
                          key={surface}
                          className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-code leading-6 text-ink/70"
                        >
                          {surface}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.concepts && (
                    <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                      {section.concepts.map((concept) => (
                        <div
                          key={concept.term}
                          className="rounded-md border border-border bg-white p-5"
                        >
                          <dt className="text-label font-semibold text-ink">
                            {concept.term}
                          </dt>

                          <dd className="mt-2 text-label leading-7 text-muted">
                            {concept.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {section.warning && (
                    <div className="mt-6 border-l-2 border-sensor-tan bg-surface p-5">
                      <p className="text-label leading-7 text-ink/75">
                        {section.warning}
                      </p>
                    </div>
                  )}

                  {section.link && (
                    <a
                      href={section.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-press button-hover mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue px-5 py-2.5 text-label font-semibold text-atlas-blue transition-colors hover:bg-atlas-blue hover:text-white"
                    >
                      {section.link.text}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Deployment ownership */}
      <section className="border-b border-border bg-surface py-14 sm:py-18 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                Data Ownership
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                客户拥有运行时数据
              </h2>

              <p className="mt-4 text-label leading-7 text-muted">
                原始运行时数据、保留策略和调查证据均由客户治理。
              </p>
            </div>

            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                Existing Architecture
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                不替换核心架构
              </h2>

              <p className="mt-4 text-label leading-7 text-muted">
                Atlas 通过现有接口和 Runtime Surface Adapter
                接入客户环境。
              </p>
            </div>

            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                Human Authority
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                人工确认调查结论
              </h2>

              <p className="mt-4 text-label leading-7 text-muted">
                Atlas 提供证据和历史候选，不自动确认根因或分配责任。
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
              Next Step
            </p>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {cta.title}
            </h2>

            <p className="heading-description mx-auto mt-6 max-w-2xl text-body leading-8 text-muted">
              {cta.description}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                href={cta.primaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                {cta.primaryButton.text}
              </Button>

              <Button
                variant="outline"
                href={localizeHref(lang, cta.secondaryButton.href)}
                className="w-full sm:w-auto"
              >
                {cta.secondaryButton.text}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
