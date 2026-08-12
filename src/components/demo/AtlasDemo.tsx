import Link from "next/link";
import type { ReactNode } from "react";
import { getDemoLocale, type DemoLanguage } from "@/data/demo/scenario";

export function AtlasDemoShell({ children, role, lang }: { children: ReactNode; role: string; lang: DemoLanguage }) {
  const { copy } = getDemoLocale(lang);
  return <main className="min-h-screen bg-[#f3f7fb] text-[#14253d] [font-size:13px] leading-[1.5]">
    <header className="bg-[#092849] px-4 py-4 text-white md:px-8"><div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3">
      <Link href={`/${lang}/demo#demo-scenario`} className="text-[18px] font-bold tracking-[.08em]">ATLAS <span className="font-medium text-[#8fc5ff]">{lang === "zh" ? "天枢" : "DEMO"}</span></Link>
      <div className="flex items-center gap-3"><span>{role}</span><span className="border border-white/30 px-2 py-1 text-[11px]">{copy.sanitized}</span></div>
    </div></header>
    <div className="border-b border-[#e1b72c] bg-[#fff7d6] px-4 py-3 text-[#664d00] md:px-8"><div className="mx-auto max-w-[1500px] font-medium">{copy.boundaryBanner} · {copy.governanceBoundary}</div></div>
    <div className="mx-auto max-w-[1500px] px-4 py-7 md:px-8"><Link href={`/${lang}/demo#demo-scenario`} className="mb-5 inline-flex min-h-11 items-center rounded-sm border border-[#9cb3c9] bg-white px-4 font-semibold text-[#07579e] hover:bg-[#e8f3ff] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1667b1]">{copy.back}</Link>{children}</div>
  </main>;
}

export function LifecycleRail({ active, lang = "zh" }: { active?: string; lang?: DemoLanguage }) { const { lifecycle }=getDemoLocale(lang); return <div className="overflow-x-auto pb-2" aria-label={lang === "zh" ? "Atlas 调查生命周期" : "Atlas investigation lifecycle"}><ol className="flex min-w-[1450px] gap-2">{lifecycle.map((item,i)=><li key={item} className={`flex min-h-14 flex-1 items-center border px-3 text-[11px] font-semibold ${item.startsWith(active??"_")?"border-[#1667b1] bg-[#e8f3ff] text-[#07579e]":"border-[#ccd8e5] bg-white"}`}><span className="mr-2 text-[#77899b]">{String(i+1).padStart(2,"0")}</span>{item}</li>)}</ol></div> }
export function PageHeading({ eyebrow,title,description }:{eyebrow:string;title:string;description:string}) { return <div className="mb-7"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#1667b1]">{eyebrow}</p><h1 className="mt-2 text-[26px] font-semibold leading-tight">{title}</h1><p className="mt-3 max-w-4xl text-[14px] text-[#52667c]">{description}</p></div> }
export function ArtifactCard({ title,status,children,boundary,owner,lang }:{title:string;status?:string;children:ReactNode;boundary?:string;owner?:string;lang:DemoLanguage}) { const {copy}=getDemoLocale(lang); return <section className="border border-[#ccd8e5] bg-white p-5 shadow-[0_1px_2px_rgba(9,40,73,.05)]"><div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-[17px] font-semibold">{title}</h2>{status&&<span className="bg-[#e8f3ff] px-2 py-1 text-[11px] font-bold text-[#07579e]">{status}</span>}</div>{owner&&<p className="mt-2 text-[11px] text-[#66798d]">{copy.owner} · {owner}</p>}<div className="mt-4">{children}</div>{boundary&&<p className="mt-4 border-l-4 border-[#e1b72c] bg-[#fff9e5] p-3 text-[12px] text-[#664d00]">{copy.boundary} · {boundary}</p>}</section> }
export function ScenarioStrip({lang}:{lang:DemoLanguage}) { const {scenario,copy}=getDemoLocale(lang); return <div className="grid gap-px border border-[#ccd8e5] bg-[#ccd8e5] sm:grid-cols-2 lg:grid-cols-4">{[[copy.customer,scenario.customer],["REF",scenario.ref],["EP",scenario.evidencePack],["EGP",scenario.engagementPack]].map(([k,v])=><div className="bg-white p-3" key={k}><p className="text-[11px] text-[#66798d]">{k}</p><p className="mt-1 break-all font-mono text-[13px] font-semibold">{v}</p></div>)}</div> }
