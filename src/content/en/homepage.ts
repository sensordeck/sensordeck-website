/**
 * SensorDeck Official Website Homepage Content
 * English Homepage
 */

import type { HomepageContent } from "@/lib/content-types";

export const homepageContent = {
  hero: {
    eyebrow: "SensorDeck",
    title: "Runtime Intelligence Infrastructure for Robotics",
    subtitle:
      "Govern runtime behavior across sensors, embedded systems, and robot operations.",
    description:
      "Robot teams need more than logs. SensorDeck provides the infrastructure layer for runtime evidence, investigation, and reusable operational knowledge.",
    principles: ["Observe", "Understand", "Investigate", "Improve", "Reuse"],
    cta: {
      primary: { text: "Request Demo", href: "#contact-form" },
      secondary: { text: "Technical Whitepaper", href: "#resources" },
    },
  },

  problem: {
    eyebrow: "01 / Problem",
    title: "Why Robot Runtime Incidents Are Difficult to Investigate",
    description:
      "Runtime signals exist, but the evidence is often scattered across devices, logs, tickets, recordings, and engineering teams.",
    challenges: [
      {
        label: "Fragmented Runtime Evidence",
        description:
          "Sensor output, power, timing, networking, Linux runtime, and ROS context are typically analyzed in separate tools.",
      },
      {
        label: "Undefined Evidence Boundaries",
        description:
          "Long-running runtime data makes it difficult to identify the precise evidence window required for investigation.",
      },
      {
        label: "Knowledge Lost After Investigation",
        description:
          "Investigation results often remain in tickets or personal experience instead of becoming reusable organizational knowledge.",
      },
    ],
  },

  value: {
    eyebrow: "02 / Atlas Core Value",
    title: "From Runtime Boundaries to Organizational Knowledge",
    description:
      "Atlas connects runtime observations with structured evidence, investigation workflows, and reusable operational knowledge across the sensor-to-system boundary.",
    benefits: [
      {
        label: "Runtime Boundaries",
        description:
          "Connect sensor behavior with power, communication buses, Linux runtime, ROS inputs, and application context.",
      },
      {
        label: "Structured Evidence",
        description:
          "Transform continuous runtime data into standardized evidence windows for investigation and collaboration.",
      },
      {
        label: "Reusable Knowledge",
        description:
          "Preserve investigation results and lessons learned for future engineering teams.",
      },
    ],
  },

  products: {
    eyebrow: "03 / Product Lines",
    title: "Two Atlas Product Lines. One Shared Infrastructure.",
    description:
      "Sensor manufacturers and robot OEMs operate on different sides of the runtime boundary. Atlas provides purpose-built products for each organization while maintaining a shared runtime evidence model.",
    lines: [
      {
        name: "Atlas Runtime Sensor Governance™",
        audience: "Sensor Manufacturers",
        description:
          "Understand sensor behavior in real robot deployments, preserve runtime knowledge, and collaborate with OEM investigation teams using shared runtime evidence.",
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
          "Transform runtime events into structured evidence, coordinate investigations, and build reusable organizational knowledge.",
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
    title: "Built for Robot OEMs and Sensor Manufacturers",
    sensorManufacturers: {
      title: "Sensor Manufacturers",
      description:
        "Understand sensor runtime behavior in real robot deployments, collaborate with OEM investigation teams, and continuously improve product reliability.",
      capabilities: [
        "Runtime Profile Definition",
        "Runtime Observation & Retention",
        "Evidence Sharing via EGP",
        "Historical Case Recall",
      ],
    },
    robotOems: {
      title: "Robot OEMs",
      description:
        "Transform runtime events into structured evidence, coordinate cross-functional investigations, preserve engineering knowledge, and improve future response efficiency.",
      capabilities: [
        "Runtime Dataset Retention",
        "Evidence Pack Generation",
        "Investigation Workflow Coordination",
        "Assist Vault Organizational Knowledge",
      ],
    },
  },

  principle: {
    eyebrow: "05 / Operating Principles",
    title: "Evidence Before Conclusions",
    subtitle: "Structured Evidence. Human Judgment.",
    description:
      "Atlas structures runtime evidence and retrieves historical investigation candidates. Engineering teams remain responsible for determining root cause, authoring conclusions, and recording lessons learned.",
    boundaries: [
      "Atlas structures runtime evidence.",
      "Atlas retrieves historical investigation candidates.",
      "Atlas does not determine root cause.",
      "Atlas does not assign responsibility.",
    ],
  },

  cta: {
    eyebrow: "06 / Request Demo",
    title: "Bring Runtime Evidence Into Your Investigation Workflow",
    description:
      "Discuss your robot platform, runtime environment, and investigation workflow to see where Atlas fits within your engineering organization.",
    note: "Illustration data used for demonstration purposes only.",
    button: {
      text: "Contact Us",
      href: "mailto:contact@sensordeck.tech",
    },
  },
} satisfies HomepageContent;
