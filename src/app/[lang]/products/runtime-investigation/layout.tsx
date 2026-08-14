import type { ReactNode } from "react";

import BoundedRuntimeStorageSection from "@/components/website/BoundedRuntimeStorageSection";

export default async function RuntimeInvestigationLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      {children}
      <BoundedRuntimeStorageSection lang={lang} />
    </>
  );
}
