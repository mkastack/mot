"use client";

import { useState } from "react";
import { Rocket, Lightbulb, Mic, ShieldCheck, Check, Copy, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    topic: "Advisory / Board",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@mikeontech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-36 px-4 sm:px-6 bg-[#0B0C0E] text-[#F5F0EB] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -left-20 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #00A3FF 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #C8A97E 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#00A3FF]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Get in Touch · Open for Q2 Collaborations
            </span>
          </div>

          <h2
            className="text-[34px] sm:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Let&apos;s build{" "}
            <em className="italic bg-gradient-to-r from-[#00A3FF] via-[#38BDF8] to-[#C8A97E] bg-clip-text text-transparent">
              something iconic.
            </em>
          </h2>

          <p
            className="text-sm sm:text-lg text-[#948E85] leading-relaxed px-2"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Whether you&apos;re exploring executive tech advisory, venture partnerships, keynote speaking, or building transformative products — I&apos;d love to connect.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Direct channels & credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Quick Action Email Card */}
            <div className="p-5 sm:p-8 rounded-3xl bg-[#131417] border border-white/10 shadow-xl hover:border-[#00A3FF]/40 transition-all duration-300">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A97E] mb-2 block">
                Direct Contact
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-2 break-all"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                contact@mikeontech.com
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-5">
                Fastest way to reach Mike directly. Messages are filtered for serious proposals, advisory requests, and executive partnerships.
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/70" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:contact@mikeontech.com?subject=Executive%20Inquiry%20for%20Mike"
                  className="px-3.5 py-2 rounded-xl bg-[#00A3FF]/15 border border-[#00A3FF]/30 hover:bg-[#00A3FF]/25 text-xs font-medium text-[#00A3FF] transition-all flex items-center gap-1"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Consultation / Collaboration Scopes */}
            <div className="p-5 sm:p-8 rounded-3xl bg-[#131417] border border-white/10 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A97E] mb-4 block">
                Collaboration Scopes
              </span>

              <ul className="space-y-4 text-xs text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#00A3FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Rocket className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-medium">Tech Advisory &amp; Board Seats</strong>
                    <span className="text-white/50 leading-normal">Scaling technical architecture, engineering culture, and growth execution.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#00A3FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-medium">Venture Co-Building &amp; Angel Investments</strong>
                    <span className="text-white/50 leading-normal">Early-stage support for ambitious founders across Africa and emerging hubs.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#00A3FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Mic className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-medium">Keynotes &amp; Panel Discussions</strong>
                    <span className="text-white/50 leading-normal">Speaking on fintech infrastructure, AI in enterprise, and emerging markets.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00A3FF]" />
                  Accra · London · Remote
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  SLA: &lt; 24h Response
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-12 rounded-3xl bg-[#131417] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 sm:py-16 animate-fade-in">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 sm:mb-6 text-emerald-400">
                    <Check className="w-8 sm:w-10 h-8 sm:h-10" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Inquiry Dispatched!
                  </h3>
                  <p
                    className="text-white/60 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6 sm:mb-8"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Thank you, {form.name || "friend"}. Your message has been sent directly to Mike&apos;s personal executive queue. You will receive a direct reply at <strong className="text-white">{form.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        organization: "",
                        topic: "Advisory / Board",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 sm:py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] sm:text-xs font-medium text-white/60 mb-1.5 sm:mb-2 uppercase tracking-wider"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/40 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] sm:text-xs font-medium text-white/60 mb-1.5 sm:mb-2 uppercase tracking-wider"
                      >
                        Work / Personal Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="org"
                      className="block text-[11px] sm:text-xs font-medium text-white/60 mb-1.5 sm:mb-2 uppercase tracking-wider"
                    >
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="org"
                      type="text"
                      placeholder="e.g. Apex Ventures, Goldman, Techstars..."
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                      Area of Discussion
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Advisory / Board",
                        "Tech Venture",
                        "Speaking / Keynote",
                        "Direct Inquiry",
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, topic: t })}
                          className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                            form.topic === t
                              ? "bg-[#00A3FF]/20 text-[#00A3FF] border-[#00A3FF]/60 shadow-sm"
                              : "bg-white/[0.03] text-white/60 border-white/5 hover:bg-white/[0.07] hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] sm:text-xs font-medium text-white/60 mb-1.5 sm:mb-2 uppercase tracking-wider"
                    >
                      Message / Proposal Details *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Share brief details regarding what you are building or what you'd like to discuss with Mike..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl sm:rounded-2xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/40 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-[11px] sm:text-xs text-white/40 flex items-center gap-1.5 order-2 sm:order-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Strict confidentiality respected for all venture &amp; advisory talks</span>
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-submit-btn"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 order-1 sm:order-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
