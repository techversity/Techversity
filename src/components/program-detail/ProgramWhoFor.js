"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import {
  Rocket,
  Lightbulb,
  Briefcase,
  TrendingUp,
  BookOpen,
  Landmark,
  FlaskConical,
  HeartHandshake,
  Palette,
  Sparkles,
} from "lucide-react";

const ICON_MAP = {
  "Entrepreneurs": Rocket,
  "Founders": Lightbulb,
  "CEOs & Directors": Briefcase,
  "Business Leaders": TrendingUp,
  "Authors": BookOpen,
  "Public Servants": Landmark,
  "Researchers": FlaskConical,
  "Social Impact Leaders": HeartHandshake,
  "Artists & Creatives": Palette,
  "Industry Innovators": Sparkles,
};

export default function ProgramWhoFor({ p }) {
  if (!p.whoFor?.length) return null;
  const collage = p.whoForCollage || [];

  const mid = Math.ceil(p.whoFor.length / 2);
  const colA = p.whoFor.slice(0, mid);
  const colB = p.whoFor.slice(mid);

  return (
    <section className="relative bg-ivory overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" style={{ background: "#9A7320" }} />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#16263D 1px,transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center mb-24">
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Who It's For</p>
              </div>
              <h2 className="font-display font-semibold text-[36px] lg:text-[54px] text-wine leading-[1.02] mb-7">
                Wherever <span className="italic text-gold">extraordinary</span><br />work is done.
              </h2>
              <p className="text-slate text-[16px] lg:text-[17px] leading-relaxed max-w-md">
                {p.whoForIntro}
              </p>
            </div>
          </Reveal>

          {collage.length > 0 && (
            <Reveal direction="left" delay={120}>
              <div className="relative h-[300px] lg:h-[340px]">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 340" fill="none">
                  <path d="M 40 260 Q 140 60 220 150 T 400 70" stroke="#9A7320" strokeWidth="1.5" strokeDasharray="4 7" opacity="0.35" />
                </svg>

                {collage[0] && (
                  <div className="absolute left-2 bottom-4 w-[110px] h-[110px] lg:w-[128px] lg:h-[128px] rounded-full overflow-hidden ring-[6px] ring-ivory shadow-[0_20px_45px_-10px_rgba(22,38,61,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:z-30 hover:shadow-[0_25px_50px_-8px_rgba(154,115,32,0.4)]">
                    <Image src={collage[0].src} alt={collage[0].alt} fill sizes="128px" className="object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                )}
                {collage[1] && (
                  <div className="absolute left-[145px] top-6 w-[86px] h-[86px] lg:w-[98px] lg:h-[98px] rounded-full overflow-hidden ring-[6px] ring-ivory shadow-[0_20px_45px_-10px_rgba(22,38,61,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:z-30 hover:shadow-[0_25px_50px_-8px_rgba(154,115,32,0.4)]">
                    <Image src={collage[1].src} alt={collage[1].alt} fill sizes="98px" className="object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                )}
                {collage[2] && (
                  <div className="absolute left-[195px] bottom-10 w-[120px] h-[120px] lg:w-[138px] lg:h-[138px] rounded-full overflow-hidden ring-[6px] ring-ivory shadow-[0_20px_45px_-10px_rgba(22,38,61,0.3)] z-10 transition-all duration-500 ease-out hover:scale-110 hover:z-30 hover:shadow-[0_25px_50px_-8px_rgba(154,115,32,0.4)]">
                    <Image src={collage[2].src} alt={collage[2].alt} fill sizes="138px" className="object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                )}
                {collage[3] && (
                  <div className="absolute right-[70px] top-0 w-[92px] h-[92px] lg:w-[104px] lg:h-[104px] rounded-full overflow-hidden ring-[6px] ring-ivory shadow-[0_20px_45px_-10px_rgba(22,38,61,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:z-30 hover:shadow-[0_25px_50px_-8px_rgba(154,115,32,0.4)]">
                    <Image src={collage[3].src} alt={collage[3].alt} fill sizes="104px" className="object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                )}
                {collage[4] && (
                  <div className="absolute right-0 bottom-2 w-[104px] h-[104px] lg:w-[118px] lg:h-[118px] rounded-full overflow-hidden ring-[6px] ring-ivory shadow-[0_20px_45px_-10px_rgba(22,38,61,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:z-30 hover:shadow-[0_25px_50px_-8px_rgba(154,115,32,0.4)]">
                    <Image src={collage[4].src} alt={collage[4].alt} fill sizes="118px" className="object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                )}

                <div className="absolute -bottom-3 left-[38%] bg-wine rounded-full pl-2 pr-4 py-2 flex items-center gap-2.5 shadow-[0_15px_35px_-8px_rgba(22,38,61,0.35)] z-20">
                  <span className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-[11px] text-gold">10+</span>
                  <span className="font-mono text-[9px] uppercase tracking-wide text-white/80 whitespace-nowrap">Recognised Profiles</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-x-16">
          {[colA, colB].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {col.map((w, i) => {
                const num = colIdx === 0 ? i + 1 : mid + i + 1;
                const Icon = ICON_MAP[w.title] || Sparkles;
                return (
                  <Reveal key={w.title} direction="up" delay={i * 60}>
                    <div className="group relative flex items-baseline gap-5 py-6 border-b border-line overflow-hidden">
                      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                      <span
                        className="font-display font-semibold text-[15px] tabular-nums shrink-0 w-8 transition-all duration-300 group-hover:pl-2 group-hover:text-gold"
                        style={{ color: "#C9A04A99" }}
                      >
                        {String(num).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1.5">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Icon
                            size={15}
                            strokeWidth={1.75}
                            className="shrink-0 transition-colors duration-300"
                            style={{ color: "#9A7320" }}
                          />
                          <h3 className="font-display font-semibold text-[19px] lg:text-[21px] text-wine leading-snug transition-colors duration-300 group-hover:text-gold">
                            {w.title}
                          </h3>
                        </div>
                        <p className="text-slate text-[13.5px] leading-relaxed max-w-md">
                          {w.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}