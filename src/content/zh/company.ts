import type { CompanyContent } from "@/lib/content-types";

export const companyContent = {
  hero: {
    eyebrow: "SensorDeck / 公司",
    title: "关于 SensorDeck",
    description:
      "我们为机器人行业建立运行时治理基础设施，让工程团队能够在真实运行中保留证据、开展调查，并把每一次解决问题的经验沉淀为可复用的组织资产。",
    statementLabel: "Runtime Governance Infrastructure",
    statement:
      "SensorDeck 关注的不是机器人应该如何规划和控制，而是机器人投入真实环境后，跨越传感器、总线、电源、Linux/SBC 与应用边界时，系统实际发生了什么。",
  },

  mission: {
    eyebrow: "我们的使命",
    title: "让机器人运行时调查不再每次从零开始",
    lead:
      "机器人已经进入餐厅、医院、仓库、工厂和公共空间，但运行时问题的调查方式仍然高度依赖分散日志、个人经验和临时协作。",
    description:
      "SensorDeck 创建 Atlas，是为了在机器人部署之后持续保留运行时事实，在事件发生时形成有边界、可审查的证据，并让调查结果、经验教训和历史案例能够被组织持续复用。",
    points: [
      "保留运行时事实",
      "支持跨团队调查",
      "沉淀组织记忆",
    ],
  },

  category: {
    eyebrow: "我们是谁",
    title: "一家专注机器人运行时治理的基础设施公司",
    lead:
      "我们服务机器人 OEM 与传感器制造商，帮助双方在明确的数据、证据和责任边界内开展运行时调查。",
    description:
      "Atlas 连接部署环境中的持续观察、事件证据、调查协作和历史记忆。我们不替代机器人控制系统、车队平台或工程判断，而是在这些系统之间建立一条可审查、可复用的运行时调查路径。",
  },

  principlesSection: {
    eyebrow: "我们的工作原则",
    title: "基础设施首先要值得信任",
    description:
      "SensorDeck 的产品和合作方式建立在三个长期原则上：客户拥有证据、系统保持可审查，以及工程责任边界始终明确。",
  },

  principles: [
    {
      number: "01",
      label: "客户所有权",
      title: "客户拥有运行时数据和调查资产",
      description:
        "运行时数据、Evidence Pack™、调查结论和组织记忆由客户治理。SensorDeck 提供基础设施、结构与工具，但不把客户证据转化为我们的数据资产。",
    },
    {
      number: "02",
      label: "No Black Box",
      title: "关键证据和判断保持可审查",
      description:
        "Atlas 明确记录证据来源、事件时间边界和历史召回依据。系统可以辅助调查，但不会用不可解释的结果替代工程团队的审查和判断。",
    },
    {
      number: "03",
      label: "责任边界",
      title: "帮助团队判断，但不替团队下结论",
      description:
        "Atlas 不自动确认根因、不分配责任，也不替代 OEM、传感器厂商或安全团队的正式工程流程。最终结论始终由获得授权的团队确认。",
    },
  ],

  boundariesSection: {
    eyebrow: "我们的角色",
    title: "在证据与判断之间建立可靠基础",
    description:
      "SensorDeck 的角色是让运行时事实更容易被保留、理解和复用，同时为客户已有的工程、质量和安全体系保留清晰空间。",
  },

  boundaries: [
    {
      title: "SensorDeck 提供",
      items: [
        "跨传感器、总线、电源、Linux/SBC 和应用输入的运行时观察结构",
        "围绕具体事件生成边界明确、可审查的 Evidence Pack™",
        "支持 OEM、传感器 FAE 和调查团队协作的调查基础设施",
        "将完成的调查、经验教训和历史模式沉淀为组织记忆",
      ],
    },
    {
      title: "SensorDeck 不替代",
      items: [
        "不替代机器人控制系统、车队管理平台或现有日志基础设施",
        "不替代客户的工程、测试、质量、安全或合规流程",
        "不把历史相似性包装成自动根因结论",
        "不要求客户放弃运行时数据、调查资产或决策权",
      ],
    },
  ],

  contact: {
    eyebrow: "与我们沟通",
    title: "从一个真实的运行时场景开始",
    description:
      "介绍您的机器人平台、主要传感器、部署环境和当前调查流程。我们将共同评估 Atlas 是否适合您的组织，以及应该从哪个运行时边界开始。",
    button: "申请演示",
  },
} satisfies CompanyContent;
