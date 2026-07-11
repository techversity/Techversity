"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ProgramCeremony({ p }) {
  const images = p?.ceremonyImages;
  if (!images?.length) return null;

  return (
    <section className="relative bg-wine overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-[160px] opacity-[0.15] pointer-events-none"
        style={{ background: "#9A7320" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.08] pointer-events-none"
        style={{ background: "#9A7320" }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
          {/* left — text */}
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">The Conferral Moment</p>
              </div>
              <h2 className="font-display font-semibold text-[30px] lg:text-[46px] text-white leading-[1.08] mb-6">
                A ceremony worthy of the distinction.
              </h2>
              <p className="text-white/60 text-[15px] lg:text-[16px] leading-relaxed mb-9 max-w-md">
                {p?.ceremonyIntro ||
                  "Every honorary conferral is formally marked — through an in-person convocation or a dedicated virtual ceremony — presided over by the conferring institution."}
              </p>

              <div className="flex items-center gap-4 mb-10">
                <span className="w-11 h-11 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: "rgba(201,160,74,0.4)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A04A" strokeWidth="1.6">
                    <path d="M12 3L2 8l10 5 10-5-10-5z" />
                    <path d="M6 10.5V16c0 1 2.5 3 6 3s6-2 6-3v-5.5" />
                  </svg>
                </span>
                <p className="text-white/70 text-[13px] leading-snug max-w-[220px]">
                  In-person or virtual — the choice is yours, the recognition is the same.
                </p>
              </div>

              {/* fills the empty space, ties in the badge concept properly this time */}
              <div className="inline-flex items-center gap-3 pl-1 pr-5 py-1 rounded-full border" style={{ borderColor: "rgba(201,160,74,0.3)" }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#9A7320" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
                    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
                  </svg>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-gold">
                  Formally Conferred
                </span>
              </div>
            </div>
          </Reveal>

          {/* right — layered photo composition (desktop) / simple grid (mobile) */}
          <Reveal direction="left" delay={120}>
            {/* mobile — simple 2-col grid, no overlap risk */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {images.slice(0, 4).map((img, i) => (
                <div key={i} className="relative h-[150px] rounded-xl overflow-hidden shadow-[0_12px_28px_-8px_rgba(0,0,0,0.4)]">
                  <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
                </div>
              ))}
            </div>

            {/* desktop — artistic layered collage */}
            <div className="relative h-[400px] lg:h-[480px] hidden lg:block">
              {images[0] && (
                <div className="absolute top-0 left-0 w-[62%] h-[64%] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                  <Image src={images[0].src} alt={images[0].alt} fill sizes="380px" className="object-cover" />
                  <span className="absolute top-3 left-3 w-6 h-6 border-t border-l pointer-events-none" style={{ borderColor: "#C9A04A", opacity: 0.85 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              {images[1] && (
                <div className="absolute top-0 right-0 w-[34%] h-[48%] rounded-xl overflow-hidden ring-4 ring-wine shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)]">
                  <Image src={images[1].src} alt={images[1].alt} fill sizes="200px" className="object-cover" />
                </div>
              )}

              {images[2] && (
                <div className="absolute bottom-0 left-[10%] w-[36%] h-[40%] rounded-xl overflow-hidden ring-4 ring-wine shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)]">
                  <Image src={images[2].src} alt={images[2].alt} fill sizes="220px" className="object-cover" />
                </div>
              )}

              {images[3] && (
                <div className="absolute bottom-3 right-0 w-[42%] h-[46%] rounded-xl overflow-hidden ring-4 ring-wine shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] z-10">
                  <Image src={images[3].src} alt={images[3].alt} fill sizes="230px" className="object-cover" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}