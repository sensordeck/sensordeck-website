import type { DemoContent } from "@/content/zh/demo";

export const demoContent = {
  index: {
    pages: [
      {
        id: "01",
        role: "Tier 1 Support",
        title: "Customer Portal",
        description:
          "Create a REF quickly and confirm Runtime Dataset availability through a four-step workflow: incident, robot, runtime evidence, and routing review.",
        href: "/demo/tier1",
        audience: "Frontline support teams",
      },
      {
        id: "02",
        role: "Tier 2 / Tier 3 Engineers",
        title: "Investigation Dashboard",
        description:
          "Reduce long Runtime Datasets into candidate Evidence Packs with timelines, five-window views, Historical RGA recall, and an EGP generator.",
        href: "/demo/investigation",
        audience: "OEM engineering teams",
      },
      {
        id: "03",
        role: "Sensor FAE",
        title: "Sensor FAE Workspace",
        description:
          "Validate OEM EGPs, review shared evidence context, recall Historical Sensor RGA, author IR and LL, and return a sensor response.",
        href: "/demo/sensor-fae",
        audience: "Sensor manufacturer engineers",
      },
      {
        id: "04",
        role: "CTO / VP Engineering",
        title: "Executive Dashboard",
        description:
          "An executive view of investigation efficiency, evidence coverage, organizational memory, supplier collaboration, and illustrative ROI.",
        href: "/demo/cto",
        audience: "Engineering leadership",
      },
    ],
    hero: {
      eyebrow: "Atlas Demo Interfaces",
      title: "Four Role-Based Demo Interfaces",
      description:
        "Follow one customer story across the roles Atlas supports during runtime investigation. Every demo uses the same static dataset.",
    },
    scenario: {
      eyebrow: "Demo Scenario",
      title: "Scenario: Demo Robotics Navigation Deviation Investigation",
      customer: "Customer",
      robotSerialNumber: "Robot Serial Number",
      refId: "REF ID",
      primaryEvidencePack: "Primary Evidence Pack",
      egpId: "EGP ID",
      sensorFae: "Sensor FAE",
    },
    viewDemo: "View Demo",
    notice: {
      label: "Note",
      description:
        "All demo data is illustrative. A deployed Atlas interface contains customer-specific runtime context and investigation assets that are not shown in the public demo.",
      metrics:
        "Business metrics, including engineering hours and cost savings, are illustrative estimates and do not represent actual customer results.",
    },
    cta: {
      eyebrow: "Request a Full Demo",
      title: "Need a Complete Atlas Demo?",
      description:
        "Contact us to arrange a tailored demonstration using your runtime scenarios and investigation workflow.",
      button: "Contact Us",
    },
  },
  data: {
    customerName: "Demo Robotics",
    ref: {
      creatorName: "Zhang Ming (Demo)",
      incidentType: "Navigation Deviation",
      severity: "Medium",
      description:
        "The robot deviated from its planned route during a delivery task. The customer reported an unexpected route change and a three-minute delay.",
      environmentLocation: "Example Technology Park, Building A",
      environmentConditions:
        "Indoor, normal lighting, moderate pedestrian traffic",
      assignedToName: "Li Hua (Test)",
      sensorFaeName: "Alice Demo",
      sensorFaeVendor: "Example Sensor Corp",
    },
    robot: {
      model: "T300 Demo Delivery Model",
      lidarManufacturer: "Example Sensor Corp",
      lidarModel: "Example LiDAR X32",
    },
    evidencePack: {
      surface: "USB Bus Timing",
      evidenceQuality: "Authoritative",
      affectedSurfaces: [
        "USB Bus Timing",
        "LiDAR Point Cloud Quality",
        "ROS2 Topic Timing",
      ],
      fiveWindowSummary: {
        pre_guard: "USB bus operating normally with 1.2 ms average latency.",
        baseline: "USB 3.0 connection stable at a 5 Gbps link speed.",
        deviation:
          "USB bus reset detected at 08:15:22.347; the connection was interrupted for 4.8 seconds.",
        recovery:
          "USB device re-enumeration completed and the LiDAR data stream resumed.",
        post_guard: "Connection remained stable with no further anomalies.",
      },
      upstream: "Power remained stable with no thermal event.",
      downstream:
        "The navigation module entered degraded mode and triggered route replanning.",
    },
    candidates: [
      {
        surface: "LiDAR Point Cloud Quality",
        description:
          "A significant point-cloud density drop was observed from 08:15:20 to 08:15:28.",
      },
      {
        surface: "ROS2 Topic Timing",
        description:
          "Localization topic publication frequency dropped from 20 Hz to 7 Hz.",
      },
      {
        surface: "USB Bus Timing",
        description: "A USB 3.0 bus reset was detected on the LiDAR interface.",
      },
      {
        surface: "Power Voltage",
        description: "A minor voltage fluctuation appeared on the 12 V rail.",
      },
    ],
    historicalRga: [
      {
        surface: "USB Bus Timing",
        pattern:
          "USB 3.0 bus resets during high-bandwidth sensor operation.",
        resolution:
          "The USB cable showed EMI sensitivity. The team replaced it with a shielded cable and added a ferrite core.",
        whyRetrieved:
          "Pattern match: USB bus reset, LiDAR data interruption, and navigation degradation.",
        environmentDifference:
          "Different robot and deployment location, but the same sensor model.",
      },
      {
        surface: "Power Voltage",
        pattern:
          "12 V rail fluctuations correlated with USB device resets.",
        resolution:
          "Aging power capacitors were replaced during preventive maintenance.",
        whyRetrieved:
          "Power fluctuations and USB resets showed temporal correlation.",
        environmentDifference:
          "The robot was older, deployed in 2024, with more runtime hours.",
      },
      {
        surface: "ROS2 Topic Timing",
        pattern:
          "Localization topic frequency dropped without a sensor hardware fault.",
        resolution:
          "CPU throttling occurred under high load. Cooling and task priorities were adjusted.",
        whyRetrieved:
          "Similar symptom, but on a different robot model.",
        environmentDifference:
          "Different model and compute platform: T200 versus T300.",
      },
    ],
  },
  cto: {
    roiModeLabels: {
      conservative: "Conservative",
      expected: "Expected",
      actual: "Actual",
    },
    dashboardTitle: "Executive Dashboard",
    dashboardRole: "Executive",
    timeRangeLabel: "Time Range:",
    daySuffix: " days",
    roiModelLabel: "ROI Model:",
    operationsEyebrow: "Investigation Operations",
    openRefsLabel: "Open REFs",
    openRefsTrend: "Down 18% vs. previous period",
    safetyRefsLabel: "Safety-Relevant REFs",
    safetyRefsNote: "Executive review required",
    firstEvidencePackLabel: "Median Time to First EP",
    firstEvidencePackTrend: "12 minutes below target",
    closureLabel: "Median Time to Closure",
    closureTrend: "Down 35% vs. manual process",
    memoryEyebrow: "Organizational Memory",
    memoryTitle: "Historical RGA Reuse and Supplier Collaboration",
    reuseRateLabel: "Historical RGA Reuse Rate",
    recallAfterRange: " days: recalled ",
    recallAfterCount: " cases",
    escalationRateLabel: "Sensor Escalation Rate",
    sentPrefix: "Sent ",
    sentSuffix: " EGPs",
    activeSuppliersLabel: "Active Sensor Suppliers",
    activeSuppliers:
      "Example Sensor Corp, Demo Vision Systems, Example Motion Labs, Demo LiDAR Co, Test Optics",
    roiEyebrow: "Illustrative Demo Data",
    roiTitle: "Illustrative ROI Estimate",
    hoursSavedLabel: "Engineering Hours Saved",
    basedOnPrefix: "Based on the ",
    modelSeparator: " model, ",
    windowSuffix: "-day window",
    manualAverageLabel: "Average manual investigation time:",
    atlasAverageLabel: "Average Atlas-assisted time:",
    savedPerRefLabel: "Time saved per REF:",
    costSavedLabel: "Estimated Cost Savings",
    hourlyCostLabel: "Engineer hourly cost:",
    totalHoursLabel: "Total hours saved:",
    totalCostLabel: "Cost saved:",
    roiNoticeLabel: "Illustrative demo data:",
    roiNotice:
      "Business metrics are illustrative estimates and do not represent actual customer results. Actual ROI depends on investigation complexity, team efficiency, and the operating environment.",
    coverageEyebrow: "Evidence Coverage",
    coverageTitle: "Candidate Surface Frequency",
    surfaces: [
      "USB Bus Timing",
      "ROS2 Topic Timing",
      "LiDAR Point Cloud Quality",
      "Power Voltage",
      "Network Packet Loss",
      "Storage I/O Timing",
    ],
    occurrenceSuffix: " occurrences",
    noteLabel: "Note:",
    coverageNote:
      "Candidate surface frequency shows the distribution of observed patterns. It is not a root-cause ranking or assignment of fault.",
    volumeEyebrow: "Investigation Volume",
    volumeTitle: "REF Volume and Status Trend",
    months: ["Apr", "May", "Jun", "Jul"],
    closedRefsLabel: "Closed REFs",
    openChartLabel: "Open:",
    closedChartLabel: "Closed:",
    actionsEyebrow: "Executive Actions",
    actionsTitle: "Reports and Reviews",
    exportReportTitle: "Export Governance Report",
    exportReportDescription:
      "Executive summary of investigation efficiency, evidence coverage, organizational memory, and supplier collaboration.",
    reviewSafetyTitle: "Review Safety-Relevant REFs",
    reviewSafetyPrefix: "There are ",
    reviewSafetySuffix: " safety-relevant REFs awaiting executive review.",
    demoLabel: "Demo",
    demoDescription:
      "The production CTO dashboard includes multi-customer and fleet filters, custom time ranges, exportable governance reports, and live SLA tracking.",
  },
  investigation: {
    confidenceLabels: {
      strong: "Strong Candidate",
      partial: "Partial Candidate",
      related: "Related Candidate",
    },
    windowLabels: {
      pre_guard: "Pre-Guard",
      baseline: "Baseline",
      deviation: "Deviation",
      recovery: "Recovery Observation",
      post_guard: "Post-Guard",
    },
    statusLabels: {
      baseline: "Baseline",
      normal: "Normal",
      anomaly_detected: "Anomaly Detected",
      timing_anomaly: "Timing Anomaly",
      bus_reset: "Bus Reset",
      returning_to_baseline: "Returning to Baseline",
      partial_recovery: "Partial Recovery",
      reconnection: "Reconnected",
      minor_fluctuation: "Minor Fluctuation",
      recovered: "Recovered",
      stable: "Stable",
    },
    dashboardTitle: "Investigation Dashboard",
    robotLabel: "Robot",
    statusLabel: "Status",
    investigatingLabel: "Under Investigation",
    generateEgp: "Generate EGP ->",
    metricsEyebrow: "Investigation KPIs",
    candidatesIdentifiedLabel: "Candidates Identified",
    primaryEvidencePackLabel: "Primary EP",
    historicalRecallLabel: "Historical Recall",
    timeToFirstEvidencePackLabel: "Time to First EP",
    timelineEyebrow: "Candidate Timeline",
    timelineTitle: "Observed Candidate Patterns",
    primaryCandidateLabel: "Primary Candidate",
    fiveWindowEyebrow: "Five-Window Evidence Model",
    historicalEyebrow: "Historical RGA Recall",
    historicalTitle: "Related Historical Patterns",
    relatedHistoricalLabel: "Related Historical Pattern",
    whyRetrievedLabel: "Why retrieved:",
    environmentDifferenceLabel: "Environment difference:",
    historicalResolutionLabel: "Historical resolution:",
    similarityLabel: "Similarity",
    noteLabel: "Note:",
    historicalNote:
      "Historical pattern similarity does not mean the root cause is the same. Environmental differences may require a different investigation path.",
    languageEyebrow: "Language Guardrails",
    languageTitle: "Investigation Language Standards",
    prohibitedLabel: "Prohibited Terms",
    prohibitedTerms: [
      "Root cause confirmed",
      "OEM fault",
      "Sensor fault",
      "Liability assigned",
    ],
    allowedLabel: "Allowed Terms",
    allowedTerms: [
      "Observed pattern",
      "Candidate surface",
      "Strong / partial candidate",
      "Related historical pattern",
      "Further investigation required",
    ],
    demoLabel: "Demo",
    demoDescription:
      "The production investigation dashboard includes complete candidate actions, an EGP generator, SLA tracking, and team collaboration.",
  },
  sensorFae: {
    irStatusLabels: {
      matched_known_pattern: "Matches Known Pattern",
      matched_with_mitigation: "Matched and Mitigated",
      candidate_investigation_path: "Candidate Investigation Path",
      candidate_field_test: "Candidate Field Test Required",
      not_applicable: "Not Applicable to This Sensor",
    },
    initialLessonLearned:
      "A USB 3.0 bus reset was observed during high-bandwidth LiDAR transfer. The pattern matches EMI sensitivity in the Example LiDAR X32 demo cable assembly. Recommended mitigation: replace the cable with shielded part DEMO-CBL-X32-SH and add a ferrite core at the device end.",
    workspaceTitle: "Sensor FAE Workspace",
    sensorLabel: "Sensor",
    packageValidLabel: "Package Valid",
    validationEyebrow: "EGP Package Validation",
    validationTitle: "Package Integrity Check",
    evidencePackIdLabel: "Evidence Pack ID",
    evidenceQualityLabel: "Evidence Quality",
    packageIntegrityLabel: "Package Integrity",
    verifiedLabel: "Verified",
    monitoredSurfacesLabel: "Included Monitored Surfaces",
    evidenceSummaryEyebrow: "Evidence Pack Summary",
    deviationWindowLabel: "Deviation Window",
    upstreamContextLabel: "Upstream Context",
    downstreamContextLabel: "Downstream Context",
    historicalEyebrow: "Historical Sensor RGA",
    historicalTitle: "Example Sensor Corp Historical Investigation Patterns",
    strongCandidateLabel: "Strong Candidate",
    relatedHistoricalLabel: "Related Historical Pattern",
    originalRefLabel: "Original REF:",
    historicalResolutionLabel: "Historical resolution:",
    similarityLabel: "Similarity",
    resultEyebrow: "Investigation Result (IR)",
    resultTitle: "Author Investigation Result",
    resultStatusLabel: "Result Status",
    resultSummaryLabel: "IR Summary (Demo)",
    resultSummaryPrefix: "The pattern match with ",
    resultSummarySuffix:
      " is confirmed. The USB 3.0 bus reset during high-bandwidth operation is consistent with demo EMI sensitivity in the Example LiDAR X32 cable. No firmware or hardware defect was identified. A shielded cable is recommended.",
    lessonEyebrow: "Lesson Learned (LL)",
    lessonTitle: "Capture Reusable Knowledge",
    lessonContentLabel: "Lesson Learned Content",
    lessonNote:
      "The LL will update the Example Sensor Corp Historical Sensor RGA for future investigations.",
    responseEyebrow: "Sensor Response",
    responseTitle: "Return the OEM Investigation Package",
    responseSummaryLabel: "Response Summary",
    irStatusLabel: "IR Status",
    lessonAuthoredLabel: "LL Authored",
    yesLabel: "Yes",
    historicalUpdatedLabel: "Historical RGA Updated",
    pendingLabel: "Pending",
    readyLabel: "Ready to Return to OEM",
    readyDescription:
      "The IR and LL will be returned with the EGP response package to the OEM Tier 2/3 engineer for the next investigation decision.",
    returnResponse: "Return EGP Response to OEM ->",
    demoLabel: "Demo",
    demoDescription:
      "The production Sensor FAE workspace includes full package validation, multi-sensor surface analysis, IR/LL template libraries, and Sensor RGA update workflows.",
  },
  tier1: {
    portalTitle: "Tier 1 Support Portal",
    roleLabel: "Tier 1 Support",
    stepLabels: {
      incident: "Incident Description",
      robot: "Robot Information",
      evidence: "Runtime Evidence",
      review: "Routing Review",
    },
    previous: "<- Previous",
    incident: {
      eyebrow: "Step 1 / 4",
      title: "Describe the Incident",
      typeLabel: "Incident Type",
      typeOptions: [
        "Sensor Anomaly",
        "Communication Interruption",
        "Performance Degradation",
      ],
      severityLabel: "Severity",
      severityOptions: ["Low", "High", "Critical"],
      descriptionLabel: "Incident Description",
      timeLabel: "Approximate Incident Time",
      next: "Next: Robot Information ->",
    },
    robot: {
      eyebrow: "Step 2 / 4",
      title: "Robot and Environment",
      serialNumberLabel: "Robot Serial Number",
      modelLabel: "Model",
      firmwareLabel: "Firmware Version",
      locationLabel: "Deployment Location",
      conditionsLabel: "Environmental Conditions",
      next: "Next: Runtime Evidence ->",
    },
    evidence: {
      eyebrow: "Step 3 / 4",
      title: "Runtime Evidence",
      agentStatusLabel: "Atlas Agent Status",
      activeLabel: "Active",
      versionLabel: "Version",
      heartbeatLabel: "Last Heartbeat",
      timeWindowLabel: "Runtime Dataset Time Window",
      durationLabel: "Duration: 15 minutes",
      lockedLabel: "Runtime Dataset Locked",
      datasetIdLabel: "Runtime Dataset ID:",
      coverageLabel:
        "Coverage: timing, power, network, storage, sensors, and ROS2 topics",
      next: "Next: Routing Review ->",
    },
    review: {
      eyebrow: "Step 4 / 4",
      title: "Review and Route to Tier 2",
      summaryLabel: "REF Summary",
      incidentTypeLabel: "Incident Type",
      severityLabel: "Severity",
      robotLabel: "Robot",
      datasetLabel: "Runtime Dataset",
      routeToLabel: "Route To",
      routeOptions: [
        "Tier 2 Engineer - Li Hua (Test)",
        "Tier 2 Engineer - Chen Example",
        "Tier 3 Specialist",
      ],
      readyLabel: "Ready to Create REF",
      readyDescription:
        "Creating the REF will generate an ID and route it to the selected engineer. The Runtime Dataset is locked and ready for evidence generation.",
      submit: "Create REF and Route ->",
    },
    demoLabel: "Demo",
    demoDescription:
      "This is a static demo interface. The production Tier 1 Support Portal submits to the Atlas backend and triggers the Tier 2 workflow.",
  },
} as const satisfies DemoContent;
