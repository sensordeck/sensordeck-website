"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import agentData from "@/data/demo/agent.json";
import refData from "@/data/demo/ref.json";
import robotData from "@/data/demo/robot.json";
import { legacyZhCopy } from "@/content/zh/legacy-page-copy";

const STEPS = ["incident", "robot", "evidence", "review"] as const;
type Step = (typeof STEPS)[number];

export default function Tier1DemoClient({
  translations


}: {translations: Record<string, string>;}) {
  const [currentStep, setCurrentStep] = useState<Step>("incident");

  const stepIndex = STEPS.indexOf(currentStep);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />

      <main>
        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold text-atlas-blue">
                ATLAS
              </span>
              <span className="text-sm text-muted">{legacyZhCopy.demoTier1.text001}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">{refData.created_by.name}</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">{legacyZhCopy.demoTier1.text002}

              </span>
            </div>
          </div>
        </Section>

        {/* Progress Bar */}
        <Section className="bg-surface py-4">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) =>
            <div className="flex flex-1 items-center" key={step}>
                <div className="flex items-center gap-3">
                  <div
                  className={`flex size-8 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                  index <= stepIndex ?
                  "border-atlas-blue bg-atlas-blue text-white" :
                  "border-border bg-white text-muted"}`
                  }>
                  
                    {index + 1}
                  </div>
                  <span
                  className={`text-sm font-semibold ${
                  index <= stepIndex ? "text-ink" : "text-muted"}`
                  }>
                  
                    {step === "incident" && legacyZhCopy.demoTier1.text003}
                    {step === "robot" && legacyZhCopy.demoTier1.text004}
                    {step === "evidence" && legacyZhCopy.demoTier1.text005}
                    {step === "review" && legacyZhCopy.demoTier1.text006}
                  </span>
                </div>
                {index < STEPS.length - 1 &&
              <div
                className={`mx-4 h-0.5 flex-1 ${
                index < stepIndex ? "bg-atlas-blue" : "bg-border"}`
                } />

              }
              </div>
            )}
          </div>
        </Section>

        {/* Step Content */}
        <Section className="bg-white">
          {currentStep === "incident" &&
          <div className="max-w-2xl">
              <Eyebrow>{legacyZhCopy.demoTier1.text007}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoTier1.text008}

            </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text009}

                </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{refData.incident_type}</option>
                    <option>{legacyZhCopy.demoTier1.text010}</option>
                    <option>{legacyZhCopy.demoTier1.text011}</option>
                    <option>{legacyZhCopy.demoTier1.text012}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text013}

                </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{refData.severity}</option>
                    <option>{legacyZhCopy.demoTier1.text014}</option>
                    <option>{legacyZhCopy.demoTier1.text015}</option>
                    <option>{legacyZhCopy.demoTier1.text016}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text017}

                </label>
                  <textarea
                  className="mt-2 w-full border border-border bg-surface p-3 text-sm leading-6 text-ink"
                  defaultValue={refData.description}
                  rows={4} />
                
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text018}

                </label>
                  <input
                  className="mt-2 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                  defaultValue={refData.incident_time_approximate.slice(0, 16)}
                  type="datetime-local" />
                
                </div>
              </div>
              <button
              className="mt-8 bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
              onClick={() => setCurrentStep("robot")}
              type="button">{legacyZhCopy.demoTier1.text019}


            </button>
            </div>
          }

          {currentStep === "robot" &&
          <div className="max-w-2xl">
              <Eyebrow>{legacyZhCopy.demoTier1.text020}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoTier1.text021}

            </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text022}

                </label>
                  <input
                  className="mt-2 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                  defaultValue={robotData.serial_number}
                  type="text" />
                
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text023}

                  </label>
                    <input
                    className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={robotData.model}
                    disabled
                    type="text" />
                  
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text024}

                  </label>
                    <input
                    className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={robotData.firmware_version}
                    disabled
                    type="text" />
                  
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text025}

                </label>
                  <input
                  className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                  defaultValue={refData.environment.location}
                  type="text" />
                
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text026}

                </label>
                  <input
                  className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                  defaultValue={refData.environment.conditions}
                  type="text" />
                
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                onClick={() => setCurrentStep("incident")}
                type="button">{legacyZhCopy.demoTier1.text027}


              </button>
                <button
                className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                onClick={() => setCurrentStep("evidence")}
                type="button">{legacyZhCopy.demoTier1.text028}


              </button>
              </div>
            </div>
          }

          {currentStep === "evidence" &&
          <div className="max-w-2xl">
              <Eyebrow>{legacyZhCopy.demoTier1.text029}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoTier1.text030}

            </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text031}

                    </p>
                      <p className="mt-1 text-xs text-muted">
                        {agentData.agent_id}
                      </p>
                    </div>
                    <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">{legacyZhCopy.demoTier1.text032}

                  </span>
                  </div>
                  <div className="mt-4 grid gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text033}</span>
                      <span className="font-mono text-ink">{agentData.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text034}</span>
                      <span className="font-mono text-ink">
                        {agentData.last_heartbeat.slice(0, 19).replace("T", " ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text035}

                </label>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <input
                    className="border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue={refData.runtime_window.start.slice(0, 19)}
                    type="datetime-local" />
                  
                    <input
                    className="border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue={refData.runtime_window.end.slice(0, 19)}
                    type="datetime-local" />
                  
                  </div>
                  <p className="mt-2 text-xs text-muted">{legacyZhCopy.demoTier1.text036}

                </p>
                </div>

                <div className="border border-atlas-blue/25 bg-surface-blue p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-atlas-blue">{legacyZhCopy.demoTier1.text037}

                </p>
                  <p className="mt-2 text-sm text-ink">{legacyZhCopy.demoTier1.text038}
                  {" "}
                    <span className="font-mono">{refData.runtime_dataset_id}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">{legacyZhCopy.demoTier1.text039}

                </p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                onClick={() => setCurrentStep("robot")}
                type="button">{legacyZhCopy.demoTier1.text027}


              </button>
                <button
                className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                onClick={() => setCurrentStep("review")}
                type="button">{legacyZhCopy.demoTier1.text040}


              </button>
              </div>
            </div>
          }

          {currentStep === "review" &&
          <div className="max-w-2xl">
              <Eyebrow>{legacyZhCopy.demoTier1.text041}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{legacyZhCopy.demoTier1.text042}

            </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <p className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text043}</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text044}</span>
                      <span className="font-semibold text-ink">
                        {refData.incident_type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text045}</span>
                      <span className="font-semibold text-ink">
                        {refData.severity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text046}</span>
                      <span className="font-mono text-xs text-ink">
                        {robotData.serial_number}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">{legacyZhCopy.demoTier1.text047}</span>
                      <span className="font-mono text-xs text-ink">
                        {refData.runtime_dataset_id}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">{legacyZhCopy.demoTier1.text048}

                </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{legacyZhCopy.demoTier1.text049}</option>
                    <option>{legacyZhCopy.demoTier1.text050}</option>
                    <option>{legacyZhCopy.demoTier1.text051}</option>
                  </select>
                </div>

                <div className="border border-green-600/25 bg-green-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{legacyZhCopy.demoTier1.text052}

                </p>
                  <p className="mt-2 text-sm text-ink">{legacyZhCopy.demoTier1.text053}

                </p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                onClick={() => setCurrentStep("evidence")}
                type="button">{legacyZhCopy.demoTier1.text027}


              </button>
                <button
                className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                type="button">{legacyZhCopy.demoTier1.text054}


              </button>
              </div>
            </div>
          }
        </Section>

        {/* Demo Notice */}
        <Section className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">{legacyZhCopy.demoTier1.text055}

              </span>
              <p className="text-xs leading-6 text-muted">{legacyZhCopy.demoTier1.text056}

              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>);
}
