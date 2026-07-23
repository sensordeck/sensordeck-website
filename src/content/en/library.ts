/**
 * Library Page Content
 */

import type { LibraryContent } from "@/lib/content-types";

export const libraryContent = {
  ui: {
    breadcrumbLabel: "Breadcrumb",
    libraryLabel: "Library",
    browse: "View",

    resourceCards: [
      {
        id: "01",
        title: "Demos & Examples",
        description:
          "Learn how Atlas works through videos, interactive UI, and sample data. Explore Tier 1 support, the Investigation Workspace, the Sensor FAE workspace, and the CTO governance view.",
        href: "/library/demo",
        items: "Public Demos",
      },
      {
        id: "02",
        title: "Frequently Asked Questions",
        description:
          "Learn how Atlas relates to logging systems, fleet management, ticketing platforms, and existing robotics infrastructure, as well as its approach to data ownership, deployment, and the boundaries of human-led investigation.",
        href: "/library/faq",
        items: "Core Questions",
      },
      {
        id: "03",
        title: "Enterprise Delivery & Downloads",
        description:
          "Learn about the typical runtime components, investigation components, configuration files, project documentation, training materials, and customer deliverables included in an Atlas enterprise deployment.",
        href:
          "https://sensordeck.github.io/atlas-docs-cn/reference/downloads",
        items: "Delivery Guide",
      },
      {
        id: "04",
        title: "Release Notes",
        description:
          "Review major Atlas Runtime Governance™ releases, core capabilities, compatibility, deployment modes, known limitations, and important product changes.",
        href:
          "https://sensordeck.github.io/atlas-docs-cn/reference/release-notes",
        items: "Version History",
      },
    ],

    quickAccessEyebrow: "Complete Documentation",
    quickAccessTitle: "Atlas Chinese Technical Documentation",

    whitePapersLabel: "Frequently Asked Questions",
    documentationLabel: "Delivery & Downloads",
    demoLabel: "Demo",
    demoAndVideoLabel: "Demos & Examples",
    faqLabel: "Release Notes",

    comingSoon: "Coming Soon",
    view: "View",
    note: "Note",

    demoNote:
      "All public demo data is illustrative. Evidence Packs, Historical RGAs, and investigation assets from actual deployments contain customer-specific runtime context and are not shown in public demos.",

    demoContactNote:
      "Contact us if you need access to the complete Atlas Demo UI or would like to arrange a tailored demonstration based on your robotics platform and runtime scenarios.",

    documentationTopics: "Documentation Topics",

    documentationHosting:
      "The complete Atlas Chinese technical documentation is continuously maintained in a separate documentation center.",

    documentationFor: "Documentation For",

    documentationReferenceTitle:
      "A complete reference for engineering, investigation, deployment, and management teams",

    documentationUseCases: [
      "Foundational Theory",
      "Product System",
      "Platform Architecture",
      "OEM Deployment Guide",
      "Sensor Manufacturer Deployment Guide",
      "Pilot to Production",
      "Frequently Asked Questions",
      "Enterprise Delivery & Release Notes",
    ],

    moreInfoEyebrow: "Need More Information?",
    moreResourcesTitle: "Learn More About Atlas",
    moreResourcesDescription:
      "Review the complete Chinese technical documentation, or contact us to discuss your runtime environment, deployment scope, and investigation workflow.",

    readWhitePapers: "View Frequently Asked Questions",
    viewDocumentation: "Open Technical Documentation",
    contactUs: "Contact Us",

    whitePaperAvailability:
      "Atlas technical materials, project documentation, and training materials are provided according to the deployment scope and commercial agreement.",

    backToLibrary: "Back to Library",
    previousWhitePapers: "← Reference Materials",
    previousDocumentation: "← Enterprise Delivery",
    previousDemo: "← Demo",
    nextDocumentation: "Delivery Guide →",
    nextDemo: "Demo →",
    nextFaq: "Frequently Asked Questions →",
  },

  hero: {
    eyebrow: "SensorDeck Library",
    title: "Atlas Reference Materials",
    subtitle:
      "Explore frequently asked questions, enterprise delivery information, public demos, and release notes. Complete technical content is continuously maintained in the Atlas Chinese documentation center.",
  },

  whitePapers: {
    eyebrow: "01 / Technical Materials",
    title: "Atlas Technical Materials",
    description:
      "Learn about Atlas foundational theory, platform architecture, runtime governance approach, and enterprise deployment path.",

    papers: [
      {
        id: "REF-01",
        title: "Atlas Runtime Governance",
        description:
          "Learn how Atlas continuously observes runtime behavior, organizes evidence, preserves history, and turns every investigation into a reusable organizational asset.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-02",
        title: "Atlas Runtime Sensor Governance™",
        description:
          "Runtime governance for sensor manufacturers, including Runtime Profiles, Historical RGA, and OEM investigation collaboration.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-03",
        title: "Atlas Runtime Investigation™",
        description:
          "Runtime evidence, investigation collaboration, historical recall, and the Assist Vault system for robot OEMs.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-04",
        title: "Platform Architecture",
        description:
          "Learn how Atlas Agent, Runtime Surface, Runtime Dataset, Evidence Pack, and investigation assets relate to one another.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-05",
        title: "Deployment Guide",
        description:
          "Learn about OEM deployment, sensor manufacturer deployment, and the phased rollout path from Pilot to Production.",
        size: "Online Documentation",
        format: "HTML",
      },
      {
        id: "REF-06",
        title: "Reference Materials",
        description:
          "Explore demo interfaces, frequently asked questions, enterprise delivery and download information, and Atlas release notes.",
        size: "Online Documentation",
        format: "HTML",
      },
    ],
  },

  documentation: {
    eyebrow: "02 / Documentation",
    title: "Atlas Chinese Technical Documentation",
    description:
      "The complete documentation covers foundational theory, the product system, platform architecture, deployment guides, and reference materials.",

    link: {
      text: "Open Atlas Chinese Documentation",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },

    topics: [
      "Foundational Theory",
      "Runtime Sensor Governance™",
      "Runtime Investigation™",
      "Platform Architecture",
      "OEM Deployment",
      "Sensor Manufacturer Deployment",
      "Pilot to Production",
      "Reference Materials",
    ],

    note:
      "The documentation site is maintained independently. The website provides only key overviews and access points.",
  },

  demo: {
    eyebrow: "01 / Demo",
    title: "Demos & Examples",
    description:
      "Learn how Atlas works through product videos and interactive UI.",

    items: [
      {
        title: "Product Demo Videos",
        description:
          "Watch demo videos for Atlas Runtime Investigation™ and Atlas Runtime Sensor Governance™ to understand Atlas product positioning, runtime investigation workflows, and sensor governance capabilities.",
        type: "Video",
        href: "/demo",
        disabled: false,
      },
      {
        title: "Atlas Demo Interfaces",
        description:
          "Explore Tier 1 intake, the Investigation Dashboard, the Sensor FAE Workspace, and the executive dashboard.",
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
      "Questions about Atlas product positioning, technical compatibility, deployment, data ownership, and the boundaries of runtime investigation.",

    questions: [
      {
        question: "Is Atlas another logging system?",
        answer:
          "No. Atlas is not a log collection or log archival platform. Logs can be one source of runtime evidence, but Atlas is responsible for continuously observing runtime behavior, organizing investigation evidence, forming event context, recalling historical investigation assets, and supporting cross-team collaboration.",
      },
      {
        question: "Does Atlas replace fleet management systems?",
        answer:
          "No. Fleet management systems typically handle device management, OTA updates, remote monitoring, task scheduling, and robot operations. Atlas handles runtime evidence, Evidence Packs™, Historical RGAs™, investigation workflows, and organizational memory. The two are complementary.",
      },
      {
        question:
          "Does Atlas replace ticketing systems such as Jira or ServiceNow?",
        answer:
          "No. Ticketing systems manage incident records, task routing, and organizational collaboration. Atlas works with existing ticketing workflows by providing structured evidence, event timelines, and historical context for investigation after a runtime execution failure is reported.",
      },
      {
        question:
          "Does Atlas automatically determine root cause or responsibility?",
        answer:
          "No. Atlas does not automatically confirm root cause, product defects, customer error, or assignment of responsibility. Atlas organizes runtime evidence, investigation context, and historical candidates; final technical conclusions remain subject to confirmation by authorized engineering teams.",
      },
      {
        question: "Does Atlas support AI-assisted investigation?",
        answer:
          "Yes. Atlas can provide structured, clearly bounded, and reviewable runtime evidence for AI-assisted analysis. Atlas does not require AI, however; investigation workflows can remain deterministic, and every critical conclusion still requires human confirmation.",
      },
      {
        question: "Which robotics platforms does Atlas support?",
        answer:
          "Atlas is not tied to a specific robot brand or control architecture. It can be deployed across different robotics platforms, SBCs, Linux environments, ROS systems, and custom robotics software. The exact deployment scope is determined by the customer runtime surfaces and investigation objectives.",
      },
      {
        question: "Which sensors does Atlas support?",
        answer:
          "Atlas is not tied to a specific sensor type. Typical targets include cameras, LiDAR, IMU, GNSS, radar, and encoders. Other sensors can also be brought into governance through runtime surface mapping and adapters.",
      },
      {
        question: "Must Atlas run in a ROS environment?",
        answer:
          "No. ROS and ROS2 are optional runtime data sources. In robotics systems without ROS, Atlas can establish runtime observation through device interfaces, Linux Runtime, driver state, logs, and custom adapters.",
      },
      {
        question:
          "Does Atlas require a continuous connection to a public cloud?",
        answer:
          "No. Atlas supports customer-local servers, headquarters servers, private cloud, offline environments, manual export, and hybrid deployment. Cloud connectivity is determined by the customer deployment, security, and operational requirements.",
      },
      {
        question:
          "Does Atlas require replacing existing robotics infrastructure?",
        answer:
          "No. Atlas is designed to coexist with existing fleet management, cloud platforms, ticketing systems, object storage, monitoring platforms, and robotics software. Deployment focuses on connecting existing runtime data sources rather than large-scale replacement.",
      },
      {
        question: "Can Atlas cover multiple robot models?",
        answer:
          "Yes. Atlas can start with a clearly defined robot model or runtime scenario and gradually expand across multiple Robot SKUs, SBC platforms, sensor configurations, and deployment environments without redesigning the entire investigation system.",
      },
      {
        question: "Can Atlas collaborate with multiple sensor vendors?",
        answer:
          "Yes. OEMs can use Sensor Engagement Packs™ to conduct clearly bounded investigation collaboration with different sensor manufacturers. Each sensor vendor can maintain its own Runtime Profiles, historical investigation assets, and FAE investigation workflows.",
      },
      {
        question: "What is a Sensor Runtime Profile?",
        answer:
          "A Sensor Runtime Profile describes how a sensor behaves on known robotics platforms, in deployment environments, and under runtime disturbances. It is not a certification, product passport, or compliance document; it is a runtime knowledge asset for future investigations.",
      },
      {
        question: "What is an Evidence Pack™?",
        answer:
          "An Evidence Pack™ is a standardized evidence window generated around a specific runtime event. It contains bounded relevant data, a timeline, and runtime environment context from before and after the event. It is neither an unlimited log archive nor a simple raw data dump.",
      },
      {
        question: "What is a Historical RGA™?",
        answer:
          "A Historical Runtime Governance Asset™ preserves reusable runtime patterns, investigation paths, investigation outcomes, lessons learned, and runtime surface references from completed investigations. It helps future investigations start from organizational memory, but historical similarity does not mean the root cause is the same.",
      },
      {
        question: "Does Atlas permanently retain all runtime data?",
        answer:
          "No. Atlas operates under customer-approved retention policies. Typical methods include rolling buffers, specified retention periods, event-triggered data locking, and generating and exporting investigation evidence for a defined time range.",
      },
      {
        question: "Who owns runtime data and investigation assets?",
        answer:
          "Customers own their runtime data and internal investigation assets. OEMs retain their Runtime Datasets™, Evidence Packs™, and historical investigation assets; sensor manufacturers retain their own Sensor Runtime Profiles and historical investigation assets. SensorDeck does not claim ownership of customer runtime data.",
      },
      {
        question:
          "Does Atlas automatically share customer data between companies?",
        answer:
          "No. Any cross-organizational evidence collaboration must be customer-authorized and limited to clearly defined investigation boundaries. Reuse of industry knowledge applies only to approved, non-identifying knowledge and does not mean sharing customer raw data or internal Evidence Packs™.",
      },
      {
        question: "Is Atlas a standard SaaS product?",
        answer:
          "Not necessarily. Atlas can be deployed on customer premises, on customer-controlled infrastructure, in a private cloud, or in a hybrid environment. The deployment model is determined by data security, network conditions, organizational processes, and project scope.",
      },
      {
        question: "Is Atlas open source?",
        answer:
          "No. Atlas is commercial runtime governance infrastructure developed by SensorDeck and is typically delivered through professional integration, deployment configuration, training, and acceptance projects.",
      },
      {
        question: "Is Atlas only suitable for one robotics project?",
        answer:
          "No. Atlas is intended to form reusable runtime governance infrastructure. After the initial Pilot, it can gradually expand to additional robot models, sensor products, operating environments, and investigation teams.",
      },
      {
        question:
          "How does Atlas typically progress from Pilot to production deployment?",
        answer:
          "A typical path is scenario confirmation, runtime boundary review, Agent and data-source integration, canary validation, Pilot, controlled deployment, Production Readiness, and finally expansion into the production environment.",
      },
    ],
  },

  cta: {
    eyebrow: "Next Step",
    title: "Learn More About Atlas",
    description:
      "Review the complete Atlas Chinese technical documentation, or contact us to discuss your robotics platform, runtime boundaries, and deployment plan.",

    primaryButton: {
      text: "Contact Us",
      href: "/contact",
    },

    secondaryButton: {
      text: "Atlas Chinese Documentation",
      href: "https://sensordeck.github.io/atlas-docs-cn/",
    },
  },
} satisfies LibraryContent;
