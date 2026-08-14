import Section from "@/components/website/Section";

export default function BoundedRuntimeStorageSection({ lang }: { lang: string }) {
  const copy =
    lang === "zh"
      ? {
          eyebrow: "持续运行的数据边界",
          title: "持续观察，不等于持续保存海量原始数据",
          description:
            "Atlas 将长期运行所需的数据分成不同层级：低容量 Runtime Metadata 持续保留；高带宽 Raw Data 按 Surface 进入时间与容量双上限的滚动缓存；REF 或受控事件发生后，只冻结调查所需的证据窗口。这样 Atlas 可以长期运行，而不会把运行时治理变成无限增长的数据归档。",
          items: [
            ["长期保留 Runtime Metadata", "保存时间戳、Topic 存在性、消息速率、Timing、状态变化和调查索引等低容量运行时事实。"],
            ["Raw Data 有界滚动", "Camera、LiDAR 等高带宽原始数据按 Surface 使用时间上限与容量上限循环覆盖。"],
            ["事件窗口按需冻结", "REF 或受控事件触发后锁定必要的事件前后证据；未锁定 Raw Data 继续按策略滚动。"],
            ["客户定义保留策略", "Atlas 锁定安全边界；具体保留时长、容量预算、归档、导出与删除策略由客户在 PoC / 部署阶段确定。"],
          ],
          boundary:
            "Atlas 的目标不是长期保存完整 Raw Dataset，而是在可控磁盘预算内持续保留 Runtime Truth，并在真正需要调查时保住必要证据。",
        }
      : {
          eyebrow: "Continuous Runtime Data Boundary",
          title: "Continuous observation does not mean unlimited raw-data retention",
          description:
            "Atlas separates long-running runtime data into different layers: low-volume Runtime Metadata is retained persistently; high-bandwidth Raw Data stays in per-surface rolling buffers bounded by both time and capacity; and only the evidence windows required for a REF or governed event are locked. This keeps Atlas operationally sustainable instead of turning runtime investigation into an ever-growing raw-data archive.",
          items: [
            ["Persistent Runtime Metadata", "Retain low-volume runtime facts such as timestamps, topic presence, message rate, timing, state transitions, and investigation indexes."],
            ["Bounded Raw Data Rolling", "High-bandwidth Camera and LiDAR raw data rotates under per-surface time and capacity limits."],
            ["Event Evidence Lock", "When a REF or governed event occurs, Atlas locks only the required pre/post evidence window while non-event raw data continues to rotate."],
            ["Customer-Defined Retention Policy", "Atlas fixes the safety boundary; retention duration, storage budget, archive, export, and deletion policy are selected during PoC or deployment."],
          ],
          boundary:
            "Atlas is not designed to archive complete raw datasets indefinitely. It preserves Runtime Truth within a bounded storage budget and freezes the evidence required when investigation begins.",
        };

  return (
    <Section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {copy.title}
          </h2>
          <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {copy.items.map(([title, description]) => (
            <article key={title} className="border border-border bg-white p-6 md:p-7">
              <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md">
                {title}
              </h3>
              <p className="mt-3 text-label leading-7 text-muted md:text-body">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
          <p className="text-body font-semibold leading-8 text-ink md:text-body-lg">
            {copy.boundary}
          </p>
        </div>
      </div>
    </Section>
  );
}
