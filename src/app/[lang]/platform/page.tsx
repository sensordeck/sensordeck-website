import { AnimatedSection } from "@/components/website/AnimatedSection";
import Button from "@/components/website/Button";
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
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
  const { ui, hero, architecture, capabilities, productsRelationship, documentation, cta } = platformContent;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="border-b border-border py-16 md:py-24">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6">
            <h1 className="mb-4 font-sans text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {hero.title}
            </h1>
            <p className="mb-6 font-sans text-xl text-ink/70">
              {hero.subtitle}
            </p>
            <p className="max-w-3xl font-sans text-base leading-relaxed text-ink/80">
              {hero.description}
            </p>
          </AnimatedSection>
        </section>

        {/* Architecture Section */}
        <section className="border-b border-border py-16">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6">
            <h2 className="mb-4 font-sans text-3xl font-semibold text-ink">
              {architecture.title}
            </h2>
            <p className="mb-8 font-sans text-base leading-relaxed text-ink/80">
              {architecture.description}
            </p>
            <ul className="mb-8 space-y-3">
              {architecture.principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-3 font-sans text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-blue" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            
            {/* Constitutional Boundary within Architecture */}
            <div className="mt-8 rounded-lg bg-ink/[0.02] p-6">
              <h3 className="mb-4 font-sans text-lg font-semibold text-ink">
                {architecture.constitutionalBoundary.title}
              </h3>
              <ul className="space-y-2">
                {architecture.constitutionalBoundary.items.map((item, index) => (
                  <li key={index} className="font-mono text-sm text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </section>

        {/* 7 Capability Cards */}
        <section className="border-b border-border py-16">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6">
            <h2 className="mb-12 font-sans text-3xl font-semibold text-ink">
              {ui.capabilitiesTitle}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="rounded-lg border border-border bg-white p-6 transition-colors hover:border-atlas-blue/30">
                  <h3 className="mb-3 font-sans text-xl font-semibold text-ink">
                    {capability.name}
                  </h3>
                  <p className="mb-4 font-sans text-sm leading-relaxed text-ink/70">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-sans text-xs text-ink/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Products Relationship */}
        <section className="border-b border-border py-16">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6">
            <h2 className="mb-4 font-sans text-3xl font-semibold text-ink">
              {productsRelationship.title}
            </h2>
            <p className="mb-12 font-sans text-base leading-relaxed text-ink/80">
              {productsRelationship.description}
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {productsRelationship.products.map((product, index) => (
                <div key={index} className="rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-2 font-sans text-xl font-semibold text-ink">
                    {product.name}
                  </h3>
                  <p className="mb-4 font-sans text-sm text-atlas-blue">
                    {product.audience}
                  </p>
                  <p className="mb-4 font-sans text-xs font-medium uppercase tracking-wide text-ink/40">
                    {ui.coreModulesLabel}
                  </p>
                  <ul className="space-y-2">
                    {product.coreModules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-sans text-sm text-ink/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-atlas-blue/50" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Documentation */}
        <section className="border-b border-border py-16">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6">
            <h2 className="mb-12 font-sans text-3xl font-semibold text-ink">
              {documentation.title}
            </h2>
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {documentation.whitePapers.map((paper, index) => (
                <div key={index} className="rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-2 font-sans text-base font-semibold text-ink">
                    {paper.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-ink/70">
                    {paper.description}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={documentation.documentationLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-atlas-blue/20 bg-atlas-blue/5 p-6 transition-colors hover:border-atlas-blue/40 hover:bg-atlas-blue/10"
            >
              <h3 className="mb-2 font-mono text-lg font-semibold text-ink">
                {documentation.documentationLink.title} →
              </h3>
              <p className="font-sans text-sm text-ink/70">
                {documentation.documentationLink.description}
              </p>
            </a>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="py-16">
          <AnimatedSection className="mx-auto max-w-screen-lg px-6 text-center">
            <h2 className="mb-4 font-sans text-3xl font-semibold text-ink">
              {cta.title}
            </h2>
            <p className="mb-8 font-sans text-base leading-relaxed text-ink/70">
              {cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={localizeHref(lang, "/request-demo")} variant="primary">
                {cta.primaryButton}
              </Button>
              <Button href={localizeHref(lang, "/library/white-papers")} variant="outline">
                {cta.secondaryButton}
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </div>
      <Footer />
    </>
  );
}
