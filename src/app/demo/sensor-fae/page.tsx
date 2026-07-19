"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import epData from "@/data/demo/evidence-pack.json";
import historicalRgaData from "@/data/demo/historical-rga.json";

const irStatusLabels: Record<string, string> = {
  matched_known_pattern: "匹配已知模式",
  matched_with_mitigation: "匹配并完成缓解",
  candidate_investigation_path: "候选调查路径",
  candidate_field_test: "需要候选现场测试",
  not_applicable: "不适用于此传感器",
};

export default function SensorFAEDemoPage() {
  const [irStatus, setIrStatus] = useState("matched_known_pattern");
  const [llDraft, setLlDraft] = useState(
    "在高带宽 LiDAR 数据传输期间观察到 USB 3.0 总线重置。该模式与 XT32 线缆组件已知的 EMI 敏感性相匹配。建议的缓解措施：更换屏蔽线缆（P/N：HES-CBL-XT32-SH），并在设备端增加磁芯。"
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
              <span className="text-sm text-muted">传感器 FAE 工作区</span>
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
                <span className="text-muted">传感器</span>
                <span className="ml-2 text-xs font-semibold text-ink">Hesai Pandar XT32</span>
              </div>
            </div>
            <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
              包有效
            </span>
          </div>
        </Section>

        {/* EGP Package Validation */}
        <Section className="bg-white">
          <Eyebrow>EGP 包验证</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">包完整性检查</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">Evidence Pack 标识</p>
              <p className="mt-2 font-mono text-sm font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">证据质量</p>
              <p className="mt-2 text-sm font-semibold capitalize text-ink">
                {epData.evidence_quality}
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">包完整性</p>
              <p className="mt-2 text-sm font-semibold text-green-700">已验证</p>
            </div>
          </div>
          <div className="mt-6 border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
             包含的监控表面
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
          <Eyebrow>Evidence Pack 摘要</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {epData.surface}
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                偏差窗口
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.five_window_summary.deviation}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                上游上下文
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.upstream}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                下游上下文
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.downstream}
              </p>
            </div>
          </div>
        </Section>

        {/* Historical Sensor RGA Recall */}
        <Section className="bg-white">
          <Eyebrow>历史 Sensor RGA</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            Hesai 历史调查模式
          </h2>
          <div className="mt-8 border border-border bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-sensor-tan">{sensorRga.id}</span>
                  <span className="bg-green-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                    {sensorRga.match_type === "strong_candidate" ? "强候选" : "相关历史模式"}
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
                <p className="text-xs text-muted">相似度</p>
                <p className="mt-1 text-2xl font-semibold text-ink">
                  {Math.round(sensorRga.similarity_score * 100)}%
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* IR Editor */}
        <Section className="bg-surface">
          <Eyebrow>调查结果（IR）</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">编写调查结果</h2>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-semibold text-ink">结果状态</label>
              <select
                className="mt-2 w-full border border-border bg-white p-3 text-sm text-ink"
                onChange={(e) => setIrStatus(e.target.value)}
                value={irStatus}
              >
                <option value="matched_known_pattern">匹配已知模式</option>
                <option value="matched_with_mitigation">匹配并完成缓解</option>
                <option value="candidate_investigation_path">
                  候选调查路径
                </option>
                <option value="candidate_field_test">需要候选现场测试</option>
                <option value="not_applicable">不适用于此传感器</option>
              </select>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                IR 摘要（演示）
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                与 {sensorRga.id} 的模式匹配已确认。高带宽运行期间出现的 USB 3.0 总线重置与 XT32 线缆已知的 EMI 敏感性一致。未发现固件或硬件缺陷。建议更换为屏蔽线缆。
              </p>
            </div>
          </div>
        </Section>

        {/* LL Editor */}
        <Section className="bg-white">
          <Eyebrow>经验教训（LL）</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            记录可复用知识
          </h2>
          <div className="mt-8">
            <label className="text-sm font-semibold text-ink">经验教训内容</label>
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
          <Eyebrow>传感器响应</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            返回 OEM 调查包
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                响应摘要
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">IR 状态</span>
                  <span className="font-semibold capitalize text-ink">
                    {irStatusLabels[irStatus] ?? irStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">LL 已撰写</span>
                  <span className="font-semibold text-ink">是</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Historical RGA 已更新</span>
                  <span className="font-semibold text-ink">待处理</span>
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
                演示
              </span>
              <p className="text-xs leading-6 text-muted">
                实际传感器 FAE 工作区包含完整的包验证、多传感器表面分析、IR/LL
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
