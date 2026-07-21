import Button from "@/components/website/Button";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { getLegacyTranslations, getProductsContent } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { translateLegacyTree } from "@/lib/legacy-i18n";
import { notFound } from "next/navigation";import { legacyZhCopy } from "@/content/zh/legacy-page-copy";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[9px] size-1.5 shrink-0 rounded-full bg-atlas-blue" />);


}

function FeatureList({ items }: {items: string[];}) {
  return (
    <ul className="grid gap-3">
      {items.map((item) =>
      <li
        key={item}
        className="flex items-start gap-3 text-sm leading-7 text-ink md:text-base">
        
          <CheckIcon />
          <span>{item}</span>
        </li>
      )}
    </ul>);

}

const investigationFlow = [
{
  number: "01",
  title: "REF Intake",
  description: legacyZhCopy.runtimeInvestigation.text001

},
{
  number: "02",
  title: "Evidence Pack",
  description: legacyZhCopy.runtimeInvestigation.text002

},
{
  number: "03",
  title: "Historical RGA Recall",
  description: legacyZhCopy.runtimeInvestigation.text003

},
{
  number: "04",
  title: "Investigation Context",
  description: legacyZhCopy.runtimeInvestigation.text004

},
{
  number: "05",
  title: legacyZhCopy.runtimeInvestigation.text005,
  description: legacyZhCopy.runtimeInvestigation.text006

},
{
  number: "06",
  title: "Engineering Investigation",
  description: legacyZhCopy.runtimeInvestigation.text007

},
{
  number: "07",
  title: "IR · LL · Closure",
  description: legacyZhCopy.runtimeInvestigation.text008

},
{
  number: "08",
  title: "RGA · Assist Vault · Reuse",
  description: legacyZhCopy.runtimeInvestigation.text009

}];


const refExamples = [
"Unexpected Stop",
"Collision",
"Obstacle Miss",
"False Obstacle",
"Localization Failure",
"Path Deviation",
"Fall",
"Manipulation Failure"];


const coreCapabilities = [
{
  title: legacyZhCopy.runtimeInvestigation.text010,
  description: legacyZhCopy.runtimeInvestigation.text011

},
{
  title: legacyZhCopy.runtimeInvestigation.text012,
  description: legacyZhCopy.runtimeInvestigation.text013

},
{
  title: legacyZhCopy.runtimeInvestigation.text014,
  description: legacyZhCopy.runtimeInvestigation.text015

},
{
  title: legacyZhCopy.runtimeInvestigation.text016,
  description: legacyZhCopy.runtimeInvestigation.text017

},
{
  title: legacyZhCopy.runtimeInvestigation.text018,
  description: legacyZhCopy.runtimeInvestigation.text019

},
{
  title: legacyZhCopy.runtimeInvestigation.text020,
  description: legacyZhCopy.runtimeInvestigation.text021

}];


const primaryOutputs = [
{
  title: "REF Ticket",
  description: legacyZhCopy.runtimeInvestigation.text022
},
{
  title: "Evidence Pack™",
  description: legacyZhCopy.runtimeInvestigation.text023
},
{
  title: "Historical RGA Match Result",
  description: legacyZhCopy.runtimeInvestigation.text024
},
{
  title: "Investigation Context",
  description: legacyZhCopy.runtimeInvestigation.text025
},
{
  title: legacyZhCopy.runtimeInvestigation.text005,
  description: legacyZhCopy.runtimeInvestigation.text026
},
{
  title: "Sensor Engagement Pack™",
  description: legacyZhCopy.runtimeInvestigation.text027
},
{
  title: "IR · LL · Closure",
  description: legacyZhCopy.runtimeInvestigation.text028
},
{
  title: "RGA · Assist Vault",
  description: legacyZhCopy.runtimeInvestigation.text029
}];


const atlasSupports = [legacyZhCopy.runtimeInvestigation.text030, legacyZhCopy.runtimeInvestigation.text031, legacyZhCopy.runtimeInvestigation.text032, legacyZhCopy.runtimeInvestigation.text033,




"Investigation Context", legacyZhCopy.runtimeInvestigation.text005,

"OEM Tier 1 / Tier 2 / Tier 3 Workflow",
"Sensor Manufacturer FAE Workflow",
"Sensor Engagement Pack Mode A / Mode B",
"IR / LL / Closure Artifact Management", legacyZhCopy.runtimeInvestigation.text034, legacyZhCopy.runtimeInvestigation.text035];




const atlasDoesNotDo = [legacyZhCopy.runtimeInvestigation.text036, legacyZhCopy.runtimeInvestigation.text037, legacyZhCopy.runtimeInvestigation.text038, legacyZhCopy.runtimeInvestigation.text039, legacyZhCopy.runtimeInvestigation.text040, legacyZhCopy.runtimeInvestigation.text041];








