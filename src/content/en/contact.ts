export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Start with the runtime boundary",
    description:
      "Tell us what you are building, observing, or investigating. We will help identify the most useful next conversation for your team.",
  },
  options: [
    {
      eyebrow: "Architecture Review",
      title: "Discuss your runtime boundary",
      description:
        "Bring one sensor, device fleet, or investigation workflow. We can map the evidence boundary and define a focused pilot scope.",
    },
    {
      eyebrow: "Technical Materials",
      title: "Get the whitepapers",
      description:
        "Request technical material covering runtime sensor governance, runtime investigation, and the Atlas evidence model.",
    },
    {
      eyebrow: "Demo Access",
      title: "See Atlas in a realistic scenario",
      description:
        "Walk through a representative sensor investigation to see how runtime evidence and organizational memory are presented.",
    },
  ],
  optionAction: "Contact the team",
  formIntro: {
    eyebrow: "Request Demo",
    title: "Add enough context to make the first conversation useful",
    description:
      "Submitting the form opens an email draft addressed to the SensorDeck team. We do not use a custom backend or automated qualification.",
    note:
      "We focus on evidence ownership, explicit engineering boundaries, and systems that remain reviewable under pressure.",
  },
  fields: {
    name: { label: "Name", placeholder: "Enter your name" },
    email: { label: "Work email", placeholder: "Enter your work email" },
    company: { label: "Company", placeholder: "Enter your company name" },
    role: { label: "Role", placeholder: "Enter your role" },
    organizationType: {
      label: "Organization type",
      placeholder: "Select one",
      options: ["Robot OEM", "Sensor Manufacturer", "System Integrator", "Other"],
    },
    fleetScale: {
      label: "Fleet or product scale",
      placeholder: "For example: 2,000 deployed devices",
    },
    primaryInterest: {
      label: "Primary interest",
      placeholder: "Select one",
      options: ["Runtime Sensor Governance", "Runtime Investigation", "Technical Whitepapers", "Architecture Review"],
    },
    message: {
      label: "Message",
      placeholder: "What runtime, sensor, or investigation problem are you solving?",
    },
  },
  submit: "Open email draft",
  emailSubject: "SensorDeck contact request",
} as const;

export type ContactContent = typeof contactContent;
