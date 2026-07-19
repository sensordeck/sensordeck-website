import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-white p-6 card-enter ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
