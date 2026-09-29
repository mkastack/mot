import { ArrowUpRight, Leaf, Pill, Home, CreditCard } from "lucide-react";

const ventures = [
  {
    tag: "Green Tech · Sustainability",
    name: "Ecolift",
    icon: Leaf,
    iconColor: "#16a34a",
    accentBg: "#f0fdf4",
    accentBorder: "#bbf7d0",
    desc: "A sustainability-first platform empowering households and businesses to track, reduce, and offset their carbon footprint through intelligent energy monitoring and eco-commerce.",
    status: "Building",
    statusColor: "#16a34a",
    year: "2024",
    metrics: ["Carbon tracking", "Eco-commerce integration", "ESG reporting"],
  },
  {
    tag: "HealthTech · Pharma",
    name: "Pharmora",
    icon: Pill,
    iconColor: "#0066FF",
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
    desc: "Intelligent pharmacy management and digital prescription infrastructure built for African healthcare. Enabling licensed pharmacies to digitize stock, fulfillment, and patient records.",
    status: "In Development",
    statusColor: "#0066FF",
    year: "2024",
    metrics: ["Digital prescriptions", "Pharmacy network", "Patient records"],
  },
  {
    tag: "PropTech · Real Estate",
    name: "Dwella",
    icon: Home,
    iconColor: "#7c3aed",
    accentBg: "#faf5ff",
    accentBorder: "#ddd6fe",
    desc: "A modern property discovery and rental management platform redefining how Africans find, list, and secure housing — with smart lease management and verified listings.",
    status: "Alpha",
    statusColor: "#7c3aed",
    year: "2024",
    metrics: ["Smart lease management", "Verified listings", "Multi-city rollout"],
  },
  {
    tag: "Fintech · Payments",
    name: "DevPay Africa",
    icon: CreditCard,
    iconColor: "#ea580c",
    accentBg: "#fff7ed",
    accentBorder: "#fed7aa",
    desc: "Developer-first payment infrastructure for Africa. Simple, powerful APIs enabling any business to accept Mobile Money, cards, and bank transfers across the continent.",
    status: "High Velocity",
    statusColor: "#ea580c",
    year: "2023",
    metrics: ["MoMo + Cards + Bank", "Developer APIs", "Ghana · Nigeria · UK"],
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p
            className="text-[11px] tracking-[0.25em] uppercase text-[#0066FF] font-semibold mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Venture Portfolio · MOT
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-[36px] sm:text-[52px] font-bold leading-[1.1] text-[#0F0E0C]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Products &amp;{" "}
              <em className="italic bg-gradient-to-r from-[#0F0E0C] to-[#00A3FF] bg-clip-text text-transparent">
                strategic bets.
              </em>
            </h2>
            <a
              href="#contact"
              className="text-[13px] text-[#6B6560] hover:text-[#0F0E0C] transition-colors flex items-center gap-1.5 self-end sm:self-auto pb-1 font-medium group"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Propose a partnership or syndicate
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Ventures grid — 2×2 on desktop, 1 col mobile */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {ventures.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                id={`venture-${i}`}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-black/[0.07] p-7 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Subtle colored top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl sm:rounded-t-3xl opacity-70"
                  style={{ background: v.iconColor }}
                />

                {/* Top row — icon badge + status */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{ background: v.accentBg, borderColor: v.accentBorder }}
                  >
                    <Icon className="w-5 h-5" style={{ color: v.iconColor }} />
                  </div>

                  <span
                    className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: v.statusColor,
                      borderColor: v.statusColor + "40",
                      background: v.statusColor + "10",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: v.statusColor }}
                    />
                    {v.status}
                  </span>
                </div>

                {/* Tag */}
                <p
                  className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-1.5"
                  style={{ color: v.iconColor, fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {v.tag}
                </p>

                {/* Name */}
                <h3
                  className="text-[26px] sm:text-[30px] font-bold text-[#0F0E0C] leading-tight mb-3 group-hover:text-[#0066FF] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {v.name}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] sm:text-[14px] text-[#55504A] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {v.desc}
                </p>

                {/* Divider */}
                <div className="border-t border-black/[0.06] pt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {v.metrics.map((m, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-semibold text-[#4A4540] flex items-center gap-1"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: v.iconColor }}
                      />
                      {m}
                    </span>
                  ))}
                  <span
                    className="ml-auto text-[11px] text-[#9B9590] font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Est. {v.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
