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
    categoryDefinition: "A new category for the runtime boundary",
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
      "Atlas operates across the boundary where sensor behavior becomes a system-level runtime condition: power, buses, Linux/SBC runtime, ROS inputs, and the teams responsible for investigation.",
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
      "Runtime Intelligence Infrastructure is the governed layer between runtime signals and the decisions made after an incident.",
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
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type HomeContent = Widen<typeof homeContent>;

export default homeContent;
