export interface LabelDescription {
  label: string;
  description: string;
}

export interface TitleDescription {
  title: string;
  description: string;
}

export interface HomeContent {
  heroTitle: string;
  heroSubtitleDesktop: string;
  heroSubtitleMobile: string;
  heroDescription: string;
  heroPrinciple: string[];
  heroValueProposition: string;
  sectionTitles: {
    categoryDefinition: string;
    theProblem: string;
    whyRuntimeGovernance: string;
    productLines: string;
    platformCapabilities: string;
    investigationLifecycle: string;
    roboticsIndustry: string;
    evidenceOwnership: string;
    organizationalMemory: string;
    technicalResources: string;
    finalCta: string;
  };
  sectionDescriptions: {
    categoryDefinition: string;
    theProblem: string;
    whyRuntimeGovernance: string;
    productLines: string;
    platformCapabilities: string;
    investigationLifecycle: string;
    roboticsIndustry: string;
    evidenceOwnership: string;
    organizationalMemory: string;
    technicalResources: string;
    finalCta: string;
  };
  categoryDefinition: {
    lead: string;
    runtimeBoundary: {
      title: string;
      steps: string[];
      note: string;
    };
    whyImportant: {
      title: string;
      traditional: {
        title: string;
        items: string[];
      };
      runtime: {
        title: string;
        items: string[];
        note: string;
      };
    };
    whatAtlasProvides: {
      title: string;
      notItems: string[];
      isItem: string;
      capabilities: string[];
      summary: string;
    };
    points: LabelDescription[];
  };
  theProblem: {
    lead: string;
    cta: string;
    comparison: {
      withoutAtlas: {
        title: string;
        steps: string[];
        note: string;
      };
      withAtlas: {
        title: string;
        steps: string[];
        note: string;
      };
    };
    whyMatters: TitleDescription;
  };
  whyRuntimeGovernance: {
    items: LabelDescription[];
    boundaryNote: string;
  };
  productLines: Array<{
    name: string;
    audience: string;
    description: string;
    modules: string[];
    lifecycle: string[];
    link: string;
  }>;
  platformCapabilities: TitleDescription[];
  constitutionalBoundary: string[];
  investigationLifecycle: LabelDescription[];
  fiveWindowModel: string[];
  roboticsIndustry: {
    audiences: string[];
    surfaces: string[];
  };
  evidenceOwnership: {
    principles: LabelDescription[];
  };
  organizationalMemory: {
    labels: string[];
    recallExample: {
      reference: string;
      title: string;
      status: string;
      note: string;
    };
  };
  technicalResources: {
    whitePapers: string[];
    documentationDescription: string;
  };
  ctas: {
    primary: string;
    exploreProducts: string;
    technicalWhitePaper: string;
    viewArchitecture: string;
    readWhitePaper: string;
    documentation: string;
    overview: string;
  };
  ui: {
    sectionEyebrows: {
      categoryDefinition: string;
      theProblem: string;
      whyRuntimeGovernance: string;
      productLines: string;
      platformCapabilities: string;
      investigationLifecycle: string;
      roboticsIndustry: string;
      evidenceOwnership: string;
      organizationalMemory: string;
      technicalResources: string;
      finalCta: string;
    };
    learnMore: string;
    categoryImageAlt: string;
    problemImageAlt: string;
    productLabel: string;
    coreModules: string;
    productLifecycle: string;
    fiveWindowModel: string;
    fiveWindowDescription: string;
    runtimeSurfaces: string;
    sensor: string;
    policy: string;
    egpDescription: string;
    historicalRgaDescription: string;
    historicalRgaBoundary: string;
    recallCandidate: string;
    retrievalReason: string;
    retrievalReasonValue: string;
    reviewBoundary: string;
    reviewBoundaryValue: string;
    documentation: string;
    finalCtaDescription: string;
    illustrativeDemoData: string;
    contactUs: string;
  };
}

export interface HomepageContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    principles: string[];
    cta: {
      primary: { text: string; href: string };
      secondary: { text: string; href: string };
    };
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    challenges: LabelDescription[];
  };
  value: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: LabelDescription[];
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    lines: Array<{
      name: string;
      audience: string;
      description: string;
      keyModules: string[];
    }>;
  };
  customers: {
    eyebrow: string;
    title: string;
    sensorManufacturers: {
      title: string;
      description: string;
      capabilities: string[];
    };
    robotOems: {
      title: string;
      description: string;
      capabilities: string[];
    };
  };
  principle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    boundaries: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    button: {
      text: string;
      href: string;
    };
  };
}

