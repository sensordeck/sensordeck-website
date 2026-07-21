import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={`border-b border-border ${className}`} {...props}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-18">
        {children}
      </div>
    </section>
  );
}
