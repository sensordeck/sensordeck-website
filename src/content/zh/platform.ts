import type { PlatformContent } from "@/lib/content-types";

export const platformContent = {
  ui: {
    capabilitiesTitle: "平台核心架构",
    coreModulesLabel: "核心能力",
  },

  hero: {
    title: "Atlas 平台架构",
    subtitle: "从运行时数据，到可审查证据，再到可复用组织资产",
    description:
      "Atlas 是面向机器人运行时边界的治理基础设施。它持续观察传感器、总线、Linux Runtime、主控板与 ROS Topic 之间的运行状态，将分散在设备、日志和人员之间的数据转化为有边界、可审查、可协作的调查资产。",
  },

  architecture: {
    title: "一条贯穿运行时调查全生命周期的基础设施",
    description:
      "Atlas 不替代机器人控制系统，也不替代工程团队作出根因判断。它建立的是从运行时观察、证据保留、事件窗口生成，到跨团队调查、历史召回和组织记忆沉淀的一条完整基础设施链路。",
    principles: [
      "运行时数据保留在客户治理边界内",
      "长时间数据流被压缩为有时间边界的 Evidence Pack™",
      "调查上下文、候选层级和协作对象被统一组织",
      "Historical RGA™ 召回历史候选，但不自动判定因果关系",
      "调查结论、责任判断和经验教训始终由授权团队确认",
    ],

    constitutionalBoundary: {
      title: "Atlas 的能力边界",
      items: [
        "Atlas 观察、保留并结构化运行时证据。",
        "Atlas 生成可审查的事件窗口和调查上下文。",
        "Atlas 召回相关历史调查资产和候选模式。",
        "Atlas 不自动确认根本原因，也不自动分配责任。",
      ],
    },
  },

  capabilities: [
    {
      name: "Atlas Agent™",
      description:
        "部署在客户运行环境中的持续观察与数据治理代理。",
      keyFeatures: [
        "7×24 小时观察关键运行时信号",
        "覆盖电源、总线、Linux Runtime、设备和 ROS Topic",
        "按照客户策略保留、锁定和导出数据",
        "数据和证据所有权保持在客户边界内",
      ],
    },

    {
      name: "Runtime Surface™",
      description:
        "将分散的运行时信号统一呈现为可观察、可调用的运行时表面。",
      keyFeatures: [
        "统一不同设备和软件层的运行时信号",
        "通过适配器连接现有日志、设备和数据源",
        "为事件切片和证据生成提供标准入口",
        "不要求替换客户现有机器人架构",
      ],
    },

    {
      name: "Runtime Dataset™",
      description:
        "按照保留策略持续形成、管理和导出的运行时数据集。",
      keyFeatures: [
        "保存事件发生前后的连续运行时数据",
        "支持客户自定义保留周期和数据范围",
        "维持时间顺序、来源和运行环境上下文",
        "为 Evidence Pack™ 生成提供原始证据基础",
      ],
    },

    {
      name: "Evidence Pack™",
      description:
        "将海量运行时数据压缩为有边界、有时间轴、可审查的证据窗口。",
      keyFeatures: [
        "生成事件前、事件中和事件后的证据窗口",
        "对齐多来源信号和关键时间点",
        "保留证据来源、完整性和生成上下文",
        "供 OEM、传感器厂商和调查团队共同审查",
      ],
    },

    {
      name: "Historical RGA™",
      description:
        "从已完成的历史调查中召回相关候选、模式和经验资产。",
      keyFeatures: [
        "检索与当前事件相关的历史调查记录",
        "标记强候选、部分候选和相关历史模式",
        "明确当前环境与历史环境之间的差异",
        "召回结果不等同于根因确认",
      ],
    },

    {
      name: "Investigation Context™",
      description:
        "将事件、设备、运行环境、证据和调查目标组织为统一调查上下文。",
      keyFeatures: [
        "记录机器人、传感器、软件版本和部署环境",
        "关联 Evidence Pack™ 与事件时间线",
        "明确调查范围、当前状态和参与团队",
        "减少团队之间重复收集背景信息",
      ],
    },

    {
      name: "Investigation Tier Candidate™",
      description:
        "根据现有证据形成调查层级候选，帮助事件进入合适的处理路径。",
      keyFeatures: [
        "支持 Tier 1 初步分类和证据检查",
        "支持 Tier 2 / Tier 3 工程调查升级",
        "标记需要 OEM 工程或传感器 FAE 参与的候选",
        "候选只提供调查方向，不替代人工判断",
      ],
    },

    {
      name: "Sensor Engagement Pack™",
      description:
        "在 OEM 与传感器制造商之间建立有边界的调查协作包。",
      keyFeatures: [
        "提取与传感器边界直接相关的调查证据",
        "去除不必要的客户运营信息",
        "统一传感器 FAE 所需的事件背景和证据格式",
        "保留双方各自的数据和责任边界",
      ],
    },

    {
      name: "Assist Vault™",
      description:
        "将完成的调查结果、证据资产和经验教训沉淀为组织记忆。",
      keyFeatures: [
        "保存调查结果与 Lessons Learned",
        "关联原始 Evidence Pack™ 和调查上下文",
        "支持未来 Historical RGA™ 召回",
        "让下一次调查从组织记忆开始，而不是从零开始",
      ],
    },

    {
      name: "CTO Dashboard",
      description:
        "将运行时调查转化为可追踪的组织治理和工程运营指标。",
      keyFeatures: [
        "跟踪调查数量、周期和 SLA",
        "观察证据覆盖率和调查资产复用率",
        "识别重复发生的运行时边界问题",
        "呈现运行时治理投入与说明性 ROI",
      ],
    },
  ],

  productsRelationship: {
    title: "同一平台，两条产品线",
    description:
      "两条产品线共享 Atlas 的运行时观察、证据治理、调查协作和组织记忆基础设施，但分别服务于机器人 OEM 与传感器制造商的不同责任边界。",

    products: [
      {
        name: "Atlas Runtime Investigation™",
        audience: "面向机器人 OEM",
        coreModules: [
          "Atlas Agent™ 与 Runtime Surface™",
          "Runtime Dataset™ 数据保留",
          "Evidence Pack™ 事件窗口",
          "Investigation Context™",
          "Investigation Tier Candidate™",
          "Historical RGA™",
          "Sensor Engagement Pack™",
          "Assist Vault™",
          "CTO Dashboard",
        ],
      },

      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "面向传感器制造商",
        coreModules: [
          "传感器运行时边界观察",
          "Runtime Profiles™",
          "Sensor Investigation Workspace™",
          "Historical Sensor RGA™",
          "Sensor Engagement Pack™ 协作",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
    ],
  },

  documentation: {
    title: "深入了解平台架构",

    whitePapers: [
      {
        title: "Atlas Agent™",
        description:
          "了解 Atlas 如何在客户环境中持续观察、保留和导出运行时数据。",
      },
      {
        title: "Runtime Surface™ 与 Runtime Dataset™",
        description:
          "了解 Atlas 如何连接现有运行环境，并将分散的数据源形成可治理的数据集。",
      },
      {
        title: "Evidence Pack™",
        description:
          "了解运行时事件如何被压缩为有边界、有时间轴、可审查的证据窗口。",
      },
      {
        title: "Historical RGA™",
        description:
          "了解 Atlas 如何召回历史调查候选，同时保持人工根因判断边界。",
      },
      {
        title: "Investigation Context™",
        description:
          "了解事件背景、运行环境、证据和调查流程如何被统一组织。",
      },
      {
        title: "Sensor Engagement Pack™",
        description:
          "了解 OEM 与传感器制造商如何通过边界明确的调查包进行协作。",
      },
    ],

    documentationLink: {
      title: "阅读完整平台架构文档",
      description:
        "查看 Atlas Agent™、Runtime Surface™、Runtime Dataset™、Evidence Pack™、Historical RGA™、Investigation Context™、Sensor Engagement Pack™、Assist Vault™ 和 CTO Dashboard 的完整技术说明。",
      href: "https://sensordeck.github.io/atlas-docs-cn/category/平台架构",
    },
  },

  cta: {
    title: "从您的运行时边界开始",
    description:
      "介绍您的机器人平台、主要传感器、部署环境和当前调查流程。我们将共同评估 Atlas 如何融入您的现有工程体系。",
    primaryButton: "申请演示",
    secondaryButton: "阅读平台架构文档",
  },
} satisfies PlatformContent;
