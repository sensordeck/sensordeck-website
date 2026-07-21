"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";

import Section from "@/components/website/Section";
import type { ContactContent } from "@/lib/content-types";

const inputClass =
  "mt-2 min-h-12 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-base text-ink outline-none placeholder:text-muted sm:text-sm " +
  "transition-[border-color,box-shadow,background-color] duration-[250ms,100ms,250ms] ease-in-out " +
  "hover:border-border/80 focus-visible:border-atlas-blue focus-visible:ring-[3px] focus-visible:ring-atlas-blue/20";

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

export default function ContactFormClient({
  content,
  locale,
}: {
  content: ContactContent;
  locale: string;
}) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const { fields } = content;

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
      [fields.name.label, formData.name],
      [fields.email.label, formData.email],
      [fields.company.label, formData.company],
      [fields.role.label, formData.role],
      [fields.organizationType.label, formData["organization-type"]],
      [fields.fleetScale.label, formData["fleet-scale"]],
      [fields.primaryInterest.label, formData["primary-interest"]],
      [fields.message.label, formData.message],
    ]
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
    <div className="bg-white">

        <Section id="contact-hero" className="bg-white">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl heading-title">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:mt-7 sm:text-xl sm:leading-9 md:text-2xl heading-description">
              {content.hero.description}
            </p>
          </div>
        </Section>

        <Section id="contact-form" className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="max-w-md">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-atlas-blue heading-eyebrow">
                {content.formIntro.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl heading-title">
                {content.formIntro.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted heading-description">
                {content.formIntro.description}
              </p>
              <p
                className="mt-8 border-l-2 border-sensor-tan pl-4 text-sm leading-7 text-muted stagger-item"
                style={{ animationDelay: "240ms" }}
              >
                {content.formIntro.note}
              </p>
            </div>

            <form
              className="grid min-w-0 gap-5 stagger-item"
              style={{ animationDelay: "320ms" }}
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <TextInput
                  field={fields.name}
                  name="name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextInput
                  field={fields.email}
                  name="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <TextInput
                  field={fields.company}
                  name="company"
                  required
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
                <TextInput
                  field={fields.role}
                  name="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectInput
                  field={fields.organizationType}
                  name="organization-type"
                  value={formData["organization-type"]}
                  onChange={handleChange}
                />
                <TextInput
                  field={fields.fleetScale}
                  name="fleet-scale"
                  type="text"
                  value={formData["fleet-scale"]}
                  onChange={handleChange}
                />
              </div>

              <SelectInput
                field={fields.primaryInterest}
                name="primary-interest"
                value={formData["primary-interest"]}
                onChange={handleChange}
              />

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="message">
                  {fields.message.label}
                </label>
                <textarea
                  className={`${inputClass} min-h-36 resize-y leading-7`}
                  id="message"
                  name="message"
                  placeholder={fields.message.placeholder}
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4 space-y-2 text-xs text-muted">
                <p>
                  {content.privacyNotice}{" "}
                  <Link
                    href={`/${locale}/privacy`}
                    className="underline hover:text-atlas-blue"
                  >
                    {content.privacyPolicyLink}
                  </Link>{" "}
                  {content.privacyNoticeSuffix}
                </p>
                <p>{content.dataProtectionNote}</p>
              </div>

              <button
                className="button-press button-hover mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue sm:w-fit"
                type="submit"
              >
                {content.submit}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Section>

        <Section id="demo-info" className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {content.salesTitle}
            </h2>
            <div className="mt-7 border-t border-border pt-7 text-sm leading-7 text-muted sm:mt-8 sm:pt-8">
              <p>{content.salesNote}</p>
            </div>
          </div>
        </Section>

        <Section id="global-locations" className="bg-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {content.locations.title}
            </h2>
            <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
              {content.locations.offices.map((office) => (
                <div
                  key={office.city}
                  className="min-w-0 rounded-lg border border-border bg-white p-5 sm:p-8"
                >
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-muted">
                    {office.city}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-ink sm:text-2xl">
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
                        className="-my-2 inline-flex min-h-11 min-w-0 items-center break-all hover:text-atlas-blue"
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

    </div>
  );
}

function TextInput({
  field,
  name,
  onChange,
  required = false,
  type,
  value,
}: {
  field: { label: string; placeholder: string };
  name: keyof ContactFormData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink" htmlFor={name}>
        {field.label}
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

function SelectInput({
  field,
  name,
  onChange,
  value,
}: {
  field: { label: string; placeholder: string; options: readonly string[] };
  name: keyof ContactFormData;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink" htmlFor={name}>
        {field.label}
      </label>
      <select
        className={inputClass}
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {field.placeholder}
        </option>
        {field.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
