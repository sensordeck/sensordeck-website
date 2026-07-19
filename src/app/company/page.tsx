import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

const principles = [
  {
    number: "01",
    label: "证据所有权",
    title: "客户拥有他们的证据",
    description:
      "运行时数据、调查材料和由此形成的组织记忆，应该留在客户的运营边界内。SensorDeck 提供结构和工具，但不把客户的证据变成我们的资产。",
  },
  {
    number: "02",
    label: "No Black Box",
    title: "系统保持可审查",
    description:
      "Atlas 帮助团队观察、整理和调查运行时事件，但不隐藏关键判断。证据来源、推理范围和责任边界都应该能够被工程团队复核。",
  },
  {
    number: "03",
    label: "明确边界",
    title: "工程和责任边界清晰",
    description:
      "Atlas 不替代 OEM 工程工具，也不凭空决定根因或责任。它把运行时事实组织成可协作的证据，让负责的人做出最终判断。",
  },
];

const boundaries = [
  {
    title: "我们负责什么",
    items: [
      "建立跨传感器、总线、Linux/SBC 和 ROS 输入的运行时证据结构",
      "帮助团队把一次调查沉淀为可复用的组织知识",
      "让 OEM、传感器制造商和调查团队围绕同一份证据协作",
    ],
  },
  {
    title: "我们不替代什么",
    items: [
      "不替代客户既有的工程、质量、测试或安全流程",
      "不把相关性包装成自动根因结论",
      "不要求客户交出数据所有权，也不制造不可解释的决策路径",
    ],
  },
];

export default function CompanyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main>
        <Section id="company-hero" className="bg-white pt-24 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                SensorDeck / 公司
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl lg:text-7xl heading-title">
                关于 SensorDeck
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-muted md:text-2xl heading-description">
                定义运行时智能基础设施类别，让机器人团队能够在真实运行中观察、理解、调查、改进并复用知识。
              </p>
            </div>

            <div
              className="border-l-2 border-sensor-tan pl-5 text-sm leading-7 text-muted stagger-item lg:mb-2"
              style={{ animationDelay: "240ms" }}
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sensor-tan">
                Runtime Intelligence Infrastructure
              </p>
              <p className="mt-3">
                从部署前的运行时画像，到部署后的调查与组织记忆，SensorDeck
                关注的是机器人系统跨边界运行时发生了什么。
              </p>
            </div>
          </div>
        </Section>

        <Section id="mission" className="bg-surface section-enter">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                使命与愿景
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                让每一次运行时事件都能成为可靠的工程输入
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-ink heading-description">
                机器人系统的问题很少只发生在单一组件里。传感器、总线、电源、Linux/SBC
                运行时、ROS 输入和现场环境共同决定了系统在压力下的表现。
              </p>
              <p className="mt-6 text-base leading-8 text-muted stagger-item">
                SensorDeck 创建 Atlas，是为了把这些分散的运行时事实组织成有边界、可审查、可协作的证据。我们希望帮助团队更快发现偏差，更准确地开展调查，并把解决问题的经验带回下一次部署。
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["观察真实运行", "理解证据边界", "复用组织记忆"].map((item, index) => (
                  <div
                    className="border-t-2 border-atlas-blue pt-4 stagger-item"
                    key={item}
                    style={{ animationDelay: `${180 + index * 60}ms` }}
                  >
                    <span className="font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="category" className="bg-white section-enter">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div className="max-w-md">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                类别陈述
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                Runtime Intelligence Infrastructure for Robotics
              </h2>
            </div>
            <div className="border-y border-border py-8 md:py-10 stagger-item">
              <p className="max-w-3xl text-2xl font-medium leading-10 tracking-tight text-ink md:text-3xl">
                机器人需要的不只是更多日志，而是一套能够跨运行时边界管理证据、支持调查并保存知识的基础设施。
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                Atlas 面向传感器制造商和机器人 OEM，覆盖从部署前到部署后的运行时工作。它把运行时观察、证据包、调查工作区和历史 RGA 连接成一条可复核的工程路径。
              </p>
            </div>
          </div>
        </Section>

        <Section id="principles" className="bg-surface">
          <div>
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                核心原则
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                先明确边界，再扩大智能
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                我们对产品能力的判断，首先来自证据能否被拥有、理解和复核。以下原则贯穿 Atlas
                的产品设计与工程实现。
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
                      <span className="font-mono text-xs font-semibold text-atlas-blue">
                        {principle.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sensor-tan">
                        {principle.label}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold leading-8 tracking-tight text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
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
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              工程边界
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
              为可协作的判断保留空间
            </h2>
            <p className="mt-5 text-base leading-8 text-muted heading-description">
              好的基础设施不会模糊责任。它应该让团队知道系统收集了什么、结论依据是什么，以及下一步需要谁来判断。
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {boundaries.map((boundary, index) => (
              <article
                className="border border-border bg-surface p-6 card-enter stagger-item md:p-8"
                key={boundary.title}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {boundary.title}
                </h3>
                <ul className="mt-6 grid gap-4">
                  {boundary.items.map((item) => (
                    <li className="flex items-start gap-3 text-sm leading-7 text-muted" key={item}>
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
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                与我们沟通
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                从一个真实的运行时问题开始
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                无论您正在构建传感器、运营机器人车队，还是负责调查现场事件，都可以从一段具体的运行时边界开始讨论。
              </p>
            </div>
            <div className="stagger-item lg:justify-self-end" style={{ animationDelay: "240ms" }}>
              <Button href="/contact" className="arrow-parent">
                联系 SensorDeck
                <span className="arrow-slide" aria-hidden="true">
                  →
                </span>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
