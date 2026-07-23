"use client";

import Link from "next/link";
import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import candidatesData from "@/data/demo/candidates.json";
import historicalRgaData from "@/data/demo/historical-rga.json";
import epData from "@/data/demo/evidence-pack.json";
import type { DemoContent } from "@/lib/content-types";
import { localizeHref } from "@/lib/i18n";
import type { DemoContent } from "@/lib/content-types";


type Window = "pre_guard" | "baseline" | "deviation" | "recovery" | "post_guard";

export default function InvestigationDemoClient({
  content,
}: {
  content: DemoContent;
}) {
   const params = useParams<{ lang: string }>();
  const lang = params.lang === "en" ? "en" : "zh";
  const [selectedCandidate, setSelectedCandidate] = useState(candidatesData.candidates[2].id);
  const [selectedWindow, setSelectedWindow] = useState<Window>("deviation");

  const candidate = candidatesData.candidates.find((c) => c.id === selectedCandidate);
  const candidateIndex = candidatesData.candidates.findIndex(
    (c) => c.id === selectedCandidate,
  );
  const candidateContent = content.data.candidates[candidateIndex];

  return (
    <div className="bg-white font-sans text-ink">

        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-card-title font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-label text-muted">{content.investigation.dashboardTitle}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-caption text-muted">
                {content.data.ref.assignedToName}
              </span>
              <span className="border border-border px-2 py-1 text-eyebrow font-semibold uppercase tracking-eyebrow text-muted">
                Tier 2
              </span>
            </div>
          </div>
        </Section>

        {/* REF Context */}
        <Section className="bg-surface py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-label">
              <div>
                <span className="text-muted">REF</span>
                <span className="ml-2 font-mono text-code font-semibold text-ink">
                  {refData.ref_id}
                </span>
              </div>
              <div>
                <span className="text-muted">{content.investigation.robotLabel}</span>
                <span className="ml-2 font-mono text-code font-semibold text-ink">
                  {refData.robot_sn}
                </span>
              </div>
              <div>
                <span className="text-muted">{content.investigation.statusLabel}</span>
                <span className="ml-2 text-caption font-semibold text-ink">{content.investigation.investigatingLabel}</span>
              </div>
            </div>
            <button
              className="min-h-11 w-full border border-border bg-white px-4 py-2 text-label font-semibold text-ink hover:bg-surface sm:w-auto"
              type="button">{content.investigation.generateEgp}


            </button>
          </div>
        </Section>

        {/* KPI Cards */}
        <Section className="bg-white">
          <Eyebrow>{content.investigation.metricsEyebrow}</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-caption text-muted">{content.investigation.candidatesIdentifiedLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink">4</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-caption text-muted">{content.investigation.primaryEvidencePackLabel}</p>
              <p className="mt-2 font-mono text-code font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-caption text-muted">{content.investigation.historicalRecallLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink">3</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-caption text-muted">{content.investigation.timeToFirstEvidencePackLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink">36m</p>
            </div>
          </div>
        </Section>

        {/* Candidate Timeline */}
        <Section className="bg-surface">
          <Eyebrow>{content.investigation.timelineEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.investigation.timelineTitle}</h2>
          <div className="mt-8 space-y-3">
            {candidatesData.candidates.map((c, index) =>
            <button
              className={`min-h-11 w-full border p-5 text-left transition-colors card-enter ${
              c.id === selectedCandidate ?
              "border-atlas-blue bg-surface-blue" :
              "border-border bg-white hover:border-atlas-blue/50"}`
              }
              key={c.id}
              onClick={() => setSelectedCandidate(c.id)}
              type="button">
              
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-code text-sensor-tan-text">{c.id}</span>
                      <span className="text-label font-semibold text-ink">
                        {content.data.candidates[index].surface}
                      </span>
                      {c.primary &&
                    <span className="border border-atlas-blue bg-surface-blue px-2 py-0.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-atlas-blue">{content.investigation.primaryCandidateLabel}

                    </span>
                    }
                    </div>
                    <p className="mt-2 text-caption leading-normal text-muted">
                      {content.data.candidates[index].description}
                    </p>
                    <p className="mt-2 font-mono text-code text-muted">{c.timestamp}</p>
                  </div>
                  <span
                  className={`self-start px-3 py-1 text-eyebrow font-semibold uppercase tracking-eyebrow sm:shrink-0 ${
                  c.confidence === "strong" ?
                  "bg-green-100 text-green-700" :
                  c.confidence === "partial" ?
                  "bg-yellow-100 text-yellow-700" :
                  "bg-gray-100 text-gray-600"}`
                  }>
                  
                    {content.investigation.confidenceLabels[
                      c.confidence as keyof typeof content.investigation.confidenceLabels
                    ] ?? c.confidence}
                  </span>
                </div>
              </button>
            )}
          </div>
        </Section>

        {/* Five-Window View */}
        {candidate && candidateContent &&
        <Section className="bg-white">
            <Eyebrow>{content.investigation.fiveWindowEyebrow}</Eyebrow>
            <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
              {candidateContent.surface}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {(["pre_guard", "baseline", "deviation", "recovery", "post_guard"] as const).map((w) =>
            <button
              className={`min-h-11 border p-4 text-left transition-colors stagger-item ${
              w === "deviation" ? "five-window-center" : ""} ${

              w === selectedWindow ?
              "border-atlas-blue bg-surface-blue" :
              "border-border bg-surface hover:border-atlas-blue/50"}`
              }
              key={w}
              onClick={() => setSelectedWindow(w)}
              type="button">
              
                  <p className="text-eyebrow font-semibold uppercase tracking-eyebrow text-muted">
                    {w === "pre_guard" && content.investigation.windowLabels.pre_guard}
                    {w === "baseline" && content.investigation.windowLabels.baseline}
                    {w === "deviation" && content.investigation.windowLabels.deviation}
                    {w === "recovery" && content.investigation.windowLabels.recovery}
                    {w === "post_guard" && content.investigation.windowLabels.post_guard}
                  </p>
                  <p className="mt-2 font-mono text-code text-ink">
                    {candidate.five_window[w].start}
                  </p>
                </button>
            )}
            </div>
            <div className="mt-6 border border-border bg-surface p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-eyebrow font-semibold uppercase tracking-eyebrow text-muted">
                    {content.investigation.windowLabels[selectedWindow]}
                  </p>
                  <p className="mt-3 text-body leading-normal text-ink">
                    {content.data.evidencePack.fiveWindowSummary[selectedWindow]}
                  </p>
                  <p className="mt-3 font-mono text-code text-muted">
                    {candidate.five_window[selectedWindow].start} →{" "}
                    {candidate.five_window[selectedWindow].end}
                  </p>
                </div>
                <span className="self-start border border-border px-3 py-1 text-eyebrow font-semibold uppercase tracking-eyebrow text-muted sm:shrink-0">
                  {candidate.five_window[selectedWindow].status === "baseline" ? content.investigation.statusLabels.baseline :

                candidate.five_window[selectedWindow].status === "normal" ? content.investigation.statusLabels.normal :

                candidate.five_window[selectedWindow].status === "anomaly_detected" ? content.investigation.statusLabels.anomaly_detected :

                candidate.five_window[selectedWindow].status === "timing_anomaly" ? content.investigation.statusLabels.timing_anomaly :

                candidate.five_window[selectedWindow].status === "bus_reset" ? content.investigation.statusLabels.bus_reset :

                candidate.five_window[selectedWindow].status === "returning_to_baseline" ? content.investigation.statusLabels.returning_to_baseline :

                candidate.five_window[selectedWindow].status === "partial_recovery" ? content.investigation.statusLabels.partial_recovery :

                candidate.five_window[selectedWindow].status === "reconnection" ? content.investigation.statusLabels.reconnection :

                candidate.five_window[selectedWindow].status === "minor_fluctuation" ? content.investigation.statusLabels.minor_fluctuation :

                candidate.five_window[selectedWindow].status === "recovered" ? content.investigation.statusLabels.recovered :

                candidate.five_window[selectedWindow].status === "stable" ? content.investigation.statusLabels.stable :

                candidate.five_window[selectedWindow].status}
                </span>
              </div>
            </div>
          </Section>
        }

        {/* Historical RGA Recall */}
        <Section className="bg-surface">
          <Eyebrow>{content.investigation.historicalEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">
            {content.investigation.historicalTitle}
          </h2>
          <div className="mt-8 space-y-4">
            {historicalRgaData.recalled_cases.map((rga, index) =>
            <div className="border border-border bg-white p-6 card-enter" key={rga.id}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-code text-sensor-tan-text">{rga.id}</span>
                      <span
                      className={`px-2 py-1 text-eyebrow font-semibold uppercase tracking-eyebrow ${
                      rga.match_type === "strong_candidate" ?
                      "bg-green-100 text-green-700" :
                      rga.match_type === "partial_candidate" ?
                      "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-600"}`
                      }>
                      
                        {rga.match_type === "strong_candidate" ? content.investigation.confidenceLabels.strong :

                      rga.match_type === "partial_candidate" ? content.investigation.confidenceLabels.partial : content.investigation.relatedHistoricalLabel

                      }
                      </span>
                    </div>
                    <p className="mt-3 text-label font-semibold text-ink">
                      {content.data.historicalRga[index].surface}
                    </p>
                    <p className="mt-2 text-caption leading-normal text-muted">
                      {content.data.historicalRga[index].pattern}
                    </p>
                    <div className="mt-4 space-y-2 text-caption">
                      <div>
                        <span className="font-semibold text-ink">{content.investigation.whyRetrievedLabel}</span>
                        <span className="ml-2 text-muted">
                          {content.data.historicalRga[index].whyRetrieved}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">{content.investigation.environmentDifferenceLabel}</span>
                        <span className="ml-2 text-muted">
                          {content.data.historicalRga[index].environmentDifference}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">{content.investigation.historicalResolutionLabel}</span>
                        <span className="ml-2 text-muted">
                          {content.data.historicalRga[index].resolution}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="self-start text-left sm:shrink-0 sm:text-right">
                    <p className="text-caption text-muted">{content.investigation.similarityLabel}</p>
                    <p className="mt-1 text-page-title font-semibold leading-tight text-ink">
                      {Math.round(rga.similarity_score * 100)}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-5">
            <p className="text-caption leading-relaxed text-muted">
              <span className="font-semibold text-ink">{content.investigation.noteLabel}</span>{content.investigation.historicalNote}

            </p>
          </div>
        </Section>
 {/* Navigation */}
        <Section id="navigation" className="bg-surface">
          <div className="border-t border-border pt-6">
            <Link
              href={localizeHref(lang, "/demo")}
              className="text-label font-semibold leading-normal text-atlas-blue hover:text-atlas-blue-dark"
            >
              {lang === "zh" ? "← 返回演示中心" : "← Back to Demo"}
            </Link>
          </div>
        </Section>
    </div>
  );
}