export interface TechnologyContent {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: Array<{
    id: string;
    title: string;
    description: string;
    content: string | null;
    explanation?: string;
    href: string;
    comparedTo?: string[];
    surfaces?: string[];
    concepts?: Array<{
      term: string;
      definition: string;
    }>;
    warning?: string;
    link?: {
      text: string;
      href: string;
    };
  }>;
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export interface PlatformContent {
  ui: {
    capabilitiesTitle: string;
    coreModulesLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  architecture: {
    title: string;
    description: string;
    principles: string[];
    constitutionalBoundary: {
      title: string;
      items: string[];
    };
  };
  capabilities: Array<{
    name: string;
    description: string;
    keyFeatures: string[];
  }>;
  productsRelationship: {
    title: string;
    description: string;
    products: Array<{
      name: string;
      audience: string;
      coreModules: string[];
    }>;
  };
  documentation: {
    title: string;
    whitePapers: TitleDescription[];
    documentationLink: {
      title: string;
      description: string;
      href: string;
    };
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export interface LibraryContent {
  ui: {
    breadcrumbLabel: string;
    libraryLabel: string;
    browse: string;
    resourceCards: Array<{
      id: string;
      title: string;
      description: string;
      href: string;
      items: string;
    }>;
    quickAccessEyebrow: string;
    quickAccessTitle: string;
    whitePapersLabel: string;
    documentationLabel: string;
    demoLabel: string;
    demoAndVideoLabel: string;
    faqLabel: string;
    comingSoon: string;
    view: string;
    note: string;
    demoNote: string;
    demoContactNote: string;
    documentationTopics: string;
    documentationHosting: string;
    documentationFor: string;
    documentationReferenceTitle: string;
    documentationUseCases: string[];
    moreInfoEyebrow: string;
    moreResourcesTitle: string;
    moreResourcesDescription: string;
    readWhitePapers: string;
    viewDocumentation: string;
    contactUs: string;
    whitePaperAvailability: string;
    backToLibrary: string;
    previousWhitePapers: string;
    previousDocumentation: string;
    previousDemo: string;
    nextDocumentation: string;
    nextDemo: string;
    nextFaq: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  whitePapers: {
    eyebrow: string;
    title: string;
    description: string;
    papers: Array<{
      id: string;
      title: string;
      description: string;
      size: string;
      format: string;
    }>;
  };
  documentation: {
    eyebrow: string;
    title: string;
    description: string;
    link: {
      text: string;
      href: string;
    };
    topics: string[];
    note: string;
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      type: string;
      href: string;
      disabled: boolean;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export interface ProductOverview {
  name: string;
  audience: string;
  description: string;
  href: string;
  valuePoints: string[];
  coreModules: string[];
  lifecycle: string[];
}

export interface CollaborationBridge {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  closingStatement: string;
}

export interface ProductContent {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroStatement: string;
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  productA: ProductOverview;
  productB: ProductOverview;
  collaborationBridge: CollaborationBridge;
  finalValue: {
    title: string;
    description: string;
  };
  ui: {
    viewProduct: string;
    sensorGovernance: string;
    runtimeInvestigation: string;
  };
  ctaText: string;
}

export interface CompanyContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    statementLabel: string;
    statement: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    points: string[];
  };
  category: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
  };
  principlesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  principles: Array<{
    number: string;
    label: string;
    title: string;
    description: string;
  }>;
  boundariesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  boundaries: Array<{
    title: string;
    items: string[];
  }>;
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
}

export interface ContactContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  options: Array<{
    eyebrow: string;
    title: string;
    description: string;
  }>;
  optionAction: string;
  formIntro: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
  };
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    role: { label: string; placeholder: string };
    organizationType: {
      label: string;
      placeholder: string;
      options: string[];
    };
    fleetScale: { label: string; placeholder: string };
    primaryInterest: {
      label: string;
      placeholder: string;
      options: string[];
    };
    message: { label: string; placeholder: string };
  };
  submit: string;
  emailSubject: string;
  privacyNotice: string;
  privacyPolicyLink: string;
  privacyNoticeSuffix: string;
  dataProtectionNote: string;
  salesTitle: string;
  salesNote: string;
  locations: {
    title: string;
    offices: Array<{
      city: string;
      name: string;
      email: string;
      address: string;
    }>;
  };
}

export interface AuxiliaryPagesContent {
  category: {
    eyebrow: string;
    imageAlt: string;
    ctaTitle: string;
    requestDemo: string;
    backHome: string;
  };
  problem: {
    eyebrow: string;
    imageAlt: string;
    comparisonTitle: string;
    ctaTitle: string;
    requestDemo: string;
    backHome: string;
  };
  animationDemo: {
    title: string;
    subtitle: string;
    parametersTitle: string;
    parameters: string[];
    instruction: string;
    cardLines: string[];
  };
}

export interface DemoContent {
  index: {
    pages: Array<{
      id: string;
      role: string;
      title: string;
      description: string;
      href: string;
      audience: string;
    }>;
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    scenario: {
      eyebrow: string;
      title: string;
      customer: string;
      robotSerialNumber: string;
      refId: string;
      primaryEvidencePack: string;
      egpId: string;
      sensorFae: string;
    };
    viewDemo: string;
    notice: {
      label: string;
      description: string;
      metrics: string;
    };
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      button: string;
    };
  };
  data: {
    customerName: string;
    ref: {
      creatorName: string;
      incidentType: string;
      severity: string;
      description: string;
      environmentLocation: string;
      environmentConditions: string;
      assignedToName: string;
      sensorFaeName: string;
      sensorFaeVendor: string;
    };
    robot: {
      model: string;
      lidarManufacturer: string;
      lidarModel: string;
    };
    evidencePack: {
      surface: string;
      evidenceQuality: string;
      affectedSurfaces: string[];
      fiveWindowSummary: {
        pre_guard: string;
        baseline: string;
        deviation: string;
        recovery: string;
        post_guard: string;
      };
      upstream: string;
      downstream: string;
    };
    candidates: Array<{
      surface: string;
      description: string;
    }>;
    historicalRga: Array<{
      surface: string;
      pattern: string;
      resolution: string;
      whyRetrieved: string;
      environmentDifference: string;
    }>;
  };
  cto: {
    roiModeLabels: {
      conservative: string;
      expected: string;
      actual: string;
    };
    dashboardTitle: string;
    dashboardRole: string;
    timeRangeLabel: string;
    daySuffix: string;
    roiModelLabel: string;
    operationsEyebrow: string;
    openRefsLabel: string;
    openRefsTrend: string;
    safetyRefsLabel: string;
    safetyRefsNote: string;
    firstEvidencePackLabel: string;
    firstEvidencePackTrend: string;
    closureLabel: string;
    closureTrend: string;
    memoryEyebrow: string;
    memoryTitle: string;
    reuseRateLabel: string;
    recallAfterRange: string;
    recallAfterCount: string;
    escalationRateLabel: string;
    sentPrefix: string;
    sentSuffix: string;
    activeSuppliersLabel: string;
    activeSuppliers: string;
    roiEyebrow: string;
    roiTitle: string;
    hoursSavedLabel: string;
    basedOnPrefix: string;
    modelSeparator: string;
    windowSuffix: string;
    manualAverageLabel: string;
    atlasAverageLabel: string;
    savedPerRefLabel: string;
    costSavedLabel: string;
    hourlyCostLabel: string;
    totalHoursLabel: string;
    totalCostLabel: string;
    roiNoticeLabel: string;
    roiNotice: string;
    coverageEyebrow: string;
    coverageTitle: string;
    surfaces: string[];
    occurrenceSuffix: string;
    noteLabel: string;
    coverageNote: string;
    volumeEyebrow: string;
    volumeTitle: string;
    months: string[];
    closedRefsLabel: string;
    openChartLabel: string;
    closedChartLabel: string;
    actionsEyebrow: string;
    actionsTitle: string;
    exportReportTitle: string;
    exportReportDescription: string;
    reviewSafetyTitle: string;
    reviewSafetyPrefix: string;
    reviewSafetySuffix: string;
    demoLabel: string;
    demoDescription: string;
  };
  investigation: {
    confidenceLabels: {
      strong: string;
      partial: string;
      related: string;
    };
    windowLabels: {
      pre_guard: string;
      baseline: string;
      deviation: string;
      recovery: string;
      post_guard: string;
    };
    statusLabels: {
      baseline: string;
      normal: string;
      anomaly_detected: string;
      timing_anomaly: string;
      bus_reset: string;
      returning_to_baseline: string;
      partial_recovery: string;
      reconnection: string;
      minor_fluctuation: string;
      recovered: string;
      stable: string;
    };
    dashboardTitle: string;
    robotLabel: string;
    statusLabel: string;
    investigatingLabel: string;
    generateEgp: string;
    metricsEyebrow: string;
    candidatesIdentifiedLabel: string;
    primaryEvidencePackLabel: string;
    historicalRecallLabel: string;
    timeToFirstEvidencePackLabel: string;
    timelineEyebrow: string;
    timelineTitle: string;
    primaryCandidateLabel: string;
    fiveWindowEyebrow: string;
    historicalEyebrow: string;
    historicalTitle: string;
    relatedHistoricalLabel: string;
    whyRetrievedLabel: string;
    environmentDifferenceLabel: string;
    historicalResolutionLabel: string;
    similarityLabel: string;
    noteLabel: string;
    historicalNote: string;
    languageEyebrow: string;
    languageTitle: string;
    prohibitedLabel: string;
    prohibitedTerms: string[];
    allowedLabel: string;
    allowedTerms: string[];
    demoLabel: string;
    demoDescription: string;
  };
  sensorFae: {
    irStatusLabels: {
      matched_known_pattern: string;
      matched_with_mitigation: string;
      candidate_investigation_path: string;
      candidate_field_test: string;
      not_applicable: string;
    };
    initialLessonLearned: string;
    workspaceTitle: string;
    sensorLabel: string;
    packageValidLabel: string;
    validationEyebrow: string;
    validationTitle: string;
    evidencePackIdLabel: string;
    evidenceQualityLabel: string;
    packageIntegrityLabel: string;
    verifiedLabel: string;
    monitoredSurfacesLabel: string;
    evidenceSummaryEyebrow: string;
    deviationWindowLabel: string;
    upstreamContextLabel: string;
    downstreamContextLabel: string;
    historicalEyebrow: string;
    historicalTitle: string;
    strongCandidateLabel: string;
    relatedHistoricalLabel: string;
    originalRefLabel: string;
    historicalResolutionLabel: string;
    similarityLabel: string;
    resultEyebrow: string;
    resultTitle: string;
    resultStatusLabel: string;
    resultSummaryLabel: string;
    resultSummaryPrefix: string;
    resultSummarySuffix: string;
    lessonEyebrow: string;
    lessonTitle: string;
    lessonContentLabel: string;
    lessonNote: string;
    responseEyebrow: string;
    responseTitle: string;
    responseSummaryLabel: string;
    irStatusLabel: string;
    lessonAuthoredLabel: string;
    yesLabel: string;
    historicalUpdatedLabel: string;
    pendingLabel: string;
    readyLabel: string;
    readyDescription: string;
    returnResponse: string;
    demoLabel: string;
    demoDescription: string;
  };
  tier1: {
    portalTitle: string;
    roleLabel: string;
    stepLabels: {
      incident: string;
      robot: string;
      evidence: string;
      review: string;
    };
    previous: string;
    incident: {
      eyebrow: string;
      title: string;
      typeLabel: string;
      typeOptions: string[];
      severityLabel: string;
      severityOptions: string[];
      descriptionLabel: string;
      timeLabel: string;
      next: string;
    };
    robot: {
      eyebrow: string;
      title: string;
      serialNumberLabel: string;
      modelLabel: string;
      firmwareLabel: string;
      locationLabel: string;
      conditionsLabel: string;
      next: string;
    };
    evidence: {
      eyebrow: string;
      title: string;
      agentStatusLabel: string;
      activeLabel: string;
      versionLabel: string;
      heartbeatLabel: string;
      timeWindowLabel: string;
      durationLabel: string;
      lockedLabel: string;
      datasetIdLabel: string;
      coverageLabel: string;
      next: string;
    };
    review: {
      eyebrow: string;
      title: string;
      summaryLabel: string;
      incidentTypeLabel: string;
      severityLabel: string;
      robotLabel: string;
      datasetLabel: string;
      routeToLabel: string;
      routeOptions: string[];
      readyLabel: string;
      readyDescription: string;
      submit: string;
    };
    demoLabel: string;
    demoDescription: string;
  };
}
