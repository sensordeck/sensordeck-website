"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import epData from "@/data/demo/evidence-pack.json";
import historicalRgaData from "@/data/demo/historical-rga.json";

export default function SensorFAEDemoPage() {
  const [irStatus, setIrStatus] = useState("matched_known_pattern");
  const [llDraft, setLlDraft] = useState(
    "USB 3.0 bus reset observed during high-bandwidth LiDAR data transfer. Pattern matches known EMI sensitivity in XT32 cable assembly. Recommended mitigation: Replace with shielded cable (P/N: HES-CBL-XT32-SH) and add ferrite core at device end."
  );

  const sensorRga = historicalRgaData.recalled_cases[0];

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-sm text-muted">Sensor FAE Workspace</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">Wang Kai</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Hesai FAE
              </span>
            </div>
          </div>
        </Section>

        {/* EGP Context */}
        <Section className="bg-surface py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
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
                <span className="text-muted">Sensor</span>
                <span className="ml-2 text-xs font-semibold text-ink">Hesai Pandar XT32</span>
              </div>
            </div>
            <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
              Package Valid
            </span>
          </div>
        </Section>

        {/* EGP Package Validation */}
        <Section className="bg-white">
          <Eyebrow>EGP Package Validation</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">包完整性检查</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Evidence Pack ID</p>
              <p className="mt-2 font-mono text-sm font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Evidence Quality</p>
              <p className="mt-2 text-sm font-semibold capitalize text-ink">
                {epData.evidence_quality}
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Package Integrity</p>
              <p className="mt-2 text-sm font-semibold text-green-700">Verified</p>
            </div>
          </div>
          <div className="mt-6 border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Included Surfaces
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {epData.runtime_context.affected_surfaces.map((surface) => (
                <span
                  className="border border-border bg-white px-3 py-1 text-xs text-ink"
                  key={surface}
                >
                  {surface}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Evidence Pack Summary */}
        <Section className="bg-surface">
          <Eyebrow>Evidence Pack Summary</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {epData.surface}
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Deviation Window
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.five_window_summary.deviation}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Upstream Context
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.upstream}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Downstream Context
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.downstream}
              </p>
            </div>
          </div>
        </Section>

        {/* Historical Sensor RGA Recall */}
        <Section className="bg-white">
          <Eyebrow>Historical Sensor RGA</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            Hesai 历史调查模式
          </h2>
          <div className="mt-8 border border-border bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-sensor-tan">{sensorRga.id}</span>
                  <span className="bg-green-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                    {sensorRga.match_type.replace("_", " ")}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{sensorRga.surface}</p>
                <p className="mt-2 text-xs leading-5 text-muted">{sensorRga.pattern}</p>
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-ink">原始 REF：</span>
                    <span className="ml-2 font-mono text-muted">{sensorRga.original_ref}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">历史解决方案：</span>
                    <span className="ml-2 text-muted">{sensorRga.resolution_summary}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-muted">Similarity</p>
                <p className="mt-1 text-2xl font-semibold text-ink">
                  {Math.round(sensorRga.similarity_score * 100)}%
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* IR Editor */}
        <Section className="bg-surface">
          <Eyebrow>Investigation Result (IR)</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">编写调查结果</h2>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-semibold text-ink">Result State</label>
              <select
                className="mt-2 w-full border border-border bg-white p-3 text-sm text-ink"
                onChange={(e) => setIrStatus(e.target.value)}
                value={irStatus}
              >
                <option value="matched_known_pattern">Matched Known Pattern</option>
                <option value="matched_with_mitigation">Matched with Mitigation</option>
                <option value="candidate_investigation_path">
                  Candidate Investigation Path
                </option>
                <option value="candidate_field_test">Candidate Field Test Required</option>
                <option value="not_applicable">Not Applicable to This Sensor</option>
              </select>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                IR Summary (Demo)
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                Pattern match confirmed with {sensorRga.id}. USB 3.0 bus reset during
                high-bandwidth operation is consistent with known XT32 cable EMI sensitivity. No
                firmware or hardware defect indicated. Recommend cable replacement with shielded
                variant.
              </p>
            </div>
          </div>
        </Section>

        {/* LL Editor */}
        <Section className="bg-white">
          <Eyebrow>Learned Lesson (LL)</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            记录可复用知识
          </h2>
          <div className="mt-8">
            <label className="text-sm font-semibold text-ink">Lesson Learned Content</label>
            <textarea
              className="mt-2 w-full border border-border bg-surface p-4 text-sm leading-7 text-ink"
              onChange={(e) => setLlDraft(e.target.value)}
              rows={6}
              value={llDraft}
            />
            <p className="mt-2 text-xs text-muted">
              LL 将更新到 Hesai Historical Sensor RGA，供未来调查使用。
            </p>
          </div>
        </Section>

        {/* Sensor Response */}
        <Section className="bg-surface">
          <Eyebrow>Sensor Response</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            返回 OEM 调查包
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Response Summary
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">IR Status</span>
                  <span className="font-semibold capitalize text-ink">
                    {irStatus.replace(/_/g, " ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">LL Authored</span>
                  <span className="font-semibold text-ink">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Historical RGA Updated</span>
                  <span className="font-semibold text-ink">Pending</span>
                </div>
              </div>
            </div>
            <div className="border border-green-600/25 bg-green-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                准备返回 OEM
              </p>
              <p className="mt-2 text-sm text-ink">
                IR 和 LL 将随 EGP 响应包返回到 OEM Tier 2/3 工程师，用于后续调查决策。
              </p>
            </div>
            <button
              className="w-full bg-atlas-blue py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
              type="button"
            >
              返回 EGP 响应到 OEM →
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
                实际 Sensor FAE Workspace 包含完整的包验证、多传感器表面分析、IR/LL
                模板库和传感器 RGA 更新工作流。
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
