import Button from "@/components/website/Button";
import Card from "@/components/website/Card";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { getLegacyTranslations } from "@/lib/content";
import { isValidLocale, localizeHref } from "@/lib/i18n";
import { translateLegacyTree } from "@/lib/legacy-i18n";
import { notFound } from "next/navigation";import { legacyZhCopy } from "@/content/zh/legacy-page-copy";

function ArrowLabel() {
  return (
    <span aria-hidden="true" className="text-atlas-blue">
      →
    </span>);

}

const demoPages = [
{
  id: "01",
  role: legacyZhCopy.demoIndex.text001,
  title: legacyZhCopy.demoIndex.text002,
  description: legacyZhCopy.demoIndex.text003,

  href: "/demo/tier1",
  audience: legacyZhCopy.demoIndex.text004
},
{
  id: "02",
  role: legacyZhCopy.demoIndex.text005,
  title: legacyZhCopy.demoIndex.text006,
  description: legacyZhCopy.demoIndex.text007,

  href: "/demo/investigation",
  audience: legacyZhCopy.demoIndex.text008
},
{
  id: "03",
  role: legacyZhCopy.demoIndex.text009,
  title: legacyZhCopy.demoIndex.text010,
  description: legacyZhCopy.demoIndex.text011,

  href: "/demo/sensor-fae",
  audience: legacyZhCopy.demoIndex.text012
},
{
  id: "04",
  role: legacyZhCopy.demoIndex.text013,
  title: legacyZhCopy.demoIndex.text014,
  description: legacyZhCopy.demoIndex.text015,

  href: "/demo/cto",
  audience: legacyZhCopy.demoIndex.text016
}];


export default async function DemoIndexPage({
  params


}: {params: Promise<{lang: string;}>;}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const translations = await getLegacyTranslations(lang);

  return translateLegacyTree(
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Hero */}
        <Section id="demo-hero" className="bg-white">
          <div className="max-w-4xl">
            <Eyebrow>{legacyZhCopy.demoIndex.text017}</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">{legacyZhCopy.demoIndex.text018}

            </h1>
            <p className="mt-7 text-xl leading-9 text-muted md:text-2xl">{legacyZhCopy.demoIndex.text019}


            </p>
          </div>
        </Section>

        {/* Demo Story Context */}
        <Section id="demo-context" className="bg-surface">
          <div className="border border-border bg-white p-6 md:p-8">
            <Eyebrow>{legacyZhCopy.demoIndex.text020}</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoIndex.text021}

            </h2>
            <div className="mt-6 grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text022}</p>
                <p className="mt-2 text-ink">Pudu Robotics</p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text023}</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  PUDU-T300-7F3A-0021
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text024}</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  REF-2026-0716-0012
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text025}

                </p>
                <p className="mt-2 font-mono text-xs text-ink">EP-C03</p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text026}</p>
                <p className="mt-2 font-mono text-xs text-ink">
                  EGP-HESAI-2026-0042
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-sensor-tan">{legacyZhCopy.demoIndex.text009}</p>
                <p className="mt-2 text-ink">Wang Kai (Hesai)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Demo Pages Grid */}
        <Section id="demo-pages" className="bg-white">
          <div className="grid gap-6 md:grid-cols-2">
            {demoPages.map((page) =>
            <Card
              className="flex min-h-72 flex-col justify-between"
              key={page.id}>
              
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-sensor-tan">
                      {page.id}
                    </span>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {page.role}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink">
                    {page.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {page.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="mb-3 text-xs text-muted">{page.audience}</div>
                  <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:text-atlas-blue-dark"
                  href={localizeHref(lang, page.href)}>{legacyZhCopy.demoIndex.text027}


                  <ArrowLabel />
                  </a>
                </div>
              </Card>
            )}
          </div>
        </Section>

        {/* Demo Notice */}
        <Section id="demo-notice" className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 font-mono text-xs text-atlas-blue">{legacyZhCopy.demoIndex.text028}

              </span>
              <div>
                <p className="text-sm leading-7 text-ink">{legacyZhCopy.demoIndex.text029}


                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{legacyZhCopy.demoIndex.text030}

                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="demo-cta" className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <Eyebrow>{legacyZhCopy.demoIndex.text031}</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{legacyZhCopy.demoIndex.text032}

                </h2>
                <p className="mt-5 text-base leading-8 text-muted">{legacyZhCopy.demoIndex.text033}

                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:contact@sensordeck.tech">{legacyZhCopy.demoIndex.text034}

                  <span aria-hidden="true" className="text-white">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>,
    translations);
}
