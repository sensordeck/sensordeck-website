import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "联系我们",
    title: "从一个真实运行场景开始",
    description:
      "如果您的机器人已经进入真实部署，Atlas 可以从一个平台、一类运行异常和一个运维或工程团队开始。\n\n我们不会要求您替换现有 Cloud、Fleet Manager、告警、售后工单或工程流程。第一次交流，我们希望先了解您现在如何接收现场问题、保留运行时数据、开展工程调查，以及历史经验如何被下一次调查复用。",
  },

  options: [
    {
      eyebrow: "DESIGN PARTNER",
      title: "讨论一个真实调查场景",
      description:
        "从一个机器人平台、一类真实运行异常和一个运维或工程团队开始，共同验证 Atlas 是否能够改善现有调查流程。",
    },
    {
      eyebrow: "架构评审",
      title: "讨论您的运行时边界",
      description:
        "梳理机器人、传感器、Linux Runtime、ROS、网络与现有运维系统之间的调查边界，确认适合的 Atlas 接入范围。",
    },
    {
      eyebrow: "产品与技术",
      title: "了解 Atlas 如何工作",
      description:
        "了解 Runtime Evidence、Evidence Pack、Historical Recall、调查协作与组织记忆如何形成完整闭环。",
    },
  ],

  optionAction: "开始交流",

  formIntro: {
    eyebrow: "项目交流",
    title: "介绍一个您正在面对的运行时问题",
    description:
      "请简单介绍您的机器人平台、部署环境和当前调查流程。如果您希望讨论 Design Partner 项目，可以从一个真实、高频或难以复现的现场运行异常开始。\n\n提交后将使用您的默认 Email 应用打开邮件草稿，您可以检查内容后再发送给 SensorDeck 团队。",
    note:
      "Atlas 不替代您的 Cloud、Fleet Manager、售后工单或工程团队，也不自动判断根因或责任。我们希望先验证：现有团队能否更快获得调查证据、更少从零调查，并让已经完成的调查成为下一次可以复用的组织记忆。",
  },

  fields: {
    name: {
      label: "姓名",
      placeholder: "请输入您的姓名",
    },

    email: {
      label: "工作邮箱",
      placeholder: "请输入工作邮箱",
    },

    phone: {
      label: "手机号",
      placeholder: "请输入手机号",
    },

    wechat: {
      label: "微信号（选填）",
      placeholder: "请输入微信号",
    },

    company: {
      label: "公司名称",
      placeholder: "请输入公司名称",
    },

    role: {
      label: "职位",
      placeholder: "请输入您的职位",
    },

    organizationType: {
      label: "组织类型",
      placeholder: "请选择",
      options: [
        "机器人 OEM",
        "传感器制造商",
        "系统集成商",
        "机器人最终用户 / 运营方",
        "其他",
      ],
    },

    fleetScale: {
      label: "机器人平台 / 部署规模",
      placeholder: "例如：T10 / 已部署约 2,000 台",
    },

    primaryInterest: {
      label: "希望讨论的方向",
      placeholder: "请选择",
      options: [
        "Atlas Design Partner Program",
        "Atlas Runtime Investigation™",
        "Atlas Runtime Sensor Governance™",
        "部署与架构评审",
        "系统集成探讨",
        "产品演示与技术交流",
      ],
    },

    message: {
      label: "运行时场景 / 调查问题",
      placeholder:
        "例如：机器人现场偶发停机难以复现；类似问题在不同客户重复排查；Robot、Fleet Manager、网络和现场系统之间难以统一调查；历史调查经验难以在下一次工单中复用。",
    },
  },

  submit: "打开项目邮件草稿",

  emailSubject: "SensorDeck Atlas 项目交流 / Design Partner",

  privacyNotice: "提交表单即表示您同意我们按照",

  privacyPolicyLink: "隐私政策",

  privacyNoticeSuffix: "处理您的个人信息。",

  dataProtectionNote:
    "请勿在留言中包含密码、密钥、客户数据或其他敏感信息。",

  salesTitle: "希望先了解 Atlas 如何进入现有体系？",

  salesNote:
    "查看 Atlas 部署指南，了解 read-only Agent、运行时边界、Evidence Pack、调查流程以及从 Pilot 到 Production 的部署方式。",

  locations: {
    title: "全球办公室",

    offices: [
      {
        city: "中国 · 大湾区",
        name: "惠州深时传感科技有限公司",
        email: "sales@sensordeck.tech",
        address: "广东省惠州市惠南高新科技园演达路1号",
      },
      {
        city: "美国 · 加利福尼亚",
        name: "SensorDeck Inc.",
        email: "sales@sensordeck.tech",
        address:
          "555 Pierce St, Ste 842, Albany, CA 94706, United States",
      },
    ],

    assistVault: {
      title: "Atlas Non-identifiable Assist Vault™",
      description: "跨组织运行时调查知识交换",
      email: "assist@sensordeck.tech",
    },
  },
} satisfies ContactContent;
