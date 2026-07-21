export const requestDemoContent = {
  hero: {
    eyebrow: "Request Demo",
    title: "See Atlas in a realistic scenario",
    description:
      "Share a few details and our team will contact you to show how Atlas provides continuous, traceable evidence for runtime investigations.",
  },
  fields: {
    name: { label: "Contact name", placeholder: "Enter your name" },
    wechat: { label: "WeChat", placeholder: "Optional for international contacts", required: false },
    phone: { label: "Phone", placeholder: "Optional phone number", required: false },
    email: { label: "Email", placeholder: "Enter your work email" },
    company: { label: "Company", placeholder: "Enter your company name" },
    businessType: {
      label: "Business type",
      placeholder: "Select a business type",
      options: ["Robot OEM", "Sensor Manufacturer"],
    },
  },
  submit: "Submit request",
  emailSubject: "Atlas demo request",
  salesTitle: "Our sales team",
  salesNote: "SensorDeck will update sales contact and team information.",
  locations: {
    title: "Global Locations",
    offices: [
      {
        city: "Shenzhen, China",
        name: "SensorDeck China",
        email: "sales.china@sensordeck.com",
        address: "Nanshan District, Shenzhen, Guangdong, China",
      },
      {
        city: "California, USA",
        name: "SensorDeck USA",
        email: "sales.usa@sensordeck.com",
        address: "California, United States",
      },
    ],
  },
} as const;

export type RequestDemoContent = typeof requestDemoContent;
