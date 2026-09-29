export default function Vision() {
  const pillars = [
    {
      number: "01",
      title: "Resilient Engineering",
      desc: "Architecting software that thrives under adverse market conditions, variable connectivity, and high concurrency without degradation.",
    },
    {
      number: "02",
      title: "Frontier Market Leverage",
      desc: "Rather than transplanting Silicon Valley assumptions, building native systems customized for the economic reality of emerging continents.",
    },
    {
      number: "03",
      title: "Compounding Growth",
      desc: "Prioritizing strong unit economics and durable network effects over vanity metrics. Building ventures engineered to stand for decades.",
    },
    {
      number: "04",
      title: "Radical Candor & Speed",
      desc: "Direct communication, swift feedback loops, and relentless bias for shipping. Ideas are cheap; exceptional execution is everything.",
    },
  ];

  return (
    <section id="vision" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#EDE7DF]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[#0066FF] font-semibold mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              The Operating Creed · MOT
            </p>
            <h2
              className="text-[40px] sm:text-[52px] font-bold leading-[1.1] text-[#0F0E0C] max-w-md"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What we
              <br />
              <em className="italic bg-gradient-to-r from-[#0F0E0C] to-[#00A3FF] bg-clip-text text-transparent">
                stand for.
              </em>
            </h2>
          </div>
          <p
            className="text-[14px] text-[#55504A] leading-6 max-w-xs font-normal"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Four core principles that guide every venture build, engineering decision, and advisory partnership at MOT (MikeOnTech).
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] rounded-3xl overflow-hidden shadow-sm">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              id={`vision-pillar-${i}`}
              className="bg-[#EDE7DF] p-8 sm:p-10 hover:bg-[#F5F0EB] transition-colors duration-300 group cursor-default"
            >
              <p
                className="text-[12px] tracking-[0.2em] text-[#0066FF] mb-6 font-bold"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {pillar.number}
              </p>
              <h3
                className="text-[20px] font-bold text-[#0F0E0C] mb-3 leading-snug group-hover:text-[#0066FF] transition-colors"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-[13px] text-[#6B6560] leading-6"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
