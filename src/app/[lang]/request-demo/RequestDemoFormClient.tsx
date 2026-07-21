"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import type { RequestDemoContent } from "@/content/en/request-demo";

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/70 " +
  "transition-[border-color,box-shadow,background-color] duration-[250ms,100ms,250ms] ease-in-out " +
  "hover:border-border/80 focus-visible:border-atlas-blue focus-visible:ring-[3px] focus-visible:ring-atlas-blue/20";

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

export default function RequestDemoFormClient({
  content,
}: {
  content: RequestDemoContent;
}) {
  const [formData, setFormData] = useState<DemoFormData>(initialFormData);
  const { fields } = content;

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
      [fields.name.label, formData.name],
      [fields.wechat.label, formData.wechat],
      [fields.phone.label, formData.phone],
      [fields.email.label, formData.email],
      [fields.company.label, formData.company],
      [fields.businessType.label, formData.businessType],
    ]
      .filter(([, value]) => value)
      .map(
        ([label, value]) =>
          `${encodeURIComponent(label)}%3A%20${encodeURIComponent(value)}`,
      )
      .join("%0A");

    window.location.href =
      `mailto:contact@sensordeck.tech?subject=${encodeURIComponent(content.emailSubject)}` +
      `&body=${body}`;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
        <Section id="demo-hero" className="bg-white">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl heading-title">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-muted md:text-2xl heading-description">
              {content.hero.description}
            </p>
          </div>
        </Section>

        <Section id="demo-form" className="bg-surface">
          <div className="mx-auto max-w-2xl">
            <form
              className="grid gap-5 stagger-item"
              style={{ animationDelay: "120ms" }}
              onSubmit={handleSubmit}
            >
              <DemoTextInput
                field={fields.name}
                name="name"
                required
                type="text"
                value={formData.name}
                onChange={handleChange}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <DemoTextInput
                  field={fields.wechat}
                  name="wechat"
                  required={fields.wechat.required}
                  type="text"
                  value={formData.wechat}
                  onChange={handleChange}
                />
                <DemoTextInput
                  field={fields.phone}
                  name="phone"
                  required={fields.phone.required}
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <DemoTextInput
                field={fields.email}
                name="email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <DemoTextInput
                field={fields.company}
                name="company"
                required
                type="text"
                value={formData.company}
                onChange={handleChange}
              />

              <div>
                <label
                  className="text-sm font-semibold text-ink"
                  htmlFor="businessType"
                >
                  {fields.businessType.label}{" "}
                  <span className="text-red-500">*</span>
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
                    {fields.businessType.placeholder}
                  </option>
                  {fields.businessType.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button
                className="button-press button-hover mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue sm:w-fit"
                type="submit"
              >
                {content.submit}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Section>

        <Section id="demo-info" className="bg-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {content.salesTitle}
            </h2>
            <div className="mt-8 border-t border-border pt-8 text-sm leading-7 text-muted">
              <p>{content.salesNote}</p>
            </div>
          </div>
        </Section>

        <Section id="global-locations" className="bg-surface">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {content.locations.title}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {content.locations.offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-lg border border-border bg-white p-8"
                >
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-muted">
                    {office.city}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-ink">
                    {office.name}
                  </h3>
                  <div className="space-y-3 text-sm text-muted">
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlas-blue"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a
                        className="hover:text-atlas-blue"
                        href={`mailto:${office.email}`}
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlas-blue"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{office.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function DemoTextInput({
  field,
  name,
  onChange,
  required,
  type,
  value,
}: {
  field: { label: string; placeholder: string };
  name: keyof DemoFormData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  type: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink" htmlFor={name}>
        {field.label}{" "}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        className={inputClass}
        id={name}
        name={name}
        placeholder={field.placeholder}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
