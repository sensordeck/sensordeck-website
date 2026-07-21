/**
 * SensorDeck Official Website Homepage Content (Simplified)
 * For root path / enterprise website display
 */

export const homepageContent = {
  hero: {
    eyebrow: "SensorDeck",
    title: "Runtime Intelligence Infrastructure for Robotics",
    subtitle:
      "Establish governed runtime boundaries between sensors, systems, and engineering decisions.",
    description:
      "Robot teams need more than another log archive. SensorDeck defines the infrastructure layer to observe runtime conditions, structure evidence, support investigations, and preserve organizational learning.",
    principles: ["Observe", "Understand", "Investigate", "Improve", "Reuse"],
    cta: {
      primary: { text: "Request Demo", href: "#contact-form" },
      secondary: { text: "Technical Whitepaper", href: "#resources" },
    },
  },

  problem: {
    eyebrow: "01 / Problem",
    title: "Why Robot Runtime Incidents Are Hard to Investigate",
    description:
      "Signals are available, but operational context is often scattered across devices, logs, tickets, recordings, and personal memory.",
    challenges: [
      {
        label: "Fragmented Signals",
        description:
          "Sensor output, power, timing, network, host runtime, and ROS context are typically reviewed in different tools.",
      },
      {
        label: "Unbounded Events",
        description:
          "Unlimited archives make it hard to agree on the exact evidence window that matters.",
      },
      {
        label: "Knowledge Resets on Close",
        description:
          "Conclusions may live in tickets or someone's memory, rather than becoming reusable investigation assets.",
      },
    ],
  },

  value: {
    eyebrow: "02 / Atlas Core Value",
    title: "From Runtime Boundaries to Organizational Memory",
    description:
      "Atlas operates at the boundary where sensor behavior becomes system-level runtime conditions: power, bus, Linux/SBC runtime, ROS inputs, and the teams responsible for investigation.",
    benefits: [
      {
        label: "Runtime Boundaries",
        description:
          "Connect sensor behavior to power, bus, Linux/SBC runtime, ROS inputs, and application context.",
      },
      {
        label: "Bounded Evidence",
        description:
          "Transform long-running runtime datasets into standardized evidence windows for team review and exchange.",
      },
      {
        label: "Reusable Knowledge",
        description:
          "Preserve human-authored investigation results and lessons learned for future reference.",
      },
    ],
  },

  products: {
    eyebrow: "03 / Product Lines",
    title: "Two Atlas Product Lines. One Shared Infrastructure.",
    description:
      "Sensor manufacturers and robot OEMs work on different sides of the runtime boundary. Atlas provides focused product lines for each party while maintaining consistency in evidence and collaboration.",
    lines: [
      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "Sensor Manufacturers",
        description:
          "Understand how your sensors perform in real robot deployments, preserve runtime knowledge, and collaborate with OEM investigation teams using shared evidence.",
        keyModules: [
          "Runtime Profiles™",
          "Runtime Observation",
          "Historical Sensor RGA™",
          "OEM Collaboration via EGP",
        ],
      },
      {
        name: "Atlas Runtime Investigation™",
        audience: "Robot OEMs",
        description:
          "Transform runtime events into bounded evidence, coordinate investigations, and build reusable organizational knowledge.",
        keyModules: [
          "Atlas Agent™",
          "Evidence Pack™",
          "Historical RGA™",
          "Investigation Workspace™",
        ],
      },
    ],
  },

  customers: {
    eyebrow: "04 / Customer Focus",
    title: "Serving the Robotics Ecosystem",
    sensorManufacturers: {
      title: "Sensor Manufacturers",
      description:
        "Understand sensor runtime behavior in real OEM deployments, collaborate with customer investigation teams, and build organizational runtime knowledge.",
      capabilities: [
        "Runtime Profile Definition",
        "Runtime Observation & Retention",
        "Evidence Sharing with OEMs (EGP)",
        "Historical Case Recall",
      ],
    },
    robotOems: {
      title: "Robot OEMs",
      description:
        "Transform runtime events into governed evidence, coordinate multi-party investigations, build organizational memory, and support future reuse.",
      capabilities: [
        "Runtime Dataset Retention",
        "Evidence Pack Generation",
        "Investigation Workflow Coordination",
        "Assist Vault Organizational Memory",
      ],
    },
  },

  principle: {
    eyebrow: "05 / Operating Principles",
    title: "Evidence Before Conclusions",
    subtitle: "No Causality Claims, No Blame Assignment",
    description:
      "Atlas structures evidence and retrieves historical candidates. Human teams are responsible for authoring investigation results and lessons learned.",
    boundaries: [
      "Atlas structures evidence.",
      "Atlas retrieves historical candidates.",
      "Atlas does not automatically confirm root cause.",
      "Atlas does not assign responsibility.",
    ],
  },

  cta: {
    eyebrow: "06 / Request Demo",
    title: "Make Runtime Evidence Work Across Your Organization",
    description:
      "Learn how Atlas fits your robot organization's runtime boundaries, investigation workflows, and evidence ownership model.",
    note: "Demo data for illustration only",
    button: {
      text: "Contact Us",
      href: "mailto:contact@sensordeck.tech",
    },
  },
} as const;

export type HomepageContent = typeof homepageContent;
