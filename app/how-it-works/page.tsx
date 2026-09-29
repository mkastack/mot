import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how Braxvio transforms raw business intelligence into clarity, focus and action — in five elegant steps.",
};

const STEPS = [
  {
    num: "01",
    tag: "Catch the thought",
    headline: "Every insight starts\nwith one capture.",
    body: "The moment an idea strikes, Braxvio is ready. Open the quick-capture layer with a keyboard shortcut, voice note, or mobile tap. Text, audio, photo — anything. Stored and tagged automatically before you even think about organization.",
    accent: "#C8A97E",
    visual: (
      <div className="ui-card p-6 max-w-xs mx-auto">
        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>Quick capture</p>
        {["Market shift in West Africa logistics", "Partnership with Zenith Bank?", "Revisit pricing for SME tier"].map((t, i) => (
          <div key={i} className="flex items-start gap-2.5 py-2.5 border-b border-white/[0.06] last:border-0">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: ["#C8A97E", "#98C379", "#61AFEF"][i] }} />
            <span className="text-white/65 text-[12px] leading-5" style={{ fontFamily: "var(--font-inter)" }}>{t}</span>
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 bg-white/[0.06] rounded-lg px-3 py-2 flex items-center gap-2">
            <span className="text-white/30 text-[12px]" style={{ fontFamily: "var(--font-inter)" }}>Add a thought…</span>
            <span className="animate-blink text-[#C8A97E]">|</span>
          </div>
          <button className="w-8 h-8 rounded-lg bg-[#C8A97E] flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="#0F0E0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    ),
    bg: "bg-[#F5F0EB]",
  },
  {
    num: "02",
    tag: "Make sense of it",
    headline: "Scattered signals become\nordered intelligence.",
    body: "Braxvio's AI layer automatically clusters related captures, surfaces patterns and suggests priorities. You don't reorganize — Braxvio does it as you think, creating a coherent map of your business intelligence without any manual effort.",
    accent: "#6366f1",
    visual: (
      <div className="ui-card p-6 max-w-xs mx-auto">
        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>Auto-organized</p>
        {[
          { label: "Strategy", items: 12, color: "#C8A97E" },
          { label: "Operations", items: 8, color: "#61AFEF" },
          { label: "Partnerships", items: 5, color: "#98C379" },
          { label: "Learning", items: 3, color: "#E06C75" },
        ].map((g) => (
          <div key={g.label} className="flex items-center gap-3 py-2">
            <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: g.color }} />
            <span className="flex-1 text-white/65 text-[12px]" style={{ fontFamily: "var(--font-inter)" }}>{g.label}</span>
            <span className="text-white/30 text-[11px]" style={{ fontFamily: "var(--font-inter)" }}>{g.items} items</span>
            <div className="w-20 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(g.items / 12) * 100}%`, background: g.color }} />
            </div>
          </div>
        ))}
      </div>
    ),
    bg: "bg-[#EDE7DF]",
  },
  {
    num: "03",
    tag: "Find your focus",
    headline: "Reduce noise.\nProtect your attention.",
    body: "Once your intelligence is organized, Braxvio surfaces what deserves your focus today. One clean view. No distractions. Built-in focus sessions with time tracking ensure your deep work is protected and measured.",
    accent: "#22c55e",
    visual: (
      <div className="ui-card p-6 max-w-xs mx-auto text-center">
        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-inter)" }}>Focus session</p>
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="#C8A97E" strokeWidth="6" strokeLinecap="round" strokeDasharray="276" strokeDashoffset="180" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-inter)" }}>25:00</span>
            <span className="text-white/30 text-[9px]" style={{ fontFamily: "var(--font-inter)" }}>remaining</span>
          </div>
        </div>
        <p className="text-[#C8A97E] text-[12px] font-medium mb-4" style={{ fontFamily: "var(--font-inter)" }}>Strategy Deep Work</p>
        <div className="flex gap-2">
          {["5m", "10m", "Custom"].map((b) => (
            <button key={b} className="flex-1 py-1.5 rounded-lg text-[10px] text-white/40 border border-white/[0.08]" style={{ fontFamily: "var(--font-inter)" }}>{b}</button>
          ))}
        </div>
      </div>
    ),
    bg: "bg-[#F5F0EB]",
  },
  {
    num: "04",
    tag: "Turn it into action",
    headline: "Ideas linked directly\nto plans and tasks.",
    body: "The bridge between thinking and doing is where most organizations fail. Braxvio closes the gap — every captured insight can become a task, milestone or project with one click, keeping your strategy connected to execution.",
    accent: "#C8A97E",
    visual: (
      <div className="ui-card p-5 max-w-xs mx-auto">
        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>Action plan</p>
        {[
          { title: "East Africa expansion research", linked: "Strategy insight #3", pct: 70 },
          { title: "Q3 board deck", linked: "Finance meeting note", pct: 40 },
          { title: "Partnership proposal draft", linked: "Zenith Bank capture", pct: 15 },
        ].map((t, i) => (
          <div key={i} className="py-2.5 border-b border-white/[0.06] last:border-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-white/75 text-[12px]" style={{ fontFamily: "var(--font-inter)" }}>{t.title}</span>
              <span className="text-white/30 text-[10px]">{t.pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden mb-1.5">
              <div className="h-full rounded-full bg-[#C8A97E]" style={{ width: `${t.pct}%` }} />
            </div>
            <p className="text-white/25 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>↗ Linked to: {t.linked}</p>
          </div>
        ))}
      </div>
    ),
    bg: "bg-[#EDE7DF]",
  },
  {
    num: "05",
    tag: "See your progress",
    headline: "Track how your thinking\ntranslates to results.",
    body: "Great leaders are reflective leaders. Braxvio's reflection layer shows you what you focused on, what you completed, and how your priorities evolved — so you can make smarter decisions about where your attention goes next.",
    accent: "#C8A97E",
    visual: (
      <div className="ui-card p-5 max-w-xs mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="text-white/40 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Your progress</p>
          <span className="text-[#22c55e] text-[11px] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>+42% this month</span>
        </div>
        <div className="flex items-end gap-1 h-16 mb-4">
          {[20, 35, 28, 50, 42, 65, 55, 72, 60, 85, 72, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#C8A97E" : "rgba(200,169,126,0.2)" }} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/[0.06]">
          {[
            { label: "Captured", val: "143" },
            { label: "Completed", val: "84" },
            { label: "Streak", val: "14d" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-white text-[16px] font-bold" style={{ fontFamily: "var(--font-inter)" }}>{m.val}</p>
              <p className="text-white/30 text-[9px]" style={{ fontFamily: "var(--font-inter)" }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    bg: "bg-[#F5F0EB]",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-28 pb-20 px-6 bg-[#F5F0EB] text-center">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-6" style={{ fontFamily: "var(--font-inter)" }}>How it works</p>
              <h1 className="text-[52px] sm:text-[72px] font-extrabold leading-[1.05] text-[#0F0E0C] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                From thought<br /><em className="italic">to clarity.</em>
              </h1>
              <p className="text-[16px] text-[#6B6560] leading-7 max-w-md mx-auto mb-12" style={{ fontFamily: "var(--font-inter)" }}>
                Capture an idea. Shape it. Focus on what matters. Move forward.
              </p>
            </AnimateIn>

            {/* Step flow indicator */}
            <AnimateIn delay={200}>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {["Capture", "Organize", "Focus", "Plan", "Progress"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full border border-[#C8A97E]/30 bg-[#C8A97E]/08 flex items-center justify-center">
                        <span className="text-[#C8A97E] text-[10px] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>0{i + 1}</span>
                      </div>
                      <span className="text-[10px] text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>{step}</span>
                    </div>
                    {i < 4 && <div className="w-8 h-px bg-[#C8A97E]/30 mb-4" />}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* STEPS */}
        {STEPS.map((step, i) => (
          <section key={i} className={`py-24 px-6 ${step.bg}`}>
            <div className="container-xl">
              <div className={`grid lg:grid-cols-2 gap-14 lg:gap-24 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <AnimateIn type={i % 2 === 0 ? "left" : "right"}>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6560] mb-3" style={{ fontFamily: "var(--font-inter)" }}>{step.tag}</p>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="text-[80px] font-black leading-none" style={{ fontFamily: "var(--font-playfair), serif", color: `${step.accent}18`, lineHeight: 1 }}>{step.num}</span>
                    <span className="text-[14px] font-semibold text-[#C8A97E]" style={{ fontFamily: "var(--font-inter)" }}>Step {step.num}</span>
                  </div>
                  <h2 className="text-[34px] sm:text-[44px] font-bold leading-[1.1] text-[#0F0E0C] mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-playfair), serif" }}>{step.headline}</h2>
                  <p className="text-[15px] text-[#6B6560] leading-7 max-w-md" style={{ fontFamily: "var(--font-inter)" }}>{step.body}</p>
                </AnimateIn>
                <AnimateIn type={i % 2 === 0 ? "right" : "left"} delay={100}>
                  {step.visual}
                </AnimateIn>
              </div>
            </div>
          </section>
        ))}

        {/* FINAL CTA */}
        <section className="py-32 px-6 bg-[#0F0E0C] text-center overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(200,169,126,0.06) 0%, transparent 70%)" }} />
          <div className="max-w-2xl mx-auto relative z-10">
            <AnimateIn>
              <h2 className="text-[44px] sm:text-[60px] font-bold leading-[1.06] text-[#F5F0EB] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Clear thinking starts<br /><em className="italic text-[#C8A97E]">with one thought.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-10 max-w-sm mx-auto leading-7" style={{ fontFamily: "var(--font-inter)" }}>
                Start capturing, organizing and executing at a higher level today.
              </p>
              <Link href="/pricing" id="hiw-cta" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8A97E] text-[#0F0E0C] rounded-full text-[15px] font-semibold hover:bg-[#D4B98E] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                Get started
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
