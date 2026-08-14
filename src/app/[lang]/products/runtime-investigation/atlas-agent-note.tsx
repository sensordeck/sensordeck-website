export default function AtlasAgentRetentionNote({ lang }: { lang: string }) {
  return (
    <p className="mt-4 text-label leading-7 text-muted md:text-body">
      {lang === "zh"
        ? "Atlas Agent 持续保留低容量 Runtime Metadata；高带宽 Raw Data 采用有界滚动缓存，并在事件发生时按需冻结必要证据窗口。"
        : "Atlas Agent persistently retains low-volume Runtime Metadata; high-bandwidth Raw Data stays in bounded rolling buffers, with required evidence windows locked when events occur."}
    </p>
  );
}
