import type { TechnologyContent } from "@/lib/content-types";

export const technologyContent = {
  hero: {
    title: "Atlas Deployment",
    subtitle:
      "Atlas is deployed within customer-controlled runtime environments, integrating with existing robot platforms, runtime data sources, and investigation workflows. It preserves customer ownership of runtime data, retention policies, and evidence throughout the investigation lifecycle.",
  },

  sections: [
    {
      id: "deployment-principles",
      title: "Deployment Principles",
      description:
        "Atlas integrates with the customer's existing robotics environment as runtime-governance infrastructure without replacing robot control systems, enterprise applications, or existing observability tools.",
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
        "Atlas can be deployed on robot host controllers, edge-computing nodes, or customer investigation servers, and connects to existing runtime data sources through Runtime Surface Adapters. Customers own the raw data, define retention scope and duration, and authorize the generation and export of investigation evidence.",
      comparedTo: [
        "Does not replace the existing core robotics architecture",
        "Does not require changes to robot application logic",
        "Does not require all raw data to be uploaded to a public cloud",
        "Does not change existing engineering responsibilities or approval workflows",
        "Does not automatically confirm root cause or assign responsibility",
      ],
      href: "/technology/deployment-principles",
    },

    {
      id: "oem-deployment",
      title: "Robot OEM Deployment",
      description:
        "Deployment for robot OEMs provides runtime-data retention, Evidence Pack™ generation, investigation workflows, and reusable organizational knowledge.",
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
        "Atlas Agent™ continuously observes authorized runtime signals within the OEM-controlled environment. When a runtime event occurs, Atlas retrieves relevant data from before, during, and after the event from Runtime Dataset™, creates a bounded, reviewable Evidence Pack™, and supports investigation across Tier 1, Tier 2 / Tier 3, OEM engineering, and sensor FAE teams.",
      surfaces: [
        "Robot Host Controller",
        "Edge-Computing Node",
        "Linux Runtime",
        "ROS / ROS 2",
        "Device and Driver State",
        "USB / Ethernet / CAN",
        "Raw Sensor Output",
        "Customer Investigation Server",
        "Existing Observability Systems",
      ],
      href: "/technology/oem-deployment",
    },

    {
      id: "oem-deployment-scope",
      title: "OEM Deployment Scope",
      description:
        "OEM deployment scope is defined jointly based on the robot platform, sensor configuration, runtime environment, and investigation objectives.",
      content: null,
      explanation:
        "Atlas does not collect all data in the robotics environment by default. Before deployment, both parties confirm the runtime boundary, authorized data sources, retention period, event-trigger conditions, investigation roles, and evidence-export method, then document an explicit deployment scope.",
      concepts: [
        {
          term: "Runtime Boundary",
          definition:
            "Define the sensors, interfaces, Linux runtime, device states, and ROS topics that Atlas will observe.",
        },
        {
          term: "Data Sources",
          definition:
            "Confirm the existing logs, device interfaces, ROS topics, driver states, and other accessible runtime sources.",
        },
        {
          term: "Retention Policy",
          definition:
            "The customer defines data-retention scope, duration, capacity, and deletion rules.",
        },
        {
          term: "Event Rules",
          definition:
            "Define which runtime anomalies should be flagged, preserved, and routed into the investigation workflow.",
        },
        {
          term: "Evidence Export",
          definition:
            "Define the generation scope, authorized recipients, and export method for Evidence Packs™.",
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
        "Deployment for sensor manufacturers establishes governance around product runtime performance, customer investigations, and reuse of historical cases.",
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
        "Sensor manufacturers can deploy Atlas in laboratories, technical-support environments, or customer-investigation environments. Through Runtime Profiles™, Sensor Engagement Packs™, and historical investigation assets, sensor teams can understand customer runtime conditions more quickly and collaborate with OEMs within explicit data and responsibility boundaries.",
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
        "Sensor Engagement Pack™ transfers only the runtime information required for a defined investigation between an OEM and a sensor manufacturer.",
      content: `OEM Investigation Environment
  ↓
Evidence Pack™
  ↓
Sensor Engagement Pack™
  ↓
Sensor FAE Investigation
  ↓
Investigation Result + Lessons Learned
  ↓
OEM Closure and Organizational Memory`,
      explanation:
        "The collaboration package contains only information relevant to the sensor-investigation boundary and does not require the OEM to provide all robot runtime data. The sensor manufacturer receives explicit event context and evidence, while the OEM's product architecture, customer information, and operational data remain protected.",
      comparedTo: [
        "Transfer only information relevant to the current sensor investigation",
        "Preserve the event timeline and runtime-environment context",
        "Reduce unnecessary exposure of OEM operational information",
        "Enable sensor FAEs to produce investigation results and Lessons Learned",
        "Allow both parties to preserve their respective data and responsibility boundaries",
      ],
      href: "/technology/sensor-engagement-boundary",
    },

    {
      id: "pilot-to-production",
      title: "From Pilot to Production",
      description:
        "Atlas follows a phased deployment path, beginning with one defined runtime scenario and expanding into production after the deployment chain has been validated.",
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
        "Deployment does not begin across every device, data source, and team. The initial pilot should focus on one robot platform, sensor boundary, or representative investigation scenario to validate data integration, event slicing, Evidence Pack™ generation, and the investigation workflow. Once validated, deployment can expand gradually across additional devices, scenarios, and teams.",
      href: "/technology/pilot-to-production",
    },

    {
      id: "canary-validation",
      title: "Canary Validation",
      description:
        "Before a pilot enters formal operation, the complete deployment chain is validated through a controlled, representative runtime event.",
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
        "Canary validation confirms that Atlas Agent™, data sources, time boundaries, retention policies, Evidence Pack™, and the investigation workflow operate together. The objective is not to simulate every possible robot incident, but to prove that the deployment chain is observable, reviewable, and reusable within the defined scope.",
      concepts: [
        {
          term: "Data-Ingestion Validation",
          definition:
            "Confirm that authorized runtime signals continuously enter Runtime Dataset™.",
        },
        {
          term: "Event-Boundary Validation",
          definition:
            "Confirm that the required data from before, during, and after an event is retained and sliced correctly.",
        },
        {
          term: "Evidence-Generation Validation",
          definition:
            "Confirm that Evidence Pack™ can be generated within the defined scope and reviewed by the appropriate teams.",
        },
        {
          term: "Investigation-Workflow Validation",
          definition:
            "Confirm that events are routed to the correct investigation roles and collaboration path.",
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
        "Atlas is ready for production once the deployment boundary, runtime policies, investigation workflow, and organizational responsibilities are explicit and validated.",
      content: null,
      explanation:
        "Production readiness is not determined only by the number of deployed Atlas Agents. Before launch, the customer must confirm data retention, access control, event escalation, evidence export, investigation roles, operations, maintenance, and version-management responsibilities.",
      comparedTo: [
        "Deployment scope and authorized data sources have been confirmed",
        "Retention periods and capacity policies have been approved",
        "Event-trigger and escalation workflows have been validated",
        "Evidence Pack™ review and export permissions are explicit",
        "OEM–sensor manufacturer collaboration methods have been established",
        "Responsibilities for operations, upgrades, and incident handling have been assigned",
        "Pilot and canary-validation results have been reviewed",
      ],
      warning:
        "Production deployment must preserve customer data ownership, human root-cause judgment, and organizational authorization boundaries. Expanding Atlas does not change these foundational principles.",
      href: "/technology/production-readiness",
    },

    {
      id: "deployment-documentation",
      title: "Complete Deployment Documentation",
      description:
        "Review detailed guidance for robot OEM deployment, sensor manufacturer deployment, validation, and the path from pilot to production.",
      content: null,
      explanation:
        "The deployment documentation provides detailed descriptions of roles, deployment workflows, validation methods, and production operations.",
      link: {
        text: "View the Complete Deployment Guide →",
        href: "https://sensordeck.github.io/atlas-docs-cn/category/部署指南",
      },
      href: "/technology/deployment-documentation",
    },
  ],

  cta: {
    title: "Start With Your Runtime Environment",
    description:
      "Tell us about your robot platform, primary sensors, deployment environment, and current investigation workflow. We will help define the appropriate Atlas deployment boundary and pilot scope for your environment.",
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
