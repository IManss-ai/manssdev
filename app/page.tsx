"use client";

import Image from "next/image";
import FadeInSection from "./components/FadeInSection";
import { useLanguage } from "./components/LanguageContext";
import { content } from "./content";

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const linkClass =
    "underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300 hover:text-white transition-colors";

  const Separator = () => <div className="h-px bg-zinc-800/60 my-8" />;

  const galleryItems = ["01", "02", "03", "04", "05", "06"];

  return (
    <main className="max-w-[640px] mx-auto px-6 py-20 md:py-28">
      {/* Hero -- no FadeIn, shows immediately */}
      <section>
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt="Mansur Zhiger"
            width={72}
            height={72}
            className="rounded-full object-cover ring-1 ring-zinc-800 flex-shrink-0"
            priority
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-medium text-zinc-100">{t.hero.name}</h1>
            <p className="text-sm text-zinc-500 mt-1">
              {t.hero.tagline_indie}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mx-1.5 align-middle status-pulse" />
              {t.hero.tagline_rest}
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <FadeInSection delay={0}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.contact}</p>
          <p className="text-sm leading-relaxed">
            <a href="mailto:manssjones@gmail.com" className={linkClass}>
              manssjones@gmail.com
            </a>
            {" \u00b7 "}
            <a
              href="https://t.me/Manskop"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {t.contact.telegram}
            </a>
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Elsewhere */}
      <FadeInSection delay={80}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.elsewhere}</p>
          <p className="text-sm leading-relaxed">
            <a
              href="https://github.com/IManss-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
            {" \u00b7 "}
            <a
              href="https://x.com/IMans0_0"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              X
            </a>
            {" \u00b7 "}
            <a
              href="https://www.linkedin.com/in/mansur-zhiger/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            {" \u00b7 "}
            <a
              href="https://strava.app.link/qRC9fovRT2b"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Strava
            </a>
            {" \u00b7 "}
            <a
              href="https://www.threads.com/@mansss.m"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Threads
            </a>
            {" \u00b7 "}
            <a
              href="https://www.instagram.com/mansss.m"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Instagram
            </a>
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* About */}
      <FadeInSection delay={160}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.about}</p>
          <p className="text-sm leading-relaxed">
            {t.about_lines.map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Background */}
      <FadeInSection delay={240}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.background}</p>
          <p className="text-sm leading-relaxed">
            {t.background_lines.map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Experience */}
      <FadeInSection delay={320}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.experience}</p>
          <p className="text-sm leading-relaxed text-[#6b6b6b] mb-4">
            {t.experience_intro}
          </p>
          <ul className="text-sm leading-relaxed space-y-2">
            {t.projects.map((project) => (
              <li
                key={project.name}
                className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50"
              >
                <div>
                  <span className="text-[#ededed]">{project.name}</span>
                  <span className="text-[#6b6b6b]">. {project.desc}</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                  {project.detail}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </FadeInSection>

      <Separator />

      {/* Wins */}
      <FadeInSection delay={400}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.wins}</p>
          <ul className="text-sm leading-relaxed space-y-2">
            {t.wins_lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>
      </FadeInSection>

      <Separator />

      {/* Field */}
      <section>
        <FadeInSection delay={0}>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.field}</p>
        </FadeInSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((n, i) => (
            <FadeInSection key={n} delay={i * 100}>
              <div className="gallery-item relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-zinc-800/80 transition-all duration-500 hover:ring-zinc-600 hover:scale-[1.02]">
                <Image
                  src={`/gallery/${n}.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <Separator />

      {/* Resume */}
      <FadeInSection delay={0}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">{t.sections.resume}</p>
          <p className="text-sm leading-relaxed">
            <a href="/resume.pdf" className={linkClass}>
              {t.resume.pdf}
            </a>
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Closer -- no FadeIn, no separator after */}
      <section>
        <p className="text-sm text-[#6b6b6b] italic">
          {t.closer}<span className="cursor-blink">&#9610;</span>
        </p>
      </section>
    </main>
  );
}
