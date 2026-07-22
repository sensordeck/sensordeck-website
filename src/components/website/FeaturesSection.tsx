import {
  ArrowRight,
  Box,
  Database,
  FileCheck2,
  LockKeyhole,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

interface PlatformModule {
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
}

const platformModules: PlatformModule[] = [
  {
    icon: WalletCards,
    titleZh: "Atlas 智能体™",
    titleEn: "Atlas Agent™",
    descriptionZh: "（观察与采集）",
    descriptionEn: "(Observe & Capture)",
  },
  {
    icon: FileCheck2,
    titleZh: "证据包™",
    titleEn: "Evidence Pack™",
    descriptionZh: "（标准化）",
    descriptionEn: "(Standardized)",
  },
  {
    icon: Database,
    titleZh: "历史 RGA™",
    titleEn: "Historical RGA™",
    descriptionZh: "（可复用知识）",
    descriptionEn: "(Reusable Knowledge)",
  },
  {
    icon: UsersRound,
    titleZh: "调查工作区™",
    titleEn: "Investigation Workspace™",
    descriptionZh: "（协作）",
    descriptionEn: "(Collaboration)",
  },
  {
    icon: Box,
    titleZh: "Assist 知识库™",
    titleEn: "Assist Vault™",
    descriptionZh: "（组织记忆）",
    descriptionEn: "(Organization Memory)",
  },
];

interface FeaturesSectionProps {
  lang: "zh" | "en";
}

export default function FeaturesSection({ lang }: FeaturesSectionProps) {
  const isChinese = lang === "zh";

  return (
    <section
      id="shared-platform"
      className="border-b border-border bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="text-center">
          <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow md:text-eyebrow-md lg:text-eyebrow-lg text-atlas-blue">
            {isChinese ? "05 / 统一共享平台" : "05 / One Shared Platform"}
          </p>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:mt-6 md:text-section-title-md">
            {isChinese ? "一个平台，双方共享。" : "One Platform. Shared by Both."}
          </h2>
          <p className="mt-4 text-body leading-7 text-ink/80 md:mt-5 md:text-body-lg md:leading-8 lg:text-body-lg-md">
            {isChinese
              ? "Atlas 产品运行在同一套运行时智能基础设施之上。"
              : "Atlas products run on the same runtime intelligence infrastructure."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start md:mt-14 lg:mt-20 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-5 xl:gap-x-8">
          {platformModules.map((module, index) => {
            const Icon = module.icon;

            return (
              <div key={module.titleEn} className="contents">
                <div className="flex min-w-0 flex-col items-center px-4 py-2 text-center md:py-3 lg:px-0 lg:py-0">
                  <Icon
                    aria-hidden="true"
                    className="size-12 text-atlas-blue md:size-16 lg:size-20"
                    strokeWidth={1.8}
                  />
                  <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:mt-6 md:text-card-title-md lg:mt-7 lg:text-card-title-lg">
                    {isChinese ? module.titleZh : module.titleEn}
                  </h3>
                  <p className="mt-2 text-label leading-6 text-ink md:mt-3 md:text-body md:leading-7 lg:text-body-lg">
                    {isChinese ? module.descriptionZh : module.descriptionEn}
                  </p>
                </div>
                {index < platformModules.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="mx-auto my-3 size-6 rotate-90 self-center text-atlas-blue/70 md:my-4 md:size-7 lg:my-0 lg:block lg:rotate-0"
                    strokeWidth={1.8}
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex min-h-24 flex-col items-center justify-center gap-3 rounded-lg bg-surface-blue px-4 py-5 text-center md:mt-14 md:min-h-28 md:flex-row md:gap-5 md:px-6 lg:mt-16">
          <LockKeyhole
            aria-hidden="true"
            className="size-7 shrink-0 text-atlas-blue md:size-9"
            strokeWidth={1.9}
          />
          <p className="text-body font-semibold leading-6 text-atlas-blue md:text-body-lg-md md:leading-8">
            {isChinese ? "安全、私密、由您掌控。" : "Secure. Private. Owned by You."}
          </p>
        </div>
      </div>
    </section>
  );
}
