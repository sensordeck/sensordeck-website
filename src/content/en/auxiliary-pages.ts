import type { AuxiliaryPagesContent } from "@/lib/content-types";

export const auxiliaryPagesContent = {
  category: {
    eyebrow: "01 / Category Definition",
    imageAlt: "Category definition - Atlas Runtime Intelligence Infrastructure",
    ctaTitle: "Ready to learn more?",
    requestDemo: "Request Demo",
    backHome: "Back to Home",
  },
  problem: {
    eyebrow: "02 / Core Problem",
    imageAlt: "Core problem - every incident investigation starts from scratch",
    comparisonTitle: "How Atlas changes incident investigation",
    ctaTitle: "Ready to learn more?",
    requestDemo: "Request Demo",
    backHome: "Back to Home",
  },
  animationDemo: {
    title: "Card Animation Demo",
    subtitle: "Precisely timed animation reverse-engineered from video",
    parametersTitle: "Animation Parameters",
    parameters: [
      "Expand (fade out): starts at 2.0s and reaches full transparency at 5.0s",
      "Collapse (fade in): background at 0.1s, 1.0s delay, then staggered content fade-in over 1.4s",
      "Easing: power2.out for fade-out and power2.in for the fast fade-in",
      "No translation: the card stays fixed at the bottom center and animates opacity only",
    ],
    instruction: "Use the top-left control to play the animation",
    cardLines: ["Now Playing", "Bohemian Rhapsody", "Queen / A Night at the Opera"],
  },
} satisfies AuxiliaryPagesContent;
