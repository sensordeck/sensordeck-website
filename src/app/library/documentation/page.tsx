import Button from "@/components/website/Button";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { libraryContent } from "@/content/zh/library";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
      {children}
    </p>
  );
}

export default function DocumentationPage() {
  const { documentation } = libraryContent;

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
            <span className="font-semibold text-ink">文档</span>
          </nav>
        </Section>

        {/* Hero */}
        <Section id="documentation-hero" className="bg-white pt-8">
          <div className="max-w-3xl">
            <Eyebrow>{documentation.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
              {documentation.title}
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">
              {documentation.description}
            </p>
          </div>
        </Section>

        {/* Documentation Content */}
        <Section id="docs-content" className="bg-surface">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="border border-border bg-white p-6 md:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                文档主题
              </p>
              <ul className="mt-6 grid gap-3">
                {documentation.topics.map((topic) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-6 text-ink"
                    key={topic}
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-atlas-blue" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-2xl leading-10 tracking-tight text-ink">
                  完整的开发者和集成文档托管在独立文档站点。
                </p>
                <p className="mt-6 text-base leading-8 text-muted">
                  {documentation.note}
                </p>
              </div>
              <div className="mt-8">
                <Button
                  href={documentation.link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {documentation.link.text}
                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Use Cases */}
        <Section id="use-cases" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>文档适用于</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              面向工程团队的完整参考
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "开发者集成指南",
              "CLI 命令参考",
              "Evidence Pack 模式",
              "API 文档",
              "部署配置",
              "故障排查",
              "发布说明",
              "最佳实践",
            ].map((item, index) => (
              <div
                className="border border-border bg-surface p-5"
                key={item}
              >
                <span className="font-mono text-xs text-sensor-tan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library/white-papers"
            >
              ← 白皮书
            </a>
            <a
              className="text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
              href="/library/demo"
            >
              演示 →
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
