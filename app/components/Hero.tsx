"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Globe,
  Briefcase,
  Rocket,
  Zap,
  Sparkles,
  ArrowUpRight,
  Play,
} from "lucide-react";
import QuickContactModal from "./QuickContactModal";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Silently auto-switch every 10 seconds — fully automatic, no UI controls
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col overflow-hidden bg-[#F5F0EB]"
      >
        {/* Background decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-black/[0.05] animate-pulse-ring pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-black/[0.04] animate-pulse-ring delay-2s pointer-events-none" />

        {/* Ambient subtle color orbs */}
        <div
          className="absolute -top-32 right-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #00A3FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #C8A97E 0%, transparent 70%)" }}
        />

        {/* Spinning badge top-right (desktop) */}
        <div className="absolute top-28 right-12 hidden lg:block z-20">
          <div className="relative w-28 h-28 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circle-text-path"
                  d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                fill="#54504A"
                fontSize="10"
                letterSpacing="3.2"
                fontFamily="var(--font-inter), sans-serif"
                fontWeight="600"
              >
                <textPath href="#circle-text-path">
                  MIKEONTECH · CEO · FOUNDER · BUILDER ·{" "}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00A3FF]" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center relative z-10 pt-24 sm:pt-28 pb-6 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          {/* Eyebrow tag */}
          <div
            className="animate-fade-up opacity-0 flex items-center gap-2 mb-5 sm:mb-6 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white shadow-xs max-w-full"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4A4540] truncate"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              MOT · MikeOnTech · Michael Kwesi Annor · Founder &amp; CEO
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up opacity-0 delay-200 text-center max-w-4xl leading-[1.05] tracking-tight px-2"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(38px, 7vw, 98px)",
              fontWeight: 800,
              color: "#0F0E0C",
              animationFillMode: "forwards",
            }}
          >
            Building what
            <br />
            <em className="italic font-normal bg-gradient-to-r from-[#0F0E0C] via-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">
              the future demands.
            </em>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up opacity-0 delay-400 mt-5 sm:mt-6 max-w-xl text-center text-[14px] sm:text-[17px] leading-relaxed text-[#5A5550] px-3"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              animationFillMode: "forwards",
            }}
          >
            Executive portfolio of Michael Kwesi Annor (MikeOnTech / MOT) — technology founder, venture architect, and CEO pioneering scalable digital infrastructure and high-velocity digital products.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up opacity-0 delay-600 flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8 w-full sm:w-auto px-4 sm:px-0 justify-center"
            style={{ animationFillMode: "forwards" }}
          >
            <button
              id="hero-cta-contact"
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[14px] font-semibold hover:bg-[#2A2825] transition-all duration-300 hover:scale-[1.02] shadow-md group cursor-pointer"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span>Connect with Mike</span>
              <ArrowUpRight className="w-4 h-4 text-[#00A3FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              id="hero-cta-ventures"
              href="#ventures"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-black/15 bg-white text-[#0F0E0C] text-[14px] font-semibold hover:border-black/35 hover:bg-[#F5F0EB] transition-all duration-200"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Explore Ventures</span>
            </a>
          </div>

          {/* ── Hero Image Showcase ──
              Two images stacked absolutely, crossfading every 10s.
              No card, no frame, no UI controls — blends naturally into the page. */}
          <div
            className="animate-fade-in opacity-0 delay-500 relative w-full max-w-4xl mx-auto mt-6 sm:mt-10"
            style={{ animationFillMode: "forwards" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 -top-10 w-full h-full rounded-full pointer-events-none opacity-20 filter blur-3xl"
              style={{
                background: "radial-gradient(ellipse at center, #00A3FF 0%, transparent 70%)",
              }}
            />

            {/* Image stage — transparent, no border, no shadow */}
            <div className="relative w-full aspect-[1024/563] max-h-[380px] sm:max-h-[460px]">

              {/* IMAGE 1 — Visionary (bg matches page #F5F0EB) */}
              <div
                className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                  activeSlide === 0 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDuration: "1500ms" }}
              >
                <Image
                  src="/hero-visionary.png"
                  alt="Mike (MOT / MikeOnTech) — Founder & CEO surrounded by futuristic digital interfaces"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain object-bottom"
                />
                {/* Bottom fade → blends into page background */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #F5F0EB 0%, rgba(245,240,235,0.6) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* IMAGE 2 — Creator HUD (Michael Kwesi Annor, dark bg) */}
              <div
                className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                  activeSlide === 1 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDuration: "1500ms" }}
              >
                <Image
                  src="/hero-creator.jpg"
                  alt="Michael Kwesi Annor — Verified Creator with Sony 4K XDCAM and AI face recognition"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain object-center"
                />
                {/* Bottom fade — feathers the dark image into the light page */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #F5F0EB 0%, rgba(245,240,235,0.5) 40%, transparent 100%)",
                  }}
                />
                {/* Side fades to soften dark edges into light background */}
                <div
                  className="absolute inset-y-0 left-0 w-12 sm:w-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to right, #F5F0EB 0%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-12 sm:w-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to left, #F5F0EB 0%, transparent 100%)",
                  }}
                />
              </div>
            </div>

            {/* Status pills below image — switch content with each slide */}
            <div className="hidden sm:flex items-center justify-between px-6 mt-2 relative z-20">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-[11px] font-semibold text-[#0F0E0C]">
                  {activeSlide === 0 ? "Global Reach: 3 Continents" : "Michael Kwesi Annor · Verified Creator"}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-emerald-700">
                  {activeSlide === 0 ? "Open for Advisory & Ventures" : "Sony 4K · AI Vision Active"}
                </span>
              </div>
            </div>
          </div>

          {/* Trusted badge */}
          <div
            className="animate-fade-up opacity-0 delay-1000 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5 px-4 py-2 sm:py-2.5 rounded-full bg-white border border-black/[0.06] text-center shadow-xs"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-1.5">
              {[
                { icon: Globe, color: "text-blue-500" },
                { icon: Briefcase, color: "text-amber-600" },
                { icon: Rocket, color: "text-purple-500" },
                { icon: Zap, color: "text-emerald-500" },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F5F0EB] border border-black/[0.08] flex items-center justify-center shadow-xs"
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${item.color}`} />
                  </div>
                );
              })}
            </div>
            <p
              className="text-[11px] sm:text-[12px] text-[#55504A] font-medium"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Trusted by founders, angel syndicates &amp; tech enterprises worldwide.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden">
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[#6B6560] font-medium"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-[#6B6560] to-transparent" />
        </div>
      </section>

      <QuickContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
