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
    audience: "Sensor Manufacturers",
    description: "Understand how your sensors behave across real-world robot deployments, preserve runtime knowledge, and collaborate with OEM investigation teams using shared evidence.",
    coreModules: [
      "Runtime Profiles™",
      "Runtime Observation",
      "Historical Sensor RGA™",
      "Sensor Investigation Workspace™",
      "OEM Collaboration through EGP",
      "Sensor Assist Vault™",
      "Runtime Knowledge Base™",
    ],
    lifecycle: [
      "Runtime Profile",
      "Runtime Observation",
      "Evidence Pack / EGP",
      "Historical Sensor RGA Recall",
      "Sensor Investigation",
      "OEM Collaboration",
      "Sensor Assist Vault",
      "Knowledge Reuse",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "Robot OEMs",
    description: "Transform runtime incidents into bounded evidence, coordinated investigations, and reusable organizational knowledge.",
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
    lifecycle: [
      "Runtime Dataset",
      "Candidate Evidence Packs",
      "Primary Evidence Pack",
      "Historical RGA Recall",
      "OEM / Sensor Investigation",
      "IR + LL",
      "Closure",
      "Assist Vault",
      "Future Reuse",
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
