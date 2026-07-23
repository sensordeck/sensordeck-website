/**
 * Library 页面内容
 */

import type { LibraryContent } from "@/lib/content-types";

export const libraryContent = {
  ui: {
    breadcrumbLabel: "面包屑导航",
    libraryLabel: "资料库",
    browse: "查看",

    resourceCards: [
      {
        id: "01",
        title: "常见问题",
        description:
          "了解 Atlas 与日志系统、车队管理、工单平台和现有机器人基础设施之间的关系，以及数据所有权、部署模式和人工调查边界。",
        href: "/library/faq",
        items: "核心问题",
      },
      {
        id: "02",
        title: "企业交付与下载",
        description:
          "了解 Atlas 企业部署项目的典型运行时组件、调查组件、配置、文档、培训材料和客户可交付成果。",
        href: "https://sensordeck.github.io/atlas-docs-cn/reference/downloads",
        items: "交付说明",
      },
      {
        id: "03",
        title: "发布说明",
        description:
          "查看 Atlas Runtime Governance™ 的主要版本、核心能力、兼容性、部署模式、已知限制和重要产品变更。",
        href: "https://sensordeck.github.io/atlas-docs-cn/reference/release-notes",
        items: "版本记录",
      },
    ],

    quickAccessEyebrow: "完整文档",
    quickAccessTitle: "Atlas 中文技术文档",

    whitePapersLabel: "常见问题",
    documentationLabel: "交付与下载",
    demoLabel: "演示",
    demoAndVideoLabel: "演示与示例",
    faqLabel: "发布说明",

    comingSoon: "即将推出",
    view: "查看",
    note: "注意",

    demoNote:
      "所有公开演示数据均为示意性内容。实际部署的 Evidence Pack、Historical RGA 和调查资产包含客户特定的运行时上下文，不会在公开演示中展示。",

    demoContactNote:
      "如需访问完整的 Atlas Demo UI，或希望根据您的机器人平台和运行时场景安排定制化演示，请联系我们。",

    documentationTopics: "文档主题",

    documentationHosting:
      "完整的 Atlas 中文技术文档在独立文档中心持续维护。",

    documentationFor: "文档适用于",

    documentationReferenceTitle:
      "面向工程、调查、部署和管理团队的完整参考",

    documentationUseCases: [
      "基础理论",
      "产品体系",
      "平台架构",
      "OEM 部署指南",
      "传感器厂商部署指南",
      "Pilot 到 Production",
      "常见问题",
      "企业交付与发布说明",
    ],

    moreInfoEyebrow: "需要更多信息？",
    moreResourcesTitle: "进一步了解 Atlas",
    moreResourcesDescription:
      "查看完整中文技术文档，或联系我们讨论您的运行时环境、部署范围和调查流程。",

    readWhitePapers: "查看常见问题",
    viewDocumentation: "打开技术文档",
    contactUs: "联系我们",

    whitePaperAvailability:
      "Atlas 技术资料、项目文档和培训材料根据部署范围及商业协议提供。",

    backToLibrary: "返回资料库",
    previousWhitePapers: "← 参考资料",
    previousDocumentation: "← 企业交付",
    previousDemo: "← 演示",
    nextDocumentation: "交付说明 →",
    nextDemo: "演示 →",
    nextFaq: "常见问题 →",
  },

  hero: {
    eyebrow: "SensorDeck 资料库",
    title: "Atlas 参考资料",
    subtitle:
      "查看常见问题、企业交付说明、公开演示和版本发布记录。完整技术内容在 Atlas 中文文档中心持续维护。",
  },

  whitePapers: {
    eyebrow: "01 / 技术资料",
    title: "Atlas 技术资料",
    description:
      "了解 Atlas 的基础理论、平台架构、运行时治理方式和企业部署路径。",

    papers: [
      {
        id: "REF-01",
        title: "Atlas Runtime Governance",
        description:
          "了解 Atlas 如何持续观察运行时、组织证据、保存历史，并让每一次调查形成可复用的组织资产。",
        size: "在线文档",
        format: "HTML",
      },
      {
        id: "REF-02",
        title: "Atlas Runtime Sensor Governance™",
        description:
          "面向传感器制造商的运行时治理产品体系、运行时画像、历史 RGA 和 OEM 调查协作方式。",
        size: "在线文档",
        format: "HTML",
      },
      {
        id: "REF-03",
        title: "Atlas Runtime Investigation™",
        description:
          "面向机器人 OEM 的运行时证据、调查协作、历史召回和 Assist Vault 体系。",
        size: "在线文档",
        format: "HTML",
      },
      {
        id: "REF-04",
        title: "平台架构",
        description:
          "了解 Atlas Agent、Runtime Surface、Runtime Dataset、Evidence Pack 和调查资产之间的关系。",
        size: "在线文档",
        format: "HTML",
      },
      {
        id: "REF-05",
        title: "部署指南",
        description:
          "了解 OEM 部署、传感器制造商部署，以及从 Pilot 到 Production 的阶段化上线方式。",
        size: "在线文档",
        format: "HTML",
      },
      {
        id: "REF-06",
        title: "参考资料",
        description:
          "查看常见问题、企业交付与下载说明，以及 Atlas 版本发布记录。",
        size: "在线文档",
        format: "HTML",
      },
    ],
  },

  documentation: {
    eyebrow: "02 / 文档",
    title: "Atlas 中文技术文档",
    description:
      "完整文档覆盖基础理论、产品体系、平台架构、部署指南和参考资料。",

    link: {
      text: "打开 Atlas 中文文档",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },

    topics: [
      "基础理论",
      "Runtime Sensor Governance™",
      "Runtime Investigation™",
      "平台架构",
      "OEM Deployment",
      "Sensor Manufacturer Deployment",
      "Pilot to Production",
      "参考资料",
    ],

    note: "文档站点独立维护，官网仅提供关键概览和访问入口。",
  },

  demo: {
    eyebrow: "03 / 演示",
    title: "演示与示例",
    description:
      "通过视频、交互式 UI 和示例数据了解 Atlas 工作方式。",

    items: [
      {
        title: "2 分钟概览视频",
        description:
          "快速了解 Atlas 如何将运行时事件转化为边界明确的证据和可复用组织资产。",
        type: "视频",
        href: "/demo/overview",
        disabled: false,
      },
      {
        title: "Atlas 演示界面",
        description:
          "查看一级受理、Investigation Workspace、传感器 FAE 和 CTO 治理视图。",
        type: "交互式",
        href: "/demo",
        disabled: false,
      },
      {
        title: "运行时调查演练",
        description:
          "从 REF、Runtime Dataset、Evidence Pack 和 Historical RGA，到 IR、LL 和 Assist Vault 的完整演练。",
        type: "演练",
        href: "/demo/investigation",
        disabled: false,
      },
      {
        title: "示例 Evidence Pack",
        description:
          "查看经过批准、去标识化并仅供演示和培训使用的示例调查资产。",
        type: "示例",
        href: "#",
        disabled: true,
      },
    ],
  },

  faq: {
    eyebrow: "01 / 常见问题",
    title: "常见问题解答",
    description:
      "关于 Atlas 的产品定位、技术适配、部署方式、数据所有权和运行时调查边界。",

    questions: [
      {
        question: "Atlas 是另一个日志系统吗？",
        answer:
          "不是。Atlas 不是日志采集或日志归档平台。日志可以成为运行时证据来源之一，但 Atlas 的核心职责是持续观察运行时、组织调查证据、形成事件上下文、召回历史调查资产，并支持跨团队协作。",
      },
      {
        question: "Atlas 会替代车队管理系统吗？",
        answer:
          "不会。车队管理系统通常负责设备管理、OTA、远程监控、任务调度和机器人运营。Atlas 负责运行时证据、Evidence Pack™、Historical RGA™、调查工作流和组织记忆。两者属于互补关系。",
      },
      {
        question: "Atlas 会替代 Jira、ServiceNow 等工单系统吗？",
        answer:
          "不会。工单系统负责事件记录、任务流转和组织协作。Atlas 可以与现有工单流程配合，在运行时执行失败被报告后，为调查提供结构化证据、事件时间线和历史上下文。",
      },
      {
        question: "Atlas 会自动判定根本原因或责任吗？",
        answer:
          "不会。Atlas 不自动确认根本原因、产品缺陷、客户过失或责任归属。Atlas 负责组织运行时证据、调查上下文和历史候选，最终技术结论仍由授权的工程团队确认。",
      },
      {
        question: "Atlas 支持 AI 辅助调查吗？",
        answer:
          "支持。Atlas 可以为 AI 辅助分析提供结构化、边界明确并且可审查的运行时证据。但 Atlas 不强制依赖 AI，调查流程仍可保持确定性，所有关键结论仍需人工确认。",
      },
      {
        question: "Atlas 支持哪些机器人平台？",
        answer:
          "Atlas 不绑定特定机器人品牌或控制架构。它可以部署在不同机器人平台、SBC、Linux 环境、ROS 系统和自定义机器人软件中。具体部署范围依据客户的运行时表面和调查目标确定。",
      },
      {
        question: "Atlas 支持哪些传感器？",
        answer:
          "Atlas 不绑定特定传感器类型。典型对象包括摄像头、激光雷达、IMU、GNSS、雷达和编码器。其他传感器也可以通过运行时表面映射和适配器纳入治理范围。",
      },
      {
        question: "Atlas 必须运行在 ROS 环境中吗？",
        answer:
          "不需要。ROS 和 ROS2 都是可选的运行时数据来源。Atlas 也可以在没有 ROS 的机器人系统中，通过设备接口、Linux Runtime、驱动状态、日志和自定义适配器建立运行时观察能力。",
      },
      {
        question: "Atlas 需要持续连接公共云吗？",
        answer:
          "不需要。Atlas 支持客户本地服务器、总部服务器、私有云、离线环境、手动导出和混合部署。是否连接云端由客户的部署、安全和运营要求决定。",
      },
      {
        question: "Atlas 需要替换现有机器人基础设施吗？",
        answer:
          "不需要。Atlas 设计为与现有车队管理、云平台、工单系统、对象存储、监控平台和机器人软件共存。部署重点是连接现有运行时数据源，而不是进行大规模替换。",
      },
      {
        question: "Atlas 可以覆盖多种机器人型号吗？",
        answer:
          "可以。Atlas 可以从一个明确的机器人型号或运行时场景开始，再逐步扩展到多种 Robot SKU、SBC 平台、传感器配置和部署环境，而不需要重新设计整套调查体系。",
      },
      {
        question: "Atlas 可以与多家传感器厂商协作吗？",
        answer:
          "可以。OEM 可以通过 Sensor Engagement Pack™ 与不同传感器制造商开展边界明确的调查协作。每家传感器厂商可以维护自己的运行时画像、历史调查资产和 FAE 调查流程。",
      },
      {
        question: "什么是传感器运行时画像？",
        answer:
          "传感器运行时画像描述传感器在已知机器人平台、部署环境和运行时扰动下的行为表现。它不是认证证书、产品护照或合规文件，而是可用于未来调查的运行时知识资产。",
      },
      {
        question: "什么是 Evidence Pack™？",
        answer:
          "Evidence Pack™ 是围绕特定运行时事件生成的标准化证据窗口。它包含事件前后经过边界限定的相关数据、时间线和运行环境上下文，不是无限日志归档，也不是简单的原始数据转储。",
      },
      {
        question: "什么是 Historical RGA™？",
        answer:
          "Historical Runtime Governance Asset™ 保存已完成调查中可复用的运行时模式、调查路径、调查结果、经验教训和运行时表面引用。它帮助未来调查从组织记忆开始，但历史相似性不代表根因相同。",
      },
      {
        question: "Atlas 会永久保存所有运行时数据吗？",
        answer:
          "不会。Atlas 按客户批准的保留策略运行。典型方式包括滚动缓冲区、指定保留周期、事件触发后的数据锁定，以及按时间范围生成和导出调查证据。",
      },
      {
        question: "运行时数据和调查资产归谁所有？",
        answer:
          "客户拥有自己的运行时数据和内部调查资产。OEM 保留其 Runtime Dataset™、Evidence Pack™ 和历史调查资产；传感器制造商保留自己的传感器运行时画像和历史调查资产。SensorDeck 不主张客户运行时数据的所有权。",
      },
      {
        question: "Atlas 会在不同公司之间自动共享客户数据吗？",
        answer:
          "不会。任何跨组织证据协作都必须经过客户授权，并限制在明确的调查边界内。行业知识复用只适用于经过批准的非标识性知识，不等于共享客户原始数据或内部 Evidence Pack™。",
      },
      {
        question: "Atlas 是标准 SaaS 产品吗？",
        answer:
          "不一定。Atlas 可以部署在客户本地、客户控制的基础设施、私有云或混合环境中。实际部署模式由数据安全、网络条件、组织流程和项目范围共同决定。",
      },
      {
        question: "Atlas 是开源项目吗？",
        answer:
          "不是。Atlas 是 SensorDeck 开发的商业运行时治理基础设施，通常通过专业集成、部署配置、培训和验收项目交付给客户。",
      },
      {
        question: "Atlas 只适用于一个机器人项目吗？",
        answer:
          "不是。Atlas 的目标是形成可复用的运行时治理基础设施。完成初始 Pilot 后，可以逐步扩展至更多机器人型号、传感器产品、运行环境和调查团队。",
      },
      {
        question: "Atlas 通常如何从 Pilot 进入正式部署？",
        answer:
          "典型路径是：场景确认、运行时边界评审、Agent 与数据源接入、金丝雀验证、Pilot、受控部署、Production Readiness，最后扩展至正式生产环境。",
      },
    ],
  },

  cta: {
    eyebrow: "下一步",
    title: "进一步了解 Atlas",
    description:
      "查看完整 Atlas 中文技术文档，或联系我们讨论您的机器人平台、运行时边界和部署计划。",

    primaryButton: {
      text: "联系我们",
      href: "/contact",
    },

    secondaryButton: {
      text: "Atlas 中文文档",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },
  },
} satisfies LibraryContent;
