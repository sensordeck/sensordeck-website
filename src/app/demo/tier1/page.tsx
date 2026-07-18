"use client";

import { useState } from "react";
import Eyebrow from "@/components/website/Eyebrow";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import refData from "@/data/demo/ref.json";
import robotData from "@/data/demo/robot.json";

const STEPS = ["incident", "robot", "evidence", "review"] as const;
type Step = (typeof STEPS)[number];

export default function Tier1DemoPage() {
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
              <span className="text-sm text-muted">Tier 1 Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted">Zhang Wei</span>
              <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Tier 1
              </span>
            </div>
          </div>
        </Section>

        {/* Progress Bar */}
        <Section className="bg-surface py-4">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div className="flex flex-1 items-center" key={step}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-8 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                      index <= stepIndex
                        ? "border-atlas-blue bg-atlas-blue text-white"
                        : "border-border bg-white text-muted"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      index <= stepIndex ? "text-ink" : "text-muted"
                    }`}
                  >
                    {step === "incident" && "事件描述"}
                    {step === "robot" && "机器人信息"}
                    {step === "evidence" && "运行时证据"}
                    {step === "review" && "审核路由"}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`mx-4 h-0.5 flex-1 ${
                      index < stepIndex ? "bg-atlas-blue" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Step Content */}
        <Section className="bg-white">
          {currentStep === "incident" && (
            <div className="max-w-2xl">
              <Eyebrow>Step 1 / 4</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                描述事件
              </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">
                    事件类型
                  </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{refData.incident_type}</option>
                    <option>Sensor Anomaly</option>
                    <option>Communication Loss</option>
                    <option>Performance Degradation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">
                    严重程度
                  </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>{refData.severity}</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">
                    事件描述
                  </label>
                  <textarea
                    className="mt-2 w-full border border-border bg-surface p-3 text-sm leading-6 text-ink"
                    defaultValue={refData.description}
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">
                    事件时间（近似）
                  </label>
                  <input
                    className="mt-2 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue="2026-07-16 08:15"
                    type="datetime-local"
                  />
                </div>
              </div>
              <button
                className="mt-8 bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                onClick={() => setCurrentStep("robot")}
                type="button"
              >
                下一步：机器人信息 →
              </button>
            </div>
          )}

          {currentStep === "robot" && (
            <div className="max-w-2xl">
              <Eyebrow>Step 2 / 4</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                机器人与环境
              </h1>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="text-sm font-semibold text-ink">
                    机器人序列号
                  </label>
                  <input
                    className="mt-2 w-full border border-border bg-surface p-3 font-mono text-sm text-ink"
                    defaultValue={robotData.serial_number}
                    type="text"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-ink">
                      型号
                    </label>
                    <input
                      className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                      defaultValue={robotData.model}
                      disabled
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink">
                      固件版本
                    </label>
                    <input
                      className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                      defaultValue={robotData.firmware_version}
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">
                    部署位置
                  </label>
                  <input
                    className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={refData.environment.location}
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">
                    环境条件
                  </label>
                  <input
                    className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink"
                    defaultValue={refData.environment.conditions}
                    type="text"
                  />
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                  onClick={() => setCurrentStep("incident")}
                  type="button"
                >
                  ← 上一步
                </button>
                <button
                  className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                  onClick={() => setCurrentStep("evidence")}
                  type="button"
                >
                  下一步：运行时证据 →
                </button>
              </div>
            </div>
          )}

          {currentStep === "evidence" && (
            <div className="max-w-2xl">
              <Eyebrow>Step 3 / 4</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                运行时证据
              </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        Atlas Agent 状态
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        AGT-7F3A-7A21
                      </p>
                    </div>
                    <span className="border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
                      Active
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted">版本</span>
                      <span className="font-mono text-ink">v1.2.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">最后心跳</span>
                      <span className="font-mono text-ink">
                        2026-07-16 14:23:47
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">
                    Runtime Dataset 时间窗口
                  </label>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <input
                      className="border border-border bg-surface p-3 font-mono text-sm text-ink"
                      defaultValue="2026-07-16 08:10:00"
                      type="datetime-local"
                    />
                    <input
                      className="border border-border bg-surface p-3 font-mono text-sm text-ink"
                      defaultValue="2026-07-16 08:25:00"
                      type="datetime-local"
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    持续时间: 15 分钟
                  </p>
                </div>

                <div className="border border-atlas-blue/25 bg-surface-blue p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-atlas-blue">
                    Runtime Dataset 已锁定
                  </p>
                  <p className="mt-2 text-sm text-ink">
                    Runtime Dataset ID:{" "}
                    <span className="font-mono">RD-7F3A-0716-0815</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    覆盖范围: Timing, Power, Network, Storage, Sensors, ROS2
                    Topics
                  </p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                  onClick={() => setCurrentStep("robot")}
                  type="button"
                >
                  ← 上一步
                </button>
                <button
                  className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                  onClick={() => setCurrentStep("review")}
                  type="button"
                >
                  下一步：审核路由 →
                </button>
              </div>
            </div>
          )}

          {currentStep === "review" && (
            <div className="max-w-2xl">
              <Eyebrow>Step 4 / 4</Eyebrow>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                审核并路由到 Tier 2
              </h1>
              <div className="mt-8 space-y-6">
                <div className="border border-border bg-surface p-6">
                  <p className="text-sm font-semibold text-ink">REF 摘要</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">事件类型</span>
                      <span className="font-semibold text-ink">
                        {refData.incident_type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">严重程度</span>
                      <span className="font-semibold text-ink">
                        {refData.severity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">机器人</span>
                      <span className="font-mono text-xs text-ink">
                        {robotData.serial_number}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Runtime Dataset</span>
                      <span className="font-mono text-xs text-ink">
                        {refData.runtime_dataset_id}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink">
                    路由到
                  </label>
                  <select className="mt-2 w-full border border-border bg-surface p-3 text-sm text-ink">
                    <option>Tier 2 Engineer - Li Ming</option>
                    <option>Tier 2 Engineer - Chen Jing</option>
                    <option>Tier 3 Specialist</option>
                  </select>
                </div>

                <div className="border border-green-600/25 bg-green-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                    准备创建 REF
                  </p>
                  <p className="mt-2 text-sm text-ink">
                    创建后将生成 REF ID 并路由到指定工程师。运行时数据集已锁定，可用于证据生成。
                  </p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  className="border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
                  onClick={() => setCurrentStep("evidence")}
                  type="button"
                >
                  ← 上一步
                </button>
                <button
                  className="bg-atlas-blue px-6 py-3 text-sm font-semibold text-white hover:bg-atlas-blue-dark"
                  type="button"
                >
                  创建 REF 并路由 →
                </button>
              </div>
            </div>
          )}
        </Section>

        {/* Demo Notice */}
        <Section className="bg-surface">
          <div className="border border-atlas-blue/25 bg-surface-blue p-5">
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[10px] font-semibold text-atlas-blue">
                DEMO
              </span>
              <p className="text-xs leading-6 text-muted">
                这是一个静态演示界面。实际 Tier 1 Portal 将提交到 Atlas 后端并触发 Tier 2 工作流。
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
