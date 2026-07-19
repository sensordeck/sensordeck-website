"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Wrapper component that adds scroll-triggered fade-in animation
 * Automatically reveals content when scrolling into view
 */
export function AnimatedSection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={`transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}
