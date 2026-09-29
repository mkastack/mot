"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import QuickContactModal from "./QuickContactModal";

const NAV_LINKS = [
  { label: "About", href: "/#about", path: "/about" },
  { label: "Ventures", href: "/#ventures", path: "/features" },
  { label: "Vision", href: "/#vision", path: "/how-it-works" },
  { label: "Stack", href: "/#tech-stack", path: "/integrations" },
  { label: "Press", href: "/#press", path: "/press" },
  { label: "Contact", href: "/#contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (item: typeof NAV_LINKS[0]) => {
    if (pathname === item.path) return true;
    if (pathname === "/" && item.href.startsWith("/#")) return false;
    return false;
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 sm:py-2.5 bg-[#F5F0EB]/90 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
            : "py-3.5 sm:py-5 bg-transparent"
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Logo & Executive Badge */}
          <Link
            href="/"
            id="nav-logo"
            className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
            aria-label="MikeOnTech (MOT) Home"
          >
            <div className="relative h-8 sm:h-10 w-auto flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/mot-logo-tight.png"
                alt="MikeOnTech - MOT Logo"
                width={130}
                height={70}
                priority
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col pl-3 border-l border-black/10 text-left">
              <span
                className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0F0E0C] leading-tight"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Executive Portfolio
              </span>
              <span
                className="text-[10px] text-[#6B6560] tracking-wider"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Founder &amp; CEO
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/75 border border-black/[0.07] backdrop-blur-md shadow-xs"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  isActive(item)
                    ? "text-[#0F0E0C] bg-black/[0.07] shadow-xs"
                    : "text-[#2A2825]/70 hover:text-[#0F0E0C] hover:bg-black/[0.04]"
                }`}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Availability status tag (desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span
                className="text-[11px] font-medium text-[#2A2825]/75 tracking-tight"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Available for Advisory
              </span>
            </div>

            {/* Quick Contact CTA */}
            <button
              onClick={() => setContactOpen(true)}
              id="nav-connect-btn"
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-xs sm:text-[13px] font-semibold hover:bg-[#2A2825] transition-all duration-300 hover:scale-[1.02] shadow-xs group"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00A3FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/[0.04] hover:bg-black/[0.08] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[#0F0E0C]" />
              ) : (
                <Menu className="w-5 h-5 text-[#0F0E0C]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-[#F5F0EB]/98 backdrop-blur-2xl pt-20 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-fade-in"
        >
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-black/[0.08]">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/mot-logo-tight.png"
                  alt="MOT Logo"
                  width={100}
                  height={52}
                  className="h-7 w-auto object-contain"
                />
                <span className="text-[11px] text-[#6B6560] font-medium">Founder &amp; CEO Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[26px] xs:text-[30px] font-bold py-2.5 text-[#0F0E0C] hover:text-[#0066FF] transition-colors flex items-center justify-between border-b border-black/[0.04]"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-black/[0.08] space-y-3.5">
            <button
              onClick={() => {
                setMobileOpen(false);
                setContactOpen(true);
              }}
              className="w-full py-3.5 bg-[#0F0E0C] text-[#F5F0EB] rounded-2xl text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span>Instant Contact / Message</span>
              <Mail className="w-4 h-4 text-[#00A3FF]" />
            </button>

            <div className="flex items-center justify-between text-xs text-[#6B6560] pt-1">
              <span>contact@mikeontech.com</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0F0E0C] font-semibold flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quick Contact Modal */}
      <QuickContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
