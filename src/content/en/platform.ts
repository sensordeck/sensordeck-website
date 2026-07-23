import type { PlatformContent } from "@/lib/content-types";

export const platformContent = {
  ui: {
    capabilitiesTitle: "Core Platform Architecture",
    coreModulesLabel: "Core Capabilities",
  },

  hero: {
    title: "Atlas Platform Architecture",
    subtitle:
      "From runtime data to reviewable evidence and reusable organizational assets",
    description:
      "Atlas is governance infrastructure for the robotics runtime boundary. It continuously observes operating conditions across sensors, buses, Linux Runtime, host controllers, and ROS Topics, transforming data scattered across devices, logs, and people into bounded, reviewable, and collaborative investigation assets.",
  },

  architecture: {
    title:
      "Infrastructure spanning the full lifecycle of runtime investigation",
    description:
      "Atlas does not replace robot control systems, nor does it replace engineering teams in making root-cause judgments. It establishes a complete infrastructure chain from runtime observation, evidence retention, and event-window generation to cross-team investigation, historical recall, and the preservation of organizational memory.",
    principles: [
      "Runtime data remains within the customer's governance boundary",
      "Long-running data streams are compressed into time-bounded Evidence Packs™",
      "Investigation context, candidate tiers, and collaborators are organized in one place",
      "Historical RGA™ recalls historical candidates without automatically determining causality",
      "Investigation conclusions, responsibility judgments, and lessons learned are always confirmed by authorized teams",
    ],

    constitutionalBoundary: {
      title: "Atlas Capability Boundary",
      items: [
        "Atlas observes, retains, and structures runtime evidence.",
        "Atlas generates reviewable event windows and investigation context.",
        "Atlas recalls relevant historical investigation assets and candidate patterns.",
        "Atlas does not automatically confirm root cause or assign responsibility.",
      ],
    },
  },

  capabilities: [
    {
      name: "Atlas Agent™",
      description:
        "A continuous observation and data-governance agent deployed in the customer's runtime environment.",
      keyFeatures: [
        "Observe critical runtime signals 24/7",
        "Cover power, buses, Linux Runtime, devices, and ROS Topics",
        "Retain, lock, and export data according to customer policy",
        "Keep data and evidence ownership within the customer boundary",
      ],
    },

    {
      name: "Runtime Surface™",
      description:
        "Unifies distributed runtime signals into an observable and accessible runtime surface.",
      keyFeatures: [
        "Unify runtime signals across device and software layers",
        "Connect existing logs, devices, and data sources through adapters",
        "Provide a standard entry point for event slicing and evidence generation",
        "Require no replacement of the customer's existing robotics architecture",
      ],
    },

    {
      name: "Runtime Dataset™",
      description:
        "A continuously created, managed, and exportable runtime dataset governed by retention policy.",
      keyFeatures: [
        "Preserve continuous runtime data from before and after an event",
        "Support customer-defined retention periods and data scope",
        "Maintain temporal order, provenance, and runtime-environment context",
        "Provide the raw evidence foundation for Evidence Pack™ generation",
      ],
    },

    {
      name: "Evidence Pack™",
      description:
        "Compresses large volumes of runtime data into bounded, time-aligned, reviewable evidence windows.",
      keyFeatures: [
        "Generate evidence windows for before, during, and after an event",
        "Align signals from multiple sources with key points in time",
        "Preserve evidence provenance, integrity, and generation context",
        "Enable joint review by OEMs, sensor manufacturers, and investigation teams",
      ],
    },

    {
      name: "Historical RGA™",
      description:
        "Recalls relevant candidates, patterns, and lessons from completed historical investigations.",
      keyFeatures: [
        "Retrieve historical investigation records related to the current event",
        "Mark strong candidates, partial candidates, and related historical patterns",
        "Make differences between current and historical environments explicit",
        "Keep recall results distinct from root-cause confirmation",
      ],
    },

    {
      name: "Investigation Context™",
      description:
        "Organizes the event, devices, runtime environment, evidence, and investigation objectives into one investigation context.",
      keyFeatures: [
        "Record the robot, sensors, software versions, and deployment environment",
        "Associate the Evidence Pack™ with the event timeline",
        "Clarify investigation scope, current status, and participating teams",
        "Reduce repeated collection of background information across teams",
      ],
    },

    {
      name: "Investigation Tier Candidate™",
      description:
        "Forms candidate investigation tiers from the available evidence to help route an event into the appropriate workflow.",
      keyFeatures: [
        "Support Tier 1 initial classification and evidence review",
        "Support escalation to Tier 2 / Tier 3 engineering investigation",
        "Flag candidates requiring OEM engineering or sensor FAE involvement",
        "Provide investigation direction without replacing human judgment",
      ],
    },

    {
      name: "Sensor Engagement Pack™",
      description:
        "Establishes a bounded investigation collaboration package between an OEM and a sensor manufacturer.",
      keyFeatures: [
        "Extract investigation evidence directly related to the sensor boundary",
        "Remove unnecessary customer operational information",
        "Standardize the event context and evidence format needed by sensor FAEs",
        "Preserve each party's data and responsibility boundaries",
      ],
    },

    {
      name: "Assist Vault™",
      description:
        "Preserves completed investigation results, evidence assets, and lessons learned as organizational memory.",
      keyFeatures: [
        "Store investigation results and Lessons Learned",
        "Associate original Evidence Packs™ and investigation context",
        "Support future Historical RGA™ recall",
        "Let the next investigation begin with organizational memory instead of zero",
      ],
    },

    {
      name: "CTO Dashboard",
      description:
        "Transforms runtime investigations into traceable organizational-governance and engineering-operations metrics.",
      keyFeatures: [
        "Track investigation volume, cycle time, and SLA",
        "Monitor evidence coverage and investigation-asset reuse rates",
        "Identify recurring runtime-boundary issues",
        "Present runtime-governance investment and illustrative ROI",
      ],
    },
  ],

  productsRelationship: {
    title: "One Platform, Two Product Lines",
    description:
      "Both product lines share Atlas infrastructure for runtime observation, evidence governance, investigation collaboration, and organizational memory, while serving the distinct responsibility boundaries of robot OEMs and sensor manufacturers.",

    products: [
      {
        name: "Atlas Runtime Investigation™",
        audience: "For Robot OEMs",
        coreModules: [
          "Atlas Agent™ and Runtime Surface™",
          "Runtime Dataset™ retention",
          "Evidence Pack™ event windows",
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
          "Sensor runtime-boundary observation",
          "Runtime Profiles™",
          "Sensor Investigation Workspace™",
          "Historical Sensor RGA™",
          "Sensor Engagement Pack™ collaboration",
          "Sensor Assist Vault™",
          "Runtime Knowledge Base™",
        ],
      },
    ],
  },

  documentation: {
    title: "Explore the Platform Architecture",

    whitePapers: [
      {
        title: "Atlas Agent™",
        description:
          "Learn how Atlas continuously observes, retains, and exports runtime data in the customer environment.",
      },
      {
        title: "Runtime Surface™ and Runtime Dataset™",
        description:
          "Learn how Atlas connects to existing runtime environments and turns distributed data sources into governable datasets.",
      },
      {
        title: "Evidence Pack™",
        description:
          "Learn how runtime events are compressed into bounded, time-aligned, reviewable evidence windows.",
      },
      {
        title: "Historical RGA™",
        description:
          "Learn how Atlas recalls historical investigation candidates while preserving the boundary of human root-cause judgment.",
      },
      {
        title: "Investigation Context™",
        description:
          "Learn how event background, runtime environment, evidence, and investigation workflow are organized in one place.",
      },
      {
        title: "Sensor Engagement Pack™",
        description:
          "Learn how OEMs and sensor manufacturers collaborate through investigation packages with explicit boundaries.",
      },
    ],

    documentationLink: {
      title: "Read the Complete Platform Architecture Documentation",
      description:
        "View the complete technical descriptions of Atlas Agent™, Runtime Surface™, Runtime Dataset™, Evidence Pack™, Historical RGA™, Investigation Context™, Sensor Engagement Pack™, Assist Vault™, and CTO Dashboard.",
      href: "https://sensordeck.github.io/atlas-docs-cn/category/平台架构",
    },
  },

  cta: {
    title: "Start with Your Runtime Boundary",
    description:
      "Tell us about your robotics platform, primary sensors, deployment environment, and current investigation workflow. Together, we will assess how Atlas can fit into your existing engineering system.",
    primaryButton: "Request a Demo",
    secondaryButton: "Read the Platform Architecture Documentation",
  },
} satisfies PlatformContent;
