import Link from "next/link";

import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase leading-normal tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
      {children}
    </p>
  );
}

function ArrowLabel({
  external = false,
}: {
  external?: boolean;
}) {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      {external ? "↗" : "→"}
    </span>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default async function LibraryIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getLibraryContent(lang);
  const { hero, cta, ui } = content;
  const libraryResources = ui.resourceCards;

  return (
    <div className="bg-white font-sans text-ink">
      {/* Hero */}
      <Section id="library-hero" className="bg-white">
        <div className="max-w-5xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="heading-title mt-5 max-w-4xl font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
            {hero.title}
          </h1>

          <p className="heading-description mt-6 max-w-3xl text-body-lg leading-relaxed text-muted sm:mt-7 sm:text-body-lg-md">
            {hero.subtitle}
          </p>
        </div>
      </Section>

      {/* Primary reference resources */}
      <Section id="resources" className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>Reference</Eyebrow>

          <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            Atlas 参考资料
          </h2>

          <p className="heading-description mt-5 text-body leading-8 text-muted">
            从常见问题、企业交付和版本说明开始，也可以通过公开演示了解
            Atlas 的运行时调查方式。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {libraryResources.map((resource) => {
            const external = isExternalHref(resource.href);
            const href = external
              ? resource.href
              : localizeHref(lang, resource.href);

            return (
              <Card
                className="stagger-item flex min-h-0 flex-col justify-between sm:min-h-72"
                key={resource.id}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-code leading-normal text-atlas-blue">
                      {resource.id}
                    </span>

                    <span className="border border-border px-2 py-1 font-mono text-caption uppercase leading-normal tracking-eyebrow text-muted">
                      {resource.items}
                    </span>
                  </div>

                  <h3 className="mt-8 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                    {resource.title}
                  </h3>

                  <p className="mt-4 text-body leading-8 text-muted">
                    {resource.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-border pt-4">
                  {external ? (
                    <a
                      className="-my-2 inline-flex min-h-11 items-center gap-2 text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ui.browse}
                      <ArrowLabel external />
                    </a>
                  ) : (
                    <Link
                      className="-my-2 inline-flex min-h-11 items-center gap-2 text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
                      href={href}
                    >
                      {ui.browse}
                      <ArrowLabel />
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Enterprise delivery */}
      <Section id="enterprise-delivery" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <Eyebrow>Enterprise Delivery</Eyebrow>

            <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Atlas 通过企业部署项目交付
            </h2>

            <p className="heading-description mt-5 text-base leading-8 text-muted">
              Atlas 不是面向公众下载的通用软件。每一次部署都会根据产品范围、
              运行时表面、部署环境、调查流程和集成要求确定交付内容。
            </p>

            <a
              href="https://sensordeck.github.io/atlas-docs-cn/reference/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="button-press button-hover mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue px-5 py-2.5 text-sm font-semibold text-atlas-blue transition-colors hover:bg-atlas-blue hover:text-white"
            >
              查看企业交付说明
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "运行时组件",
                description:
                  "Atlas Agent、运行时适配器、运行时表面配置、数据集策略和导出配置。",
              },
              {
                number: "02",
                title: "调查组件",
                description:
                  "Evidence Pack、Historical RGA、调查上下文、调查流程和 Sensor Engagement Pack。",
              },
              {
                number: "03",
                title: "配置与文档",
                description:
                  "保留策略、导出策略、授权策略、部署指南、操作指南和管理员指南。",
              },
              {
                number: "04",
                title: "验收与培训",
                description:
                  "试点验收报告、生产就绪报告、部署培训、调查流程培训和 FAE 协作指南。",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="border-t border-border pt-5"
              >
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-atlas-blue">
                  {item.number}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Demo must remain */}
      <Section id="demo-access" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-atlas-blue">
              03 / 演示
            </p>

            <h2 className="heading-title mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              演示与示例
            </h2>

            <p className="heading-description mt-5 max-w-2xl text-base leading-8 text-muted">
              通过视频、交互式 UI 和示例数据了解 Atlas 工作方式。
            </p>
          </div>

          <div className="border-l-2 border-sensor-tan bg-white p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">
              从代表性的运行时调查开始
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              查看一级受理、调查工作区、传感器 FAE 协作和 CTO
              治理视图，了解 Atlas 如何把运行时事件转化为证据和组织资产。
            </p>

            <Link
              className="button-press button-hover mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark"
              href={localizeHref(lang, "/library/demo")}
            >
              进入演示与示例
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Documentation reference */}
      <Section id="documentation-reference" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>{ui.quickAccessEyebrow}</Eyebrow>

            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {ui.quickAccessTitle}
            </h2>

            <p className="heading-description mt-5 text-base leading-8 text-muted">
              查看 Atlas 的基础理论、产品体系、平台架构、部署指南和参考资料。
              详细技术内容在独立文档中心持续维护。
            </p>
          </div>

          <a
            href="https://sensordeck.github.io/atlas-docs-cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-press button-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue px-5 py-2.5 text-sm font-semibold text-atlas-blue transition-colors hover:bg-atlas-blue hover:text-white sm:w-auto"
          >
            打开 Atlas 中文文档
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section id="library-cta" className="bg-surface">
        <div className="border border-atlas-blue/25 bg-surface-blue p-5 sm:p-7 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{cta.eyebrow}</Eyebrow>

              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {cta.title}
              </h2>

              <p className="heading-description mt-5 max-w-2xl text-body leading-relaxed text-muted md:text-body-lg">
                {cta.description}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button
                className="w-full sm:w-auto"
                href={localizeHref(lang, "/contact")}
              >
                {cta.primaryButton.text}
                <span aria-hidden="true" className="text-white">
                  →
                </span>
              </Button>

              <a
                href="https://sensordeck.github.io/atlas-docs-cn/category/参考资料"
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-atlas-blue hover:text-atlas-blue sm:w-auto"
              >
                {cta.secondaryButton.text}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
