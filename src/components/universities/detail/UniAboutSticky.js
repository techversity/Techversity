"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function UniAboutSticky({ d }) {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
          {/* STICKY image — stays pinned while text scrolls beside it */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              className="relative rounded-[18px] overflow-hidden aspect-[16/12]"
              style={{ boxShadow: "0 26px 64px rgba(22,38,61,0.22)" }}
            >
              <Image src={d.aboutImage} alt={d.name} fill sizes="620px" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent 55%)" }} />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-white/65 mb-1">Since {d.founded}</p>
                  <p className="font-display text-[20px] text-white font-semibold leading-tight">{d.name}</p>
                </div>
                <span className="text-[24px] shrink-0">{d.flag}</span>
              </div>
            </div>
          </div>

          {/* SCROLLING text */}
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">About the University</p>
            </div>

            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08] mb-9">
              An education<br />without borders.
            </h2>

            <div className="space-y-7">
              {d.about.map((para, i) => (
                <Reveal key={i} direction="up" delay={i * 60}>
                  <p
                    className={`text-slate leading-[1.95] ${
                      i === 0
                        ? "text-[17px] lg:text-[19px] text-wine/90 font-medium"
                        : "text-[15px] lg:text-[16px]"
                    }`}
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* pull-quote */}
            <Reveal direction="up" delay={80}>
              <div className="mt-10 pl-6 border-l-2" style={{ borderColor: "#9A7320" }}>
                <p className="font-display italic text-[18px] lg:text-[21px] text-wine leading-snug">
                  &ldquo;{d.motto}&rdquo;
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mt-2">
                  {d.shortName} &middot; Guiding Motto
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}