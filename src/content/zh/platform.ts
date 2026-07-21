export const platformContent = {
  ui: {
    capabilitiesTitle: "平台能力",
    coreModulesLabel: "核心模块",
  },
  hero: {
    title: "Atlas 平台",
    subtitle: "面向机器人的运行时智能基础设施",
    description: "Atlas 平台为传感器制造商和机器人 OEM 提供共享的基础设施，用于治理运行时证据、协调调查和构建组织记忆。",
  },
  
  architecture: {
    title: "平台架构",
    description: "Atlas 平台围绕证据治理和调查协作构建，支持两条产品线共享同一套基础设施。",
    principles: [
      "运行时数据集由客户环境治理",
      "证据窗口标准化和有界",
      "调查协调跨越一级、二级/三级、OEM 工程和传感器 FAE",
      "Historical RGA™ 检索候选而非声称相同因果关系",
      "调查结果和经验教训由人工团队撰写",
    ],
    constitutionalBoundary: {
      title: "Atlas 宪法边界",
      items: [
        "Atlas 结构化证据。",
        "Atlas 检索历史候选。",
        "Atlas 不自动确认根本原因。",
        "Atlas 不分配责任。",
      ],
    },
  },
  
  capabilities: [
    {
      name: "Atlas Agent™",
      description: "根据保留策略观察、保留、锁定和导出运行时数据集。",
      keyFeatures: [
        "观察运行时表面（电源、总线、Linux 运行时、ROS 主题）",
        "根据客户保留策略治理数据集",
        "导出运行时数据集供证据转换",
        "保持证据所有权在客户边界内",
      ],
    },
    {
      name: "Evidence Pack™",
      description: "将长时间运行时数据集转换为有界的、标准化的证据窗口。",
      keyFeatures: [
        "五窗口证据模型（前置保护、基线、偏差、恢复观察、后置保护）",
        "标准化证据窗口供团队审查",
        "有界上下文供 OEM 和传感器协作",
        "明确时序边界和运行时表面",
      ],
    },
    {
      name: "Historical RGA™",
      description: "召回先前的调查结果和经验教训，但不声称相同因果关系。",
      keyFeatures: [
        "检索历史调查候选供审查",
        "标记候选强度（强候选、部分候选、相关历史模式）",
        "明确环境差异",
        "不自动确认根本原因",
      ],
    },
    {
      name: "Investigation Workspace™",
      description: "协调一级、二级/三级、OEM 工程和传感器 FAE 调查工作。",
      keyFeatures: [
        "统一调查上下文视图",
        "协调多团队工作流程",
        "Evidence Pack™ 审查界面",
        "调查结果和经验教训撰写",
      ],
    },
    {
      name: "Sensor EGP™",
      description: "在 OEM 和传感器制造商之间交换去识别化的证据和调查上下文。",
      keyFeatures: [
        "去识别化运行时证据交换",
        "有界协作上下文",
        "保护双方运营隐私",
      ],
    },
    {
      name: "Assist Vault™",
      description: "将已完成的调查资产保存为组织记忆。",
      keyFeatures: [
        "保存调查结果和经验教训",
        "保留 Evidence Pack™ 供未来参考",
        "支持 Historical RGA™ 检索",
        "构建可复用知识库",
      ],
    },
    {
      name: "Executive Dashboard™",
      description: "呈现调查吞吐量、证据覆盖率、复用率、SLA 和说明性 ROI。",
      keyFeatures: [
        "调查吞吐量和 SLA 跟踪",
        "证据覆盖率可视化",
        "Historical RGA™ 复用率",
        "说明性 ROI 指标",
      ],
    },
  ],
  
  productsRelationship: {
    title: "平台与产品的关系",
    description: "Atlas 平台支持两条专注的产品线，各自服务于运行时边界的不同侧。",
    products: [
      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "传感器制造商",
        coreModules: [
          "Runtime Profiles™",
          "运行时观察",
          "Historical Sensor RGA™",
          "Sensor Investigation Workspace™",
          "通过 EGP 与 OEM 协作",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
      {
        name: "Atlas Runtime Investigation™",
        audience: "机器人 OEM",
        coreModules: [
          "Atlas Agent™",
          "运行时数据集保留",
          "Evidence Pack™",
          "候选证据包",
          "Historical RGA™",
          "Investigation Workspace™",
          "Sensor Engagement Pack (EGP)",
          "Assist Vault™",
          "Executive Dashboard™",
        ],
      },
    ],
  },
  
  documentation: {
    title: "技术文档",
    whitePapers: [
      {
        title: "机器人运行时智能基础设施",
        description: "管理层和工程阅读层：什么是运行时智能基础设施，以及为什么它对机器人组织重要。",
      },
      {
        title: "Atlas Runtime Sensor Governance",
        description: "传感器制造商产品线的完整技术说明和实施指南。",
      },
      {
        title: "Atlas Runtime Investigation",
        description: "机器人 OEM 产品线的完整技术说明和实施指南。",
      },
      {
        title: "Evidence Pack 与五窗口证据模型",
        description: "Evidence Pack™ 的设计原理和五窗口证据模型的技术实现。",
      },
      {
        title: "Historical RGA 与组织记忆",
        description: "Historical RGA™ 如何检索候选、标记强度和保持组织记忆的一致性。",
      },
      {
        title: "OEM ↔ 传感器调查协作",
        description: "OEM 和传感器制造商之间的调查协作机制和证据交换模式。",
      },
    ],
    documentationLink: {
      title: "docs.sensordeck.tech",
      description: "规范数据模式、CLI、集成指南、工件定义、发布说明和技术实现文档。",
      href: "https://docs.sensordeck.tech",
    },
  },
  
  cta: {
    title: "了解 Atlas 平台如何适配您的组织",
    description: "探索 Atlas 如何适配您的机器人组织的运行时边界、调查工作流程和证据所有权模型。",
    primaryButton: "申请演示",
    secondaryButton: "阅读技术白皮书",
  },
};
