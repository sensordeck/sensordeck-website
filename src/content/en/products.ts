import type { ProductContent } from "@/lib/content-types";

const productsContent = {
  eyebrow: "Atlas Products",

  heroTitle: `Two product lines,
one shared runtime governance infrastructure`,

  heroSubtitle:
    "Atlas connects robot OEMs and sensor manufacturers through a shared runtime governance infrastructure, enabling structured evidence, coordinated investigations, and reusable organizational knowledge.",

  heroStatement:
    "Building the runtime governance infrastructure for the robotics industry.",

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
      "Help sensor manufacturers understand product behavior in real robot deployments, investigate customer incidents using Engagement Packs (EGPs), preserve engineering findings, and continuously build reusable sensor investigation knowledge.",
    href: "/products/runtime-sensor-governance",

    valuePoints: [
      "Establish Runtime Profiles across OEMs and sensor SKUs",
      "Investigate OEM incidents using structured Engagement Packs",
      "Recall Historical Sensor RGA instead of repeating prior work",
      "Return investigation findings and updated Engagement Packs",
      "Preserve completed cases in Sensor Assist Vault™",
    ],

    coreModules: [
      "Runtime Profile™",
      "Atlas Agent Observation",
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
      "Runtime Observation",
      "Receive OEM Engagement Pack",
      "Create or Link Sensor REF Ticket",
      "Recall Historical Sensor RGA",
      "Sensor FAE Investigation",
      "Author IR and LL",
      "Return Updated EGP",
      "Preserve Knowledge",
      "Future Reuse",
    ],
  },

  productB: {
    name: "Atlas Runtime Investigation™",
    audience: "Robot OEMs",
    description:
      "Help robot OEMs transform runtime incidents into structured evidence, coordinate cross-functional investigations, recall historical investigation assets, and continuously build organizational knowledge.",
    href: "/products/runtime-investigation",

    valuePoints: [
      "Continuously observe and retain Runtime Datasets with Atlas Agent",
      "Generate investigation candidates and Evidence Packs",
      "Recall Historical RGA and existing IR and LL assets",
      "Create Sensor Engagement Packs and escalate to Sensor FAE",
      "Review investigation results, close REF tickets, and preserve organizational knowledge",
    ],

    coreModules: [
      "Atlas Agent™",
      "Runtime Dataset Retention",
      "Investigation Priority Candidates",
      "Primary Evidence Pack",
      "Historical RGA™",
      "Investigation Workspace™",
      "Sensor Engagement Pack (EGP)",
      "Assist Vault™",
      "Executive Dashboard™",
    ],

    lifecycle: [
      "Runtime Dataset Capture and Retention",
      "Generate Candidates and Evidence Packs",
      "Confirm Primary Evidence Pack",
      "Create OEM REF Ticket",
      "Recall Historical RGA",
      "OEM Tier 1 / Tier 2 / Tier 3 Investigation",
      "Generate EGP and Send to Sensor FAE",
      "Receive Sensor IR, LL, and Updated EGP",
      "Close OEM REF Ticket",
      "Assist Vault Preservation and Future Reuse",
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
      "Robot OEMs gain faster, more structured runtime investigations. Sensor manufacturers gain deeper insight into real-world product behavior and reusable engineering knowledge. Atlas replaces fragmented investigation workflows with structured evidence, shared investigation assets, and continuous organizational learning.",
  },

  ui: {
    viewProduct: "View product details",
    sensorGovernance: "Runtime Sensor Governance",
    runtimeInvestigation: "Runtime Investigation",
  },

  ctaText: "Request a Demo",
} satisfies ProductContent;

export default productsContent;
