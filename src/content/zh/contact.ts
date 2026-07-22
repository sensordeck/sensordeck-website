import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  hero: {
    eyebrow: "联系我们",
    title: "从您的运行时边界开始",
    description:
      "每一家机器人公司都有不同的运行时边界、调查流程和组织目标。第一次交流，我们希望先了解您的真实场景，共同评估 Atlas 是否适合您的团队。\n\n无论您正在开发新的机器人平台、优化已有产品，还是建立运行时调查体系，我们都欢迎您介绍当前的运行环境、工程挑战和组织需求，让第一次交流直接围绕真实问题展开。",
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
    title: "分享您的运行时场景",
    description:
      "请简单介绍您的机器人平台、主要传感器、部署环境，以及目前希望解决的运行时问题。我们会根据这些信息准备更有针对性的交流内容，让第一次沟通更高效、更聚焦。\n\n提交后将打开一封发送给 SensorDeck 团队的邮件草稿，您可以检查内容后再发送。",
    note:
      "我们关注运行时治理、证据边界、调查流程，以及 OEM 与传感器制造商之间的协作方式。Atlas 不替代您的工程团队，而是帮助团队建立可持续复用的运行时调查能力。",
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
    title: "联系我们",

    offices: [
      {
        city: "中国",
        name: "SensorDeck 中国 - 惠州深时传感科技有限公司",
        email: "sales.china@sensordeck.tech",
        address: "广东惠州",
      },
      {
        city: "美国",
        name: "SensorDeck Inc",
        email: "contact@sensordeck.tech",
        address: "555 Pierce St, Ste 842 Albany CA 94706, United States",
      },
    ],
  },
} satisfies ContactContent;
