import { Target, Zap, Globe, Users } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Target,
      color: "text-[#0066FF]",
      title: "Strategic Vision",
      desc: "Anticipating macroeconomic shifts and positioning products at high-leverage technological frontiers.",
    },
    {
      icon: Zap,
      color: "text-[#00A3FF]",
      title: "Execution Speed",
      desc: "Moving from concept to production with exceptional pace, rigorous testing, and clear accountability.",
    },
    {
      icon: Globe,
      color: "text-[#0066FF]",
      title: "Global Architecture",
      desc: "Designing resilient systems capable of handling emerging market volatility and global throughput.",
    },
    {
      icon: Users,
      color: "text-[#00A3FF]",
      title: "Executive Advisory",
      desc: "Helping startup founders and leadership teams navigate fundraising, architecture, and market expansion.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-[#F5F0EB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — large quote block */}
          <div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[#0066FF] font-semibold mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              About Mike · MikeOnTech (MOT)
            </p>
            <h2
              className="text-[34px] sm:text-[54px] font-bold leading-[1.08] text-[#0F0E0C] mb-6 sm:mb-8"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A builder at heart,{" "}
              <em className="italic bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">
                a strategist
              </em>
              <br />
              by necessity.
            </h2>
            <div
              className="space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] text-[#55504A] leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <p>
                As the founder and CEO behind MOT (MikeOnTech), I lead high-caliber engineering and venture teams dedicated to building resilient technology, high-scale digital payments, and modern enterprise software.
              </p>
              <p>
                My philosophy is grounded in first-principles: identifying deep systemic friction in emerging and global markets, and architecting elegant software systems that unlock real economic leverage.
              </p>
              <p>
                Beyond operating, I actively advise growth-stage founders, mentor engineering leaders, and invest in mission-driven ventures redefining commerce and infrastructure.
              </p>
            </div>

            {/* Stats row - mobile responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-black/[0.08]">
              {[
                { value: "7+", label: "Years Building" },
                { value: "3", label: "Continents" },
                { value: "100K+", label: "Users Impacted" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-[26px] sm:text-[36px] font-bold text-[#0F0E0C] leading-none"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[11px] sm:text-[12px] text-[#6B6560] mt-1.5 tracking-wide font-medium leading-tight"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {cards.map((card, i) => {
              const IconComp = card.icon;
              return (
                <div
                  key={i}
                  id={`about-card-${i}`}
                  className="p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default rounded-2xl border border-black/[0.08] bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center shadow-xs mb-3">
                    <IconComp className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3
                    className="text-[14px] sm:text-[15px] font-bold text-[#0F0E0C] mb-1.5"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[12px] text-[#6B6560] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-gradient-to-b from-transparent via-[#00A3FF] to-transparent rounded-full opacity-60" />
    </section>
  );
}
