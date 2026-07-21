import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-atlas-blue bg-atlas-blue text-white " +
    "hover:border-atlas-blue-dark hover:bg-atlas-blue-dark " +
    "hover:shadow-[0_4px_12px_rgba(21,94,239,0.3)] " +
    "active:scale-[0.98] " +
    "[transition-property:border-color,box-shadow,background-color,color,transform] " +
    "[transition-duration:0.25s,0.1s,0.25s,0.25s,0.25s] " +
    "[transition-timing-function:ease-in-out] " +
    "active:[transition-duration:0.1s]",
  secondary:
    "border-border bg-white text-ink " +
    "hover:border-atlas-blue hover:text-atlas-blue hover:bg-surface-blue " +
    "hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] " +
    "active:scale-[0.98] " +
    "[transition-property:border-color,box-shadow,background-color,color,transform] " +
    "[transition-duration:0.25s,0.1s,0.25s,0.25s,0.25s] " +
    "[transition-timing-function:ease-in-out] " +
    "active:[transition-duration:0.1s]",
  outline:
    "border-ink/20 bg-transparent text-ink " +
    "hover:border-atlas-blue hover:bg-atlas-blue/5 hover:text-atlas-blue " +
    "hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] " +
    "active:scale-[0.98] " +
    "[transition-property:border-color,box-shadow,background-color,color,transform] " +
    "[transition-duration:0.25s,0.1s,0.25s,0.25s,0.25s] " +
    "[transition-timing-function:ease-in-out] " +
    "active:[transition-duration:0.1s]",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-center text-sm font-semibold leading-5 whitespace-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
