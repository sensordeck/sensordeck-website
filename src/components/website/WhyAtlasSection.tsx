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
    descriptionZh: "借助有界证据与历史 RGA 召回，将调查时间从数天缩短到数小时。",
    descriptionEn: "From days to hours with bounded evidence and historical RGA recall.",
  },
  {
    icon: BarChart3,
    titleZh: "提升\n知识复用",
    titleEn: "Increase\nKnowledge Reuse",
    descriptionZh: "每一次调查都会强化您的组织记忆。",
    descriptionEn: "Every investigation strengthens your organizational memory.",
  },
  {
    icon: UsersRound,
    titleZh: "保护 Tier 3\n工程团队",
    titleEn: "Protect Tier 3\nEngineering",
    descriptionZh: "让核心工程师专注于创新，而非重复性的事故救火。",
    descriptionEn: "Core engineers focus on innovation, not repeated incident firefighting.",
  },
  {
    icon: Network,
    titleZh: "跨 OEM\n学习",
    titleEn: "Cross-OEM\nLearning",
    descriptionZh: "在保护隐私的同时学习行业经验。",
    descriptionEn: "Learn from industry experience while protecting privacy.",
  },
  {
    icon: Box,
    titleZh: "跨 SKU\n可扩展性",
    titleEn: "Cross-SKU\nScalability",
    descriptionZh: "一套基础设施即可扩展到机器人、传感器和平台。",
    descriptionEn: "One infrastructure scales across robots, sensors, and platforms.",
  },
  {
    icon: Shield,
    titleZh: "更强的产品\n与运营",
    titleEn: "Stronger Products\n& Operations",
    descriptionZh: "提升可靠性、客户信任与部署成功率。",
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
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-atlas-blue md:text-sm lg:text-base">
            {isChinese ? "06 / 领导者为何选择 ATLAS" : "06 / Why Leaders Choose Atlas"}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink md:mt-6 md:text-4xl lg:text-5xl xl:text-[3.35rem]">
            {isChinese
              ? "以更少的工程成本，创造更多价值"
              : "Deliver More Value with Less Engineering Cost"}
          </h2>
          <p className="mt-4 max-w-5xl text-base leading-7 text-ink/80 md:mt-5 md:text-lg md:leading-8 lg:text-xl">
            {isChinese
              ? "Atlas 帮助组织降低调查成本，保护核心工程资源，并持续改进产品与运营。"
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
