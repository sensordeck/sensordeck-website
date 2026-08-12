export type DemoLanguage = "en" | "zh";

const lifecycle = {
  en: ["Runtime Dataset", "Evidence Pack (EP)", "REF", "Historical RGA", "Investigation Context", "Investigation Tier Candidate", "Sensor Engagement Pack (EGP)", "Investigation Result (IR) / Lessons Learned (LL)", "OEM Closure", "Assist Candidate / Assist Vault"],
  zh: ["运行时数据集", "证据包（EP）", "REF", "历史 RGA", "调查上下文", "调查层级候选", "传感器协作包（EGP）", "调查结果（IR）/ 经验教训（LL）", "OEM 结案", "辅助候选 / 辅助知识库"],
} as const;

const scenario = {
  en: { customer: "Demo Robotics", robot: "DEMO-T300-0001-XXXX", event: "Navigation deviation / LiDAR link interruption", ref: "REF-DEMO-2030-0001", dataset: "RDS-DEMO-2030-0001", evidencePack: "EP-C03", windowPolicy: "WINPOL-DEFAULT-001", engagementPack: "EGP-DEMO-SENSOR-2030-0001", sensorFae: "Alice Demo / Example Sensor Corp" },
  zh: { customer: "Demo Robotics", robot: "DEMO-T300-0001-XXXX", event: "导航偏差 / LiDAR 链路中断", ref: "REF-DEMO-2030-0001", dataset: "RDS-DEMO-2030-0001", evidencePack: "EP-C03", windowPolicy: "WINPOL-DEFAULT-001", engagementPack: "EGP-DEMO-SENSOR-2030-0001", sensorFae: "Alice Demo / 示例传感器公司" },
} as const;

export const demoCopy = {
  en: { sanitized: "SANITIZED DEMO DATA", boundaryBanner: "Human-governed investigation", governanceBoundary: "Atlas does not automatically confirm root cause, responsibility, closure, or knowledge-base entry", back: "← Back to demos", owner: "Owner", boundary: "Boundary", customer: "Customer", dataset: "Runtime Dataset", evidencePack: "Evidence Pack", status: "Status", draft: "Draft", review: "Pending human review" },
  zh: { sanitized: "已脱敏演示数据", boundaryBanner: "人工治理的调查", governanceBoundary: "Atlas 不自动确认根因、责任、结案或写入知识库", back: "← 返回演示页", owner: "负责人", boundary: "边界", customer: "客户", dataset: "运行时数据集", evidencePack: "证据包", status: "状态", draft: "草稿", review: "等待人工审查" },
} as const;

export function getDemoLocale(lang: string) {
  const locale: DemoLanguage = lang === "en" ? "en" : "zh";
  return { lang: locale, lifecycle: lifecycle[locale], scenario: scenario[locale], copy: demoCopy[locale] };
}

// English aliases retained for existing Demo integrations.
export const atlasLifecycle = lifecycle.en;
export const demoScenario = scenario.en;
export const governanceBoundary = demoCopy.en.governanceBoundary;
