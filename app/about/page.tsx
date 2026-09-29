import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Braxvio — our philosophy, our journey, our team.",
};

const PRINCIPLES = [
  {
    num: "01",
    label: "Clarity",
    headline: "Remove unnecessary\nnoise.",
    body: "Every feature we build must pass one test: does it help you think better? If not, it doesn't exist in Braxvio. We are obsessive about removing friction from the path between insight and action.",
  },
  {
    num: "02",
    label: "Focus",
    headline: "Protect what matters\nmost.",
    body: "Attention is the scarcest resource in modern business. Braxvio is designed to give it back. Everything from our interface architecture to our notification design is built to respect your focus, not fragment it.",
  },
  {
    num: "03",
    label: "Momentum",
    headline: "Turn ideas into\nmeaningful action.",
    body: "The gap between thinking and doing is where most organizations fail. Braxvio closes it. Captured intelligence flows directly into plans, tasks and outcomes — keeping strategy and execution in the same system.",
  },
];

const TIMELINE = [
  { year: "2021", event: "The idea", detail: "A simple belief: business intelligence deserved a better home than disconnected tools." },
  { year: "2022", event: "The first version", detail: "Early alpha launched to 200 testers. Overwhelming feedback validated the core concept." },
  { year: "2023", event: "Growing community", detail: "Early users and feedback. Ciphexo Pay launched. First enterprise partnerships signed." },
  { year: "2024", event: "Braxvio today", detail: "A complete platform for thinking, planning and execution — used by teams across 3 continents." },
  { year: "2025", event: "What's next", detail: "Braxvio Labs opens. Series A underway. East Africa expansion begins." },
];

const TEAM = [
  { name: "K. Mensah", role: "CEO & Co-founder", initials: "KM", bg: "#C8A97E" },
  { name: "A. Osei", role: "CTO & Co-founder", initials: "AO", bg: "#6B6560" },
  { name: "Z. Diallo", role: "Head of Product", initials: "ZD", bg: "#2A2825" },
  { name: "N. Boateng", role: "Head of Design", initials: "NB", bg: "#C8A97E" },
  { name: "E. Frimpong", role: "Head of Engineering", initials: "EF", bg: "#6B6560" },
  { name: "S. Quartey", role: "Head of Growth", initials: "SQ", bg: "#2A2825" },
];

