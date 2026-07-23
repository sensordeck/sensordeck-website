import Image from "next/image";
import Button from "@/components/website/Button";
import Section from "@/components/website/Section";
import WhyAtlasSection from "@/components/website/WhyAtlasSection";
import { getHomeContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { Bot, Check, Database } from "lucide-react";
import { notFound } from "next/navigation";

const unifiedSectionContainerClassName =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12";

const unifiedSectionEyebrowClassName =
  "font-mono font-semibold uppercase text-eyebrow tracking-eyebrow md:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue";

const unifiedSectionTitleClassName =
  "mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:mt-6 md:text-section-title-md";

const unifiedSectionDescriptionClassName =
  "mt-4 text-body leading-7 text-ink/80 md:mt-5 md:text-body-lg md:leading-8 lg:text-body-lg-md";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="heading-eyebrow font-mono font-semibold uppercase text-eyebrow tracking-eyebrow md:text-eyebrow-md text-atlas-blue">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="heading-title mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:mt-6 md:text-section-title-md">
        {title}
      </h2>

      <p className="heading-description mt-4 text-body leading-7 text-muted md:mt-5 md:text-body-lg md:leading-8 lg:text-body-lg-md">
        {description}
      </p>
    </div>
  );
}

function ArrowLabel({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={inverse ? "text-white" : "text-atlas-blue"}
    >
      →
    </span>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const homeContent = await getHomeContent(lang);

  const categoryImage =
    lang === "en"
      ? "/images/Sensordeck 1e.png"
      : "/images/Sensordeck 1.png";

  const problemImage =
    lang === "en"
      ? "/images/Sensordeck 2e.png"
      : "/images/Sensordeck 2.png";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[680px] overflow-hidden border-b border-border bg-white sm:min-h-[640px] lg:min-h-[780px]"
      >
        {/* Desktop Hero */}
        <Image
          src="/images/Sensordeck_hero3.png"
          alt="Atlas Runtime Governance"
          fill
          priority
          sizes="(max-width: 1023px) 0vw, 100vw"
          className="hidden object-cover lg:block"
          style={{ objectPosition: "left" }}
        />

        {/* Mobile Hero */}
        <Image
          src="/images/hero_mobile.png"
          alt="Atlas Runtime Governance"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 0vw"
          className="block object-cover lg:hidden"
          style={{ objectPosition: "center center" }}
        />

        {/* Hero readability overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 38%, rgba(255,255,255,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 36%, rgba(255,255,255,0.58) 48%, rgba(255,255,255,0) 68%)",
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-start pt-8 sm:pt-20 lg:items-center lg:pt-0">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-[42rem]">
              <h1
                className="
                  heading-title
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
                {homeContent.heroTitle}
              </h1>

              {/* Desktop Subtitle */}
              <p
                className="
                  heading-description
                  mt-3
                  hidden
                  max-w-xl
                  whitespace-pre-line
                  text-body
                  font-medium
                  leading-7
                  text-ink
                  sm:text-body-lg
                  lg:block
                "
              >
                {homeContent.heroSubtitleDesktop}
              </p>

              {/* Mobile Subtitle */}
              <p
                className="
                  heading-description
                  mt-3
                  block
                  max-w-xl
                  text-body
                  font-medium
                  leading-7
                  text-ink
                  sm:text-body-lg
                  lg:hidden
                "
              >
                {homeContent.heroSubtitleMobile}
              </p>

              <p
                className="
                  mt-3
                  whitespace-pre-line
                  text-label
                  font-semibold
                  text-atlas-blue-dark
                  sm:text-body
                "
              >
                {homeContent.heroValueProposition}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Definition */}
      <Section
        id="category"
        className="bg-surface py-12 md:py-16 lg:py-20"
        containerClassName={unifiedSectionContainerClassName}
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-6 lg:grid-cols-[40%_60%] lg:gap-12">
          <div className="max-w-6xl">
            <p className={unifiedSectionEyebrowClassName}>
              {homeContent.ui.sectionEyebrows.categoryDefinition}
            </p>

            <h2 className={unifiedSectionTitleClassName}>
              {homeContent.sectionTitles.categoryDefinition}
            </h2>

            <p className={unifiedSectionDescriptionClassName}>
              {homeContent.sectionDescriptions.categoryDefinition}
            </p>

            <Button
              className="mt-6 w-full sm:w-auto md:mt-8"
              href={localizeHref(lang, "/category")}
              variant="secondary"
            >
              {homeContent.ui.learnMore}
              <ArrowLabel />
            </Button>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <Image
              src={categoryImage}
              alt={homeContent.ui.categoryImageAlt}
              width={2000}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section
        id="problem"
        className="bg-white py-12 md:py-16 lg:py-20"
        containerClassName={unifiedSectionContainerClassName}
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-6 lg:grid-cols-[40%_60%] lg:gap-12">
          <div className="max-w-6xl">
            <p className={unifiedSectionEyebrowClassName}>
              {homeContent.ui.sectionEyebrows.theProblem}
            </p>

            <h2 className={unifiedSectionTitleClassName}>
              {homeContent.sectionTitles.theProblem}
            </h2>

            <p className={unifiedSectionDescriptionClassName}>
              {homeContent.sectionDescriptions.theProblem}
            </p>

            <Button
              className="mt-6 w-full sm:w-auto md:mt-8"
              href={localizeHref(lang, "/problem")}
              variant="secondary"
            >
              {homeContent.theProblem.cta}
            </Button>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <Image
              src={problemImage}
              alt={homeContent.ui.problemImageAlt}
              width={2065}
              height={762}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      {/* Two Atlas Product Lines */}
      <Section id="products" className="bg-white">
        <SectionHeading
          description={homeContent.sectionDescriptions.productLines}
          eyebrow={homeContent.ui.sectionEyebrows.productLines}
          title={homeContent.sectionTitles.productLines}
          className="mx-auto text-center"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:gap-6 lg:grid-cols-2 lg:gap-8">
          {homeContent.productLines.map((product, index) => (
            <div
              key={product.name}
              className={`card-enter flex h-full flex-col overflow-hidden rounded-lg p-5 md:p-8 lg:p-10 ${
                index === 0 ? "bg-surface-blue" : "bg-surface-orange"
              }`}
            >
             <p
  className={`text-left text-caption font-semibold uppercase leading-5 sm:text-right sm:text-label ${
    index === 0
      ? "text-atlas-blue"
      : "text-orange-600"
  }`}
>
  {product.audience}
</p>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:gap-6 md:mt-7 lg:gap-8">
                <div className="flex size-12 shrink-0 items-center justify-center md:size-16 lg:size-20">
                  {index === 0 ? (
                    <Database
                      aria-hidden="true"
                      className="size-12 stroke-[1.8] text-ink md:size-16 lg:size-20"
                    />
                  ) : (
                    <Bot
                      aria-hidden="true"
                      className="size-12 stroke-[1.8] text-ink md:size-16 lg:size-20"
                    />
                  )}
                </div>

                <h3 className="max-w-md font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {product.name}
                </h3>
              </div>

              <p className="mt-6 max-w-xl text-body leading-7 text-ink md:mt-8 md:text-body-lg md:leading-8">
                {product.description}
              </p>

              <ul className="mt-6 grid gap-3 md:mt-8 md:gap-4">
                {product.modules.map((module) => (
                  <li
                    key={module}
                    className="flex items-start gap-3 text-body leading-7 text-ink"
                  >
                    <Check
                      aria-hidden="true"
                      className={`mt-1 size-5 shrink-0 stroke-[2.5] ${
                        index === 0
                          ? "text-atlas-blue"
                          : "text-orange-600"
                      }`}
                    />

                    <span>{module}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 md:pt-10">
                <a
                  className="inline-flex min-h-11 w-full items-center justify-between gap-3 text-body font-semibold text-atlas-blue transition-transform duration-200 hover:translate-x-1 sm:w-auto sm:justify-start"
                  href={localizeHref(lang, product.link)}
                >
                  {homeContent.ui.learnMore}

                  <span aria-hidden="true" className="text-section-title leading-none">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Leaders Choose Atlas */}
      <WhyAtlasSection lang={lang} />

      {/* Final Contact CTA */}
      <Section id="final-cta" className="bg-surface">
        <div className="border border-atlas-blue/25 bg-surface-blue p-5 md:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div className="max-w-3xl">
              <Eyebrow>
                {homeContent.ui.sectionEyebrows.finalCta}
              </Eyebrow>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:mt-6 md:text-section-title-md">
                {homeContent.sectionTitles.finalCta}
              </h2>

              <p className="mt-4 max-w-2xl text-body leading-7 text-muted md:mt-5 md:text-body-lg md:leading-8">
                {homeContent.ui.finalCtaDescription}
              </p>

              <p className="mt-6 font-mono text-eyebrow uppercase tracking-eyebrow text-muted">
                {homeContent.ui.illustrativeDemoData}
              </p>
            </div>

            <Button
              className="w-full sm:w-auto"
              href={localizeHref(lang, "/contact")}
            >
              {homeContent.ui.contactUs}
              <ArrowLabel inverse />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
