"use client";

import { Suspense } from "react";
import { Analytics } from "./Analytics";

export function Providers({ children }) {
  return (
    <>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      {children}
    </>
  );
}
