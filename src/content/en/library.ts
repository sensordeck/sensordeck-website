import type { LibraryContent } from "@/lib/content-types";

export const libraryContent = {
  ui: {
    breadcrumbLabel: "Breadcrumb",
    libraryLabel: "Library",
    browse: "View",

    resourceCards: [
      {
        id: "01",
        title: "Product Demonstrations",
        description:
          "See Atlas in action through product videos, interactive investigation workflows, and representative runtime scenarios for robot OEM and sensor-manufacturer teams.",
        href: "/library/demo",
        items: "Demos",
      },
      {
        id: "02",
        title: "Technical Overview",
        description:
          "Understand the Atlas product architecture, runtime governance model, Evidence Packs™, Historical RGAs™, and the investigation workflows that connect OEM and sensor teams.",
        href: "/library/faq",
        items: "Technical Reference",
      },
      {
        id: "03",
        title: "Enterprise Deployment Resources",
        description:
          "Review deployment components, integration requirements, configuration assets, project documentation, training materials, and typical enterprise deliverables.",
        href:
          "https://sensordeck.github.io/atlas-docs-cn/reference/downloads",
        items: "Deployment",
      },
      {
        id: "04",
        title: "Release Notes",
        description:
          "Review major Atlas releases, core capabilities, compatibility information, deployment modes, known limitations, and important product changes.",
        href:
          "https://sensordeck.github.io/atlas-docs-cn/reference/release-notes",
        items: "Product Updates",
      },
    ],

    quickAccessEyebrow: "Complete Technical Documentation",
    quickAccessTitle: "Atlas Documentation Center",

    whitePapersLabel: "Frequently Asked Questions",
    documentationLabel: "Deployment Resources",
    demoLabel: "Demo",
    demoAndVideoLabel: "Product Demonstrations",
    faqLabel: "Release Notes",

    comingSoon: "Coming Soon",
    view: "View",
    note: "Note",

    demoNote:
      "All public demo data is illustrative. Evidence Packs™, Historical RGAs™, and investigation assets from customer deployments contain deployment-specific context and are not included in public demonstrations.",

    demoContactNote:
      "Contact SensorDeck to arrange a tailored demonstration based on your robot platform, sensor configuration, deployment environment, and investigation workflow.",

    documentationTopics: "Documentation Coverage",

    documentationHosting:
      "The complete Atlas technical documentation is maintained in a dedicated documentation center. The current documentation is available in Chinese, with English documentation under development.",

    documentationFor: "Designed For",

    documentationReferenceTitle:
      "Technical reference for engineering, investigation, deployment, and management teams",

    documentationUseCases: [
      "Foundational Concepts",
      "Product Architecture",
      "Runtime Investigation™",
      "Runtime Sensor Governance™",
      "OEM Deployment",
      "Sensor-Manufacturer Deployment",
      "Pilot to Production",
      "Enterprise Delivery and Release Notes",
    ],

    moreInfoEyebrow: "Need More Information?",
    moreResourcesTitle: "Discuss Your Runtime Environment",
    moreResourcesDescription:
      "Review the complete technical documentation or speak with SensorDeck about your robot platform, deployment scope, runtime boundaries, and investigation workflow.",

    readWhitePapers: "View Frequently Asked Questions",
    viewDocumentation: "Open Technical Documentation",
    contactUs: "Contact Us",

    whitePaperAvailability:
      "Atlas technical materials, project documentation, training content, and deployment assets are provided according to the agreed project scope and commercial terms.",

    backToLibrary: "Back to Resource Center",
    previousWhitePapers: "← Technical Reference",
    previousDocumentation: "← Deployment Resources",
    previousDemo: "← Product Demonstrations",
    nextDocumentation: "Deployment Resources →",
    nextDemo: "Product Demonstrations →",
    nextFaq: "Frequently Asked Questions →",
  },

  hero: {
    eyebrow: "SensorDeck Resource Center",
    title: "Atlas Technical Resources",
    subtitle:
      "Explore product demonstrations, technical documentation, deployment guidance, engineering references, and product updates for Atlas Runtime Governance™.",
  },

  whitePapers: {
    eyebrow: "01 / Technical Overview",
    title: "Understand the Atlas System",
    description:
      "Explore the principles, architecture, products, and deployment model behind Atlas Runtime Governance™.",

    papers: [
      {
        id: "REF-01",
        title: "Atlas Runtime Governance™",
        description:
          "Learn how Atlas observes runtime behavior, preserves evidence, supports structured investigations, and converts completed investigations into reusable organizational knowledge.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-02",
        title: "Atlas Runtime Sensor Governance™",
        description:
          "Explore runtime governance for sensor manufacturers, including Runtime Profiles™, Sensor FAE investigations, Historical Sensor RGAs™, and OEM collaboration.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-03",
        title: "Atlas Runtime Investigation™",
        description:
          "Explore runtime evidence, investigation workflows, Historical RGA™ recall, Sensor Engagement Packs™, and Assist Vault™ for robot OEMs.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-04",
        title: "Platform Architecture",
        description:
          "Understand how Atlas Agent™, Runtime Surface, Runtime Dataset™, Evidence Pack™, investigation workspaces, and historical assets work together.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-05",
        title: "Deployment Framework",
        description:
          "Review deployment approaches for robot OEMs and sensor manufacturers, including the phased path from initial validation to production expansion.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-06",
        title: "Reference Resources",
        description:
          "Access demonstrations, frequently asked questions, enterprise deployment information, and Atlas release notes.",
        size: "Online Documentation",
        format: "HTML",
      },
    ],
  },

  documentation: {
    eyebrow: "02 / Documentation",
    title: "Atlas Documentation Center",
    description:
      "The documentation center covers foundational concepts, product architecture, deployment guidance, operational workflows, and technical reference materials.",

    link: {
      text: "Open Atlas Documentation Center",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },

    topics: [
      "Foundational Concepts",
      "Runtime Sensor Governance™",
      "Runtime Investigation™",
      "Platform Architecture",
      "OEM Deployment",
      "Sensor-Manufacturer Deployment",
      "Pilot to Production",
      "Reference Resources",
    ],

    note:
      "The documentation center is maintained separately from the corporate website. The current documentation is available in Chinese, with English documentation under development.",
  },

  demo: {
    eyebrow: "01 / Product Demonstrations",
    title: "See Atlas in Action",
    description:
      "Explore Atlas through product videos and interactive interface demonstrations.",

    items: [
      {
        title: "Product Demonstration Videos",
        description:
          "Watch demonstrations of Atlas Runtime Investigation™ and Atlas Runtime Sensor Governance™ to understand the product architecture, investigation workflow, and cross-organization collaboration model.",
        type: "Video",
        href: "/demo",
        disabled: false,
      },
      {
        title: "Interactive Atlas Interfaces",
        description:
          "Explore representative interfaces for Tier 1 intake, investigation management, Sensor FAE collaboration, and executive governance reporting.",
        type: "Interactive",
        href: "/demo#demo-scenario",
        disabled: false,
      },
    ],
  },

  faq: {
    eyebrow: "01 / Frequently Asked Questions",
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Atlas positioning, technical compatibility, deployment, data ownership, and investigation boundaries.",

    questions: [
      {
        question: "Is Atlas another logging system?",
        answer:
          "No. Atlas is not a log collection or archival platform. Logs may be one source of runtime evidence, but Atlas is designed to continuously observe runtime behavior, organize bounded evidence, preserve event context, recall historical investigation assets, and support structured investigations.",
      },
      {
        question: "Does Atlas replace fleet management systems?",
        answer:
          "No. Fleet management systems typically support device administration, OTA updates, remote monitoring, scheduling, and robot operations. Atlas supports runtime evidence, Evidence Packs™, Historical RGAs™, investigation workflows, and reusable organizational knowledge. The systems are complementary.",
      },
      {
        question:
          "Does Atlas replace ticketing systems such as Jira or ServiceNow?",
        answer:
          "No. Ticketing systems manage incident records, task ownership, routing, and organizational workflows. Atlas can work alongside those systems by providing structured runtime evidence, timelines, investigation context, and historical references.",
      },
      {
        question:
          "Does Atlas automatically determine root cause or responsibility?",
        answer:
          "No. Atlas does not automatically confirm root cause, assign responsibility, or determine whether an incident resulted from a product defect, integration issue, environmental condition, or operational error. Atlas structures the evidence and investigation context; authorized engineering teams confirm final conclusions.",
      },
      {
        question: "Does Atlas support AI-assisted investigation?",
        answer:
          "Yes. Atlas can provide structured, bounded, and reviewable runtime evidence for AI-assisted analysis. AI is not required, and critical engineering conclusions remain subject to human review and authorization.",
      },
      {
        question: "Which robotics platforms does Atlas support?",
        answer:
          "Atlas is not tied to a specific robot brand, control architecture, or software stack. It can be deployed across different robot platforms, SBCs, Linux environments, ROS and ROS 2 systems, and custom robotics software. The deployment scope is determined by the customer's runtime surfaces and investigation objectives.",
      },
      {
        question: "Which sensors does Atlas support?",
        answer:
          "Atlas is sensor-agnostic. Typical targets include cameras, LiDAR, IMU, GNSS, radar, encoders, and other devices connected through Ethernet, USB, CAN, CSI, serial interfaces, or custom data paths.",
      },
      {
        question: "Must Atlas run in a ROS environment?",
        answer:
          "No. ROS and ROS 2 are optional runtime data sources. In systems without ROS, Atlas can observe device interfaces, Linux runtime state, driver behavior, system logs, application inputs, and customer-defined adapters.",
      },
      {
        question:
          "Does Atlas require a continuous connection to a public cloud?",
        answer:
          "No. Atlas can support customer-local servers, headquarters infrastructure, private cloud, offline environments, controlled export, and hybrid deployment. Connectivity is determined by customer security, operational, and deployment requirements.",
      },
      {
        question:
          "Does Atlas require replacing existing robotics infrastructure?",
        answer:
          "No. Atlas is designed to coexist with existing fleet platforms, cloud systems, ticketing tools, object storage, monitoring platforms, and robotics software. Deployment focuses on connecting relevant runtime data sources rather than replacing the customer's existing architecture.",
      },
      {
        question: "Can Atlas support multiple robot models?",
        answer:
          "Yes. Atlas can begin with one defined robot model, sensor configuration, or runtime scenario and expand across additional robot SKUs, SBC platforms, sensor combinations, and deployment environments.",
      },
      {
        question: "Can Atlas work with multiple sensor vendors?",
        answer:
          "Yes. Robot OEMs can use Sensor Engagement Packs™ to conduct bounded investigations with different sensor manufacturers. Each sensor manufacturer can maintain its own Runtime Profiles™, investigation records, Historical Sensor RGAs™, and Sensor FAE workflows.",
      },
      {
        question: "What is a Sensor Runtime Profile™?",
        answer:
          "A Sensor Runtime Profile™ describes known sensor behavior across robot platforms, deployment environments, system configurations, and runtime disturbances. It is an investigation and engineering knowledge asset, not a certification, compliance document, or product passport.",
      },
      {
        question: "What is an Evidence Pack™?",
        answer:
          "An Evidence Pack™ is a bounded and structured evidence window created around a specific runtime event. It may include relevant data, timelines, system state, and environmental context from before, during, and after the event. It is not an unlimited log archive or unstructured raw-data export.",
      },
      {
        question: "What is a Historical RGA™?",
        answer:
          "A Historical Runtime Governance Asset™ preserves reusable patterns, investigation paths, engineering findings, lessons learned, and runtime references from completed investigations. It helps future teams begin with relevant organizational knowledge, while recognizing that historical similarity does not establish identical root cause.",
      },
      {
        question: "Does Atlas permanently retain all runtime data?",
        answer:
          "No. Atlas operates according to customer-approved retention policies. Typical approaches include rolling buffers, defined retention periods, event-triggered preservation, and export of bounded investigation evidence.",
      },
      {
        question: "Who owns runtime data and investigation assets?",
        answer:
          "Customers retain ownership and control of their runtime data and internal investigation assets. Robot OEMs retain their Runtime Datasets™, Evidence Packs™, and investigation records. Sensor manufacturers retain their Runtime Profiles™, Sensor FAE findings, and historical investigation assets. SensorDeck does not claim ownership of customer runtime data.",
      },
      {
        question:
          "Does Atlas automatically share customer data between organizations?",
        answer:
          "No. Cross-organization evidence exchange must be authorized by the customer and limited to a clearly defined investigation boundary. Reusable industry knowledge is restricted to approved, de-identified content and does not include customer raw data or internal Evidence Packs™.",
      },
      {
        question: "Is Atlas a standard SaaS product?",
        answer:
          "Not necessarily. Atlas can be deployed on premises, on customer-controlled infrastructure, in a private cloud, or in a hybrid environment. The deployment model depends on security requirements, network conditions, operational processes, and project scope.",
      },
      {
        question: "Is Atlas open source?",
        answer:
          "No. Atlas is commercial runtime governance infrastructure developed by SensorDeck and is typically delivered through professional integration, deployment configuration, training, and acceptance activities.",
      },
      {
        question: "Is Atlas limited to a single robotics project?",
        answer:
          "No. Atlas is designed as reusable runtime governance infrastructure. After an initial pilot, it can expand across additional robot models, sensor products, deployment environments, and investigation teams.",
      },
      {
        question:
          "How does Atlas typically progress from pilot to production?",
        answer:
          "A typical deployment path includes scenario confirmation, runtime-boundary review, Atlas Agent and data-source integration, canary validation, pilot deployment, controlled expansion, production-readiness review, and broader production rollout.",
      },
    ],
  },

  cta: {
    eyebrow: "Technical Discussion",
    title: "Discuss Your Runtime Environment",
    description:
      "Tell us about your robot platform, sensor configuration, deployment environment, and current investigation process. We will discuss how Atlas can fit within your existing runtime architecture.",

    primaryButton: {
      text: "Contact SensorDeck",
      href: "/contact",
    },

    secondaryButton: {
      text: "Open Technical Documentation",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },
  },
} satisfies LibraryContent;
