"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import Link from "next/link";

const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For individuals getting started.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get started free",
    ctaHref: "/contact",
    emphasis: false,
    features: [
      "Up to 500 captured items",
      "3 projects",
      "Basic AI tagging",
      "Focus mode (3 sessions/day)",
      "Email integration",
      "Mobile apps",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For leaders who need deeper intelligence.",
    monthlyPrice: 8,
    yearlyPrice: 6,
    cta: "Start Pro",
    ctaHref: "/contact",
    emphasis: true,
    badge: "Most popular",
    features: [
      "Unlimited captures",
      "Unlimited projects",
      "Advanced AI assistance",
      "Unlimited focus sessions",
      "All integrations",
      "Priority search",
      "Weekly reflection reports",
      "2 team members",
      "Priority support",
    ],
  },
  {
    id: "team",
    name: "Team",
    tagline: "For teams working together.",
    monthlyPrice: 16,
    yearlyPrice: 12,
    cta: "Start Team",
    ctaHref: "/contact",
    emphasis: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Shared workspaces",
      "Team analytics dashboard",
      "Admin controls",
      "SSO / SAML",
      "API access",
      "Custom webhooks",
      "Dedicated support",
      "SLA guarantee",
    ],
  },
];

const TABLE_CATEGORIES = [
  {
    label: "Capture",
    rows: [
      { feature: "Monthly captures", free: "500", pro: "Unlimited", team: "Unlimited" },
      { feature: "Voice capture", free: false, pro: true, team: true },
      { feature: "Auto-tagging", free: "Basic", pro: "Advanced", team: "Advanced" },
    ],
  },
  {
    label: "Organization",
    rows: [
      { feature: "Projects", free: "3", pro: "Unlimited", team: "Unlimited" },
      { feature: "Shared workspaces", free: false, pro: false, team: true },
      { feature: "Smart folders", free: false, pro: true, team: true },
    ],
  },
  {
    label: "Focus",
    rows: [
      { feature: "Focus sessions/day", free: "3", pro: "Unlimited", team: "Unlimited" },
      { feature: "Session analytics", free: false, pro: true, team: true },
    ],
  },
  {
    label: "AI",
    rows: [
      { feature: "AI assistance", free: "Basic", pro: "Full", team: "Full" },
      { feature: "Summaries & insights", free: false, pro: true, team: true },
      { feature: "Priority predictions", free: false, pro: true, team: true },
    ],
  },
  {
    label: "Integrations",
    rows: [
      { feature: "Connected apps", free: "2", pro: "40+", team: "40+" },
      { feature: "API access", free: false, pro: false, team: true },
      { feature: "Webhooks", free: false, pro: false, team: true },
    ],
  },
  {
    label: "Storage",
    rows: [
      { feature: "File storage", free: "1 GB", pro: "10 GB", team: "Unlimited" },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Support tier", free: "Community", pro: "Priority", team: "Dedicated" },
      { feature: "Response time", free: "5 days", pro: "24 hours", team: "4 hours" },
    ],
  },
];

