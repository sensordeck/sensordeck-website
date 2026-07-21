import { AnimatedSection } from "@/components/website/AnimatedSection";
import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { getCompanyContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = await getCompanyContent(lang);
  const {
    hero,
    mission,
    category,
    principlesSection,
    principles,
    boundariesSection,
    boundaries,
    contact,
  } = content;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main>
<section
  id="company-hero"
  className="overflow-hidden border-b border-border bg-white"
>
  <AnimatedSection>
    <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-12 lg:min-h-[430px] lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-8">
      {/* Text */}
      <div className="max-w-[620px]">
        <p className="heading-eyebrow font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
          {hero.eyebrow}
        </p>

        <h1 className="heading-title mt-4 text-[44px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="heading-description mt-6 max-w-[590px] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          {hero.description}
        </p>

        <div
          className="stagger-item mt-7 max-w-[560px] border-l-2 border-sensor-tan pl-5 text-sm leading-7 text-muted"
          style={{ animationDelay: "240ms" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sensor-tan">
            {hero.statementLabel}
          </p>

          <p className="mt-3">{hero.statement}</p>
        </div>
      </div>

      {/* Desktop illustration */}
      <div className="hidden items-center justify-center lg:flex">
        <img
          src="/images/about-us-desktop-object.png"
          alt=""
          className="h-auto w-full max-w-[660px] object-contain"
        />
      </div>

      {/* Mobile illustration */}
      <div className="flex justify-center lg:hidden">
        <img
          src="/images/about-us-mobile-object.png"
          alt=""
          className="h-auto w-full max-w-[520px] object-contain"
        />
      </div>
    </div>
  </AnimatedSection>
</section>
        <Section id="category" className="bg-white section-enter">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div className="max-w-md">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                {category.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                {category.title}
              </h2>
            </div>
            <div className="border-y border-border py-8 md:py-10 stagger-item">
              <p className="max-w-3xl text-2xl font-medium leading-10 tracking-tight text-ink md:text-3xl">
                {category.lead}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                {category.description}
              </p>
            </div>
          </div>
          </AnimatedSection>
        </Section>

        <Section id="principles" className="bg-surface">
          <div>
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                {principlesSection.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                {principlesSection.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                {principlesSection.description}
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <Card
                  className="flex min-h-80 flex-col justify-between stagger-item"
                  key={principle.number}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-5">
                      <span className="font-mono text-xs font-semibold text-atlas-blue">
                        {principle.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sensor-tan">
                        {principle.label}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold leading-8 tracking-tight text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {principle.description}
                    </p>
                  </div>
                  <span className="mt-8 block h-px w-10 bg-atlas-blue" aria-hidden="true" />
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="boundaries" className="bg-white section-enter">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              {boundariesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
              {boundariesSection.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted heading-description">
              {boundariesSection.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {boundaries.map((boundary, index) => (
              <article
                className="border border-border bg-surface p-6 card-enter stagger-item md:p-8"
                key={boundary.title}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {boundary.title}
                </h3>
                <ul className="mt-6 grid gap-4">
                  {boundary.items.map((item) => (
                    <li className="flex items-start gap-3 text-sm leading-7 text-muted" key={item}>
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          index === 0 ? "bg-atlas-blue" : "bg-sensor-tan"
                        }`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="company-contact" className="bg-surface">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                {contact.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                {contact.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                {contact.description}
              </p>
            </div>
            <div className="stagger-item lg:justify-self-end" style={{ animationDelay: "240ms" }}>
              <Button href={localizeHref(lang, "/contact")} className="arrow-parent">
                {contact.button}
                <span className="arrow-slide" aria-hidden="true">
                  →
                </span>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
