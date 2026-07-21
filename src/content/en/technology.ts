import type { TechnologyContent } from "@/lib/content-types";

export const technologyContent = {
  hero: {
    title: "Technical Architecture",
    subtitle:
      "Atlas technical infrastructure explains why runtime governance works. This is not a list of programming languages or frameworks, but fundamental principles about evidence governance, runtime boundaries, and investigation lifecycle.",
  },

  sections: [
    {
      id: "runtime-boundary",
      title: "Runtime Boundary",
      description:
        "The boundary Atlas governs starts from sensor physical interfaces, through kernel and driver layers, to application input.",
      content: `Sensors
  ↓
Power / USB / Ethernet / CAN / CSI / Trigger / PPS
  ↓
Linux Kernel / Drivers / Buffers / IRQ / Scheduler
  ↓
SBC / ROS Topics / Application Input`,
      explanation:
        "This boundary defines the scope where Atlas monitors and captures runtime evidence. Each layer can introduce latency, loss, or anomalies, requiring observability across the entire path.",
      href: "/technology/runtime-boundary",
    },

    {
      id: "runtime-evidence",
      title: "Runtime Evidence",
      description:
        "Bounded Evidence Packs are different from unlimited log archives, raw rosbags, customer videos, support tickets, or single-sensor logs.",
      content: null,
      explanation:
        "Evidence Packs are bounded, structured, reproducible evidence containers. They are not raw data dumps, but governed evidence collections organized around anomalous event windows. Boundedness ensures evidence is transferable, reviewable, and storable.",
      comparedTo: [
        "Unlimited log archives → Cannot transfer, cannot review quickly",
        "Raw rosbags → Unstructured, no context, no anomaly markers",
        "Customer videos → Subjective, incomplete, no sensor raw data",
        "Support tickets → Text descriptions, lacking runtime evidence",
        "Single sensor logs → Missing cross-sensor context and system state",
      ],
      href: "/technology/runtime-evidence",
    },

    {
      id: "runtime-surfaces",
      title: "Runtime Monitoring Surfaces",
      description:
        "Atlas establishes observability across multiple runtime surfaces, covering sensor, bus, kernel, and application layers.",
      content: null,
      surfaces: [
        "Power Health",
        "Timing",
        "Ethernet",
        "USB",
        "CAN",
        "LiDAR",
        "Camera",
        "IMU (Inertial Measurement Unit)",
        "Linux Runtime",
        "ROS Topics",
        "Storage",
        "Sensor Heartbeat / Raw Output",
      ],
      explanation:
        "These surfaces are not isolated metric monitors, but observable layers Atlas establishes within runtime boundaries. Each surface can generate anomaly signals that trigger Evidence Pack generation.",
      href: "/technology/runtime-surfaces",
    },

    {
      id: "five-window-model",
      title: "Five-Window Model",
      description:
        "Evidence Pack temporal structure consists of five windows providing complete context for anomalous events.",
      content: `Pre-Guard Window
Baseline Window
Deviation Window
Recovery Observation Window
Post-Guard Window`,
      explanation:
        "Recovery is an observation window, not a guarantee of recovery conclusion. The five-window model ensures Evidence Packs contain sufficient before-and-after context for investigators to understand how anomalies occurred, persisted, and ended.",
      href: "/technology/five-window-model",
    },

    {
      id: "historical-recall",
      title: "Historical Recall",
      description:
        "Atlas recalls historically similar cases from Assist Vault, but never claims historical similarity proves identical root cause.",
      content: null,
      concepts: [
        {
          term: "Strong Candidates",
          definition: "Highly similar historical cases with multiple dimension matches",
        },
        {
          term: "Partial Candidates",
          definition: "Partially matching historical cases with some dimension similarities",
        },
        {
          term: "Related Historical Patterns",
          definition: "Related but not fully matching historical cases",
        },
        {
          term: "Recall Reason",
          definition: "Explains why this historical case was recalled",
        },
        {
          term: "Environmental Differences",
          definition: "Marks environmental differences between historical and current cases",
        },
      ],
      warning:
        "⚠️ Historical similarity does not prove identical root cause. Historical RGA provides investigation starting points, not automatic diagnostic conclusions.",
      href: "/technology/historical-recall",
    },

    {
      id: "investigation-lifecycle",
      title: "Investigation Lifecycle",
      description:
        "From REF trigger to Assist Vault storage, Atlas supports the complete investigation lifecycle.",
      content: `REF (Runtime Event Flag)
  ↓
Runtime Dataset
  ↓
Evidence Pack
  ↓
Historical RGA Recall
  ↓
Investigation Context
  ↓
EGP (Evidence Governance Protocol)
  ↓
OEM / Sensor IR + LL (Investigation Report + Lessons Learned)
  ↓
Case Closure
  ↓
Assist Vault (Organizational Memory)
  ↓
Future Reuse`,
      explanation:
        "This lifecycle is not a linear automation process, but an investigation collaboration framework Atlas supports. Each stage requires human judgment; Atlas provides structured evidence and historical context to support decisions.",
      href: "/technology/investigation-lifecycle",
    },

    {
      id: "architecture",
      title: "Architecture",
      description:
        "Atlas platform architecture integrates evidence governance, historical memory, and investigation collaboration into unified infrastructure.",
      content: null,
      explanation:
        "Complete Atlas architecture diagrams and implementation details are available in technical documentation. Architecture design is built around runtime dataset governance, Evidence Pack standardization, and Historical RGA organizational memory.",
      link: {
        text: "View Full Architecture Documentation →",
        href: "https://docs.sensordeck.tech",
      },
      href: "/technology/architecture",
    },
  ],

  cta: {
    title: "Deep Dive into Atlas Technical Architecture",
    description:
      "Access complete technical documentation, architecture diagrams, and implementation details.",
    primaryButton: {
      text: "Technical Documentation",
      href: "https://docs.sensordeck.tech",
    },
    secondaryButton: {
      text: "View Demo",
      href: "/demo",
    },
  },
} satisfies TechnologyContent;
