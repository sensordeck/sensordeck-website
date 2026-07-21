export const contactContent = {
  hero: {
    eyebrow: "联系我们",
    title: "从运行时边界开始",
    description:
      "告诉我们您正在构建、观察或调查什么。我们将帮助您为团队找到合适的下一步沟通方式。",
  },
  options: [
    {
      eyebrow: "架构评审",
      title: "讨论您的运行时边界",
      description:
        "带上一个传感器、设备集群或调查流程。我们可以梳理证据边界，并确定聚焦的试点范围。",
    },
    {
      eyebrow: "技术资料",
      title: "获取白皮书",
      description:
        "获取关于运行时传感器治理、运行时调查和 Atlas 证据模型的技术资料。",
    },
    {
      eyebrow: "演示访问",
      title: "在真实场景中了解 Atlas",
      description:
        "通过一个代表性的传感器调查流程，了解运行时证据和组织记忆如何被明确呈现。",
    },
  ],
  optionAction: "联系团队",
  formIntro: {
    eyebrow: "申请演示",
    title: "提供足够背景，让第一次沟通更有价值",
    description:
      "提交表单后将打开一封发送给 SensorDeck 团队的邮件草稿。我们不使用自定义后端，也不会自动进行资格筛选。",
    note:
      "我们关注证据归属、明确的工程边界，以及在压力下仍然可审查的系统。",
  },
  fields: {
    name: { label: "姓名", placeholder: "请输入您的姓名" },
    email: { label: "工作邮箱", placeholder: "请输入工作邮箱" },
    company: { label: "公司名称", placeholder: "请输入公司名称" },
    role: { label: "职位", placeholder: "请输入您的职位" },
    organizationType: {
      label: "组织类型",
      placeholder: "请选择",
      options: ["机器人厂商", "传感器制造商", "系统集成商", "其他"],
    },
    fleetScale: {
      label: "设备集群/产品规模",
      placeholder: "例如：已部署 2,000 台设备",
    },
    primaryInterest: {
      label: "主要关注方向",
      placeholder: "请选择",
      options: ["运行时传感器治理", "运行时调查", "技术白皮书", "架构评审"],
    },
    message: {
      label: "留言",
      placeholder: "您正在解决什么运行时、传感器或调查问题？",
    },
  },
  submit: "打开邮件草稿",
  emailSubject: "SensorDeck 联系申请",
  privacyNotice: "提交表单即表示您同意我们按照",
  privacyPolicyLink: "隐私政策",
  privacyNoticeSuffix: "处理您的个人信息。",
  dataProtectionNote: "请勿在消息中包含密码、密钥或其他敏感信息。",
  salesTitle: "我们的销售团队",
  salesNote: "销售联系方式和团队信息将由 SensorDeck 更新",
  locations: {
    title: "全球办事处",
    offices: [
      {
        city: "深圳, 中国",
        name: "SensorDeck 中国",
        email: "sales.china@sensordeck.com",
        address: "广东省深圳市南山区",
      },
      {
        city: "加州, 美国",
        name: "SensorDeck USA",
        email: "sales.usa@sensordeck.com",
        address: "California, United States",
      },
    ],
  },
} as const;

export type ContactContent = typeof contactContent;
