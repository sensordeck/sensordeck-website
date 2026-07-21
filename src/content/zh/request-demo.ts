export const requestDemoContent = {
  hero: {
    eyebrow: "申请演示",
    title: "在真实场景中了解 Atlas",
    description:
      "填写以下信息，我们将安排专人与您联系，展示 Atlas 如何为您的运行时调查提供持续可追溯的证据支持。",
  },
  fields: {
    name: { label: "联系人", placeholder: "请输入您的姓名" },
    wechat: { label: "微信号", placeholder: "请输入微信号", required: true },
    phone: { label: "手机", placeholder: "请输入手机号码", required: true },
    email: { label: "邮箱", placeholder: "请输入工作邮箱" },
    company: { label: "公司名", placeholder: "请输入公司名称" },
    businessType: {
      label: "业务类型",
      placeholder: "请选择业务类型",
      options: ["机器人 OEM", "传感器制造商"],
    },
  },
  submit: "提交申请",
  emailSubject: "Atlas 演示申请",
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

export type RequestDemoContent = typeof requestDemoContent;
