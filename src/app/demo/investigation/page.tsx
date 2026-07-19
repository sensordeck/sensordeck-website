"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import candidatesData from "@/data/demo/candidates.json";
import historicalRgaData from "@/data/demo/historical-rga.json";
import epData from "@/data/demo/evidence-pack.json";

type Window = "pre_guard" | "baseline" | "deviation" | "recovery" | "post_guard";

const confidenceLabels: Record<string, string> = {
  strong: "强候选",
  partial: "部分候选",
  related: "相关候选",
};

const windowLabels: Record<Window, string> = {
  pre_guard: "前置保护",
  baseline: "基线",
  deviation: "偏差",
  recovery: "恢复观察",
  post_guard: "后置保护",
};

export default function InvestigationDemoPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidatesData.candidates[2].id);
  const [selectedWindow, setSelectedWindow] = useState<Window>("deviation");

  const candidate = candidatesData.candidates.find((c) => c.id === selectedCandidate);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-sm text-muted">调查仪表板</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">Li Ming</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Tier 2
              </span>
            </div>
          </div>
        </Section>

        {/* REF Context */}
        <Section className="bg-surface py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-muted">REF</span>
                <span className="ml-2 font-mono text-xs font-semibold text-ink">
                  {refData.ref_id}
                </span>
              </div>
              <div>
                <span className="text-muted">机器人</span>
                <span className="ml-2 font-mono text-xs font-semibold text-ink">
                  {refData.robot_sn}
                </span>
              </div>
              <div>
                <span className="text-muted">状态</span>
                <span className="ml-2 text-xs font-semibold text-ink">调查中</span>
              </div>
            </div>
            <button
              className="border border-border bg-white px-4 py-2 text-xs font-semibold text-ink hover:bg-surface"
              type="button"
            >
              生成 EGP →
            </button>
          </div>
        </Section>

        {/* KPI Cards */}
        <Section className="bg-white">
          <Eyebrow>调查关键指标</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-xs text-muted">已识别候选</p>
              <p className="mt-2 text-3xl font-semibold text-ink">4</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-xs text-muted">主要 EP</p>
              <p className="mt-2 font-mono text-xl font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-xs text-muted">历史召回</p>
              <p className="mt-2 text-3xl font-semibold text-ink">3</p>
            </div>
            <div className="border border-border bg-surface p-5 stagger-item">
              <p className="text-xs text-muted">首次 EP 用时</p>
              <p className="mt-2 text-3xl font-semibold text-ink">36m</p>
            </div>
          </div>
        </Section>

        {/* Candidate Timeline */}
        <Section className="bg-surface">
          <Eyebrow>候选时间线</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">观察到的候选模式</h2>
          <div className="mt-8 space-y-3">
            {candidatesData.candidates.map((c) => (
              <button
                className={`w-full border p-5 text-left transition-colors card-enter ${
                  c.id === selectedCandidate
                    ? "border-atlas-blue bg-surface-blue"
                    : "border-border bg-white hover:border-atlas-blue/50"
                }`}
                key={c.id}
                onClick={() => setSelectedCandidate(c.id)}
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sensor-tan">{c.id}</span>
                      <span className="text-sm font-semibold text-ink">{c.surface}</span>
                      {c.primary && (
                        <span className="border border-atlas-blue bg-surface-blue px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-atlas-blue">
                          主要候选
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted">{c.description}</p>
                    <p className="mt-2 font-mono text-[10px] text-muted">{c.timestamp}</p>
                  </div>
                  <span
                    className={`shrink-0 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      c.confidence === "strong"
                        ? "bg-green-100 text-green-700"
                        : c.confidence === "partial"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {confidenceLabels[c.confidence] ?? c.confidence}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Section>

        {/* Five-Window View */}
        {candidate && (
          <Section className="bg-white">
            <Eyebrow>五窗口证据模型</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
              {candidate.surface}
            </h2>
            <div className="mt-8 grid grid-cols-5 gap-2">
              {(["pre_guard", "baseline", "deviation", "recovery", "post_guard"] as const).map((w) => (
                <button
                  className={`border p-4 text-left transition-colors stagger-item ${
                    w === "deviation" ? "five-window-center" : ""
                  } ${
                    w === selectedWindow
                      ? "border-atlas-blue bg-surface-blue"
                      : "border-border bg-surface hover:border-atlas-blue/50"
                  }`}
                  key={w}
                  onClick={() => setSelectedWindow(w)}
                  type="button"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {w === "pre_guard" && "前置保护"}
                    {w === "baseline" && "基线"}
                    {w === "deviation" && "偏差"}
                    {w === "recovery" && "恢复观察"}
                    {w === "post_guard" && "后置保护"}
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-ink">
                    {candidate.five_window[w].start}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-6 border border-border bg-surface p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {windowLabels[selectedWindow]}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink">
                    {epData.five_window_summary[selectedWindow]}
                  </p>
                  <p className="mt-3 font-mono text-xs text-muted">
                    {candidate.five_window[selectedWindow].start} →{" "}
                    {candidate.five_window[selectedWindow].end}
                  </p>
                </div>
                <span className="shrink-0 border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                  {candidate.five_window[selectedWindow].status === "baseline"
                    ? "基线"
                    : candidate.five_window[selectedWindow].status === "normal"
                      ? "正常"
                      : candidate.five_window[selectedWindow].status === "anomaly_detected"
                        ? "检测到异常"
                        : candidate.five_window[selectedWindow].status === "timing_anomaly"
                          ? "时序异常"
                          : candidate.five_window[selectedWindow].status === "bus_reset"
                            ? "总线重置"
                            : candidate.five_window[selectedWindow].status === "returning_to_baseline"
                              ? "返回基线"
                              : candidate.five_window[selectedWindow].status === "partial_recovery"
                                ? "部分恢复"
                                : candidate.five_window[selectedWindow].status === "reconnection"
                                  ? "重新连接"
                                  : candidate.five_window[selectedWindow].status === "minor_fluctuation"
                                    ? "轻微波动"
                                    : candidate.five_window[selectedWindow].status === "recovered"
                                      ? "已恢复"
                                      : candidate.five_window[selectedWindow].status === "stable"
                                        ? "稳定"
                                        : candidate.five_window[selectedWindow].status}
                </span>
              </div>
            </div>
          </Section>
        )}

        {/* Historical RGA Recall */}
        <Section className="bg-surface">
          <Eyebrow>历史 RGA 召回</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">相关历史模式</h2>
          <div className="mt-8 space-y-4">
            {historicalRgaData.recalled_cases.map((rga) => (
              <div className="border border-border bg-white p-6 card-enter" key={rga.id}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sensor-tan">{rga.id}</span>
                      <span
                        className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          rga.match_type === "strong_candidate"
                            ? "bg-green-100 text-green-700"
                            : rga.match_type === "partial_candidate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {rga.match_type === "strong_candidate"
                          ? "强候选"
                          : rga.match_type === "partial_candidate"
                            ? "部分候选"
                            : "相关历史模式"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-ink">{rga.surface}</p>
                    <p className="mt-2 text-xs leading-5 text-muted">{rga.pattern}</p>
                    <div className="mt-4 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-ink">为何召回：</span>
                        <span className="ml-2 text-muted">{rga.why_retrieved}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">环境差异：</span>
                        <span className="ml-2 text-muted">{rga.environment_difference}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">历史解决方案：</span>
                        <span className="ml-2 text-muted">{rga.resolution_summary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-muted">相似度</p>
                    <p className="mt-1 text-2xl font-semibold text-ink">
                      {Math.round(rga.similarity_score * 100)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-atlas-blue/25 bg-surface-blue p-5">
            <p className="text-xs leading-6 text-muted">
              <span className="font-semibold text-ink">注意：</span>
              历史模式相似性不表明根本原因相同。环境差异可能导致不同的调查路径。
            </p>
          </div>
        </Section>

        {/* Forbidden Language Demo */}
        <Section className="bg-white">
          <Eyebrow>措辞规范</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            调查语言规范
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-red-700">❌ 禁用术语</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="line-through">已确认根本原因</li>
                <li className="line-through">OEM 故障</li>
                <li className="line-through">传感器故障</li>
                <li className="line-through">已分配责任</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700">✓ 允许术语</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li>观察到的模式</li>
                <li>候选表面</li>
                <li>强候选 / 部分候选</li>
                <li>相关历史模式</li>
                <li>需要进一步调查</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">演示</span>
              <p className="text-xs leading-6 text-muted">
                实际调查仪表板包含完整的候选操作（设为主要候选、延后、忽略）、EGP
                生成器、SLA 追踪和团队协作功能。
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
