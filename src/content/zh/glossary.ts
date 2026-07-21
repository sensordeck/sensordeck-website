export const glossaryZh = {
  title: "术语表",
  description: "Atlas 运行时治理系统核心术语解释",
  categories: {
    core: "核心概念",
    workflow: "工作流程",
    technical: "技术术语",
  },
  terms: [
    {
      term: "Evidence Pack (EP)",
      chinese: "证据包",
      definition:
        "标准化的运行时证据包，包含故障发生时的传感器数据、日志、时间线、根因分析建议和组织历史记录。证据包是 Atlas 系统输出的核心交付物，用于跨团队协作和历史复用。",
      category: "core",
    },
    {
      term: "Runtime Event Fault (REF)",
      chinese: "运行时故障事件",
      definition:
        "在机器人运行时检测到的异常事件，例如传感器数据丢失、时间戳跳变、性能下降、数据格式错误等。REF 是触发证据生成的起点。",
      category: "core",
    },
    {
      term: "Runtime Governance Agent (RGA)",
      chinese: "运行时治理代理",
      definition:
        "部署在机器人主机上的轻量级代理程序，负责 7×24 监测各运行时维度、检测异常、生成证据包并管理证据提交流程。",
      category: "core",
    },
    {
      term: "Runtime Investigation",
      chinese: "运行时调查",
      definition:
        "Atlas 针对机器人 OEM 的产品线，用于加速故障调查和跨团队协作。将传统的 3-5 天调查周期压缩到数小时，并支持历史案例复用。",
      category: "core",
    },
    {
      term: "Runtime Sensor Governance",
      chinese: "运行时传感器治理",
      definition:
        "Atlas 针对传感器制造商的产品线，用于主动监测传感器在客户现场的运行健康状况，提前发现故障征兆并协助客户快速定位问题。",
      category: "core",
    },
    {
      term: "Incident Report (IR)",
      chinese: "事故报告",
      definition:
        "工程师基于证据包生成的正式调查报告，包含根因判断、责任归属和修复建议。IR 由人工审核并归档到组织知识库。",
      category: "workflow",
    },
    {
      term: "Lesson Learned (LL)",
      chinese: "经验总结",
      definition:
        "从历史事故中提取的可复用知识，包括故障模式、诊断方法和解决方案。LL 用于加速未来类似问题的调查。",
      category: "workflow",
    },
    {
      term: "Assist Vault",
      chinese: "调查资产库",
      definition:
        "Atlas 的组织记忆存储系统，保存所有历史证据包、事故报告和经验总结。Vault 支持语义检索，可自动召回相似历史案例。",
      category: "workflow",
    },
    {
      term: "Candidate Timeline",
      chinese: "候选时间线",
      definition:
        "系统根据传感器数据、日志和运行时事件自动重建的故障时间序列。工程师可基于候选时间线快速定位故障发生窗口。",
      category: "workflow",
    },
    {
      term: "Five-Window Constitution",
      chinese: "五窗口证据规范",
      definition:
        "Atlas 证据包的标准时间结构，包括前置保护、基线、偏差、恢复观察和后置保护五个窗口，确保证据上下文完整且便于比较。",
      category: "technical",
    },
    {
      term: "Evidence Governance Protocol (EGP)",
      chinese: "证据治理协议",
      definition:
        "定义证据包生成、验证、提交和归档流程的标准协议。EGP 确保不同团队和组织之间的证据可互操作。",
      category: "technical",
    },
    {
      term: "Runtime Surface",
      chinese: "运行时监测维度",
      definition:
        "RGA 观察的目标维度，包括传感器数据流、消息总线、电源状态、网络连接、存储容量等。每个维度对应一组健康检查规则。",
      category: "technical",
    },
    {
      term: "FAE",
      chinese: "现场应用工程师",
      definition:
        "Field Application Engineer，传感器厂商派驻客户现场或远程支持的技术专家，负责传感器集成、故障诊断和技术培训。",
      category: "workflow",
    },
  ],
};
