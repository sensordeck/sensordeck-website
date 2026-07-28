import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Start with a Real Runtime Scenario",
    description:
      "If your robots are already operating in real-world deployments, Atlas can start with one platform, one class of runtime incident, and one operations or engineering team.\n\nWe do not ask you to replace your existing cloud platform, fleet manager, alerting system, service ticketing, or engineering workflows. The first conversation is about understanding how your team handles field incidents today, retains runtime data, conducts engineering investigations, and reuses what has already been learned.",
  },

  options: [
    {
      eyebrow: "DESIGN PARTNER",
      title: "Discuss a Real Investigation Scenario",
      description:
        "Start with one robot platform, one class of real runtime incident, and one operations or engineering team to validate how Atlas can improve the existing investigation workflow.",
    },
    {
      eyebrow: "ARCHITECTURE REVIEW",
      title: "Review Your Runtime Boundary",
      description:
        "Map the investigation boundary across robots, sensors, Linux Runtime, ROS, networks, and existing operations systems to define an appropriate Atlas integration scope.",
    },
    {
      eyebrow: "PRODUCT & TECHNOLOGY",
      title: "See How Atlas Works",
      description:
        "Explore how Runtime Evidence, Evidence Pack™, Historical Recall, investigation collaboration, and organizational memory form a reusable investigation loop.",
    },
  ],

  optionAction: "Start a Conversation",

  formIntro: {
    eyebrow: "PROJECT DISCUSSION",
    title: "Tell Us About a Runtime Problem You Are Facing",
    description:
      "Briefly describe your robot platform, deployment environment, and current investigation workflow. For a Design Partner project, we can start with one real, recurring, or difficult-to-reproduce runtime incident.\n\nSubmitting this form opens a draft in your default email application. You can review the message before sending it to the SensorDeck team.",
    note:
      "Atlas does not replace your cloud platform, fleet manager, service ticketing, or engineering teams, and it does not automatically determine root cause or assign responsibility. The first goal is to validate whether your team can reach investigation evidence faster, reduce repeated investigation work, and turn completed investigations into reusable organizational memory.",
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
      label: "Phone",
      placeholder: "Enter your phone number",
    },

    wechat: {
      label: "WeChat (Optional)",
      placeholder: "Enter your WeChat ID",
    },

    company: {
      label: "Company",
      placeholder: "Enter your company name",
    },

    role: {
      label: "Role",
      placeholder: "Enter your role",
    },

    organizationType: {
      label: "Organization Type",
      placeholder: "Select one",
      options: [
        "Robot OEM",
        "Sensor Manufacturer",
        "System Integrator",
        "Robot Operator / End User",
        "Other",
      ],
    },

    fleetScale: {
      label: "Robot Platform / Deployment Scale",
      placeholder: "e.g. T10 / approximately 2,000 robots deployed",
    },

    primaryInterest: {
      label: "What Would You Like to Discuss?",
      placeholder: "Select one",
      options: [
        "Atlas Design Partner Program",
        "Atlas Runtime Investigation™",
        "Atlas Runtime Sensor Governance™",
        "Deployment & Architecture Review",
        "System Integration",
        "Product Demo & Technical Discussion",
      ],
    },

    message: {
      label: "Runtime Scenario / Investigation Challenge",
      placeholder:
        "For example: intermittent field incidents are difficult to reproduce; similar incidents are repeatedly investigated across customers; Robot, Fleet Manager, network, and facility data are difficult to investigate on one timeline; or previous investigation knowledge is difficult to reuse in future incidents.",
    },
  },

  submit: "Open Project Email Draft",

  emailSubject: "SensorDeck Atlas Project Discussion / Design Partner",

  privacyNotice:
    "By submitting this form, you agree to our",

  privacyPolicyLink: "Privacy Policy",

  privacyNoticeSuffix:
    "regarding the processing of your personal information.",

  dataProtectionNote:
    "Please do not include passwords, credentials, customer data, or other sensitive information in your message.",

  salesTitle: "Want to See How Atlas Fits into Your Existing Stack?",

  salesNote:
    "Review the Atlas deployment guide to understand the read-only Agent, runtime boundaries, Evidence Pack™, investigation workflow, and the path from Pilot to Production.",

  locations: {
    title: "Global Offices",

    offices: [
      {
        city: "Greater Bay Area · China",
        name: "Huizhou Shenshi Sensor Technology Co., Ltd.",
        email: "sales@sensordeck.tech",
        address: "Huizhou, Guangdong, China",
      },
      {
        city: "California · United States",
        name: "SensorDeck Inc.",
        email: "sales@sensordeck.tech",
        address:
          "555 Pierce St, Ste 842, Albany, CA 94706, United States",
      },
    ],

    assistVault: {
      title: "Atlas Non-identifiable Assist Vault™",
      description: "Cross-organization runtime investigation knowledge exchange",
      email: "assist@sensordeck.tech",
    },
  },
} satisfies ContactContent;
