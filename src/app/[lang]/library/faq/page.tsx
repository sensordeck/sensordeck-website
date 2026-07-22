import Link from "next/link";

import Section from "@/components/website/Section";
import { getLibraryContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-eyebrow font-semibold uppercase leading-normal tracking-eyebrow sm:text-eyebrow-md lg:text-eyebrow-lg heading-eyebrow text-atlas-blue">
      {children}
    </p>
  );
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { faq, ui } = await getLibraryContent(lang);

  return (
    <div className="bg-white font-sans text-ink">

        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
            <nav aria-label={ui.breadcrumbLabel} className="flex items-center gap-2 text-label leading-normal">
            <Link className="text-muted hover:text-ink" href={localizeHref(lang, "/library")}>
              {ui.libraryLabel}
            </Link>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">FAQ</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="faq-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg heading-title">
              {faq.title}
            </h1>
            <p className="mt-7 text-body-lg leading-relaxed text-muted md:text-body-lg-md heading-description">
              {faq.description}
            </p>
          </div>
        </Section>

        {/* FAQ Grid */}
        <Section id="faq-content" className="bg-surface">
          <div className="grid gap-6 lg:grid-cols-2">
            {faq.questions.map((item, index) => (
              <div
                className="border-l-2 border-atlas-blue bg-white p-6 md:p-8 stagger-item"
                key={item.question}
              >
                <span className="font-mono text-code leading-normal text-atlas-blue">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {item.question}
                </h3>
                <p className="mt-4 text-body leading-relaxed text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

       
        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library/demo")}
            >
              {ui.previousDemo}
            </Link>
            <Link
              className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
              href={localizeHref(lang, "/library")}
            >
              {ui.backToLibrary}
            </Link>
          </div>
        </Section>

    </div>
  );
}
