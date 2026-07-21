"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

interface SharedObserver {
  callbacks: Map<Element, ObserverCallback>;
  observer: IntersectionObserver;
}

const sharedObservers = new Map<string, SharedObserver>();

function getObserverKey(threshold: number, rootMargin: string) {
  return `${threshold}:${rootMargin}`;
}

function observeElement(
  element: Element,
  threshold: number,
  rootMargin: string,
  callback: ObserverCallback
) {
  const key = getObserverKey(threshold, rootMargin);
  let sharedObserver = sharedObservers.get(key);

  if (!sharedObserver) {
    const callbacks = new Map<Element, ObserverCallback>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          callbacks.get(entry.target)?.(entry);
        }
      },
      { threshold, rootMargin }
    );

    sharedObserver = { callbacks, observer };
    sharedObservers.set(key, sharedObserver);
  }

  sharedObserver.callbacks.set(element, callback);
  sharedObserver.observer.observe(element);

  return () => {
    const currentObserver = sharedObservers.get(key);
    if (!currentObserver) return;

    currentObserver.observer.unobserve(element);
    currentObserver.callbacks.delete(element);

    if (currentObserver.callbacks.size === 0) {
      currentObserver.observer.disconnect();
      sharedObservers.delete(key);
    }
  };
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      prefersReducedMotion ||
      typeof window.IntersectionObserver === "undefined"
    ) {
      element.classList.add("in-view");
      return;
    }

    element.classList.add("will-animate");

    let stopObserving = () => {};
    stopObserving = observeElement(
      element,
      threshold,
      rootMargin,
      (entry) => {
        if (!entry.isIntersecting) return;

        element.classList.add("in-view");
        stopObserving();
      }
    );

    return stopObserving;
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`animated-section opacity-100 translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
