export const technologyContent = {
  hero: {
    title: "技术架构",
    subtitle:
      "Atlas 技术基础设施解释了为什么运行时治理有效。这不是编程语言或框架的列表，而是关于证据治理、运行时边界和调查生命周期的基本原则。",
  },

  sections: [
    {
      id: "runtime-boundary",
      title: "Runtime Boundary（运行时边界）",
      description:
        "Atlas 治理的边界从传感器物理接口开始，经过内核和驱动层，到达应用输入。",
      content: `传感器
  ↓
Power / USB / Ethernet / CAN / CSI / Trigger / PPS
  ↓
Linux Kernel / Driver / Buffer / IRQ / Scheduler
  ↓
SBC / ROS Topic / Application Input`,
      explanation:
        "这个边界定义了 Atlas 监控和捕获运行时证据的范围。每一层都可能引入延迟、丢失或异常，因此需要在整个路径上建立可观测性。",
      href: "/technology/runtime-boundary",
    },

    {
      id: "runtime-evidence",
      title: "Runtime Evidence（运行时证据）",
      description:
        "有界的 Evidence Pack 不同于无限日志归档、原始 rosbag、客户视频、支持工单或单一传感器日志。",
      content: null,
      explanation:
        "Evidence Pack 是有界的、结构化的、可重现的证据容器。它不是原始数据转储，而是围绕异常事件窗口组织的治理化证据集合。有界性确保证据可传输、可审查、可存储。",
      comparedTo: [
        "无限日志归档 → 无法传输，无法快速审查",
        "原始 rosbag → 无结构，无上下文，无异常标记",
        "客户视频 → 主观，不完整，无传感器原始数据",
        "支持工单 → 文本描述，缺乏运行时证据",
        "单一传感器日志 → 缺少跨传感器上下文和系统状态",
      ],
      href: "/technology/runtime-evidence",
    },

    {
      id: "runtime-surfaces",
      title: "Runtime Surfaces（运行时监控表面）",
      description:
        "Atlas 在多个运行时表面上建立可观测性，覆盖传感器、总线、内核和应用层。",
      content: null,
      surfaces: [
        "Power Health（电源健康）",
        "Timing（时序）",
        "Ethernet（以太网）",
        "USB",
        "CAN",
        "LiDAR（激光雷达）",
        "Camera（摄像头）",
        "IMU（惯性测量单元）",
        "Linux Runtime（Linux 运行时）",
        "ROS Topics（ROS 主题）",
        "Storage（存储）",
        "Sensor Heartbeat / Raw Output（传感器心跳/原始输出）",
      ],
      explanation:
        "这些表面不是孤立监控的指标，而是 Atlas 在运行时边界内建立的可观测层。每个表面都可以产生异常信号，触发 Evidence Pack 生成。",
      href: "/technology/runtime-surfaces",
    },

    {
      id: "five-window-model",
      title: "Five-Window Model（五窗口模型）",
      description:
        "Evidence Pack 的时间结构由五个窗口组成，提供异常事件的完整上下文。",
      content: `Pre-Guard（前置保护窗口）
Baseline（基线窗口）
Deviation（偏差窗口）
Recovery（恢复观察窗口）
Post-Guard（后置保护窗口）`,
      explanation:
        "Recovery 是一个观察窗口，不是保证恢复的结论。五窗口模型确保 Evidence Pack 包含足够的前后上下文，使调查人员能够理解异常如何发生、持续和结束。",
      href: "/technology/five-window-model",
    },

    {
      id: "historical-recall",
      title: "Historical Recall（历史召回）",
      description:
        "Atlas 从 Assist Vault 中召回历史相似案例，但从不声称历史相似性证明相同根因。",
      content: null,
      concepts: [
        {
          term: "Strong Candidate（强候选）",
          definition: "高度相似的历史案例，多个维度匹配",
        },
        {
          term: "Partial Candidate（部分候选）",
          definition: "部分匹配的历史案例，某些维度相似",
        },
        {
          term: "Related Historical Pattern（相关历史模式）",
          definition: "相关但不完全匹配的历史案例",
        },
        {
          term: "Why Retrieved（召回原因）",
          definition: "解释为什么这个历史案例被召回",
        },
        {
          term: "Environment Difference（环境差异）",
          definition: "标记历史案例与当前案例的环境差异",
        },
      ],
      warning:
        "⚠️ 历史相似性不证明相同根因。Historical RGA 提供调查起点，不是自动诊断结论。",
      href: "/technology/historical-recall",
    },

    {
      id: "investigation-lifecycle",
      title: "Investigation Lifecycle（调查生命周期）",
      description:
        "从 REF 触发到 Assist Vault 存储，Atlas 支持完整的调查生命周期。",
      content: `REF（Runtime Event Flag，运行时事件标记）
  ↓
Runtime Dataset（运行时数据集）
  ↓
Evidence Pack（证据包）
  ↓
Historical RGA Recall（历史 RGA 召回）
  ↓
Investigation Context（调查上下文）
  ↓
EGP（Evidence Governance Protocol，证据治理协议）
  ↓
OEM / Sensor IR + LL（调查报告 + 教训学习）
  ↓
Closure（结案）
  ↓
Assist Vault（组织记忆）
  ↓
Future Reuse（未来复用）`,
      explanation:
        "这个生命周期不是线性的自动化流程，而是 Atlas 支持的调查协作框架。每个阶段都需要人类判断，Atlas 提供结构化证据和历史上下文支持决策。",
      href: "/technology/investigation-lifecycle",
    },

    {
      id: "architecture",
      title: "Architecture（架构）",
      description:
        "Atlas 平台架构将证据治理、历史记忆和调查协作集成到统一基础设施中。",
      content: null,
      explanation:
        "完整的 Atlas 架构图和实现细节请参考技术文档。架构设计围绕运行时数据集治理、Evidence Pack 标准化和 Historical RGA 组织记忆构建。",
      link: {
        text: "查看完整架构文档 →",
        href: "https://docs.sensordeck.tech",
      },
      href: "/technology/architecture",
    },
  ],

  cta: {
    title: "深入了解 Atlas 技术架构",
    description:
      "访问完整的技术文档、架构图和实现细节。",
    primaryButton: {
      text: "技术文档",
      href: "https://docs.sensordeck.tech",
    },
    secondaryButton: {
      text: "查看演示",
      href: "/demo",
    },
  },
}
