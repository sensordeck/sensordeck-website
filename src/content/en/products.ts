import type { ProductContent } from "@/lib/content-types";

const productsContent = {
  eyebrow: "Atlas Products",

  heroTitle: `Two product lines,
one shared runtime governance infrastructure`,

  heroSubtitle:
    "Atlas governs the runtime boundary between sensor output and robot system decision-making—an area that has long lacked unified operational governance. \n\nAtlas connects robot manufacturers and sensor manufacturers through a shared investigation framework, enabling runtime evidence to support collaborative investigations, turning every field incident into traceable and reusable organizational memory, and allowing validated, de-identified knowledge to continuously build shared industry experience.",

  heroStatement:
    "From incidents, to organizational memory, to industry knowledge—so the robotics industry does not have to solve the same problems again and again.",

  architecture: {
    eyebrow: "Atlas Product Architecture",
    title: "A dual flywheel for robot OEMs and sensor manufacturers",
    description:
      "Atlas Runtime Investigation™ serves robot OEMs. Atlas Runtime Sensor Governance™ serves sensor manufacturers. Engagement Pack™ (EGP) connects both organizations through structured runtime evidence and clearly defined investigation boundaries.",
    imageSrc: "/images/product1e.png",
    imageAlt:
      "Atlas Runtime Investigation and Runtime Sensor Governance dual-flywheel product architecture",
  },

  productA: {
    name: "Atlas Runtime Sensor Governance™",
    audience: "Sensor Manufacturers",
    description:
      "Help sensor manufacturers continuously understand runtime behavior in real deployments, support OEM collaboration and FAE investigation with shared evidence, and turn field experience into reusable Runtime Profiles, Evidence Packs, and Historical RGA assets.",
    href: "/products/runtime-sensor-governance",

    valuePoints: [
      "Establish Runtime Profiles across OEMs, deployment scenarios, and sensor SKUs",
      "Retain investigation evidence with bounded storage",
      "Investigate with unified timeline-based Evidence Packs",
      "Collaborate with OEMs through structured Engagement Packs",
      "Recall Historical Sensor RGA instead of repeating prior work",
      "Preserve completed cases in Sensor Assist Vault™",
    ],

    coreModules: [
      "Runtime Profile™",
      "Atlas Agent Observation",
      "Bounded Runtime Dataset",
      "Event Evidence Lock",
      "Sensor and OEM Collaboration Investigation Pack (EGP)",
      "Sensor REF Ticket",
      "Evidence Pack™",
      "Historical Sensor RGA Recall™",
      "Investigation Result (IR)",
      "Lesson Learned (LL)",
      "Sensor Assist Vault™",
      "De-identified Runtime Knowledge Base™",
    ],

    lifecycle: [
      "Governed Runtime Configuration",
      "Continuous Observation with Bounded Retention",
      "Lock Required Evidence Windows on Event",
      "Receive OEM Engagement Pack",
      "Create or Link Sensor REF Ticket",
      "Recall Historical Sensor RGA",
      "Sensor FAE Investigation",
      "Author IR and LL",
      "Return Updated EGP",
      "Preserve Knowledge for Future Reuse",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "Robot OEMs",
    description:
      "Help robot OEMs turn runtime incidents into structured Evidence Packs, create REF tickets, recall Historical RGA, and coordinate Tier 1 / Tier 2 / Tier 3 engineering with Sensor FAE. Atlas does not replace existing tools; it turns fragmented field troubleshooting into a traceable, reusable investigation workflow.",
    href: "/products/runtime-investigation",

    valuePoints: [
      "Continuously observe runtime behavior while retaining investigation evidence within bounded storage",
      "Generate investigation candidates and Evidence Packs",
      "Create and manage OEM REF tickets",
      "Recall Historical RGA and existing IR / LL assets",
      "Create Sensor Engagement Packs and collaborate with Sensor FAE",
      "Close REF tickets and preserve investigation knowledge in Assist Vault™",
    ],

    coreModules: [
      "Atlas Agent™",
      "Runtime Metadata",
      "Bounded Runtime Dataset",
      "Raw Rolling Buffer",
      "Event Lifecycle & Evidence Lock",
      "Investigation Priority Candidates",
      "Primary Evidence Pack",
      "Historical RGA™",
      "Investigation Workspace™",
      "Sensor Engagement Pack (EGP)",
      "Assist Vault™",
      "Executive Dashboard™",
    ],

    lifecycle: [
      "Continuous Runtime Observation",
      "Real-time Metadata Extraction and Persistent Retention",
      "Bounded Raw Data Rolling Buffer",
      "Event Trigger and Required Evidence Lock",
      "Generate Interim / Final Evidence Pack",
      "Create OEM REF Ticket",
      "Recall Historical RGA",
      "OEM Tier 1 / Tier 2 / Tier 3 Investigation",
      "Generate EGP and Send to Sensor FAE",
      "Close OEM REF Ticket and Preserve Assist Vault Assets",
    ],
  },

  collaborationBridge: {
    eyebrow: "Shared Collaboration Bridge",
    title: "Engagement Pack™ Connects OEMs and Sensor Manufacturers",
    description:
      "Engagement Pack™ (EGP) is the standardized package for cross-organization investigations. It complements an OEM's internal Evidence Pack while providing a consistent investigation workflow between OEM and sensor teams.",

    steps: [
      "OEM Runtime REF Occurs",
      "Create OEM REF Ticket (Pending)",
      "Generate Evidence Pack",
      "Generate Engagement Pack (EGP)",
      "Send to Sensor FAE",
      "Historical Sensor RGA Recall",
      "Sensor FAE Investigates and Authors IR / LL",
      "Return Updated EGP and Sensor Response",
      "OEM Reviews Investigation Results",
      "Close OEM REF Ticket",
      "Both Parties Preserve Historical RGA for Future Reuse",
    ],

    closingStatement:
      "One shared body of runtime evidence. Two engineering organizations. One governed investigation workflow that continuously builds organizational knowledge.",
  },

  finalValue: {
    title: "Build Organizational Capability Through Every Investigation",
    description:
      "Robot OEMs gain faster, more structured runtime investigations. Sensor manufacturers gain deeper insight into real-world product behavior and reusable engineering knowledge. Bounded retention keeps continuous runtime observation operationally sustainable instead of turning Atlas into an ever-growing raw-data archive.",
  },

  ui: {
    viewProduct: "View product details",
    sensorGovernance: "Runtime Sensor Governance",
    runtimeInvestigation: "Runtime Investigation",
  },

  ctaText: "Request a Demo",
} satisfies ProductContent;

export default productsContent;
