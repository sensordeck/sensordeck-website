import type { PlatformContent } from "@/lib/content-types";

export const platformContent = {
  ui: {
    capabilitiesTitle: "Platform Components",
    coreModulesLabel: "Core Capabilities",
  },

  hero: {
    title: "Atlas Runtime Governance Platform",
    subtitle:
      "The runtime governance infrastructure for modern robotics.",
    description:
      "Atlas transforms distributed runtime data into bounded evidence, enabling structured investigation, cross-organization collaboration, and reusable engineering knowledge.",
  },

  architecture: {
    title: "One governed chain from observation to organizational knowledge",
    description:
      "Atlas provides the infrastructure for continuous observation, evidence generation, investigation workflows, historical recall, and knowledge reuse. It complements existing robotics systems while supporting engineering teams with structured, reviewable evidence.",

    principles: [
      "Customer runtime data remains within the customer's governance boundary",
      "Continuous data is converted into bounded Evidence Packs™",
      "Evidence, context, ownership, and investigation status remain reviewable",
      "Historical RGA™ recalls relevant prior cases without asserting causality",
      "Authorized engineering teams confirm root cause, responsibility, and Lessons Learned",
    ],

    constitutionalBoundary: {
      title: "What Atlas Does—and Does Not Do",
      items: [
        "Observes, retains, and structures runtime evidence.",
        "Creates reviewable event windows and investigation context.",
        "Recalls relevant historical cases and candidate patterns.",
        "Does not confirm root cause or assign responsibility.",
      ],
    },
  },

  capabilities: [
    {
      name: "Atlas Agent™",
      description:
        "A continuously operating agent that observes and governs runtime data inside the customer environment.",
      keyFeatures: [
        "Observe critical runtime signals continuously",
        "Cover power, buses, Linux, devices, and ROS topics",
        "Retain, lock, and export data under customer policy",
        "Keep evidence ownership within the customer boundary",
      ],
    },

    {
      name: "Runtime Surface™",
      description:
        "A unified access layer for distributed device, system, and application signals.",
      keyFeatures: [
        "Connect signals across hardware and software layers",
        "Integrate existing devices, logs, and data sources through adapters",
        "Provide a standard entry point for event slicing",
        "Coexist with the customer's existing robotics architecture",
      ],
    },

    {
      name: "Runtime Dataset™",
      description:
        "A governed, time-ordered runtime dataset managed under customer-defined retention policies.",
      keyFeatures: [
        "Preserve data before, during, and after an event",
        "Support configurable scope and retention periods",
        "Maintain timing, provenance, and environment context",
        "Provide the source data for Evidence Pack™ generation",
      ],
    },

    {
      name: "Evidence Pack™",
      description:
        "A bounded, time-aligned evidence window generated around a specific runtime event.",
      keyFeatures: [
        "Capture relevant data before, during, and after an event",
        "Align multiple signals to a shared timeline",
        "Preserve provenance, integrity, and generation context",
        "Support review across OEM, sensor, and investigation teams",
      ],
    },

    {
      name: "Historical RGA™",
      description:
        "A recall layer for relevant prior cases, patterns, findings, and Lessons Learned.",
      keyFeatures: [
        "Retrieve related historical investigations",
        "Distinguish strong, partial, and contextual candidates",
        "Expose differences between current and prior environments",
        "Keep historical similarity separate from root-cause confirmation",
      ],
    },

    {
      name: "Investigation Context™",
      description:
        "A shared structure for the event, environment, evidence, objectives, and participating teams.",
      keyFeatures: [
        "Record the robot, sensors, software, and deployment environment",
        "Connect the event timeline to the Evidence Pack™",
        "Define scope, status, ownership, and participants",
        "Reduce repeated collection of background information",
      ],
    },

    {
      name: "Investigation Tier Candidate™",
      description:
        "A structured routing signal that helps move an event into the appropriate investigation path.",
      keyFeatures: [
        "Support Tier 1 classification and evidence review",
        "Support Tier 2 and Tier 3 engineering escalation",
        "Identify cases requiring OEM or Sensor FAE involvement",
        "Guide routing without replacing human judgment",
      ],
    },

    {
      name: "Sensor Engagement Pack™",
      description:
        "A bounded evidence package for investigation between an OEM and a sensor manufacturer.",
      keyFeatures: [
        "Include evidence relevant to the sensor boundary",
        "Exclude unnecessary customer operational information",
        "Standardize context and evidence for Sensor FAE review",
        "Preserve data, scope, and responsibility boundaries",
      ],
    },

    {
      name: "Assist Vault™",
      description:
        "A governed repository for completed investigations, findings, evidence, and Lessons Learned.",
      keyFeatures: [
        "Preserve investigation results and Lessons Learned",
        "Link findings to original evidence and context",
        "Support future Historical RGA™ recall",
        "Let future investigations begin with prior knowledge",
      ],
    },

    {
      name: "CTO Dashboard",
      description:
        "A management view of investigation performance, recurring issues, and governance outcomes.",
      keyFeatures: [
        "Track investigation volume, cycle time, and SLA performance",
        "Measure evidence coverage and investigation-asset reuse",
        "Identify recurring runtime-boundary issues",
        "Present governance progress and operational impact",
      ],
    },
  ],

  productsRelationship: {
    title: "Shared Infrastructure. Different Responsibilities.",
    description:
      "Atlas Runtime Investigation™ serves robot OEMs. Atlas Runtime Sensor Governance™ serves sensor manufacturers. Both products share the same runtime-governance platform while preserving distinct data ownership and engineering responsibilities.",

    products: [
      {
        name: "Atlas Runtime Investigation™",
        audience: "For Robot OEMs",
        coreModules: [
          "Atlas Agent™",
          "Runtime Surface™",
          "Runtime Dataset™",
          "Evidence Pack™",
          "Investigation Context™",
          "Investigation Tier Candidate™",
          "Historical RGA™",
          "Sensor Engagement Pack™",
          "Assist Vault™",
          "CTO Dashboard",
        ],
      },

      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "For Sensor Manufacturers",
        coreModules: [
          "Sensor Runtime-Boundary Observation",
          "Runtime Profiles™",
          "Sensor Investigation Workspace™",
          "Historical Sensor RGA™",
          "Sensor Engagement Pack™ Collaboration",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
    ],
  },

  documentation: {
    title: "Platform Documentation",

    whitePapers: [
      {
        title: "Atlas Agent™",
        description:
          "Continuous observation, retention, and controlled export inside the customer environment.",
      },
      {
        title: "Runtime Surface™ and Runtime Dataset™",
        description:
          "How Atlas connects distributed signals and creates governed runtime datasets.",
      },
      {
        title: "Evidence Pack™",
        description:
          "How Atlas creates bounded, time-aligned evidence around runtime events.",
      },
      {
        title: "Historical RGA™",
        description:
          "How prior investigations are recalled without replacing engineering judgment.",
      },
      {
        title: "Investigation Context™",
        description:
          "How evidence, environment, ownership, and workflow are organized.",
      },
      {
        title: "Sensor Engagement Pack™",
        description:
          "How OEM and sensor teams collaborate within explicit evidence boundaries.",
      },
    ],

    documentationLink: {
      title: "Open Platform Documentation",
      description:
        "Review the complete architecture for Atlas Agent™, Runtime Surface™, Runtime Dataset™, Evidence Pack™, Historical RGA™, Investigation Context™, Sensor Engagement Pack™, Assist Vault™, and CTO Dashboard.",
      href: "https://sensordeck.github.io/atlas-docs-cn/category/平台架构",
    },
  },

  cta: {
    title: "Discuss Your Runtime Environment",
    description:
      "Tell us about your robot platform, runtime architecture, deployment environment, and investigation workflow. We will assess how Atlas fits within your existing engineering system.",
    primaryButton: "Request a Demo",
    secondaryButton: "Open Platform Documentation",
  },
} satisfies PlatformContent;
