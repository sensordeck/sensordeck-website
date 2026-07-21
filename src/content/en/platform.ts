import type { PlatformContent } from "@/lib/content-types";

export const platformContent = {
  ui: {
    capabilitiesTitle: "Platform Capabilities",
    coreModulesLabel: "Core Modules",
  },
  hero: {
    title: "Atlas Platform",
    subtitle: "Runtime Intelligence Infrastructure for Robotics",
    description: "The Atlas platform provides shared infrastructure for sensor manufacturers and robot OEMs to govern runtime evidence, coordinate investigations, and build organizational memory.",
  },

  architecture: {
    title: "Platform Architecture",
    description: "The Atlas platform is built around evidence governance and investigation collaboration, supporting two product lines sharing the same infrastructure.",
    principles: [
      "Runtime datasets governed by customer environment",
      "Evidence windows standardized and bounded",
      "Investigation coordination across L1, L2/L3, OEM engineering, and sensor FAE",
      "Historical RGA™ retrieves candidates without claiming identical causality",
      "Investigation results and lessons learned authored by human teams",
    ],
    constitutionalBoundary: {
      title: "Atlas Constitutional Boundary",
      items: [
        "Atlas structures evidence.",
        "Atlas retrieves historical candidates.",
        "Atlas does not automatically confirm root cause.",
        "Atlas does not assign responsibility.",
      ],
    },
  },

  capabilities: [
    {
      name: "Atlas Agent™",
      description: "Observe, retain, lock, and export runtime datasets according to retention policies.",
      keyFeatures: [
        "Observe runtime surfaces (power, bus, Linux runtime, ROS topics)",
        "Govern datasets according to customer retention policies",
        "Export runtime datasets for evidence transformation",
        "Keep evidence ownership within customer boundaries",
      ],
    },
    {
      name: "Evidence Pack™",
      description: "Transform long-running runtime datasets into bounded, standardized evidence windows.",
      keyFeatures: [
        "Five-window evidence model (pre-guard, baseline, deviation, recovery observation, post-guard)",
        "Standardized evidence windows for team review",
        "Bounded context for OEM and sensor collaboration",
        "Explicit temporal boundaries and runtime surfaces",
      ],
    },
    {
      name: "Historical RGA™",
      description: "Recall prior investigation results and lessons learned without claiming identical causality.",
      keyFeatures: [
        "Retrieve historical investigation candidates for review",
        "Mark candidate strength (strong candidates, partial candidates, related historical patterns)",
        "Explicit environmental differences",
        "No automatic root cause confirmation",
      ],
    },
    {
      name: "Investigation Workspace™",
      description: "Coordinate L1, L2/L3, OEM engineering, and sensor FAE investigation work.",
      keyFeatures: [
        "Unified investigation context view",
        "Coordinate multi-team workflows",
        "Evidence Pack™ review interface",
        "Investigation result and lesson learned authoring",
      ],
    },
    {
      name: "Sensor EGP™",
      description: "Exchange de-identified evidence and investigation context between OEMs and sensor manufacturers.",
      keyFeatures: [
        "De-identified runtime evidence exchange",
        "Bounded collaboration context",
        "Protect operational privacy for both parties",
      ],
    },
    {
      name: "Assist Vault™",
      description: "Preserve completed investigation assets as organizational memory.",
      keyFeatures: [
        "Save investigation results and lessons learned",
        "Retain Evidence Packs™ for future reference",
        "Support Historical RGA™ retrieval",
        "Build reusable knowledge base",
      ],
    },
    {
      name: "Executive Dashboard™",
      description: "Present investigation throughput, evidence coverage, reuse rate, SLA, and illustrative ROI.",
      keyFeatures: [
        "Investigation throughput and SLA tracking",
        "Evidence coverage visualization",
        "Historical RGA™ reuse rate",
        "Illustrative ROI metrics",
      ],
    },
  ],

  productsRelationship: {
    title: "Platform and Product Relationship",
    description: "The Atlas platform supports two focused product lines, each serving different sides of the runtime boundary.",
    products: [
      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "Sensor Manufacturers",
        coreModules: [
          "Runtime Profiles™",
          "Runtime Observation",
          "Historical Sensor RGA™",
          "Sensor Investigation Workspace™",
          "OEM Collaboration via EGP",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
      {
        name: "Atlas Runtime Investigation™",
        audience: "Robot OEMs",
        coreModules: [
          "Atlas Agent™",
          "Runtime Dataset Retention",
          "Evidence Pack™",
          "Candidate Evidence Packs",
          "Historical RGA™",
          "Investigation Workspace™",
          "Sensor Engagement Pack (EGP)",
          "Assist Vault™",
          "Executive Dashboard™",
        ],
      },
    ],
  },

  documentation: {
    title: "Technical Documentation",
    whitePapers: [
      {
        title: "Runtime Intelligence Infrastructure for Robotics",
        description: "Management and engineering reading layer: what runtime intelligence infrastructure is and why it matters for robot organizations.",
      },
      {
        title: "Atlas Runtime Sensor Governance",
        description: "Complete technical specification and implementation guide for the sensor manufacturer product line.",
      },
      {
        title: "Atlas Runtime Investigation",
        description: "Complete technical specification and implementation guide for the robot OEM product line.",
      },
      {
        title: "Evidence Pack and Five-Window Evidence Model",
        description: "Design rationale for Evidence Pack™ and technical implementation of the five-window evidence model.",
      },
      {
        title: "Historical RGA and Organizational Memory",
        description: "How Historical RGA™ retrieves candidates, marks strength, and maintains organizational memory consistency.",
      },
      {
        title: "OEM ↔ Sensor Investigation Collaboration",
        description: "Investigation collaboration mechanisms and evidence exchange patterns between OEMs and sensor manufacturers.",
      },
    ],
    documentationLink: {
      title: "docs.sensordeck.tech",
      description: "Canonical data schemas, CLI, integration guides, artifact definitions, release notes, and technical implementation documentation.",
      href: "https://docs.sensordeck.tech",
    },
  },

  cta: {
    title: "Learn How Atlas Platform Fits Your Organization",
    description: "Explore how Atlas fits your robot organization's runtime boundaries, investigation workflows, and evidence ownership model.",
    primaryButton: "Request Demo",
    secondaryButton: "Read Technical Whitepaper",
  },
} satisfies PlatformContent;
