import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { libraryContent } from "@/content/zh/library";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
      {children}
    </p>
  );
}

export default function FAQPage() {
  const { faq } = libraryContent;

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
            <nav aria-label="面包屑导航" className="flex items-center gap-2 text-sm">
            <a className="text-muted hover:text-ink" href="/library">
              资料库
            </a>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">FAQ</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="faq-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              {faq.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl heading-description">
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
                <span className="font-mono text-xs text-sensor-tan">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-ink">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Additional Resources */}
        <Section id="more-info" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>需要更多信息？</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
              更多资源
            </h2>
            <p className="mt-6 text-base leading-8 text-muted heading-description">
              如果您的问题未在此列出，请查阅我们的技术白皮书和文档，或直接联系我们的团队。
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/white-papers"
            >
              <span className="font-mono text-xs text-sensor-tan">01</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                阅读白皮书
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/documentation"
            >
              <span className="font-mono text-xs text-sensor-tan">02</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                查看文档
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="mailto:contact@sensordeck.tech"
            >
              <span className="font-mono text-xs text-sensor-tan">03</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                联系我们
              </span>
            </a>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library/demo"
            >
              ← 演示
            </a>
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library"
            >
              返回资料库
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
