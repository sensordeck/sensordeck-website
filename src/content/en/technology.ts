import type { TechnologyContent } from "@/lib/content-types";

export const technologyContent = {
  hero: {
    title: "Atlas Deployment",
    subtitle:
      "Atlas is deployed within customer-controlled runtime environments, establishing governance through existing robotic systems, runtime data sources, and investigation workflows. No replacement of the core robotics architecture is required, and runtime data, retention policies, and evidence exports always remain under customer control.",
  },

  sections: [
    {
      id: "deployment-principles",
      title: "Deployment Principles",
      description:
        "Atlas enters the customer's existing engineering system as runtime-governance infrastructure rather than replacing robot control systems, business applications, or existing logging tools.",
      content: `Customer Runtime Environment
  ↓
Atlas Agent™
  ↓
Runtime Surface™
  ↓
Runtime Dataset™
  ↓
Evidence Pack™
  ↓
Investigation and Organizational Memory`,
      explanation:
        "Atlas can be deployed on robot host controllers, edge-computing nodes, or customer investigation servers, and connects to existing runtime data sources through Runtime Surface Adapters. Customers own the raw data, determine the scope of data retention, and authorize the generation and export of investigation evidence.",
      comparedTo: [
        "Does not replace the existing core robotics architecture",
        "Does not require changes to robot business logic",
        "Does not require all raw data to be uploaded to a public cloud",
        "Does not change the customer's existing engineering responsibilities or approval workflows",
        "Does not automatically confirm root cause or assign responsibility",
      ],
      href: "/technology/deployment-principles",
    },

    {
      id: "oem-deployment",
      title: "Robot OEM Deployment",
      description:
        "Deployment for robot OEMs establishes complete capabilities around runtime-data retention, Evidence Pack™ generation, investigation collaboration, and organizational memory.",
      content: `Robot / Device Fleet
  ↓
Atlas Agent™
  ↓
Runtime Surface™
  ↓
Runtime Dataset™
  ↓
Evidence Pack™
  ↓
Investigation Context™
  ↓
Historical RGA™
  ↓
Assist Vault™`,
      explanation:
        "Atlas Agent™ continuously observes authorized runtime signals within the OEM-controlled environment. When a runtime event occurs, Atlas extracts relevant data from before and after the event from Runtime Dataset™, creates a time-bounded, reviewable Evidence Pack™, and supports investigation collaboration across Tier 1, Tier 2 / Tier 3, OEM engineering, and sensor FAE teams.",
      surfaces: [
        "Robot Host Controller",
        "Edge-Computing Node",
        "Linux Runtime",
        "ROS / ROS2",
        "Device and Driver State",
        "USB / Ethernet / CAN",
        "Raw Sensor Output",
        "Customer Investigation Server",
        "Existing Logging Systems",
      ],
      href: "/technology/oem-deployment",
    },

    {
      id: "oem-deployment-scope",
      title: "OEM Deployment Scope",
      description:
        "OEM deployment scope is determined jointly by the robotics platform, sensor configuration, runtime environment, and investigation objectives.",
      content: null,
      explanation:
        "Atlas does not collect all data in the robotics environment by default. Before deployment, both parties first confirm the runtime boundary, data sources, retention period, event-trigger conditions, investigation roles, and evidence-export method, then establish an explicit deployment scope.",
      concepts: [
        {
          term: "Runtime Boundary",
          definition:
            "Confirm the sensors, interfaces, Linux Runtime, device states, and ROS Topics that Atlas needs to observe.",
        },
        {
          term: "Data Sources",
          definition:
            "Confirm existing logs, device interfaces, ROS Topics, driver states, and other accessible data sources.",
        },
        {
          term: "Retention Policy",
          definition:
            "The customer determines the data-retention scope, period, capacity, and deletion rules.",
        },
        {
          term: "Event Rules",
          definition:
            "Define which runtime anomalies should be flagged, have their data locked, and enter the investigation workflow.",
        },
        {
          term: "Evidence Export",
          definition:
            "Determine the generation scope, authorized recipients, and export method for Evidence Packs™.",
        },
        {
          term: "Investigation Roles",
          definition:
            "Clarify how Tier 1, Tier 2 / Tier 3, OEM engineering, and sensor FAE teams participate.",
        },
      ],
      href: "/technology/oem-deployment-scope",
    },

    {
      id: "sensor-manufacturer-deployment",
      title: "Sensor Manufacturer Deployment",
      description:
        "Deployment for sensor manufacturers establishes governance around product runtime performance, customer investigation collaboration, and reuse of historical cases.",
      content: `Sensor Products and Runtime Scenarios
  ↓
Runtime Profiles™
  ↓
Runtime Observation and Evidence Intake
  ↓
Sensor Investigation Workspace™
  ↓
Historical Sensor RGA™
  ↓
Sensor Assist Vault™
  ↓
Runtime Knowledge Base™`,
      explanation:
        "Sensor manufacturers can deploy Atlas in their own laboratories, technical-support environments, or customer-investigation environments. Through Runtime Profiles™, Sensor Engagement Packs™, and historical investigation assets, sensor teams can understand runtime conditions in the field more quickly and collaborate with OEMs within explicit data boundaries.",
      surfaces: [
        "Sensor Laboratory",
        "Technical-Support Team",
        "FAE Investigation Workflow",
        "Product Runtime Scenarios",
        "Customer Field Evidence",
        "Sensor Engagement Pack™",
        "Historical Sensor RGA™",
        "Sensor Assist Vault™",
        "Runtime Knowledge Base™",
      ],
      href: "/technology/sensor-manufacturer-deployment",
    },

    {
      id: "sensor-engagement-boundary",
      title: "OEM–Sensor Manufacturer Collaboration Boundary",
      description:
        "Sensor Engagement Pack™ transfers investigation-relevant runtime information with an explicit scope between an OEM and a sensor manufacturer.",
      content: `OEM Investigation Environment
  ↓
Evidence Pack™
  ↓
Sensor Engagement Pack™
  ↓
Sensor FAE Investigation
  ↓
IR + Lessons Learned
  ↓
OEM Closure and Organizational Memory`,
      explanation:
        "The collaboration package contains only information relevant to the sensor-investigation boundary and does not require the OEM to provide all robot runtime data. The sensor manufacturer can investigate from explicit event context and evidence while the OEM's product architecture, customer information, and operational data remain protected.",
      comparedTo: [
        "Transfer only information relevant to the current sensor investigation",
        "Preserve the event timeline and runtime-environment context",
        "Reduce unnecessary exposure of OEM operational information",
        "Enable sensor FAEs to produce investigation results and lessons learned",
        "Allow both parties to retain their respective data and responsibility boundaries",
      ],
      href: "/technology/sensor-engagement-boundary",
    },

    {
      id: "pilot-to-production",
      title: "From Pilot to Production",
      description:
        "Atlas follows a phased deployment path, starting validation with one explicit runtime scenario and gradually expanding into a formal production environment.",
      content: `Scenario Confirmation
  ↓
Runtime-Boundary Review
  ↓
Deployment Plan
  ↓
Atlas Agent™ Installation
  ↓
Runtime Surface™ Integration
  ↓
Retention-Policy Configuration
  ↓
Canary Validation
  ↓
Pilot
  ↓
Production`,
      explanation:
        "Deployment does not begin across all devices, all data, and the entire organization. The first Pilot should focus on one explicit robotics platform, sensor boundary, or representative investigation scenario to validate data integration, event slicing, Evidence Pack™ generation, and the investigation-collaboration workflow. Once validated, deployment can gradually expand to more devices, scenarios, and teams.",
      href: "/technology/pilot-to-production",
    },

    {
      id: "canary-validation",
      title: "Canary Validation",
      description:
        "Before a Pilot enters formal operation, validate the complete deployment chain through a controlled, representative event.",
      content: `Controlled Runtime Event
  ↓
Atlas Agent™ Observation
  ↓
Runtime Dataset™ Retention
  ↓
Event-Window Generation
  ↓
Evidence Pack™
  ↓
Investigation-Workflow Validation
  ↓
Historical-Asset Preservation and Future Recall`,
      explanation:
        "Canary validation confirms that Atlas Agent™, data sources, time boundaries, retention policies, Evidence Pack™, and the investigation workflow operate together. The goal is not to simulate every possible robot incident, but to prove that the complete chain within the deployment scope is observable, generative, reviewable, and reusable.",
      concepts: [
        {
          term: "Data-Ingestion Validation",
          definition:
            "Confirm that authorized runtime signals continuously enter Runtime Dataset™.",
        },
        {
          term: "Event-Boundary Validation",
          definition:
            "Confirm that the required data from before and after an event is retained and sliced correctly.",
        },
        {
          term: "Evidence-Generation Validation",
          definition:
            "Confirm that Evidence Pack™ can be generated within the defined scope and reviewed by the team.",
        },
        {
          term: "Investigation-Workflow Validation",
          definition:
            "Confirm that events enter the correct investigation roles and collaboration path.",
        },
        {
          term: "Historical-Reuse Validation",
          definition:
            "Confirm that completed investigation assets enter Assist Vault™ and support future recall.",
        },
      ],
      href: "/technology/canary-validation",
    },

    {
      id: "production-readiness",
      title: "Production Readiness Criteria",
      description:
        "Atlas enters formal production operation only after the deployment boundary, runtime policies, investigation workflow, and organizational responsibilities are all explicit.",
      content: null,
      explanation:
        "Production is not simply an increase in the number of deployed Agents. Before launch, organizational conditions including data retention, access authorization, event escalation, evidence export, investigation roles, operations, maintenance, and version management must be confirmed.",
      comparedTo: [
        "Deployment scope and data sources have been confirmed",
        "Retention periods and capacity policies have been approved",
        "Event-trigger and escalation workflows have been validated",
        "Evidence Pack™ review and export permissions are explicit",
        "OEM–sensor manufacturer collaboration methods have been established",
        "Responsibilities for operations, upgrades, and incident handling have been assigned",
        "Pilot and canary-validation results have been reviewed",
      ],
      warning:
        "Atlas Production deployment must preserve customer data ownership, human root-cause judgment, and organizational authorization boundaries. Expanding the deployment does not change these foundational principles.",
      href: "/technology/production-readiness",
    },

    {
      id: "deployment-documentation",
      title: "Complete Deployment Documentation",
      description:
        "View the complete instructions for robot OEM deployment, sensor manufacturer deployment, and the path from Pilot to Production.",
      content: null,
      explanation:
        "The deployment documentation provides more detailed descriptions of roles, deployment workflows, validation methods, and production operations.",
      link: {
        text: "View the Complete Deployment Guide →",
        href: "https://sensordeck.github.io/atlas-docs-cn/category/部署指南",
      },
      href: "/technology/deployment-documentation",
    },
  ],

  cta: {
    title: "Start with Your Runtime Environment",
    description:
      "Tell us about your robotics platform, primary sensors, deployment environment, and current investigation workflow. Together, we will confirm the appropriate Atlas deployment boundary and Pilot scope.",
    primaryButton: {
      text: "Read the Deployment Guide",
      href: "https://sensordeck.github.io/atlas-docs-cn/category/部署指南",
    },
    secondaryButton: {
      text: "Request a Demo",
      href: "/contact",
    },
  },
} satisfies TechnologyContent;
