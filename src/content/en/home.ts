import type { HomeContent } from "@/lib/content-types";

const homeContent = {
  heroTitle: "Runtime Governance Infrastructure for Robotics",

heroSubtitleDesktop:
  "Runtime data is fragmented. Evidence disappears. Every investigation starts from zero. Atlas turns runtime evidence into reusable organizational knowledge.",

heroSubtitleMobile:
  "Runtime data is fragmented. Evidence disappears. Every investigation starts from zero.\n\nAtlas turns runtime evidence\ninto reusable organizational knowledge.",

heroDescription: "",
  heroPrinciple: [] as string[],
  heroValueProposition: "Every investigation starts from evidence. Every future investigation starts from history.",
  sectionTitles: {
    categoryDefinition: "A Missing Layer for Robotics",
    theProblem: "Today, Every Runtime Execution Failure (REF) Starts from Scratch",
    whyRuntimeGovernance: "Why runtime governance is missing",
    productLines: "Two Atlas product lines. One shared infrastructure.",
    platformCapabilities: "The Atlas platform structures the work around evidence",
    investigationLifecycle: "From REF to future reuse",
    roboticsIndustry: "Built for the robotics industry",
    evidenceOwnership: "Evidence ownership stays with the operating boundary",
    organizationalMemory: "Turn completed investigations into organizational memory",
    technicalResources: "Technical reading for engineering and operations",
    finalCta: "Make runtime evidence useful across the organization",
  },
  sectionDescriptions: {
    categoryDefinition:
      "The robotics industry already has sensors, device drivers, ROS/middleware, AI & autonomy, fleet management, and cloud platforms. Yet between sensor output and system decision-making, one critical layer has remained largely undefined: unified runtime intelligence infrastructure.",
    theProblem:
      "Runtime evidence is scattered across logs, devices, videos, tickets, and people's memories. Every runtime investigation repeats the same work: collecting evidence, aligning timelines, contacting different teams, and rebuilding knowledge that already existed.",
    whyRuntimeGovernance:
      "The signals are available, but the operational context is usually fragmented across devices, logs, tickets, recordings, and individual memory.",
    productLines:
      "Sensor manufacturers and robot OEMs work on different sides of the runtime boundary. Atlas gives each side a focused product line while keeping evidence and collaboration consistent.",
    platformCapabilities:
      "These capabilities are shared by both product lines. Atlas structures evidence and retrieves historical candidates; human teams author Investigation Results and Lessons Learned.",
    investigationLifecycle:
      "A runtime incident becomes a bounded, reviewable sequence of evidence and decisions. Recovery is an observation window, not a guaranteed recovery conclusion.",
    roboticsIndustry:
      "The platform is shaped around the surfaces that make robotics incidents difficult to isolate, from trigger timing and buses to Linux runtime and ROS topics.",
    evidenceOwnership:
      "Atlas is designed to work within customer evidence policies. It structures and exports bounded context for collaboration without changing who governs the underlying evidence.",
    organizationalMemory:
      "Assist Vault preserves completed investigation assets. Historical RGA recalls previous patterns as candidates for review, never as proof of identical causality.",
    technicalResources:
      "Use white papers for the public executive and engineering reading layer. Use the independent documentation site for schemas, integrations, and implementation detail.",
    finalCta:
      "See how Atlas can fit the runtime boundary, investigation workflow, and evidence ownership model of your robotics organization.",
  },
  categoryDefinition: {
    lead:
      "Atlas continuously transforms runtime signals into structured evidence, collaborative investigations, reusable engineering knowledge, and organizational memory. Instead of treating every runtime incident as an isolated support case, Atlas helps organizations build a continuously growing runtime intelligence capability.",
    runtimeBoundary: {
      title: "The Runtime Boundary Atlas Protects",
      steps: [
        "Physical World",
        "Sensor",
        "Power / Bus / Timing",
        "Linux / Driver / Buffer",
        "ROS Runtime",
        "Application Input",
        "System Decision"
      ],
      note: "Atlas continuously observes, records, and organizes this critical runtime boundary. It is also the area where runtime failures occur most frequently, yet where the robotics industry has historically lacked a unified governance model."
    },
    whyImportant: {
      title: "Why Does This Layer Matter?",
      traditional: {
        title: "Traditional robotics platforms primarily focus on:",
        items: ["Perception", "Motion Control", "AI Decision Making", "Application Software"]
      },
      runtime: {
        title: "However, many real-world runtime failures originate from the layers in between:",
        items: [
          "Power fluctuations",
          "USB / Ethernet / CAN communication",
          "Linux Runtime behavior",
          "Device Drivers",
          "Memory Buffers",
          "Process Scheduling",
          "ROS Topics",
          "Runtime Timing"
        ],
        note: "These runtime behaviors determine whether the system ultimately receives data that is complete, continuous, synchronized, and trustworthy. Atlas captures these runtime signals, transforms them into standardized evidence, and continuously builds reusable engineering knowledge."
      }
    },
    whatAtlasProvides: {
      title: "What Does Atlas Provide?",
      notItems: [
        "Atlas is not another SDK.",
        "It is not another device driver.",
        "It is not another ROS framework."
      ],
      isItem: "Atlas introduces a new infrastructure layer for robotics: Runtime Intelligence Infrastructure™",
      capabilities: [
        "24×7 Runtime Observation",
        "Continuous Runtime Dataset Retention",
        "Automated Evidence Pack Generation",
        "Historical RGA Accumulation",
        "OEM ↔ Sensor Collaborative Investigation",
        "Assist Vault Organizational Memory",
        "Continuous Knowledge Reuse Across Future REF Events"
      ],
      summary: "Robots understand the physical world. Atlas understands runtime behavior."
    },
    points: [
      {
        label: "Runtime boundary",
        description:
          "Connect sensor behavior to power, buses, Linux/SBC runtime, ROS inputs, and application context.",
      },
      {
        label: "Bounded evidence",
        description:
          "Convert long runtime datasets into standardized evidence windows that teams can review and exchange.",
      },
      {
        label: "Reusable knowledge",
        description:
          "Preserve human-authored Investigation Results and Lessons Learned for future reference.",
      },
    ],
  },
  theProblem: {
    lead: "When the investigation ends, most of that engineering experience disappears again. The next REF starts from scratch.",
    cta: "See How Atlas Changes This",
    comparison: {
      withoutAtlas: {
        title: "Without Atlas",
        steps: [
          "REF Occurs",
          "Logs / Devices / Videos",
          "Emails / Tickets",
          "Engineers Investigate",
          "Knowledge Lost"
        ],
        note: "Time-consuming. Expensive. Not Reusable."
      },
      withAtlas: {
        title: "With Atlas",
        steps: [
          "REF Occurs",
          "Evidence Pack",
          "Historical RGA Recall",
          "Investigation",
          "IR / LL",
          "Assist Vault",
          "Future REF Reuse"
        ],
        note: "Every investigation begins with evidence. The next investigation begins with history."
      }
    },
    whyMatters: {
      title: "Why It Matters",
      description: "Instead of repeating yesterday's investigation, Atlas continuously builds organizational knowledge that grows with every REF. Engineering teams spend less time rebuilding context, and more time improving products."
    }
  },
  whyRuntimeGovernance: {
    items: [
      {
        label: "Signals are fragmented",
        description:
          "Sensor output, power, timing, network, host runtime, and ROS context are often reviewed in separate tools.",
      },
      {
        label: "Incidents are unbounded",
        description:
          "An unlimited archive makes it difficult to agree on the exact evidence window that matters.",
      },
      {
        label: "Knowledge resets at closure",
        description:
          "The conclusion may live in a ticket or in a person’s memory instead of becoming a reusable investigation asset.",
      },
    ],
    boundaryNote:
      "Atlas is not presented as a logging platform, an AI chatbot, a robotics dashboard vendor, or a generic sensor-validation laboratory.",
  },
  productLines: [
    {
      name: "Atlas Runtime Sensor Governance™",
      audience: "Sensor Manufacturers",
      description:
        "Understand how your sensors behave across real-world robot deployments, preserve runtime knowledge, and collaborate with OEM investigation teams using shared evidence.",
      modules: [
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
      link: "/products/runtime-sensor-governance",
    },
    {
      name: "Atlas Runtime Investigation™",
      audience: "Robot OEMs",
      description:
        "Transform runtime incidents into bounded evidence, coordinated investigations, and reusable organizational knowledge.",
      modules: [
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
      link: "/products/runtime-investigation",
    },
  ],
  platformCapabilities: [
    {
      title: "Atlas Agent™",
      description:
        "Observe, retain, lock, and export runtime datasets according to retention policy.",
    },
    {
      title: "Evidence Pack™",
      description:
        "Convert long runtime datasets into bounded, standardized evidence windows.",
    },
    {
      title: "Historical RGA™",
      description:
        "Recall previous Investigation Results and Lessons Learned without claiming identical causality.",
    },
    {
      title: "Investigation Workspace™",
      description:
        "Coordinate Tier 1, Tier 2/3, OEM engineering, and Sensor FAE investigation work.",
    },
    {
      title: "Sensor EGP™",
      description:
        "Exchange de-identified evidence and investigation context between an OEM and a sensor manufacturer.",
    },
    {
      title: "Assist Vault™",
      description:
        "Preserve completed investigation assets as organizational memory.",
    },
    {
      title: "Executive Dashboard™",
      description:
        "Surface investigation throughput, evidence coverage, reuse, SLA, and illustrative ROI.",
    },
  ],
  constitutionalBoundary: [
    "Atlas structures evidence.",
    "Atlas retrieves historical candidates.",
    "Atlas does not automatically confirm root cause.",
    "Atlas does not assign liability.",
  ],
  investigationLifecycle: [
    { label: "REF", description: "Reference the runtime incident." },
    { label: "Runtime Dataset", description: "Retain the governed runtime context." },
    { label: "Evidence Pack", description: "Bound the evidence window." },
    { label: "Historical RGA Recall", description: "Recall candidates for review." },
    { label: "Investigation Context", description: "Align the relevant surfaces." },
    { label: "EGP", description: "Share bounded context with the sensor side." },
    { label: "OEM / Sensor IR + LL", description: "Author the human investigation record." },
    { label: "Closure", description: "Close the active investigation." },
    { label: "Assist Vault", description: "Preserve the completed asset." },
    { label: "Future Reuse", description: "Make the record available for reference." },
  ],
  fiveWindowModel: [
    "Pre-Guard",
    "Baseline",
    "Deviation",
    "Recovery",
    "Post-Guard",
  ],
  roboticsIndustry: {
    audiences: ["Robot OEMs", "Sensor Manufacturers"],
    surfaces: [
      "Power Health",
      "Timing",
      "Ethernet",
      "USB",
      "CAN",
      "LiDAR",
      "Camera",
      "IMU",
      "Linux Runtime",
      "ROS Topics",
      "Storage",
      "Sensor heartbeat / raw output",
    ],
  },
  evidenceOwnership: {
    principles: [
      {
        label: "Customer-controlled evidence",
        description:
          "Runtime datasets remain governed by the customer’s environment, retention policy, and access model.",
      },
      {
        label: "Bounded collaboration",
        description:
          "Evidence Pack and Sensor EGP provide a defined context for review rather than exposing an unlimited archive.",
      },
      {
        label: "De-identified exchange",
        description:
          "OEM and sensor manufacturer teams can exchange the investigation context needed for collaboration.",
      },
    ],
  },
  organizationalMemory: {
    labels: [
      "Strong Candidate",
      "Partial Candidate",
      "Related Historical Pattern",
      "Why Retrieved",
      "Environment Difference",
    ],
    recallExample: {
      reference: "RGA-2026-014",
      title: "Timing deviation near trigger boundary",
      status: "Related Historical Pattern",
      note:
        "Retrieved for review because the runtime surfaces overlap. Environment differences remain explicit.",
    },
  },
  technicalResources: {
    whitePapers: [
      "Runtime Intelligence Infrastructure for Robotics",
      "Atlas Runtime Sensor Governance",
      "Atlas Runtime Investigation",
      "Evidence Pack and Five-Window Evidence Model",
      "Historical RGA and Organizational Memory",
      "OEM ↔ Sensor Investigation Collaboration",
    ],
    documentationDescription:
      "Canonical schemas, CLI, integration guides, artifact definitions, release notes, and technical implementation documentation live at docs.sensordeck.tech.",
  },
  ctas: {
    primary: "Request Demo",
    exploreProducts: "Explore Products",
    technicalWhitePaper: "Read Technical White Paper",
    viewArchitecture: "View Architecture",
    readWhitePaper: "Read White Paper",
    documentation: "Open Documentation",
    overview: "Watch 2-Min Overview",
  },
  ui: {
    sectionEyebrows: {
      categoryDefinition: "01 / Category Definition",
      theProblem: "02 / Core Problem",
      whyRuntimeGovernance: "03 / The Gap",
      productLines: "04 / Products",
      platformCapabilities: "05 / Platform",
      investigationLifecycle: "06 / Investigation Lifecycle",
      roboticsIndustry: "07 / Robotics Industry",
      evidenceOwnership: "08 / Evidence Boundary",
      organizationalMemory: "09 / Organizational Memory",
      technicalResources: "10 / Library",
      finalCta: "11 / Start a Conversation",
    },
    learnMore: "Learn More",
    categoryImageAlt:
      "Category definition - Atlas Runtime Intelligence Infrastructure",
    problemImageAlt:
      "Core problem - every runtime investigation starts from scratch",
    productLabel: "Product",
    coreModules: "Core Modules",
    productLifecycle: "Product Lifecycle",
    fiveWindowModel: "Five-Window Evidence Model",
    fiveWindowDescription:
      "Evidence is bounded around the runtime deviation, not treated as an unlimited archive.",
    runtimeSurfaces: "Runtime Surfaces",
    sensor: "Sensor",
    policy: "Policy",
    egpDescription:
      "Sensor Engagement Pack is the bounded collaboration surface from an OEM to a sensor manufacturer. It is not the same as an internal Evidence Pack™.",
    historicalRgaDescription:
      "Historical RGA™ is a recall, reuse, and reference system for human investigation teams.",
    historicalRgaBoundary:
      "It does not learn automatically, confirm root cause, or assign responsibility. Retrieved candidates include why they were retrieved and any remaining environmental differences.",
    recallCandidate: "Historical RGA™ / Recall Candidate",
    retrievalReason: "Retrieval Reason",
    retrievalReasonValue: "Runtime surfaces overlap.",
    reviewBoundary: "Review Boundary",
    reviewBoundaryValue: "Environmental differences remain explicit.",
    documentation: "Canonical Documentation",
    finalCtaDescription:
      "If you are exploring runtime governance, sensor evidence, or investigation workflows, talk with us about your operating context.",
    illustrativeDemoData: "Illustrative demo data only",
    contactUs: "Contact Us",
  },
} satisfies HomeContent;

export default homeContent;