export default async function RuntimeInvestigationPage({
  params


}: {params: Promise<{lang: string;}>;}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const [productsContent, translations] = await Promise.all([
  getProductsContent(lang),
  getLegacyTranslations(lang)]
  );

  return translateLegacyTree(
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1 py-12 sm:py-16 lg:py-20">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">{legacyZhCopy.runtimeInvestigation.text042}

            </p>

            <h1 className="mt-4 max-w-5xl text-[34px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
              Atlas Runtime Investigation™
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{legacyZhCopy.runtimeInvestigation.text043}


            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">{legacyZhCopy.runtimeInvestigation.text044}




            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")}>
                {productsContent.ctaText}
              </Button>

              <Button className="w-full sm:w-auto" href={localizeHref(lang, "/products")} variant="outline">{legacyZhCopy.runtimeInvestigation.text045}

              </Button>
            </div>
          </div>
        </Section>

        {/* Product statement */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Runtime Execution Failure
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{legacyZhCopy.runtimeInvestigation.text046}

                <br />{legacyZhCopy.runtimeInvestigation.text047}

              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{legacyZhCopy.runtimeInvestigation.text048}



              </p>

              <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-white">{legacyZhCopy.runtimeInvestigation.text049}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {refExamples.map((item) =>
              <div
                key={item}
                className="min-w-0 border border-white/15 bg-white/[0.04] px-4 py-4 font-mono text-xs font-semibold leading-6 break-words text-white/85">
                
                  {item}
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* Investigation flow */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Standard Investigation Chain
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeInvestigation.text050}

              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeInvestigation.text051}


              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {investigationFlow.map((step) =>
              <article
                key={step.number}
                className="min-h-[230px] bg-white p-6 md:p-7">
                
                  <span className="font-mono text-xs font-semibold text-atlas-blue">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </article>
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
              <p className="text-center text-base font-semibold leading-8 text-ink md:text-lg">{legacyZhCopy.runtimeInvestigation.text052}

                <br className="sm:hidden" />{legacyZhCopy.runtimeInvestigation.text053}

              </p>
            </div>
          </div>
        </Section>

        {/* Core capabilities */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Core Capabilities
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeInvestigation.text054}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeInvestigation.text055}


                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                {coreCapabilities.map((capability) =>
                <article
                  key={capability.title}
                  className="bg-white p-6 md:p-8">
                  
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {capability.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {capability.description}
                    </p>
                  </article>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* OEM and Sensor collaboration */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                OEM ↔ Sensor Manufacturer
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeInvestigation.text056}

              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeInvestigation.text057}




              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {[
              "OEM REF",
              "Evidence Pack",
              "Engagement Pack",
              "Sensor REF",
              "Sensor IR / LL",
              "OEM Closure"].
              map((step, index, items) =>
              <div
                key={step}
                className="flex min-h-[150px] flex-col justify-between border border-border bg-white p-5">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index < items.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <p className="mt-8 text-sm font-semibold leading-6 text-ink">
                    {step}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                  Exchange Mode A
                </p>

                <h3 className="mt-4 text-xl font-semibold text-ink">
                  Raw Evidence Reference
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">{legacyZhCopy.runtimeInvestigation.text058}



                </p>
              </article>

              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                  Exchange Mode B
                </p>

                <h3 className="mt-4 text-xl font-semibold text-ink">
                  Signature and Recall
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">{legacyZhCopy.runtimeInvestigation.text059}



                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Investigation Assets
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeInvestigation.text060}

                <br />{legacyZhCopy.runtimeInvestigation.text061}

              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {primaryOutputs.map((output) =>
              <article
                key={output.title}
                className="border border-border bg-white p-6">
                
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {output.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {output.description}
                  </p>
                </article>
              )}
            </div>
          </div>
        </Section>

        {/* Boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Atlas Supports
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{legacyZhCopy.runtimeInvestigation.text062}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasSupports} />
                </div>
              </article>

              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
                  Constitutional Boundary
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{legacyZhCopy.runtimeInvestigation.text063}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-sm font-semibold leading-7 text-ink">{legacyZhCopy.runtimeInvestigation.text064}

                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Relationship */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Sensor Governance™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.runtimeInvestigation.text065}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  Observe → Persist → Retain → Export → Evidence Pack
                </p>
              </article>

              <div className="hidden items-center justify-center px-3 text-2xl text-atlas-blue lg:flex">
                <ArrowIcon />
              </div>

              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Investigation™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.runtimeInvestigation.text066}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  Recall → Context → Investigation → IR / LL → Closure → RGA
                  → Reuse
                </p>
              </article>
            </div>
          </div>
        </Section>

               {/* Final CTA */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
              From Evidence to Organizational Memory
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">{legacyZhCopy.runtimeInvestigation.text067}

              <br />{legacyZhCopy.runtimeInvestigation.text068}

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{legacyZhCopy.runtimeInvestigation.text069}


            </p>

            <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              <Button className="w-full sm:w-auto" href={localizeHref(lang, "/contact")}>
                {productsContent.ctaText}
              </Button>

              <a
                href={localizeHref(lang, "/products/runtime-sensor-governance")}
                className="inline-flex min-h-11 w-full items-center justify-center border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink sm:w-auto">{legacyZhCopy.runtimeInvestigation.text070}


              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>,
    translations);
}
