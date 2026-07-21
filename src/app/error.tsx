"use client";

import { useEffect } from "react";

import RouteStatusPage from "@/components/website/RouteStatusPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <RouteStatusPage kind="error" onRetry={reset} />;
}
