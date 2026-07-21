"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/70 " +
  "transition-[border-color,box-shadow,background-color] " +
  "duration-[250ms,100ms,250ms] " +
  "ease-in-out " +
  "hover:border-border/80 " +
  "focus-visible:border-atlas-blue " +
  "focus-visible:ring-[3px] focus-visible:ring-atlas-blue/20";

type DemoFormData = {
  name: string;
  wechat: string;
  phone: string;
  email: string;
  company: string;
  businessType: string;
};

const initialFormData: DemoFormData = {
  name: "",
  wechat: "",
  phone: "",
  email: "",
  company: "",
  businessType: "",
};

export default function RequestDemoPage() {
  const [formData, setFormData] = useState<DemoFormData>(initialFormData);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const fieldName = event.target.name as keyof DemoFormData;
    setFormData((current) => ({
      ...current,
      [fieldName]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      ["联系人", formData.name],
      ["微信号", formData.wechat],
      ["手机", formData.phone],
      ["邮箱", formData.email],
      ["公司名", formData.company],
      ["业务类型", formData.businessType],
    ]
      .map(
        ([label, value]) =>
          `${encodeURIComponent(label)}%3A%20${encodeURIComponent(value)}`,
      )
      .join("%0A");

    const mailtoUrl =
      `mailto:contact@sensordeck.tech?subject=${encodeURIComponent("Atlas 演示申请")}` +
      `&body=${body}`;

    window.location.href = mailtoUrl;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
        <Section id="demo-hero" className="bg-white">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              申请演示
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              在真实场景中了解 Atlas
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-muted md:text-2xl heading-description">
              填写以下信息，我们将安排专人与您联系，展示 Atlas 如何为您的运行时调查提供持续可追溯的证据支持。
            </p>
          </div>
        </Section>

        <Section id="demo-form" className="bg-surface">
          <div className="mx-auto max-w-2xl">
            <form
              className="grid gap-5 stagger-item"
              style={{ animationDelay: '120ms' }}
              onSubmit={handleSubmit}
            >
              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="name">
                  联系人 <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClass}
                  id="name"
                  name="name"
                  placeholder="请输入您的姓名"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-ink" htmlFor="wechat">
                    微信号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    id="wechat"
                    name="wechat"
                    placeholder="请输入微信号"
                    required
                    type="text"
                    value={formData.wechat}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink" htmlFor="phone">
                    手机 <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    id="phone"
                    name="phone"
                    placeholder="请输入手机号码"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="email">
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClass}
                  id="email"
                  name="email"
                  placeholder="请输入工作邮箱"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="company">
                  公司名 <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClass}
                  id="company"
                  name="company"
                  placeholder="请输入公司名称"
                  required
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold text-ink"
                  htmlFor="businessType"
                >
                  业务类型 <span className="text-red-500">*</span>
                </label>
                <select
                  className={inputClass}
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    请选择业务类型
                  </option>
                  <option>机器人 OEM</option>
                  <option>传感器制造商</option>
                </select>
              </div>

              <button
                className="button-press button-hover mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue sm:w-fit"
                type="submit"
              >
                提交申请
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Section>

        <Section id="demo-info" className="bg-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              我们的销售团队
            </h2>
            <div className="mt-8 border-t border-border pt-8 text-sm leading-7 text-muted">
              <p>销售联系方式和团队信息将由 SensorDeck 更新</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
