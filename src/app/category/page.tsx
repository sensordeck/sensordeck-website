import Image from 'next/image';
import Section from '@/components/website/Section';
import Button from '@/components/website/Button';
import homeContent from '@/content/zh/home';

export default function CategoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section className="bg-surface">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wide text-atlas-blue uppercase mb-4">
            01 / 新品类定义
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-6">
            {homeContent.sectionTitles.categoryDefinition}
          </h1>
          <p className="text-xl leading-9 text-muted">
            {homeContent.sectionDescriptions.categoryDefinition}
          </p>
        </div>
      </Section>

      {/* Lead 文字 + 大图 */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl leading-10 tracking-tight text-ink mb-12">
            {homeContent.categoryDefinition.lead}
          </p>
        </div>

        <div className="mt-12">
          <Image
            src="/images/Sensordeck 1.png"
            alt="新品类定义 - Atlas Runtime Intelligence Infrastructure"
            width={2000}
            height={1200}
            quality={100}
            className="w-full h-auto"
          />
        </div>
      </Section>

      {/* 运行时边界说明 */}
      <Section className="bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-sensor-tan pl-6">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              {homeContent.categoryDefinition.runtimeBoundary.title}
            </h3>
            <div className="mt-6 space-y-3">
              {homeContent.categoryDefinition.runtimeBoundary.steps.map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-ink">{step}</span>
                  </div>
                  {index < homeContent.categoryDefinition.runtimeBoundary.steps.length - 1 && (
                    <div className="ml-6 mt-2 text-muted">↓</div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              {homeContent.categoryDefinition.runtimeBoundary.note}
            </p>
          </div>
        </div>
      </Section>

      {/* 为什么重要 */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-2 border-atlas-blue/25 bg-surface-blue p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-ink text-center">
              {homeContent.categoryDefinition.whyImportant.title}
            </h3>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="border-l-4 border-border pl-6">
                <p className="text-base font-bold text-ink">
                  {homeContent.categoryDefinition.whyImportant.traditional.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {homeContent.categoryDefinition.whyImportant.traditional.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-ink">
                      <span className="size-1.5 rounded-full bg-border shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-atlas-blue pl-6">
                <p className="text-base font-bold text-atlas-blue">
                  {homeContent.categoryDefinition.whyImportant.runtime.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {homeContent.categoryDefinition.whyImportant.runtime.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-ink">
                      <span className="size-1.5 rounded-full bg-atlas-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted text-center border-t border-atlas-blue/15 pt-6">
              {homeContent.categoryDefinition.whyImportant.runtime.note}
            </p>
          </div>
        </div>
      </Section>

      {/* Atlas 提供什么 */}
      <Section className="bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="border border-border bg-white p-8 md:p-12">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              {homeContent.categoryDefinition.whatAtlasProvides.title}
            </h3>

            <div className="mt-6 space-y-2">
              {homeContent.categoryDefinition.whatAtlasProvides.notItems.map((item, index) => (
                <p key={index} className="text-base text-muted">{item}</p>
              ))}
            </div>

            <p className="mt-6 text-lg font-semibold text-atlas-blue">
              {homeContent.categoryDefinition.whatAtlasProvides.isItem}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {homeContent.categoryDefinition.whatAtlasProvides.capabilities.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                  <span className="text-sm text-ink">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xl font-semibold tracking-tight text-ink text-center">
              {homeContent.categoryDefinition.whatAtlasProvides.summary}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-6">
            准备好了解更多？
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo" variant="primary">
              申请演示
            </Button>
            <Button href="/" variant="secondary">
              返回首页
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
