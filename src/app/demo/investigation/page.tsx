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
              <span className="text-sm text-muted">Investigation Dashboard</span>
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
                <span className="text-muted">Robot</span>
                <span className="ml-2 font-mono text-xs font-semibold text-ink">
                  {refData.robot_sn}
                </span>
              </div>
              <div>
                <span className="text-muted">Status</span>
                <span className="ml-2 text-xs font-semibold text-ink">Under Investigation</span>
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
          <Eyebrow>Investigation KPIs</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Candidates Identified</p>
              <p className="mt-2 text-3xl font-semibold text-ink">4</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Primary EP</p>
              <p className="mt-2 font-mono text-xl font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Historical Recall</p>
              <p className="mt-2 text-3xl font-semibold text-ink">3</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Time to First EP</p>
              <p className="mt-2 text-3xl font-semibold text-ink">36m</p>
            </div>
          </div>
        </Section>

        {/* Candidate Timeline */}
        <Section className="bg-surface">
          <Eyebrow>Candidate Timeline</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">观察到的候选模式</h2>
          <div className="mt-8 space-y-3">
            {candidatesData.candidates.map((c) => (
              <button
                className={`w-full border p-5 text-left transition-colors ${
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
                          Primary
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
                    {c.confidence}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Section>

        {/* Five-Window View */}
        {candidate && (
          <Section className="bg-white">
            <Eyebrow>Five-Window Evidence Model</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
              {candidate.surface}
            </h2>
            <div className="mt-8 grid grid-cols-5 gap-2">
              {(["pre_guard", "baseline", "deviation", "recovery", "post_guard"] as const).map((w) => (
                <button
                  className={`border p-4 text-left transition-colors ${
                    w === selectedWindow
                      ? "border-atlas-blue bg-surface-blue"
                      : "border-border bg-surface hover:border-atlas-blue/50"
                  }`}
                  key={w}
                  onClick={() => setSelectedWindow(w)}
                  type="button"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {w === "pre_guard" && "Pre-Guard"}
                    {w === "baseline" && "Baseline"}
                    {w === "deviation" && "Deviation"}
                    {w === "recovery" && "Recovery"}
                    {w === "post_guard" && "Post-Guard"}
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
                    {selectedWindow.replace("_", " ")}
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
                  {candidate.five_window[selectedWindow].status.replace("_", " ")}
                </span>
              </div>
            </div>
          </Section>
        )}

        {/* Historical RGA Recall */}
        <Section className="bg-surface">
          <Eyebrow>Historical RGA Recall</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">相关历史模式</h2>
          <div className="mt-8 space-y-4">
            {historicalRgaData.recalled_cases.map((rga) => (
              <div className="border border-border bg-white p-6" key={rga.id}>
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
                        {rga.match_type.replace("_", " ")}
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
                    <p className="text-xs text-muted">Similarity</p>
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
          <Eyebrow>Wording Constraints</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            调查语言规范
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-red-700">❌ 禁用术语</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="line-through">Root Cause Confirmed</li>
                <li className="line-through">OEM Fault</li>
                <li className="line-through">Sensor Fault</li>
                <li className="line-through">Liability Assigned</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700">✓ 允许术语</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li>Observed Pattern</li>
                <li>Candidate Surface</li>
                <li>Strong Candidate / Partial Candidate</li>
                <li>Related Historical Pattern</li>
                <li>Requires Further Investigation</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">DEMO</span>
              <p className="text-xs leading-6 text-muted">
                实际 Investigation Dashboard 包含完整的候选操作（设为 Primary、Defer、Dismiss）、EGP
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
