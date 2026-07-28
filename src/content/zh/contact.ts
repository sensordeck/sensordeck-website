import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "联系我们",
    title: "从机器人部署之后开始",
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
    eyebrow: "预约产品演示",
    title: "简单说两句您的场景",
    description:
      "请简单介绍您的机器人平台、主要传感器、部署环境，以及目前希望解决的运维问题。我们会根据这些信息准备更有针对性的交流内容，让第一次沟通更高效、更聚焦。\n\n提交后将用你的 email default app 打开邮件草稿，发送给 SensorDeck 团队，您可以检查内容后再发送。",
    note:
      "我们关注的是：机器人跑起来之后，故障怎么查得快、查得准，不让现场FAE一个人扛着。Atlas 不替代您的工程师或运维，而是帮团队把排查能力沉淀下来。 换个人也能查，换个项目也能用。",
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
        "机器人 OEM 运维团队",
        "传感器制造商 FAE 运维团队",
        "系统集成商",
        "其他",
      ],
    },

    fleetScale: {
      label: "设备集群 / 产品规模",
      placeholder: "例如：已部署 2,000 台设备",
    },

    primaryInterest: {
      label: "主要关注方向",
      placeholder: "请选择",
      options: [
        "Atlas Runtime Investigation™",
        "Atlas Runtime Sensor Governance™",
        "部署与架构评审",
        "系统集成探讨",
      ],
    },

    message: {
      label: "运行时场景",
      placeholder:
        "请介绍您的机器人平台、主要传感器、部署环境，以及目前希望解决的运行时问题。",
    },
  },

  submit: "打开邮件草稿",

  emailSubject: "SensorDeck 产品演示与技术交流申请",

  privacyNotice: "提交表单即表示您同意我们按照",

  privacyPolicyLink: "隐私政策",

  privacyNoticeSuffix: "处理您的个人信息。",

  dataProtectionNote:
    "请勿在留言中包含密码、密钥、客户数据或其他敏感信息。",

  salesTitle: "希望先了解 Atlas？",

  salesNote:
    "您也可以先阅读 Atlas 中文部署指南，了解系统架构、安装部署流程、运行时治理模型以及产品能力。",

  locations: {
    title: "全球办公室",

    offices: [
      {
        city: "中国 · 大湾区",
        name: "惠州深时传感科技有限公司",
        email: "sales@sensordeck.tech",
        address: "广东省惠州市",
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
