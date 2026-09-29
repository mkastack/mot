"use client";

import { useState } from "react";
import { Rocket, Briefcase, Mic, Wrench, MessageSquare, Check, Copy, MapPin, Clock, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

type FormState = "idle" | "loading" | "success" | "error";

const CONTACT_CATEGORIES = [
  { icon: Rocket, label: "Venture Advisory", desc: "Strategic advice for founders, scaling architecture, and team structure." },
  { icon: Briefcase, label: "Seed Investment", desc: "Syndicate and angel investment inquiries for high-velocity startups." },
  { icon: Mic, label: "Speaking & Keynotes", desc: "Keynotes on fintech, emerging markets, AI in enterprise, and builder culture." },
  { icon: Wrench, label: "Tech Architecture", desc: "Deep technical audits, digital payment rails, and enterprise scaling." },
  { icon: MessageSquare, label: "General & Media", desc: "Podcast invitations, interviews, press kit requests, or personal connection." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@mikeontech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#F5F0EB] min-h-screen">
        <section className="pt-28 sm:pt-36 pb-24 sm:pb-32 px-4 sm:px-6">
          <div className="container-xl max-w-5xl">
            {/* Header */}
            <div className="mb-10 sm:mb-16">
              <AnimateIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/[0.08] mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#0066FF]" style={{ fontFamily: "var(--font-inter)" }}>
                    Executive Inquiry Channel · MOT
                  </span>
                </div>
                <h1 className="text-[40px] sm:text-[76px] font-extrabold leading-[1.05] text-[#0F0E0C] mb-4 sm:mb-5 tracking-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Connect with Mike.
                </h1>
                <p className="text-[15px] sm:text-[16px] text-[#55504A] leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>
                  Have an ambitious tech venture, need executive advisory, or want Mike to speak at your conference? Reach out directly below.
                </p>
              </AnimateIn>
            </div>

            <div className="grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-12 items-start">
              {/* Form */}
              <AnimateIn type="left">
                <div className="glass-card p-6 sm:p-12 rounded-3xl border border-black/[0.08] bg-white/80 shadow-lg">
                  {state === "success" ? (
                    <div className="text-center py-12 sm:py-14 animate-fade-in">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5 text-emerald-600">
                        <Check className="w-7 sm:w-8 h-7 sm:h-8" />
                      </div>
                      <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F0E0C] mb-2 sm:mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                        Inquiry Received!
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-[#6B6560] max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                        Your message has been routed to Mike&apos;s personal executive inbox. Guaranteed reply within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setState("idle");
                          setForm({ name: "", email: "", company: "", subject: "", message: "" });
                        }}
                        className="mt-6 sm:mt-8 px-6 py-2.5 rounded-full text-[13px] font-semibold bg-black text-white hover:bg-[#2A2825] transition-all"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} id="contact-form">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-[11px] sm:text-[12px] font-semibold text-[#4A4540] tracking-wide mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Full name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-[11px] sm:text-[12px] font-semibold text-[#4A4540] tracking-wide mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Email address *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="contact-company" className="block text-[11px] sm:text-[12px] font-semibold text-[#4A4540] tracking-wide mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Organization / Firm (Optional)
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company, fund, or publication"
                          className="form-input"
                        />
                      </div>

                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="contact-subject" className="block text-[11px] sm:text-[12px] font-semibold text-[#4A4540] tracking-wide mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Collaboration Topic
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="form-input cursor-pointer"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          <option value="">Select a collaboration topic</option>
                          {CONTACT_CATEGORIES.map((c) => (
                            <option key={c.label} value={c.label}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-6 sm:mb-7">
                        <label htmlFor="contact-message" className="block text-[11px] sm:text-[12px] font-semibold text-[#4A4540] tracking-wide mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Message &amp; Proposal Details *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell Mike about your project, timeline, or discussion topics..."
                          className="form-input resize-none"
                        />
                      </div>

                      <button
                        id="contact-submit"
                        type="submit"
                        disabled={state === "loading"}
                        className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[13px] sm:text-[14px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2A2825] transition-all hover:scale-[1.01] shadow-md"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {state === "loading" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <span>Transmit Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimateIn>

              {/* Sidebar Channels */}
              <AnimateIn type="right" delay={100}>
                <div className="space-y-5 sm:space-y-6">
                  {/* Direct Contact Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white/70 border border-black/[0.08] shadow-xs">
                    <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#0066FF] mb-2 sm:mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                      Direct Executive Inbox
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#0F0E0C] mb-1 break-all" style={{ fontFamily: "var(--font-inter)" }}>
                      contact@mikeontech.com
                    </p>
                    <p className="text-xs text-[#6B6560] leading-relaxed mb-4">
                      Direct line for confidential term sheets, board inquiries, and keynote proposals.
                    </p>
                    <button
                      onClick={copyEmail}
                      className="px-4 py-2 rounded-xl bg-black/[0.06] hover:bg-black/[0.1] text-xs font-semibold text-[#0F0E0C] transition-all flex items-center gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Areas */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white/70 border border-black/[0.08] shadow-xs">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6560] font-bold mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                      Collaboration Scopes
                    </p>
                    <div className="space-y-3">
                      {CONTACT_CATEGORIES.map((cat) => {
                        const IconComponent = cat.icon;
                        return (
                          <div key={cat.label} className="flex gap-3 py-2 border-b border-black/[0.04] last:border-0">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#0066FF] flex items-center justify-center shrink-0 mt-0.5">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-[#0F0E0C]" style={{ fontFamily: "var(--font-inter)" }}>{cat.label}</p>
                              <p className="text-[11px] text-[#6B6560] leading-normal mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{cat.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Presence */}
                  <div className="px-5 py-4 rounded-2xl bg-white/40 border border-black/[0.05] text-xs text-[#6B6560] space-y-2">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Accra · London · Remote</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Response SLA: Within 24 business hours</span>
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
