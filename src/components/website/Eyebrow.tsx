export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue">
      {children}
    </p>
  );
}
