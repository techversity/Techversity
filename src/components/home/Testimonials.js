"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import useInView from "@/hooks/useInView";
import Image from "next/image";
import { testimonials, programColors } from "@/lib/alumni";

export default function Testimonials() {
  const [sectionRef, inView] = useInView({ threshold: 0.08 });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((i) => {
    if (animating) return;
    setDir(i > active ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setTimeout(() => setAnimating(false), 50);
    }, 250);
  }, [active, animating]);

  const next = useCallback(() => go((active + 1) % testimonials.length), [active, go]);
  const prev = useCallback(() => go((active - 1 + testimonials.length) % testimonials.length), [active, go]);

  // auto-advance
  useEffect(() => {
    if (!inView) return;
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [inView, next]);

  const resetTimer = (i) => {
    clearInterval(timerRef.current);
    go(i);
    timerRef.current = setInterval(next, 5500);
  };

  const t = testimonials[active];
  const pc = programColors[t.program] || { bg: "#F6EEDB", text: "#9A7320" };

  return (
    <section ref={sectionRef} className="bg-ivory py-20 lg:py-28 border-b border-line overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* header */}
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Success Stories</p>
          <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-tight">
            Words from those who<br className="hidden sm:block" />
            <span className="italic text-gold">walked the path.</span>
          </h2>
        </div>

        {/* testimonial card */}
        <div
          className="relative"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
        >
          {/* arrows — desktop */}
          <button
            onClick={() => resetTimer((active - 1 + testimonials.length) % testimonials.length)}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-line items-center justify-center text-mist hover:text-wine hover:border-wine transition-all duration-200 z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={() => resetTimer((active + 1) % testimonials.length)}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-line items-center justify-center text-mist hover:text-wine hover:border-wine transition-all duration-200 z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>

          {/* main card */}
          <div className="bg-white rounded-3xl border border-line overflow-hidden shadow-[0_12px_48px_rgba(22,38,61,0.07)]">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

              {/* left: photo */}
              <div className="relative h-[280px] lg:h-auto lg:min-h-[420px]">
                {testimonials.map((person, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? "scale(1)" : "scale(1.08)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      zIndex: active === i ? 2 : 1,
                    }}
                  >
                    <Image src={person.testimonialPhoto} alt={person.name} fill className="object-cover object-top" sizes="340px" />
                  </div>
                ))}
                {/* gradient overlay */}
                <div className="absolute inset-0 z-10"
                  style={{ background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.06) 100%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 lg:hidden" />

                {/* mobile: name on photo */}
                <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                  <div className="font-display font-semibold text-white text-lg">{t.name}</div>
                  <div className="text-white/70 text-[12px]">{t.role}</div>
                </div>
              </div>

              {/* right: quote + info */}
              <div className="relative p-7 lg:p-10 flex flex-col justify-center">
                {/* decorative quote mark */}
                <span className="font-display text-[72px] lg:text-[96px] leading-none text-gold/15 font-bold select-none absolute top-4 lg:top-6 left-7 lg:left-10">
                  "
                </span>

                {/* animated quote */}
                <div className="relative min-h-[180px] lg:min-h-[200px] mt-8 lg:mt-10">
                  {testimonials.map((person, i) => (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        opacity: active === i ? 1 : 0,
                        transform: active === i ? "translateY(0)" : `translateY(${i > active ? 16 : -16}px)`,
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                        pointerEvents: active === i ? "auto" : "none",
                      }}
                    >
                      <p className="font-display italic text-[20px] lg:text-[26px] text-wine leading-[1.45] mb-6">
                        {person.quote}
                      </p>

                      {/* program badge */}
                      <span
                        className="inline-block font-mono text-[10px] uppercase tracking-[2px] font-semibold px-3.5 py-1.5 rounded-full"
                        style={{ background: (programColors[person.program] || pc).bg, color: (programColors[person.program] || pc).text }}
                      >
                        {person.credential}
                      </span>
                    </div>
                  ))}
                </div>

                {/* person info — desktop */}
                <div className="hidden lg:flex items-center justify-between mt-auto pt-6 border-t border-line">
                  <div className="flex items-center gap-4">
                    {/* mini avatar */}
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold/30 relative">
                      <Image src={t.testimonialPhoto} alt={t.name} fill className="object-cover object-top" sizes="44px" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[16px] text-wine">{t.name}</div>
                      <div className="text-[12px] text-slate">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[9px] text-mist uppercase tracking-wider">{t.country}</div>
                    <div className="font-mono text-[9px] text-mist mt-0.5">{t.university}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* dots + mobile arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* mobile prev */}
            <button
              onClick={() => resetTimer((active - 1 + testimonials.length) % testimonials.length)}
              className="lg:hidden w-10 h-10 rounded-full border border-line flex items-center justify-center text-mist"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>

            {/* dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => resetTimer(i)}>
                  <span
                    className="block rounded-full transition-all duration-400"
                    style={{
                      width: active === i ? "28px" : "8px",
                      height: "8px",
                      background: active === i ? "#9A7320" : "#E0DCCF",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* mobile next */}
            <button
              onClick={() => resetTimer((active + 1) % testimonials.length)}
              className="lg:hidden w-10 h-10 rounded-full border border-line flex items-center justify-center text-mist"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}