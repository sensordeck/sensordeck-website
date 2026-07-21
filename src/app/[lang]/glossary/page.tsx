import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { glossaryZh } from "@/content/zh/glossary";
import { glossaryEn } from "@/content/en/glossary";

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = lang === "zh" ? glossaryZh : glossaryEn;

  // Group terms by category
  const termsByCategory = content.terms.reduce(
    (acc, term) => {
      if (!acc[term.category]) {
        acc[term.category] = [];
      }
      acc[term.category].push(term);
      return acc;
    },
    {} as Record<string, typeof content.terms>
  );

  return (
    <div className="bg-white">

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {content.description}
            </p>
          </div>

          {/* Terms by category */}
          <div className="mx-auto mt-16 max-w-5xl space-y-16">
            {Object.entries(termsByCategory).map(([category, terms]) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold tracking-tight text-ink border-b border-border pb-3">
                  {content.categories[category as keyof typeof content.categories]}
                </h2>
                <dl className="mt-8 space-y-8">
                  {terms.map((term) => (
                    <div key={term.term} className="border-l-2 border-atlas-blue pl-6">
                      <dt className="text-lg font-semibold text-ink">
                        {term.term}
                        {term.chinese && (
                          <span className="ml-3 text-base font-normal text-muted">
                            {term.chinese}
                          </span>
                        )}
                      </dt>
                      <dd className="mt-3 text-base leading-7 text-muted">
                        {term.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}
