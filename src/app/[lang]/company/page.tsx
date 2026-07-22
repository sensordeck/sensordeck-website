import { AnimatedSection } from "@/components/website/AnimatedSection";
import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
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
    category,
    principlesSection,
    principles,
    boundariesSection,
    boundaries,
    contact,
  } = content;

  return (
    <div className="bg-white">

<section
  id="company-hero"
  className="relative overflow-hidden border-b border-border bg-white"
>
  {/* Mobile background */}
  <div
    className="absolute inset-0 bg-no-repeat lg:hidden"
    style={{
      backgroundImage: "url('/images/about-us-mobile.png')",
      backgroundSize: "100% auto",
      backgroundPosition: "center bottom",
    }}
    aria-hidden="true"
  />

{/* Desktop background */}
<div
  className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
  style={{
    backgroundImage: "url('/images/about-us-desktop.png')",
  }}
  aria-hidden="true"
/>

  {/* Mobile readability overlay */}
  <div
    className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-white via-white/95 to-transparent lg:hidden"
    aria-hidden="true"
  />

  <AnimatedSection>
    <div className="relative z-10 mx-auto min-h-[760px] w-full max-w-7xl px-6 lg:min-h-[430px] lg:px-8">
      <div className="max-w-[620px] pb-8 pt-14 lg:flex lg:min-h-[430px] lg:flex-col lg:justify-center lg:py-8">
        <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
          {hero.eyebrow}
        </p>

        <h1 className="heading-title mt-4 font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
          {hero.title}
        </h1>

        <p className="heading-description mt-6 max-w-[590px] text-body-lg leading-8 text-muted sm:text-body-lg-md sm:leading-9">
          {hero.description}
        </p>

        <div
          className="stagger-item mt-7 max-w-[560px] border-l-2 border-sensor-tan pl-5 text-label leading-7 text-muted"
          style={{ animationDelay: "240ms" }}
        >
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-sensor-tan-text">
            {hero.statementLabel}
          </p>

          <p className="mt-3">{hero.statement}</p>
        </div>
      </div>
    </div>
  </AnimatedSection>
</section>
        <Section id="category" className="bg-white section-enter">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div className="max-w-md">
              <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {category.eyebrow}
              </p>
              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {category.title}
              </h2>
            </div>
            <div className="border-y border-border py-8 md:py-10 stagger-item">
              <p className="max-w-3xl text-card-title-lg font-medium leading-10 tracking-tight text-ink md:text-section-title-md">
                {category.lead}
              </p>
              <p className="mt-6 max-w-2xl text-body leading-8 text-muted">
                {category.description}
              </p>
            </div>
          </div>
          </AnimatedSection>
        </Section>

        <Section id="principles" className="bg-surface">
          <div>
            <div className="max-w-3xl">
              <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {principlesSection.eyebrow}
              </p>
              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {principlesSection.title}
              </h2>
              <p className="heading-description mt-5 text-body leading-8 text-muted">
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
                      <span className="font-mono text-caption font-semibold text-atlas-blue">
                        {principle.number}
                      </span>
                      <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-sensor-tan-text">
                        {principle.label}
                      </span>
                    </div>
                    <h3 className="mt-7 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                      {principle.title}
                    </h3>
                    <p className="mt-4 text-label leading-7 text-muted">
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
            <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {boundariesSection.eyebrow}
            </p>
            <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {boundariesSection.title}
            </h2>
            <p className="heading-description mt-5 text-body leading-8 text-muted">
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
                <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {boundary.title}
                </h3>
                <ul className="mt-6 grid gap-4">
                  {boundary.items.map((item) => (
                    <li className="flex items-start gap-3 text-label leading-7 text-muted" key={item}>
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
              <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {contact.eyebrow}
              </p>
              <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {contact.title}
              </h2>
              <p className="heading-description mt-5 text-body leading-8 text-muted">
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

    </div>
  );
}
