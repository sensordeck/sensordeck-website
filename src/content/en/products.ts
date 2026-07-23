import type { ProductContent } from "@/lib/content-types";

const productsContent = {
  eyebrow: "Atlas Products",
  heroTitle: `Two product lines,
one shared runtime governance infrastructure`,
  heroSubtitle:
    "Atlas connects robot manufacturers and sensor manufacturers through one runtime-governance system. Both sides share runtime evidence, investigation assets, and organizational knowledge, creating a closed loop of continuous accumulation, collaboration, and reuse.",
  heroStatement:
    "Together, we are building the governance infrastructure that keeps the robotics industry running.",
  architecture: {
    eyebrow: "Atlas Product Architecture",
    title: "A dual flywheel for robot OEMs and sensor manufacturers",
    description:
      "On the left is Runtime Investigation™ for robot OEMs; on the right is Runtime Sensor Governance™ for sensor manufacturers; in the middle, Engagement Pack™ (EGP) enables cross-organization investigation collaboration with explicit boundaries.",
    imageSrc: "/images/product1e.png",
    imageAlt:
      "Atlas Runtime Investigation and Runtime Sensor Governance dual-flywheel product architecture",
  },
  productA: {
    name: "Atlas Runtime Sensor Governance™",
    audience: "Sensor Manufacturers",
    description:
      "Help sensor manufacturers continuously understand how their products perform in real robot deployments, receive sensor collaboration investigation packages (EGPs), organize Sensor FAE engineering investigations, and preserve completed Investigation Results (IR), Lessons Learned (LL), and historical cases (Historical RGA) as reusable sensor runtime knowledge.",
    href: "/products/runtime-sensor-governance",
    valuePoints: [
      "Establish Runtime Profiles across OEMs and sensor SKUs",
      "Run bounded Sensor FAE investigations from OEM EGPs",
      "Recall Historical Sensor RGA instead of repeating prior work",
      "Return updated EGP, IR, LL, and Sensor EGP responses",
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
      "Help robot OEMs transform runtime events into bounded Evidence Packs™, create and manage REF tickets, recall Historical RGA, coordinate Tier 1, Tier 2, Tier 3, and Sensor FAE teams, and turn investigation results into organizational knowledge.",
    href: "/products/runtime-investigation",
    valuePoints: [
      "Continuously observe and retain Runtime Datasets with Atlas Agent",
      "Generate investigation-priority candidates and Evidence Packs",
      "Recall Historical RGA and existing IR and LL assets",
      "Create Sensor Engagement Packs and escalate to Sensor FAE",
      "Review returned results, close OEM REF tickets, and preserve knowledge",
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
      "EGP does not replace an OEM's internal Evidence Pack. It is the standard bounded carrier for starting cross-organization investigation collaboration and follows the REF ticket from Pending through Closure.",
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
      "One body of runtime evidence, viewed from different organizational perspectives. One investigation chain with clear responsibility boundaries. Every completed investigation becomes history for the next REF.",
  },
  finalValue: {
    title: "Turn bilateral investigation into a continuously growing capability",
    description:
      "OEMs gain faster runtime-investigation capabilities with clearer boundaries. Sensor manufacturers gain more realistic product-runtime feedback and reusable FAE investigation assets. Atlas lets both sides stop repeatedly communicating through fragmented logs and instead collaborate continuously around unified evidence, explicit tickets, and historical knowledge.",
  },
  ui: {
    viewProduct: "View product details",
    sensorGovernance: "Runtime Sensor Governance",
    runtimeInvestigation: "Runtime Investigation",
  },
  ctaText: "Request a Demo",
} satisfies ProductContent;

export default productsContent;
