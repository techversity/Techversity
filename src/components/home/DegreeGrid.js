"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import useInView from "@/hooks/useInView";
import { pathways } from "@/lib/degree-pathways";

const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>
  </svg>
);
const ScrollIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/>
    <path d="M19 3H8a2 2 0 0 0-2 2v12"/><path d="M11 9h6M11 13h6"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const CertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

export default function DegreeGrid() {
  // map iconKey (from lib) → local JSX icon component
  const iconMap = { book: BookIcon, briefcase: BriefcaseIcon, scroll: ScrollIcon, zap: ZapIcon, cert: CertIcon };
  const cards = pathways.map(p => ({ ...p, Icon: iconMap[p.iconKey] }));

  const [activeIdx, setActiveIdx]       = useState(0);
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.05 });
  const cardRefs  = useRef([]);
  const rafRef    = useRef(null);


  const updateActive = useCallback(() => {
    const mid = window.innerHeight / 2;
    let bestIdx  = 0;
    let bestDist = Infinity;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const dist = Math.abs(top + height / 2 - mid);
      if (dist < bestDist) { bestDist = dist; bestIdx = i; }
    });

    setActiveIdx(bestIdx);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActive);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // run once on mount so first card is set correctly
    updateActive();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateActive]);

  const active = cards[activeIdx];

  return (
    <section ref={sectionRef} className="bg-ivory-2 py-20 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* ── header ── */}
        <div style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">Degree Pathways</p>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-tight">
                Programs for Every<br />
                <span className="italic text-gold">Career Stage</span>
              </h2>
            </div>
            <p className="text-slate text-[14px] max-w-[300px] leading-relaxed lg:text-right">
              Whether you're beginning, advancing, or seeking the highest credential — there's a path built for you.
            </p>
          </div>
        </div>

        {/* ── sticky left + scrolling right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-start">

          {/* ══ LEFT — sticky ══ */}
          <div className="hidden lg:block sticky top-[84px]">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {/* crossfade image stack */}
              <div className="relative h-[420px]">
                {cards.map((card, i) => (
                  <Image
                    key={i}
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    style={{
                      opacity: activeIdx === i ? 1 : 0,
                      transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1)",
                      zIndex: activeIdx === i ? 1 : 0,
                    }}
                    sizes="55vw"
                    priority={i === 0}
                  />
                ))}

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040F1C] via-[#0B2545]/80 to-[#16263D]/35 z-10" />
                <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle,#D9A441 1px,transparent 1px)", backgroundSize: "24px 24px" }}
                />

                {/* dynamic overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      key={`lv-${activeIdx}`}
                      className="font-mono text-[9px] uppercase tracking-[3px] text-gold/80"
                      style={{ animation: "fadeUpIn 0.3s ease forwards" }}
                    >
                      {active.level}
                    </span>
                    <span className="h-px flex-1 bg-gold/20" />
                    <span className="font-mono text-[9px] uppercase tracking-[2px] text-white/35">
                      {active.num} / 04
                    </span>
                  </div>

                  <h3
                    key={`tt-${activeIdx}`}
                    className="font-display font-semibold text-[34px] text-white leading-[1.05] mb-3"
                    style={{ animation: "fadeUpIn 0.38s ease forwards" }}
                  >
                    {active.title}
                  </h3>

                  <div
                    key={`tg-${activeIdx}`}
                    className="flex flex-wrap gap-2 mb-6"
                    style={{ animation: "fadeUpIn 0.46s ease forwards" }}
                  >
                    {active.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-wider text-gold border border-gold/30 bg-gold/10 px-2.5 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-deep text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-all duration-200 w-fit"
                  >
                    Explore {active.level}
                    <svg className="group-hover:translate-x-1 transition-transform" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* dot nav */}
              <div className="bg-[#0B2545] px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      aria-label={`Go to ${cards[i].title}`}
                    >
                      <span className={`block rounded-full transition-all duration-300
                        ${activeIdx === i ? "w-7 h-2 bg-gold" : "w-2 h-2 bg-white/20 hover:bg-white/45"}`}
                      />
                    </button>
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">
                  {String(activeIdx + 1).padStart(2, "0")} of 04
                </span>
              </div>
            </div>
          </div>

          {/* ══ RIGHT — cards ══ */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={card.title}
                ref={el => { cardRefs.current[i] = el; }}
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transform: sectionVisible ? "translateX(0)" : "translateX(40px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: `${100 + i * 100}ms`,
                }}
              >
                <Link
                  href={card.href}
                  className={`group relative flex flex-col gap-4 rounded-2xl border p-7 overflow-hidden
                    transition-all duration-300
                    ${activeIdx === i
                      ? "bg-white border-gold/35 shadow-[0_8px_32px_rgba(154,115,32,0.11)]"
                      : "bg-white/65 border-line hover:bg-white hover:border-gold/20 hover:shadow-md"
                    }`}
                >
                  {/* gold left bar */}
                  <span className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold to-gold-deep rounded-l-2xl
                    transition-all duration-300
                    ${activeIdx === i ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                  />

                  {/* top: icon + title + ghost num */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-250
                        ${activeIdx === i
                          ? card.prime ? "bg-gold text-white" : "bg-wine text-white"
                          : card.prime ? "bg-gold-light text-gold group-hover:bg-gold group-hover:text-white"
                                       : "bg-ivory-2 text-wine group-hover:bg-wine group-hover:text-white"
                        }`}
                      >
                        <card.Icon />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-mono text-[8.5px] uppercase tracking-[2px] text-mist">{card.level}</p>
                          {card.prime && (
                            <span className="font-mono text-[7.5px] uppercase tracking-wider text-gold border border-gold/40 px-1.5 py-0.5 rounded-sm leading-none">
                              Top Pick
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-semibold text-[21px] leading-snug text-wine group-hover:text-gold transition-colors duration-200">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`font-display font-bold text-[38px] leading-none select-none transition-all duration-300
                      ${activeIdx === i ? "text-gold/20" : "text-wine/[0.07]"}`}>
                      {card.num}
                    </span>
                  </div>

                  {/* desc */}
                  <p className="text-[13px] text-slate leading-relaxed">{card.desc}</p>

                  {/* detail line — slides in when active */}
                  <div className={`overflow-hidden transition-all duration-400 ease-in-out
                    ${activeIdx === i ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-[12px] text-mist leading-relaxed italic">{card.detail}</p>
                  </div>

                  {/* tags + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-line">
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map(tag => (
                        <span key={tag} className={`font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded-sm border transition-colors duration-200
                          ${activeIdx === i && card.prime
                            ? "text-gold border-gold/30 bg-gold/5"
                            : "text-mist border-line bg-ivory"
                          }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center gap-1.5 font-semibold text-[12px] transition-colors duration-200
                      ${activeIdx === i ? "text-gold" : "text-wine/50 group-hover:text-wine"}`}>
                      Explore
                      <svg className="group-hover:translate-x-1 transition-transform duration-200" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}