const VALUES = [
  "Human first",
  "Less noise",
  "Thoughtful technology",
  "Continuous improvement",
  "Radical simplicity",
  "Global ambition",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO — editorial split */}
        <section className="relative pt-28 px-6 bg-[#F5F0EB] overflow-hidden">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-end pb-0 min-h-[80vh]">
              <div className="flex flex-col justify-center pb-24">
                <AnimateIn>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-8" style={{ fontFamily: "var(--font-inter)" }}>Our Story</p>
                  <h1 className="text-[46px] sm:text-[62px] lg:text-[72px] font-extrabold leading-[1.04] text-[#0F0E0C] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    We believe clearer thinking creates <em className="italic">better work.</em>
                  </h1>
                  <p className="text-[16px] text-[#6B6560] leading-7 max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
                    Braxvio was built on a simple frustration: the best business minds were drowning in disconnected tools, losing ideas in the chaos and failing to act on what mattered most.
                  </p>
                </AnimateIn>
              </div>
              {/* Portrait */}
              <div className="relative self-end">
                <AnimateIn type="right" delay={150}>
                  <div className="relative h-[440px] lg:h-[520px] overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm">
                    <Image
                      src="/hero-visionary.png"
                      alt="Mike - Founder & CEO of MOT"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-contain object-bottom"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(245,240,235,0.7) 0%, transparent 40%)" }} />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white border border-black/[0.08] shadow-xl rounded-2xl p-5 flex justify-between">
                    {[
                      { v: "2021", l: "Founded" },
                      { v: "50+", l: "Team" },
                      { v: "3", l: "Continents" },
                    ].map((s) => (
                      <div key={s.l} className="text-center">
                        <p className="text-[26px] font-bold text-[#0F0E0C]" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.v}</p>
                        <p className="text-[11px] text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY — huge type */}
        <section className="py-6 px-6 bg-[#F5F0EB]">
          <div className="container-xl">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-16 mt-8" style={{ fontFamily: "var(--font-inter)" }}>Our Philosophy</p>
            </AnimateIn>
            {PRINCIPLES.map((p, i) => (
              <div key={i} className={`py-14 border-t border-black/[0.07] grid lg:grid-cols-[140px_1fr_1fr] gap-8 items-start`}>
                <AnimateIn type="left">
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-semibold text-[#C8A97E]" style={{ fontFamily: "var(--font-inter)" }}>{p.num}</span>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>{p.label}</span>
                  </div>
                </AnimateIn>
                <AnimateIn delay={80}>
                  <h2 className="text-[42px] sm:text-[52px] font-bold leading-[1.07] text-[#0F0E0C] whitespace-pre-line" style={{ fontFamily: "var(--font-playfair), serif" }}>{p.headline}</h2>
                </AnimateIn>
                <AnimateIn type="right" delay={120}>
                  <p className="text-[15px] text-[#6B6560] leading-7 max-w-sm pt-2" style={{ fontFamily: "var(--font-inter)" }}>{p.body}</p>
                </AnimateIn>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-28 px-6 bg-[#EDE7DF]">
          <div className="container-xl max-w-4xl">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-5" style={{ fontFamily: "var(--font-inter)" }}>Our story</p>
              <h2 className="text-[40px] sm:text-[50px] font-bold leading-[1.1] text-[#0F0E0C] mb-16" style={{ fontFamily: "var(--font-playfair), serif" }}>
                How we got <em className="italic">here.</em>
              </h2>
            </AnimateIn>
            <div className="relative">
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A97E] via-[#C8A97E]/40 to-transparent hidden sm:block" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <AnimateIn key={i} delay={i * 80}>
                    <div className="flex items-start gap-8">
                      <span className="text-[14px] font-bold text-[#C8A97E] w-20 shrink-0 text-right pt-1" style={{ fontFamily: "var(--font-inter)" }}>{item.year}</span>
                      <div className="relative z-10 w-3 h-3 rounded-full border-2 border-[#C8A97E] bg-[#EDE7DF] shrink-0 mt-1.5 hidden sm:block" />
                      <div>
                        <p className="text-[16px] font-semibold text-[#0F0E0C] mb-1" style={{ fontFamily: "var(--font-inter)" }}>{item.event}</p>
                        <p className="text-[14px] text-[#6B6560] leading-6" style={{ fontFamily: "var(--font-inter)" }}>{item.detail}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-28 px-6 bg-[#F5F0EB]">
          <div className="container-xl">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-4" style={{ fontFamily: "var(--font-inter)" }}>The people</p>
              <h2 className="text-[40px] sm:text-[50px] font-bold leading-[1.1] text-[#0F0E0C] mb-14" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Built by a team that<br /><em className="italic">believes deeply.</em>
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {TEAM.map((member, i) => (
                <AnimateIn key={i} delay={i * 60}>
                  <div id={`team-${i}`} className="group text-center cursor-default">
                    <div className="w-full aspect-square rounded-2xl flex items-center justify-center mb-3 text-[22px] font-bold text-white overflow-hidden transition-transform duration-300 group-hover:-translate-y-2" style={{ background: member.bg, fontFamily: "var(--font-inter)" }}>
                      {member.initials}
                    </div>
                    <p className="text-[13px] font-semibold text-[#0F0E0C]" style={{ fontFamily: "var(--font-inter)" }}>{member.name}</p>
                    <p className="text-[11px] text-[#6B6560] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{member.role}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES — dark */}
        <section className="py-24 px-6 bg-[#0F0E0C] overflow-hidden">
          <div className="container-xl">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-10" style={{ fontFamily: "var(--font-inter)" }}>What we value</p>
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
              {VALUES.map((val, i) => (
                <AnimateIn key={i} delay={i * 60}>
                  <div className="bg-[#0F0E0C] px-10 py-10 hover:bg-white/[0.03] transition-colors duration-300 group">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#C8A97E]/60 mb-3" style={{ fontFamily: "var(--font-inter)" }}>0{i + 1}</p>
                    <p className="text-[24px] sm:text-[28px] font-bold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair), serif" }}>{val}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6 bg-[#EDE7DF] text-center">
          <div className="max-w-xl mx-auto">
            <AnimateIn>
              <h2 className="text-[42px] sm:text-[56px] font-bold leading-[1.07] text-[#0F0E0C] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Build a clearer way<br /><em className="italic">of working.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-9" style={{ fontFamily: "var(--font-inter)" }}>
                Join Braxvio today and experience what it means to truly think with your tools.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/pricing" id="about-cta" className="flex items-center gap-2.5 px-8 py-4 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[15px] font-semibold hover:bg-[#2A2825] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                  Get started
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/contact" className="flex items-center gap-2.5 px-8 py-4 rounded-full border border-black/[0.12] text-[#0F0E0C] text-[15px] font-medium hover:bg-white/60 transition-all" style={{ fontFamily: "var(--font-inter)" }}>
                  Talk to us
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
