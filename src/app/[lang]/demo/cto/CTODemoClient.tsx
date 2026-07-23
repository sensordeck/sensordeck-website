"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import type { DemoContent } from "@/lib/content-types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { localizeHref } from "@/lib/i18n";

type TimeRange = "30" | "90" | "180";
type RoiMode = "conservative" | "expected" | "actual";

export default function CTODemoClient({
  content,
}: {
  content: DemoContent;
}) {
  const params = useParams<{ lang: string }>();
const lang = params.lang === "en" ? "en" : "zh";
  
  const [timeRange, setTimeRange] = useState<TimeRange>("90");
  const [roiMode, setRoiMode] = useState<RoiMode>("expected");

  const kpis = {
    open_ref: 23,
    safety_relevant_ref: 4,
    median_time_to_first_ep: 42,
    median_time_to_closure: 4.2,
    historical_rga_reuse_rate: 67,
    sensor_escalation_rate: 18,
    engineering_hours_saved: roiMode === "conservative" ? 840 : roiMode === "expected" ? 1260 : 1580,
    estimated_cost_saved: roiMode === "conservative" ? 168 : roiMode === "expected" ? 252 : 316
  };

  return (
    <div className="bg-white font-sans text-ink">

        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-card-title font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-label text-muted">{content.cto.dashboardTitle}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-caption text-muted">Dr. Zhou (CTO)</span>
              <span className="border border-border px-2 py-1 text-eyebrow font-semibold uppercase tracking-eyebrow text-muted">{content.cto.dashboardRole}

              </span>
            </div>
          </div>
        </Section>

        {/* Controls */}
        <Section className="bg-surface py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center">
              <span className="text-caption text-muted">{content.cto.timeRangeLabel}</span>
              <div className="grid w-full grid-cols-3 border border-border bg-white sm:flex sm:w-auto">
                {(["30", "90", "180"] as const).map((range) =>
                <button
                  className={`min-h-11 px-2 py-2 text-label font-semibold sm:px-4 ${
                  timeRange === range ?
                  "bg-atlas-blue text-white" :
                  "bg-white text-ink hover:bg-surface"}`
                  }
                  key={range}
                  onClick={() => setTimeRange(range)}
                  type="button">
                  
                    {range}{content.cto.daySuffix}
                </button>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center">
              <span className="text-caption text-muted">{content.cto.roiModelLabel}</span>
              <div className="grid w-full grid-cols-3 border border-border bg-white sm:flex sm:w-auto">
                {(["conservative", "expected", "actual"] as const).map((mode) =>
                <button
                  className={`min-h-11 px-2 py-2 text-label font-semibold capitalize sm:px-4 ${
                  roiMode === mode ?
                  "bg-atlas-blue text-white" :
                  "bg-white text-ink hover:bg-surface"}`
                  }
                  key={mode}
                  onClick={() => setRoiMode(mode)}
                  type="button">
                  
                    {content.cto.roiModeLabels[mode]}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* KPI Grid */}
        <Section className="bg-white">
          <Eyebrow>{content.cto.operationsEyebrow}</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-6">
              <p className="text-caption text-muted">{content.cto.openRefsLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.open_ref}</p>
              <p className="mt-1 text-caption text-green-700">{content.cto.openRefsTrend}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-caption text-muted">{content.cto.safetyRefsLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.safety_relevant_ref}</p>
              <p className="mt-1 text-caption text-muted">{content.cto.safetyRefsNote}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-caption text-muted">{content.cto.firstEvidencePackLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.median_time_to_first_ep}m</p>
              <p className="mt-1 text-caption text-green-700">{content.cto.firstEvidencePackTrend}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-caption text-muted">{content.cto.closureLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.median_time_to_closure}d</p>
              <p className="mt-1 text-caption text-green-700">{content.cto.closureTrend}</p>
            </div>
          </div>
        </Section>

        {/* Organizational Memory */}
        <Section className="bg-surface">
          <Eyebrow>{content.cto.memoryEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.cto.memoryTitle}

          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="border border-border bg-white p-6">
              <p className="text-caption text-muted">{content.cto.reuseRateLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.historical_rga_reuse_rate}%</p>
              <p className="mt-1 text-caption text-muted">
                {timeRange}{content.cto.recallAfterRange}{Math.round(kpis.historical_rga_reuse_rate / 100 * kpis.open_ref * 2)}{content.cto.recallAfterCount}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-caption text-muted">{content.cto.escalationRateLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">{kpis.sensor_escalation_rate}%</p>
              <p className="mt-1 text-caption text-muted">{content.cto.sentPrefix}
                {Math.round(kpis.sensor_escalation_rate / 100 * kpis.open_ref * 2)}{content.cto.sentSuffix}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-caption text-muted">{content.cto.activeSuppliersLabel}</p>
              <p className="mt-2 text-page-title font-semibold leading-tight text-ink md:text-page-title-md">5</p>
              <p className="mt-1 text-caption text-muted">
                {content.cto.activeSuppliers}
              </p>
            </div>
          </div>
        </Section>

        {/* ROI Metrics */}
        <Section className="bg-white">
          <Eyebrow>{content.cto.roiEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.cto.roiTitle}

          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border border-border bg-surface p-5 sm:p-8">
              <p className="text-label font-semibold text-ink">{content.cto.hoursSavedLabel}</p>
              <p className="mt-4 text-page-title font-semibold leading-tight text-ink sm:text-page-title-lg">{kpis.engineering_hours_saved}h</p>
              <p className="mt-2 text-caption text-muted">{content.cto.basedOnPrefix}
                {roiMode === "conservative" ? content.cto.roiModeLabels.conservative : roiMode === "expected" ? content.cto.roiModeLabels.expected : content.cto.roiModeLabels.actual}{content.cto.modelSeparator}{timeRange}{content.cto.windowSuffix}
              </p>
              <div className="mt-6 space-y-2 text-caption text-muted">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.manualAverageLabel}</span>
                  <span>8.5h</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.atlasAverageLabel}</span>
                  <span>3.2h</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.savedPerRefLabel}</span>
                  <span className="font-semibold text-green-700">5.3h</span>
                </div>
              </div>
            </div>
            <div className="border border-border bg-surface p-5 sm:p-8">
              <p className="text-label font-semibold text-ink">{content.cto.costSavedLabel}</p>
              <p className="mt-4 text-page-title font-semibold leading-tight text-ink sm:text-page-title-lg">
                ¥{kpis.estimated_cost_saved}K
              </p>
              <p className="mt-2 text-caption text-muted">{content.cto.basedOnPrefix}
                {roiMode === "conservative" ? content.cto.roiModeLabels.conservative : roiMode === "expected" ? content.cto.roiModeLabels.expected : content.cto.roiModeLabels.actual}{content.cto.modelSeparator}{timeRange}{content.cto.windowSuffix}
              </p>
              <div className="mt-6 space-y-2 text-caption text-muted">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.hourlyCostLabel}</span>
                  <span>¥200/h</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.totalHoursLabel}</span>
                  <span>{kpis.engineering_hours_saved}h</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>{content.cto.totalCostLabel}</span>
                  <span className="font-semibold text-green-700">
                    ¥{kpis.estimated_cost_saved}K
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-yellow-600/25 bg-yellow-50 p-5">
            <p className="text-caption leading-relaxed text-yellow-900">
              <span className="font-semibold">{content.cto.roiNoticeLabel}</span>{content.cto.roiNotice}


            </p>
          </div>
        </Section>

        {/* Candidate Surface Frequency */}
        <Section className="bg-surface">
          <Eyebrow>{content.cto.coverageEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.cto.coverageTitle}

          </h2>
          <div className="mt-8 space-y-3">
              {[
            { surface: content.cto.surfaces[0], count: 12, percentage: 28 },
            { surface: content.cto.surfaces[1], count: 9, percentage: 21 },
            { surface: content.cto.surfaces[2], count: 8, percentage: 19 },
            { surface: content.cto.surfaces[3], count: 6, percentage: 14 },
            { surface: content.cto.surfaces[4], count: 5, percentage: 12 },
            { surface: content.cto.surfaces[5], count: 3, percentage: 6 }].
            map((item) =>
            <div
              className="flex flex-col gap-3 border border-border bg-white p-4 sm:flex-row sm:items-center sm:gap-4"
              key={item.surface}>
              
                <div className="flex-1">
                  <p className="text-label font-semibold text-ink">{item.surface}</p>
                  <p className="mt-1 text-caption text-muted">{item.count}{content.cto.occurrenceSuffix}</p>
                </div>
                <div className="flex w-full items-center gap-3 sm:w-auto">
                  <div className="h-2 flex-1 overflow-hidden bg-border sm:w-32 sm:flex-none">
                    <div
                    className="h-full bg-atlas-blue"
                    style={{ width: `${item.percentage}%` }} />
                  
                  </div>
                  <span className="w-12 text-right text-label font-semibold text-ink">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-5">
            <p className="text-caption leading-relaxed text-muted">
              <span className="font-semibold text-ink">{content.cto.noteLabel}</span>{content.cto.coverageNote}

            </p>
          </div>
        </Section>

        {/* REF Volume Trend */}
        <Section className="bg-white">
          <Eyebrow>{content.cto.volumeEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.cto.volumeTitle}

          </h2>
          <div className="mt-8 overflow-x-auto border border-border bg-surface p-4 sm:p-8">
            <div className="flex h-64 min-w-[18rem] items-end justify-between gap-2">
              {[
              { month: content.cto.months[0], open: 45, closed: 38 },
              { month: content.cto.months[1], open: 52, closed: 47 },
              { month: content.cto.months[2], open: 38, closed: 51 },
              { month: content.cto.months[3], open: 23, closed: 29 }].
              map((data) =>
              <div className="flex flex-1 flex-col items-center gap-2" key={data.month}>
                  <div className="flex w-full gap-1">
                    <div
                    className="flex-1 bg-yellow-400"
                    style={{ height: `${data.open / 60 * 200}px` }}
                    title={`${content.cto.openChartLabel}${data.open}`} />
                  
                    <div
                    className="flex-1 bg-green-600"
                    style={{ height: `${data.closed / 60 * 200}px` }}
                    title={`${content.cto.closedChartLabel}${data.closed}`} />
                  
                  </div>
                  <p className="text-caption font-semibold text-ink">{data.month}</p>
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-caption sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-yellow-400" />
                <span className="text-muted">{content.cto.openRefsLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 bg-green-600" />
                <span className="text-muted">{content.cto.closedRefsLabel}</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Export Actions */}
        <Section className="bg-surface">
          <Eyebrow>{content.cto.actionsEyebrow}</Eyebrow>
          <h2 className="mt-4 font-sans text-section-title font-semibold leading-snug tracking-tight text-ink md:text-section-title-md">{content.cto.actionsTitle}

          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              className="min-h-11 border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button">
              
              <p className="text-label font-semibold text-ink">{content.cto.exportReportTitle}</p>
              <p className="mt-2 text-caption text-muted">{content.cto.exportReportDescription}

              </p>
            </button>
            <button
              className="min-h-11 border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button">
              
              <p className="text-label font-semibold text-ink">{content.cto.reviewSafetyTitle}</p>
              <p className="mt-2 text-caption text-muted">{content.cto.reviewSafetyPrefix}
                {kpis.safety_relevant_ref}{content.cto.reviewSafetySuffix}
              </p>
            </button>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-eyebrow font-semibold text-atlas-blue">{content.cto.demoLabel}

              </span>
              <p className="text-caption leading-relaxed text-muted">{content.cto.demoDescription}


              </p>
            </div>
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
      
    </div>);
}
