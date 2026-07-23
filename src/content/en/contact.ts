import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "Contact Us",
    title: "Start With Your Runtime Boundary",
    description:
      "Every robotics company has different runtime boundaries, investigation processes, and organizational goals. In our first conversation, we want to understand your real-world scenario and evaluate together whether Atlas is right for your team.\n\nWhether you are developing a new robotics platform, improving an existing product, or establishing a runtime investigation system, we invite you to describe your current operating environment, engineering challenges, and organizational needs so our first conversation can focus directly on real problems.",
  },

  options: [
    {
      eyebrow: "Architecture Review",
      title: "Discuss Your Runtime Boundary",
      description:
        "Bring one sensor, device fleet, or investigation workflow. We can map the evidence boundary and define a focused pilot scope.",
    },
    {
      eyebrow: "Technical Materials",
      title: "Get Technical Documentation",
      description:
        "Learn about Atlas system architecture, runtime governance model, deployment process, and product capabilities.",
    },
    {
      eyebrow: "Product Demo",
      title: "See Atlas in a Real-World Scenario",
      description:
        "Walk through a representative runtime investigation process to see how evidence retention, incident windows, and organizational memory are created.",
    },
  ],

  optionAction: "Contact the Team",

  formIntro: {
    eyebrow: "Schedule a Product Demo",
    title: "Share Your Runtime Scenario",
    description:
      "Please briefly describe your robotics platform, primary sensors, deployment environment, and the runtime issue you currently want to solve. We will use this information to prepare a more relevant discussion and make the first conversation more efficient and focused.\n\nSubmitting the form opens an email draft addressed to the SensorDeck team. You can review the content before sending it.",
    note:
      "We focus on runtime governance, evidence boundaries, investigation processes, and collaboration between OEMs and sensor manufacturers. Atlas does not replace your engineering team; it helps the team build sustainable, reusable runtime investigation capabilities.",
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
      label: "Company Name",
      placeholder: "Enter your company name",
    },

    role: {
      label: "Role",
      placeholder: "Enter your role",
    },

    organizationType: {
      label: "Organization Type",
      placeholder: "Select",
      options: [
        "Robot OEM",
        "Sensor Manufacturer",
        "System Integrator",
        "Other",
      ],
    },

    fleetScale: {
      label: "Fleet / Product Scale",
      placeholder: "For example: 2,000 deployed devices",
    },

    primaryInterest: {
      label: "Primary Area of Interest",
      placeholder: "Select",
      options: [
        "Atlas Runtime Investigation™",
        "Atlas Runtime Sensor Governance™",
        "Deployment and Architecture Review",
        "Technical Documentation",
      ],
    },

    message: {
      label: "Runtime Scenario",
      placeholder:
        "Describe your robotics platform, primary sensors, deployment environment, and the runtime issue you currently want to solve.",
    },
  },

  submit: "Open Email Draft",

  emailSubject: "SensorDeck Product Demo and Technical Discussion Request",

  privacyNotice: "By submitting this form, you agree to our",

  privacyPolicyLink: "Privacy Policy",

  privacyNoticeSuffix: "for processing your personal information.",

  dataProtectionNote:
    "Please do not include passwords, keys, customer data, or other sensitive information in your message.",

  salesTitle: "Want to Learn About Atlas First?",

  salesNote:
    "You can first read the Atlas Chinese deployment guide to learn about the system architecture, installation and deployment process, runtime governance model, and product capabilities.",

  locations: {
    title: "Global Offices",

    offices: [
      {
        city: "Greater Bay Area · China",
        name: "Huizhou Shenshi Sensor Technology Co., Ltd.",
        email: "sales.china@sensordeck.tech",
        address: "Huizhou, Guangdong, China",
      },
      {
        city: "California · United States",
        name: "SensorDeck Inc.",
        email: "contact@sensordeck.tech",
        address:
          "555 Pierce St, Ste 842, Albany, CA 94706, United States",
      },
    ],
  },
} satisfies ContactContent;
