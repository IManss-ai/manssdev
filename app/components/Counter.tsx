"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface CounterProps {
  value: string;
  label: string;
  delay?: number;
}

function parseValue(raw: string): {
  prefix: string;
  numeric: number | null;
  suffix: string;
  formatted: boolean;
} {
  // Handle time format like "4:31"
  if (/^\d+:\d+$/.test(raw)) {
    return { prefix: "", numeric: null, suffix: "", formatted: false };
  }

  const match = raw.match(/^([^0-9]*)([0-9][0-9,.\s\u00a0]*)(.*)$/);
  if (!match) {
    return { prefix: "", numeric: null, suffix: "", formatted: false };
  }

  const prefix = match[1];
  const numStr = match[2].replace(/[,\s\u00a0]/g, "");
  const suffix = match[3];
  const numeric = parseFloat(numStr);

  return {
    prefix,
    numeric: isNaN(numeric) ? null : numeric,
    suffix,
    formatted: match[2].includes(",") || match[2].includes("\u00a0") || match[2].includes(" "),
  };
}

function formatNumber(n: number, useComma: boolean): string {
  const rounded = Math.round(n);
  if (!useComma) return rounded.toString();
  return rounded.toLocaleString("en-US");
}

export default function Counter({ value, label, delay = 0 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value);
  const [done, setDone] = useState(false);
  const hasAnimated = useRef(false);

  const parsed = useRef(parseValue(value));

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const { prefix, numeric, suffix, formatted } = parsed.current;

    if (numeric === null) {
      // Not a number (e.g. "4:31"), just fade in
      const timer = setTimeout(() => setDone(true), delay + 100);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      const controls = animate(0, numeric, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(v) {
          setDisplay(prefix + formatNumber(v, formatted) + suffix);
        },
        onComplete() {
          setDisplay(value);
          setDone(true);
        },
      });

      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div ref={ref}>
      <div className="relative overflow-hidden">
        <div className="text-3xl md:text-4xl font-medium text-zinc-100">
          {display}
        </div>
        {done && (
          <div
            className="counter-shimmer absolute inset-0 pointer-events-none"
            aria-hidden
          />
        )}
      </div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
        {label}
      </div>
    </div>
  );
}
