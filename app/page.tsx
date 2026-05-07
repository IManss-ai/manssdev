"use client";

import Image from "next/image";
import FadeInSection from "./components/FadeInSection";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./components/LanguageContext";
import { content } from "./content";

const CARD = "bg-zinc-950/60 ring-1 ring-zinc-900 rounded-2xl p-6 md:p-8 backdrop-blur-sm";

const socials = [
  {
    name: "X",
    href: "https://x.com/IMans0_0",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/IManss-ai",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mansur-zhiger/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mansss.m",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Strava",
    href: "https://strava.app.link/qRC9fovRT2b",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@mansss.m",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.476C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.107-1.138 3.455-1.165 1.016-.02 1.95.118 2.791.408-.09-.502-.236-.948-.435-1.333-.485-.936-1.32-1.43-2.482-1.465l-.025-.001c-.876 0-1.69.282-2.263.788l-1.39-1.52c.88-.773 2.073-1.199 3.36-1.199l.04.001c1.768.05 3.15.784 3.99 2.12.699 1.112 1.058 2.592 1.066 4.402l.002.085c.033.36.019.724-.04 1.088.545.387 1.025.852 1.422 1.39.885 1.2 1.246 2.742 1.018 4.34-.32 2.24-1.48 4.076-3.35 5.31C17.744 23.273 15.25 24 12.186 24zm-.09-8.837c-.906.02-1.63.233-2.09.617-.417.348-.614.802-.585 1.35.03.556.295 1.011.794 1.356.548.38 1.273.574 2.1.535 1.097-.06 1.932-.472 2.482-1.225.376-.516.628-1.17.757-1.96-.94-.358-2.006-.558-3.124-.558l-.334.003v-.118z" />
      </svg>
    ),
  },
];

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-100 transition-colors"
          aria-label={s.name}
        >
          {s.svg}
        </a>
      ))}
    </div>
  );
}

