import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "Contact SensorDeck",
    title: "In the field, things get real",
    description:
      "Whether you're building the platform, managing fleet operations, or troubleshooting on-site as a Sensor FAE, Atlas is designed to help you resolve incidents faster.\n\nIn our first conversation, we want to understand a few things: What environment does your robot operate in (warehouses, production lines, outdoor sites, or indoor spaces)? When something goes wrong, how long does it take your team to get to the root cause? And right now, are you pulling sensor data, system logs, and field context together manually, or do you already have a unified way to investigate?",
  },

  options: [
    {
      eyebrow: "Architecture Review",
      title: "Discuss Your Runtime Boundary",
      description:
        "Bring a robot platform, sensor configuration, fleet environment, or investigation workflow. We will map the relevant evidence boundary and define a focused evaluation scope.",
    },
    {
      eyebrow: "Technical Documentation",
      title: "Review the Atlas Architecture",
      description:
        "Explore the Atlas runtime governance model, platform architecture, deployment approach, and core product capabilities.",
    },
    {
      eyebrow: "Product Demonstration",
      title: "See Atlas in a Runtime Investigation",
      description:
        "Walk through a representative investigation to see how runtime evidence, event windows, cross-team collaboration, and reusable engineering knowledge are created.",
    },
  ],

  optionAction: "Contact the Team",

  formIntro: {
    eyebrow: "Request a Technical Discussion",
    title: "Briefly describe your scenario",
    description:
      "Tell us briefly about your platform, sensors, deployment environment, and your key operational challenges.\n\nAfter you submit, your default email app will open with a draft addressed to the SensorDeck team — feel free to review and edit before sending.",
    note:
      "What we care about: once your robot is in the field, how do you investigate incidents quickly and accurately — without leaving your field engineers to figure it out alone. Atlas doesn't replace your engineering or ops team; it helps your team build a repeatable investigation capability that stays with the team. New people can pick it up. New projects can use it.",
  },

  fields: {
    name: {
      label: "Name",
      placeholder: "Enter your name",
    },

    email: {
      label: "Work Email",
      placeholder: "Enter your work email",
    },

    phone: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },

    company: {
      label: "Company",
      placeholder: "Enter your company name",
    },

    role: {
      label: "Job Title",
      placeholder: "Enter your job title",
    },

    organizationType: {
      label: "Organization Type",
      placeholder: "Select an organization type",
      options: [
        "Robot OEM",
        "Sensor Manufacturer",
        "Robotics System Integrator",
        "Technology Partner",
        "Other",
      ],
    },

    fleetScale: {
      label: "Fleet or Product Scale",
      placeholder: "For example: 2,000 deployed robots",
    },

    primaryInterest: {
      label: "Primary Area of Interest",
      placeholder: "Select an area of interest",
      options: [
        "Atlas Runtime Investigation™",
        "Atlas Runtime Sensor Governance™",
        "Architecture and Deployment Review",
        "Product Demonstration",
        "Technical Documentation",
      ],
    },

    message: {
      label: "Runtime Scenario",
      placeholder:
        "Describe your robot platform, primary sensors, deployment environment, current investigation workflow, and the runtime issue you want to address.",
    },
  },

  submit: "Open Email Draft",

  emailSubject: "SensorDeck Technical Discussion Request",

  privacyNotice: "By submitting this form, you acknowledge our",

  privacyPolicyLink: "Privacy Policy",

  privacyNoticeSuffix:
    "and consent to the processing of the information you provide for the purpose of responding to your inquiry.",

  dataProtectionNote:
    "Do not include passwords, credentials, encryption keys, customer data, proprietary logs, or other confidential information in your message.",

  salesTitle: "Explore Atlas Before We Speak",

  salesNote:
    "Review the Atlas technical documentation to learn about the platform architecture, deployment approach, runtime governance model, and product capabilities.",

  locations: {
    title: "Company Locations",

    offices: [
      {
        city: "Guangdong · China",
        name: "Huizhou Shenshi Sensor Technology Co., Ltd.",
        email: "sales@sensordeck.tech",
        address: "Huizhou, Guangdong, China",
      },
      {
        city: "California · United States",
        name: "SensorDeck Inc.",
        email: "sales@sensordeck.tech",
        address:
          "555 Pierce St, Suite 842, Albany, CA 94706, United States",
      },
    ],

    assistVault: {
      title: "Atlas Non-identifiable Assist Vault™",
      description: "Cross-organization Runtime Investigation Knowledge Exchange",
      email: "assist@sensordeck.tech",
    },
  },
} satisfies ContactContent;
