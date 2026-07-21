import Button from "@/components/website/Button";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import productsContent from "@/content/zh/products";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[9px] size-1.5 shrink-0 rounded-full bg-atlas-blue"
    />
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7 text-ink md:text-base"
        >
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const investigationFlow = [
  {
    number: "01",
    title: "REF Intake",
    description:
      "Tier 1 记录客户报告、设备、环境、时间范围、事件类型和证据可用性。",
  },
  {
    number: "02",
    title: "Evidence Pack",
    description:
      "将相关运行时数据整理为有边界、可引用、可验证的统一证据入口。",
  },
  {
    number: "03",
    title: "Historical RGA Recall",
    description:
      "优先召回历史调查资产，并说明匹配特征、差异条件与 why retrieved。",
  },
  {
    number: "04",
    title: "Investigation Context",
    description:
      "将当前 REF、Evidence Pack、历史候选、已知缺口和调查问题放入同一上下文。",
  },
  {
    number: "05",
    title: "建议调查层级",
    description:
      "建议进入 Tier 1、Tier 2、Tier 3 或 Sensor FAE 调查流程，由授权工程师确认。",
  },
  {
    number: "06",
    title: "Engineering Investigation",
    description:
      "OEM 工程师或 Sensor FAE 执行调查路径、补充证据、复现和工程评估。",
  },
  {
    number: "07",
    title: "IR · LL · Closure",
    description:
      "工程师提交 Investigation Result 与 Lesson Learned，完成调查关闭条件。",
  },
  {
    number: "08",
    title: "RGA · Assist Vault · Reuse",
    description:
      "将完成的调查沉淀为可检索、可比较、可复用的组织调查资产。",
  },
];

const refExamples = [
  "Unexpected Stop",
  "Collision",
  "Obstacle Miss",
  "False Obstacle",
  "Localization Failure",
  "Path Deviation",
  "Fall",
  "Manipulation Failure",
];

const coreCapabilities = [
  {
    title: "统一证据入口",
    description:
      "调查不再直接从海量原始日志开始。Atlas 使用 Evidence Pack™ 组织时间线、运行时 Surface、事件标记、完整性信息与原始证据引用。",
  },
  {
    title: "历史调查召回",
    description:
      "每一次 REF 优先检索 Historical RGA™。支持强匹配、部分匹配和弱匹配，并保留 why retrieved，避免工程团队重新从零开始。",
  },
  {
    title: "统一调查上下文",
    description:
      "将当前事件、五段证据窗口、异常现象、历史候选、证据缺口和下一步调查问题组织在同一个 Investigation Context 中。",
  },
  {
    title: "调查路由建议",
    description:
      "根据当前证据与事件范围生成建议调查层级，帮助组织将事件路由至 Tier 1、Tier 2、Tier 3 或 Sensor FAE。",
  },
  {
    title: "OEM 与 Sensor 协同",
    description:
      "通过 Sensor Engagement Pack™（传感器协同调查包），让 OEM 与传感器制造商基于同一组证据、问题和数据边界开展调查。",
  },
  {
    title: "调查资产复用",
    description:
      "IR、LL、调查路径、排除路径和关闭记录被转化为 RGA，并进入 Assist Vault，供未来 REF 调查召回和复用。",
  },
];

const primaryOutputs = [
  {
    title: "REF Ticket",
    description: "记录事件、客户报告、时间范围、严重度和路由状态。",
  },
  {
    title: "Evidence Pack™",
    description: "提供统一、受控、可引用的运行时调查证据入口。",
  },
  {
    title: "Historical RGA Match Result",
    description: "记录历史候选、匹配等级、相同维度、差异维度和 why retrieved。",
  },
  {
    title: "Investigation Context",
    description: "统一组织当前证据、历史资产、调查缺口与下一步问题。",
  },
  {
    title: "建议调查层级",
    description: "为 Tier 1、Tier 2、Tier 3 或 Sensor FAE 提供路由建议。",
  },
  {
    title: "Sensor Engagement Pack™",
    description: "支持 OEM 与 Sensor FAE 的标准化证据交换和调查协作。",
  },
  {
    title: "IR · LL · Closure",
    description: "保存工程调查结果、可复用经验和正式关闭记录。",
  },
  {
    title: "RGA · Assist Vault",
    description: "将完成的调查转化为未来可以检索和复用的组织资产。",
  },
];

const atlasSupports = [
  "REF Intake 与 Admission Policy",
  "Evidence Pack 引用与五段证据窗口",
  "Historical RGA 强匹配、部分匹配与弱匹配召回",
  "Why Retrieved 与匹配差异说明",
  "Investigation Context",
  "建议调查层级",
  "OEM Tier 1 / Tier 2 / Tier 3 Workflow",
  "Sensor Manufacturer FAE Workflow",
  "Sensor Engagement Pack Mode A / Mode B",
  "IR / LL / Closure Artifact Management",
  "RGA Generation、Assist Vault 与 Future REF Reuse",
  "客户控制的数据所有权与交换边界",
];

const atlasDoesNotDo = [
  "自动确认 Root Cause 或 Causality",
  "自动判定 OEM Fault 或 Sensor Fault",
  "执行 Liability Assignment",
  "替代 Tier 2、Tier 3 工程师或 Sensor FAE",
  "自动生成未经工程师确认的最终 IR 或 LL",
  "将历史调查结论直接复制为当前结论",
];

