"use client";

import { LanguageProvider } from "./language-provider";
import { Toaster } from "./ui/sonner";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      {children}
      <Toaster richColors />
    </LanguageProvider>
  );
}
