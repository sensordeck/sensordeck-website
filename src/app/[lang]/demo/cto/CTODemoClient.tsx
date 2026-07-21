"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import { legacyZhCopy } from "@/content/zh/legacy-page-copy";

type TimeRange = "30" | "90" | "180";
type RoiMode = "conservative" | "expected" | "actual";

const roiModeLabels: Record<RoiMode, string> = {
  conservative: legacyZhCopy.demoCto.text001,
  expected: legacyZhCopy.demoCto.text002,
  actual: legacyZhCopy.demoCto.text003
};

export default function CTODemoClient({
  translations


}: {translations: Record<string, string>;}) {
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
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-sm text-muted">{legacyZhCopy.demoCto.text004}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">Dr. Zhou (CTO)</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoCto.text005}

              </span>
            </div>
          </div>
        </Section>

        {/* Controls */}
        <Section className="bg-surface py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">{legacyZhCopy.demoCto.text006}</span>
              <div className="flex border border-border bg-white">
                {(["30", "90", "180"] as const).map((range) =>
                <button
                  className={`px-4 py-2 text-xs font-semibold ${
                  timeRange === range ?
                  "bg-atlas-blue text-white" :
                  "bg-white text-ink hover:bg-surface"}`
                  }
                  key={range}
                  onClick={() => setTimeRange(range)}
                  type="button">
                  
                    {range}{legacyZhCopy.demoCto.text007}
                </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">{legacyZhCopy.demoCto.text008}</span>
              <div className="flex border border-border bg-white">
                {(["conservative", "expected", "actual"] as const).map((mode) =>
                <button
                  className={`px-4 py-2 text-xs font-semibold capitalize ${
                  roiMode === mode ?
                  "bg-atlas-blue text-white" :
                  "bg-white text-ink hover:bg-surface"}`
                  }
                  key={mode}
                  onClick={() => setRoiMode(mode)}
                  type="button">
                  
                    {roiModeLabels[mode]}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* KPI Grid */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoCto.text009}</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text010}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.open_ref}</p>
              <p className="mt-1 text-xs text-green-700">{legacyZhCopy.demoCto.text011}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text012}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.safety_relevant_ref}</p>
              <p className="mt-1 text-xs text-muted">{legacyZhCopy.demoCto.text013}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text014}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.median_time_to_first_ep}m</p>
              <p className="mt-1 text-xs text-green-700">{legacyZhCopy.demoCto.text015}</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text016}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.median_time_to_closure}d</p>
              <p className="mt-1 text-xs text-green-700">{legacyZhCopy.demoCto.text017}</p>
            </div>
          </div>
        </Section>

        {/* Organizational Memory */}
        <Section className="bg-surface">
          <Eyebrow>{legacyZhCopy.demoCto.text018}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoCto.text019}

          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text020}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.historical_rga_reuse_rate}%</p>
              <p className="mt-1 text-xs text-muted">
                {timeRange}{legacyZhCopy.demoCto.text021}{Math.round(kpis.historical_rga_reuse_rate / 100 * kpis.open_ref * 2)}{legacyZhCopy.demoCto.text022}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text023}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.sensor_escalation_rate}%</p>
              <p className="mt-1 text-xs text-muted">{legacyZhCopy.demoCto.text024}
                {Math.round(kpis.sensor_escalation_rate / 100 * kpis.open_ref * 2)}{legacyZhCopy.demoCto.text025}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">{legacyZhCopy.demoCto.text026}</p>
              <p className="mt-2 text-4xl font-semibold text-ink">5</p>
              <p className="mt-1 text-xs text-muted">
                Example Sensor Corp, Demo Vision Systems, Example Motion Labs, Demo LiDAR Co, Test Optics
              </p>
            </div>
          </div>
        </Section>

        {/* ROI Metrics */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoCto.text027}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoCto.text028}

          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoCto.text029}</p>
              <p className="mt-4 text-5xl font-semibold text-ink">{kpis.engineering_hours_saved}h</p>
              <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoCto.text030}
                {roiMode === "conservative" ? legacyZhCopy.demoCto.text001 : roiMode === "expected" ? legacyZhCopy.demoCto.text002 : legacyZhCopy.demoCto.text003}{legacyZhCopy.demoCto.text031}{timeRange}{legacyZhCopy.demoCto.text032}
              </p>
              <div className="mt-6 space-y-2 text-xs text-muted">
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text033}</span>
                  <span>8.5h</span>
                </div>
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text034}</span>
                  <span>3.2h</span>
                </div>
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text035}</span>
                  <span className="font-semibold text-green-700">5.3h</span>
                </div>
              </div>
            </div>
            <div className="border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoCto.text036}</p>
              <p className="mt-4 text-5xl font-semibold text-ink">
                ¥{kpis.estimated_cost_saved}K
              </p>
              <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoCto.text030}
                {roiMode === "conservative" ? legacyZhCopy.demoCto.text001 : roiMode === "expected" ? legacyZhCopy.demoCto.text002 : legacyZhCopy.demoCto.text003}{legacyZhCopy.demoCto.text031}{timeRange}{legacyZhCopy.demoCto.text032}
              </p>
              <div className="mt-6 space-y-2 text-xs text-muted">
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text037}</span>
                  <span>¥200/h</span>
                </div>
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text038}</span>
                  <span>{kpis.engineering_hours_saved}h</span>
                </div>
                <div className="flex justify-between">
                  <span>{legacyZhCopy.demoCto.text039}</span>
                  <span className="font-semibold text-green-700">
                    ¥{kpis.estimated_cost_saved}K
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-yellow-600/25 bg-yellow-50 p-5">
            <p className="text-xs leading-6 text-yellow-900">
              <span className="font-semibold">{legacyZhCopy.demoCto.text040}</span>{legacyZhCopy.demoCto.text041}


            </p>
          </div>
        </Section>

        {/* Candidate Surface Frequency */}
        <Section className="bg-surface">
          <Eyebrow>{legacyZhCopy.demoCto.text042}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoCto.text043}

          </h2>
          <div className="mt-8 space-y-3">
              {[
            { surface: legacyZhCopy.demoCto.text044, count: 12, percentage: 28 },
            { surface: legacyZhCopy.demoCto.text045, count: 9, percentage: 21 },
            { surface: legacyZhCopy.demoCto.text046, count: 8, percentage: 19 },
            { surface: legacyZhCopy.demoCto.text047, count: 6, percentage: 14 },
            { surface: legacyZhCopy.demoCto.text048, count: 5, percentage: 12 },
            { surface: legacyZhCopy.demoCto.text049, count: 3, percentage: 6 }].
            map((item) =>
            <div
              className="flex items-center gap-4 border border-border bg-white p-4"
              key={item.surface}>
              
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">{item.surface}</p>
                  <p className="mt-1 text-xs text-muted">{item.count}{legacyZhCopy.demoCto.text050}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-32 overflow-hidden bg-border">
                    <div
                    className="h-full bg-atlas-blue"
                    style={{ width: `${item.percentage}%` }} />
                  
                  </div>
                  <span className="w-12 text-right text-sm font-semibold text-ink">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-5">
            <p className="text-xs leading-6 text-muted">
              <span className="font-semibold text-ink">{legacyZhCopy.demoCto.text051}</span>{legacyZhCopy.demoCto.text052}

            </p>
          </div>
        </Section>

        {/* REF Volume Trend */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoCto.text053}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoCto.text054}

          </h2>
          <div className="mt-8 border border-border bg-surface p-8">
            <div className="flex h-64 items-end justify-between gap-2">
              {[
              { month: legacyZhCopy.demoCto.text055, open: 45, closed: 38 },
              { month: legacyZhCopy.demoCto.text056, open: 52, closed: 47 },
              { month: legacyZhCopy.demoCto.text057, open: 38, closed: 51 },
              { month: legacyZhCopy.demoCto.text058, open: 23, closed: 29 }].
              map((data) =>
              <div className="flex flex-1 flex-col items-center gap-2" key={data.month}>
                  <div className="flex w-full gap-1">
                    <div
                    className="flex-1 bg-yellow-400"
                    style={{ height: `${data.open / 60 * 200}px` }}
                    title={`${legacyZhCopy.demoCto.text069}${data.open}`} />
                  
                    <div
                    className="flex-1 bg-green-600"
                    style={{ height: `${data.closed / 60 * 200}px` }}
                    title={`${legacyZhCopy.demoCto.text070}${data.closed}`} />
                  
                  </div>
                  <p className="text-xs font-semibold text-ink">{data.month}</p>
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-yellow-400" />
                <span className="text-muted">{legacyZhCopy.demoCto.text010}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 bg-green-600" />
                <span className="text-muted">{legacyZhCopy.demoCto.text059}</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Export Actions */}
        <Section className="bg-surface">
          <Eyebrow>{legacyZhCopy.demoCto.text060}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoCto.text061}

          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              className="border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button">
              
              <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoCto.text062}</p>
              <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoCto.text063}

              </p>
            </button>
            <button
              className="border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button">
              
              <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoCto.text064}</p>
              <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoCto.text065}
                {kpis.safety_relevant_ref}{legacyZhCopy.demoCto.text066}
              </p>
            </button>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">{legacyZhCopy.demoCto.text067}

              </span>
              <p className="text-xs leading-6 text-muted">{legacyZhCopy.demoCto.text068}


              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>);
}
