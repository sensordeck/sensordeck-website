import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>
  );
}

const demoPages = [
  {
    id: "01",
    role: "Tier 1 Support",
    title: "Customer-Facing Portal",
    description:
      "快速创建 REF 并确认运行时数据集可用性。演示 4 步工作流：事件描述、机器人信息、运行时证据、审核路由。",
    href: "/demo/tier1",
    audience: "一线支持团队",
  },
  {
    id: "02",
    role: "Tier 2/3 Engineer",
    title: "Investigation Dashboard",
    description:
      "将长运行时数据集归约为候选证据包。包含候选时间线、五窗口视图、历史 RGA 召回、EGP 生成器。",
    href: "/demo/investigation",
    audience: "OEM 工程团队",
  },
  {
    id: "03",
    role: "Sensor FAE",
    title: "Sensor FAE Workspace",
    description:
      "验证 OEM EGP、审查共享证据上下文、召回历史传感器 RGA、编写 IR / LL，返回传感器响应。",
    href: "/demo/sensor-fae",
    audience: "传感器厂商工程师",
  },
  {
    id: "04",
    role: "CTO / VP Engineering",
    title: "Executive Dashboard",
    description:
      "调查运营效率、证据覆盖率、组织记忆、供应商协作和示意性 ROI 的执行视图。",
    href: "/demo/cto",
    audience: "工程管理层",
  },
];

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Hero */}
        <Section id="demo-hero" className="bg-white">
          <div className="max-w-4xl">
            <Eyebrow>Atlas Demo UI</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
              四个角色演示界面
            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">
              通过一个连贯的客户故事，展示 Atlas
              如何为不同角色提供运行时调查支持。所有演示使用共享静态数据。
            </p>
          </div>
        </Section>

        {/* Demo Story Context */}
        <Section id="demo-context" className="bg-surface">
          <div className="border border-border bg-white p-6 md:p-8">
            <Eyebrow>Demo scenario</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
              演示场景：Pudu Robotics 导航偏差调查
            </h2>
            <div className="mt-6 grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-mono text-xs text-sensor-tan">Customer</p>
                <p className="mt-2 text-ink">Pudu Robotics</p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">Robot SN</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  PUDU-T300-7F3A-0021
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">REF ID</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  REF-2026-0716-0012
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">
                  Primary Evidence Pack
                </p>
                <p className="mt-2 font-mono text-xs text-ink">EP-C03</p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">EGP ID</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  EGP-HESAI-2026-0042
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">Sensor FAE</p>
                <p className="mt-2 text-ink">Wang Kai (Hesai)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Demo Pages Grid */}
        <Section id="demo-pages" className="bg-white">
          <div className="grid gap-6 md:grid-cols-2">
            {demoPages.map((page) => (
              <Card
                className="flex min-h-72 flex-col justify-between"
                key={page.id}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {page.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {page.role}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink">
                    {page.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {page.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="mb-3 text-xs text-muted">{page.audience}</div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                    href={page.href}
                  >
                    查看演示
                    <ArrowLabel />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Demo Notice */}
        <Section id="demo-notice" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 font-mono text-xs text-atlas-blue">
                NOTE
              </span>
              <div>
                <p className="text-sm leading-7 text-ink">
                  所有演示数据均为示意性内容（Illustrative Demo
                  Data）。实际部署的 Atlas
                  界面包含客户特定的运行时上下文和调查资产，不会在公开演示中展示。
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  商业指标（工时节省、成本节省）为演示估算值，不代表具体客户的实际结果。
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="demo-cta" className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <Eyebrow>Request full demo</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  需要完整的 Atlas 演示？
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">
                  联系我们安排定制化演示，包含您的实际运行时场景和调查工作流。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:contact@sensordeck.tech">
                  联系我们
                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
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
