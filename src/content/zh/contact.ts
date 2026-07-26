import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "联系我们",
    title: "从机器人部署之后开始",
    description:
      "不管您是做整机、搞客户运维支持的，还是一线跑现场的FAE， Atlas 就是为了帮您把事故查清楚并解决问题而设计的。\n\n第一次沟通，我们只想弄清楚几件事：您的机器人跑在什么环境里（产线、仓储、室外，还是楼宇内）？现场事故出现后，团队要花多久才能定位？传感器数据、系统日志、现场信息，现在是分开查还是串在一起查？",
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
      title: "获取技术文档",
      description:
        "了解 Atlas 的系统架构、运行时治理模型、部署流程和产品能力。",
    },
    {
      eyebrow: "产品演示",
      title: "在真实场景中了解 Atlas",
      description:
        "通过代表性的运行时调查流程，了解证据保留、事件窗口和组织记忆如何形成。",
    },
  ],

  optionAction: "联系团队",

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
        "机器人 OEM",
        "传感器制造商",
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
        "技术文档",
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
