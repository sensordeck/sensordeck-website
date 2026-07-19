import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
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

export default function WhitePapersPage() {
  const { whitePapers } = libraryContent;

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Breadcrumb */}
        <Section className="bg-white pb-0">
          <nav aria-label="面包屑导航" className="flex items-center gap-2 text-sm">
            <a
              className="text-muted hover:text-ink"
              href="/library"
            >
              资料库
            </a>
            <span className="text-muted">/</span>
            <span className="font-semibold text-ink">白皮书</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="white-papers-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{whitePapers.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              {whitePapers.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl heading-description">
              {whitePapers.description}
            </p>
          </div>
        </Section>

        {/* White Papers Grid */}
        <Section id="papers" className="bg-surface">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whitePapers.papers.map((paper, index) => (
              <Card className="flex min-h-64 flex-col justify-between stagger-item" key={paper.id}>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {paper.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {paper.format}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-7 tracking-tight text-ink">
                    {paper.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {paper.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted">{paper.size}</span>
                  <button
                    className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                    disabled
                    type="button"
                  >
                    即将推出
                  </button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex gap-4 border border-border bg-white px-5 py-4 text-sm leading-7 text-muted md:px-6">
            <span className="mt-1 font-mono text-xs text-sensor-tan">/</span>
            <p>
              白皮书将作为 PDF 下载或在 docs.sensordeck.tech 上托管的选定页面提供。
            </p>
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library"
            >
              ← 返回资料库
            </a>
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library/documentation"
            >
              文档 →
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
