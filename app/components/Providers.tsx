"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageToggle />
      {children}
    </LanguageProvider>
  );
}
