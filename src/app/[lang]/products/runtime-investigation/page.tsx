import Section from "@/components/website/Section";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

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
        className="flex items-start gap-3 text-label leading-7 text-ink md:text-body">
        
          <CheckIcon />
          <span>{item}</span>
        </li>
      )}
    </ul>);

}

export default async function RuntimeInvestigationPage({
  params


}: {params: Promise<{lang: string;}>;}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const legacyCopy =
    lang === "zh"
      ? await import("@/content/zh/legacy-page-copy").then(
          (content) => content.legacyZhCopy,
        )
      : await import("@/content/en/legacy-page-copy").then(
          (content) => content.legacyEnCopy,
        );
  const copy = legacyCopy.runtimeInvestigation;
  const { ui } = copy;
  const investigationFlow = ui.flowTitles.map((title, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description: [
      copy.text001,
      copy.text002,
      copy.text003,
      copy.text004,
      copy.text006,
      copy.text007,
      copy.text008,
      copy.text009,
    ][index],
  }));
  const coreCapabilities = [
    { title: copy.text010, description: copy.text011 },
    { title: copy.text012, description: copy.text013 },
    { title: copy.text014, description: copy.text015 },
    { title: copy.text016, description: copy.text017 },
    { title: copy.text018, description: copy.text019 },
    { title: copy.text020, description: copy.text021 },
  ];
  const primaryOutputs = ui.outputTitles.map((title, index) => ({
    title,
    description: [
      copy.text022,
      copy.text023,
      copy.text024,
      copy.text025,
      copy.text026,
      copy.text027,
      copy.text028,
      copy.text029,
    ][index],
  }));
  const atlasSupports = [
    copy.text030,
    copy.text031,
    copy.text032,
    copy.text033,
    ...ui.supportItems,
    copy.text034,
    copy.text035,
  ];
  const atlasDoesNotDo = [
    copy.text036,
    copy.text037,
    copy.text038,
    copy.text039,
    copy.text040,
    copy.text041,
  ];

  return (
    <div className="bg-white">

        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">{ui.heroEyebrow}

            </p>

            <h1 className="mt-4 max-w-5xl font-sans text-display font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg">
              {ui.heroTitle}
            </h1>

            <p className="mt-6 max-w-4xl text-body-lg leading-8 text-muted sm:text-body-lg-md sm:leading-9">{copy.text043}


            </p>

            <p className="mt-5 max-w-4xl text-body leading-8 text-muted sm:text-body-lg">{copy.text044}

            </p>
          </div>
        </Section>

        {/* Product statement */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.runtimeFailureEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">{copy.text046}

                <br />{copy.text047}

              </h2>

              <p className="mt-5 max-w-3xl text-body leading-8 text-white/70 md:text-body-lg">{copy.text048}

              </p>

              <p className="mt-5 max-w-3xl text-body font-semibold leading-8 text-white">{copy.text049}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {ui.refExamples.map((item) =>
              <div
                key={item}
                className="min-w-0 border border-white/15 bg-white/[0.04] px-4 py-4 font-mono text-code font-semibold leading-6 break-words text-white/85">
                
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.standardChainEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text050}

              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text051}


              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {investigationFlow.map((step) =>
              <article
                key={step.number}
                className="min-h-[230px] bg-white p-6 md:p-7">
                
                  <span className="font-mono text-caption font-semibold text-atlas-blue">
                    {step.number}
                  </span>

                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-label leading-7 text-muted">
                    {step.description}
                  </p>
                </article>
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 md:p-8">
              <p className="text-center text-body font-semibold leading-8 text-ink md:text-body-lg">{copy.text052}

                <br className="sm:hidden" />{copy.text053}

              </p>
            </div>
          </div>
        </Section>

        {/* Core capabilities */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <div>
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.coreCapabilitiesEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text054}

                </h2>

                <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text055}


                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                {coreCapabilities.map((capability) =>
                <article
                  key={capability.title}
                  className="bg-white p-6 md:p-8">
                  
                    <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                      {capability.title}
                    </h3>

                    <p className="mt-4 text-label leading-7 text-muted">
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.collaborationEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text056}

              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text057}

              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {ui.collaborationSteps.map((step, index, items) =>
              <div
                key={step}
                className="flex min-h-[150px] flex-col justify-between border border-border bg-white p-5">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-caption font-semibold text-atlas-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index < items.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <p className="mt-8 text-label font-semibold leading-6 text-ink">
                    {step}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.exchangeModeA}
                </p>

                <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {ui.rawEvidenceReference}
                </h3>

                <p className="mt-4 text-label leading-7 text-muted">{copy.text058}

                </p>
              </article>

              <article className="border border-border bg-white p-6 md:p-8">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.exchangeModeB}
                </p>

                <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                  {ui.signatureAndRecall}
                </h3>

                <p className="mt-4 text-label leading-7 text-muted">{copy.text059}

                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.investigationAssetsEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text060}

                <br />{copy.text061}

              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {primaryOutputs.map((output) =>
              <article
                key={output.title}
                className="border border-border bg-white p-6">
                
                  <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {output.title}
                  </h3>

                  <p className="mt-3 text-label leading-7 text-muted">
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
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.atlasSupportsEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text062}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasSupports} />
                </div>
              </article>

              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.constitutionalBoundaryEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text063}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-label font-semibold leading-7 text-ink">{copy.text064}

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
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.governanceProductName}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text065}

                </h2>

                <p className="mt-5 text-body leading-8 text-muted">
                  {ui.governanceFlow}
                </p>
              </article>

              <div className="hidden items-center justify-center px-3 text-section-title text-atlas-blue lg:flex">
                <ArrowIcon />
              </div>

              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.investigationProductName}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text066}

                </h2>

                <p className="mt-5 text-body leading-8 text-muted">
                  {ui.investigationFlow}
                </p>
              </article>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-[#050b17]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {ui.finalEyebrow}
            </p>

            <h2 className="mt-5 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">
              {copy.text067}
              <br />
              {copy.text068}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-body leading-8 text-white/70 md:text-body-lg">
              {copy.text069}
            </p>
          </div>
        </Section>
    </div>
  );
}
