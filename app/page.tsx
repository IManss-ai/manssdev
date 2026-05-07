"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import FadeInSection from "./components/FadeInSection";
import LanguageToggle from "./components/LanguageToggle";
import Counter from "./components/Counter";
import MagneticButton from "./components/MagneticButton";
import CopyEmail from "./components/CopyEmail";
import SocialIcon from "./components/SocialIcon";
import { useLanguage } from "./components/LanguageContext";
import { content } from "./content";

const CARD = "bg-zinc-950/60 ring-1 ring-zinc-900 rounded-2xl p-6 md:p-8 backdrop-blur-sm";

const socials = [
  {
    name: "X",
    handle: "@IMans0_0",
    href: "https://x.com/IMans0_0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M4 4l11.733 16H20L8.267 4H4z" />
        <path d="M4 20l6.768-6.768M15.232 10.232L20 4" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "IManss-ai",
    href: "https://github.com/IManss-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "mansur-zhiger",
    href: "https://www.linkedin.com/in/mansur-zhiger/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@mansss.m",
    href: "https://www.instagram.com/mansss.m",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Strava",
    handle: "Mansur",
    href: "https://strava.app.link/qRC9fovRT2b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066" />
        <path d="M8.379 8.229l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
  {
    name: "Threads",
    handle: "@mansss.m",
    href: "https://www.threads.com/@mansss.m",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
        <path d="M22 12c-.5-2-1.8-3.7-3.5-4.8" />
        <path d="M15 7.5c-1-.3-2-.3-3 0-2 .6-3.5 2.5-3.5 4.5s1 3.5 2.5 4c1.5.5 3 0 4-1" />
      </svg>
    ),
  },
];

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => (
        <SocialIcon key={s.name} name={s.name} handle={s.handle} href={s.href}>
          {s.icon}
        </SocialIcon>
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

function HeroName({ name }: { name: string }) {
  const chars = name.split("");
  return (
    <h1 className="text-5xl md:text-6xl font-mono lowercase mt-4 text-zinc-100">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.05, delay: i * 0.03, ease: "easeOut" }}
          className="inline-block"
          style={char === " " ? { width: "0.3em" } : undefined}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}

