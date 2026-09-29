"use client";

import {
  Code2,
  Cpu,
  Layers,
  Server,
  Database,
  Cloud,
  Terminal,
  Workflow,
  Globe2,
  Box,
  Binary,
  Radio,
  Zap,
  CreditCard,
  Container,
  Flame,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const ROW_ONE: TechItem[] = [
  { name: "TypeScript", category: "Language", icon: Code2, color: "#3178C6" },
  { name: "Next.js 15", category: "Architecture", icon: Layers, color: "#0F0E0C" },
  { name: "React 19", category: "Frontend Core", icon: Cpu, color: "#087EA4" },
  { name: "Node.js", category: "Backend Runtime", icon: Server, color: "#5FA04E" },
  { name: "Python", category: "AI & ML", icon: Binary, color: "#3776AB" },
  { name: "Go (Golang)", category: "High Concurrency", icon: Zap, color: "#00ADD8" },
  { name: "React Native", category: "Mobile Systems", icon: Radio, color: "#61DAFB" },
  { name: "Tailwind CSS", category: "Design Tokens", icon: Flame, color: "#06B6D4" },
  { name: "GraphQL", category: "Data Layer", icon: Workflow, color: "#E10098" },
  { name: "REST APIs", category: "Microservices", icon: Globe2, color: "#0066FF" },
];

const ROW_TWO: TechItem[] = [
  { name: "PostgreSQL", category: "Relational DB", icon: Database, color: "#4169E1" },
  { name: "Redis", category: "Distributed Cache", icon: Zap, color: "#DC382D" },
  { name: "AWS Cloud", category: "Infrastructure", icon: Cloud, color: "#FF9900" },
  { name: "Google Cloud", category: "Scale & Compute", icon: Cloud, color: "#4285F4" },
  { name: "Docker", category: "Containers", icon: Container, color: "#2496ED" },
  { name: "Kubernetes", category: "Orchestration", icon: Box, color: "#326CE5" },
  { name: "Stripe & MoMo", category: "Payment Rails", icon: CreditCard, color: "#635BFF" },
  { name: "Supabase", category: "Realtime Store", icon: Database, color: "#3ECF8E" },
  { name: "Terraform", category: "Infra as Code", icon: Workflow, color: "#844FBA" },
  { name: "Linux / UNIX", category: "Systems Core", icon: Terminal, color: "#18181B" },
];

function TechBadge({ item }: { item: TechItem }) {
  const IconComp = item.icon;
  return (
    <div className="flex items-center gap-2.5 px-4 py-2 shrink-0 select-none group transition-all duration-200 hover:opacity-100 opacity-80 cursor-default">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
        <IconComp className="w-4 h-4" style={{ color: item.color }} />
      </div>
      <div className="flex items-baseline gap-2">
        <span
          className="text-[14px] sm:text-[15px] font-bold text-[#0F0E0C] tracking-tight whitespace-nowrap group-hover:text-[#0066FF] transition-colors"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {item.name}
        </span>
        <span
          className="text-[10px] text-[#8A847C] uppercase tracking-wider font-medium whitespace-nowrap hidden sm:inline"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          · {item.category}
        </span>
      </div>
      <span className="text-[#C8A97E]/40 text-xs ml-3">/</span>
    </div>
  );
}

export default function TechStackMarquee() {
  const rowOneItems = [...ROW_ONE, ...ROW_ONE];
  const rowTwoItems = [...ROW_TWO, ...ROW_TWO];

  return (
    <section id="tech-stack" className="relative py-16 sm:py-24 bg-[#F5F0EB] overflow-hidden border-t border-black/[0.06]">
      {/* Background ambient accents */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #00A3FF 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B6560]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Engineering Foundation &amp; Toolchain
          </span>
        </div>

        <h2
          className="text-[28px] sm:text-[42px] font-bold text-[#0F0E0C] leading-tight tracking-tight mb-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Technologies built for{" "}
          <em className="italic bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">
            velocity and scale.
          </em>
        </h2>

        <p
          className="text-xs sm:text-sm text-[#6B6560] max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Cloud-native infrastructure, modern type systems, and financial payment rails powering MOT ventures.
        </p>
      </div>

      {/* Marquee Wrapper with edge masks that blend seamlessly with #F5F0EB */}
      <div className="marquee-container space-y-3 relative z-10">
        {/* Row 1: Scrolling Left */}
        <div className="marquee-row overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-1">
            {rowOneItems.map((item, idx) => (
              <TechBadge key={`row1-${item.name}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="marquee-row overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-1">
            {rowTwoItems.map((item, idx) => (
              <TechBadge key={`row2-${item.name}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
