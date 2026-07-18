export const platformContent = {
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
      "调查协调跨越 Tier 1、Tier 2/3、OEM 工程和传感器 FAE",
      "Historical RGA™ 检索候选而非声称相同因果关系",
      "Investigation Results 和 Lessons Learned 由人工团队撰写",
    ],
    constitutionalBoundary: {
      title: "Atlas Constitutional Boundary",
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
        "Five-Window Evidence Model（Pre-Guard、Baseline、Deviation、Recovery、Post-Guard）",
        "标准化证据窗口供团队审查",
        "有界上下文供 OEM 和传感器协作",
        "明确时序边界和运行时表面",
      ],
    },
    {
      name: "Historical RGA™",
      description: "召回先前的 Investigation Results 和 Lessons Learned，但不声称相同因果关系。",
      keyFeatures: [
        "检索历史调查候选供审查",
        "标记候选强度（Strong Candidate、Partial Candidate、Related Historical Pattern）",
        "明确环境差异（Environment Difference）",
        "不自动确认根本原因",
      ],
    },
    {
      name: "Investigation Workspace™",
      description: "协调 Tier 1、Tier 2/3、OEM 工程和传感器 FAE 调查工作。",
      keyFeatures: [
        "统一调查上下文视图",
        "协调多团队工作流程",
        "Evidence Pack™ 审查界面",
        "Investigation Results 和 Lessons Learned 撰写",
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
        "保存 Investigation Results 和 Lessons Learned",
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
          "Runtime Observation",
          "Historical Sensor RGA™",
          "Sensor Investigation Workspace™",
          "OEM Collaboration through EGP",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
      {
        name: "Atlas Runtime Investigation™",
        audience: "机器人 OEM",
        coreModules: [
          "Atlas Agent™",
          "Runtime Dataset retention",
          "Evidence Pack™",
          "Candidate Evidence Packs",
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
        title: "Runtime Intelligence Infrastructure for Robotics",
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
        title: "Evidence Pack and Five-Window Evidence Model",
        description: "Evidence Pack™ 的设计原理和 Five-Window 证据模型的技术实现。",
      },
      {
        title: "Historical RGA and Organizational Memory",
        description: "Historical RGA™ 如何检索候选、标记强度和保持组织记忆的一致性。",
      },
      {
        title: "OEM ↔ Sensor Investigation Collaboration",
        description: "OEM 和传感器制造商之间的调查协作机制和证据交换模式。",
      },
    ],
    documentationLink: {
      title: "docs.sensordeck.tech",
      description: "Canonical Schema（规范数据模式）、CLI、集成指南、工件定义、发布说明和技术实现文档。",
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
