import type { ProductContent } from "@/lib/content-types";

const productsContent = {
  eyebrow: "Atlas 产品",
 heroTitle: `两条产品线，
一个共享运行时治理基础设施`,

  heroSubtitle:
    "Atlas 分别服务机器人 OEM 与传感器制造商，并通过统一证据、Engagement Pack™、REF 工单和调查资产，将双方连接在同一条可追踪、可结案、可复用的运行时调查链路中。",

 heroStatement:
  "当前调查从证据开始。下一次调查，从历史开始。",
  architecture: {
    eyebrow: "Atlas 产品全局架构",
    title: "机器人 OEM 与传感器制造商的双飞轮",
    description:
      "左侧是机器人 OEM 的 Runtime Investigation™；右侧是传感器制造商的 Runtime Sensor Governance™；中间通过 Engagement Pack™（EGP）开展边界明确的跨组织调查协作。",
    imageSrc:
      "/images/product1.png",
    imageAlt:
      "Atlas Runtime Investigation 与 Runtime Sensor Governance 双飞轮产品全局架构",
  },

  productA: {
    name: "Atlas Runtime Sensor Governance™",
    audience: "传感器制造商",
    description:
      "帮助传感器制造商持续了解产品在真实机器人部署中的运行时表现，接收传感器协同调查包（EGP），组织 Sensor FAE 工程调查，并将完成的调查结果（IR）、经验总结（LL）与历史案例（Historical RGA）沉淀为可复用的传感器运行时知识。",
    href: "/products/runtime-sensor-governance",

    valuePoints: [
      "建立跨 OEM、跨 Sensor SKU 的 Runtime Profile",
      "基于 OEM EGP 开展边界明确的 Sensor FAE 调查",
      "召回 Historical Sensor RGA，避免重复排查",
      "返回更新后的 EGP、IR、LL 与 Sensor EGP Response",
      "将完成案例沉淀至 Sensor Assist Vault™",
    ],

    coreModules: [
      "运行时档案（Runtime Profile™）",
      "运行时观察（Atlas Agent Observation）",
      "传感器与 OEM 协同调查包（EGP）",
      "传感器 REF 工单",
      "统一证据包（Evidence Pack™）",
      "Historical Sensor RGA Recall™",
      "Investigation Result（IR）",
      "Lesson Learned（LL）",
      "Sensor Assist Vault™",
      "去标识化运行时知识库™",
    ],

    lifecycle: [
      "运行时受控配置",
      "运行时观察",
      "接收 OEM Engagement Pack",
      "创建或关联 Sensor REF 工单",
      "召回 Historical Sensor RGA",
      "Sensor FAE 调查",
      "填写 IR 与 LL",
      "返回更新后的 EGP",
      "知识沉淀",
      "未来复用",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "机器人 OEM",
    description:
      "帮助机器人 OEM 将运行时事件转化为边界明确的 Evidence Pack™，创建和管理 REF 工单，召回 Historical RGA，协调 Tier 1、Tier 2、Tier 3 与 Sensor FAE，并将调查结果转化为组织知识。",
    href: "/products/runtime-investigation",

    valuePoints: [
      "Atlas Agent 持续观察并保留 Runtime Dataset",
      "生成调查优先级候选项和 Evidence Pack",
      "召回 Historical RGA 与既有 IR、LL",
      "创建 Sensor Engagement Pack 并升级 Sensor FAE",
      "审核返回结果、关闭 OEM REF Ticket 并沉淀知识",
    ],

    coreModules: [
      "Atlas Agent™",
      "Runtime Dataset 保留",
      "调查优先级候选项",
      "Primary Evidence Pack",
      "Historical RGA™",
      "Investigation Workspace™",
      "Sensor Engagement Pack（EGP）",
      "Assist Vault™",
      "Executive Dashboard™",
    ],

    lifecycle: [
      "Runtime Dataset 采集与保留",
      "生成候选项和 Evidence Pack",
      "确认 Primary Evidence Pack",
      "创建 OEM REF Ticket",
      "召回 Historical RGA",
      "OEM Tier 1 / Tier 2 / Tier 3 调查",
      "生成 EGP 并发送 Sensor FAE",
      "接收 Sensor IR / LL 与更新后的 EGP",
      "关闭 OEM REF Ticket",
      "Assist Vault 沉淀与未来复用",
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
      "OEM 获得更快、边界更明确的运行时调查能力；传感器制造商获得更真实的产品运行反馈和可复用的 FAE 调查资产。Atlas 让双方不再围绕零散日志反复沟通，而是围绕统一证据、明确工单和历史知识持续协作。",
  },

  ui: {
    viewProduct: "查看产品详情",
    sensorGovernance: "Runtime Sensor Governance",
    runtimeInvestigation: "Runtime Investigation",
  },
  ctaText: "申请演示",
} satisfies ProductContent;

export default productsContent;
