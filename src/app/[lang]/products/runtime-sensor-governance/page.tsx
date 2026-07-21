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

function DotIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[10px] size-1.5 shrink-0 rounded-full bg-atlas-blue" />);


}

function FeatureList({ items }: {items: string[];}) {
  return (
    <ul className="grid gap-3">
      {items.map((item) =>
      <li
        key={item}
        className="flex items-start gap-3 text-sm leading-7 text-ink md:text-base">
        
          <DotIcon />
          <span>{item}</span>
        </li>
      )}
    </ul>);

}

const agentCapabilities = [
{
  number: "01",
  title: "Observe",
  description: legacyZhCopy.runtimeSensorGovernance.text001

},
{
  number: "02",
  title: "Persist",
  description: legacyZhCopy.runtimeSensorGovernance.text002

},
{
  number: "03",
  title: "Retain",
  description: legacyZhCopy.runtimeSensorGovernance.text003

},
{
  number: "04",
  title: "Export",
  description: legacyZhCopy.runtimeSensorGovernance.text004

}];


const eventGenerationModes = [
{
  label: "Manual Event Window",
  title: legacyZhCopy.runtimeSensorGovernance.text005,
  description: legacyZhCopy.runtimeSensorGovernance.text006,

  examples: [legacyZhCopy.runtimeSensorGovernance.text007, legacyZhCopy.runtimeSensorGovernance.text008, legacyZhCopy.runtimeSensorGovernance.text009, legacyZhCopy.runtimeSensorGovernance.text010]





},
{
  label: "Automatic Detection",
  title: "Dataset Abnormal + Cross-stream Correlation",
  description: legacyZhCopy.runtimeSensorGovernance.text011,

  examples: [legacyZhCopy.runtimeSensorGovernance.text012,

  "Camera Frame Interruption",
  "USB / Ethernet Disconnect", legacyZhCopy.runtimeSensorGovernance.text013]


}];


const evidenceWindows = [
{
  number: "01",
  title: "Pre-Guard",
  description: legacyZhCopy.runtimeSensorGovernance.text014

},
{
  number: "02",
  title: "Baseline",
  description: legacyZhCopy.runtimeSensorGovernance.text015

},
{
  number: "03",
  title: "Deviation",
  description: legacyZhCopy.runtimeSensorGovernance.text016

},
{
  number: "04",
  title: "Recovery",
  description: legacyZhCopy.runtimeSensorGovernance.text017

},
{
  number: "05",
  title: "Post-Guard",
  description: legacyZhCopy.runtimeSensorGovernance.text018

}];


const runtimeSurfaces = [
"Camera",
"LiDAR",
"IMU",
"GNSS",
"USB",
"Ethernet",
"CAN",
"Power",
"Timing / PPS",
"Linux Runtime",
"Driver Runtime",
"ROS Topic"];


const outputs = [
{
  title: "Runtime Dataset™",
  description: legacyZhCopy.runtimeSensorGovernance.text019

},
{
  title: "Evidence Window",
  description: legacyZhCopy.runtimeSensorGovernance.text020

},
{
  title: "Evidence Pack™",
  description: legacyZhCopy.runtimeSensorGovernance.text021

},
{
  title: "Runtime Timeline",
  description: legacyZhCopy.runtimeSensorGovernance.text022

},
{
  title: "Surface Coverage Snapshot",
  description: legacyZhCopy.runtimeSensorGovernance.text023

},
{
  title: legacyZhCopy.runtimeSensorGovernance.text024,
  description: legacyZhCopy.runtimeSensorGovernance.text025

},
{
  title: "Export Bundle",
  description: legacyZhCopy.runtimeSensorGovernance.text026

},
{
  title: "Investigation Entry",
  description: legacyZhCopy.runtimeSensorGovernance.text027

}];


const atlasSupports = [legacyZhCopy.runtimeSensorGovernance.text028, legacyZhCopy.runtimeSensorGovernance.text029, legacyZhCopy.runtimeSensorGovernance.text030, legacyZhCopy.runtimeSensorGovernance.text031, legacyZhCopy.runtimeSensorGovernance.text032, legacyZhCopy.runtimeSensorGovernance.text033,






"Cross-stream Correlation",
"Five-Window Evidence Model", legacyZhCopy.runtimeSensorGovernance.text034, legacyZhCopy.runtimeSensorGovernance.text035,


"Runtime Surface Coverage", legacyZhCopy.runtimeSensorGovernance.text024, legacyZhCopy.runtimeSensorGovernance.text036];




const atlasDoesNotDo = [legacyZhCopy.runtimeSensorGovernance.text037, legacyZhCopy.runtimeSensorGovernance.text038, legacyZhCopy.runtimeSensorGovernance.text039, legacyZhCopy.runtimeSensorGovernance.text040, legacyZhCopy.runtimeSensorGovernance.text041, legacyZhCopy.runtimeSensorGovernance.text042, legacyZhCopy.runtimeSensorGovernance.text043];









