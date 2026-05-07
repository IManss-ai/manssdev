"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import type { Lang } from "../content";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const activeClass = "text-zinc-100 cursor-pointer transition-colors duration-200";
  const inactiveClass = "text-zinc-600 cursor-pointer transition-colors duration-200 hover:text-zinc-400";

  function handle(l: Lang) {
    setLang(l);
  }

  return (
    <div
      className={`text-xs font-mono transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span
        className={lang === "en" ? activeClass : inactiveClass}
        onClick={() => handle("en")}
      >
        EN
      </span>
      <span className="text-zinc-700 mx-1">/</span>
      <span
        className={lang === "ru" ? activeClass : inactiveClass}
        onClick={() => handle("ru")}
      >
        RU
      </span>
    </div>
  );
}
