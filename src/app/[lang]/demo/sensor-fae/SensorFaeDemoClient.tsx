"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import epData from "@/data/demo/evidence-pack.json";
import historicalRgaData from "@/data/demo/historical-rga.json";
import type { DemoContent } from "@/lib/content-types";

export default function SensorFaeDemoClient({
  content,
}: {
  content: DemoContent;
}) {
  const [irStatus, setIrStatus] = useState("matched_known_pattern");
  const [llDraft, setLlDraft] = useState(content.sensorFae.initialLessonLearned);

  const sensorRga = historicalRgaData.recalled_cases[0];
  const sensorRgaContent = content.data.historicalRga[0];

  return (
    <div className="bg-paper font-sans text-ink">

        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-lg font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-sm text-muted">{content.sensorFae.workspaceTitle}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-xs text-muted">
                {content.data.ref.sensorFaeName}
              </span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                {content.data.ref.sensorFaeVendor} FAE
              </span>
            </div>
          </div>
        </Section>

        {/* EGP Context */}
        <Section className="bg-surface py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div>
                <span className="text-muted">EGP</span>
                <span className="ml-2 font-mono text-xs font-semibold text-ink">
                  {refData.egp_id}
                </span>
              </div>
              <div>
                <span className="text-muted">REF</span>
                <span className="ml-2 font-mono text-xs font-semibold text-ink">
                  {refData.ref_id}
                </span>
              </div>
              <div>
                <span className="text-muted">{content.sensorFae.sensorLabel}</span>
                <span className="ml-2 text-xs font-semibold text-ink">
                  {content.data.robot.lidarManufacturer}{" "}
                  {content.data.robot.lidarModel}
                </span>
              </div>
            </div>
            <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">{content.sensorFae.packageValidLabel}

            </span>
          </div>
        </Section>

        {/* EGP Package Validation */}
        <Section className="bg-white">
          <Eyebrow>{content.sensorFae.validationEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{content.sensorFae.validationTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{content.sensorFae.evidencePackIdLabel}</p>
              <p className="mt-2 font-mono text-sm font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{content.sensorFae.evidenceQualityLabel}</p>
              <p className="mt-2 text-sm font-semibold capitalize text-ink">
                {content.data.evidencePack.evidenceQuality}
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{content.sensorFae.packageIntegrityLabel}</p>
              <p className="mt-2 text-sm font-semibold text-green-700">{content.sensorFae.verifiedLabel}</p>
            </div>
          </div>
          <div className="mt-6 border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.monitoredSurfacesLabel}

            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.data.evidencePack.affectedSurfaces.map((surface) =>
              <span
                className="border border-border bg-white px-3 py-1 text-xs text-ink"
                key={surface}>
                
                  {surface}
                </span>
              )}
            </div>
          </div>
        </Section>

        {/* Evidence Pack Summary */}
        <Section className="bg-surface">
          <Eyebrow>{content.sensorFae.evidenceSummaryEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {content.data.evidencePack.surface}
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.deviationWindowLabel}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {content.data.evidencePack.fiveWindowSummary.deviation}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.upstreamContextLabel}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {content.data.evidencePack.upstream}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.downstreamContextLabel}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {content.data.evidencePack.downstream}
              </p>
            </div>
          </div>
        </Section>

        {/* Historical Sensor RGA Recall */}
        <Section className="bg-white">
          <Eyebrow>{content.sensorFae.historicalEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{content.sensorFae.historicalTitle}

          </h2>
          <div className="mt-8 border border-border bg-surface p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-sensor-tan-text">{sensorRga.id}</span>
                  <span className="bg-green-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                    {sensorRga.match_type === "strong_candidate" ? content.sensorFae.strongCandidateLabel : content.sensorFae.relatedHistoricalLabel}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">
                  {sensorRgaContent.surface}
                </p>
                <p className="mt-2 text-xs leading-5 text-muted">
                  {sensorRgaContent.pattern}
                </p>
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-ink">{content.sensorFae.originalRefLabel}</span>
                    <span className="ml-2 font-mono text-muted">{sensorRga.original_ref}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">{content.sensorFae.historicalResolutionLabel}</span>
                    <span className="ml-2 text-muted">
                      {sensorRgaContent.resolution}
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-start text-left sm:shrink-0 sm:text-right">
                <p className="text-xs text-muted">{content.sensorFae.similarityLabel}</p>
                <p className="mt-1 text-2xl font-semibold text-ink">
                  {Math.round(sensorRga.similarity_score * 100)}%
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* IR Editor */}
        <Section className="bg-surface">
          <Eyebrow>{content.sensorFae.resultEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{content.sensorFae.resultTitle}</h2>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-semibold text-ink">{content.sensorFae.resultStatusLabel}</label>
              <select
                className="mt-2 min-h-11 w-full border border-border bg-white p-3 text-sm text-ink"
                onChange={(e) => setIrStatus(e.target.value)}
                value={irStatus}>
                
                <option value="matched_known_pattern">{content.sensorFae.irStatusLabels.matched_known_pattern}</option>
                <option value="matched_with_mitigation">{content.sensorFae.irStatusLabels.matched_with_mitigation}</option>
                <option value="candidate_investigation_path">{content.sensorFae.irStatusLabels.candidate_investigation_path}

                </option>
                <option value="candidate_field_test">{content.sensorFae.irStatusLabels.candidate_field_test}</option>
                <option value="not_applicable">{content.sensorFae.irStatusLabels.not_applicable}</option>
              </select>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.resultSummaryLabel}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">{content.sensorFae.resultSummaryPrefix}
                {sensorRga.id}{content.sensorFae.resultSummarySuffix}
              </p>
            </div>
          </div>
        </Section>

        {/* LL Editor */}
        <Section className="bg-white">
          <Eyebrow>{content.sensorFae.lessonEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{content.sensorFae.lessonTitle}

          </h2>
          <div className="mt-8">
            <label className="text-sm font-semibold text-ink">{content.sensorFae.lessonContentLabel}</label>
            <textarea
              className="mt-2 w-full border border-border bg-surface p-4 text-sm leading-7 text-ink"
              onChange={(e) => setLlDraft(e.target.value)}
              rows={6}
              value={llDraft} />
            
            <p className="mt-2 text-xs text-muted">{content.sensorFae.lessonNote}

            </p>
          </div>
        </Section>

        {/* Sensor Response */}
        <Section className="bg-surface">
          <Eyebrow>{content.sensorFae.responseEyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{content.sensorFae.responseTitle}

          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{content.sensorFae.responseSummaryLabel}

              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-muted">{content.sensorFae.irStatusLabel}</span>
                  <span className="font-semibold capitalize text-ink">
                    {content.sensorFae.irStatusLabels[
                      irStatus as keyof typeof content.sensorFae.irStatusLabels
                    ] ?? irStatus}
                  </span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-muted">{content.sensorFae.lessonAuthoredLabel}</span>
                  <span className="font-semibold text-ink">{content.sensorFae.yesLabel}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-muted">{content.sensorFae.historicalUpdatedLabel}</span>
                  <span className="font-semibold text-ink">{content.sensorFae.pendingLabel}</span>
                </div>
              </div>
            </div>
            <div className="border border-green-600/25 bg-green-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{content.sensorFae.readyLabel}

              </p>
              <p className="mt-2 text-sm text-ink">{content.sensorFae.readyDescription}

              </p>
            </div>
            <button
              className="min-h-11 w-full bg-atlas-blue py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
              type="button">{content.sensorFae.returnResponse}


            </button>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">{content.sensorFae.demoLabel}

              </span>
              <p className="text-xs leading-6 text-muted">{content.sensorFae.demoDescription}


              </p>
            </div>
          </div>
        </Section>

    </div>);
}