export default async function RuntimeSensorGovernancePage({
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
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
              Sensor Runtime Boundary
            </p>

            <h1 className="mt-4 max-w-5xl text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
              Atlas Runtime Sensor Governance™
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{legacyZhCopy.runtimeSensorGovernance.text044}

            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg">{legacyZhCopy.runtimeSensorGovernance.text045}



            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={localizeHref(lang, "/contact")}>
                {productsContent.ctaText}
              </Button>

              <Button href={localizeHref(lang, "/products")} variant="outline">{legacyZhCopy.runtimeSensorGovernance.text046}

              </Button>
            </div>
          </div>
        </Section>

        {/* Core positioning */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Runtime Evidence Chain
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text047}

                <br />{legacyZhCopy.runtimeSensorGovernance.text048}

              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text049}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item) =>
              <article
                key={item.number}
                className="min-h-[220px] border border-white/15 bg-white/[0.04] p-5">
                
                  <span className="font-mono text-xs font-semibold text-[#70a9ff]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              )}
            </div>
          </div>
        </Section>

        {/* Runtime boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Boundary
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text050}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text051}

                </p>
              </div>

              <div>
                <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {runtimeSurfaces.map((surface) =>
                  <div
                    key={surface}
                    className="bg-white px-5 py-5 font-mono text-sm font-semibold text-ink">
                    
                      {surface}
                    </div>
                  )}
                </div>

                <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6">
                  <p className="text-sm font-semibold leading-7 text-ink md:text-base">
                    Physical Sensor → Raw Output → Power / Bus → Linux Kernel /
                    Driver → ROS Topic / Application Callback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Agent chain */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Atlas Agent
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Observe → Persist → Retain → Export
              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text052}

              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item, index) =>
              <article
                key={item.title}
                className="flex min-h-[230px] flex-col border border-border bg-white p-6">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {item.number}
                    </span>

                    {index < agentCapabilities.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              )}
            </div>
          </div>
        </Section>

        {/* Event generation */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Evidence Pack Generation
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text053}

                <br />{legacyZhCopy.runtimeSensorGovernance.text054}

              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text055}


              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {eventGenerationModes.map((mode) =>
              <article
                key={mode.label}
                className="border border-border bg-white p-7 md:p-9">
                
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-atlas-blue">
                    {mode.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                    {mode.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    {mode.description}
                  </p>

                  <div className="mt-7">
                    <FeatureList items={mode.examples} />
                  </div>
                </article>
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 text-center md:p-8">
              <p className="text-base font-semibold leading-8 text-ink md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text056}


              </p>
            </div>
          </div>
        </Section>

        {/* Five-window model */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Five-Window Evidence Model
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text057}

                <br />{legacyZhCopy.runtimeSensorGovernance.text058}

              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text059}


              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {evidenceWindows.map((window, index) =>
              <article
                key={window.number}
                className="flex min-h-[240px] flex-col border border-border bg-surface p-6">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-atlas-blue">
                      {window.number}
                    </span>

                    {index < evidenceWindows.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
                    {window.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {window.description}
                  </p>
                </article>
              )}
            </div>
          </div>
        </Section>

        {/* Candidate tier */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
                Investigation Routing
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text060}

                <br />{legacyZhCopy.runtimeSensorGovernance.text061}

              </h2>

              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text062}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
              {
                title: "Tier 1",
                description: legacyZhCopy.runtimeSensorGovernance.text063
              },
              {
                title: "Tier 2",
                description: legacyZhCopy.runtimeSensorGovernance.text064
              },
              {
                title: "Tier 3",
                description: legacyZhCopy.runtimeSensorGovernance.text065
              },
              {
                title: "Sensor FAE",
                description: legacyZhCopy.runtimeSensorGovernance.text066

              }].
              map((tier) =>
              <article
                key={tier.title}
                className="border border-white/15 bg-white/[0.04] p-6">
                
                  <h3 className="text-xl font-semibold text-white">
                    {tier.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {tier.description}
                  </p>
                </article>
              )}
            </div>

            <p className="lg:col-span-2 text-sm font-semibold leading-7 text-white/85">{legacyZhCopy.runtimeSensorGovernance.text067}


            </p>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                Runtime Evidence Assets
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.runtimeSensorGovernance.text068}

              </h2>

              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text069}


              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {outputs.map((output) =>
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

        {/* Supports and boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Atlas Supports
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{legacyZhCopy.runtimeSensorGovernance.text070}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasSupports} />
                </div>
              </article>

              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sensor-tan">
                  Constitutional Boundary
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{legacyZhCopy.runtimeSensorGovernance.text071}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-sm font-semibold leading-7 text-ink">{legacyZhCopy.runtimeSensorGovernance.text072}


                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Product relationship */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Sensor Governance™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.runtimeSensorGovernance.text073}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted">{legacyZhCopy.runtimeSensorGovernance.text074}

                </p>
              </article>

              <div className="hidden items-center justify-center px-3 text-2xl text-atlas-blue lg:flex">
                <ArrowIcon />
              </div>

              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
                  Runtime Investigation™
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.runtimeSensorGovernance.text075}

                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  REF Admission → Historical RGA → Context → IR / LL → Closure
                  → Assist Vault
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#70a9ff]">
              Continuous Runtime Evidence
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">{legacyZhCopy.runtimeSensorGovernance.text076}

              <br />{legacyZhCopy.runtimeSensorGovernance.text077}

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{legacyZhCopy.runtimeSensorGovernance.text078}


            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={localizeHref(lang, "/contact")}>
                {productsContent.ctaText}
              </Button>

              <a
                href={localizeHref(lang, "/products/runtime-investigation")}
                className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink">{legacyZhCopy.runtimeSensorGovernance.text079}


              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>,
    translations);
}
