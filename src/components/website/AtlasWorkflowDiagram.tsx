"use client";

export default function AtlasWorkflowDiagram() {
  const steps = [
    "传感器",
    "Atlas Agent",
    "Evidence Pack",
    "Historical RGA",
    "调查",
    "IR + LL",
    "Assist Vault",
    "未来复用",
  ];

  return (
    <div className="border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Atlas 工作流程
        </p>
        <span className="size-2 rounded-full bg-atlas-blue" />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {steps.map((step, index) => (
          <div key={step}>
            <div className="flex items-center gap-4">
              <span className="flex size-7 shrink-0 items-center justify-center border border-atlas-blue/20 bg-surface-blue font-mono text-xs font-semibold text-atlas-blue">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-ink">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="ml-3.5 mt-2 h-6 w-px bg-border" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-4">
        <p className="text-xs leading-6 text-muted">
          每一次调查从证据开始。
          <br />
          下一次调查，从历史开始。
        </p>
      </div>
    </div>
  );
}
