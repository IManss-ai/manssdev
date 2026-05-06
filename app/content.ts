export const content = {
  en: {
    hero: { name: "Mansur Zhiger", tagline_indie: "Indie dev", tagline_rest: "Almaty. 17." },
    sections: {
      contact: "contact",
      elsewhere: "elsewhere",
      about: "about",
      background: "background",
      experience: "experience",
      wins: "wins",
      field: "field",
      resume: "resume",
    },
    contact: { telegram: "Telegram" },
    about_lines: [
      "Self-taught. Live in Almaty.",
      "Build things to learn what works.",
      "Run mountains when I'm not at the keyboard.",
    ],
    background_lines: [
      "Started coding seriously about a year ago.",
      "First real project was CodeVault, a snippet manager that got 14 stars.",
      "Since then: five products shipped solo, paid client work for local businesses, hackathon wins.",
      "Stack is Next.js, TypeScript, Supabase, Claude Code.",
      "Currently applying for ML and AI engineering programs.",
    ],
    experience_intro: "Five products shipped solo. None at scale yet. Each taught me something.",
    projects: [
      { name: "ShipReady", desc: "Security scanner for AI-generated apps. Current bet.", detail: "Next.js, TypeScript, Supabase. 80 waitlist signups." },
      { name: "SafeBiz KZ", desc: "Tax compliance SaaS for the 2026 Kazakhstan tax overhaul.", detail: "Next.js, Supabase, Recharts. 120 organic signups." },
      { name: "EcoAlmaty", desc: "AI eco-education app. 2nd at EcoSolutions Hackathon 2026.", detail: "Next.js, Tailwind, Anthropic API. 2nd of 30+ teams." },
      { name: "AzamatAI", desc: "Bilingual Russian and Kazakh AI assistant. Built in under 24 hours.", detail: "Next.js, Vercel. Built in 24 hours." },
      { name: "CodeVault", desc: "Code snippet manager. PHP and Supabase.", detail: "PHP, Supabase. 14 GitHub stars." },
    ],
    wins_lines: [
      "Almaty Marathon. 4:31 at 16.",
      "15 Peaks of Almaty, all three levels in 12 months.",
      "EcoSolutions Hackathon 2026, 2nd place.",
      "\u201c\u0417\u041e\u0416 \u043b\u0435\u0433\u043a\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u201d health book, ~1,200 copies sold.",
      "$3,000+ from 8+ paying clients in four months.",
    ],
    resume: { pdf: "resume.pdf" },
    closer: "11th grade. Shipping anyway.",
  },
  ru: {
    // INTENTIONAL PLACEHOLDER: identical to English for now.
    // The user will manually translate this object later.
    // Do not auto-translate. Just copy the en object verbatim into ru.
    hero: { name: "Mansur Zhiger", tagline_indie: "Indie dev", tagline_rest: "Almaty. 17." },
    sections: {
      contact: "contact",
      elsewhere: "elsewhere",
      about: "about",
      background: "background",
      experience: "experience",
      wins: "wins",
      field: "field",
      resume: "resume",
    },
    contact: { telegram: "Telegram" },
    about_lines: [
      "Self-taught. Live in Almaty.",
      "Build things to learn what works.",
      "Run mountains when I'm not at the keyboard.",
    ],
    background_lines: [
      "Started coding seriously about a year ago.",
      "First real project was CodeVault, a snippet manager that got 14 stars.",
      "Since then: five products shipped solo, paid client work for local businesses, hackathon wins.",
      "Stack is Next.js, TypeScript, Supabase, Claude Code.",
      "Currently applying for ML and AI engineering programs.",
    ],
    experience_intro: "Five products shipped solo. None at scale yet. Each taught me something.",
    projects: [
      { name: "ShipReady", desc: "Security scanner for AI-generated apps. Current bet.", detail: "Next.js, TypeScript, Supabase. 80 waitlist signups." },
      { name: "SafeBiz KZ", desc: "Tax compliance SaaS for the 2026 Kazakhstan tax overhaul.", detail: "Next.js, Supabase, Recharts. 120 organic signups." },
      { name: "EcoAlmaty", desc: "AI eco-education app. 2nd at EcoSolutions Hackathon 2026.", detail: "Next.js, Tailwind, Anthropic API. 2nd of 30+ teams." },
      { name: "AzamatAI", desc: "Bilingual Russian and Kazakh AI assistant. Built in under 24 hours.", detail: "Next.js, Vercel. Built in 24 hours." },
      { name: "CodeVault", desc: "Code snippet manager. PHP and Supabase.", detail: "PHP, Supabase. 14 GitHub stars." },
    ],
    wins_lines: [
      "Almaty Marathon. 4:31 at 16.",
      "15 Peaks of Almaty, all three levels in 12 months.",
      "EcoSolutions Hackathon 2026, 2nd place.",
      "\u201c\u0417\u041e\u0416 \u043b\u0435\u0433\u043a\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u201d health book, ~1,200 copies sold.",
      "$3,000+ from 8+ paying clients in four months.",
    ],
    resume: { pdf: "resume.pdf" },
    closer: "11th grade. Shipping anyway.",
  },
} as const;

export type Lang = "en" | "ru";