const FAQS = [
  { q: "Can I change plans anytime?", a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades at the end of your billing cycle. No penalties." },
  { q: "Is there a free plan?", a: "Yes. Our Free plan gives individuals up to 500 captures, 3 projects and basic AI features with no credit card required." },
  { q: "Can I cancel anytime?", a: "Absolutely. No long-term contracts. Cancel from your account settings and you won't be charged again. Your data is always yours." },
  { q: "Does it work on mobile?", a: "Yes — Braxvio has native iOS and Android apps with full feature parity including capture, focus mode and offline support." },
  { q: "Can I use it with my team?", a: "The Team plan unlocks shared workspaces, team analytics, admin controls and unlimited members. Perfect for executive teams and departments." },
  { q: "How does billing work?", a: "Monthly plans are billed on the same day each month. Annual plans are billed once per year. You can switch between monthly and annual at any time." },
];

function CheckIcon() {
  return (
    <span className="check-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-7" stroke="#C8A97E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
}
function CrossIcon() {
  return (
    <span className="cross-icon">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="#D1C4B8" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pt-28 pb-14 px-6 bg-[#F5F0EB] text-center">
          <div className="max-w-2xl mx-auto">
            <AnimateIn>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-6" style={{ fontFamily: "var(--font-inter)" }}>Pricing</p>
              <h1 className="text-[50px] sm:text-[68px] font-extrabold leading-[1.04] text-[#0F0E0C] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Simple plans.<br /><em className="italic">Clear thinking.</em>
              </h1>
              <p className="text-[15px] text-[#6B6560] leading-7 mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                Choose the plan that fits your journey. Upgrade or downgrade at any time.
              </p>

              {/* Toggle */}
              <div className="inline-flex items-center gap-3 bg-black/[0.04] rounded-full px-5 py-3">
                <button
                  id="toggle-monthly"
                  onClick={() => setAnnual(false)}
                  className={`text-[13px] font-medium transition-colors ${!annual ? "text-[#0F0E0C]" : "text-[#6B6560]"}`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Monthly
                </button>
                <button
                  id="billing-toggle"
                  onClick={() => setAnnual(!annual)}
                  className={`toggle-track ${annual ? "active" : ""}`}
                  aria-label="Toggle annual billing"
                >
                  <div className="toggle-thumb" />
                </button>
                <button
                  id="toggle-annual"
                  onClick={() => setAnnual(true)}
                  className={`text-[13px] font-medium transition-colors ${annual ? "text-[#0F0E0C]" : "text-[#6B6560]"}`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Annual
                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#C8A97E]/15 text-[#C8A97E] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>Save 25%</span>
                </button>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="pb-24 px-6 bg-[#F5F0EB]">
          <div className="container-xl max-w-5xl">
            <div className="grid md:grid-cols-3 gap-5">
              {PLANS.map((plan, i) => (
                <AnimateIn key={plan.id} delay={i * 80}>
                  <div
                    id={`plan-${plan.id}`}
                    className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                      plan.emphasis
                        ? "bg-[#0F0E0C] shadow-2xl scale-[1.02]"
                        : "bg-white border border-black/[0.08] shadow-sm hover:shadow-xl hover:-translate-y-0.5"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 bg-[#C8A97E] text-[#0F0E0C] text-[10px] font-bold tracking-wide uppercase rounded-full" style={{ fontFamily: "var(--font-inter)" }}>
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <p className={`text-[14px] font-bold uppercase tracking-wide mb-1 ${plan.emphasis ? "text-[#F5F0EB]" : "text-[#0F0E0C]"}`} style={{ fontFamily: "var(--font-inter)" }}>{plan.name}</p>
                      <p className={`text-[13px] leading-5 ${plan.emphasis ? "text-white/50" : "text-[#6B6560]"}`} style={{ fontFamily: "var(--font-inter)" }}>{plan.tagline}</p>
                    </div>
                    <div className="mb-7">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-[44px] font-bold leading-none ${plan.emphasis ? "text-[#F5F0EB]" : "text-[#0F0E0C]"}`} style={{ fontFamily: "var(--font-playfair), serif" }}>
                          ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className={`text-[13px] ${plan.emphasis ? "text-white/40" : "text-[#6B6560]"}`} style={{ fontFamily: "var(--font-inter)" }}>/ mo</span>
                        )}
                      </div>
                      {plan.monthlyPrice === 0 && <span className={`text-[13px] ${plan.emphasis ? "text-white/40" : "text-[#6B6560]"}`} style={{ fontFamily: "var(--font-inter)" }}>Free forever</span>}
                      {annual && plan.monthlyPrice > 0 && (
                        <p className="text-[11px] text-[#C8A97E] mt-1" style={{ fontFamily: "var(--font-inter)" }}>Billed ${plan.yearlyPrice * 12}/year</p>
                      )}
                    </div>
                    <Link
                      href={plan.ctaHref}
                      id={`plan-cta-${plan.id}`}
                      className={`block w-full text-center py-3.5 rounded-xl text-[14px] font-semibold mb-7 transition-all hover:scale-[1.01] ${
                        plan.emphasis
                          ? "bg-[#C8A97E] text-[#0F0E0C] hover:bg-[#D4B98E]"
                          : "bg-[#0F0E0C] text-[#F5F0EB] hover:bg-[#2A2825]"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {plan.cta}
                    </Link>
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke={plan.emphasis ? "#C8A97E" : "#C8A97E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                          <span className={`text-[13px] leading-5 ${plan.emphasis ? "text-white/75" : "text-[#2A2825]"}`} style={{ fontFamily: "var(--font-inter)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 px-6 bg-[#EDE7DF]">
          <div className="container-xl max-w-4xl">
            <AnimateIn>
              <h2 className="text-[36px] sm:text-[46px] font-bold leading-[1.1] text-[#0F0E0C] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Compare all features
              </h2>
              <p className="text-[14px] text-[#6B6560] mb-10" style={{ fontFamily: "var(--font-inter)" }}>Still have questions? <Link href="/faq" className="underline hover:text-[#0F0E0C] transition-colors">Read the FAQ</Link></p>
            </AnimateIn>
            <div className="overflow-x-auto rounded-2xl border border-black/[0.07] bg-white/60 backdrop-blur-sm">
              <table className="pricing-table">
                <thead>
                  <tr className="border-b border-black/[0.07]">
                    <th className="text-[12px] font-medium text-[#6B6560] py-4 px-5 text-left" style={{ fontFamily: "var(--font-inter)", width: "40%" }}>Feature</th>
                    {["Free", "Pro", "Team"].map((h) => (
                      <th key={h} className="text-[12px] font-semibold text-[#0F0E0C] py-4 px-5" style={{ fontFamily: "var(--font-inter)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_CATEGORIES.map((cat) => (
                    <>
                      <tr key={`cat-${cat.label}`} className="bg-[#C8A97E]/08">
                        <td colSpan={4} className="px-5 py-2.5">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A97E]" style={{ fontFamily: "var(--font-inter)" }}>{cat.label}</span>
                        </td>
                      </tr>
                      {cat.rows.map((row) => (
                        <tr key={row.feature}>
                          <td className="px-5 py-3.5 text-[13px] text-[#2A2825]" style={{ fontFamily: "var(--font-inter)" }}>{row.feature}</td>
                          {[row.free, row.pro, row.team].map((val, j) => (
                            <td key={j} className="px-5 py-3.5 text-center">
                              {val === true ? <CheckIcon /> : val === false ? <CrossIcon /> : <span className="text-[12px] text-[#0F0E0C] font-medium" style={{ fontFamily: "var(--font-inter)" }}>{val}</span>}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#F5F0EB]">
          <div className="container-xl max-w-3xl">
            <AnimateIn>
              <h2 className="text-[36px] sm:text-[46px] font-bold leading-[1.1] text-[#0F0E0C] mb-10" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Still have questions?
              </h2>
            </AnimateIn>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <AnimateIn key={i} delay={i * 40}>
                  <div className="border-b border-black/[0.08]">
                    <button
                      id={`pricing-faq-${i}`}
                      className="w-full flex items-center justify-between py-5 text-left group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-[15px] font-medium text-[#0F0E0C] group-hover:text-[#C8A97E] transition-colors pr-8" style={{ fontFamily: "var(--font-inter)" }}>{faq.q}</span>
                      <span className={`accordion-icon text-[#6B6560] text-xl leading-none shrink-0 ${openFaq === i ? "open" : ""}`}>+</span>
                    </button>
                    <div className={`accordion-content ${openFaq === i ? "open" : ""}`} style={{ maxHeight: openFaq === i ? "200px" : "0" }}>
                      <p className="text-[14px] text-[#6B6560] leading-7 pb-5 pr-8" style={{ fontFamily: "var(--font-inter)" }}>{faq.a}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#0F0E0C] text-center">
          <div className="max-w-xl mx-auto">
            <AnimateIn>
              <h2 className="text-[42px] sm:text-[56px] font-bold leading-[1.07] text-[#F5F0EB] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Start with <em className="italic text-[#C8A97E]">clarity.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-9" style={{ fontFamily: "var(--font-inter)" }}>No credit card required. Start free and upgrade when you&apos;re ready.</p>
              <Link href="/contact" id="pricing-cta" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8A97E] text-[#0F0E0C] rounded-full text-[15px] font-semibold hover:bg-[#D4B98E] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                Get started for free
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
