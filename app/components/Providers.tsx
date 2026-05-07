"use client";

import { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { LanguageProvider } from "./LanguageContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </MotionConfig>
  );
}
