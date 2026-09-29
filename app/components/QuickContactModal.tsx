"use client";

import { useState, useEffect } from "react";
import { Mail, Briefcase, Check, X, ArrowUpRight, Send, ShieldCheck, Copy } from "lucide-react";

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "Venture Advisory",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@mikeontech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0F0E0C] text-[#F5F0EB] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-10 max-h-[92vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 163, 255, 0.08)",
        }}
      >
        {/* Subtle background ambient light */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,163,255,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)" }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6 pr-10">
          <div className="relative shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#0066FF] to-[#00A3FF] flex items-center justify-center font-bold text-white text-base sm:text-lg tracking-wider shadow-lg shadow-blue-500/20">
              MOT
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0F0E0C]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Connect with Mike
              </h3>
              <span className="text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Online
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Founder &amp; CEO · MikeOnTech (MOT)
            </p>
          </div>
        </div>

        {/* Fast Action Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-7">
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00A3FF]/40 hover:bg-white/[0.07] transition-all text-left group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] text-white/40 uppercase tracking-wider font-medium">Direct Email</p>
                <p className="text-xs font-semibold text-white/90 truncate">contact@mikeontech.com</p>
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] text-blue-400 font-medium px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 shrink-0 flex items-center gap-1">
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </span>
          </button>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00A3FF]/40 hover:bg-white/[0.07] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0077b5]/20 flex items-center justify-center text-blue-400 shrink-0">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-white/40 uppercase tracking-wider font-medium">LinkedIn Network</p>
                <p className="text-xs font-semibold text-white/90">Connect on LinkedIn</p>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Content / Form */}
        {status === "success" ? (
          <div className="text-center py-8 sm:py-10 px-3 sm:px-4 bg-white/[0.02] rounded-2xl border border-white/5">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Check className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Message Received
            </h4>
            <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Thank you for reaching out to MikeOnTech. Your inquiry has been routed directly to Mike&apos;s executive inbox. Expect a response within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", category: "Venture Advisory", message: "" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Send another message
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-medium tracking-wide text-white/60 mb-1 uppercase">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-medium tracking-wide text-white/60 mb-1 uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] font-medium tracking-wide text-white/60 mb-1.5 uppercase">
                Collaboration Topic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {[
                  "Venture Advisory",
                  "Investment",
                  "Speaking / Keynote",
                  "General Inquiry",
                ].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setForm({ ...form, category: cat })}
                    className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium border text-center transition-all ${
                      form.category === cat
                        ? "bg-[#00A3FF]/15 text-[#00A3FF] border-[#00A3FF]/50 shadow-sm"
                        : "bg-white/[0.02] text-white/60 border-white/5 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] font-medium tracking-wide text-white/60 mb-1 uppercase">
                Your Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your venture, proposal, or how Mike can assist..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/30 transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[10px] sm:text-[11px] text-white/40 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Guaranteed response in 24 hours
              </span>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 shadow-lg shadow-blue-500/25"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