function ProjectRow({
  project,
  isLast,
}: {
  project: { index: string; name: string; status: string | null; description: string };
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`flex justify-between items-start py-4 rounded-lg px-2 -mx-2 cursor-default ${
        !isLast ? "border-b border-zinc-900" : ""
      }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? "rgba(24,24,27,0.4)" : "rgba(24,24,27,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <motion.span
          className="font-mono text-sm w-8 flex-shrink-0"
          animate={{ color: hovered ? "#a1a1aa" : "#52525b" }}
          transition={{ duration: 0.25 }}
        >
          {project.index}
        </motion.span>
        <div>
          <div className="relative">
            <motion.span
              className="text-zinc-100 font-medium text-lg inline-block"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {project.name}
            </motion.span>
            {project.status && (
              <span className="text-green-500 text-xs font-mono ml-2">
                ({project.status})
              </span>
            )}
            <motion.div
              className="h-px bg-zinc-100 mt-0.5"
              initial={{ width: 0 }}
              animate={{ width: hovered ? "100%" : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2 text-right">
        <motion.span
          className="text-sm max-w-xs"
          animate={{ color: hovered ? "#e4e4e7" : "#a1a1aa" }}
          transition={{ duration: 0.25 }}
        >
          {project.description}
        </motion.span>
        <motion.span
          className="flex-shrink-0 text-zinc-500"
          initial={{ opacity: 0, x: -4, rotate: -45 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -4,
            rotate: hovered ? 0 : -45,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </div>
    </motion.div>
  );
}

function CardHover({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
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

const scrawlVariants = {
  builder: {
    initial: { opacity: 0, scale: 0.85, rotate: -12 },
    animate: { opacity: 1, scale: 1, rotate: [-8, -10, -8] },
    transition: { duration: 0.5, delay: 0.3, rotate: { duration: 4, ease: "easeInOut", repeat: Infinity } },
  },
  shipper: {
    initial: { opacity: 0, scale: 0.85, rotate: 2 },
    animate: { opacity: 1, scale: 1, rotate: [6, 4, 6] },
    transition: { duration: 0.5, delay: 0.5, rotate: { duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 } },
  },
  runner: {
    initial: { opacity: 0, scale: 0.85, rotate: -8 },
    animate: { opacity: 1, scale: 1, rotate: [-4, -2, -4] },
    transition: { duration: 0.5, delay: 0.7, rotate: { duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 } },
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const galleryItems = ["01", "02", "03", "04", "05", "06"];
  const isEn = lang === "en";

  // Sticky header scroll tracking
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(10,10,10,0)", "rgba(10,10,10,0.8)"]);
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(39,39,42,0)", "rgba(39,39,42,1)"]);
  const headerPy = useTransform(scrollY, [0, 100], [24, 12]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  // Photo card scrawl animations
  const photoRef = useRef<HTMLDivElement>(null);
  const photoInView = useInView(photoRef, { once: true, amount: 0.3 });

  // Hero sequence delays (name reveal ~400ms, then callout, then body)
  const nameLength = t.hero.name.length;
  const nameDuration = nameLength * 0.03 + 0.05;
  const calloutDelay = nameDuration + 0.2;
  const bodyDelay = calloutDelay + 0.1;

  // Loading bar
  const [showLoadBar, setShowLoadBar] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowLoadBar(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading bar */}
      {showLoadBar && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-px">
          <div className="load-bar h-full bg-zinc-100" />
        </div>
      )}

      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 px-4"
        style={{
          backgroundColor: headerBg,
          borderBottomWidth: "1px",
          borderBottomColor: headerBorder,
          backdropFilter: headerBlur,
          paddingTop: headerPy,
          paddingBottom: headerPy,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-400 tracking-wider">[m] manss.dev</span>
          <LanguageToggle />
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Row 1: Hero + Photo + Numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Hero Card */}
          <div className="lg:col-span-5">
            <FadeInSection delay={0}>
              <CardHover className={`${CARD} h-full ring-zinc-900 hover:ring-zinc-800 transition-[ring-color] duration-300`}>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  {t.hero_intro}
                </span>
                <HeroName name={t.hero.name.toLowerCase()} />
                <motion.div
                  className="inline-block bg-zinc-900 px-3 py-1.5 rounded mt-6 text-zinc-200"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: calloutDelay, ease: "easeOut" }}
                >
                  {t.hero_callout}
                </motion.div>
                <motion.p
                  className="mt-4 text-zinc-400 leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: bodyDelay, ease: "easeOut" }}
                >
                  {isEn ? (
                    <BoldText text={t.hero_body} bolds={heroBodyBolds} />
                  ) : (
                    t.hero_body
                  )}
                </motion.p>
                <motion.div
                  className="mt-6 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: bodyDelay + 0.2 }}
                >
                  <SocialIcons />
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 status-pulse" />
                </motion.div>
              </CardHover>
            </FadeInSection>
          </div>

          {/* Photo Card */}
          <div className="lg:col-span-4 lg:min-h-[500px]" ref={photoRef}>
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
                  {/* Animated handwritten annotations */}
                  <motion.span
                    className="absolute top-6 left-6 text-red-400 text-2xl select-none"
                    style={{ fontFamily: "var(--font-caveat)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                    initial={scrawlVariants.builder.initial}
                    animate={photoInView ? scrawlVariants.builder.animate : scrawlVariants.builder.initial}
                    transition={scrawlVariants.builder.transition}
                  >
                    {t.photo_annotations.builder}
                  </motion.span>
                  <motion.span
                    className="absolute top-6 right-6 text-red-400 text-2xl select-none"
                    style={{ fontFamily: "var(--font-caveat)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                    initial={scrawlVariants.shipper.initial}
                    animate={photoInView ? scrawlVariants.shipper.animate : scrawlVariants.shipper.initial}
                    transition={scrawlVariants.shipper.transition}
                  >
                    {t.photo_annotations.shipper}
                  </motion.span>
                  <motion.span
                    className="absolute bottom-6 left-6 text-red-400 text-2xl select-none"
                    style={{ fontFamily: "var(--font-caveat)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                    initial={scrawlVariants.runner.initial}
                    animate={photoInView ? scrawlVariants.runner.animate : scrawlVariants.runner.initial}
                    transition={scrawlVariants.runner.transition}
                  >
                    {t.photo_annotations.runner}
                  </motion.span>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Numbers Card */}
          <div className="lg:col-span-3">
            <FadeInSection delay={200}>
              <CardHover className={`${CARD} h-full ring-zinc-900 hover:ring-zinc-800 transition-[ring-color] duration-300`}>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  {t.numbers_label}
                </div>
                <div className="space-y-6 mt-6">
                  {t.numbers.map((metric, i) => (
                    <Counter
                      key={i}
                      value={metric.value}
                      label={metric.label}
                      delay={i * 150}
                    />
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
              </CardHover>
            </FadeInSection>
          </div>
        </div>

        {/* Row 2: Life Story + Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Life Story Card */}
          <FadeInSection delay={300}>
            <CardHover className={`${CARD} h-full ring-zinc-900 hover:ring-zinc-800 transition-[ring-color] duration-300`}>
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
            </CardHover>
          </FadeInSection>

          {/* Projects Card */}
          <FadeInSection delay={400}>
            <CardHover className={`${CARD} h-full ring-zinc-900 hover:ring-zinc-800 transition-[ring-color] duration-300`}>
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
                  <ProjectRow
                    key={i}
                    project={project}
                    isLast={i === t.projects_v2.length - 1}
                  />
                ))}
              </div>
            </CardHover>
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
            <div className="flex items-center gap-3">
              <CopyEmail />
              <MagneticButton
                href="mailto:manssjones@gmail.com?subject=Hi%20Mansur"
                className="inline-block bg-zinc-100 text-zinc-900 rounded-full px-5 py-2 text-sm font-medium hover:bg-zinc-300 transition-colors"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Mail size={14} />
                  {t.book_a_call}
                </span>
              </MagneticButton>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
