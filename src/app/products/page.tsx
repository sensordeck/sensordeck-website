import Image from "next/image";

import Button from "@/components/website/Button";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import productsContent from "@/content/zh/products";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export default function ProductsPage() {
  const products = [
    productsContent.productA,
    productsContent.productB,
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1 py-12 text-center sm:py-16 lg:py-20">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue sm:text-xs">
              Atlas Products
            </p>

            <h1
              className="
                mx-auto
                mt-5
                max-w-4xl
                text-[34px]
                font-semibold
                leading-[1.14]
                tracking-tight
                text-ink
                sm:text-5xl
                sm:leading-[1.1]
                lg:text-[56px]
                lg:leading-[1.08]
              "
            >
              {productsContent.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {productsContent.heroSubtitle}
            </p>

            <p className="mx-auto mt-7 max-w-2xl whitespace-pre-line text-base font-semibold leading-8 text-atlas-blue sm:text-lg">
              {productsContent.heroStatement}
            </p>
          </div>
        </Section>

        {/* Full architecture image */}
        <section className="overflow-hidden border-t border-white/10 bg-[#050b17]">
          <div className="mx-auto w-full max-w-[1920px]">
            <Image
              src={productsContent.architecture.imageSrc}
              alt={productsContent.architecture.imageAlt}
              width={1536}
              height={1024}
              priority
              quality={100}
              className="block h-auto w-full"
              sizes="100vw"
            />
          </div>
        </section>

        {/* Architecture explanation */}
        <Section className="bg-surface">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                {productsContent.architecture.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {productsContent.architecture.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                {productsContent.architecture.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="flex h-full flex-col border border-border bg-white p-6 md:p-8"
                >
                  <span className="w-fit border border-border bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-muted">
                    {product.audience}
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {product.description}
                  </p>

                  <ul className="mt-7 grid gap-3">
                    {product.valuePoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-7 text-ink"
                      >
                        <span className="mt-[10px] size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-atlas-blue transition-colors hover:text-atlas-blue-dark"
                  >
                    查看产品详情
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Engagement Pack bridge */}
        <Section className="bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              {productsContent.collaborationBridge.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {productsContent.collaborationBridge.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
              {productsContent.collaborationBridge.description}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {productsContent.collaborationBridge.steps.map(
                (step, index) => (
                  <div
                    key={step}
                    className="relative border border-border bg-surface p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-semibold text-atlas-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {index <
                      productsContent.collaborationBridge.steps.length -
                        1 ? (
                        <span
                          aria-hidden="true"
                          className="text-atlas-blue"
                        >
                          →
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-8 text-sm font-semibold leading-7 text-ink">
                      {step}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 text-center md:p-8">
              <p className="text-base font-semibold leading-8 text-ink md:text-lg">
                {
                  productsContent.collaborationBridge
                    .closingStatement
                }
              </p>
            </div>
          </div>
        </Section>

        {/* Final value */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-5xl border border-border bg-white p-7 text-center md:p-10 lg:p-14">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {productsContent.finalValue.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
              {productsContent.finalValue.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href="/products/runtime-sensor-governance"
                variant="secondary"
              >
                Runtime Sensor Governance
              </Button>

              <Button
                href="/products/runtime-investigation"
                variant="secondary"
              >
                Runtime Investigation
              </Button>

              <Button href="/request-demo" variant="primary">
                {productsContent.ctaText}
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
