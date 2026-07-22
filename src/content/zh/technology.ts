import type { TechnologyContent } from "@/lib/content-types";

export const technologyContent = {
  hero: {
    title: "Atlas 部署",
    subtitle:
      "Atlas 部署在客户控制的运行环境中，通过现有机器人系统、运行时数据源和调查流程建立治理能力。无需替换机器人核心架构，运行时数据、保留策略和证据导出始终由客户控制。",
  },

  sections: [
    {
      id: "deployment-principles",
      title: "部署原则",
      description:
        "Atlas 作为运行时治理基础设施进入客户现有工程体系，而不是替换机器人控制系统、业务应用或现有日志工具。",
      content: `客户运行环境
  ↓
Atlas Agent™
  ↓
Runtime Surface™
  ↓
Runtime Dataset™
  ↓
Evidence Pack™
  ↓
调查与组织记忆`,
      explanation:
        "Atlas 可以部署在机器人主控板、边缘计算节点或客户调查服务器环境中，并通过 Runtime Surface Adapter 接入现有运行时数据源。客户拥有原始数据，决定数据保留范围，并授权调查证据的生成和导出。",
      comparedTo: [
        "不替换现有机器人核心架构",
        "不要求修改机器人业务逻辑",
        "不要求将全部原始数据上传至公共云",
        "不改变客户现有工程责任和审批流程",
        "不自动确认根本原因或分配责任",
      ],
      href: "/technology/deployment-principles",
    },

    {
      id: "oem-deployment",
      title: "机器人 OEM 部署",
      description:
        "面向机器人 OEM 的部署，围绕运行时数据保留、Evidence Pack™ 生成、调查协作和组织记忆建立完整能力。",
      content: `机器人 / 设备集群
  ↓
Atlas Agent™
  ↓
Runtime Surface™
  ↓
Runtime Dataset™
  ↓
Evidence Pack™
  ↓
Investigation Context™
  ↓
Historical RGA™
  ↓
Assist Vault™`,
      explanation:
        "Atlas Agent™ 在 OEM 控制的环境中持续观察已授权的运行时信号。发生运行时事件后，Atlas 从 Runtime Dataset™ 中提取事件前后的相关数据，形成有时间边界、可审查的 Evidence Pack™，并支持 Tier 1、Tier 2 / Tier 3、OEM 工程和传感器 FAE 之间的调查协作。",
      surfaces: [
        "机器人主控板",
        "边缘计算节点",
        "Linux Runtime",
        "ROS / ROS2",
        "设备与驱动状态",
        "USB / Ethernet / CAN",
        "传感器原始输出",
        "客户调查服务器",
        "现有日志系统",
      ],
      href: "/technology/oem-deployment",
    },

    {
      id: "oem-deployment-scope",
      title: "OEM 部署范围",
      description:
        "OEM 部署范围根据机器人平台、传感器配置、运行环境和调查目标共同确定。",
      content: null,
      explanation:
        "Atlas 不默认采集机器人环境中的全部数据。部署前，双方首先确认运行时边界、数据来源、保留周期、事件触发条件、调查角色和证据导出方式，再形成明确的部署范围。",
      concepts: [
        {
          term: "运行时边界",
          definition:
            "确认 Atlas 需要观察的传感器、接口、Linux Runtime、设备状态和 ROS Topic。",
        },
        {
          term: "数据来源",
          definition:
            "确认现有日志、设备接口、ROS Topic、驱动状态和其他可接入数据源。",
        },
        {
          term: "保留策略",
          definition:
            "由客户决定数据保留范围、周期、容量和清理规则。",
        },
        {
          term: "事件规则",
          definition:
            "定义哪些运行时异常需要标记、锁定数据并进入调查流程。",
        },
        {
          term: "证据导出",
          definition:
            "确定 Evidence Pack™ 的生成范围、授权对象和导出方式。",
        },
        {
          term: "调查角色",
          definition:
            "明确 Tier 1、Tier 2 / Tier 3、OEM 工程和传感器 FAE 的参与方式。",
        },
      ],
      href: "/technology/oem-deployment-scope",
    },

    {
      id: "sensor-manufacturer-deployment",
      title: "传感器制造商部署",
      description:
        "面向传感器制造商的部署，围绕产品运行时表现、客户调查协作和历史案例复用建立治理能力。",
      content: `传感器产品与运行时场景
  ↓
Runtime Profiles™
  ↓
运行时观察与证据接收
  ↓
Sensor Investigation Workspace™
  ↓
Historical Sensor RGA™
  ↓
Sensor Assist Vault™
  ↓
Runtime Knowledge Base™`,
      explanation:
        "传感器制造商可以在自己的实验室、技术支持或客户调查环境中部署 Atlas。通过 Runtime Profiles™、Sensor Engagement Pack™ 和历史调查资产，传感器团队能够更快理解客户现场的运行时条件，并在明确的数据边界内与 OEM 协作。",
      surfaces: [
        "传感器实验室",
        "技术支持团队",
        "FAE 调查流程",
        "产品运行时场景",
        "客户现场证据",
        "Sensor Engagement Pack™",
        "Historical Sensor RGA™",
        "Sensor Assist Vault™",
        "Runtime Knowledge Base™",
      ],
      href: "/technology/sensor-manufacturer-deployment",
    },

    {
      id: "sensor-engagement-boundary",
      title: "OEM 与传感器厂商协作边界",
      description:
        "Sensor Engagement Pack™ 用于在 OEM 与传感器制造商之间传递与调查相关、范围明确的运行时信息。",
      content: `OEM 调查环境
  ↓
Evidence Pack™
  ↓
Sensor Engagement Pack™
  ↓
传感器 FAE 调查
  ↓
IR + Lessons Learned
  ↓
OEM 结案与组织记忆`,
      explanation:
        "协作包只包含与传感器调查边界相关的信息，不要求 OEM 交付全部机器人运行数据。传感器厂商可以基于明确的事件上下文和证据开展调查，同时保护 OEM 的产品架构、客户信息和运营数据。",
      comparedTo: [
        "仅传递与当前传感器调查相关的信息",
        "保留事件时间线和运行环境上下文",
        "减少不必要的 OEM 运营信息暴露",
        "支持传感器 FAE 形成调查结果和经验教训",
        "双方继续保有各自的数据和责任边界",
      ],
      href: "/technology/sensor-engagement-boundary",
    },

    {
      id: "pilot-to-production",
      title: "从 Pilot 到 Production",
      description:
        "Atlas 采用分阶段部署路径，从一个明确的运行时场景开始验证，再逐步扩展至正式生产环境。",
      content: `场景确认
  ↓
运行时边界评审
  ↓
部署计划
  ↓
Atlas Agent™ 安装
  ↓
Runtime Surface™ 接入
  ↓
保留策略配置
  ↓
金丝雀验证
  ↓
Pilot
  ↓
Production`,
      explanation:
        "部署不从全设备、全数据和全组织范围开始。首个 Pilot 应围绕一个明确的机器人平台、传感器边界或代表性调查场景，验证数据接入、事件切片、Evidence Pack™ 生成和调查协作流程。验证完成后，再逐步扩展至更多设备、场景和团队。",
      href: "/technology/pilot-to-production",
    },

    {
      id: "canary-validation",
      title: "金丝雀验证",
      description:
        "在 Pilot 进入正式运行前，通过可控的代表性事件验证整条部署链路。",
      content: `受控运行时事件
  ↓
Atlas Agent™ 观察
  ↓
Runtime Dataset™ 保留
  ↓
事件窗口生成
  ↓
Evidence Pack™
  ↓
调查流程验证
  ↓
历史资产保存与未来召回`,
      explanation:
        "金丝雀验证用于确认 Atlas Agent™、数据来源、时间边界、保留策略、Evidence Pack™ 和调查工作流能够协同运行。验证目标不是模拟所有可能的机器人事故，而是证明部署范围内的完整链路可观察、可生成、可审查和可复用。",
      concepts: [
        {
          term: "数据接入验证",
          definition:
            "确认已授权的运行时信号能够持续进入 Runtime Dataset™。",
        },
        {
          term: "事件边界验证",
          definition:
            "确认事件发生前后所需数据能够被正确保留和切片。",
        },
        {
          term: "证据生成验证",
          definition:
            "确认 Evidence Pack™ 能够按预定范围生成并供团队审查。",
        },
        {
          term: "调查流程验证",
          definition:
            "确认事件能够进入正确的调查角色和协作路径。",
        },
        {
          term: "历史复用验证",
          definition:
            "确认完成的调查资产可以进入 Assist Vault™ 并支持未来召回。",
        },
      ],
      href: "/technology/canary-validation",
    },

    {
      id: "production-readiness",
      title: "Production 就绪条件",
      description:
        "当部署边界、运行策略、调查流程和组织责任全部明确后，Atlas 才进入正式生产运行。",
      content: null,
      explanation:
        "Production 并不只是扩大 Agent 部署数量。正式上线前，需要确认数据保留、访问授权、事件升级、证据导出、调查角色、运行维护和版本管理等组织条件。",
      comparedTo: [
        "部署范围和数据来源已经确认",
        "保留周期和容量策略已经批准",
        "事件触发与升级流程已经验证",
        "Evidence Pack™ 的审查和导出权限已经明确",
        "OEM 与传感器厂商协作方式已经确定",
        "运行维护、版本升级和故障处理责任已经分配",
        "Pilot 和金丝雀验证结果已经完成审查",
      ],
      warning:
        "Atlas Production 部署必须保持客户数据所有权、人工根因判断和组织授权边界。扩大部署规模不会改变这些基础原则。",
      href: "/technology/production-readiness",
    },

    {
      id: "deployment-documentation",
      title: "完整部署文档",
      description:
        "查看机器人 OEM 部署、传感器制造商部署以及从 Pilot 到 Production 的完整说明。",
      content: null,
      explanation:
        "部署文档包含更详细的角色分工、部署流程、验证方法和生产运行说明。",
      link: {
        text: "查看完整部署指南 →",
        href: "https://sensordeck.github.io/atlas-docs-cn/category/部署指南",
      },
      href: "/technology/deployment-documentation",
    },
  ],

  cta: {
    title: "从您的运行环境开始",
    description:
      "介绍您的机器人平台、主要传感器、部署环境和当前调查流程。我们将共同确认适合的 Atlas 部署边界和 Pilot 范围。",
    primaryButton: {
      text: "阅读部署指南",
      href: "https://sensordeck.github.io/atlas-docs-cn/category/部署指南",
    },
    secondaryButton: {
      text: "申请演示",
      href: "/contact",
    },
  },
} satisfies TechnologyContent;
