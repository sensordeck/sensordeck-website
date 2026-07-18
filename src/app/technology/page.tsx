import { technologyContent } from "@/content/zh/technology"
import Header from "@/components/website/Header"
import Footer from "@/components/website/Footer"
import Button from "@/components/website/Button"

export default function TechnologyPage() {
  const { hero, sections, cta } = technologyContent

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-screen-xl px-6 py-24 sm:px-8 lg:px-12">
        <h1 className="mb-6 font-sans text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="max-w-3xl font-sans text-lg text-ink/70 sm:text-xl">
          {hero.subtitle}
        </p>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-screen-xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="rounded-lg border border-ink/10 bg-paper p-8"
            >
              <div className="mb-4">
                <span className="font-mono text-sm text-atlas-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="mb-4 font-sans text-2xl font-semibold text-ink">
                {section.title}
              </h2>

              <p className="mb-6 font-sans text-base text-ink/70">
                {section.description}
              </p>

              {/* Code block content */}
              {section.content && (
                <pre className="mb-6 overflow-x-auto rounded-md bg-ink/[0.02] p-4 font-mono text-sm text-ink/80">
                  {section.content}
                </pre>
              )}

              {/* Explanation */}
              {section.explanation && (
                <p className="mb-6 font-sans text-base text-ink/80">
                  {section.explanation}
                </p>
              )}

              {/* Compared to list */}
              {section.comparedTo && (
                <ul className="mb-6 space-y-2">
                  {section.comparedTo.map((item, i) => (
                    <li key={i} className="font-mono text-sm text-ink/70">
                      • {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Surfaces list */}
              {section.surfaces && (
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {section.surfaces.map((surface, i) => (
                    <div
                      key={i}
                      className="rounded border border-ink/10 bg-ink/[0.02] px-3 py-2 font-mono text-xs text-ink/70"
                    >
                      {surface}
                    </div>
                  ))}
                </div>
              )}

              {/* Concepts list */}
              {section.concepts && (
                <dl className="mb-6 space-y-3">
                  {section.concepts.map((concept, i) => (
                    <div key={i}>
                      <dt className="mb-1 font-mono text-sm font-semibold text-ink">
                        {concept.term}
                      </dt>
                      <dd className="font-sans text-sm text-ink/70">
                        {concept.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Warning */}
              {section.warning && (
                <div className="mb-6 rounded-md border border-atlas-blue/20 bg-atlas-blue/5 p-4">
                  <p className="font-mono text-sm text-ink/80">
                    {section.warning}
                  </p>
                </div>
              )}

              {/* Link */}
              {section.link && (
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-sm text-atlas-blue hover:underline"
                >
                  {section.link.text}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-screen-xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="rounded-lg border border-atlas-blue/20 bg-atlas-blue/5 p-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-semibold text-ink">
            {cta.title}
          </h2>
          <p className="mb-8 font-sans text-lg text-ink/70">
            {cta.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              href={cta.primaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.primaryButton.text}
            </Button>
            <Button variant="secondary" href={cta.secondaryButton.href}>
              {cta.secondaryButton.text}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
