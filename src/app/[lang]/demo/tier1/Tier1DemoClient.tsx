"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Section from "@/components/website/Section";
import agentData from "@/data/demo/agent.json";
import refData from "@/data/demo/ref.json";
import robotData from "@/data/demo/robot.json";
import type { DemoContent } from "@/lib/content-types";

const STEPS = ["incident", "robot", "evidence", "review"] as const;
type Step = (typeof STEPS)[number];

export default function Tier1DemoClient({
  content,
}: {
  content: DemoContent;
}) {
  const [currentStep, setCurrentStep] = useState<Step>("incident");

  const stepIndex = STEPS.indexOf(currentStep);

  return (
    <div className="bg-white font-sans text-ink">

        {/* Demo UI Shell - Top Bar */}
        <Section className="border-b border-border bg-white py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-lg font-semibold text-atlas-blue">
                ATLAS
              </span>
              <span className="text-sm text-muted">{content.tier1.portalTitle}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-xs text-muted">
                {content.data.ref.creatorName}
              </span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">{content.tier1.roleLabel}

              </span>
            </div>
          </div>
        </Section>

        {/* Progress Bar */}
        <Section className="bg-surface py-4">
          <div className="overflow-x-auto pb-2 md:overflow-visible md:pb-0">
            <div className="flex min-w-[42rem] items-center justify-between md:min-w-0">
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
                  
                    {step === "incident" && content.tier1.stepLabels.incident}
                    {step === "robot" && content.tier1.stepLabels.robot}
                    {step === "evidence" && content.tier1.stepLabels.evidence}
                    {step === "review" && content.tier1.stepLabels.review}
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
          </div>
        </Section>

        {/* Step Content */}
        <Section className="bg-white">
          {currentStep === "incident" &&
          <div className="max-w-2xl">
              <Eyebrow>{content.tier1.incident.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{content.tier1.incident.title}

            </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.incident.typeLabel}

                </label>
                  <select className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{content.data.ref.incidentType}</option>
                    <option>{content.tier1.incident.typeOptions[0]}</option>
                    <option>{content.tier1.incident.typeOptions[1]}</option>
                    <option>{content.tier1.incident.typeOptions[2]}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.incident.severityLabel}

                </label>
                  <select className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{content.data.ref.severity}</option>
                    <option>{content.tier1.incident.severityOptions[0]}</option>
                    <option>{content.tier1.incident.severityOptions[1]}</option>
                    <option>{content.tier1.incident.severityOptions[2]}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.incident.descriptionLabel}

                </label>
                  <textarea
                  className="mt-2 w-full border border-border bg-surface p-3 text-sm leading-6 text-ink"
                  defaultValue={content.data.ref.description}
                  rows={4} />
                
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.incident.timeLabel}

                </label>
                  <input
                  className="mt-2 min-h-11 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                  defaultValue={refData.incident_time_approximate.slice(0, 16)}
                  type="datetime-local" />
                
                </div>
              </div>
              <button
              className="mt-8 min-h-11 bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
              onClick={() => setCurrentStep("robot")}
              type="button">{content.tier1.incident.next}


            </button>
            </div>
          }

          {currentStep === "robot" &&
          <div className="max-w-2xl">
              <Eyebrow>{content.tier1.robot.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{content.tier1.robot.title}

            </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.robot.serialNumberLabel}

                </label>
                  <input
                  className="mt-2 min-h-11 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                  defaultValue={robotData.serial_number}
                  type="text" />
                
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-ink">{content.tier1.robot.modelLabel}

                  </label>
                    <input
                    className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={content.data.robot.model}
                    disabled
                    type="text" />
                  
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink">{content.tier1.robot.firmwareLabel}

                  </label>
                    <input
                    className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={robotData.firmware_version}
                    disabled
                    type="text" />
                  
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.robot.locationLabel}

                </label>
                  <input
                  className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink"
                  defaultValue={content.data.ref.environmentLocation}
                  type="text" />
                
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.robot.conditionsLabel}

                </label>
                  <input
                  className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink"
                  defaultValue={content.data.ref.environmentConditions}
                  type="text" />
                
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                className="min-h-11 w-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface sm:w-auto"
                onClick={() => setCurrentStep("incident")}
                type="button">{content.tier1.previous}


              </button>
                <button
                className="min-h-11 w-full bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark sm:w-auto"
                onClick={() => setCurrentStep("evidence")}
                type="button">{content.tier1.robot.next}


              </button>
              </div>
            </div>
          }

          {currentStep === "evidence" &&
          <div className="max-w-2xl">
              <Eyebrow>{content.tier1.evidence.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{content.tier1.evidence.title}

            </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{content.tier1.evidence.agentStatusLabel}

                    </p>
                      <p className="mt-1 text-xs text-muted">
                        {agentData.agent_id}
                      </p>
                    </div>
                    <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">{content.tier1.evidence.activeLabel}

                  </span>
                  </div>
                  <div className="mt-4 grid gap-3 text-xs">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.evidence.versionLabel}</span>
                      <span className="font-mono text-ink">{agentData.version}</span>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.evidence.heartbeatLabel}</span>
                      <span className="font-mono text-ink">
                        {agentData.last_heartbeat.slice(0, 19).replace("T", " ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.evidence.timeWindowLabel}

                </label>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <input
                    className="min-h-11 min-w-0 border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue={refData.runtime_window.start.slice(0, 19)}
                    type="datetime-local" />
                  
                    <input
                    className="min-h-11 min-w-0 border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue={refData.runtime_window.end.slice(0, 19)}
                    type="datetime-local" />
                  
                  </div>
                  <p className="mt-2 text-xs text-muted">{content.tier1.evidence.durationLabel}

                </p>
                </div>

                <div className="border border-atlas-blue/25 bg-surface-blue p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-atlas-blue">{content.tier1.evidence.lockedLabel}

                </p>
                  <p className="mt-2 text-sm text-ink">{content.tier1.evidence.datasetIdLabel}
                  {" "}
                    <span className="font-mono">{refData.runtime_dataset_id}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">{content.tier1.evidence.coverageLabel}

                </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                className="min-h-11 w-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface sm:w-auto"
                onClick={() => setCurrentStep("robot")}
                type="button">{content.tier1.previous}


              </button>
                <button
                className="min-h-11 w-full bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark sm:w-auto"
                onClick={() => setCurrentStep("review")}
                type="button">{content.tier1.evidence.next}


              </button>
              </div>
            </div>
          }

          {currentStep === "review" &&
          <div className="max-w-2xl">
              <Eyebrow>{content.tier1.review.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{content.tier1.review.title}

            </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <p className="text-sm font-semibold text-ink">{content.tier1.review.summaryLabel}</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.review.incidentTypeLabel}</span>
                      <span className="font-semibold text-ink">
                        {content.data.ref.incidentType}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.review.severityLabel}</span>
                      <span className="font-semibold text-ink">
                        {content.data.ref.severity}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.review.robotLabel}</span>
                      <span className="font-mono text-xs text-ink">
                        {robotData.serial_number}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-muted">{content.tier1.review.datasetLabel}</span>
                      <span className="font-mono text-xs text-ink">
                        {refData.runtime_dataset_id}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">{content.tier1.review.routeToLabel}

                </label>
                  <select className="mt-2 min-h-11 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{content.tier1.review.routeOptions[0]}</option>
                    <option>{content.tier1.review.routeOptions[1]}</option>
                    <option>{content.tier1.review.routeOptions[2]}</option>
                  </select>
                </div>

                <div className="border border-green-600/25 bg-green-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{content.tier1.review.readyLabel}

                </p>
                  <p className="mt-2 text-sm text-ink">{content.tier1.review.readyDescription}

                </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                className="min-h-11 w-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface sm:w-auto"
                onClick={() => setCurrentStep("evidence")}
                type="button">{content.tier1.previous}


              </button>
                <button
                className="min-h-11 w-full bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark sm:w-auto"
                type="button">{content.tier1.review.submit}


              </button>
              </div>
            </div>
          }
        </Section>

        {/* Demo Notice */}
        <Section className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">{content.tier1.demoLabel}

              </span>
              <p className="text-xs leading-6 text-muted">{content.tier1.demoDescription}

              </p>
            </div>
          </div>
        </Section>

    </div>);
}
