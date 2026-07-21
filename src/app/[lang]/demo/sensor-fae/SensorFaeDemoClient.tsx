"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import robotData from "@/data/demo/robot.json";
import epData from "@/data/demo/evidence-pack.json";
import historicalRgaData from "@/data/demo/historical-rga.json";
import { translateLegacyTree } from "@/lib/legacy-i18n";import { legacyZhCopy } from "@/content/zh/legacy-page-copy";

const irStatusLabels: Record<string, string> = {
  matched_known_pattern: legacyZhCopy.demoSensorFae.text001,
  matched_with_mitigation: legacyZhCopy.demoSensorFae.text002,
  candidate_investigation_path: legacyZhCopy.demoSensorFae.text003,
  candidate_field_test: legacyZhCopy.demoSensorFae.text004,
  not_applicable: legacyZhCopy.demoSensorFae.text005
};

export default function SensorFaeDemoClient({
  translations


}: {translations: Record<string, string>;}) {
  const [irStatus, setIrStatus] = useState("matched_known_pattern");
  const [llDraft, setLlDraft] = useState<string>(legacyZhCopy.demoSensorFae.text006

  );

  const sensorRga = historicalRgaData.recalled_cases[0];

  return translateLegacyTree(
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold text-atlas-blue">ATLAS</span>
              <span className="text-sm text-muted">{legacyZhCopy.demoSensorFae.text007}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">{refData.sensor_fae.name}</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                {refData.sensor_fae.vendor} FAE
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
                <span className="text-muted">{legacyZhCopy.demoSensorFae.text008}</span>
                <span className="ml-2 text-xs font-semibold text-ink">
                  {robotData.sensors.lidar.manufacturer} {robotData.sensors.lidar.model}
                </span>
              </div>
            </div>
            <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">{legacyZhCopy.demoSensorFae.text009}

            </span>
          </div>
        </Section>

        {/* EGP Package Validation */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoSensorFae.text010}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoSensorFae.text011}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{legacyZhCopy.demoSensorFae.text012}</p>
              <p className="mt-2 font-mono text-sm font-semibold text-ink">{epData.ep_id}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{legacyZhCopy.demoSensorFae.text013}</p>
              <p className="mt-2 text-sm font-semibold capitalize text-ink">
                {epData.evidence_quality}
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-xs text-muted">{legacyZhCopy.demoSensorFae.text014}</p>
              <p className="mt-2 text-sm font-semibold text-green-700">{legacyZhCopy.demoSensorFae.text015}</p>
            </div>
          </div>
          <div className="mt-6 border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text016}

            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {epData.runtime_context.affected_surfaces.map((surface) =>
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
          <Eyebrow>{legacyZhCopy.demoSensorFae.text017}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {epData.surface}
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text018}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.five_window_summary.deviation}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text019}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.upstream}
              </p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text020}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">
                {epData.runtime_context.downstream}
              </p>
            </div>
          </div>
        </Section>

        {/* Historical Sensor RGA Recall */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoSensorFae.text021}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoSensorFae.text022}

          </h2>
          <div className="mt-8 border border-border bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-sensor-tan-text">{sensorRga.id}</span>
                  <span className="bg-green-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                    {sensorRga.match_type === "strong_candidate" ? legacyZhCopy.demoSensorFae.text023 : legacyZhCopy.demoSensorFae.text024}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{sensorRga.surface}</p>
                <p className="mt-2 text-xs leading-5 text-muted">{sensorRga.pattern}</p>
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-ink">{legacyZhCopy.demoSensorFae.text025}</span>
                    <span className="ml-2 font-mono text-muted">{sensorRga.original_ref}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-ink">{legacyZhCopy.demoSensorFae.text026}</span>
                    <span className="ml-2 text-muted">{sensorRga.resolution_summary}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-muted">{legacyZhCopy.demoSensorFae.text027}</p>
                <p className="mt-1 text-2xl font-semibold text-ink">
                  {Math.round(sensorRga.similarity_score * 100)}%
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* IR Editor */}
        <Section className="bg-surface">
          <Eyebrow>{legacyZhCopy.demoSensorFae.text028}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoSensorFae.text029}</h2>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoSensorFae.text030}</label>
              <select
                className="mt-2 w-full border border-border bg-white p-3 text-sm text-ink"
                onChange={(e) => setIrStatus(e.target.value)}
                value={irStatus}>
                
                <option value="matched_known_pattern">{legacyZhCopy.demoSensorFae.text001}</option>
                <option value="matched_with_mitigation">{legacyZhCopy.demoSensorFae.text002}</option>
                <option value="candidate_investigation_path">{legacyZhCopy.demoSensorFae.text031}

                </option>
                <option value="candidate_field_test">{legacyZhCopy.demoSensorFae.text004}</option>
                <option value="not_applicable">{legacyZhCopy.demoSensorFae.text005}</option>
              </select>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text032}

              </p>
              <p className="mt-3 text-sm leading-7 text-ink">{legacyZhCopy.demoSensorFae.text033}
                {sensorRga.id}{legacyZhCopy.demoSensorFae.text034}
              </p>
            </div>
          </div>
        </Section>

        {/* LL Editor */}
        <Section className="bg-white">
          <Eyebrow>{legacyZhCopy.demoSensorFae.text035}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoSensorFae.text036}

          </h2>
          <div className="mt-8">
            <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoSensorFae.text037}</label>
            <textarea
              className="mt-2 w-full border border-border bg-surface p-4 text-sm leading-7 text-ink"
              onChange={(e) => setLlDraft(e.target.value)}
              rows={6}
              value={llDraft} />
            
            <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoSensorFae.text038}

            </p>
          </div>
        </Section>

        {/* Sensor Response */}
        <Section className="bg-surface">
          <Eyebrow>{legacyZhCopy.demoSensorFae.text039}</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoSensorFae.text040}

          </h2>
          <div className="mt-8 space-y-6">
            <div className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoSensorFae.text041}

              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">{legacyZhCopy.demoSensorFae.text042}</span>
                  <span className="font-semibold capitalize text-ink">
                    {irStatusLabels[irStatus] ?? irStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">{legacyZhCopy.demoSensorFae.text043}</span>
                  <span className="font-semibold text-ink">{legacyZhCopy.demoSensorFae.text044}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">{legacyZhCopy.demoSensorFae.text045}</span>
                  <span className="font-semibold text-ink">{legacyZhCopy.demoSensorFae.text046}</span>
                </div>
              </div>
            </div>
            <div className="border border-green-600/25 bg-green-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{legacyZhCopy.demoSensorFae.text047}

              </p>
              <p className="mt-2 text-sm text-ink">{legacyZhCopy.demoSensorFae.text048}

              </p>
            </div>
            <button
              className="w-full bg-atlas-blue py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
              type="button">{legacyZhCopy.demoSensorFae.text049}


            </button>
          </div>
        </Section>

        {/* Demo Notice */}
        <Section className="bg-white">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">{legacyZhCopy.demoSensorFae.text050}

              </span>
              <p className="text-xs leading-6 text-muted">{legacyZhCopy.demoSensorFae.text051}


              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>,
    translations);
}
