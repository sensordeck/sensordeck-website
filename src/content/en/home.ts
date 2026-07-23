import type { HomeContent } from "@/lib/content-types";

const homeContent = {
  heroTitle: "Runtime Governance\nInfrastructure for Robotics",
  heroSubtitleDesktop:
    "Runtime data is fragmented across logs, devices, and people. Every investigation starts from scratch.\nAtlas turns runtime evidence into reusable organizational knowledge.",
  heroSubtitleMobile:
    "Runtime data is fragmented across logs, devices, and people. Every investigation starts from scratch. Atlas turns runtime evidence into reusable organizational knowledge.",
  heroDescription: "",
  heroPrinciple: [],
  heroValueProposition:
    "Every investigation starts with evidence.\nThe next investigation starts with history.",
  sectionTitles: {
    categoryDefinition: "A Layer the Robotics Industry Did Not Have Before",
    theProblem: "Why Incident Investigation Always Starts from Scratch",
    whyRuntimeGovernance: "Why Runtime Governance Is Needed",
    productLines: "Two Solutions. One Mission.",
    platformCapabilities: "Atlas Builds Workflows Around Evidence",
    investigationLifecycle: "From REF to Future Reuse",
    roboticsIndustry: "Built for the Robotics Industry",
    evidenceOwnership: "Evidence Ownership Stays at the Operating Boundary",
    organizationalMemory:
      "Turn Completed Investigations into Organizational Memory",
    technicalResources: "Technical Reading for Engineering and Operations",
    finalCta: "Make Runtime Evidence Work Across Your Organization",
  },
  sectionDescriptions: {
    categoryDefinition:
      "Atlas establishes runtime governance infrastructure between sensor output and robot execution decisions.",
    theProblem:
      "Runtime evidence is scattered across systems and people, without unified organization or continuous retention. Every investigation has to start over.",
    whyRuntimeGovernance:
      "Signals are not missing, but runtime context is often scattered across devices, logs, tickets, recordings, and personal memory.",
    productLines:
      "Atlas provides a complete approach to robotics runtime governance through two product lines.",
    platformCapabilities:
      "These capabilities are shared by both product lines. Atlas structures evidence and retrieves historical candidates; human teams author Investigation Results and Lessons Learned.",
    investigationLifecycle:
      "Runtime incidents are organized into bounded, reviewable sequences of evidence and decisions. Recovery is an observation window, not proof that the system has recovered.",
    roboticsIndustry:
      "The platform is designed around the runtime surfaces that make robotics incidents hardest to investigate, including trigger timing, buses, Linux runtime, and ROS topics.",
    evidenceOwnership:
      "Atlas follows customer evidence policies, organizing and exporting bounded context for collaboration without changing governance of the underlying evidence.",
    organizationalMemory:
      "Assist Vault™ preserves completed investigation assets. Historical RGA™ recalls historical patterns as candidates for review, without claiming identical causality.",
    technicalResources:
      "White papers serve both management decision-makers and engineering teams; the independent documentation site provides data schemas, integration methods, and implementation details.",
    finalCta:
      "See how Atlas can fit your robotics organization, runtime boundaries, investigation workflows, and evidence ownership model.",
  },
  categoryDefinition: {
    lead:
      "The robotics industry already has advanced sensors, mature computing platforms, robust ROS middleware, and rapidly evolving AI and application software. Yet runtime behavior between sensor output and robot execution decisions still lacks unified governance. When an incident occurs, engineering teams are often left to reconstruct the entire runtime process from fragmented logs, devices, recordings, and human experience.",
    runtimeBoundary: {
      title: "What Robotics Is Really Missing Is a Runtime Governance Layer",
      steps: [
        "Real World",
        "Sensor",
        "Connectivity & Power",
        "Linux Runtime",
        "ROS Runtime",
        "Application",
        "System Decision",
      ],
      note:
        "Once a robot enters the real world, sensor data must pass through power, connectivity, Linux, drivers, buffers, schedulers, and the ROS runtime before it can become an input to system decisions. The industry has every individual component today, but lacks infrastructure to continuously govern this entire runtime chain.",
    },
    whyImportant: {
      title: "Why Is This Layer So Important?",
      traditional: {
        title: "The industry has long invested in:",
        items: [
          "Better Sensors",
          "More Capable AI",
          "More Complex Algorithms",
          "More Software Features",
        ],
      },
      runtime: {
        title: "But many runtime problems occur in:",
        items: [
          "Power",
          "USB / Ethernet / CAN",
          "Linux Runtime",
          "Driver",
          "Buffer",
          "Scheduler",
          "ROS Runtime",
          "Timing",
        ],
        note:
          "These layers do not change the algorithm, but they determine whether the data the system ultimately receives is complete, continuous, and trustworthy. Many robotics incidents originate not in AI, but in this runtime environment.",
      },
    },
    whatAtlasProvides: {
      title: "Atlas Fills This Gap",
      notItems: [
        "Not a new Sensor.",
        "Not a new Driver.",
        "Not a new ROS Framework.",
      ],
      isItem:
        "Atlas establishes a layer the robotics industry did not have before: Runtime Intelligence Infrastructure™",
      capabilities: [
        "Continuous Runtime Observation",
        "Runtime Evidence Retention",
        "Evidence Pack",
        "Runtime Investigation",
        "Historical RGA",
        "Assist Vault",
        "Organizational Runtime Memory",
      ],
      summary:
        "Robots are responsible for understanding the world. Atlas is responsible for understanding robot runtime.",
    },
    points: [
      {
        label: "Runtime Boundary",
        description:
          "Connect sensor behavior to power, buses, Linux/SBC runtime, ROS inputs, and application context.",
      },
      {
        label: "Bounded Evidence",
        description:
          "Convert long runtime datasets into standardized evidence windows that teams can review and exchange.",
      },
      {
        label: "Reusable Knowledge",
        description:
          "Preserve human-authored Investigation Results and Lessons Learned for future reference.",
      },
    ],
  },
  theProblem: {
    lead:
      "After a Runtime Execution Failure (REF), engineering teams usually face evidence collection before they can begin analysis. Logs must be extracted again, recordings resynchronized, device states reconfirmed, relevant teams recoordinated, and the entire runtime process reconstructed. The real cost is not identifying the problem; it is finding and organizing the evidence.",
    cta: "See How Atlas Solves This",
    comparison: {
      withoutAtlas: {
        title: "Traditional Investigation Process",
        steps: [
          "REF Occurs",
          "Find Logs",
          "Find Recordings",
          "Contact Different Teams",
          "Rebuild the Timeline",
          "Manual Analysis",
          "Knowledge Remains Scattered",
        ],
        note: "Every investigation starts over.",
      },
      withAtlas: {
        title: "Atlas Runtime Investigation",
        steps: [
          "REF Occurs",
          "Generate an Evidence Pack",
          "Recall Historical RGA Investigation Cases",
          "Investigation Workspace",
          "Record IR / Lessons Learned",
          "Preserve Knowledge in Assist Vault",
          "Reuse It Directly in the Future",
        ],
        note:
          "Build organizational memory once, then keep reusing it.",
      },
    },
    whyMatters: {
      title:
        "Atlas Changes More Than a Single Investigation. It Changes the Entire Organization.",
      description:
        "Atlas organizes continuously collected data into Runtime Evidence, then preserves investigation results in Historical RGA and Assist Vault. Every REF becomes the starting point for the next investigation, not the endpoint. Engineering experience can finally accumulate alongside the product.",
    },
  },
  whyRuntimeGovernance: {
    items: [
      {
        label: "Fragmented Signals",
        description:
          "Sensor output, power, timing, network, host runtime, and ROS context are typically reviewed in different tools.",
      },
      {
        label: "Unbounded Incidents",
        description:
          "Unlimited archives make it difficult to agree on the exact evidence window that matters.",
      },
      {
        label: "Knowledge Is Lost at Closure",
        description:
          "Conclusions may remain only in tickets or personal memory instead of becoming reusable investigation assets.",
      },
    ],
    boundaryNote:
      "Atlas is not positioned as a logging platform, an AI chatbot, a robotics dashboard vendor, or a general-purpose sensor validation laboratory.",
  },
  productLines: [
    {
      name: "Atlas Runtime Sensor Governance™",
      audience: "For Sensor Manufacturers",
      description:
        "Understand how your sensors perform in real-world deployments, preserve runtime knowledge, and collaborate with OEM investigation teams.",
      modules: [
        "Runtime Profiles™",
        "Runtime Observation",
        "Historical Sensor RGA™",
        "Sensor Investigation Workspace™",
        "OEM Collaboration with EGP™",
        "Sensor Assist Vault™",
        "Runtime Knowledge Base™",
      ],
      lifecycle: [
        "Runtime Governed Configuration",
        "Runtime Observation",
        "Sensor <-> OEM Collaborative Investigation (EGP)",
        "Sensor REF Ticket Investigation",
        "Evidence Pack (EP)",
        "Sensor Investigation Process",
        "Knowledge Base Retention™",
        "OEM Collaboration Handoff",
        "Knowledge Reuse",
      ],
      link: "/products/runtime-sensor-governance",
    },
    {
      name: "Atlas Runtime Investigation™",
      audience: "Robot OEMs",
      description:
        "Turn runtime incidents into bounded evidence, coordinated investigations, and reusable organizational knowledge.",
      modules: [
        "Atlas Agent™ & Runtime Dataset",
        "Evidence Pack™ & Candidate EPs",
        "Historical RGA™ Recall",
        "Investigation Workspace™ (Tier 1 / 2 / 3)",
        "Sensor Engagement Pack (EGP)™",
        "Assist Vault™",
        "Executive Dashboard™",
      ],
      lifecycle: [
        "Runtime Governed Configuration",
        "Candidate Evidence",
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
        "Recall historical Investigation Results and Lessons Learned without claiming identical causality.",
    },
    {
      title: "Investigation Workspace™",
      description:
        "Coordinate Tier 1, Tier 2/3, OEM engineering, and Sensor FAE investigations.",
    },
    {
      title: "Sensor EGP™",
      description:
        "Exchange de-identified evidence and investigation information between OEMs and sensor manufacturers.",
    },
    {
      title: "Assist Vault™",
      description:
        "Preserve completed investigation assets as organizational memory.",
    },
    {
      title: "Executive Dashboard™",
      description:
        "Present investigation throughput, evidence coverage, reuse rates, SLA, and illustrative ROI.",
    },
  ],
  constitutionalBoundary: [
    "Atlas structures evidence.",
    "Atlas retrieves historical candidates.",
    "Atlas does not automatically confirm root cause.",
    "Atlas does not assign responsibility.",
  ],
  investigationLifecycle: [
    { label: "REF", description: "Reference the runtime incident." },
    {
      label: "Runtime Dataset",
      description: "Retain governed runtime context.",
    },
    { label: "Evidence Pack", description: "Bound the evidence window." },
    {
      label: "Historical RGA Recall",
      description: "Recall candidates for review.",
    },
    {
      label: "Investigation Context",
      description: "Connect the relevant runtime surfaces.",
    },
    {
      label: "EGP",
      description: "Share bounded investigation information with the sensor side.",
    },
    {
      label: "OEM / Sensor IR + LL",
      description: "Author the human investigation record.",
    },
    { label: "Closure", description: "Close the active investigation." },
    {
      label: "Assist Vault",
      description: "Preserve the completed asset.",
    },
    {
      label: "Future Reuse",
      description: "Make the record available for reference.",
    },
  ],
  fiveWindowModel: [
    "Pre-Guard",
    "Baseline",
    "Deviation",
    "Recovery Observation",
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
      "Sensor Heartbeat / Raw Output",
    ],
  },
  evidenceOwnership: {
    principles: [
      {
        label: "Customer-Controlled Evidence",
        description:
          "Runtime datasets remain governed by the customer's environment, retention policy, and access model.",
      },
      {
        label: "Controlled Collaboration",
        description:
          "Evidence Pack™ and Sensor EGP™ provide bounded information for review instead of exposing unlimited archives.",
      },
      {
        label: "De-Identified Exchange",
        description:
          "OEM and sensor manufacturer teams can exchange the investigation information needed for collaboration.",
      },
    ],
  },
  organizationalMemory: {
    labels: [
      "Strong Candidate",
      "Partial Candidate",
      "Related Historical Pattern",
      "Recall Reason",
      "Environmental Difference",
    ],
    recallExample: {
      reference: "RGA-2026-014",
      title: "Timing Deviation Near the Trigger Boundary",
      status: "Related Historical Pattern",
      note:
        "Recalled for review because the runtime surfaces overlap, with environmental differences explicitly identified.",
    },
  },
  technicalResources: {
    whitePapers: [
      "Runtime Intelligence Infrastructure for Robotics",
      "Atlas Runtime Sensor Governance",
      "Atlas Runtime Investigation",
      "Evidence Pack and the Five-Window Evidence Model",
      "Historical RGA and Organizational Memory",
      "OEM ↔ Sensor Investigation Collaboration",
    ],
    documentationDescription:
      "Canonical data schemas, CLI documentation, integration guides, artifact definitions, release notes, and technical implementation documents are available at docs.sensordeck.tech.",
  },
  ctas: {
    primary: "Request a Demo",
    exploreProducts: "Explore Products",
    technicalWhitePaper: "Read the Technical White Paper",
    viewArchitecture: "View Architecture",
    readWhitePaper: "Read the White Paper",
    documentation: "Open Documentation",
    overview: "Watch the 2-Minute Overview",
  },
  ui: {
    sectionEyebrows: {
      categoryDefinition: "01 / New Category Definition",
      theProblem: "02 / Core Problem",
      whyRuntimeGovernance: "03 / The Gap",
      productLines: "03 / TWO ATLAS PRODUCT LINES",
      platformCapabilities: "05 / Platform",
      investigationLifecycle: "06 / Investigation Lifecycle",
      roboticsIndustry: "07 / Robotics Industry",
      evidenceOwnership: "08 / Evidence Boundary",
      organizationalMemory: "09 / Organizational Memory",
      technicalResources: "08 / Library",
      finalCta: "05 / Start a Conversation",
    },
    learnMore: "Learn More",
    categoryImageAlt:
      "New category definition - Atlas Runtime Intelligence Infrastructure for Robotics",
    problemImageAlt:
      "Core problem - every incident investigation starts from scratch",
    productLabel: "Product",
    coreModules: "Core Modules",
    productLifecycle: "Product Lifecycle",
    fiveWindowModel: "Five-Window Evidence Model",
    fiveWindowDescription:
      "Evidence is bounded around a runtime deviation instead of being treated as an unlimited archive.",
    runtimeSurfaces: "Runtime Surfaces",
    sensor: "Sensor",
    policy: "Policy",
    egpDescription:
      "Sensor Engagement Pack is a bounded collaboration interface that an OEM provides to a sensor manufacturer. It is not the same as an internal Evidence Pack™.",
    historicalRgaDescription:
      "Historical RGA™ is a recall, reuse, and reference system for human investigation teams.",
    historicalRgaBoundary:
      "It does not learn automatically, confirm root cause, or assign responsibility. Retrieved candidates include the reason for retrieval and any remaining environmental differences.",
    recallCandidate: "Historical RGA™ / Recall Candidate",
    retrievalReason: "Retrieval Reason",
    retrievalReasonValue: "Runtime surfaces overlap.",
    reviewBoundary: "Review Boundary",
    reviewBoundaryValue: "Environmental differences remain explicit.",
    documentation: "Canonical Documentation",
    finalCtaDescription:
      "Whether you are planning a new robotics platform, improving an existing product, or building a runtime investigation system, we would like to understand your scenario and explore whether Atlas is right for your team.",
    illustrativeDemoData:
      "Demo content illustrates Atlas workflows only and contains no customer runtime data.",
    contactUs: "Contact Us",
  },
} satisfies HomeContent;

export default homeContent;
