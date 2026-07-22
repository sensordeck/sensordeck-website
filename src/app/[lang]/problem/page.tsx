{/* Page Introduction */}
<Section className="bg-white">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-4xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-atlas-blue">
        {content.eyebrow}
      </p>

      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
        {homeContent.sectionTitles.theProblem}
      </h1>

      <p className="mt-8 max-w-3xl text-xl font-medium leading-9 tracking-[-0.015em] text-ink sm:text-2xl sm:leading-10">
        {problem.lead}
      </p>

      <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
        {homeContent.sectionDescriptions.theProblem}
      </p>

      <Button
        className="mt-8"
        href={localizeHref(lang, "/products")}
        variant="secondary"
      >
        查看 Atlas 如何解决
      </Button>
    </div>
  </div>
</Section>
