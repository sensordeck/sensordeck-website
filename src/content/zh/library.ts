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
        title: "演示与示例",
        description:
          "通过视频、交互式 UI 和示例数据了解 Atlas 工作方式。查看一级支持、调查工作区、传感器 FAE 和 CTO 视图。",
        href: "/library/demo",
        items: "公开演示",
      },
      {
        id: "04",
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

    note:
      "文档站点独立维护，官网仅提供关键概览和访问入口。",
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
      "关于 Atlas 定位、部署、数据所有权、调查边界和现有系统集成的常见问题。",

    questions: [
      {
        question: "Atlas 是另一个日志系统吗？",
        answer:
          "不是。Atlas 不是日志采集平台。日志可以成为运行时证据来源之一，但 Atlas 关注运行时观测、证据组织、运行时调查、历史知识复用和跨组织协作。",
      },
      {
        question: "Atlas 会替代车队管理系统吗？",
        answer:
          "不会。车队管理系统负责设备管理、OTA、任务调度和机器人运营；Atlas 负责运行时调查、Evidence Pack、Historical RGA、调查工作流和运行时治理。",
      },
      {
        question: "Atlas 会替代工单系统吗？",
        answer:
          "不会。Atlas 可以与 Jira、ServiceNow 等现有工单流程集成，并在运行时执行失败被报告后组织调查证据和上下文。",
      },
      {
        question: "Atlas 会自动判定根本原因吗？",
        answer:
          "不会。Atlas 不自动判定根本原因、责任归属、产品缺陷或客户过失。工程团队仍然对最终技术结论负责。",
      },
      {
        question: "Atlas 需要 ROS 吗？",
        answer:
          "不需要。ROS 是可选的。Atlas 可以在有 ROS 或没有 ROS 的系统中观察和治理运行时表面。",
      },
      {
        question: "Atlas 需要持续云连接吗？",
        answer:
          "不需要。Atlas 支持客户本地、总部服务器、私有云、离线运行、手动导出和混合部署。",
      },
      {
        question: "Atlas 需要替换现有基础设施吗？",
        answer:
          "不需要。Atlas 设计为与现有车队管理、云平台、工单系统、对象存储和监控平台协同运行。",
      },
      {
        question: "运行时数据归谁所有？",
        answer:
          "客户拥有自己的运行时数据。Atlas 不主张对客户 Runtime Dataset、Evidence Pack 或内部调查资产的所有权。",
      },
      {
        question: "Atlas 可以自动在公司之间共享客户数据吗？",
        answer:
          "不可以。跨组织协作必须遵循客户授权。Assist Vault 支持的是经过授权的非标识性知识复用，而不是自动共享客户运行时数据。",
      },
      {
        question: "Atlas 通常如何部署？",
        answer:
          "典型部署路径为 Pilot、Controlled Deployment、Production Readiness 和 Full Deployment，并可以进一步扩展到更多 Robot SKU、Sensor SKU 和运行环境。",
      },
    ],
  },

  cta: {
    eyebrow: "下一步",
    title: "从您的运行时场景开始",
    description:
      "介绍您的机器人平台、主要传感器、部署环境和当前调查流程。我们将共同评估适合的 Atlas 部署范围和交付方式。",

    primaryButton: {
      text: "联系我们",
      href: "/contact",
    },

    secondaryButton: {
      text: "查看参考资料",
      href:
        "https://sensordeck.github.io/atlas-docs-cn/category/参考资料",
    },
  },
} satisfies LibraryContent;
