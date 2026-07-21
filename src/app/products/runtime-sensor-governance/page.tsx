import Button from "@/components/website/Button";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import productsContent from "@/content/zh/products";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function DotIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[10px] size-1.5 shrink-0 rounded-full bg-atlas-blue"
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
          <DotIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const agentCapabilities = [
  {
    number: "01",
    title: "Observe",
    description:
      "7×24 小时持续观察 Sensor、Bus、Power、Linux Runtime、Driver 与 ROS Topic 的运行状态。",
  },
  {
    number: "02",
    title: "Persist",
    description:
      "将运行时元数据、时间戳、频率、连接状态、驱动事件与 Surface 状态持续写入 Runtime Dataset。",
  },
  {
    number: "03",
    title: "Retain",
    description:
      "按照客户定义的 Retention Policy 管理数据时长、粒度、循环空间和事件前后窗口。",
  },
  {
    number: "04",
    title: "Export",
    description:
      "按照授权将运行时数据、Evidence Pack 和完整性清单导出至客户私有调查环境。",
  },
];

const eventGenerationModes = [
  {
    label: "Manual Event Window",
    title: "Tier 1 提供约莫 REF 时段",
    description:
      "最终用户、客服或现场人员只需提供大约发生时间。Atlas 在 Runtime Dataset 中定位候选范围，并向前、向后扩展证据窗口。",
    examples: [
      "客户电话报障",
      "售后工单",
      "人工观察到异常",
      "没有明确机器触发事件",
    ],
  },
  {
    label: "Automatic Detection",
    title: "Dataset Abnormal + Cross-stream Correlation",
    description:
      "Atlas Agent 根据单一数据流异常或多个 Runtime Surface 的时间关联，自动建立候选事件中心点。",
    examples: [
      "LiDAR Topic Frequency 归零",
      "Camera Frame Interruption",
      "USB / Ethernet Disconnect",
      "Driver 与 ROS Topic 同时停止",
    ],
  },
];

const evidenceWindows = [
  {
    number: "01",
    title: "Pre-Guard",
    description:
      "保留事件前较早阶段的运行状态，观察异常是否已经逐步形成。",
  },
  {
    number: "02",
    title: "Baseline",
    description:
      "建立事件前的正常参考，用于确认频率、连续性和连接状态。",
  },
  {
    number: "03",
    title: "Deviation",
    description:
      "记录主要异常出现和发展的阶段，并对齐多个 Runtime Surface。",
  },
  {
    number: "04",
    title: "Recovery",
    description:
      "记录系统恢复、重连、重启或持续失败的过程与顺序。",
  },
  {
    number: "05",
    title: "Post-Guard",
    description:
      "验证恢复是否稳定，并观察异常是否再次发生。",
  },
];

const runtimeSurfaces = [
  "Camera",
  "LiDAR",
  "IMU",
  "GNSS",
  "USB",
  "Ethernet",
  "CAN",
  "Power",
  "Timing / PPS",
  "Linux Runtime",
  "Driver Runtime",
  "ROS Topic",
];

const outputs = [
  {
    title: "Runtime Dataset™",
    description:
      "Atlas Agent 持续观察、持久化并按照保留策略管理的运行时数据基础。",
  },
  {
    title: "Evidence Window",
    description:
      "围绕候选 REF 时段建立的 Pre-Guard、Baseline、Deviation、Recovery 和 Post-Guard 五段窗口。",
  },
  {
    title: "Evidence Pack™",
    description:
      "面向具体 REF 的标准化运行时证据包，包含时间线、Surface Coverage、事件标记和证据引用。",
  },
  {
    title: "Runtime Timeline",
    description:
      "将 Sensor、Bus、Linux、Driver 与 ROS Topic 对齐到统一时间轴。",
  },
  {
    title: "Surface Coverage Snapshot",
    description:
      "说明本次 Evidence Pack 已覆盖和未覆盖的 Runtime Surface。",
  },
  {
    title: "建议调查层级",
    description:
      "根据证据完整度、事件范围和跨数据流关联，建议进入 Tier 1、Tier 2、Tier 3 或 Sensor FAE。",
  },
  {
    title: "Export Bundle",
    description:
      "按照客户策略导出的调查数据、证据引用和完整性清单。",
  },
  {
    title: "Investigation Entry",
    description:
      "为后续 Historical RGA Recall、Investigation Context 和工程调查提供统一证据入口。",
  },
];

const atlasSupports = [
  "7×24 小时持续运行时观察",
  "Runtime Dataset 持久化",
  "Retention Policy 管理",
  "客户授权下的数据导出",
  "Tier 1 约莫 REF 时段切片",
  "Dataset Abnormal 自动触发",
  "Cross-stream Correlation",
  "Five-Window Evidence Model",
  "Evidence Pack 生成",
  "Runtime Timeline 对齐",
  "Runtime Surface Coverage",
  "建议调查层级",
  "OEM 私有环境部署",
];

const atlasDoesNotDo = [
  "自动确认 Root Cause",
  "自动确认因果关系",
  "执行 Liability Assignment",
  "替代 OEM 工程师或 Sensor FAE",
  "SLAM、Navigation 或 Motion Planning 调试",
  "AI Model 或 Robot Business Logic 调试",
  "将运行时关联自动升格为工程结论",
];

