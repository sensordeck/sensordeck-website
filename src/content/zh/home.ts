import type { HomeContent } from "@/content/en/home";

const homeContent: HomeContent = {
  heroTitle: "机器人运行时治理基础设施",
  heroSubtitle: "运行时数据分散在日志、设备和人员之间。每次调查都从零开始。Atlas 将运行时证据沉淀为可复用的组织知识。",
  heroDescription: "",
  heroPrinciple: [],
  heroValueProposition: "每一次调查从证据开始。下一次调查，从历史开始。",
  sectionTitles: {
    categoryDefinition: "运行时边界的新类别",
    whyRuntimeGovernance: "为什么需要运行时治理",
    productLines: "两条 Atlas 产品线。一个共享基础设施。",
    platformCapabilities: "Atlas 平台围绕证据构建工作流程",
    investigationLifecycle: "从 REF 到未来复用",
    roboticsIndustry: "为机器人行业打造",
    evidenceOwnership: "证据所有权留在运营边界",
    organizationalMemory: "将已完成的调查转化为组织记忆",
    technicalResources: "面向工程和运营的技术阅读",
    finalCta: "让运行时证据在整个组织中发挥作用",
  },
  sectionDescriptions: {
    categoryDefinition: "Atlas 运行在传感器行为成为系统级运行时条件的边界上：电源、总线、Linux/SBC 运行时、ROS 输入，以及负责调查的团队。",
    whyRuntimeGovernance: "信号是可用的，但运营上下文通常分散在设备、日志、工单、录制和个人记忆中。",
    productLines: "传感器制造商和机器人 OEM 在运行时边界的不同侧工作。Atlas 为各方提供专注的产品线，同时保持证据和协作的一致性。",
    platformCapabilities: "这些能力由两条产品线共享。Atlas 结构化证据并检索历史候选；人工团队撰写调查结果和经验教训。",
    investigationLifecycle: "运行时事件成为有界的、可审查的证据和决策序列。恢复是一个观察窗口，而非保证的恢复结论。",
    roboticsIndustry: "该平台围绕使机器人事件难以隔离的表面设计，从触发时序和总线到 Linux 运行时和 ROS 主题。",
    evidenceOwnership: "Atlas 设计为在客户证据策略内工作。它结构化并导出有界上下文用于协作，而不改变谁治理底层证据。",
    organizationalMemory: "Assist Vault™ 保存已完成的调查资产。Historical RGA™ 召回先前模式作为候选供审查，从不作为相同因果关系的证明。",
    technicalResources: "使用白皮书提供面向公众的执行层和工程阅读层。使用独立文档站点获取模式、集成和实现细节。",
    finalCta: "了解 Atlas 如何适配您的机器人组织的运行时边界、调查工作流程和证据所有权模型。",
  },
  categoryDefinition: {
    lead: "运行时智能基础设施是运行时信号与事件后决策之间的治理层。",
    points: [
      { label: "运行时边界", description: "将传感器行为连接到电源、总线、Linux/SBC 运行时、ROS 输入和应用上下文。" },
      { label: "有界证据", description: "将长时间运行时数据集转换为标准化的证据窗口，供团队审查和交换。" },
      { label: "可复用知识", description: "保存人工撰写的调查结果和经验教训供未来参考。" },
    ],
  },
  whyRuntimeGovernance: {
    items: [
      { label: "信号碎片化", description: "传感器输出、电源、时序、网络、主机运行时和 ROS 上下文通常在不同工具中审查。" },
      { label: "事件无界", description: "无限制的归档使得难以就重要的确切证据窗口达成一致。" },
      { label: "知识在关闭时重置", description: "结论可能存在于工单或某人的记忆中，而不是成为可复用的调查资产。" },
    ],
    boundaryNote: "Atlas 不定位为日志平台、AI 聊天机器人、机器人仪表板供应商或通用传感器验证实验室。",
  },
  productLines: [
    {
      name: "Atlas Runtime Sensor Governance™",
      audience: "传感器制造商",
      description: "了解您的传感器在真实机器人部署中的行为表现，保留运行时知识，并使用共享证据与 OEM 调查团队协作。",
      modules: ["Runtime Profiles™", "运行时观察", "Historical Sensor RGA™", "Sensor Investigation Workspace™", "通过 EGP 与 OEM 协作", "Sensor Assist Vault™", "Runtime Knowledge Base™"],
      lifecycle: ["运行时配置", "运行时观察", "Evidence Pack / EGP", "历史 Sensor RGA 召回", "传感器调查", "OEM 协作", "Sensor Assist Vault", "知识复用"],
    },
    {
      name: "Atlas Runtime Investigation™",
      audience: "机器人 OEM",
      description: "将运行时事件转化为有界证据、协调调查和可复用的组织知识。",
      modules: ["Atlas Agent™", "运行时数据集保留", "Evidence Pack™", "候选证据包", "Historical RGA™", "Investigation Workspace™", "Sensor Engagement Pack (EGP)", "Assist Vault™", "Executive Dashboard™"],
      lifecycle: ["运行时数据集", "候选证据包", "主要证据包", "历史 RGA 召回", "OEM / 传感器调查", "IR + LL", "结案", "Assist Vault", "未来复用"],
    },
  ],
  platformCapabilities: [
    { title: "Atlas Agent™", description: "根据保留策略观察、保留、锁定和导出运行时数据集。" },
    { title: "Evidence Pack™", description: "将长时间运行时数据集转换为有界的、标准化的证据窗口。" },
    { title: "Historical RGA™", description: "召回先前的调查结果和经验教训，但不声称相同因果关系。" },
    { title: "Investigation Workspace™", description: "协调一级、二级/三级、OEM 工程和传感器 FAE 调查工作。" },
    { title: "Sensor EGP™", description: "在 OEM 和传感器制造商之间交换去识别化的证据和调查上下文。" },
    { title: "Assist Vault™", description: "将已完成的调查资产保存为组织记忆。" },
    { title: "Executive Dashboard™", description: "呈现调查吞吐量、证据覆盖率、复用率、SLA 和说明性 ROI。" },
  ],
  constitutionalBoundary: ["Atlas 结构化证据。", "Atlas 检索历史候选。", "Atlas 不自动确认根本原因。", "Atlas 不分配责任。"],
  investigationLifecycle: [
    { label: "REF", description: "引用运行时事件。" },
    { label: "运行时数据集", description: "保留受治理的运行时上下文。" },
    { label: "Evidence Pack", description: "界定证据窗口。" },
    { label: "历史 RGA 召回", description: "召回候选供审查。" },
    { label: "调查上下文", description: "对齐相关表面。" },
    { label: "EGP", description: "与传感器侧共享有界上下文。" },
    { label: "OEM / 传感器 IR + LL", description: "撰写人工调查记录。" },
    { label: "结案", description: "关闭活动调查。" },
    { label: "Assist Vault", description: "保存已完成的资产。" },
    { label: "未来复用", description: "使记录可供参考。" },
  ],
  fiveWindowModel: ["前置保护", "基线", "偏差", "恢复观察", "后置保护"],
  roboticsIndustry: {
    audiences: ["机器人 OEM", "传感器制造商"],
    surfaces: ["电源健康", "时序", "Ethernet", "USB", "CAN", "LiDAR", "摄像头", "IMU", "Linux 运行时", "ROS 主题", "存储", "传感器心跳 / 原始输出"],
  },
  evidenceOwnership: {
    principles: [
      { label: "客户控制的证据", description: "运行时数据集仍由客户的环境、保留策略和访问模型治理。" },
      { label: "有界协作", description: "Evidence Pack™ 和 Sensor EGP™ 提供明确的审查上下文，而不是暴露无限制的归档。" },
      { label: "去识别化交换", description: "OEM 和传感器制造商团队可以交换协作所需的调查上下文。" },
    ],
  },
  organizationalMemory: {
    labels: ["强候选", "部分候选", "相关历史模式", "召回原因", "环境差异"],
    recallExample: {
      reference: "RGA-2026-014",
      title: "触发边界附近的时序偏差",
      status: "相关历史模式",
      note: "因运行时表面重叠而被检索供审查。环境差异保持明确。",
    },
  },
  technicalResources: {
    whitePapers: ["机器人运行时智能基础设施", "Atlas Runtime Sensor Governance", "Atlas Runtime Investigation", "Evidence Pack 与五窗口证据模型", "Historical RGA 与组织记忆", "OEM ↔ 传感器调查协作"],
    documentationDescription: "规范模式、CLI、集成指南、工件定义、发布说明和技术实现文档位于 docs.sensordeck.tech。",
  },
  ctas: {
    primary: "申请演示",
    exploreProducts: "探索产品",
    technicalWhitePaper: "阅读技术白皮书",
    viewArchitecture: "查看架构",
    readWhitePaper: "阅读白皮书",
    documentation: "打开文档",
    overview: "观看 2 分钟概览",
  },
} as const;

export type HomeContentZh = typeof homeContent;

export default homeContent;
