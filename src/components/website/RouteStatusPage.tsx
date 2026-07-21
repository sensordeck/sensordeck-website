"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LoaderCircle, Mail, RotateCcw } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  getCurrentLocale,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

type StatusKind = "error" | "loading" | "not-found";

type StatusCopy = {
  eyebrow: string;
  title: string;
  description: string;
  retry: string;
  home: string;
  contact: string;
  brandAriaLabel: string;
};

const copyByLocale: Record<Locale, Record<StatusKind, StatusCopy>> = {
  zh: {
    error: {
      eyebrow: "系统状态 / 错误",
      title: "出错了",
      description:
        "页面暂时无法正常显示。您可以重试当前操作，或返回首页继续浏览。",
      retry: "重试",
      home: "返回首页",
      contact: "联系我们",
      brandAriaLabel: "返回 SensorDeck 首页",
    },
    loading: {
      eyebrow: "SensorDeck",
      title: "加载中",
      description: "正在准备页面内容，请稍候。",
      retry: "重试",
      home: "返回首页",
      contact: "联系我们",
      brandAriaLabel: "返回 SensorDeck 首页",
    },
    "not-found": {
      eyebrow: "404 / 未找到页面",
      title: "页面不存在",
      description:
        "您访问的页面可能已移动、删除，或链接地址有误。请返回首页或联系我们。",
      retry: "重试",
      home: "返回首页",
      contact: "联系我们",
      brandAriaLabel: "返回 SensorDeck 首页",
    },
  },
  en: {
    error: {
      eyebrow: "System status / Error",
      title: "Something went wrong",
      description:
        "This page could not be displayed. Try the current action again or return home to continue browsing.",
      retry: "Try again",
      home: "Back to home",
      contact: "Contact us",
      brandAriaLabel: "Return to the SensorDeck home page",
    },
    loading: {
      eyebrow: "SensorDeck",
      title: "Loading",
      description: "We are preparing the page. This should only take a moment.",
      retry: "Try again",
      home: "Back to home",
      contact: "Contact us",
      brandAriaLabel: "Return to the SensorDeck home page",
    },
    "not-found": {
      eyebrow: "404 / Page not found",
      title: "This page does not exist",
      description:
        "The page may have moved, been removed, or the address may be incorrect. Return home or contact us for help.",
      retry: "Try again",
      home: "Back to home",
      contact: "Contact us",
      brandAriaLabel: "Return to the SensorDeck home page",
    },
  },
};

const actionClassName =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-center text-sm font-semibold leading-5 whitespace-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue button-press button-hover";

export default function RouteStatusPage({
  kind,
  onRetry,
}: {
  kind: StatusKind;
  onRetry?: () => void;
}) {
  const locale = getCurrentLocale(usePathname());
  const copy = copyByLocale[locale][kind];
  const isLoading = kind === "loading";

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:h-18 sm:px-8 lg:px-10">
          <Link
            aria-label={copy.brandAriaLabel}
            className="inline-flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
            href={localizeHref(locale, "/")}
          >
            <Image
              alt="SensorDeck"
              className="h-10 w-auto sm:h-12"
              height={360}
              priority
              src="/logos/SensorDeck18.png"
              unoptimized
              width={1364}
            />
          </Link>
        </div>
      </header>

      <main
        aria-live={isLoading ? "polite" : undefined}
        className="relative flex flex-1 items-center overflow-hidden border-b border-border bg-white"
        role={isLoading ? "status" : "main"}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-atlas-blue"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              {isLoading ? (
                <LoaderCircle
                  aria-hidden="true"
                  className="size-5 animate-spin text-atlas-blue"
                  strokeWidth={1.8}
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="block h-px w-10 bg-atlas-blue"
                />
              )}
              <p className="font-mono text-[11px] font-semibold uppercase text-atlas-blue">
                {copy.eyebrow}
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {copy.description}
            </p>

            {!isLoading && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {kind === "error" && onRetry ? (
                  <button
                    className={`${actionClassName} border-atlas-blue bg-atlas-blue text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark`}
                    onClick={onRetry}
                    type="button"
                  >
                    <RotateCcw aria-hidden="true" className="size-4" />
                    {copy.retry}
                  </button>
                ) : (
                  <Link
                    className={`${actionClassName} border-atlas-blue bg-atlas-blue text-white hover:border-atlas-blue-dark hover:bg-atlas-blue-dark`}
                    href={localizeHref(locale, "/")}
                  >
                    <ArrowLeft aria-hidden="true" className="size-4" />
                    {copy.home}
                  </Link>
                )}

                {kind === "error" ? (
                  <Link
                    className={`${actionClassName} border-border bg-white text-ink hover:border-atlas-blue hover:bg-surface-blue hover:text-atlas-blue`}
                    href={localizeHref(locale, "/")}
                  >
                    <ArrowLeft aria-hidden="true" className="size-4" />
                    {copy.home}
                  </Link>
                ) : (
                  <Link
                    className={`${actionClassName} border-border bg-white text-ink hover:border-atlas-blue hover:bg-surface-blue hover:text-atlas-blue`}
                    href={localizeHref(locale, "/contact")}
                  >
                    <Mail aria-hidden="true" className="size-4" />
                    {copy.contact}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
