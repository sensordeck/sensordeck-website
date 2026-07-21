export const companyContent = {
  hero: {
    eyebrow: "SensorDeck / 公司",
    title: "关于 SensorDeck",
    description:
      "定义运行时智能基础设施类别，让机器人团队能够在真实运行中观察、理解、调查、改进并复用知识。",
    statementLabel: "Runtime Intelligence Infrastructure",
    statement:
      "从部署前的运行时画像，到部署后的调查与组织记忆，SensorDeck 关注的是机器人系统跨边界运行时发生了什么。",
  },
  mission: {
    eyebrow: "使命与愿景",
    title: "让每一次运行时事件都能成为可靠的工程输入",
    lead:
      "机器人系统的问题很少只发生在单一组件里。传感器、总线、电源、Linux/SBC 运行时、ROS 输入和现场环境共同决定了系统在压力下的表现。",
    description:
      "SensorDeck 创建 Atlas，是为了把这些分散的运行时事实组织成有边界、可审查、可协作的证据。我们希望帮助团队更快发现偏差，更准确地开展调查，并把解决问题的经验带回下一次部署。",
    points: ["观察真实运行", "理解证据边界", "复用组织记忆"],
  },
  category: {
    eyebrow: "类别陈述",
    title: "Runtime Intelligence Infrastructure for Robotics",
    lead:
      "机器人需要的不只是更多日志，而是一套能够跨运行时边界管理证据、支持调查并保存知识的基础设施。",
    description:
      "Atlas 面向传感器制造商和机器人 OEM，覆盖从部署前到部署后的运行时工作。它把运行时观察、证据包、调查工作区和历史 RGA 连接成一条可复核的工程路径。",
  },
  principlesSection: {
    eyebrow: "核心原则",
    title: "先明确边界，再扩大智能",
    description:
      "我们对产品能力的判断，首先来自证据能否被拥有、理解和复核。以下原则贯穿Atlas的设计与工程实现。",
  },
  principles: [
    {
      number: "01",
      label: "证据所有权",
      title: "客户拥有他们的证据",
      description:
        "运行时数据、调查材料和由此形成的组织记忆，应该留在客户的运营边界内。SensorDeck 提供结构和工具，但不把客户的证据变成我们的资产。",
    },
    {
      number: "02",
      label: "No Black Box",
      title: "系统保持可审查",
      description:
        "Atlas 帮助团队观察、整理和调查运行时事件，但不隐藏关键判断。证据来源、推理范围和责任边界都应该能够被工程团队复核。",
    },
    {
      number: "03",
      label: "明确边界",
      title: "工程和责任边界清晰",
      description:
        "Atlas 不替代 OEM 工程工具，也不凭空决定根因或责任。它把运行时事实组织成可协作的证据，让负责的人做出最终判断。",
    },
  ],
  boundariesSection: {
    eyebrow: "工程边界",
    title: "为可协作的判断保留空间",
    description:
      "基础设施不应模糊责任。它应该让团队知道系统收集了什么、结论依据是什么，以及下一步需要谁来判断。",
  },
  boundaries: [
    {
      title: "我们负责什么",
      items: [
        "建立跨传感器、总线、Linux/SBC 和 ROS 输入的运行时证据结构",
        "帮助团队把一次调查沉淀为可复用的组织知识",
        "让 OEM、传感器制造商和调查团队围绕同一份证据协作",
      ],
    },
    {
      title: "我们不替代什么",
      items: [
        "不替代客户既有的工程、质量、测试或安全流程",
        "不把相关性包装成自动根因结论",
        "不要求客户交出数据所有权，也不制造不可解释的决策路径",
      ],
    },
  ],
  contact: {
    eyebrow: "与我们沟通",
    title: "从一个真实的运行时问题开始",
    description:
      "无论您正在构建传感器、运营机器人车队，还是负责调查现场事件，都可以从一段具体的运行时边界开始讨论。",
    button: "联系 SensorDeck",
  },
} as const;

export type CompanyContent = typeof companyContent;
