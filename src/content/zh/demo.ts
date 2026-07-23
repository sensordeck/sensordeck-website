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
      "USB 总线时
