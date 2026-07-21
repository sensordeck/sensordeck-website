/**
 * SensorDeck 官网首页内容（精简版）
 * 用于根路径 / 的企业官网展示
 */

export const homepageContent = {
  hero: {
    eyebrow: "SensorDeck",
    title: "面向机器人的运行时智能基础设施",
    subtitle:
      "在传感器、系统与工程决策之间建立受治理的运行时边界。",
    description:
      "机器人团队需要的不只是另一个日志归档。SensorDeck 定义了基础设施层，用于观察运行时条件、结构化证据、支持调查，并保存组织学习到的知识。",
    principles: ["观察", "理解", "调查", "改进", "复用"],
    cta: {
      primary: { text: "申请演示", href: "#contact-form" },
      secondary: { text: "技术白皮书", href: "#resources" },
    },
  },

  problem: {
    eyebrow: "01 / 问题",
    title: "为什么机器人运行时事故难以调查",
    description:
      "信号是可用的，但运营上下文通常分散在设备、日志、工单、录制和个人记忆中。",
    challenges: [
      {
        label: "信号碎片化",
        description:
          "传感器输出、电源、时序、网络、主机运行时和 ROS 上下文通常在不同工具中审查。",
      },
      {
        label: "事件无界",
        description:
          "无限制的归档使得难以就重要的确切证据窗口达成一致。",
      },
      {
        label: "知识在关闭时重置",
        description:
          "结论可能存在于工单或某人的记忆中，而不是成为可复用的调查资产。",
      },
    ],
  },

  value: {
    eyebrow: "02 / Atlas 核心价值",
    title: "从运行时边界到组织记忆",
    description:
      "Atlas 运行在传感器行为成为系统级运行时条件的边界上：电源、总线、Linux/SBC 运行时、ROS 输入，以及负责调查的团队。",
    benefits: [
      {
        label: "运行时边界",
        description:
          "将传感器行为连接到电源、总线、Linux/SBC 运行时、ROS 输入和应用上下文。",
      },
      {
        label: "有界证据",
        description:
          "将长时间运行时数据集转换为标准化的证据窗口，供团队审查和交换。",
      },
      {
        label: "可复用知识",
        description:
          "保存人工撰写的调查结果和经验教训供未来参考。",
      },
    ],
  },

  products: {
    eyebrow: "03 / 产品线",
    title: "两条 Atlas 产品线。一个共享基础设施。",
    description:
      "传感器制造商和机器人 OEM 在运行时边界的不同侧工作。Atlas 为各方提供专注的产品线，同时保持证据和协作的一致性。",
    lines: [
      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "传感器制造商",
        description:
          "了解您的传感器在真实机器人部署中的行为表现，保留运行时知识，并使用共享证据与 OEM 调查团队协作。",
        keyModules: [
          "Runtime Profiles™",
          "运行时观察",
          "Historical Sensor RGA™",
          "通过 EGP 与 OEM 协作",
        ],
              },
      {
        name: "Atlas Runtime Investigation™",
        audience: "机器人 OEM",
        description:
          "将运行时事件转化为有界证据、协调调查和可复用的组织知识。",
        keyModules: [
          "Atlas Agent™",
          "Evidence Pack™",
          "Historical RGA™",
          "Investigation Workspace™",
        ],
              },
    ],
  },

  customers: {
    eyebrow: "04 / 面向客户",
    title: "服务机器人生态",
    sensorManufacturers: {
      title: "传感器制造商",
      description:
        "在真实 OEM 部署中理解传感器运行时行为，与客户调查团队协作，并建立组织运行时知识。",
      capabilities: [
        "运行时配置定义",
        "运行时观察与保留",
        "与 OEM 的证据共享（EGP）",
        "历史案例召回",
      ],
    },
    robotOems: {
      title: "机器人 OEM",
      description:
        "将运行时事件转化为受治理的证据、协调多方调查、建立组织记忆并支持未来复用。",
      capabilities: [
        "运行时数据集保留",
        "Evidence Pack 生成",
        "调查工作流协调",
        "Assist Vault 组织记忆",
      ],
    },
  },

  principle: {
    eyebrow: "05 / 运营原则",
    title: "证据先于结论",
    subtitle: "不判因果、不归责",
    description:
      "Atlas 结构化证据并检索历史候选。人工团队负责撰写调查结果和经验教训。",
    boundaries: [
      "Atlas 结构化证据。",
      "Atlas 检索历史候选。",
      "Atlas 不自动确认根本原因。",
      "Atlas 不分配责任。",
    ],
  },

  cta: {
    eyebrow: "06 / 申请演示",
    title: "让运行时证据在整个组织中发挥作用",
    description:
      "了解 Atlas 如何适配您的机器人组织的运行时边界、调查工作流程和证据所有权模型。",
    note: "仅限示意性演示数据",
    button: {
      text: "联系我们",
      href: "mailto:contact@sensordeck.tech",
    },
  },
} as const;

export type HomepageContent = typeof homepageContent;
