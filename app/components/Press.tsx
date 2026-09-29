export default function Press() {
  const features = [
    {
      publication: "TechCabal",
      quote:
        "Mike (MikeOnTech) is redefining what scalable software and payments infrastructure look like across emerging frontiers.",
      date: "March 2024",
    },
    {
      publication: "Forbes Africa",
      quote:
        "A founder and CEO who doesn't just ride tech waves — he engineers the foundational systems that allow them to compound.",
      date: "Jan 2024",
    },
    {
      publication: "Disrupt Africa",
      quote:
        "Ciphexo Pay and MOT's ecosystem solve visceral bottlenecks for real merchants. Mike is an operator to watch.",
      date: "Nov 2023",
    },
  ];

  const timeline = [
    { year: "2021", event: "Inaugurated first venture core with an agile team of engineers" },
    { year: "2022", event: "Secured venture seed financing, expanded enterprise footprint" },
    { year: "2023", event: "Launched Ciphexo Pay, crossed 10K active merchant terminals" },
    { year: "2024", event: "Established MOT Labs, recognized in Top Tech Executives Under 30" },
    { year: "2025", event: "Expanding cross-continental operations & initiating Series A" },
  ];

  return (
    <section id="press" className="relative py-32 px-6 bg-[#EDE7DF]">
      <div className="max-w-7xl mx-auto">
        {/* Press */}
        <div className="mb-24">
          <p
            className="text-[11px] tracking-[0.25em] uppercase text-[#0066FF] font-semibold mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Media Recognition &amp; Commentary
          </p>
          <h2
            className="text-[40px] sm:text-[52px] font-bold leading-[1.1] text-[#0F0E0C] mb-12"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What the industry{" "}
            <em className="italic bg-gradient-to-r from-[#0F0E0C] to-[#00A3FF] bg-clip-text text-transparent">
              is saying.
            </em>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                id={`press-${i}`}
                className="p-8 flex flex-col justify-between min-h-[220px] rounded-3xl border border-black/[0.08] bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <p
                    className="text-[18px] font-bold text-[#0F0E0C] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.publication}
                  </p>
                  <p
                    className="text-[13px] text-[#55504A] leading-6 mt-3 italic"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <p
                  className="text-[11px] text-[#0066FF] font-semibold mt-4 tracking-wide"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <p
            className="text-[11px] tracking-[0.25em] uppercase text-[#0066FF] font-semibold mb-8"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Executive Timeline · Journey
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0066FF] via-[#0066FF]/30 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  id={`timeline-${i}`}
                  className="flex items-center gap-8"
                >
                  <span
                    className="text-[13px] font-bold text-[#0066FF] w-14 shrink-0 text-right"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.year}
                  </span>
                  <div className="relative z-10 w-3 h-3 rounded-full border-2 border-[#0066FF] bg-[#EDE7DF] shrink-0 hidden sm:block" />
                  <p
                    className="text-[15px] text-[#0F0E0C] leading-6 font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