function BoldText({ text, bolds }: { text: string; bolds: string[] }) {
  if (!bolds.length) return <>{text}</>;
  const regex = new RegExp(`(${bolds.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        bolds.includes(part) ? (
          <strong key={i} className="text-zinc-100 font-medium">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const heroBodyBolds = [
  "five products solo",
  "SafeBiz KZ",
  "2nd at EcoSolutions Hackathon 2026",
  "$3,000",
  "ShipReady",
  "ML and AI Engineering programs",
];

const lifeStoryBolds = [
  "17",
  "Almaty",
  "self-taught",
  "CodeVault",
  "five products solo",
  "120 registrations",
  "2nd at EcoSolutions Hackathon 2026",
  "3rd at Spring Games 2026",
  "$3,000 in four months",
  "ShipReady",
  "80 waitlist signups",
  "ML and AI Engineering programs",
];

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const galleryItems = ["01", "02", "03", "04", "05", "06"];
  const isEn = lang === "en";

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <span className="font-mono text-sm text-zinc-400 tracking-wider">[m] manss.dev</span>
        <LanguageToggle />
      </header>

      {/* Row 1: Hero + Photo + Numbers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Hero Card */}
        <div className="lg:col-span-5">
        <FadeInSection delay={0}>
          <div className={`${CARD} h-full`}>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {t.hero_intro}
            </span>
            <h1 className="text-5xl md:text-6xl font-mono lowercase mt-4 text-zinc-100">
              {t.hero.name.toLowerCase()}
            </h1>
            <div className="inline-block bg-zinc-900 px-3 py-1.5 rounded mt-6 text-zinc-200">
              {t.hero_callout}
            </div>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              {isEn ? (
                <BoldText text={t.hero_body} bolds={heroBodyBolds} />
              ) : (
                t.hero_body
              )}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcons />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 status-pulse" />
            </div>
          </div>
        </FadeInSection>
        </div>

        {/* Photo Card */}
        <div className="lg:col-span-4 lg:min-h-[500px]">
        <FadeInSection delay={100}>
          <div className={`${CARD} !p-0 overflow-hidden h-full`}>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/gallery/01.jpg"
                alt="Mansur Zhiger"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Handwritten annotations */}
              <span
                className="absolute top-6 left-6 text-red-400 text-2xl select-none"
                style={{ fontFamily: "var(--font-caveat)", transform: "rotate(-8deg)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                {t.photo_annotations.builder}
              </span>
              <span
                className="absolute top-6 right-6 text-red-400 text-2xl select-none"
                style={{ fontFamily: "var(--font-caveat)", transform: "rotate(6deg)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                {t.photo_annotations.shipper}
              </span>
              <span
                className="absolute bottom-6 left-6 text-red-400 text-2xl select-none"
                style={{ fontFamily: "var(--font-caveat)", transform: "rotate(-4deg)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                {t.photo_annotations.runner}
              </span>
            </div>
          </div>
        </FadeInSection>
        </div>

        {/* Numbers Card */}
        <div className="lg:col-span-3">
        <FadeInSection delay={200}>
          <div className={`${CARD} h-full`}>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {t.numbers_label}
            </div>
            <div className="space-y-6 mt-6">
              {t.numbers.map((metric, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-medium text-zinc-100">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px bg-zinc-800 my-6" />
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {t.recognized_label}
            </div>
            <div className="mt-3 space-y-1">
              {t.recognized_by.map((item, i) => (
                <div key={i} className="font-mono text-xs text-zinc-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
        </div>
      </div>

      {/* Row 2: Life Story + Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Life Story Card */}
        <FadeInSection delay={300}>
          <div className={`${CARD} h-full`}>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {t.life_story_label}
            </div>
            <div className="mt-6 text-zinc-300 leading-relaxed space-y-4">
              {t.life_story_paragraphs.map((p, i) => (
                <p key={i}>
                  {isEn ? <BoldText text={p} bolds={lifeStoryBolds} /> : p}
                </p>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Projects Card */}
        <FadeInSection delay={400}>
          <div className={`${CARD} h-full`}>
            <div className="flex justify-between items-center">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {t.projects_label}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {t.projects_date}
              </div>
            </div>
            <div className="mt-6">
              {t.projects_v2.map((project, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-start py-4 ${
                    i < t.projects_v2.length - 1 ? "border-b border-zinc-900" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-zinc-600 text-sm w-8 flex-shrink-0">
                      {project.index}
                    </span>
                    <div>
                      <span className="text-zinc-100 font-medium text-lg">
                        {project.name}
                      </span>
                      {project.status && (
                        <span className="text-green-500 text-xs font-mono ml-2">
                          ({project.status})
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-right">
                    <span className="text-sm text-zinc-400 max-w-xs">
                      {project.description}
                    </span>
                    {project.index === "01" && (
                      <span className="text-zinc-500 flex-shrink-0">{"\u2197"}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Row 3: Gallery */}
      <div className="mt-4">
        <FadeInSection delay={0}>
          <div className={CARD}>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              {t.field_label}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
              {galleryItems.map((n, i) => (
                <FadeInSection key={n} delay={i * 100}>
                  <div className="gallery-item relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-zinc-800/80 transition-all duration-500 hover:ring-zinc-600 hover:scale-[1.02]">
                    <Image
                      src={`/gallery/${n}.jpg`}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 16vw"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-3xl md:text-4xl tracking-wider text-zinc-200">
          {t.footer_tagline}<span className="cursor-blink">&#9610;</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <SocialIcons />
          <a
            href="mailto:manssjones@gmail.com?subject=Hi%20Mansur"
            className="bg-zinc-100 text-zinc-900 rounded-full px-5 py-2 text-sm font-medium hover:bg-zinc-300 transition"
          >
            {t.book_a_call}
          </a>
        </div>
      </footer>
    </main>
  );
}
