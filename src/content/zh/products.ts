import type { ProductContent } from "@/lib/content-types";

const productsContent = {
  eyebrow: "Atlas 产品",
  heroTitle: `两条产品线，
一个共享运行时治理基础设施`,

  heroSubtitle:
    "Atlas 治理传感器输出与机器人系统决策之间，长期缺少统一运维治理的运行时边界。\n\nAtlas 连接机器人制造商与传感器制造商，让运行时证据贯穿协同调查，将每一次现场故障沉淀为可回溯、可复用的组织记忆，并让经过验证、去标识化的经验持续形成行业积累。",

  heroStatement:
    "从一次故障，到组织记忆，再到行业经验——让机器人行业不再重复踩同样的坑。",

  architecture: {
    eyebrow: "Atlas 产品全局架构",
    title: "机器人 OEM 与传感器制造商的双飞轮",
    description:
      "左侧是机器人 OEM 的 Runtime Investigation™；右侧是传感器制造商的 Runtime Sensor Governance™；中间通过 Engagement Pack™（EGP）开展边界明确的跨组织调查协作。",
    imageSrc: "/images/product1.png",
    imageAlt:
      "Atlas Runtime Investigation 与 Runtime Sensor Governance 双飞轮产品全局架构",
  },

  productA: {
    name: "Atlas Runtime Sensor Governance™",
    audience: "传感器制造商",
    description:
      "定义传感器运行的‘部署后’标准，跨 OEM、跨场景持续观察传感器运行时健康度。Atlas Agent 长期保留低容量运行时元数据，高带宽原始数据采用有界滚动缓存，仅在事件发生时冻结必要证据窗口，避免持续运行演变为无限增长的数据存储。通过智能协同调查包（EGP）驱动 FAE 高效作业，并沉淀调查结果与经验。",
    href: "/products/runtime-sensor-governance",

    valuePoints: [
      "建立跨 OEM、跨部署场景、跨 Sensor SKU 的 Runtime Profile",
      "长期保留运行时元数据，高带宽 Raw Data 采用时间+容量双上限滚动缓存",
      "事件发生后自动锁定必要证据窗口，非事件原始数据按策略循环覆盖",
      "建立历史传感器调查案例与知识库 Historical Sensor Runtime Governance™ (RGA) & Assist Vault™",
      "基于 OEM EGP 开展边界明确的 Sensor FAE 调查",
      "使用统一时间轴证据包（Evidence Pack™）调查",
      "召回 Historical Sensor RGA™，避免重复排查",
      "将完成案例沉淀至 Sensor Assist Vault™",
    ],

    coreModules: [
      "运行时档案（Runtime Profile™）",
      "运行时观察（Atlas Agent Observation）",
      "有界数据保留（Bounded Runtime Dataset）",
      "事件证据锁定（Event Evidence Lock）",
      "传感器与 OEM 协同调查包（EGP）",
      "传感器 REF 工单",
      "统一证据包（Evidence Pack™）",
      "历史调查案例回溯（Historical Sensor RGA Recall™）",
      "历史调查结论参考（Investigation Result / IR）",
      "案例排查经验分享套用（Lesson Learned / LL）",
      "知识库更新（Sensor Assist Vault™）",
      "去标识化运行时避坑知识库™",
    ],

    lifecycle: [
      "运行时受控配置",
      "持续观察与有界数据保留",
      "事件发生后锁定必要证据窗口",
      "接收 OEM Engagement Pack",
      "创建或关联 Sensor REF 工单",
      "召回 Historical Sensor RGA",
      "Sensor FAE 调查",
      "填写 IR 与 LL",
      "返回更新后的 EGP",
      "知识沉淀与未来复用",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "机器人 OEM",
    description:
      "帮助机器人 OEM 将运行时事件转化为边界明确的 Evidence Pack™，创建和管理 REF 工单，召回 Historical RGA，并协调 OEM 运维工程与传感器供应商 FAE 调查。Atlas 的持续观察并不等于持续保存海量 Raw Data：长期资产以低容量 Runtime Metadata 为主，高带宽原始数据只做有界滚动缓存，事件发生时才冻结必要窗口。Atlas 不替代你的工具，只标准化你的调查。",
    href: "/products/runtime-investigation",

    valuePoints: [
      "Atlas Agent 持续观察运行时，但不无限保存完整 Raw Dataset",
      "Runtime Metadata 长期保留；Raw Data 按 Surface 采用时间+容量双上限滚动缓存",
      "REF / 受控事件触发后自动锁定必要 Evidence Window，未锁定 Raw Data 按策略循环覆盖",
      "建立历史调查案例与知识库 Historical Runtime Governance™ (RGA) & Assist Vault™",
      "生成调查优先级候选项和 Evidence Pack™",
      "召回 Historical RGA™ 与既有 IR、LL",
      "创建 Sensor Engagement Pack 并升级 Sensor FAE",
      "审核返回结果、关闭 OEM REF Ticket 并沉淀知识",
    ],

    coreModules: [
      "运行时观察（Atlas Agent™）",
      "运行时元数据（Runtime Metadata）",
      "有界数据保留（Bounded Runtime Dataset）",
      "滚动原始数据缓存（Raw Rolling Buffer）",
      "事件生命周期与证据锁定（Event Lifecycle & Evidence Lock）",
      "调查优先级候选项",
      "统一证据包（Evidence Pack™）",
      "历史调查案例回溯（Historical RGA Recall™）",
      "历史调查结论参考（Investigation Result / IR）",
      "案例排查经验分享套用（Lesson Learned / LL）",
      "知识库更新（Assist Vault™）",
      "管理层视图（Executive Dashboard™）",
    ],

    lifecycle: [
      "持续运行时观察",
      "Metadata 实时抽取与长期保留",
      "Raw Data 有界滚动缓存",
      "事件触发并锁定必要证据窗口",
      "生成 Interim / Final Evidence Pack",
      "创建 OEM REF Ticket",
      "召回 Historical RGA",
      "OEM Tier 1 / Tier 2 / Tier 3 调查",
      "生成 EGP 并发送 Sensor FAE",
      "关闭 OEM REF Ticket并沉淀 Assist Vault",
    ],
  },

  collaborationBridge: {
    eyebrow: "共享协作桥梁",
    title: "Engagement Pack™ 连接 OEM 与传感器制造商",
    description:
      "EGP 不是 OEM 内部 Evidence Pack 的替代品。它是 OEM 向传感器制造商发起边界明确的调查协作时使用的标准载体，贯穿 REF 工单从 Pending 到 Closure 的完整过程。",
    steps: [
      "OEM Runtime REF 发生",
      "创建 OEM REF Ticket（Pending）",
      "生成 Evidence Pack",
      "生成 Engagement Pack（EGP）",
      "发送至 Sensor FAE",
      "Sensor FAE 开展调查并填写 IR / LL",
      "返回更新后的 EGP 与 Sensor Response",
      "OEM 审核调查结果",
      "关闭 OEM REF Ticket",
      "双方沉淀 Historical RGA 并供未来复用",
    ],
    closingStatement:
      "同一份运行时证据，不同组织视角；同一条调查链路，清晰职责边界；每一次完成的调查，都成为下一次 REF 的历史起点。",
  },

  finalValue: {
    title: "让双边调查形成持续增长的组织能力",
    description:
      "OEM 获得更快、边界更明确的运行时调查能力；传感器制造商获得更真实的产品运行反馈和可复用的 FAE 调查资产。Atlas 用有界数据保留机制控制持续运行成本，让长期运行时观察不会演变为无限增长的数据仓库，并让双方围绕统一证据、明确工单和历史知识持续协作。",
  },

  ui: {
    viewProduct: "查看产品详情",
    sensorGovernance: "Runtime Sensor Governance",
    runtimeInvestigation: "Runtime Investigation",
  },
  ctaText: "申请演示",
} satisfies ProductContent;

export default productsContent;
