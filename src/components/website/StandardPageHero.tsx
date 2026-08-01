import type { ReactNode } from "react";

type StandardPageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  graphic?: ReactNode;
};

export default function StandardPageHero({
  eyebrow,
  title,
  subtitle,
  description,
  graphic,
}: StandardPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      {graphic}

      <div className="relative z-10 mx-auto flex min-h-[480px] w-full max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="heading-eyebrow font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue sm:text-eyebrow-md lg:text-eyebrow-lg">
            {eyebrow}
          </p>

          <h1 className="heading-title mt-5 max-w-4xl font-sans text-page-title font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="heading-description mt-6 max-w-3xl text-body-lg leading-9 text-ink sm:text-body-lg-md">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="heading-description mt-6 max-w-3xl text-body-lg leading-9 text-muted sm:text-body-lg-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