export default function RuntimeSensorGovernancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1 py-12 sm:py-16 lg:py-20">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
              Sensor Runtime Boundary
            </p>

            <h1 className="mt-4 max-w-5xl text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
              Atlas Runtime Sensor Governance™
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              为机器人传感器运行时边界建立持续观察、证据保留和事件窗口生成能力。
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">
              Atlas 将 Sensor、Bus、Power、Linux Runtime、Driver 与 ROS
              Topic 之间分散的运行时数据，组织为可保留、可导出、可调查的
              Runtime Evidence，并在 REF 发生时生成标准化 Evidence Pack™。
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

        {/* Core positioning */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Runtime Evidence Chain
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                不是生成更多日志。
                <br />
                是建立持续在线的运行时证据链。
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                Atlas Agent 在机器人主控板或指定运行环境中持续运行，
                将瞬时状态沉淀为可追踪的 Runtime Dataset，并按照客户策略进行保留和导出。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border border-white/15 bg-white/[0.04] p-5"
                >
                  <span className="font-mono text-xs font-semibold text-[#70a9ff]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Runtime boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Boundary
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Atlas 持续观察传感器到主控系统之间的运行时边界
                </h2>

                <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                  实际覆盖范围由部署配置、Surface Registry、可访问数据和客户数据策略决定。
                </p>
              </div>

              <div>
                <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {runtimeSurfaces.map((surface) => (
                    <div
                      key={surface}
                      className="bg-white px-5 py-5 font-mono text-sm font-semibold text-ink"
                    >
                      {surface}
                    </div>
                  ))}
                </div>

                <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6">
                  <p className="text-sm font-semibold leading-7 text-ink md:text-base">
                    Physical Sensor → Raw Output → Power / Bus → Linux Kernel /
                    Driver → ROS Topic / Application Callback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Agent chain */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Atlas Agent
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Observe → Persist → Retain → Export
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                Atlas Agent 的目标不是立即判断根因，而是持续建立可保留、可引用和可导出的运行时事实记录。
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item, index) => (
                <article
                  key={item.title}
                  className="flex min-h-[230px] flex-col border border-border bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {item.number}
                    </span>

                    {index < agentCapabilities.length - 1 ? (
                      <ArrowIcon />
                    ) : null}
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Event generation */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Evidence Pack Generation
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                手动时段与自动检测，
                <br />
                共同生成候选事件窗口
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                Atlas 支持由 Tier 1 提供约莫 REF 时段，也支持根据 Runtime
                Dataset 异常和跨数据流关联自动建立 Candidate Event Time。
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {eventGenerationModes.map((mode) => (
                <article
                  key={mode.label}
                  className="border border-border bg-white p-7 md:p-9"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                    {mode.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                    {mode.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    {mode.description}
                  </p>

                  <div className="mt-7">
                    <FeatureList items={mode.examples} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 text-center md:p-8">
              <p className="text-base font-semibold leading-8 text-ink md:text-lg">
                Candidate Event 和 Cross-stream Correlation 是调查入口，
                不是 Root Cause、Causality 或 Liability 结论。
              </p>
            </div>
          </div>
        </Section>

        {/* Five-window model */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Five-Window Evidence Model
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                不只截取异常瞬间，
                <br />
                保留事件前、中、后的完整变化
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                每个 Evidence Pack 按五段时间窗口组织，
                为正常状态、异常发展、恢复过程和恢复稳定性提供统一证据上下文。
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {evidenceWindows.map((window, index) => (
                <article
                  key={window.number}
                  className="flex min-h-[240px] flex-col border border-border bg-surface p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {window.number}
                    </span>

                    {index < evidenceWindows.length - 1 ? (
                      <ArrowIcon />
                    ) : null}
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                    {window.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {window.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Candidate tier */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Investigation Routing
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                从 Five-Window Evidence
                <br />
                到建议调查层级
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                Atlas 根据证据完整度、Runtime Surface 覆盖范围、
                异常强度和跨数据流关联，生成调查路由建议。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Tier 1",
                  description: "继续补充客户报告、时间、设备和证据可用性。",
                },
                {
                  title: "Tier 2",
                  description: "进入标准 Evidence Pack 审查和工程调查路径。",
                },
                {
                  title: "Tier 3",
                  description: "升级至跨系统或专项工程调查。",
                },
                {
                  title: "Sensor FAE",
                  description:
                    "生成 Sensor Engagement Pack 并进入传感器厂协同调查。",
                },
              ].map((tier) => (
                <article
                  key={tier.title}
                  className="border border-white/15 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {tier.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {tier.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="lg:col-span-2 text-sm font-semibold leading-7 text-white/85">
              建议调查层级是路由建议，不是根因结论。最终层级由客户组织的
              Admission Policy 和授权工程师确认。
            </p>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Runtime Evidence Assets
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                从持续观察到标准 Evidence Pack
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                Runtime Dataset 是持续运行的数据基础；Evidence Pack
                是围绕特定 REF 生成的标准调查证据包。两者不是同一个对象。
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {outputs.map((output) => (
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

        {/* Supports and boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Atlas Supports
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Atlas 负责建立运行时证据基础
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
                  Atlas 不替代工程判断
                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-sm font-semibold leading-7 text-ink">
                  Atlas 记录运行时事实、生成证据窗口并支持调查路由。
                  最终工程结论由获得授权的客户工程团队完成。
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Product relationship */}
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
                  Observe → Persist → Retain → Export → Evidence Pack → 建议调查层级
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
                  将证据转化为调查和组织记忆
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  REF Admission → Historical RGA → Context → IR / LL → Closure
                  → Assist Vault
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
              Continuous Runtime Evidence
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Atlas 不等待事故发生后，
              <br />
              才开始寻找证据。
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              让 Atlas Agent 持续观察、保留和导出运行时事实，
              在 REF 发生时快速生成有边界、可追踪、可调查的 Evidence Pack。
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/request-demo">
                {productsContent.ctaText}
              </Button>

              <a
                href="/products/runtime-investigation"
                className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              >
                查看 Runtime Investigation
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