export default function RuntimeInvestigationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1 py-12 sm:py-16 lg:py-20">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
              机器人 OEM
            </p>

            <h1 className="mt-4 max-w-5xl text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
              Atlas Runtime Investigation™
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              将一次 Runtime Execution Failure，从客户报告推进到统一证据、
              历史召回、工程调查、调查关闭和未来复用。
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Atlas 帮助机器人 OEM 将运行时事件转化为有界
              Evidence Pack™，创建和管理 REF 工单，召回 Historical
              RGA™，协调 Tier 1、Tier 2、Tier 3 与 Sensor FAE，并将完成的
              IR 与 LL 沉淀为组织调查资产。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-demo">
                {productsContent.ctaText}
              </Button>

              <Button href="/products" variant="outline">
                查看所有产品
              </Button>
            </div>
          </div>
        </Section>

        {/* Product statement */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Runtime Execution Failure
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                REF 描述运行时事件，
                <br />
                不自动等同于根因。
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                机器人突然停止、碰撞、漏障、定位失败或路径偏离，都可以成为
                REF。事件可能同时涉及传感器、总线、电源、Linux Runtime、
                驱动、ROS Topic 或应用行为。
              </p>

              <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-white">
                Atlas 组织证据和调查流程，但不在 REF 建立时自动确认根因、
                因果关系或责任归属。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {refExamples.map((item) => (
                <div
                  key={item}
                  className="border border-white/15 bg-white/[0.04] px-4 py-4 font-mono text-xs font-semibold leading-6 text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Investigation flow */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Standard Investigation Chain
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                从 REF Intake 到 Future REF Reuse
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                Atlas 将零散的客户报告、运行时数据、历史经验和工程结果，
                组织为一条可追踪、可关闭、可复用的标准调查链。
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {investigationFlow.map((step) => (
                <article
                  key={step.number}
                  className="min-h-[230px] bg-white p-6 md:p-7"
                >
                  <span className="font-mono text-xs font-semibold text-atlas-blue">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
              <p className="text-center text-base font-semibold leading-8 text-ink md:text-lg">
                当前调查从结构化证据开始。
                <br className="sm:hidden" />
                下一次调查，从组织记忆开始。
              </p>
            </div>
          </div>
        </Section>

        {/* Core capabilities */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Core Capabilities
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  为机器人 OEM 建立标准化调查能力
                </h2>

                <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                  Atlas 不替代现有日志、ROS2、驱动工具链或工程团队。
                  它在这些系统之上，建立证据入口、历史召回、调查路由和资产复用层。
                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                {coreCapabilities.map((capability) => (
                  <article
                    key={capability.title}
                    className="bg-white p-6 md:p-8"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {capability.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {capability.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* OEM and Sensor collaboration */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                OEM ↔ Sensor Manufacturer
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Engagement Pack™（协同调查包）
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                当 REF 涉及 Sensor Candidate 时，OEM 可以通过 Sensor
                Engagement Pack™，将相关 Evidence Pack、调查上下文、
                Sensor Surface、历史候选、问题清单与数据交换边界发送给
                Sensor FAE。
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {[
                "OEM REF",
                "Evidence Pack",
                "Engagement Pack",
                "Sensor REF",
                "Sensor IR / LL",
                "OEM Closure",
              ].map((step, index, items) => (
                <div
                  key={step}
                  className="flex min-h-[150px] flex-col justify-between border border-border bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index < items.length - 1 ? (
                      <ArrowIcon />
                    ) : null}
                  </div>

                  <p className="mt-8 text-sm font-semibold leading-6 text-ink">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                  Exchange Mode A
                </p>

                <h3 className="mt-4 text-xl font-semibold text-ink">
                  Raw Evidence Reference
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  在 OEM 授权情况下，Sensor FAE 可以查看指定的原始数据、
                  Packet Capture、Frame、Point Cloud、Driver Log
                  或运行时时间线引用。
                </p>
              </article>

              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                  Exchange Mode B
                </p>

                <h3 className="mt-4 text-xl font-semibold text-ink">
                  Signature and Recall
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  当原始数据不能直接共享时，仅交换 Evidence Signature、
                  Runtime Metadata、Timeline Summary、Surface Coverage、
                  历史召回结果和调查问题。
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Investigation Assets
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                每一次完成的调查，
                <br />
                都成为未来可以复用的组织资产
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {primaryOutputs.map((output) => (
                <article
                  key={output.title}
                  className="border border-border bg-white p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {output.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {output.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Atlas Supports
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Atlas 负责组织证据、流程与调查资产
                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasSupports} />
                </div>
              </article>

              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
                  Constitutional Boundary
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Atlas 不替代授权工程判断
                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-sm font-semibold leading-7 text-ink">
                  历史资产用于辅助当前调查，不替代当前证据，也不自动将历史结论升格为本次确定结论。
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Relationship */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Sensor Governance™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  建立运行时证据基础
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  Observe → Persist → Retain → Export → Evidence Pack
                </p>
              </article>

              <div className="hidden items-center justify-center px-3 text-2xl text-atlas-blue lg:flex">
                <ArrowIcon />
              </div>

              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Investigation™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  将证据转化为调查与组织记忆
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  Recall → Context → Investigation → IR / LL → Closure → RGA
                  → Reuse
                </p>
              </article>
            </div>
          </div>
        </Section>

               {/* Final CTA */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
              From Evidence to Organizational Memory
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Atlas 不替代工程师。
              <br />
              Atlas 让工程师不再从零开始。
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              让每一次 REF 从结构化证据和历史 RGA 开始，
              让每一次完成的调查成为下一次可以复用的组织能力。
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/request-demo">
                {productsContent.ctaText}
              </Button>

              <a
                href="/products/runtime-sensor-governance"
                className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              >
                查看 Runtime Sensor Governance
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
