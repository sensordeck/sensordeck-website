export const privacyContent = {
  hero: {
    eyebrow: "数据隐私",
    title: "隐私政策",
    description: "SensorDeck 致力于保护您的个人信息和隐私权。",
  },
  sections: [
    {
      title: "数据控制者",
      content:
        "SensorDeck 是您个人数据的控制者。如有隐私相关问题，请联系 privacy@sensordeck.com。",
    },
    {
      title: "收集的信息",
      content:
        "当您通过联系表单与我们沟通时，我们收集：姓名、工作邮箱、公司名称、职位、组织类型、设备规模和您提供的消息内容。",
    },
    {
      title: "使用目的",
      content:
        "我们使用您的信息用于：响应您的咨询、提供产品演示、技术支持和销售沟通。",
    },
    {
      title: "法律依据",
      content: "我们基于合法商业利益处理您的数据，或在适用情况下基于您的同意。",
    },
    {
      title: "数据保留",
      content: "我们保留您的个人信息不超过业务需要或法律要求的期限，通常为 24 个月。",
    },
    {
      title: "您的权利",
      content:
        "您有权访问、更正、删除您的个人数据，或限制其处理。请联系 privacy@sensordeck.com 行使这些权利。",
    },
    {
      title: "数据安全",
      content: "我们采取适当的技术和组织措施保护您的个人信息免遭未经授权的访问或泄露。",
    },
  ],
} as const;

export type PrivacyContent = typeof privacyContent;
