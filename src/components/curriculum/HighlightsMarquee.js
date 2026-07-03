"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function HighlightsMarquee({ highlights, accent }) {
  return (
    <section className="bg-white border-y border-line overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Why Join This Program</p>
            <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">
              Everything that makes this different.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <Reveal key={h.title} direction="up" delay={(i % 3) * 90}>
              <div className="group relative rounded-2xl border border-line overflow-hidden bg-ivory h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(22,38,61,0.12)]">
                {h.img && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={h.img}
                      alt={h.title}
                      fill
                      sizes="380px"
                      className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-110 group-hover:translate-x-2"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${accent}22, rgba(11,18,30,.5))` }} />
                    <span className="absolute top-4 left-4 font-display font-bold text-white/90 text-[15px]">0{i + 1}</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-[18px] text-wine leading-tight mb-2">{h.title}</h3>
                  <p className="text-slate text-[13.5px] leading-relaxed">{h.desc}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}