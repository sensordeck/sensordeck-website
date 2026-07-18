import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-atlas-blue bg-atlas-blue text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark",
  secondary:
    "border-border bg-white text-ink hover:border-atlas-blue hover:text-atlas-blue",
  outline:
    "border-ink/20 bg-transparent text-ink hover:border-atlas-blue hover:bg-atlas-blue/5 hover:text-atlas-blue",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
