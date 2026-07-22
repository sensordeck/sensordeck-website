import {
  ArrowRight,
  BookOpen,
  FileText,
  MonitorPlay,
  type LucideIcon,
} from "lucide-react";
import { localizeHref } from "@/lib/i18n";

interface Resource {
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  actionZh: string;
  actionEn: string;
  href: string;
  external?: boolean;
}

const resources: Resource[] = [
  {
    icon: FileText,
    titleZh: "技术白皮书",
    titleEn: "Technical White Papers",
    descriptionZh: "阅读我们关于运行时治理、调查和组织记忆的白皮书。",
    descriptionEn: "Read our white papers on runtime governance, investigation, and organizational memory.",
    actionZh: "查看白皮书",
    actionEn: "View White Papers",
    href: "/library/white-papers",
  },
  {
    icon: BookOpen,
    titleZh: "文档",
    titleEn: "Documentation",
    descriptionZh: "查阅关于 Atlas 平台、模块、数据模型和最佳实践的详细文档。",
    descriptionEn: "Detailed docs on Atlas platform, modules, data model, and best practices.",
    actionZh: "打开文档",
    actionEn: "Open Documentation",
    href: "https://docs.sensordeck.tech",
    external: true,
  },
  {
    icon: MonitorPlay,
    titleZh: "2 分钟概览",
    titleEn: "2-Min Overview",
    descriptionZh: "观看一段短视频，了解 Atlas 如何将运行时事件转化为组织知识。",
    descriptionEn: "Watch a short video to see how Atlas turns runtime incidents into organizational knowledge.",
    actionZh: "立即观看",
    actionEn: "Watch Now",
    href: "/demo",
  },
];

interface WorkflowSectionProps {
  lang: "zh" | "en";
}

export default function WorkflowSection({ lang }: WorkflowSectionProps) {
  const isChinese = lang === "zh";

  return (
    <section id="resources" className="border-b border-border bg-surface py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-6xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-atlas-blue md:text-sm lg:text-base">
            {isChinese ? "07 / 资源" : "07 / Resources"}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink md:mt-6 md:text-4xl lg:text-5xl xl:text-[3.35rem]">
            {isChinese ? "探索技术资源" : "Explore Technical Resources"}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/80 md:mt-5 md:text-lg md:leading-8 lg:text-xl">
            {isChinese
              ? "加深您对 Atlas 架构、工作流程及真实价值的理解。"
              : "Deepen your understanding of Atlas architecture, workflows, and real-world value."}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            const href = resource.external
              ? resource.href
              : localizeHref(lang, resource.href);

            return (
              <article
                key={resource.titleEn}
                className="flex min-h-[20rem] flex-col border border-border bg-white p-5 shadow-[0_2px_8px_rgba(10,26,42,0.03)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(10,26,42,0.08)] md:min-h-[23rem] md:p-8 lg:min-h-[25rem] lg:p-10"
              >
                <div className="flex flex-col items-start">
                  <Icon
                    aria-hidden="true"
                    className="size-12 shrink-0 text-atlas-blue md:size-16 lg:size-20"
                    strokeWidth={1.7}
                  />
                  <div className="mt-5 min-w-0 md:mt-7 lg:mt-8">
                    <h3 className="text-xl font-semibold leading-8 text-ink md:text-2xl md:leading-9">
                      {isChinese ? resource.titleZh : resource.titleEn}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted md:mt-5 md:text-lg md:leading-8">
                      {isChinese ? resource.descriptionZh : resource.descriptionEn}
                    </p>
                  </div>
                </div>
                <a
                  className="mt-auto inline-flex min-h-11 w-full items-center justify-between gap-4 pt-8 text-base font-semibold text-atlas-blue transition-colors hover:text-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atlas-blue sm:w-fit sm:justify-start md:pt-10 md:text-lg lg:text-xl"
                  href={href}
                  rel={resource.external ? "noreferrer" : undefined}
                  target={resource.external ? "_blank" : undefined}
                >
                  {isChinese ? resource.actionZh : resource.actionEn}
                  <ArrowRight aria-hidden="true" className="size-6 md:size-7" strokeWidth={1.8} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
