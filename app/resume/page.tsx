import Link from "next/link";

export const metadata = {
  title: "Resume -- Mansur Zhiger",
  description: "Indie dev in Almaty. 17.",
};

export default function Resume() {
  const linkClass =
    "underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300 hover:text-white transition-colors";

  const Separator = () => <div className="h-px bg-zinc-800/60 my-8" />;

  return (
    <main className="max-w-[640px] mx-auto px-6 py-20 md:py-28">
      {/* Back link */}
      <div className="mb-8">
        <Link href="/" className={linkClass + " text-sm text-[#6b6b6b]"}>
          back
        </Link>
      </div>

      <h1 className="text-lg font-medium text-zinc-100 mb-1">Mansur Zhiger</h1>
      <p className="text-sm text-zinc-500">Almaty, Kazakhstan</p>

      <Separator />

      {/* Education */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">education</p>
        <p className="text-sm leading-relaxed">
          Gymnasium 140, Almaty. 11th grade. Graduating 2026.
        </p>
      </section>

      <Separator />

      {/* Experience */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">experience</p>
        <p className="text-sm leading-relaxed">
          Indie developer, 2024-present. Almaty.
          <br />
          Built and shipped five products solo. Paid client work for 8+ local
          businesses delivering AI Telegram bots and landing pages. $3,000+
          earned in four months.
        </p>
      </section>

      <Separator />

      {/* Projects */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">projects</p>
        <ul className="text-sm leading-relaxed space-y-4">
          <li>
            <span className="text-[#ededed]">ShipReady</span>
            <span className="text-[#6b6b6b]">
              . Security and production-readiness scanner for AI-generated apps.
              Next.js, TypeScript, Supabase. 80 organic waitlist signups.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">SafeBiz KZ</span>
            <span className="text-[#6b6b6b]">
              . AI tax compliance SaaS targeting the 2026 Kazakhstan Tax Code
              overhaul. Next.js, Supabase, Recharts. 120 organic registrations.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">EcoAlmaty</span>
            <span className="text-[#6b6b6b]">
              . AI eco-education web app. 2nd place, EcoSolutions Hackathon
              2026. Built solo in 8 hours. Next.js, TypeScript, Tailwind,
              Supabase, WAQI API, Anthropic Claude API.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">AzamatAI</span>
            <span className="text-[#6b6b6b]">
              . Bilingual Russian/Kazakh AI superapp. Built under a 24-hour
              competition deadline.
            </span>
          </li>
          <li>
            <span className="text-[#ededed]">CodeVault</span>
            <span className="text-[#6b6b6b]">
              . Code snippet manager. PHP, Supabase. 14 GitHub stars.
            </span>
          </li>
        </ul>
      </section>

      <Separator />

      {/* Stack */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">stack</p>
        <p className="text-sm leading-relaxed text-[#6b6b6b]">
          Next.js, TypeScript, Tailwind, Supabase, Railway, Vercel. Claude Code
          daily workflow with custom CLAUDE.md and SKILL.md files. WSL2
          environment.
        </p>
      </section>

      <Separator />

      {/* Athletic */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">athletic</p>
        <ul className="text-sm leading-relaxed space-y-2">
          <li>Almaty Marathon, 42.2km, 4:31, age 16.</li>
          <li>Half-marathon, 21km, sub-2:00, age 17.</li>
          <li>
            15 Peaks of Almaty challenge, all three levels in 12 months.
          </li>
          <li>Highest altitude: 4400m.</li>
        </ul>
      </section>

      <Separator />

      {/* Writing */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">writing</p>
        <p className="text-sm leading-relaxed text-[#6b6b6b]">
          &ldquo;ЗОЖ легко и просто,&rdquo; 60+ page health book.
          Self-published. ~1,200 copies sold via Instagram.
        </p>
      </section>

      <Separator />

      {/* Languages */}
      <section>
        <p className="text-xs text-zinc-500 lowercase mb-3">languages</p>
        <p className="text-sm leading-relaxed text-[#6b6b6b]">
          Russian (native). Kazakh (fluent). English (working).
        </p>
      </section>

      <Separator />

      {/* Contact */}
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
            Telegram (@Manskop)
          </a>
          <br />
          <a
            href="https://github.com/IManss-ai"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub: github.com/IManss-ai
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/mansur-zhiger/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn: linkedin.com/in/mansur-zhiger
          </a>
        </p>
      </section>
    </main>
  );
}
