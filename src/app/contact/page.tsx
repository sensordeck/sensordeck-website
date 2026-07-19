"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";

const contactOptions = [
  {
    eyebrow: "架构评审",
    title: "讨论您的运行时边界",
    description:
      "带上一个传感器、设备集群或调查流程。我们可以梳理证据边界，并确定聚焦的试点范围。",
  },
  {
    eyebrow: "技术资料",
    title: "获取白皮书",
    description:
      "获取关于运行时传感器治理、运行时调查和 Atlas 证据模型的技术资料。",
  },
  {
    eyebrow: "演示访问",
    title: "在真实场景中了解 Atlas",
    description:
      "通过一个代表性的传感器调查流程，了解运行时证据和组织记忆如何被明确呈现。",
  },
];

const inputClass =
  "input-focus mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus-visible:border-atlas-blue focus-visible:ring-2 focus-visible:ring-atlas-blue/20";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  "organization-type": string;
  "fleet-scale": string;
  "primary-interest": string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  "organization-type": "",
  "fleet-scale": "",
  "primary-interest": "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.target.name as keyof ContactFormData;
    setFormData((current) => ({
      ...current,
      [fieldName]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      ["姓名", formData.name],
      ["工作邮箱", formData.email],
      ["公司名称", formData.company],
      ["职位", formData.role],
      ["组织类型", formData["organization-type"]],
      ["设备集群/产品规模", formData["fleet-scale"]],
      ["主要关注方向", formData["primary-interest"]],
      ["留言", formData.message],
    ]
      .map(
        ([label, value]) =>
          `${encodeURIComponent(label)}%3A%20${encodeURIComponent(value)}`,
      )
      .join("%0A");

    const mailtoUrl =
      `mailto:contact@sensordeck.tech?subject=${encodeURIComponent("SensorDeck 联系申请")}` +
      `&body=${body}`;

    window.location.href = mailtoUrl;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
        <Section id="contact-hero" className="bg-white">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              联系我们
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              从运行时边界开始
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-muted md:text-2xl heading-description">
              告诉我们您正在构建、观察或调查什么。我们将帮助您为团队找到合适的下一步沟通方式。
            </p>
          </div>
        </Section>

        <Section id="contact-options" className="bg-surface">
          <div className="grid gap-4 md:grid-cols-3">
            {contactOptions.map((option, index) => (
              <article
                className="card-enter stagger-item flex min-h-64 flex-col justify-between border border-border bg-white p-6"
                key={option.title}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sensor-tan">
                    {option.eyebrow}
                  </p>
                  <h2 className="mt-8 text-xl font-semibold leading-7 tracking-tight text-ink">
                    {option.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {option.description}
                  </p>
                </div>
                <span className="mt-6 border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-atlas-blue">
                  联系团队
                </span>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact-form" className="bg-white">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="max-w-md">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                申请演示
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                提供足够背景，让第一次沟通更有价值
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                提交表单后将打开一封发送给 SensorDeck 团队的邮件草稿。我们不使用自定义后端，也不会自动进行资格筛选。
              </p>
              <p className="mt-8 border-l-2 border-sensor-tan pl-4 text-sm leading-7 text-muted stagger-item" style={{ animationDelay: '240ms' }}>
                我们关注证据归属、明确的工程边界，以及在压力下仍然可审查的系统。
              </p>
            </div>

            <form
              className="grid gap-5 stagger-item"
              style={{ animationDelay: '320ms' }}
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-ink" htmlFor="name">
                    姓名
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
                <div>
                  <label className="text-sm font-semibold text-ink" htmlFor="email">
                    工作邮箱
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-ink" htmlFor="company">
                    公司名称
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
                  <label className="text-sm font-semibold text-ink" htmlFor="role">
                    职位
                  </label>
                  <input
                    className={inputClass}
                    id="role"
                    name="role"
                    placeholder="请输入您的职位"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="text-sm font-semibold text-ink"
                    htmlFor="organization-type"
                  >
                    组织类型
                  </label>
                  <select
                    className={inputClass}
                    id="organization-type"
                    name="organization-type"
                    required
                    value={formData["organization-type"]}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      请选择
                    </option>
                    <option>机器人厂商</option>
                    <option>传感器制造商</option>
                    <option>系统集成商</option>
                    <option>其他</option>
                  </select>
                </div>
                <div>
                  <label
                    className="text-sm font-semibold text-ink"
                    htmlFor="fleet-scale"
                  >
                    设备集群/产品规模
                  </label>
                  <input
                    className={inputClass}
                    id="fleet-scale"
                    name="fleet-scale"
                    placeholder="例如：已部署 2,000 台设备"
                    type="text"
                    value={formData["fleet-scale"]}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-sm font-semibold text-ink"
                  htmlFor="primary-interest"
                  >
                  主要关注方向
                </label>
                <select
                  className={inputClass}
                  id="primary-interest"
                  name="primary-interest"
                  required
                  value={formData["primary-interest"]}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    请选择
                  </option>
                  <option>运行时传感器治理</option>
                  <option>运行时调查</option>
                  <option>技术白皮书</option>
                  <option>架构评审</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="message">
                  留言
                </label>
                <textarea
                  className={`${inputClass} min-h-36 resize-y leading-7`}
                  id="message"
                  name="message"
                  placeholder="您正在解决什么运行时、传感器或调查问题？"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className="button-press button-hover mt-2 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
                type="submit"
              >
                打开邮件草稿
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
