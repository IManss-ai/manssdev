"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Copy, Check } from "lucide-react";

const EMAIL = "manssjones@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }, []);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-mono cursor-pointer"
      aria-label="Copy email address"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-green-400"
          >
            Copied
            <Check size={14} />
          </motion.span>
        ) : (
          <motion.span
            key="email"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            {EMAIL}
            <Copy size={14} className="text-zinc-600" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
