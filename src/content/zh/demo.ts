import type { DemoContent } from "@/lib/content-types";

export const demoContent = {
  index: {
    pages: [
      {
        id: "01",
        role: "一级支持",
        title: "客户门户",
        description:
          "快速创建 REF，并确认运行时数据集是否可用于后续调查。演示四步工作流：事件描述、机器人信息、运行时证据、审核与分派。",
        href: "/demo/tier1",
        audience: "一线支持团队",
      },
      {
        id: "02",
        role: "二级 / 三级工程师",
        title: "调查仪表板",
        description:
          "将连续运行数据整理为有边界的事件证据。查看候选时间线、五窗口证据、历史 RGA 召回和 EGP 生成流程。",
        href: "/demo/investigation",
        audience: "OEM 工程团队",
      },
      {
        id: "03",
        role: "传感器 FAE",
        title: "传感器 FAE 工作区",
        description:
          "验证 OEM EGP、审查共享证据、召回历史传感器 RGA、编写 IR 与 LL，并向 OEM 返回调查响应。",
        href: "/demo/sensor-fae",
        audience: "传感器厂商工程团队",
      },
      {
        id: "04",
        role: "CTO / 工程副总裁",
        title: "管理层仪表板",
        description:
          "面向管理层展示调查效率、证据覆盖、组织知识复用、供应商协作和示意性 ROI。",
        href: "/demo/cto",
        audience: "工程管理层",
      },
    ],

    hero: {
      eyebrow: "Atlas 演示界面",
      title: "面向四类角色的调查工作流",
      description:
        "通过一个连贯的演示场景，展示 Atlas 如何支持一级响应、工程调查、传感器协作和管理层治理。所有界面均使用共享的静态演示数据。",
    },

    scenario: {
      eyebrow: "演示场景",
      title: "Demo Robotics 导航偏差调查",
      customer: "客户",
      robotSerialNumber: "机器人序列号",
      refId: "REF 标识",
      primaryEvidencePack: "主要 Evidence Pack",
      egpId: "EGP 标识",
      sensorFae: "传感器 FAE",
    },

    viewDemo: "查看演示",

    notice: {
      label: "演示说明",
      description:
        "所有演示数据均为示意性内容。实际 Atlas 部署包含客户特定的运行时上下文、证据范围和调查资产，不会在公开演示中展示。",
      metrics:
        "工时节省和成本节省等商业指标均为演示估算值，不代表任何具体客户的实际结果。",
    },

    cta: {
      eyebrow: "申请完整演示",
      title: "希望进一步了解 Atlas？",
      description:
        "联系我们安排技术演示，并围绕您的机器人平台、传感器配置、部署环境和调查工作流展开讨论。",
      button: "联系我们",
    },
  },

  data: {
    customerName: "Demo Robotics",

    ref: {
      creatorName: "Zhang Ming（演示）",
      incidentType: "导航偏差",
      severity: "中",
      description:
        "机器人在配送任务期间偏离规划路径。客户报告路线发生非预期变化，并延迟约三分钟。",
      environmentLocation: "示例科技园区 A 座",
      environmentConditions: "室内、正常照明、中等人流",
      assignedToName: "Li Hua（演示）",
      sensorFaeName: "Alice Demo",
      sensorFaeVendor: "Example Sensor Corp",
    },

    robot: {
      model: "T300 Demo 配送型",
      lidarManufacturer: "Example Sensor Corp",
      lidarModel: "Example LiDAR X32",
    },

    evidencePack: {
      surface: "USB 总线时序",
      evidenceQuality: "高可信度",
      affectedSurfaces: [
        "USB 总线时序",
        "LiDAR 点云质量",
        "ROS 2 主题时序",
      ],

      fiveWindowSummary: {
        pre_guard: "USB 总线运行稳定，平均延迟为 1.2 ms",
        baseline: "USB 3.0 连接稳定，链路速度保持在 5 Gbps",
        deviation:
          "08:15:22.347 观察到 USB 总线重置，连接中断约 4.8 秒",
        recovery: "USB 设备完成重新枚举，LiDAR 数据流恢复",
        post_guard: "连接恢复稳定，未观察到进一步异常",
      },

      upstream: "电源状态整体稳定，未观察到热事件",
      downstream: "导航模块进入降级模式，并触发路径重新规划",
    },

    candidates: [
      {
        surface: "LiDAR 点云质量",
        description: "08:15:20–08:15:28 期间观察到点云密度明显下降",
      },
      {
        surface: "ROS 2 主题时序",
        description: "定位主题发布频率由 20 Hz 下降至约 7 Hz",
      },
      {
        surface: "USB 总线时序",
        description: "在 LiDAR 接口观察到 USB 3.0 总线重置",
      },
      {
        surface: "电源电压",
        description: "12 V 电源轨同期出现轻微电压波动",
      },
    ],

    historicalRga: [
      {
        surface: "USB 总线时序",
        pattern: "高带宽传感器运行期间出现 USB 3.0 总线重置",
        resolution:
          "历史调查将 USB 线缆的 EMI 敏感性列为强候选。后续更换屏蔽线缆并增加磁芯后，未再次观察到相同模式。",
        whyRetrieved:
          "相关模式：USB 总线重置、LiDAR 数据中断和导航降级在相近时间窗口内出现",
        environmentDifference:
          "机器人不同，传感器型号相同，部署地点不同",
      },
      {
        surface: "电源电压",
        pattern: "12 V 电源轨波动与 USB 设备重置在时间上相关",
        resolution:
          "历史调查将电源电容老化列为强候选。完成预防性更换后，相关现象未再次出现。",
        whyRetrieved: "电源波动与 USB 重置存在时间相关性",
        environmentDifference:
          "机器人部署时间更早，累计运行时长更高",
      },
      {
        surface: "ROS 2 主题时序",
        pattern: "定位主题频率下降，但未观察到传感器硬件缺陷证据",
        resolution:
          "历史调查将高负载期间的 CPU 降频列为强候选。改善散热并调整任务优先级后，主题频率恢复稳定。",
        whyRetrieved:
          "观察到相似表现：定位主题频率下降，但机器人型号和计算平台不同",
        environmentDifference:
          "机器人型号不同（T200 与 T300），计算平台不同",
      },
    ],
  },

  cto: {
    roiModeLabels: {
      conservative: "保守",
      expected: "预期",
      actual: "实际",
    },

    dashboardTitle: "管理层仪表板",
    dashboardRole: "管理层",
    timeRangeLabel: "时间范围：",
    daySuffix: " 天",
    roiModelLabel: "ROI 模型：",

    operationsEyebrow: "调查运营效率",
    openRefsLabel: "未结案 REF",
    openRefsTrend: "较上一周期下降 18%",
    safetyRefsLabel: "安全相关 REF",
    safetyRefsNote: "需要管理层审核",
    firstEvidencePackLabel: "首次 EP 中位用时",
    firstEvidencePackTrend: "比目标缩短 12 分钟",
    closureLabel: "结案中位用时",
    closureTrend: "较人工流程缩短 35%",

    memoryEyebrow: "组织知识",
    memoryTitle: "历史 RGA 复用与供应商协作",
    reuseRateLabel: "历史 RGA 复用率",
    recallAfterRange: " 天内召回 ",
    recallAfterCount: " 个相关案例",
    escalationRateLabel: "传感器协作率",
    sentPrefix: "已发送 ",
    sentSuffix: " 个 EGP",
    activeSuppliersLabel: "活跃传感器供应商",
    activeSuppliers:
      "Example Sensor Corp、Demo Vision Systems、Example Motion Labs、Demo LiDAR Co、Test Optics",

    roiEyebrow: "示意性演示数据",
    roiTitle: "示意性 ROI 估算",
    hoursSavedLabel: "节省工程工时",
    basedOnPrefix: "基于",
    modelSeparator: "模型，",
    windowSuffix: " 天统计窗口",
    manualAverageLabel: "人工调查平均用时：",
    atlasAverageLabel: "Atlas 辅助调查平均用时：",
    savedPerRefLabel: "每个 REF 预计节省时间：",
    costSavedLabel: "预计节省成本",
    hourlyCostLabel: "工程师时薪：",
    totalHoursLabel: "预计节省总工时：",
    totalCostLabel: "预计节省成本：",
    roiNoticeLabel: "示意性演示数据：",
    roiNotice:
      "商业指标均为演示估算值，不代表任何具体客户的实际结果。实际 ROI 取决于调查复杂度、团队流程和运营环境。",

    coverageEyebrow: "证据覆盖",
    coverageTitle: "候选监测维度频率分布",
    surfaces: [
      "USB 总线时序",
      "ROS 2 主题时序",
      "LiDAR 点云质量",
      "电源电压",
      "网络丢包",
      "存储 I/O 时序",
    ],
    occurrenceSuffix: " 次观察",
    noteLabel: "说明：",
    coverageNote:
      "候选监测维度的出现频率仅表示观察到的模式分布，不代表根本原因排序，也不表示故障或责任归属。",

    volumeEyebrow: "调查数量",
    volumeTitle: "REF 数量与状态趋势",
    months: ["4 月", "5 月", "6 月", "7 月"],
    closedRefsLabel: "已结案 REF",
    openChartLabel: "进行中：",
    closedChartLabel: "已结案：",

    actionsEyebrow: "管理层操作",
    actionsTitle: "报告与审核",
    exportReportTitle: "导出治理报告",
    exportReportDescription:
      "生成包含调查效率、证据覆盖、组织知识复用和供应商协作的执行摘要",
    reviewSafetyTitle: "审核安全相关 REF",
    reviewSafetyPrefix: "当前有 ",
    reviewSafetySuffix: " 个安全相关 REF 等待管理层审核",

    demoLabel: "演示说明",
    demoDescription:
      "实际管理层仪表板支持机器人或车队筛选、自定义时间范围、治理报告导出和 SLA 跟踪。",
  },

  investigation: {
    confidenceLabels: {
      strong: "强候选",
      partial: "部分候选",
      related: "相关候选",
    },

    windowLabels: {
      pre_guard: "前置观察",
      baseline: "基线",
      deviation: "偏差",
      recovery: "恢复观察",
      post_guard: "后置观察",
    },

    statusLabels: {
      baseline: "基线",
      normal: "正常",
      anomaly_detected: "观察到异常",
      timing_anomaly: "时序异常",
      bus_reset: "总线重置",
      returning_to_baseline: "正在返回基线",
      partial_recovery: "部分恢复",
      reconnection: "重新连接",
      minor_fluctuation: "轻微波动",
      recovered: "已恢复",
      stable: "稳定",
    },

    dashboardTitle: "调查仪表板",
    robotLabel: "机器人",
    statusLabel: "状态",
    investigatingLabel: "调查中",
    generateEgp: "生成 EGP →",

    metricsEyebrow: "调查关键指标",
    candidatesIdentifiedLabel: "已识别候选",
    primaryEvidencePackLabel: "主要 EP",
    historicalRecallLabel: "历史召回",
    timeToFirstEvidencePackLabel: "首次 EP 用时",

    timelineEyebrow: "候选时间线",
    timelineTitle: "观察到的运行时模式",
    primaryCandidateLabel: "主要候选",

    fiveWindowEyebrow: "五窗口证据模型",

    historicalEyebrow: "历史 RGA 召回",
    historicalTitle: "相关历史模式",
    relatedHistoricalLabel: "相关历史模式",
    whyRetrievedLabel: "召回依据：",
    environmentDifferenceLabel: "环境差异：",
    historicalResolutionLabel: "历史调查结论：",
    similarityLabel: "相似度",
    noteLabel: "说明：",
    historicalNote:
      "历史模式相似性不表示根本原因相同。环境差异、软硬件版本和运行条件可能对应不同的调查路径。",

    languageEyebrow: "",
    languageTitle: "",
    prohibitedLabel: "",
    prohibitedTerms: [],
    allowedLabel: "",
    allowedTerms: [],

    demoLabel: "演示说明",
    demoDescription:
      "实际调查仪表板支持主要候选设置、候选延后或排除、EGP 生成、SLA 跟踪和团队协作。",
  },

  sensorFae: {
    irStatusLabels: {
      matched_known_pattern: "观察到已知模式",
      matched_with_mitigation: "相关模式及缓解措施",
      candidate_investigation_path: "候选调查路径",
      candidate_field_test: "建议开展现场验证",
      not_applicable: "与当前传感器边界不相关",
    },

    initialLessonLearned:
      "在高带宽 LiDAR 数据传输期间观察到 USB 3.0 总线重置。该现象与 Example LiDAR X32 演示线缆组件的历史 EMI 敏感模式相似。建议进一步验证屏蔽线缆和设备端磁芯对运行稳定性的影响。",

    workspaceTitle: "传感器 FAE 工作区",
    sensorLabel: "传感器",
    packageValidLabel: "包状态正常",

    validationEyebrow: "EGP 包验证",
    validationTitle: "包完整性检查",
    evidencePackIdLabel: "Evidence Pack 标识",
    evidenceQualityLabel: "证据质量",
    packageIntegrityLabel: "包完整性",
    verifiedLabel: "已验证",
    monitoredSurfacesLabel: "覆盖的监测维度",

    evidenceSummaryEyebrow: "Evidence Pack 摘要",
    deviationWindowLabel: "偏差窗口",
    upstreamContextLabel: "上游上下文",
    downstreamContextLabel: "下游上下文",

    historicalEyebrow: "历史 Sensor RGA",
    historicalTitle: "Example Sensor Corp 相关历史模式",
    strongCandidateLabel: "强候选",
    relatedHistoricalLabel: "相关历史模式",
    originalRefLabel: "原始 REF：",
    historicalResolutionLabel: "历史调查结论：",
    similarityLabel: "相似度",

    resultEyebrow: "调查结果（IR）",
    resultTitle: "编写调查结论",
    resultStatusLabel: "调查状态",
    resultSummaryLabel: "IR 摘要（演示）",
    resultSummaryPrefix: "观察到与 ",
    resultSummarySuffix:
      " 相似的历史运行时模式。高带宽运行期间出现的 USB 3.0 总线重置与 Example LiDAR X32 线缆组件的历史 EMI 敏感模式具有相关性。当前证据未显示固件或传感器硬件缺陷，建议通过更换屏蔽线缆开展进一步验证。",

    lessonEyebrow: "经验教训（LL）",
    lessonTitle: "记录可复用知识",
    lessonContentLabel: "经验教训内容",
    lessonNote:
      "经授权审核后，LL 可更新至 Example Sensor Corp Historical Sensor RGA，供未来调查召回。",

    responseEyebrow: "传感器响应",
    responseTitle: "返回 OEM 调查响应",
    responseSummaryLabel: "响应摘要",
    irStatusLabel: "IR 状态",
    lessonAuthoredLabel: "LL 已撰写",
    yesLabel: "是",
    historicalUpdatedLabel: "Historical RGA 更新状态",
    pendingLabel: "等待审核",
    readyLabel: "准备返回 OEM",
    readyDescription:
      "IR、LL 和相关候选分析将随 EGP 响应返回 OEM 二级 / 三级工程团队，用于后续工程审核和调查决策。",

    returnResponse: "返回 EGP 响应至 OEM →",

    demoLabel: "演示说明",
    demoDescription:
      "实际传感器 FAE 工作区支持完整的包验证、多传感器监测维度分析、IR / LL 模板和 Sensor RGA 更新工作流。",
  },

  tier1: {
    portalTitle: "一级支持门户",
    roleLabel: "一级支持",

    stepLabels: {
      incident: "事件描述",
      robot: "机器人信息",
      evidence: "运行时证据",
      review: "审核与分派",
    },

    previous: "← 上一步",

    incident: {
      eyebrow: "步骤 1 / 4",
      title: "描述事件",
      typeLabel: "事件类型",
      typeOptions: ["传感器异常", "通信中断", "性能下降"],
      severityLabel: "严重程度",
      severityOptions: ["低", "高", "严重"],
      descriptionLabel: "事件描述",
      timeLabel: "事件时间（近似）",
      next: "下一步：机器人信息 →",
    },

    robot: {
      eyebrow: "步骤 2 / 4",
      title: "机器人与运行环境",
      serialNumberLabel: "机器人序列号",
      modelLabel: "型号",
      firmwareLabel: "固件版本",
      locationLabel: "部署位置",
      conditionsLabel: "环境条件",
      next: "下一步：运行时证据 →",
    },

    evidence: {
      eyebrow: "步骤 3 / 4",
      title: "运行时证据",
      agentStatusLabel: "Atlas Agent 状态",
      activeLabel: "运行中",
      versionLabel: "版本",
      heartbeatLabel: "最近心跳",
      timeWindowLabel: "运行时数据集时间窗口",
      durationLabel: "持续时间：15 分钟",
      lockedLabel: "运行时数据集已锁定",
      datasetIdLabel: "运行时数据集 ID：",
      coverageLabel:
        "覆盖范围：时序、电源、网络、存储、传感器和 ROS 2 主题",
      next: "下一步：审核与分派 →",
    },

    review: {
      eyebrow: "步骤 4 / 4",
      title: "审核并分派至二级工程团队",
      summaryLabel: "REF 摘要",
      incidentTypeLabel: "事件类型",
      severityLabel: "严重程度",
      robotLabel: "机器人",
      datasetLabel: "运行时数据集",
      routeToLabel: "分派至",
      routeOptions: [
        "二级工程师 - Li Hua（演示）",
        "二级工程师 - Chen Example",
        "三级工程专家",
      ],
      readyLabel: "准备创建 REF",
      readyDescription:
        "创建后，系统将生成 REF 标识并分派至指定工程师。运行时数据集已锁定，可用于后续 Evidence Pack 生成。",
      submit: "创建 REF 并分派 →",
    },

    demoLabel: "演示说明",
    demoDescription:
      "这是静态演示界面。实际一级支持门户会将 REF 提交至 Atlas 后端，并启动后续工程调查工作流。",
  },
} satisfies DemoContent;
