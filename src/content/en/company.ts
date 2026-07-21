export const companyContent = {
  hero: {
    eyebrow: "SensorDeck / Company",
    title: "About SensorDeck",
    description:
      "Defining runtime intelligence infrastructure so robotics teams can observe, understand, investigate, improve, and reuse knowledge from real-world operations.",
    statementLabel: "Runtime Intelligence Infrastructure",
    statement:
      "From pre-deployment runtime profiles to post-deployment investigations and organizational memory, SensorDeck focuses on what happens as robotic systems operate across boundaries.",
  },
  mission: {
    eyebrow: "Mission & Vision",
    title: "Make every runtime event a reliable engineering input",
    lead:
      "Robotic system failures rarely belong to one component. Sensors, buses, power, Linux/SBC runtime, ROS inputs, and field conditions jointly determine how systems behave under pressure.",
    description:
      "SensorDeck created Atlas to organize these fragmented runtime facts into bounded, reviewable, collaborative evidence. We help teams identify deviations faster, investigate with greater precision, and carry what they learn into the next deployment.",
    points: ["Observe real operations", "Understand evidence boundaries", "Reuse organizational memory"],
  },
  category: {
    eyebrow: "Category Statement",
    title: "Runtime Intelligence Infrastructure for Robotics",
    lead:
      "Robotics needs more than additional logs. It needs infrastructure that governs evidence across runtime boundaries, supports investigations, and preserves knowledge.",
    description:
      "Atlas serves sensor manufacturers and robot OEMs across pre- and post-deployment runtime work. It connects runtime observation, Evidence Packs, investigation workspaces, and Historical RGA into a reviewable engineering path.",
  },
  principlesSection: {
    eyebrow: "Core Principles",
    title: "Define the boundary before expanding intelligence",
    description:
      "We evaluate product capability by whether evidence can be owned, understood, and reviewed. These principles guide Atlas product design and engineering.",
  },
  principles: [
    {
      number: "01",
      label: "Evidence Ownership",
      title: "Customers own their evidence",
      description:
        "Runtime data, investigation materials, and the organizational memory they create should remain within customer operating boundaries. SensorDeck provides structure and tools without turning customer evidence into our asset.",
    },
    {
      number: "02",
      label: "No Black Box",
      title: "Systems remain reviewable",
      description:
        "Atlas helps teams observe, organize, and investigate runtime events without hiding critical judgments. Engineering teams must be able to review evidence sources, reasoning scope, and responsibility boundaries.",
    },
    {
      number: "03",
      label: "Explicit Boundaries",
      title: "Engineering and responsibility stay clear",
      description:
        "Atlas does not replace OEM engineering tools or invent root-cause and liability decisions. It organizes runtime facts into collaborative evidence so accountable teams can make final judgments.",
    },
  ],
  boundariesSection: {
    eyebrow: "Engineering Boundaries",
    title: "Preserve room for collaborative judgment",
    description:
      "Good infrastructure does not blur responsibility. It shows teams what the system collected, what supports a conclusion, and who must decide the next step.",
  },
  boundaries: [
    {
      title: "What we provide",
      items: [
        "Runtime evidence structures spanning sensors, buses, Linux/SBC, and ROS inputs",
        "A path from one completed investigation to reusable organizational knowledge",
        "Shared evidence for OEM, sensor manufacturer, and investigation team collaboration",
      ],
    },
    {
      title: "What we do not replace",
      items: [
        "Existing customer engineering, quality, testing, or safety processes",
        "Human root-cause judgment with automated correlation claims",
        "Customer data ownership with opaque or unexplained decision paths",
      ],
    },
  ],
  contact: {
    eyebrow: "Talk With Us",
    title: "Start with a real runtime problem",
    description:
      "Whether you build sensors, operate robot fleets, or investigate field events, the conversation can start with one concrete runtime boundary.",
    button: "Contact SensorDeck",
  },
} as const;

export type CompanyContent = typeof companyContent;
