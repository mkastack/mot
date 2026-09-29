"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import QuickContactModal from "./QuickContactModal";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          id="floating-contact-btn"
          aria-label="Contact Mike (MOT)"
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#0F0E0C] text-[#F5F0EB] rounded-full border border-white/15 shadow-2xl hover:bg-[#1A1816] hover:scale-105 active:scale-95 transition-all duration-300"
          style={{
            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 163, 255, 0.2)",
          }}
        >
          {/* Pulsing online badge */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <span
            className="text-xs font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Let&apos;s Connect
          </span>

          <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform text-[#00A3FF]">
            <MessageSquare className="w-3 h-3" />
          </span>
        </button>
      </div>

      <QuickContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
