import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import productsContent from "@/content/zh/products";

function ProductCard({
  name,
  audience,
  description,
  coreModules,
  lifecycle,
  href,
}: {
  name: string;
  audience: string;
  description: string;
  coreModules: string[];
  lifecycle: string[];
  href: string;
}) {
  return (
    <Card className="flex flex-col">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-sensor-tan">
          {audience}
        </span>
      </div>
      <h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink">
        {name}
      </h3>
      <p className="mb-8 text-base leading-7 text-muted">{description}</p>

      <div className="mb-8">
        <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
          核心模块
        </h4>
        <ul className="grid gap-2">
          {coreModules.map((module) => (
            <li
              key={module}
              className="flex items-start gap-3 text-sm text-ink"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-atlas-blue" />
              <span>{module}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
          生命周期
        </h4>
        <div className="flex flex-col gap-2">
          {lifecycle.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Button href={href} variant="outline" className="w-full">
          了解更多
        </Button>
      </div>
    </Card>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <Section className="bg-white pt-24 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
            {productsContent.heroTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {productsContent.heroSubtitle}
          </p>
        </div>
      </Section>

      {/* Two Products */}
      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductCard
            name={productsContent.productA.name}
            audience={productsContent.productA.audience}
            description={productsContent.productA.description}
            coreModules={productsContent.productA.coreModules}
            lifecycle={productsContent.productA.lifecycle}
            href="/products/runtime-sensor-governance"
          />
          <ProductCard
            name={productsContent.productB.name}
            audience={productsContent.productB.audience}
            description={productsContent.productB.description}
            coreModules={productsContent.productB.coreModules}
            lifecycle={productsContent.productB.lifecycle}
            href="/products/runtime-investigation"
          />
        </div>
      </Section>

      {/* Shared Infrastructure */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            {productsContent.sharedInfrastructure.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            {productsContent.sharedInfrastructure.description}
          </p>
        </div>
      </Section>

      {/* Constitutional Boundary */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
            宪法边界
          </h3>
          <Card className="border-atlas-blue/20 bg-white">
            <ul className="grid gap-4">
              {productsContent.constitutionalBoundary.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 text-base leading-7 text-ink"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            了解 Atlas 如何适配您的组织
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            无论您是传感器制造商还是机器人 OEM，Atlas 都提供专注的工具来治理运行时证据、支持调查和保存组织知识。
          </p>
          <div className="mt-10">
            <Button href="/#request-demo">{productsContent.ctaText}</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
