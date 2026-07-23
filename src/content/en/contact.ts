import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "Contact SensorDeck",
    title: "Start With Your Runtime Boundary",
    description:
      "Every robotics platform has different runtime boundaries, operating environments, and investigation workflows. Our first conversation is focused on understanding your current system, the evidence available today, and the operational problem you need to solve.\n\nWhether you are developing a new robot platform, improving an existing product, or establishing a repeatable runtime investigation process, we will help you assess where Atlas can fit within your engineering environment.",
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
    title: "Share Your Runtime Scenario",
    description:
      "Briefly describe your robot platform, primary sensors, deployment environment, and the runtime issue or investigation challenge you want to address. We will use this information to prepare a focused and relevant discussion.\n\nSubmitting this form opens an email draft addressed to the SensorDeck team. You can review and edit the message before sending it.",
    note:
      "Atlas supports runtime evidence governance, investigation workflows, and collaboration between robot OEMs and sensor manufacturers. It supports engineering judgment without replacing your engineering teams or existing operational systems.",
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
    "Review the Atlas technical documentation to learn about the platform architecture, deployment approach, runtime governance model, and product capabilities. Current documentation is available in Chinese, with English documentation under development.",

  locations: {
    title: "Company Locations",

    offices: [
      {
        city: "Guangdong · China",
        name: "Huizhou Shenshi Sensor Technology Co., Ltd.",
        email: "sales.china@sensordeck.tech",
        address: "Huizhou, Guangdong, China",
      },
      {
        city: "California · United States",
        name: "SensorDeck Inc.",
        email: "contact@sensordeck.tech",
        address:
          "555 Pierce St, Suite 842, Albany, CA 94706, United States",
      },
    ],
  },
} satisfies ContactContent;
