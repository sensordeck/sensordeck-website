/**
 * Library Page Content
 */

import type { LibraryContent } from "@/lib/content-types";

export const libraryContent = {
  ui: {
    breadcrumbLabel: "Breadcrumb",
    libraryLabel: "Library",
    browse: "Browse",
    resourceCards: [
      {
        id: "01",
        title: "Technical Whitepapers",
        description:
          "Explore runtime intelligence infrastructure, evidence governance, and the investigation lifecycle through six technical whitepapers.",
        href: "/library/white-papers",
        items: "6 whitepapers",
      },
      {
        id: "02",
        title: "Technical Documentation",
        description:
          "Complete developer documentation covering architecture, CLI, integrations, schemas, and terminology.",
        href: "/library/documentation",
        items: "Complete documentation",
      },
      {
        id: "03",
        title: "Demos & Walkthroughs",
        description:
          "See how Atlas works through videos, interactive UI, sample data, a two-minute overview, and a complete investigation walkthrough.",
        href: "/library/demo",
        items: "4 demo resources",
      },
      {
        id: "04",
        title: "Frequently Asked Questions",
        description:
          "Answers about the Atlas platform, evidence ownership, and operating principles.",
        href: "/library/faq",
        items: "10 questions",
      },
    ],
    quickAccessEyebrow: "Quick Access",
    quickAccessTitle: "Quick Access",
    whitePapersLabel: "White Papers",
    documentationLabel: "Documentation",
    demoLabel: "Demo",
    demoAndVideoLabel: "Demos & Videos",
    faqLabel: "FAQ",
    comingSoon: "Coming Soon",
    view: "View",
    note: "Note",
    demoNote:
      "All demo data is illustrative. Production Evidence Packs and investigation assets contain customer-specific runtime context that is not exposed in public demos.",
    demoContactNote:
      "Contact us to arrange access to the complete Atlas Demo UI or a tailored demonstration.",
    documentationTopics: "Documentation Topics",
    documentationHosting:
      "Complete developer and integration documentation is hosted on the independent documentation site.",
    documentationFor: "Documentation For",
    documentationReferenceTitle: "A complete reference for engineering teams",
    documentationUseCases: [
      "Developer Integration Guides",
      "CLI Command Reference",
      "Evidence Pack Schemas",
      "API Documentation",
      "Deployment Configuration",
      "Troubleshooting",
      "Release Notes",
      "Best Practices",
    ],
    moreInfoEyebrow: "Need More Information?",
    moreResourcesTitle: "More Resources",
    moreResourcesDescription:
      "If your question is not listed, review our technical whitepapers and documentation or contact the team directly.",
    readWhitePapers: "Read White Papers",
    viewDocumentation: "View Documentation",
    contactUs: "Contact Us",
    whitePaperAvailability:
      "Whitepapers will be available as PDF downloads or selected pages hosted on docs.sensordeck.tech.",
    backToLibrary: "Back to Library",
    previousWhitePapers: "← White Papers",
    previousDocumentation: "← Documentation",
    previousDemo: "← Demo",
    nextDocumentation: "Documentation →",
    nextDemo: "Demo →",
    nextFaq: "FAQ →",
  },
  hero: {
    eyebrow: "SensorDeck Library",
    title: "Technical Reading & Resources",
    subtitle:
      "Technical whitepapers, documentation, demos, and FAQs for engineering and operations teams.",
  },

  whitePapers: {
    eyebrow: "01 / White Papers",
    title: "Technical Whitepapers",
    description:
      "Deep dive into runtime intelligence infrastructure, evidence governance, and investigation lifecycle.",
    papers: [
      {
        id: "WP-01",
        title: "Runtime Intelligence Infrastructure for Robotics",
        description:
          "Defines the runtime intelligence infrastructure category, runtime boundaries, and why robot organizations need a governed evidence layer.",
        size: "12 pages",
        format: "PDF",
      },
      {
        id: "WP-02",
        title: "Atlas Runtime Sensor Governance",
        description:
          "Runtime governance product line for sensor manufacturers: Runtime Profiles, runtime observation, Historical Sensor RGA, and OEM collaboration.",
        size: "16 pages",
        format: "PDF",
      },
      {
        id: "WP-03",
        title: "Atlas Runtime Investigation",
        description:
          "Investigation platform for robot OEMs: runtime datasets, Evidence Pack, Historical RGA, Investigation Workspace, and Assist Vault.",
        size: "18 pages",
        format: "PDF",
      },
      {
        id: "WP-04",
        title: "Evidence Pack and Five-Window Evidence Model",
        description:
          "Design rationale for bounded evidence windows: pre-guard, baseline, deviation, recovery observation, post-guard, and why evidence must be bounded.",
        size: "10 pages",
        format: "PDF",
      },
      {
        id: "WP-05",
        title: "Historical RGA and Organizational Memory",
        description:
          "Historical recall, reuse, and reference: how Historical RGA retrieves candidates without claiming identical root cause or responsibility.",
        size: "14 pages",
        format: "PDF",
      },
      {
        id: "WP-06",
        title: "OEM ↔ Sensor Investigation Collaboration",
        description:
          "Collaboration model for Sensor Engagement Pack (EGP): de-identified evidence exchange and bounded investigation context.",
        size: "11 pages",
        format: "PDF",
      },
    ],
  },

  documentation: {
    eyebrow: "02 / Documentation",
    title: "Technical Documentation",
    description:
      "Complete documentation site for developers, including architecture, CLI, integrations, schemas, and terminology.",
    link: {
      text: "Open docs.sensordeck.tech",
      href: "https://docs.sensordeck.tech",
    },
    topics: [
      "Developer Documentation",
      "Schema Definitions",
      "CLI Reference",
      "Integration Guides",
      "Artifact Definitions",
      "Canonical Terminology",
      "Release Notes",
      "Technical Implementation Guides",
    ],
    note: "Documentation site is independently maintained and not duplicated within the marketing website.",
  },

  demo: {
    eyebrow: "03 / Demo",
    title: "Demos & Examples",
    description: "Understand how Atlas works through videos, interactive UI, and sample data.",
    items: [
      {
        title: "2-Minute Overview Video",
        description: "Quickly understand how Atlas transforms runtime events into bounded evidence and reusable knowledge.",
        type: "Video",
        href: "/demo/overview",
        disabled: false,
      },
      {
        title: "Atlas Demo Interface",
        description:
          "Interactive demo: L1 support, Investigation Workspace, sensor FAE, and CTO views.",
        type: "Interactive",
        href: "/demo",
        disabled: false,
      },
      {
        title: "Runtime Investigation Walkthrough",
        description:
          "Complete investigation lifecycle walkthrough: from REF to Evidence Pack, Historical RGA to IR + LL.",
        type: "Walkthrough",
        href: "/demo/investigation",
        disabled: false,
      },
      {
        title: "Sample Evidence Pack",
        description:
          "Downloadable sample Evidence Pack (approved-for-release de-identified sample data).",
        type: "Download",
        href: "#",
        disabled: true,
      },
    ],
  },

  faq: {
    eyebrow: "04 / FAQ",
    title: "Frequently Asked Questions",
    description: "Common questions about the Atlas platform, evidence ownership, and operating principles.",
    questions: [
      {
        question: "Is Atlas a log platform?",
        answer:
          "No. Atlas is runtime intelligence infrastructure. It structures bounded evidence, retrieves historical candidates, and coordinates investigation workflows, but does not replace log archives or time-series databases.",
      },
      {
        question: "Does SensorDeck own customer data?",
        answer:
          "No. Runtime datasets remain governed by customer environments, retention policies, and access models. Evidence Packs and EGP are bounded, de-identified collaboration surfaces, not unlimited archives.",
      },
      {
        question: "Does Atlas determine root cause?",
        answer:
          "No. Atlas structures evidence and retrieves historical candidates. Human teams are responsible for authoring investigation results and lessons learned.",
      },
      {
        question: "Does Atlas assign responsibility?",
        answer:
          "No. Atlas does not automatically confirm root cause or assign responsibility. It provides governed evidence and historical references for human team review and decision-making.",
      },
      {
        question: "Must data leave customer environments?",
        answer:
          "Not necessarily. Atlas Agent can run within customer environments. Evidence Packs and EGP are explicit, de-identified collaboration contexts exported only when needed.",
      },
      {
        question: "What is an Evidence Pack?",
        answer:
          "Evidence Pack is a bounded, standardized evidence window built around runtime deviations (five-window model: pre-guard, baseline, deviation, recovery observation, post-guard), not unlimited archives.",
      },
      {
        question: "What is Historical RGA?",
        answer:
          "Historical RGA™ is a recall, reuse, and reference mechanism. It retrieves prior investigation results and lessons learned as candidates for review, but does not claim identical causality or automatic learning.",
      },
      {
        question: "What is EGP?",
        answer:
          "Sensor Engagement Pack (EGP) is a bounded collaboration surface between OEMs and sensor manufacturers. It is de-identified evidence and investigation context, not a complete internal Evidence Pack.",
      },
      {
        question: "Does Atlas replace OEM engineering tools?",
        answer:
          "No. Atlas operates at the boundary where sensor behavior becomes system-level runtime conditions. It complements (rather than replaces) existing log platforms, dashboards, ROS tools, and investigation workflows.",
      },
      {
        question: "Can Atlas run with existing robot sensors?",
        answer:
          "Yes. Atlas observes runtime boundaries (power, bus, timing, Linux/SBC runtime, ROS inputs) without requiring sensor replacement or modification of existing hardware.",
      },
    ],
  },

  cta: {
    eyebrow: "Request Materials",
    title: "Need More Technical Information?",
    description:
      "Contact us for complete whitepapers, demo access, or to discuss your runtime governance needs.",
    primaryButton: {
      text: "Contact Us",
      href: "mailto:contact@sensordeck.tech",
    },
    secondaryButton: {
      text: "Request Demo",
      href: "/#contact-form",
    },
  },
} satisfies LibraryContent;
