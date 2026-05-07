"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SocialIconProps {
  name: string;
  handle: string;
  href: string;
  children: ReactNode;
}

export default function SocialIcon({ name, handle, href, children }: SocialIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-zinc-500 hover:text-zinc-100 transition-colors"
        aria-label={name}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] font-mono text-zinc-300 whitespace-nowrap pointer-events-none z-50"
          >
            {name} · {handle}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
