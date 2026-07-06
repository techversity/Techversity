"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ProgramWhyMatters({ p }) {
  if (!p.whyMatters?.length) return null;
  const [active, setActive] = useState(0);
  const total = p.whyMatters.length;

  return (
    <section className="relative bg-wine">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full blur-[160px] opacity-15" style={{ background: "#9A7320" }} />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="max-w-2xl mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Why It Matters</p>
            </div>
            <h2 className="font-display font-semibold text-[30px] lg:text-[46px] text-white leading-[1.06] mb-6">
              The value is in <span className="italic text-gold">what it enables.</span>
            </h2>
            <p className="text-white/60 text-[15px] lg:text-[16.5px] leading-relaxed">{p.whyMattersIntro}</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* left — sticky image panel, changes with hover. Kept OUTSIDE Reveal on purpose:
              Reveal's wrapper div carries a CSS `transform` (even translate-x-0), and any
              ancestor with a transform becomes a new containing block for position:sticky/fixed
              descendants — that's exactly what was breaking the sticky behaviour before. */}
          <div className="hidden lg:block lg:sticky lg:top-28 self-start relative rounded-[20px] overflow-hidden aspect-[4/5] ring-1 ring-white/10" style={{ boxShadow: "0 40px 90px -20px rgba(0,0,0,0.5)" }}>
            <Image
              key={p.whyMatters[active].image}
              src={p.whyMatters[active].image}
              alt={p.whyMatters[active].title}
              fill
              sizes="420px"
              className="object-cover"
              style={{ objectPosition: p.whyMatters[active].imagePosition || "center" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.9) 0%, rgba(12,22,38,0.15) 55%, transparent 75%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="font-mono text-[9px] uppercase tracking-[2px] text-gold/80">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-[23px] text-white leading-snug mt-2">{p.whyMatters[active].title}</h3>
            </div>
          </div>


          {/* right — editorial numbered list, no boxes */}
          <div className="flex flex-col">
            {p.whyMatters.map((m, i) => {
              const isActive = active === i;
              return (
                <Reveal key={m.title} direction="up" delay={i * 40}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group w-full text-left appearance-none bg-transparent relative flex items-start gap-6 pl-7 lg:pl-8 py-7 lg:py-8 border-b border-white/10 cursor-pointer"
                  >
                    <span
                      className="absolute left-0 top-1 bottom-1 w-[2px] bg-gold origin-top transition-transform duration-500 ease-out"
                      style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)" }}
                    />

                    {/* mobile-only thumbnail — since sticky panel is hidden below lg */}
                    <div className="lg:hidden shrink-0 relative w-14 h-14 rounded-lg overflow-hidden ring-1 ring-white/10">
                      <Image src={m.image} alt={m.title} fill sizes="56px" className="object-cover" style={{ objectPosition: m.imagePosition || "center" }} />
                    </div>

                    <span
                      className="hidden lg:inline font-display font-semibold text-[15px] tabular-nums shrink-0 w-8 pt-0.5 transition-colors duration-300"
                      style={{ color: isActive ? "#C9A04A" : "rgba(201,160,74,0.4)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-display font-semibold text-[18px] lg:text-[21px] leading-snug mb-1.5 transition-colors duration-300"
                        style={{ color: isActive ? "#C9A04A" : "#fff" }}
                      >
                        {m.title}
                      </h3>
                      {/* description: always visible on mobile, reveal-on-active on desktop */}
                      <p className="lg:hidden text-white/50 text-[13px] leading-relaxed">{m.desc}</p>
                      <p
                        className="hidden lg:block text-white/50 text-[13.5px] leading-relaxed max-w-2xl overflow-hidden transition-all duration-400 ease-out"
                        style={{ maxHeight: isActive ? "80px" : "0px", opacity: isActive ? 1 : 0 }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}