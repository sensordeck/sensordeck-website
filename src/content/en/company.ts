import type { CompanyContent } from "@/lib/content-types";

export const companyContent = {
  hero: {
    eyebrow: "SensorDeck / Company",
    title: "About SensorDeck",
    description:
      "We build runtime governance infrastructure for the robotics industry, enabling engineering teams to preserve evidence during real-world operations, conduct investigations, and turn the experience from every resolved issue into reusable organizational assets.",
    statementLabel: "Runtime Governance Infrastructure",
    statement:
      "SensorDeck does not focus on how robots should plan and control. We focus on what actually happens after robots enter real-world environments and operate across sensor, bus, power, Linux/SBC, and application boundaries.",
  },

  mission: {
    eyebrow: "Our Mission",
    title: "Ensure Robotics Runtime Investigations Never Have to Start from Scratch",
    lead:
      "Robots have entered restaurants, hospitals, warehouses, factories, and public spaces, yet investigating runtime issues still depends heavily on scattered logs, individual experience, and ad hoc collaboration.",
    description:
      "SensorDeck created Atlas to continuously preserve runtime facts after deployment, produce bounded and reviewable evidence when incidents occur, and enable organizations to continuously reuse investigation results, lessons learned, and historical cases.",
    points: [
      "Preserve Runtime Facts",
      "Support Cross-Team Investigations",
      "Build Organizational Memory",
    ],
  },

  category: {
    eyebrow: "Who We Are",
    title: "An Infrastructure Company Focused on Robotics Runtime Governance",
    lead:
      "We serve robot OEMs and sensor manufacturers, helping both parties conduct runtime investigations within clear data, evidence, and responsibility boundaries.",
    description:
      "Atlas connects continuous observation in deployed environments, incident evidence, investigation collaboration, and historical memory. We do not replace robot control systems, fleet platforms, or engineering judgment. Instead, we establish a reviewable and reusable runtime investigation path between these systems.",
  },

  principlesSection: {
    eyebrow: "How We Work",
    title: "Infrastructure Must First Be Trustworthy",
    description:
      "SensorDeck's products and partnerships are built on three long-term principles: customers own their evidence, systems remain reviewable, and engineering responsibility boundaries always remain clear.",
  },

  principles: [
    {
      number: "01",
      label: "Customer Ownership",
      title: "Customers Own Their Runtime Data and Investigation Assets",
      description:
        "Runtime data, Evidence Pack™, investigation conclusions, and organizational memory are governed by the customer. SensorDeck provides infrastructure, structure, and tools without turning customer evidence into our data assets.",
    },
    {
      number: "02",
      label: "No Black Box",
      title: "Critical Evidence and Judgments Remain Reviewable",
      description:
        "Atlas explicitly records evidence sources, incident time boundaries, and the basis for historical recall. The system can assist investigations, but it does not replace engineering teams' review and judgment with unexplainable results.",
    },
    {
      number: "03",
      label: "Responsibility Boundaries",
      title: "Help Teams Make Judgments Without Making Conclusions for Them",
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
        "Organizational memory built from completed investigations, lessons learned, and historical patterns",
      ],
    },
    {
      title: "What SensorDeck Does Not Replace",
      items: [
        "Robot control systems, fleet management platforms, or existing logging infrastructure",
        "Customers' engineering, testing, quality, safety, or compliance processes",
        "Automated root-cause conclusions presented from historical similarity",
        "Customer ownership of runtime data, investigation assets, or decision-making authority",
      ],
    },
  ],

  contact: {
    eyebrow: "Talk With Us",
    title: "Start With a Real Runtime Scenario",
    description:
      "Tell us about your robotics platform, primary sensors, deployment environment, and current investigation process. Together, we will evaluate whether Atlas is right for your organization and which runtime boundary to start with.",
    button: "Request a Demo",
  },
} satisfies CompanyContent;
