import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import productsContent from "@/content/zh/products";

function ModuleList({ modules }: { modules: string[] }) {
  return (
    <ul className="grid gap-3">
      {modules.map((module) => (
        <li key={module} className="flex items-start gap-3 text-base text-ink">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
          <span>{module}</span>
        </li>
      ))}
    </ul>
  );
}

function LifecycleFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-atlas-blue/10 font-mono text-sm font-semibold text-atlas-blue">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-1 pt-1">
            <span className="text-base font-medium text-ink">{step}</span>
            {index < steps.length - 1 && (
              <svg
                className="ml-3 h-6 w-6 text-atlas-blue/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RuntimeSensorGovernancePage() {
  const { productA } = productsContent;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <Section className="bg-white pt-24 lg:pt-32">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.16em] text-sensor-tan">
            {productA.audience}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
            {productA.name}
          </h1>
          <p className="mt-6 text-xl leading-9 text-muted">
            {productA.description}
          </p>
        </div>
      </Section>

      {/* Core Modules */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
            核心模块
          </h2>
          <h3 className="mb-8 text-3xl font-semibold tracking-tight text-ink">
            为传感器制造商设计的专用工具
          </h3>
          <Card>
            <ModuleList modules={productA.coreModules} />
          </Card>
        </div>
      </Section>

      {/* Product Lifecycle */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
            产品生命周期
          </h2>
          <h3 className="mb-12 text-3xl font-semibold tracking-tight text-ink">
            从运行时配置到知识复用
          </h3>
          <div className="mx-auto max-w-2xl">
            <LifecycleFlow steps={productA.lifecycle} />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            了解传感器治理如何适配您的组织
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            与 OEM 调查团队协作，使用共享证据和有界上下文，同时保留您的运行时知识。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/#request-demo">{productsContent.ctaText}</Button>
            <Button href="/products" variant="outline">
              查看所有产品
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
