import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import Link from "next/link";
import { Zap, Brain, Target, Folder, Search, Users, RefreshCw, Radio, Sparkles, Check, FileText, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full suite of Braxvio features — capture intelligence, sharpen focus, plan with precision and reflect on progress.",
};

/* ── tiny product UI components ─────────────────────────── */
function CaptureCard() {
  return (
    <div className="ui-card p-5 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/70 text-[11px] uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>Quick Capture</span>
        <span className="text-[#C8A97E] text-[10px]">⌘ K</span>
      </div>
      <div className="bg-white/[0.06] rounded-lg p-3 mb-3 flex items-center gap-2">
        <span className="text-white/30 text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>Add a thought, idea or task…</span>
        <span className="animate-blink text-[#C8A97E]">|</span>
      </div>
      {["Market expansion opportunity in East Africa", "Q3 budget review with ops team", "New API vendor contract renewal"].map((t, i) => (
        <div key={i} className="flex items-start gap-2.5 py-2.5 border-b border-white/[0.05] last:border-0">
          <div className="w-4 h-4 mt-0.5 rounded border border-white/20 shrink-0" />
          <span className="text-white/60 text-[12px] leading-5" style={{ fontFamily: "var(--font-inter)" }}>{t}</span>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        {["#Strategy", "#Finance", "#Ops"].map((tag, i) => (
          <span key={i} className="text-[10px] px-2 py-1 rounded-full" style={{ background: "rgba(200,169,126,0.15)", color: "#C8A97E", fontFamily: "var(--font-inter)" }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function FocusCard() {
  return (
    <div className="ui-card p-6 w-full max-w-sm mx-auto">
      <div className="text-center mb-5">
        <p className="text-white/40 text-[11px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-inter)" }}>Focus Session</p>
        <p className="text-[48px] font-bold text-white" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-2px" }}>25:00</p>
        <p className="text-[#C8A97E] text-[12px] mt-1" style={{ fontFamily: "var(--font-inter)" }}>Q3 Strategy Deep Work</p>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
          <div className="h-full rounded-full bg-[#C8A97E]" style={{ width: "0%" }} />
        </div>
      </div>
      <div className="flex gap-3">
        {["5m break", "10m break", "Custom"].map((b, i) => (
          <button key={i} className="flex-1 py-2 rounded-lg text-[11px] text-white/50 border border-white/[0.08] hover:border-[#C8A97E]/40 transition-colors" style={{ fontFamily: "var(--font-inter)" }}>{b}</button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button className="w-12 h-12 rounded-full bg-[#C8A97E] flex items-center justify-center text-[#0F0E0C]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
    </div>
  );
}

function PlanCard() {
  const tasks = [
    { label: "Define OKRs for H2", done: true, tag: "Strategy" },
    { label: "Stakeholder alignment call", done: true, tag: "Teams" },
    { label: "Draft market entry brief", done: false, tag: "Research" },
    { label: "Board deck preparation", done: false, tag: "Exec" },
    { label: "Launch timeline v2", done: false, tag: "Product" },
  ];
  return (
    <div className="ui-card p-5 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white font-semibold text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>My plan</span>
        <span className="text-[#C8A97E] text-[11px]" style={{ fontFamily: "var(--font-inter)" }}>2/5 done</span>
      </div>
      {tasks.map((t, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.05] last:border-0">
          <div className={`w-4 h-4 rounded border shrink-0 flex items-center justify-center ${t.done ? "bg-[#C8A97E] border-[#C8A97E]" : "border-white/20"}`}>
            {t.done && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#0F0E0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <span className={`flex-1 text-[12px] ${t.done ? "line-through text-white/30" : "text-white/70"}`} style={{ fontFamily: "var(--font-inter)" }}>{t.label}</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded text-white/40 border border-white/[0.08]" style={{ fontFamily: "var(--font-inter)" }}>{t.tag}</span>
        </div>
      ))}
    </div>
  );
}

function ReflectCard() {
  return (
    <div className="ui-card p-5 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/70 text-[11px] uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>Your progress</span>
        <span className="text-[#C8A97E] text-[11px]" style={{ fontFamily: "var(--font-inter)" }}>+42%</span>
      </div>
      <div className="flex items-end gap-1.5 h-20 mb-4">
        {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 78, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 9 ? "#C8A97E" : "rgba(200,169,126,0.2)" }} />
        ))}
      </div>
      {[
        { label: "Tasks completed", value: "84", sub: "+12 this week" },
        { label: "Focus hours", value: "23h", sub: "Goal: 20h ✓" },
        { label: "Streak", value: "14d", sub: "Personal best!" },
      ].map((m, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
          <span className="text-white/50 text-[11px]" style={{ fontFamily: "var(--font-inter)" }}>{m.label}</span>
          <div className="text-right">
            <span className="text-white text-[13px] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>{m.value}</span>
            <span className="text-white/30 text-[10px] ml-2" style={{ fontFamily: "var(--font-inter)" }}>{m.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const BENTO = [
  {
    size: "col-span-2",
    icon: <Zap className="w-7 h-7 text-[#0066FF]" />,
    title: "Instant Capture",
    desc: "Every thought, insight or decision recorded in under 2 seconds. Never lose an idea again.",
    accent: true,
  },
  {
    size: "col-span-1",
    icon: <Brain className="w-7 h-7 text-[#00A3FF]" />,
    title: "AI Assistance",
    desc: "Smart summaries, automated tagging, and proactive intelligence surfaced at the right moment.",
  },
  {
    size: "col-span-1",
    icon: <Target className="w-7 h-7 text-[#0066FF]" />,
    title: "Focus Mode",
    desc: "Deep work sessions with distraction-blocking and time tracking built in.",
  },
  {
    size: "col-span-1",
    icon: <Folder className="w-7 h-7 text-[#00A3FF]" />,
    title: "Smart Organization",
    desc: "Auto-categorized by project, team, and priority — always exactly where you expect it.",
  },
  {
    size: "col-span-1 row-span-2",
    icon: <Search className="w-7 h-7 text-[#0066FF]" />,
    title: "Universal Search",
    desc: "Search across every note, task, plan and metric in milliseconds.",
  },
  {
    size: "col-span-1",
    icon: <Users className="w-7 h-7 text-[#00A3FF]" />,
    title: "Collaboration",
    desc: "Share workspaces, delegate tasks and co-create plans with your team in real time.",
  },
  {
    size: "col-span-1",
    icon: <RefreshCw className="w-7 h-7 text-[#0066FF]" />,
    title: "Cross-device Sync",
    desc: "Seamlessly available on every device — desktop, tablet, or mobile.",
  },
  {
    size: "col-span-1",
    icon: <Radio className="w-7 h-7 text-[#00A3FF]" />,
    title: "Integrations",
    desc: "Connects with 40+ tools your team already uses, from Slack to Google Workspace.",
  },
];

const ALTERNATING = [
  {
    eyebrow: "01 — Capture",
    headline: "Capture intelligence\nbefore it disappears.",
    body: "In the pace of modern business, insights evaporate in seconds. Braxvio's instant capture layer lets you log a thought, a decision, a market signal — from any device — in under two seconds. Voice, text, or photo. Always organized automatically.",
    bullets: ["One-tap quick capture", "Voice-to-text input", "Auto-tagging & categorization", "Full-text search instantly"],
    visual: <CaptureCard />,
    flip: false,
    bg: "bg-[#F5F0EB]",
  },
  {
    eyebrow: "02 — Focus",
    headline: "Turn scattered priorities\ninto focused work.",
    body: "The biggest drain on executive performance is context-switching. Braxvio's Focus mode creates a distraction-free environment, surfacing only what matters for your current session — with built-in time tracking and deep work analytics.",
    bullets: ["Timed focus sessions", "Distraction blocking", "Do Not Disturb integration", "Session history & insights"],
    visual: <FocusCard />,
    flip: true,
    bg: "bg-[#EDE7DF]",
  },
  {
    eyebrow: "03 — Plan",
    headline: "Turn insights into\nsomething actionable.",
    body: "Ideas without execution are just thoughts. Braxvio bridges the gap — transforming captured intelligence directly into structured plans, delegated tasks and tracked milestones. Connected from idea to outcome.",
    bullets: ["Linked notes-to-tasks", "Milestone planning", "Team delegation", "Deadline tracking"],
    visual: <PlanCard />,
    flip: false,
    bg: "bg-[#F5F0EB]",
  },
  {
    eyebrow: "04 — Reflect",
    headline: "See how your\nbusiness thinking evolves.",
    body: "The best leaders learn from their patterns. Braxvio's reflection layer surfaces how your focus, decisions and priorities have evolved — weekly, monthly and quarterly. Data that makes you sharper over time.",
    bullets: ["Performance heatmaps", "Focus time analytics", "Completion streaks", "Weekly digest reports"],
    visual: <ReflectCard />,
    flip: true,
    bg: "bg-[#EDE7DF]",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 bg-[#F5F0EB] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-black/[0.04] animate-pulse-ring" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-black/[0.03] animate-pulse-ring delay-2s" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white/60 mb-8" style={{ animationFillMode: "forwards" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>Platform Features</span>
            </div>
            <h1 className="animate-fade-up opacity-0 delay-200 text-[52px] sm:text-[72px] lg:text-[88px] font-extrabold leading-[1.03] text-[#0F0E0C] mb-6" style={{ fontFamily: "var(--font-playfair), serif", animationFillMode: "forwards" }}>
              Everything you need<br /><em className="italic">to think clearly.</em>
            </h1>
            <p className="animate-fade-up opacity-0 delay-400 text-[16px] text-[#6B6560] max-w-md mx-auto leading-7 mb-10" style={{ fontFamily: "var(--font-inter)", animationFillMode: "forwards" }}>
              Braxvio brings intelligence capture, focused work, strategic planning and performance reflection into one intelligent workspace.
            </p>
            <div className="animate-fade-up opacity-0 delay-600 flex flex-wrap gap-4 justify-center" style={{ animationFillMode: "forwards" }}>
              <Link href="/pricing" id="features-hero-cta" className="flex items-center gap-2 px-7 py-3.5 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[14px] font-medium hover:bg-[#2A2825] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                Start for free
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/how-it-works" className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/[0.12] text-[#0F0E0C] text-[14px] font-medium hover:bg-white/60 transition-all" style={{ fontFamily: "var(--font-inter)" }}>
                See how it works
              </Link>
            </div>
          </div>

          {/* Floating feature pills */}
          <div className="relative mt-20 w-full max-w-3xl mx-auto h-56">
            {[
              { label: "Capture", icon: <Sparkles className="w-4 h-4 text-[#00A3FF]" />, x: "5%", y: "10%", anim: "animate-float-slow" },
              { label: "Focus", icon: <Target className="w-4 h-4 text-[#0066FF]" />, x: "20%", y: "60%", anim: "animate-float-medium delay-300" },
              { label: "Plan", icon: <Folder className="w-4 h-4 text-[#00A3FF]" />, x: "40%", y: "5%", anim: "animate-float-fast delay-200" },
              { label: "Tasks", icon: <Check className="w-4 h-4 text-emerald-500" />, x: "60%", y: "55%", anim: "animate-float-slow delay-500" },
              { label: "Notes", icon: <FileText className="w-4 h-4 text-[#0066FF]" />, x: "75%", y: "15%", anim: "animate-float-medium delay-100" },
              { label: "Progress", icon: <TrendingUp className="w-4 h-4 text-emerald-500" />, x: "88%", y: "65%", anim: "animate-float-fast delay-400" },
            ].map((p) => (
              <div
                key={p.label}
                className={`glass-card absolute flex items-center gap-2 px-3.5 py-2 ${p.anim} rounded-full border border-black/[0.08] shadow-xs`}
                style={{ left: p.x, top: p.y }}
              >
                <span>{p.icon}</span>
                <span className="text-[12px] font-medium text-[#0F0E0C]" style={{ fontFamily: "var(--font-inter)" }}>{p.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#6B6560] mt-4" style={{ fontFamily: "var(--font-inter)" }}>
            Powerful features for real thinking.
          </p>
        </section>

        {/* ── ALTERNATING FEATURES ────────────────────────────── */}
        {ALTERNATING.map((feat, i) => (
          <section key={i} className={`py-24 md:py-32 px-6 ${feat.bg}`}>
            <div className="container-xl">
              <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${feat.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Text */}
                <AnimateIn type={feat.flip ? "right" : "left"}>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-5" style={{ fontFamily: "var(--font-inter)" }}>{feat.eyebrow}</p>
                  <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.08] text-[#0F0E0C] mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-playfair), serif" }}>{feat.headline}</h2>
                  <p className="text-[15px] text-[#6B6560] leading-7 mb-8 max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>{feat.body}</p>
                  <ul className="space-y-3">
                    {feat.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border border-[#C8A97E]/40 bg-[#C8A97E]/10 flex items-center justify-center shrink-0">
                          <svg width="9" height="7" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span className="text-[14px] text-[#0F0E0C]" style={{ fontFamily: "var(--font-inter)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
                {/* Visual */}
                <AnimateIn type={feat.flip ? "left" : "right"}>
                  <div className="p-1">
                    {feat.visual}
                  </div>
                </AnimateIn>
              </div>
            </div>
          </section>
        ))}

        {/* ── BENTO GRID ─────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 bg-[#F5F0EB]">
          <div className="container-xl">
            <AnimateIn>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-4" style={{ fontFamily: "var(--font-inter)" }}>Everything in one place</p>
                <h2 className="text-[40px] sm:text-[54px] font-bold leading-[1.08] text-[#0F0E0C]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  More than just<br /><em className="italic">a workspace.</em>
                </h2>
              </div>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENTO.map((card, i) => (
                <AnimateIn key={i} delay={i * 60} type="up">
                  <div
                    className={`glass-card p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${card.accent ? "lg:col-span-2" : ""}`}
                    style={card.accent ? { gridColumn: "span 2" } : {}}
                  >
                    <span className="text-3xl mb-4 block">{card.icon}</span>
                    <h3 className="text-[18px] font-bold text-[#0F0E0C] mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>{card.title}</h3>
                    <p className="text-[13px] text-[#6B6560] leading-6" style={{ fontFamily: "var(--font-inter)" }}>{card.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="py-32 px-6 bg-[#0F0E0C] text-center">
          <div className="max-w-2xl mx-auto">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-6" style={{ fontFamily: "var(--font-inter)" }}>Get started today</p>
              <h2 className="text-[44px] sm:text-[60px] font-bold leading-[1.06] text-[#F5F0EB] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Your thinking deserves<br /><em className="italic text-[#C8A97E]">a better place.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-10 leading-7" style={{ fontFamily: "var(--font-inter)" }}>
                Join thousands of business leaders who think, plan and execute on Braxvio.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/pricing" id="features-cta" className="flex items-center gap-2.5 px-8 py-4 bg-[#C8A97E] text-[#0F0E0C] rounded-full text-[15px] font-semibold hover:bg-[#D4B98E] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                  Get started
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/how-it-works" className="flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/[0.12] text-[#F5F0EB] text-[15px] font-medium hover:border-white/25 transition-all" style={{ fontFamily: "var(--font-inter)" }}>
                  See how it works
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
