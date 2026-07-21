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
    categoryDefinition: "机器人行业缺失的一层",
    theProblem: "今天，每一次事故排查都从零开始",
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
    categoryDefinition: "机器人行业已经拥有传感器、驱动程序、ROS/中间件、AI与算法、Fleet Management、云平台。但在传感器输出与系统执行决策之间，始终缺少一层统一的运行时治理基础设施。",
    theProblem: "运行时数据分散在日志、设备、录像、工单和工程师记忆之间。每一次运行时调查，都需要重新收集证据、重新整理时间线、重新联系不同团队，并重新完成已经做过的调查工作。",
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
    lead: "Atlas 将持续运行的证据、调查、知识沉淀和组织记忆组织为统一的平台，让运行时问题不再只是一次性的事故处理，而成为企业可持续积累的工程能力。",
    runtimeBoundary: {
      title: "Atlas 守护的运行时边界",
      steps: [
        "真实世界",
        "Sensor",
        "Power / Bus / Timing",
        "Linux / Driver / Buffer",
        "ROS / Runtime",
        "Application Input",
        "System Decision"
      ],
      note: "Atlas 持续观察、记录并组织这一关键运行时边界。这里，也是机器人运行时问题最频繁发生，却长期缺乏统一治理的一层。"
    },
    whyImportant: {
      title: "为什么这一层如此重要？",
      traditional: {
        title: "传统机器人系统更关注：",
        items: ["感知能力", "控制能力", "AI 推理能力", "软件功能"]
      },
      runtime: {
        title: "而真正导致大量运行时事故的，往往发生在：",
        items: [
          "电源波动",
          "USB / Ethernet / CAN 通信",
          "Linux Runtime",
          "Driver",
          "Buffer",
          "Scheduler",
          "ROS Topic",
          "Runtime Timing"
        ],
        note: "这些运行时行为决定了系统最终接收到的数据是否完整、连续且可信。Atlas 将这些运行时信号组织成统一证据，并持续沉淀为可复用的组织知识。"
      }
    },
    whatAtlasProvides: {
      title: "Atlas 提供什么？",
      notItems: [
        "Atlas 不是新的 SDK。",
        "不是新的 Driver。",
        "不是新的 ROS Framework。"
      ],
      isItem: "Atlas 建立的是机器人行业此前不存在的一层：Runtime Intelligence Infrastructure™",
      capabilities: [
        "7×24 小时运行时观察",
        "Runtime Dataset 持续保留",
        "Evidence Pack 自动生成",
        "Historical RGA 持续积累",
        "OEM 与 Sensor 协同调查",
        "Assist Vault 组织记忆",
        "Future REF 持续复用"
      ],
      summary: "机器人负责感知世界。Atlas 负责理解运行时。"
    },
    points: [
      { label: "运行时边界", description: "将传感器行为连接到电源、总线、Linux/SBC 运行时、ROS 输入和应用上下文。" },
      { label: "有界证据", description: "将长时间运行时数据集转换为标准化的证据窗口，供团队审查和交换。" },
      { label: "可复用知识", description: "保存人工撰写的调查结果和经验教训供未来参考。" },
    ],
  },
  theProblem: {
    lead: "调查结束后，大部分工程经验再次散落。下一次发生相似事件，团队依然从零开始。",
    cta: "看看 Atlas 如何让每一次事故排查从历史开始",
    comparison: {
      withoutAtlas: {
        title: "没有 Atlas",
        steps: [
          "REF 发生",
          "日志 / 设备 / 录像",
          "邮件 / 工单",
          "工程师调查",
          "经验流失"
        ],
        note: "耗时、昂贵，而且无法复用。"
      },
      withAtlas: {
        title: "使用 Atlas",
        steps: [
          "REF 发生",
          "Evidence Pack",
          "Historical RGA 召回",
          "调查",
          "IR / LL",
          "Assist Vault",
          "未来 REF 复用"
        ],
        note: "每一次调查从证据开始。下一次调查，从历史开始。"
      }
    },
    whyMatters: {
      title: "为什么重要？",
      description: "Atlas 不只是帮助团队完成一次事故调查。它持续将运行时证据沉淀为组织知识。让工程团队减少重复调查，把更多时间投入产品研发、可靠性提升和持续创新。"
    }
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
      modules: ["运行时档案™", "Agent运行时观察", "传感器<->OEM协同调查包", "通过 EGP 与 OEM 协作", "传感器排查REF工单", "统一证据包™", "传感器历史排查案例召回™", "排查结果与经验分享™", "知识库沉淀™", "去标识化运行时避坑经验库™"],
      lifecycle: ["运行时受控配置", "运行时观察", "传感器<->OEM协同调查 (EGP)", "传感器排查REF工单", "证据包(EP)", "传感器调查流程", "知识库沉淀™", "OEM 协作交接", "知识复用"],
      link: "/products/runtime-sensor-governance",
    },
    {
      name: "Atlas Runtime Investigation™",
      audience: "机器人 OEM",
      description: "将运行时事件转化为有界证据、协调调查和可复用的组织知识。",
      modules: ["Atlas Agent™", "运行时数据集保留", "Evidence Pack™", "候选证据包", "Historical RGA™", "排查结果与经验分享", "知识库沉淀", "去标识化运行时避坑经验库 ™"],
      lifecycle: ["运行时受控配置", "候选证据包", "主要证据包", "历史 RGA 召回", "OEM / 传感器调查", "IR + LL", "结案", "Assist Vault", "未来复用"],
      link: "/products/runtime-investigation",
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
  ui: {
    sectionEyebrows: {
      categoryDefinition: "01 / 新品类定义",
      theProblem: "02 / 核心问题",
      whyRuntimeGovernance: "03 / 缺口",
      productLines: "04 / 产品",
      platformCapabilities: "05 / 平台",
      investigationLifecycle: "06 / 调查生命周期",
      roboticsIndustry: "07 / 机器人行业",
      evidenceOwnership: "08 / 证据边界",
      organizationalMemory: "09 / 组织记忆",
      technicalResources: "10 / 资料库",
      finalCta: "11 / 开始对话",
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
    runtimeSurfaces: "运行时表面",
    sensor: "传感器",
    policy: "策略",
    egpDescription:
      "Sensor Engagement Pack 是 OEM 向传感器制造商提供的有界协作界面，与内部 Evidence Pack™ 并不相同。",
    historicalRgaDescription:
      "Historical RGA™ 是人工调查团队的召回、复用和参考系统。",
    historicalRgaBoundary:
      "它不会自动学习、确认根本原因或分配责任。检索到的候选项会附带检索原因和仍然存在的环境差异。",
    recallCandidate: "Historical RGA™ / 召回候选",
    retrievalReason: "检索原因",
    retrievalReasonValue: "运行时表面重叠。",
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
