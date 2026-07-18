/**
 * Library 页面内容
 */

export const libraryContent = {
  hero: {
    eyebrow: "SensorDeck Library",
    title: "技术阅读与资源",
    subtitle:
      "面向工程和运营团队的技术白皮书、文档、演示和常见问题解答。",
  },

  whitePapers: {
    eyebrow: "01 / White Papers",
    title: "技术白皮书",
    description:
      "深入了解运行时智能基础设施、证据治理和调查生命周期。",
    papers: [
      {
        id: "WP-01",
        title: "Runtime Intelligence Infrastructure for Robotics",
        description:
          "定义运行时智能基础设施类别、运行时边界以及为什么机器人组织需要受治理的证据层。",
        size: "12 pages",
        format: "PDF",
      },
      {
        id: "WP-02",
        title: "Atlas Runtime Sensor Governance",
        description:
          "面向传感器制造商的运行时治理产品线：Runtime Profiles、Observation、Historical Sensor RGA 和 OEM 协作。",
        size: "16 pages",
        format: "PDF",
      },
      {
        id: "WP-03",
        title: "Atlas Runtime Investigation",
        description:
          "面向机器人 OEM 的调查平台：Runtime Dataset、Evidence Pack、Historical RGA、Investigation Workspace 和 Assist Vault。",
        size: "18 pages",
        format: "PDF",
      },
      {
        id: "WP-04",
        title: "Evidence Pack and Five-Window Evidence Model",
        description:
          "有界证据窗口的设计原理：Pre-Guard、Baseline、Deviation、Recovery、Post-Guard 以及为什么证据必须有界。",
        size: "10 pages",
        format: "PDF",
      },
      {
        id: "WP-05",
        title: "Historical RGA and Organizational Memory",
        description:
          "历史召回、复用与参考：Historical RGA 如何检索候选而不声称相同根本原因或责任。",
        size: "14 pages",
        format: "PDF",
      },
      {
        id: "WP-06",
        title: "OEM ↔ Sensor Investigation Collaboration",
        description:
          "Sensor Engagement Pack (EGP) 的协作模型：去识别化证据交换和有界调查上下文。",
        size: "11 pages",
        format: "PDF",
      },
    ],
  },

  documentation: {
    eyebrow: "02 / Documentation",
    title: "技术文档",
    description:
      "面向开发者的完整文档站点，包含架构、CLI、集成、模式和术语。",
    link: {
      text: "打开 docs.sensordeck.tech",
      href: "https://docs.sensordeck.tech",
    },
    topics: [
      "开发者文档",
      "模式定义",
      "CLI 参考",
      "集成指南",
      "Artifact 定义",
      "规范术语",
      "发布说明",
      "技术实施指南",
    ],
    note: "文档站点独立维护，不在营销网站内复制。",
  },

  demo: {
    eyebrow: "03 / Demo",
    title: "演示与示例",
    description: "通过视频、交互式 UI 和示例数据了解 Atlas 工作方式。",
    items: [
      {
        title: "2 分钟概览视频",
        description: "快速了解 Atlas 如何将运行时事件转化为有界证据和可复用知识。",
        type: "Video",
        href: "/demo/overview",
        disabled: false,
      },
      {
        title: "Atlas Demo UI",
        description:
          "交互式演示：Tier1、Investigation Workspace、Sensor FAE 和 CTO 视图。",
        type: "Interactive",
        href: "/demo",
        disabled: false,
      },
      {
        title: "Runtime Investigation 演练",
        description:
          "完整调查生命周期演练：从 REF 到 Evidence Pack、Historical RGA 到 IR + LL。",
        type: "Walkthrough",
        href: "/demo/investigation",
        disabled: false,
      },
      {
        title: "示例 Evidence Pack",
        description:
          "可下载的示例 Evidence Pack（已批准发布的去识别化示例数据）。",
        type: "Download",
        href: "#",
        disabled: true,
      },
    ],
  },

  faq: {
    eyebrow: "04 / FAQ",
    title: "常见问题解答",
    description: "关于 Atlas 平台、证据所有权和运营原则的常见问题。",
    questions: [
      {
        question: "Atlas 是日志平台吗？",
        answer:
          "不是。Atlas 是运行时智能基础设施。它结构化有界证据、检索历史候选、协调调查工作流程，但不替代日志归档或时序数据库。",
      },
      {
        question: "SensorDeck 拥有客户数据吗？",
        answer:
          "不。运行时数据集仍由客户的环境、保留策略和访问模型治理。Evidence Pack 和 EGP 是有界的、去识别化的协作表面，不是无限制的归档。",
      },
      {
        question: "Atlas 确定根本原因吗？",
        answer:
          "不。Atlas 结构化证据并检索历史候选。人工团队负责撰写 Investigation Results (调查结果) 和 Lessons Learned (经验教训)。",
      },
      {
        question: "Atlas 分配责任吗？",
        answer:
          "不。Atlas 不自动确认根本原因、不分配责任。它提供受治理的证据和历史参考，供人工团队审查和决策。",
      },
      {
        question: "数据必须离开客户环境吗？",
        answer:
          "不一定。Atlas Agent 可以在客户环境内运行。Evidence Pack 和 EGP 是明确的、去识别化的协作上下文，只在需要时导出。",
      },
      {
        question: "什么是 Evidence Pack？",
        answer:
          "Evidence Pack 是有界的、标准化的证据窗口，围绕运行时偏差构建（Five-Window Model: Pre-Guard、Baseline、Deviation、Recovery、Post-Guard），而不是无限制的归档。",
      },
      {
        question: "什么是 Historical RGA？",
        answer:
          "Historical RGA™ 是召回、复用和参考机制。它检索先前的 Investigation Results 和 Lessons Learned 作为候选供审查，但不声称相同因果关系或自动学习。",
      },
      {
        question: "什么是 EGP？",
        answer:
          "Sensor Engagement Pack (EGP) 是 OEM 与传感器制造商之间的有界协作表面。它是去识别化的证据和调查上下文，不是完整的内部 Evidence Pack。",
      },
      {
        question: "Atlas 替代 OEM 工程工具吗？",
        answer:
          "不。Atlas 在传感器行为成为系统级运行时条件的边界上工作。它补充（而非替代）现有的日志平台、仪表板、ROS 工具和调查工作流程。",
      },
      {
        question: "Atlas 可以与现有机器人传感器一起运行吗？",
        answer:
          "可以。Atlas 观察运行时边界（电源、总线、时序、Linux/SBC 运行时、ROS 输入），不要求更换传感器或修改现有硬件。",
      },
    ],
  },

  cta: {
    eyebrow: "Request resources",
    title: "需要更多技术信息？",
    description:
      "联系我们获取完整白皮书、演示访问权限或讨论您的运行时治理需求。",
    primaryButton: {
      text: "联系我们",
      href: "mailto:contact@sensordeck.tech",
    },
    secondaryButton: {
      text: "请求演示",
      href: "/#request-demo",
    },
  },
} as const;

export type LibraryContent = typeof libraryContent;
