"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

type TimeRange = "30" | "90" | "180";
type RoiMode = "conservative" | "expected" | "actual";

export default function CTODemoPage() {
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
    estimated_cost_saved: roiMode === "conservative" ? 168 : roiMode === "expected" ? 252 : 316,
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
              <span className="text-sm text-muted">Executive Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">Dr. Zhou (CTO)</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Executive
              </span>
            </div>
          </div>
        </Section>

        {/* Controls */}
        <Section className="bg-surface py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">Time Range:</span>
              <div className="flex border border-border bg-white">
                {(["30", "90", "180"] as const).map((range) => (
                  <button
                    className={`px-4 py-2 text-xs font-semibold ${
                      timeRange === range
                        ? "bg-atlas-blue text-white"
                        : "bg-white text-ink hover:bg-surface"
                    }`}
                    key={range}
                    onClick={() => setTimeRange(range)}
                    type="button"
                  >
                    {range} Days
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">ROI Model:</span>
              <div className="flex border border-border bg-white">
                {(["conservative", "expected", "actual"] as const).map((mode) => (
                  <button
                    className={`px-4 py-2 text-xs font-semibold capitalize ${
                      roiMode === mode
                        ? "bg-atlas-blue text-white"
                        : "bg-white text-ink hover:bg-surface"
                    }`}
                    key={mode}
                    onClick={() => setRoiMode(mode)}
                    type="button"
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* KPI Grid */}
        <Section className="bg-white">
          <Eyebrow>Investigation Operating Efficiency</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">Open REF</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.open_ref}</p>
              <p className="mt-1 text-xs text-green-700">↓ 18% vs last period</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">Safety-Relevant REF</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.safety_relevant_ref}</p>
              <p className="mt-1 text-xs text-muted">Requires executive review</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">Median Time to First EP</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.median_time_to_first_ep}m</p>
              <p className="mt-1 text-xs text-green-700">↓ 12 min vs target</p>
            </div>
            <div className="border border-border bg-surface p-6">
              <p className="text-xs text-muted">Median Time to Closure</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.median_time_to_closure}d</p>
              <p className="mt-1 text-xs text-green-700">↓ 35% vs manual</p>
            </div>
          </div>
        </Section>

        {/* Organizational Memory */}
        <Section className="bg-surface">
          <Eyebrow>Organizational Memory</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            历史 RGA 复用与供应商协作
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">Historical RGA Reuse Rate</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.historical_rga_reuse_rate}%</p>
              <p className="mt-1 text-xs text-muted">
                {timeRange} days: {Math.round((kpis.historical_rga_reuse_rate / 100) * kpis.open_ref * 2)} cases recalled
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">Sensor Escalation Rate</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{kpis.sensor_escalation_rate}%</p>
              <p className="mt-1 text-xs text-muted">
                {Math.round((kpis.sensor_escalation_rate / 100) * kpis.open_ref * 2)} EGPs sent
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs text-muted">Active Sensor Vendors</p>
              <p className="mt-2 text-4xl font-semibold text-ink">5</p>
              <p className="mt-1 text-xs text-muted">Hesai, Hikvision, Xsens, RoboSense, Velodyne</p>
            </div>
          </div>
        </Section>

        {/* ROI Metrics */}
        <Section className="bg-white">
          <Eyebrow>Illustrative Demo Data</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            示意性 ROI 估算
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-ink">Engineering Hours Saved</p>
              <p className="mt-4 text-5xl font-semibold text-ink">{kpis.engineering_hours_saved}h</p>
              <p className="mt-2 text-xs text-muted">
                Based on {roiMode} model, {timeRange}-day window
              </p>
              <div className="mt-6 space-y-2 text-xs text-muted">
                <div className="flex justify-between">
                  <span>Avg. manual investigation:</span>
                  <span>8.5h</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Atlas-assisted:</span>
                  <span>3.2h</span>
                </div>
                <div className="flex justify-between">
                  <span>Time savings per REF:</span>
                  <span className="font-semibold text-green-700">5.3h</span>
                </div>
              </div>
            </div>
            <div className="border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-ink">Estimated Cost Saved</p>
              <p className="mt-4 text-5xl font-semibold text-ink">
                ¥{kpis.estimated_cost_saved}K
              </p>
              <p className="mt-2 text-xs text-muted">
                Based on {roiMode} model, {timeRange}-day window
              </p>
              <div className="mt-6 space-y-2 text-xs text-muted">
                <div className="flex justify-between">
                  <span>Engineering hourly rate:</span>
                  <span>¥200/h</span>
                </div>
                <div className="flex justify-between">
                  <span>Total hours saved:</span>
                  <span>{kpis.engineering_hours_saved}h</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost savings:</span>
                  <span className="font-semibold text-green-700">
                    ¥{kpis.estimated_cost_saved}K
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-yellow-600/25 bg-yellow-50 p-5">
            <p className="text-xs leading-6 text-yellow-900">
              <span className="font-semibold">Illustrative Demo Data：</span>
              商业指标为演示估算值，不代表具体客户的实际结果。实际 ROI
              取决于调查复杂度、团队效率和运营环境。
            </p>
          </div>
        </Section>

        {/* Candidate Surface Frequency */}
        <Section className="bg-surface">
          <Eyebrow>Evidence Coverage</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            候选表面频率分布
          </h2>
          <div className="mt-8 space-y-3">
            {[
              { surface: "USB Bus Timing", count: 12, percentage: 28 },
              { surface: "ROS2 Topic Timing", count: 9, percentage: 21 },
              { surface: "LiDAR Point Cloud Quality", count: 8, percentage: 19 },
              { surface: "Power Supply Voltage", count: 6, percentage: 14 },
              { surface: "Network Packet Loss", count: 5, percentage: 12 },
              { surface: "Storage I/O Timing", count: 3, percentage: 6 },
            ].map((item) => (
              <div
                className="flex items-center gap-4 border border-border bg-white p-4"
                key={item.surface}
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">{item.surface}</p>
                  <p className="mt-1 text-xs text-muted">{item.count} occurrences</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-32 overflow-hidden bg-border">
                    <div
                      className="h-full bg-atlas-blue"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-sm font-semibold text-ink">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-5">
            <p className="text-xs leading-6 text-muted">
              <span className="font-semibold text-ink">注意：</span>
              候选表面频率表示观察到的模式分布，不代表根本原因排名或故障责任归属。
            </p>
          </div>
        </Section>

        {/* REF Volume Trend */}
        <Section className="bg-white">
          <Eyebrow>Investigation Volume</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            REF 数量与状态趋势
          </h2>
          <div className="mt-8 border border-border bg-surface p-8">
            <div className="flex h-64 items-end justify-between gap-2">
              {[
                { month: "4月", open: 45, closed: 38 },
                { month: "5月", open: 52, closed: 47 },
                { month: "6月", open: 38, closed: 51 },
                { month: "7月", open: 23, closed: 29 },
              ].map((data) => (
                <div className="flex flex-1 flex-col items-center gap-2" key={data.month}>
                  <div className="flex w-full gap-1">
                    <div
                      className="flex-1 bg-yellow-400"
                      style={{ height: `${(data.open / 60) * 200}px` }}
                      title={`Open: ${data.open}`}
                    />
                    <div
                      className="flex-1 bg-green-600"
                      style={{ height: `${(data.closed / 60) * 200}px`}}
                      title={`Closed: ${data.closed}`}
                    />
                  </div>
                  <p className="text-xs font-semibold text-ink">{data.month}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-yellow-400" />
                <span className="text-muted">Open REF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 bg-green-600" />
                <span className="text-muted">Closed REF</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Export Actions */}
        <Section className="bg-surface">
          <Eyebrow>Executive Actions</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            报告与审核
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              className="border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button"
            >
              <p className="text-sm font-semibold text-ink">导出治理报告</p>
              <p className="mt-2 text-xs text-muted">
                包含调查效率、证据覆盖、组织记忆和供应商协作的执行摘要
              </p>
            </button>
            <button
              className="border border-border bg-white p-6 text-left transition-colors hover:border-atlas-blue hover:bg-surface-blue"
              type="button"
            >
              <p className="text-sm font-semibold text-ink">审核安全相关 REF</p>
              <p className="mt-2 text-xs text-muted">
                当前 {kpis.safety_relevant_ref} 个安全相关 REF 需要执行审核
              </p>
            </button>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">
                DEMO
              </span>
              <p className="text-xs leading-6 text-muted">
                实际 CTO Dashboard
                包含完整的多客户/车队过滤、自定义时间范围、可导出治理报告和实时 SLA 追踪。
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
