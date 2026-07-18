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
  heroTitle: "Two product lines. One shared infrastructure.",
  heroSubtitle: "Sensor manufacturers and robot OEMs work on different sides of the runtime boundary. Atlas provides focused product lines for each, while maintaining evidence and collaboration consistency.",

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
    title: "Shared Atlas Platform Infrastructure",
    description: "Both product lines are built on the same platform, ensuring evidence consistency and bounded collaboration between OEMs and sensor manufacturers.",
  },

  constitutionalBoundary: [
    "Atlas structures evidence.",
    "Atlas retrieves historical candidates.",
    "Atlas does not automatically confirm root cause.",
    "Atlas does not assign liability.",
    "IR and LL are human-authored.",
  ],

  ctaText: "Request Demo",
} as const;

export default productsContent;
