export const atlasLifecycle = [
  "Runtime Dataset", "Evidence Pack (EP)", "REF", "Historical RGA",
  "Investigation Context", "Investigation Tier Candidate",
  "Sensor Engagement Pack (EGP)", "Investigation Result (IR) / Lessons Learned (LL)",
  "OEM Closure", "Assist Candidate / Assist Vault",
] as const;

export const demoScenario = {
  customer: "Demo Robotics",
  robot: "DEMO-T300-0001-XXXX",
  event: "导航偏差 / LiDAR link interruption",
  ref: "REF-DEMO-2030-0001",
  dataset: "RDS-DEMO-2030-0001",
  evidencePack: "EP-C03",
  windowPolicy: "WINPOL-DEFAULT-001",
  engagementPack: "EGP-DEMO-SENSOR-2030-0001",
  sensorFae: "Alice Demo / Example Sensor Corp",
} as const;

export const governanceBoundary =
  "Atlas 不自动确认根因、责任、结案或写入知识库";
