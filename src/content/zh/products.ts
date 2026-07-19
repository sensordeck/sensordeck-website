export interface ProductContent {
  heroTitle: string;
  heroSubtitle: string;
  productA: {
    name: string;
    audience: string;
    description: string;
    coreModules: string[];
    lifecycle: string[];
  };
  productB: {
    name: string;
    audience: string;
    description: string;
    coreModules: string[];
    lifecycle: string[];
  };
  sharedInfrastructure: {
    title: string;
    description: string;
  };
  constitutionalBoundary: string[];
  ctaText: string;
}

const productsContent: ProductContent = {
  heroTitle: "两条产品线。一个共享基础设施。",
  heroSubtitle: "传感器制造商和机器人 OEM 在运行时边界的不同侧工作。Atlas 为各方提供专注的产品线，同时保持证据和协作的一致性。",

  productA: {
    name: "Atlas Runtime Sensor Governance™",
    audience: "传感器制造商",
    description: "了解您的传感器在真实机器人部署中的行为表现，保留运行时知识，并使用共享证据与 OEM 调查团队协作。",
    coreModules: [
      "Runtime Profiles™",
      "运行时观察",
      "Historical Sensor RGA™",
      "Sensor Investigation Workspace™",
      "通过 EGP 与 OEM 协作",
      "Sensor Assist Vault™",
      "Runtime Knowledge Base™",
    ],
    lifecycle: [
      "运行时配置",
      "运行时观察",
      "Evidence Pack / EGP",
      "历史 Sensor RGA 召回",
      "传感器调查",
      "OEM 协作",
      "Sensor Assist Vault",
      "知识复用",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "机器人 OEM",
    description: "将运行时事件转化为有界证据、协调调查和可复用的组织知识。",
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
    lifecycle: [
      "运行时数据集",
      "候选证据包",
      "主要证据包",
      "历史 RGA 召回",
      "OEM / 传感器调查",
      "IR + LL",
      "结案",
      "Assist Vault",
      "未来复用",
    ],
  },

  sharedInfrastructure: {
    title: "共享的 Atlas 平台基础设施",
    description: "两条产品线建立在同一个平台之上，确保 OEM 和传感器制造商之间的证据一致性和有界协作。",
  },

  constitutionalBoundary: [
    "Atlas 结构化证据。",
    "Atlas 检索历史候选。",
    "Atlas 不自动确认根本原因。",
    "Atlas 不分配责任。",
    "IR 和 LL 由人工团队撰写。",
  ],

  ctaText: "申请演示",
} as const;

export default productsContent;
