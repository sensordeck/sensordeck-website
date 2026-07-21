"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import Section from "@/components/website/Section";
import type { ContactContent } from "@/content/en/contact";

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/70 " +
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
}: {
  content: ContactContent;
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
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <Header />

      <main>
        <Section id="contact-hero" className="bg-white">
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

        <Section id="contact-options" className="bg-surface">
          <div className="grid gap-4 md:grid-cols-3">
            {content.options.map((option, index) => (
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
                  {content.optionAction}
                </span>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact-form" className="bg-white">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
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
              className="grid gap-5 stagger-item"
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

              <button
                className="button-press button-hover mt-2 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-md border border-atlas-blue bg-atlas-blue px-5 py-2.5 text-sm font-semibold text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
                type="submit"
              >
                {content.submit}
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
