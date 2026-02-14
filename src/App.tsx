// EstebanFrias.com — Minimal, Visual-Forward (Private Sandbox)
// Goals:
// - Clean personal hub (separate from Solaryn)
// - Visual-forward cards for sections
// - Built to be shareable with friends (optionally password-gated later)
//
// Notes on privacy / “hidden”:
// - If you deploy with Next.js, add <Head><meta name="robots" content="noindex,nofollow" /></Head>
// - Also add an /robots.txt that disallows all crawling.

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

type SectionKey = "cars" | "coaching" | "ai" | "creative" | "culture" | "social";

const BG = "#070A14"; // deep ink
const BLUE = "#008CFF";
const GOLD = "#C4A03C";

function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EF mark">
      <rect width="120" height="120" fill={BG} />
      <circle cx="60" cy="60" r="25" stroke={BLUE} strokeWidth="4" fill="none" />
      <circle cx="60" cy="60" r="6" fill={GOLD} />
    </svg>
  );
}

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#008CFF]/12 via-[#C4A03C]/10 to-transparent blur-3xl opacity-60" />
      <div className="absolute -bottom-40 left-12 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#008CFF]/8 via-transparent to-transparent blur-3xl opacity-60" />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Tile({
  title,
  subtitle,
  accent,
  onClick,
}: {
  title: string;
  subtitle: string;
  accent: "blue" | "gold";
  onClick: () => void;
}) {
  const bar = accent === "blue" ? "bg-[#008CFF]" : "bg-[#C4A03C]";

  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-white/20 hover:bg-white/10"
    >
      <div className={`h-1 w-14 ${bar}`} />
      <div className="mt-4 text-xl font-semibold tracking-tight text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed">{subtitle}</div>
      <div className="mt-5 flex items-center gap-2">
        <span className="text-xs text-white/45">Open</span>
        <span className="text-xs text-white/45 transition group-hover:translate-x-1">→</span>
      </div>

      {/* subtle hover glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition group-hover:opacity-60">
        <div className="h-full w-full bg-gradient-to-r from-[#008CFF]/10 via-[#C4A03C]/8 to-transparent" />
      </div>
    </button>
  );
}

function Panel({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-white/55">Private</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{title}</div>
        </div>
        <button
          onClick={onClose}
          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10"
        >
          Close
        </button>
      </div>
      <div className="mt-6 text-white/75 leading-relaxed">{children}</div>
    </div>
  );
}

function GalleryPlaceholder() {
  // Simple visual grid placeholders; swap with real images later.
  const items = useMemo(() => Array.from({ length: 6 }, (_, i) => i), []);
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((i) => (
        <div
          key={i}
          className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent"
        />
      ))}
    </div>
  );
}

export default function EstebanFriasSite() {
  const [active, setActive] = useState<SectionKey | null>(null);

  const content: Record<SectionKey, { title: string; body: React.ReactNode }> = {
    cars: {
      title: "Cars / Lifestyle",
      body: (
        <>
          <p>
            Private gallery + notes. Upload selects, keep it minimal. Think: "shots worth keeping" + a 1–2 line
            caption (location, lens, mood).
          </p>
          <GalleryPlaceholder />
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>Private gallery</Tag>
            <Tag>Notes</Tag>
            <Tag>No public links</Tag>
          </div>
        </>
      ),
    },
    coaching: {
      title: "Coaching",
      body: (
        <>
          <p>
            Private practice ideas, weekly plans, and player development notes. You can keep these as short cards you
            share with friends.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/55">Template</div>
              <div className="mt-1 font-semibold">Session Card</div>
              <div className="mt-2 text-sm text-white/70">Warm-up • Theme • Game • Coaching points</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/55">Template</div>
              <div className="mt-1 font-semibold">Player Focus</div>
              <div className="mt-2 text-sm text-white/70">Movement • Scanning • Finishing • Decision speed</div>
            </div>
          </div>
        </>
      ),
    },
    ai: {
      title: "AI Experiments",
      body: (
        <>
          <p>
            Private lab notes: prompt experiments, automation ideas, workflow diagrams, governance concepts. Keep it
            short—like a founder log.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/55">Example entry</div>
            <div className="mt-1 font-semibold">Human-in-the-loop QA sampling</div>
            <div className="mt-2 text-sm text-white/70">
              Sample 5% • route anomalies to review • track accuracy + cycle time • publish weekly executive readout.
            </div>
          </div>
        </>
      ),
    },
    creative: {
      title: "Creative",
      body: (
        <>
          <p>Scratchpad for designs, drafts, brand riffs, and “what if” concepts.</p>
          <GalleryPlaceholder />
        </>
      ),
    },
    culture: {
      title: "Culture",
      body: (
        <>
          <p>
            A private space for cultural brand ideas, language, identity, and voice. Not performative—just true notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>Bilingual</Tag>
            <Tag>Identity</Tag>
            <Tag>Strategy</Tag>
          </div>
        </>
      ),
    },
    social: {
      title: "Social / Meme",
      body: (
        <>
          <p>
            Keep this separate and private. A link dump of jokes, captions, and drafts you only share with friends.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/55">Draft format</div>
            <div className="mt-1 font-semibold">Caption bank</div>
            <div className="mt-2 text-sm text-white/70">Short • sharp • post-ready • no overthinking</div>
          </div>
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: BG }}>
      <Glow />

      {/* Minimal top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C4A03C] via-[#008CFF] to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <Mark />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Esteban Frias</div>
              <div className="text-xs text-white/60">Private hub (friends-only)</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Tag>Hidden</Tag>
            <Tag>Noindex</Tag>
            <Tag>Minimal</Tag>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-r from-[#008CFF]/10 via-[#C4A03C]/8 to-transparent blur-3xl opacity-50" />
            <h1 className="relative text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
              Personal projects, experiments, and notes — shared intentionally.
            </h1>
          </motion.div>

          <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/75 leading-relaxed">
            This is a private sandbox for cars, coaching, AI experiments, creative drafts, cultural ideas, and social
            notes. Nothing here is meant for indexing or broad distribution.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Tag>Cars</Tag>
            <Tag>Coaching</Tag>
            <Tag>AI lab</Tag>
            <Tag>Creative</Tag>
            <Tag>Culture</Tag>
            <Tag>Social</Tag>
          </div>
        </section>

        {/* Tiles */}
        <section className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Tile
            title="Cars / Lifestyle"
            subtitle="Private gallery + notes. Minimal, curated, clean."
            accent="gold"
            onClick={() => setActive("cars")}
          />
          <Tile
            title="Coaching"
            subtitle="Session cards, development notes, and shareable drills."
            accent="blue"
            onClick={() => setActive("coaching")}
          />
          <Tile
            title="AI Experiments"
            subtitle="Prompt tests, workflow ideas, automation sketches."
            accent="blue"
            onClick={() => setActive("ai")}
          />
          <Tile
            title="Creative"
            subtitle="Drafts, brand riffs, visual ideas, experiments."
            accent="gold"
            onClick={() => setActive("creative")}
          />
          <Tile
            title="Culture"
            subtitle="Identity, language, voice, strategy notes."
            accent="gold"
            onClick={() => setActive("culture")}
          />
          <Tile
            title="Social / Meme"
            subtitle="Caption bank + drafts—friends only."
            accent="blue"
            onClick={() => setActive("social")}
          />
        </section>

        {/* Active Panel */}
        {active && (
          <Panel title={content[active].title} onClose={() => setActive(null)}>
            {content[active].body}
          </Panel>
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-white/55">© {new Date().getFullYear()} Esteban Frias</div>
          <div className="text-sm text-white/55">Not indexed • Not public • Shared intentionally</div>
        </footer>
      </div>
    </div>
  );
}
