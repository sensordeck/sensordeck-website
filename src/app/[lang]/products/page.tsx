import Image from "next/image";
import Link from "next/link";

import Button from "@/components/website/Button";
import Section from "@/components/website/Section";
import { getProductsContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const productsContent = await getProductsContent(lang);
  const products = [
    productsContent.productA,
    productsContent.productB,
  ];

  return (
    <div className="bg-white">

        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl py-4 text-center sm:px-4 sm:py-8 lg:py-12">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow sm:text-eyebrow-md text-atlas-blue">
              {productsContent.eyebrow}
            </p>

            <h1
              className="
                mx-auto
                mt-3
                max-w-4xl
                whitespace-pre-line
                font-sans
                text-display
                font-semibold
                leading-tight
                tracking-tight
                text-ink
                sm:text-display-md
                lg:text-display-lg
              "
            >
              {productsContent.heroTitle}
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-body leading-7 text-muted sm:text-body-lg sm:leading-8">
              {productsContent.heroSubtitle}
            </p>

           {/* Desktop */}
<p className="hidden sm:block mx-auto mt-7 max-w-2xl text-body-lg font-semibold leading-8 text-atlas-blue">
  {productsContent.heroStatement}
</p>

            {/* Mobile */}
            <p className="block sm:hidden mx-auto mt-7 text-body font-semibold leading-8 text-atlas-blue">
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {productsContent.architecture.eyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {productsContent.architecture.title}
              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">
                {productsContent.architecture.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="flex h-full min-w-0 flex-col border border-border bg-white p-5 sm:p-6 md:p-8"
                >
                  <span className="w-fit border border-border bg-surface px-3 py-1 font-mono text-caption font-semibold text-muted">
                    {product.audience}
                  </span>

                  <h3 className="mt-6 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-label leading-7 text-muted">
                    {product.description}
                  </p>

                  <ul className="mt-7 grid gap-3">
                    {product.valuePoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-label leading-7 text-ink"
                      >
                        <span className="mt-[10px] size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={localizeHref(lang, product.href)}
                    className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 border-t border-border pt-4 text-label font-semibold text-atlas-blue transition-colors hover:text-atlas-blue-dark"
                  >
                    {productsContent.ui.viewProduct}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Engagement Pack bridge */}
        <Section className="bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {productsContent.collaborationBridge.eyebrow}
            </p>

            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {productsContent.collaborationBridge.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-body leading-8 text-muted md:text-body-lg">
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
                      <span className="font-mono text-caption font-semibold text-atlas-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {index <
                      productsContent.collaborationBridge.steps.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="text-atlas-blue"
                        >
                          →
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-8 text-label font-semibold leading-7 text-ink">
                      {step}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 text-center md:p-8">
              <p className="text-body font-semibold leading-8 text-ink md:text-body-lg">
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
            <h2 className="font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {productsContent.finalValue.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-body leading-8 text-muted md:text-body-lg">
              {productsContent.finalValue.description}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
              <Button
                className="w-full sm:w-auto"
                href={localizeHref(lang, "/products/runtime-sensor-governance")}
                variant="secondary"
              >
                {productsContent.ui.sensorGovernance}
              </Button>

              <Button
                className="w-full sm:w-auto"
                href={localizeHref(lang, "/products/runtime-investigation")}
                variant="secondary"
              >
                {productsContent.ui.runtimeInvestigation}
              </Button>

              <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")} variant="primary">
                {productsContent.ctaText}
              </Button>
            </div>
          </div>
        </Section>

    </div>
  );
}
