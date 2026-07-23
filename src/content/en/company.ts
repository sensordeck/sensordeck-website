import type { CompanyContent } from "@/lib/content-types";

export const companyContent = {
  hero: {
    eyebrow: "SensorDeck / Company",
    title: "About SensorDeck",
    description:
      "SensorDeck builds runtime governance infrastructure for robotics, enabling engineering teams to preserve runtime evidence, investigate incidents, and transform every resolved case into reusable organizational knowledge.",
    statementLabel: "Runtime Governance Infrastructure",
    statement:
      "We focus on runtime behavior after deployment across sensor, bus, power, Linux/SBC, and application boundaries.",
  },

  mission: {
    eyebrow: "Our Mission",
    title: "Ensure Robotics Runtime Investigations Never Have to Start from Scratch",
    lead:
      "As robots become part of everyday operations, runtime investigations still rely heavily on scattered logs, individual experience, and ad hoc collaboration.",
    description:
      "Atlas continuously preserves runtime evidence, generates structured evidence around incidents, and enables organizations to reuse investigation results, lessons learned, and historical cases.",
    points: [
      "Preserve Runtime Facts",
      "Support Cross-Team Investigations",
      "Build Organizational Knowledge",
    ],
  },

  category: {
    eyebrow: "Who We Are",
    title: "An Infrastructure Company Focused on Robotics Runtime Governance",
    lead:
      "We help robot OEMs and sensor manufacturers investigate runtime incidents within clear evidence, data ownership, and engineering responsibility boundaries.",
    description:
      "Atlas connects continuous runtime observation, structured evidence, investigation collaboration, and historical knowledge. It does not replace robot control systems, fleet platforms, or engineering judgment. Instead, it provides a reviewable and reusable investigation framework across these systems.",
  },

  principlesSection: {
    eyebrow: "How We Work",
    title: "Infrastructure Must First Be Trustworthy",
    description:
      "SensorDeck's products and partnerships are built on three long-term principles: customers own their evidence, systems remain reviewable, and engineering responsibility boundaries remain clear.",
  },

  principles: [
    {
      number: "01",
      label: "Customer Ownership",
      title: "Customers Own Their Runtime Data and Investigation Assets",
      description:
        "Runtime data, Evidence Pack™, investigation conclusions, and organizational knowledge remain under customer ownership and control. SensorDeck provides infrastructure, structure, and tools without turning customer evidence into our data assets.",
    },
    {
      number: "02",
      label: "No Black Box",
      title: "Critical Evidence and Judgments Remain Reviewable",
      description:
        "Atlas explicitly records evidence sources, incident time boundaries, and the basis for historical recall. The system supports engineering review rather than replacing it with unexplainable results.",
    },
    {
      number: "03",
      label: "Responsibility Boundaries",
      title: "Support Engineering Judgment Without Replacing It",
      description:
        "Atlas does not automatically confirm root cause, assign responsibility, or replace the formal engineering processes of OEMs, sensor manufacturers, or safety teams. Final conclusions are always confirmed by authorized teams.",
    },
  ],

  boundariesSection: {
    eyebrow: "Our Role",
    title: "Build a Reliable Foundation Between Evidence and Judgment",
    description:
      "SensorDeck's role is to make runtime facts easier to preserve, understand, and reuse while leaving clear space for customers' existing engineering, quality, and safety systems.",
  },

  boundaries: [
    {
      title: "What SensorDeck Provides",
      items: [
        "A runtime observation structure spanning sensors, buses, power, Linux/SBC, and application inputs",
        "Bounded and reviewable Evidence Pack™ generated around specific incidents",
        "Investigation infrastructure supporting collaboration among OEMs, sensor FAEs, and investigation teams",
        "Reusable organizational knowledge built from completed investigations, lessons learned, and historical patterns",
      ],
    },
    {
      title: "What SensorDeck Does Not Replace",
      items: [
        "Robot control systems, fleet management platforms, or existing logging infrastructure",
        "Customers' engineering, testing, quality, safety, or compliance processes",
        "Automatically determining root cause based on historical similarity",
        "Customer ownership of runtime data, investigation assets, or decision-making authority",
      ],
    },
  ],

  contact: {
    eyebrow: "Talk With Us",
    title: "Start With a Real Runtime Scenario",
    description:
      "Tell us about your robot platform, deployment environment, primary sensors, and current investigation workflow. We'll discuss where Atlas fits within your runtime architecture.",
    button: "Request a Demo",
  },
} satisfies CompanyContent;
