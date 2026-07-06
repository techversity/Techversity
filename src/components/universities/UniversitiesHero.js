"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { universities } from "@/lib/universities";
import { flagUrl } from "@/lib/flag";

const slides = universities.map((u) => ({
  src: u.buildingImage,
  name: u.name,
  country: u.country,
  founded: u.founded,
}));

export default function UniversitiesHero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((current) => {
        setPrev(current);
        return (current + 1) % slides.length;
      });
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  const current = slides[active];

  return (
    <section
      className="bg-wine relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh" }}
    >
      {/* ── slideshow: each frame slides in left → right ── */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => {
          const isActive = i === active;
          const isPrev = i === prev;
          let transform = "translateX(-100%)";
          if (isActive) transform = "translateX(0%)";
          else if (isPrev) transform = "translateX(100%)";

          return (
            <div
              key={s.src}
              className="absolute inset-0"
              style={{
                transform,
                transition:
                  isActive || isPrev
                    ? "transform 1100ms cubic-bezier(0.65,0,0.35,1)"
                    : "none",
              }}
            >
              <Image
                src={s.src}
                alt={s.name}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* legibility gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(12,22,38,0.85) 0%, rgba(12,22,38,0.62) 34%, rgba(12,22,38,0.24) 60%, rgba(12,22,38,0.06) 82%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(12,22,38,0.5), transparent)",
        }}
      />

      {/* ── content ── */}
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-24 lg:py-32 relative z-10 w-full">
        <div className="flex items-center gap-3 mb-6">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">
            Global Partners
          </p>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-white/45">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
        </div>

        <h1 className="font-display font-semibold text-[38px] lg:text-[62px] text-white leading-[1.05] max-w-2xl mb-6">
          10+ institutions.
          <br />
          One <span className="italic text-gold">standard of scrutiny.</span>
        </h1>

        <p className="text-white/65 text-[16px] lg:text-[17px] max-w-xl leading-relaxed mb-10">
          Every university we work with is reviewed before we introduce a single
          candidate. All partners offer every doctoral pathway — PhD, DBA, and
          Honorary Doctorate.
        </p>

        {/* dynamic "now viewing" card — syncs with the active slide */}
        <div
          key={active}
          className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-5 py-4 mb-10"
          style={{ animation: "uniHeroFadeUp 0.6s ease both" }}
        >
          <span className="relative w-9 h-6 rounded-[4px] overflow-hidden ring-1 ring-white/30 shrink-0">
            <Image src={flagUrl(current.country)} alt={current.country} fill className="object-cover" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wide text-white/45 mb-0.5">
              Now Viewing
            </p>
            <p className="font-display font-semibold text-[15px] text-white leading-tight">
              {current.name}{" "}
              <span className="text-white/40 font-normal">· Est. {current.founded}</span>
            </p>
          </div>
        </div>

        {/* progress dashes — also act as manual navigation */}
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => goTo(i)}
              aria-label={`Show ${s.name}`}
              className="py-2 -my-2 px-0.5"
            >
              <span
                className="block rounded-full transition-all duration-500"
                style={{
                  width: i === active ? "26px" : "8px",
                  height: "3px",
                  background: i === active ? "#C9A04A" : "rgba(255,255,255,0.25)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes uniHeroFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}