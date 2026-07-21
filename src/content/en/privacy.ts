export const privacyContent = {
  hero: {
    eyebrow: "Data Privacy",
    title: "Privacy Policy",
    description: "SensorDeck is committed to protecting your personal information and privacy rights.",
  },
  sections: [
    {
      title: "Data Controller",
      content:
        "SensorDeck is the controller of your personal data. For privacy inquiries, contact privacy@sensordeck.com.",
    },
    {
      title: "Information We Collect",
      content:
        "When you contact us through our form, we collect: name, work email, company name, job title, organization type, fleet size, and message content you provide.",
    },
    {
      title: "Purpose of Use",
      content:
        "We use your information to: respond to inquiries, provide product demos, technical support, and sales communications.",
    },
    {
      title: "Legal Basis",
      content: "We process your data based on legitimate business interests, or where applicable, your consent.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your personal information for no longer than necessary for business purposes or legal requirements, typically 24 months.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, delete your personal data, or restrict its processing. Contact privacy@sensordeck.com to exercise these rights.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access or disclosure.",
    },
  ],
} as const;

export type PrivacyContent = typeof privacyContent;
