import Section from "@/components/website/Section";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

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
        className="flex items-start gap-3 text-label leading-7 text-ink md:text-body">
        
          <DotIcon />
          <span>{item}</span>
        </li>
      )}
    </ul>);

}

export default async function RuntimeSensorGovernancePage({
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
  const copy = legacyCopy.runtimeSensorGovernance;
  const { ui } = copy;
  const heroTitleHasTrademark = ui.heroTitle.endsWith("™");
  const heroTitle = heroTitleHasTrademark
    ? ui.heroTitle.slice(0, -1)
    : ui.heroTitle;
  const agentCapabilities = ui.capabilityTitles.map((title, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description: [
      copy.text001,
      copy.text002,
      copy.text003,
      copy.text004,
    ][index],
  }));
  const eventGenerationModes = [
    {
      label: ui.eventModeLabels[0],
      title: copy.text005,
      description: copy.text006,
      examples: [copy.text007, copy.text008, copy.text009, copy.text010],
    },
    {
      label: ui.eventModeLabels[1],
      title: ui.automaticEventTitle,
      description: copy.text011,
      examples: [
        copy.text012,
        ...ui.automaticEventExamples,
        copy.text013,
      ],
    },
  ];
  const evidenceWindows = ui.evidenceWindowTitles.map((title, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description: [
      copy.text014,
      copy.text015,
      copy.text016,
      copy.text017,
      copy.text018,
    ][index],
  }));
  const outputs = ui.outputTitles.map((title, index) => ({
    title,
    description: [
      copy.text019,
      copy.text020,
      copy.text021,
      copy.text022,
      copy.text023,
      copy.text025,
      copy.text026,
      copy.text027,
    ][index],
  }));
  const atlasSupports = [
    copy.text028,
    copy.text029,
    copy.text030,
    copy.text031,
    copy.text032,
    copy.text033,
    ui.supportItems[0],
    ui.supportItems[1],
    copy.text034,
    copy.text035,
    ui.supportItems[2],
    copy.text024,
    copy.text036,
  ];
  const atlasDoesNotDo = [
    copy.text037,
    copy.text038,
    copy.text039,
    copy.text040,
    copy.text041,
    copy.text042,
    copy.text043,
  ];
  const investigationTiers = ui.tierTitles.map((title, index) => ({
    title,
    description: [
      copy.text063,
      copy.text064,
      copy.text065,
      copy.text066,
    ][index],
  }));

  return (
    <div className="bg-white">

        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl px-1">
            <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
              {ui.heroEyebrow}
            </p>

            <h1
              className="mt-4 max-w-5xl font-sans text-page-title font-semibold leading-tight tracking-tight text-ink sm:text-display-md lg:text-display-lg"
            >
              {heroTitle}
              {heroTitleHasTrademark ? (
                <sup className="ml-1 inline-block align-super text-[0.4em] leading-none">
                  ™
                </sup>
              ) : null}
            </h1>

            <p className="mt-6 max-w-4xl text-body-lg leading-8 text-muted sm:text-body-lg-md sm:leading-9">{copy.text044}

            </p>

            <p className="mt-5 max-w-4xl text-body leading-8 text-muted sm:text-body-lg">{copy.text045}

            </p>
          </div>
        </Section>

        {/* Core positioning */}
        <Section className="border-y border-border bg-[#050b17]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.runtimeEvidenceChainEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">{copy.text047}

                <br />{copy.text048}

              </h2>

              <p className="mt-5 max-w-3xl text-body leading-8 text-white/70 md:text-body-lg">{copy.text049}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item) =>
              <article
                key={item.number}
                className="min-h-[220px] border border-white/15 bg-white/[0.04] p-5">
                
                  <span className="font-mono text-caption font-semibold text-atlas-blue">
                    {item.number}
                  </span>

                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-white md:text-card-title-md lg:text-card-title-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-label leading-7 text-white/65">
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
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.runtimeBoundaryEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text050}

                </h2>

                <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text051}

                </p>
              </div>

              <div>
                <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {ui.runtimeSurfaces.map((surface) =>
                  <div
                    key={surface}
                    className="bg-white px-5 py-5 font-mono text-code font-semibold text-ink">
                    
                      {surface}
                    </div>
                  )}
                </div>

                <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6">
                  <p className="text-label font-semibold leading-7 text-ink md:text-body">
                    {ui.runtimeBoundaryPath}
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.atlasAgentEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
                {ui.agentChainTitle}
              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text052}

              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {agentCapabilities.map((item, index) =>
              <article
                key={item.title}
                className="flex min-h-[230px] flex-col border border-border bg-white p-6">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-caption font-semibold text-atlas-blue">
                      {item.number}
                    </span>

                    {index < agentCapabilities.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-label leading-7 text-muted">
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.evidencePackGenerationEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text053}

                <br />{copy.text054}

              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text055}


              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {eventGenerationModes.map((mode) =>
              <article
                key={mode.label}
                className="border border-border bg-white p-7 md:p-9">
                
                  <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                    {mode.label}
                  </p>

                  <h3 className="mt-4 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {mode.title}
                  </h3>

                  <p className="mt-4 text-label leading-7 text-muted md:text-body">
                    {mode.description}
                  </p>

                  <div className="mt-7">
                    <FeatureList items={mode.examples} />
                  </div>
                </article>
              )}
            </div>

            <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-6 text-center md:p-8">
              <p className="text-body font-semibold leading-8 text-ink md:text-body-lg">{copy.text056}


              </p>
            </div>
          </div>
        </Section>

        {/* Five-window model */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.fiveWindowModelEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text057}

                <br />{copy.text058}

              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text059}


              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {evidenceWindows.map((window, index) =>
              <article
                key={window.number}
                className="flex min-h-[240px] flex-col border border-border bg-surface p-6">
                
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-caption font-semibold text-atlas-blue">
                      {window.number}
                    </span>

                    {index < evidenceWindows.length - 1 ?
                  <ArrowIcon /> :
                  null}
                  </div>

                  <h3 className="mt-8 font-sans text-card-title font-semibold leading-snug tracking-tight text-ink md:text-card-title-md lg:text-card-title-lg">
                    {window.title}
                  </h3>

                  <p className="mt-4 text-label leading-7 text-muted">
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
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.investigationRoutingEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">{copy.text060}

                <br />{copy.text061}

              </h2>

              <p className="mt-5 text-body leading-8 text-white/70 md:text-body-lg">{copy.text062}


              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {investigationTiers.map((tier) =>
              <article
                key={tier.title}
                className="border border-white/15 bg-white/[0.04] p-6">
                
                  <h3 className="font-sans text-card-title font-semibold leading-snug tracking-tight text-white md:text-card-title-md lg:text-card-title-lg">
                    {tier.title}
                  </h3>

                  <p className="mt-3 text-label leading-7 text-white/65">
                    {tier.description}
                  </p>
                </article>
              )}
            </div>

            <p className="lg:col-span-2 text-label font-semibold leading-7 text-white/85">{copy.text067}


            </p>
          </div>
        </Section>

        {/* Outputs */}
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                {ui.runtimeEvidenceAssetsEyebrow}
              </p>

              <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text068}

              </h2>

              <p className="mt-5 text-body leading-8 text-muted md:text-body-lg">{copy.text069}


              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {outputs.map((output) =>
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

        {/* Supports and boundary */}
        <Section className="bg-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.atlasSupportsEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text070}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasSupports} />
                </div>
              </article>

              <article className="border border-border bg-white p-7 md:p-9">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.constitutionalBoundaryEyebrow}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text071}

                </h2>

                <div className="mt-7">
                  <FeatureList items={atlasDoesNotDo} />
                </div>

                <p className="mt-8 border-t border-border pt-6 text-label font-semibold leading-7 text-ink">{copy.text072}


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
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.governanceProductName}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text073}

                </h2>

                <p className="mt-5 text-body leading-8 text-muted">{ui.governanceFlow}

                </p>
              </article>

              <div className="hidden items-center justify-center px-3 text-section-title text-atlas-blue lg:flex">
                <ArrowIcon />
              </div>

              <article className="border border-border bg-surface p-7 md:p-9">
                <p className="font-mono text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">
                  {ui.investigationProductName}
                </p>

                <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{copy.text075}

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
              {ui.continuousEvidenceEyebrow}
            </p>

            <h2 className="mt-5 font-sans text-section-title font-semibold leading-snug tracking-tight text-white md:text-section-title-md">{copy.text076}

              <br />{copy.text077}

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-body leading-8 text-white/70 md:text-body-lg">{copy.text078}


            </p>


          </div>
        </Section>

    </div>
  );
}
