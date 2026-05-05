export default function Home() {
  const linkClass =
    "underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300 hover:text-white transition-colors";

  return (
    <main className="max-w-[640px] mx-auto px-6 py-20 md:py-28">
      {/* Hero */}
      <section>
        <h1 className="text-base font-medium">Mansur Zhiger</h1>
        <p className="text-sm text-[#6b6b6b] mt-1">Indie dev. Almaty. 17.</p>
      </section>

      {/* Contact */}
      <section className="mt-16">
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

      {/* Elsewhere */}
      <section className="mt-16">
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

      {/* About */}
      <section className="mt-16">
        <p className="text-xs text-zinc-500 lowercase mb-3">about</p>
        <p className="text-sm leading-relaxed">
          Self-taught. Live in Almaty.
          <br />
          Build things to learn what works.
          <br />
          Run mountains when I&apos;m not at the keyboard.
        </p>
      </section>

      {/* Background */}
      <section className="mt-16">
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

      {/* Experience */}
      <section className="mt-16">
        <p className="text-xs text-zinc-500 lowercase mb-3">experience</p>
        <p className="text-sm leading-relaxed text-[#6b6b6b] mb-4">
          Five products shipped solo. None at scale yet. Each taught me
          something.
        </p>
        <ul className="text-sm leading-relaxed space-y-2">
          <li>
            <span className="text-[#ededed]">ShipReady</span>
            <span className="text-[#6b6b6b]">
              . Security scanner for AI-generated apps. Current bet.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">SafeBiz KZ</span>
            <span className="text-[#6b6b6b]">
              . Tax compliance SaaS for the 2026 Kazakhstan tax overhaul.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">EcoAlmaty</span>
            <span className="text-[#6b6b6b]">
              . AI eco-education app. 2nd at EcoSolutions Hackathon 2026.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">AzamatAI</span>
            <span className="text-[#6b6b6b]">
              . Bilingual RU/KZ AI assistant. Built in under 24 hours.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">CodeVault</span>
            <span className="text-[#6b6b6b]">
              . Code snippet manager. PHP and Supabase.
            </span>
          </li>
        </ul>
      </section>

      {/* Wins */}
      <section className="mt-16">
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

      {/* Resume */}
      <section className="mt-16">
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

      {/* Closer */}
      <section className="mt-16">
        <p className="text-sm text-[#6b6b6b] italic">
          11th grade. Shipping anyway.
        </p>
      </section>
    </main>
  );
}
