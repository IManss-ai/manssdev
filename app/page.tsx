import Image from "next/image";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  const linkClass =
    "underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300 hover:text-white transition-colors";

  const Separator = () => <div className="h-px bg-zinc-800/60 my-8" />;

  const galleryItems = ["01", "02", "03", "04", "05", "06"];

  return (
    <main className="max-w-[640px] mx-auto px-6 py-20 md:py-28">
      {/* Hero — no FadeIn, shows immediately */}
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
            <h1 className="text-lg font-medium text-zinc-100">Mansur Zhiger</h1>
            <p className="text-sm text-zinc-500 mt-1">
              Indie dev
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mx-1.5 align-middle status-pulse" />
              Almaty. 17.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <FadeInSection delay={0}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">contact</p>
          <p className="text-sm leading-relaxed">
            <a href="mailto:manssjones@gmail.com" className={linkClass}>
              manssjones@gmail.com
            </a>
            {" · "}
            <a
              href="https://t.me/Manskop"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Telegram
            </a>
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Elsewhere */}
      <FadeInSection delay={80}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">elsewhere</p>
          <p className="text-sm leading-relaxed">
            <a
              href="https://github.com/IManss-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
            {" · "}
            <a
              href="https://x.com/IMans0_0"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              X
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/mansur-zhiger/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href="https://strava.app.link/qRC9fovRT2b"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Strava
            </a>
            {" · "}
            <a
              href="https://www.threads.com/@mansss.m"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Threads
            </a>
            {" · "}
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
          <p className="text-xs text-zinc-500 lowercase mb-3">about</p>
          <p className="text-sm leading-relaxed">
            Self-taught. Live in Almaty.
            <br />
            Build things to learn what works.
            <br />
            Run mountains when I&apos;m not at the keyboard.
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Background */}
      <FadeInSection delay={240}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">background</p>
          <p className="text-sm leading-relaxed">
            Started coding seriously about a year ago.
            <br />
            First real project was CodeVault, a snippet manager that got 14 stars.
            <br />
            Since then: five products shipped solo, paid client work for local
            businesses, hackathon wins.
            <br />
            Stack is Next.js, TypeScript, Supabase, Claude Code.
            <br />
            11th grade. Applying to nFactorial Incubator 2026.
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Experience */}
      <FadeInSection delay={320}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">experience</p>
          <p className="text-sm leading-relaxed text-[#6b6b6b] mb-4">
            Five products shipped solo. None at scale yet. Each taught me
            something.
          </p>
          <ul className="text-sm leading-relaxed space-y-2">
            <li className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50">
              <div>
                <span className="text-[#ededed]">ShipReady</span>
                <span className="text-[#6b6b6b]">
                  . Security scanner for AI-generated apps. Current bet.
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                Next.js, TypeScript, Supabase. 80 waitlist signups.
              </div>
            </li>
            <li className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50">
              <div>
                <span className="text-[#ededed]">SafeBiz KZ</span>
                <span className="text-[#6b6b6b]">
                  . Tax compliance SaaS for the 2026 Kazakhstan tax overhaul.
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                Next.js, Supabase, Recharts. 120 organic signups.
              </div>
            </li>
            <li className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50">
              <div>
                <span className="text-[#ededed]">EcoAlmaty</span>
                <span className="text-[#6b6b6b]">
                  . AI eco-education app. 2nd at EcoSolutions Hackathon 2026.
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                Next.js, Tailwind, Anthropic API. 2nd of 30+ teams.
              </div>
            </li>
            <li className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50">
              <div>
                <span className="text-[#ededed]">AzamatAI</span>
                <span className="text-[#6b6b6b]">
                  . Bilingual RU/KZ AI assistant. Built in under 24 hours.
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                Next.js, Vercel. Built in 24 hours.
              </div>
            </li>
            <li className="group py-1 -mx-2 px-2 rounded-sm transition-colors hover:bg-zinc-900/50">
              <div>
                <span className="text-[#ededed]">CodeVault</span>
                <span className="text-[#6b6b6b]">
                  . Code snippet manager. PHP and Supabase.
                </span>
              </div>
              <div className="text-xs text-zinc-500 mt-1 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-300">
                PHP, Supabase. 14 GitHub stars.
              </div>
            </li>
          </ul>
        </section>
      </FadeInSection>

      <Separator />

      {/* Wins */}
      <FadeInSection delay={400}>
        <section>
          <p className="text-xs text-zinc-500 lowercase mb-3">wins</p>
          <ul className="text-sm leading-relaxed space-y-2">
            <li>Almaty Marathon, 4:31, age 16.</li>
            <li>15 Peaks of Almaty, all three levels in 12 months.</li>
            <li>EcoSolutions Hackathon 2026, 2nd place.</li>
            <li>
              &ldquo;ЗОЖ легко и просто&rdquo; health book, ~1,200 copies sold.
            </li>
            <li>$3,000+ from 8+ paying clients in four months.</li>
          </ul>
        </section>
      </FadeInSection>

      <Separator />

      {/* Field */}
      <section>
        <FadeInSection delay={0}>
          <p className="text-xs text-zinc-500 lowercase mb-3">field</p>
        </FadeInSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((n, i) => (
            <FadeInSection key={n} delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-zinc-800/80 transition-all duration-500 hover:ring-zinc-600 hover:scale-[1.02]">
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
          <p className="text-xs text-zinc-500 lowercase mb-3">resume</p>
          <p className="text-sm leading-relaxed">
            <a href="/resume" className={linkClass}>
              View live
            </a>
            {" · "}
            <a href="/resume.pdf" className={linkClass}>
              Download PDF
            </a>
          </p>
        </section>
      </FadeInSection>

      <Separator />

      {/* Closer — no FadeIn, no separator after */}
      <section>
        <p className="text-sm text-[#6b6b6b] italic">
          11th grade. Shipping anyway.<span className="cursor-blink">&#9610;</span>
        </p>
      </section>
    </main>
  );
}
