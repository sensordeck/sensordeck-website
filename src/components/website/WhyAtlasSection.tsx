import {
  BarChart3,
  Box,
  Clock3,
  Network,
  Shield,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

interface Reason {
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
}

const reasons: Reason[] = [
  {
    icon: Clock3,
    titleZh: "缩短\n调查时间",
    titleEn: "Reduce\nInvestigation Time",
    descriptionZh: "借助边界明确的证据与历史案例召回，将调查时间从数天压缩到数小时。",
    descriptionEn: "From days to hours with bounded evidence and historical RGA recall.",
  },
  {
    icon: BarChart3,
    titleZh: "提升\n知识复用",
    titleEn: "Increase\nKnowledge Reuse",
    descriptionZh: "每一次调查都沉淀为可检索、可审查、可复用的组织记忆。",
    descriptionEn: "Every investigation strengthens your organizational memory.",
  },
  {
    icon: UsersRound,
    titleZh: "保护 Tier 3\n工程团队",
    titleEn: "Protect Tier 3\nEngineering",
    descriptionZh: "让核心工程师专注于高价值分析，而不是重复寻找日志和重建时间线。",
    descriptionEn: "Core engineers focus on innovation, not repeated incident firefighting.",
  },
  {
    icon: Network,
    titleZh: "改善 OEM\n与传感器厂协作",
    titleEn: "Cross-OEM\nLearning",
    descriptionZh: "通过统一证据与协同调查包 EGP，减少跨团队反复确认、责任争议与沟通损耗。",
    descriptionEn: "Learn from industry experience while protecting privacy.",
  },
  {
    icon: Box,
    titleZh: "支撑跨 SKU\n扩展",
    titleEn: "Cross-SKU\nScalability",
    descriptionZh: "同一套运行时治理能力可复用于不同机器人、传感器和部署环境。",
    descriptionEn: "One infrastructure scales across robots, sensors, and platforms.",
  },
  {
    icon: Shield,
    titleZh: "持续提升\n产品与运营",
    titleEn: "Stronger Products\n& Operations",
    descriptionZh: "将调查结果转化为可靠性改进、供应商管理和运营决策依据。",
    descriptionEn: "Improve reliability, customer trust, and deployment success.",
  },
];

interface WhyAtlasSectionProps {
  lang: "zh" | "en";
}

export default function WhyAtlasSection({ lang }: WhyAtlasSectionProps) {
  const isChinese = lang === "zh";

  return (
    <section id="why-atlas" className="border-b border-border bg-surface py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-6xl">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow md:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
            {isChinese ? "04 / 为什么选择 Atlas" : "04 / Why Atlas"}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink md:mt-6 md:text-4xl lg:text-5xl xl:text-[3.35rem]">
            {isChinese
              ? "减少重复调查，保护核心工程资源"
              : "Deliver More Value with Less Engineering Cost"}
          </h2>
          <p className="mt-4 max-w-5xl text-base leading-7 text-ink/80 md:mt-5 md:text-lg md:leading-8 lg:text-xl">
            {isChinese
              ? "Atlas 将一次次分散、重复的事故排查，转化为可复用的证据、调查资产和组织知识。通过缩短调查周期、减少 Tier 3 工程师被重复事故牵制，让每一次调查持续改善产品、供应商协作与运营决策。"
              : "Atlas helps organizations reduce investigation cost, protect core engineering resources, and continuously improve products and operations."}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8 xl:grid-cols-6 xl:gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.titleEn}
                className="flex min-h-[19rem] flex-col items-center border border-border bg-white px-5 py-8 text-center shadow-[0_2px_8px_rgba(10,26,42,0.03)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(10,26,42,0.08)] md:min-h-[23rem] md:px-6 md:py-10 lg:min-h-[25rem] lg:py-12 xl:min-h-[28rem] xl:px-4"
              >
                <Icon
                  aria-hidden="true"
                  className="size-12 text-atlas-blue md:size-16 lg:size-20"
                  strokeWidth={1.7}
                />
                <h3 className="mt-6 whitespace-pre-line text-lg font-semibold leading-7 text-ink md:mt-8 md:text-xl md:leading-8 lg:mt-10">
                  {isChinese ? reason.titleZh : reason.titleEn}
                </h3>
                <p className="mt-5 text-base leading-7 text-muted md:mt-8 md:text-lg md:leading-8 lg:mt-10 xl:text-base">
                  {isChinese ? reason.descriptionZh : reason.descriptionEn}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
