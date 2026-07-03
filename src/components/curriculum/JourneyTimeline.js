"use client";

import Reveal from "@/components/ui/Reveal";

export default function JourneyTimeline({ journey, accent, weeksLabel }) {
  return (
    <section id="journey" className="scroll-mt-24 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Your Learning Journey</p>
            <h2 className="font-display font-semibold text-[30px] lg:text-[42px] text-wine leading-[1.1]">
              {weeksLabel ? `Your ${weeksLabel} journey` : "Your journey"} — <span style={{ color: accent }}>from foundation to mastery.</span>
            </h2>
          </div>
        </Reveal>

        {/* serpentine layout: left/right alternating with connecting spine */}
        <div className="relative">
          {/* center dashed spine (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px border-l-2 border-dashed" style={{ borderColor: `${accent}40` }} />

          <div className="space-y-6 lg:space-y-0">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <div key={j.n} className="lg:grid lg:grid-cols-2 lg:gap-0 relative lg:min-h-[150px] items-center">
                  {/* node dot on spine */}
                  <span className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full border-4 border-ivory" style={{ background: accent }} />

                  {/* card */}
                  <div className={left ? "lg:col-start-1 lg:pr-14" : "lg:col-start-2 lg:pl-14"}>
                    <Reveal direction={left ? "right" : "left"} delay={80}>
                      <div className="group relative rounded-2xl border bg-white p-6 lg:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(22,38,61,0.1)]"
                        style={{ borderColor: `${accent}30` }}>
                        <div className="flex items-start gap-4">
                          <span className="font-display font-bold text-[30px] leading-none shrink-0" style={{ color: accent }}>{j.n}</span>
                          <div>
                            <h3 className="font-display font-semibold text-[18px] lg:text-[20px] text-wine leading-tight mb-2">{j.phase}</h3>
                            <p className="text-slate text-[13.5px] leading-relaxed">{j.desc}</p>
                          </div>
                        </div>
                        <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }} />
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}