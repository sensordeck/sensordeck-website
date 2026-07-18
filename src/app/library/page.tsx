import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
      {children}
    </p>
  );
}

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>
  );
}

const libraryResources = [
  {
    id: "01",
    title: "Technical White Papers",
    description:
      "深入了解运行时智能基础设施、证据治理和调查生命周期。6篇技术白皮书覆盖 Atlas 核心概念。",
    href: "/library/white-papers",
    items: "6 篇白皮书",
  },
  {
    id: "02",
    title: "Documentation",
    description:
      "面向开发者的完整文档站点，包含架构、CLI、集成、模式和术语。",
    href: "/library/documentation",
    items: "完整技术文档",
  },
  {
    id: "03",
    title: "Demo & Walkthrough",
    description:
      "通过视频、交互式 UI 和示例数据了解 Atlas 工作方式。包含 2 分钟概览和完整调查演练。",
    href: "/library/demo",
    items: "4 个演示项目",
  },
  {
    id: "04",
    title: "FAQ",
    description:
      "关于 Atlas 平台、证据所有权和运营原则的常见问题解答。",
    href: "/library/faq",
    items: "10 个常见问题",
  },
];

export default function LibraryIndexPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Hero */}
        <Section id="library-hero" className="bg-white">
          <div className="max-w-4xl">
            <Eyebrow>SensorDeck Library</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
              技术阅读与资源
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">
              面向工程和运营团队的技术白皮书、文档、演示和常见问题解答。
            </p>
          </div>
        </Section>

        {/* Resources Grid */}
        <Section id="resources" className="bg-surface">
          <div className="grid gap-6 md:grid-cols-2">
            {libraryResources.map((resource) => (
              <Card
                className="flex min-h-64 flex-col justify-between"
                key={resource.id}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {resource.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {resource.items}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink">
                    {resource.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                    href={resource.href}
                  >
                    浏览
                    <ArrowLabel />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Quick Links */}
        <Section id="quick-access" className="bg-white">
          <div className="max-w-3xl">
            <Eyebrow>Quick access</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              快速访问
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/white-papers"
            >
              <span className="font-mono text-xs text-sensor-tan">WP</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                White Papers
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/documentation"
            >
              <span className="font-mono text-xs text-sensor-tan">DOCS</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                Documentation
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/demo"
            >
              <span className="font-mono text-xs text-sensor-tan">DEMO</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                Demo & Videos
              </span>
            </a>
            <a
              className="flex min-h-32 flex-col justify-between border border-border bg-surface p-5 transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              href="/library/faq"
            >
              <span className="font-mono text-xs text-sensor-tan">FAQ</span>
              <span className="mt-4 text-sm font-semibold text-ink">
                常见问题
              </span>
            </a>
          </div>
        </Section>

        {/* CTA */}
        <Section id="library-cta" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>Request resources</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  需要更多技术信息？
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  联系我们获取完整白皮书、演示访问权限或讨论您的运行时治理需求。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:contact@sensordeck.tech">
                  联系我们
                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
                </Button>
                <Button href="/#request-demo" variant="secondary">
                  请求演示
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
