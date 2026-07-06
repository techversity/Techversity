"use client";

import useInView from "@/hooks/useInView";
import Reveal from "@/components/ui/Reveal";

// tonal progression: gold -> deep gold -> wine, repeats/scales with step count
const STEP_COLORS = [
  "#C9A227", // gold
  "#B8860B", // dark gold
  "#A87C2E", // bronze-gold
  "#8B5A3C", // gold-wine transition
  "#6B3A3A", // wine-brown
  "#5C1F2E", // deep wine
];

export default function ProgramJourney({ p }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!p.journey?.length) return null;

  return (
    <section ref={ref} className="bg-ivory">
      <div className="max-w-[900px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">
                From Application to Award
              </p>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display font-semibold text-[36px] lg:text-[48px] text-wine leading-[1.08] mb-6">
              The Recognition Journey
            </h2>
            <p className="text-slate text-[15px] lg:text-[16.5px] leading-relaxed">
              {p.journeyIntro}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5 lg:gap-6">
          {p.journey.map((j, i) => {
            const color = STEP_COLORS[i % STEP_COLORS.length];
            return (
              <Reveal key={j.title} direction="up" delay={i * 110}>
                <div
                  className="group relative flex gap-6 p-6 lg:p-8 pl-7 lg:pl-9 rounded-xl bg-white transition-all duration-500 ease-out hover:-translate-y-1"
                  style={{
                    boxShadow: "0 1px 3px rgba(22,38,61,0.04)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0 20px 44px -16px ${color}33`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "0 1px 3px rgba(22,38,61,0.04)")
                  }
                >
                  {/* left border — grows in on scroll */}
                  <span
                    className="absolute left-0 top-0 w-[3px] rounded-l-xl transition-all ease-out"
                    style={{
                      background: color,
                      height: inView ? "100%" : "0%",
                      transitionDuration: "700ms",
                      transitionDelay: `${i * 110 + 150}ms`,
                    }}
                  />

                  {/* number badge */}
                  <span
                    className="relative z-10 shrink-0 w-12 h-12 lg:w-13 lg:h-13 rounded-full flex items-center justify-center font-display font-bold text-[14px] text-white transition-transform duration-400 ease-out group-hover:scale-110"
                    style={{
                      background: color,
                      transform: inView ? "scale(1)" : "scale(0)",
                      transitionDelay: `${i * 110 + 250}ms`,
                      transitionProperty: "transform",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[17px] lg:text-[18.5px] text-wine leading-snug mb-2">
                      {j.title}
                    </h3>
                    <p className="text-slate text-[13.5px] lg:text-[14px] leading-relaxed">
                      {j.desc}
                    </p>
                  </div>

                  {/* step index, top right — subtle */}
                  <span
                    className="hidden lg:block absolute top-6 right-7 font-mono text-[10px] tracking-widest uppercase transition-opacity duration-300"
                    style={{ color, opacity: 0.5 }}
                  >
                    Step {i + 1} / {p.journey.length}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}