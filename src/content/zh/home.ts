import type { HomeContent } from "@/lib/content-types";

const homeContent = {
  heroTitle: "机器人运行时\n智能治理基础设施",
  heroSubtitleDesktop:
  "运行时数据分散在日志、设备和人员之间。每次调查都从零开始。\nAtlas 天枢将运行时证据沉淀为可复用的组织知识。",

  heroSubtitleMobile:
  "运行时数据分散在日志、设备和人员之间。每次调查都从零开始。Atlas 天枢将运行时证据沉淀为可复用的组织知识。",
  heroDescription: "",
  heroPrinciple: [],
  heroValueProposition: "每一次调查从证据开始。\n下一次调查，从历史开始。",
    sectionTitles: {
    categoryDefinition: "机器人行业的新基础设施",
    theProblem: "事故排查为何总从零开始",
    whyRuntimeGovernance: "为什么需要运行时治理",
    productLines: "两种方案，一个使命。",
    platformCapabilities: "Atlas 平台围绕证据构建工作流程",
    investigationLifecycle: "从 REF 到未来复用",
    roboticsIndustry: "为机器人行业打造",
    evidenceOwnership: "证据所有权留在运营边界",
    organizationalMemory: "将已完成的调查转化为组织记忆",
    technicalResources: "面向工程和运营的技术阅读",
    finalCta: "让运行时证据在整个组织中发挥作用",
  },
  sectionDescriptions: {
    categoryDefinition: "Atlas 建立了位于传感器输出与机器人执行感知决策之间的运行时治理基础设施。",
    theProblem: "运行时数据分散在日志、设备、录像、工单和工程师记忆之间。每一次运行时调查，都需要重新收集证据、重新整理时间线、重新联系不同团队，并重新完成已经做过的调查工作。",
    whyRuntimeGovernance: "信号并不缺失，但运行背景信息通常分散在设备、日志、工单、录像和个人记忆中。",
    productLines: "专为机器人生态系统中的两类关键参与者打造。",
    platformCapabilities: "这些能力由两条产品线共享。Atlas 结构化证据并检索历史候选；人工团队撰写调查结果和经验教训。",
    investigationLifecycle: "运行时事件被整理为边界明确、可审查的证据和决策序列。恢复阶段只是观察窗口，不代表系统已确定恢复。",
    roboticsIndustry: "该平台针对机器人事件中最难排查的运行环节设计，覆盖触发时序、总线、Linux 运行时和 ROS 主题。",
    evidenceOwnership: "Atlas 遵循客户的证据策略，整理并导出边界明确的协作信息，同时不改变底层证据的治理权。",
    organizationalMemory: "Assist Vault™ 保存已完成的调查资产。Historical RGA™ 召回历史模式作为审查候选，但不代表因果关系相同。",
    technicalResources: "白皮书兼顾管理决策者和工程团队；独立文档站点提供数据模式、集成方式和实现细节。",
    finalCta: "了解 Atlas 如何结合您的机器人组织、运行时边界、调查工作流程和证据所有权模式。",
  },
 categoryDefinition: {
    lead:
  "机器人行业已经拥有先进的传感器、成熟的计算平台、完善的 ROS 中间件，以及快速发展的 AI 与应用软件。然而，在传感器输出与机器人执行决策之间，始终缺少一层持续观察、保留和组织运行时行为的基础设施。Atlas 正是为填补这一关键空白而建立。"

    runtimeBoundary: {
      title: "机器人真正缺失的是运行时治理层",
      steps: [
        "Real World",
        "Sensor",
        "Connectivity & Power",
        "Linux Runtime",
        "ROS Runtime",
        "Application",
        "System Decision",
      ],
    note:
      "机器人进入真实世界后，传感器数据需要经过供电、通信、Linux、驱动、缓冲区、调度器以及 ROS Runtime 等多个运行时环节，最终才能成为系统决策输入。今天行业拥有每一个独立组件，却缺少持续治理这一整条运行时链路的基础设施。"
  },

  whyImportant: {
    title: "为什么这一层如此重要？",

    traditional: {
      title: "行业长期投入于：",
      items: [
        "更好的 Sensor",
        "更强的 AI",
        "更复杂的算法",
        "更多的软件功能"
      ]
    },

    runtime: {
      title: "但大量运行时问题却发生在：",
      items: [
        "Power",
        "USB / Ethernet / CAN",
        "Linux Runtime",
        "Driver",
        "Buffer",
        "Scheduler",
        "ROS Runtime",
        "Timing"
      ],

      note:
        "这些环节不会改变算法，却决定系统最终收到的数据是否完整、连续、可信。大量机器人事故并非来自 AI，而是来自这一层运行时环境。"
    }
  },

  whatAtlasProvides: {
    title: "Atlas 填补这一层",

    notItems: [
      "不是新的 Sensor。",
      "不是新的 Driver。",
      "不是新的 ROS Framework。"
    ],

    isItem:
      "Atlas 建立机器人行业此前不存在的一层：Runtime Intelligence Infrastructure™",

    capabilities: [
      "持续运行时观察",
      "运行时证据保留",
      "Evidence Pack",
      "Runtime Investigation",
      "Historical RGA",
      "Assist Vault",
      "组织运行时记忆"
    ],

   summary:
        "机器人负责理解世界，Atlas 负责理解机器人运行时。"
    },

      points: [
      { label: "运行时边界", description: "将传感器行为连接到电源、总线、Linux/SBC 运行时、ROS 输入和应用上下文。" },
      { label: "边界明确的证据", description: "将长时间运行时数据集转换为标准化的证据窗口，供团队审查和交换。" },
      { label: "可复用知识", description: "保存人工撰写的调查结果和经验教训供未来参考。" },
    ],
  },

 theProblem: {
  lead:
    "REF 发生之后，工程团队通常需要重新寻找日志、重新同步录像、重新联系不同团队，再重新拼凑整个运行过程。大量调查时间，并没有花在分析问题，而是花在寻找证据。",

  cta: "查看 Atlas 如何解决",

  comparison: {
    withoutAtlas: {
      title: "传统调查流程",
      steps: [
        "REF 发生",
        "寻找日志",
        "寻找录像",
        "联系不同团队",
        "重新整理时间线",
        "人工分析",
        "经验散落",
      ],
      note: "每一次调查都重新开始。",
    },

    withAtlas: {
      title: "Atlas Runtime Investigation",
      steps: [
        "REF 发生",
        "Evidence Pack",
        "Historical RGA",
        "调查工作区",
        "IR / Lessons Learned",
        "Assist Vault",
        "未来直接复用",
      ],
      note: "第一次建立组织记忆，之后不断复用。",
    },
  },

  whyMatters: {
    title: "Atlas 改变的不是一次调查，而是整个组织。",
    description:
      "Atlas 将持续运行的数据组织为 Runtime Evidence，再把调查结果沉淀为 Historical RGA 与 Assist Vault。每一次 REF 都会成为下一次调查的起点，而不是终点。工程经验第一次能够随着产品持续积累。",
  },
},
    
  whyRuntimeGovernance: {
    items: [
      { label: "信号碎片化", description: "传感器输出、电源、时序、网络、主机运行时和 ROS 上下文通常在不同工具中审查。" },
      { label: "事件无界", description: "无限制的归档使得难以就重要的确切证据窗口达成一致。" },
      { label: "知识在结案后流失", description: "结论可能只留在工单或个人记忆中，无法成为可复用的调查资产。" },
    ],
    boundaryNote: "Atlas 不定位为日志平台、AI 聊天机器人、机器人仪表板供应商或通用传感器验证实验室。",
  },
  productLines: [
    {
      name: "Atlas Runtime Sensor Governance™",
      audience: "面向传感器制造商",
      description: "了解您的传感器在真实部署中的表现，保留运行时知识，并与 OEM 调查团队协作。",
      modules: ["运行时画像™", "运行时观测", "历史传感器 RGA™", "传感器调查工作区™", "借助 EGP™ 的 OEM 协作", "传感器 Assist 知识库™", "运行时知识库™"],
      lifecycle: ["运行时受控配置", "运行时观察", "传感器<->OEM协同调查 (EGP)", "传感器排查REF工单", "证据包(EP)", "传感器调查流程", "知识库沉淀™", "OEM 协作交接", "知识复用"],
      link: "/products/runtime-sensor-governance",
    },
    {
      name: "Atlas Runtime Investigation™",
      audience: "机器人 OEM",
      description: "将运行时事件转化为边界明确的证据、协调调查和可复用的组织知识。",
      modules: ["Atlas Agent™ 与运行时数据集", "证据包™ 与候选 EPs", "历史 RGA™ 召回", "调查工作区™（Tier 1 / 2 / 3）", "传感器参与包（EGP）™", "Assist 知识库™", "高管仪表板™"],
      lifecycle: ["运行时受控配置", "候选证据", "主要证据包", "历史 RGA 召回", "OEM / 传感器调查", "IR + LL", "结案", "Assist Vault", "未来复用"],
      link: "/products/runtime-investigation",
    },
  ],
  platformCapabilities: [
    { title: "Atlas Agent™", description: "根据保留策略观察、保留、锁定和导出运行时数据集。" },
    { title: "Evidence Pack™", description: "将长时间运行时数据集转换为边界明确、标准化的证据窗口。" },
    { title: "Historical RGA™", description: "召回历史调查结果和经验教训，但不代表因果关系相同。" },
    { title: "Investigation Workspace™", description: "协调一级、二级/三级、OEM 工程和传感器 FAE 调查工作。" },
    { title: "Sensor EGP™", description: "在 OEM 和传感器制造商之间交换去标识化的证据和调查信息。" },
    { title: "Assist Vault™", description: "将已完成的调查资产保存为组织记忆。" },
    { title: "Executive Dashboard™", description: "呈现调查吞吐量、证据覆盖率、复用率、SLA 和说明性 ROI。" },
  ],
  constitutionalBoundary: ["Atlas 结构化证据。", "Atlas 检索历史候选。", "Atlas 不自动确认根本原因。", "Atlas 不分配责任。"],
  investigationLifecycle: [
    { label: "REF", description: "引用运行时事件。" },
    { label: "运行时数据集", description: "保留受治理的运行时上下文。" },
    { label: "Evidence Pack", description: "界定证据窗口。" },
    { label: "历史 RGA 召回", description: "召回候选供审查。" },
    { label: "调查上下文", description: "关联各运行时监测维度。" },
    { label: "EGP", description: "与传感器侧共享边界明确的调查信息。" },
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
      { label: "受控协作", description: "Evidence Pack™ 和 Sensor EGP™ 提供边界明确的审查信息，而不是暴露无限制的归档。" },
      { label: "去标识化交换", description: "OEM 和传感器制造商团队可以交换协作所需的调查信息。" },
    ],
  },
  organizationalMemory: {
    labels: ["强候选", "部分候选", "相关历史模式", "召回原因", "环境差异"],
    recallExample: {
      reference: "RGA-2026-014",
      title: "触发边界附近的时序偏差",
      status: "相关历史模式",
      note: "因运行时监测维度相近而被召回供审查，同时明确标注环境差异。",
    },
  },
  technicalResources: {
    whitePapers: ["机器人运行时智能基础设施", "Atlas Runtime Sensor Governance", "Atlas Runtime Investigation", "Evidence Pack 与五窗口证据模型", "Historical RGA 与组织记忆", "OEM ↔ 传感器调查协作"],
    documentationDescription: "规范数据模式、CLI、集成指南、产物定义、发布说明和技术实现文档位于 docs.sensordeck.tech。",
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
  ui: {
    sectionEyebrows: {
      categoryDefinition: "01 / 新品类定义",
      theProblem: "02 / 核心问题",
      whyRuntimeGovernance: "03 / 缺口",
      productLines: "03 / ATLAS 两条产品线",
      platformCapabilities: "05 / 平台",
      investigationLifecycle: "06 / 调查生命周期",
      roboticsIndustry: "07 / 机器人行业",
      evidenceOwnership: "08 / 证据边界",
      organizationalMemory: "09 / 组织记忆",
      technicalResources: "08 / 资料库",
      finalCta: "05 / 开始对话",
    },
    learnMore: "了解更多",
    categoryImageAlt: "新品类定义 - Atlas 机器人运行时智能基础设施",
    problemImageAlt: "核心问题 - 每一次事故排查都从零开始",
    productLabel: "产品",
    coreModules: "核心模块",
    productLifecycle: "产品生命周期",
    fiveWindowModel: "五窗口证据模型",
    fiveWindowDescription:
      "证据围绕运行时偏差划定边界，而不是被视为无限归档。",
    runtimeSurfaces: "运行时监测维度",
    sensor: "传感器",
    policy: "策略",
    egpDescription:
      "Sensor Engagement Pack 是 OEM 向传感器制造商提供的边界明确的协作界面，与内部 Evidence Pack™ 并不相同。",
    historicalRgaDescription:
      "Historical RGA™ 是人工调查团队的召回、复用和参考系统。",
    historicalRgaBoundary:
      "它不会自动学习、确认根本原因或分配责任。检索到的候选项会附带检索原因和仍然存在的环境差异。",
    recallCandidate: "Historical RGA™ / 召回候选",
    retrievalReason: "检索原因",
    retrievalReasonValue: "运行时监测维度相近。",
    reviewBoundary: "审查边界",
    reviewBoundaryValue: "环境差异保持明确。",
    documentation: "规范文档",
    finalCtaDescription:
      "如果您正在探索运行时治理、传感器证据或调查工作流，欢迎与我们聊聊您的场景。",
    illustrativeDemoData: "仅限示意性演示数据",
    contactUs: "联系我们",
  },
} satisfies HomeContent;

export default homeContent;
