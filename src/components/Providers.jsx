"use client";

import { Suspense } from "react";
import { AuthProvider } from "../auth/AuthContext";
import { Analytics } from "./Analytics";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      {children}
    </AuthProvider>
  );
}
