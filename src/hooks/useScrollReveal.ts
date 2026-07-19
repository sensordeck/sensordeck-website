"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for revealing elements on scroll using IntersectionObserver
 *
 * @param options - Configuration options
 * @param options.threshold - Percentage of element visibility required to trigger (0-1)
 * @param options.rootMargin - Margin around the root element for early/late triggering
 * @param options.triggerOnce - Whether to trigger only once (default: true)
 *
 * @returns Object with ref to attach to element and isVisible state
 *
 * @example
 * ```tsx
 * function MySection() {
 *   const { ref, isVisible } = useScrollReveal();
 *
 *   return (
 *     <section
 *       ref={ref}
 *       className={cn(
 *         "opacity-0 translate-y-5 transition-all duration-400",
 *         isVisible && "opacity-100 translate-y-0"
 *       )}
 *     >
 *       Content
 *     </section>
 *   );
 * }
 * ```
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
