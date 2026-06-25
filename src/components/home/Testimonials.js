"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    quote: "The credential changed how boardrooms receive me. I walked in as Dr. Sharma — the room felt it immediately. Fifteen years of work, finally recognised with the title it deserved.",
    name: "Rajesh Sharma",
    credential: "Doctor of Business Administration",
    role: "CEO, InfraVision India",
    university: "ESDST, Switzerland",
    country: "🇮🇳 India",
    program: "DBA",
    img: "https://images.unsplash.com/photo-1758691737644-ef8be18256c3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "I was sceptical — every 'online doctorate' felt like a shortcut. Techversity showed me the actual accreditation documents before I paid a single rupee. That transparency closed it for me.",
    name: "Priya Nair",
    credential: "Honorary Doctorate",
    role: "Managing Director, FinEdge Group",
    university: "Kennedy University",
    country: "🇦🇪 UAE",
    program: "Honorary",
    img: "https://plus.unsplash.com/premium_photo-1682430145886-39c8decd85fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "My advisor didn't disappear after enrolment. She was there through every document, every delay, every question. I have never experienced that level of support from any institution.",
    name: "Amir Al-Rashid",
    credential: "PhD, Business Administration",
    role: "VP Strategy, Gulf Capital Partners",
    university: "EU Global, Malta",
    country: "🇸🇦 Saudi Arabia",
    program: "PhD",
    img: "https://images.unsplash.com/photo-1758599543230-652cc6831d69?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Within three months of the DBA, I received two international speaking invitations I had been chasing for years. The 'Dr.' prefix opens conversations that simply would not have happened otherwise.",
    name: "Chukwuemeka Obi",
    credential: "Doctor of Business Administration",
    role: "Founder, NovaTech Africa",
    university: "American Management University",
    country: "🇳🇬 Nigeria",
    program: "DBA",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
];

const programColors = {
  DBA:      { bg: "#EFF6FF", text: "#2563EB" },
  Honorary: { bg: "#F6EEDB", text: "#9A7320" },
  PhD:      { bg: "#F5F3FF", text: "#7C3AED" },
};

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return v;
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const [active, setActive] = useState(0);
  const [imgKey, setImgKey] = useState(0);
  const [quoteKey, setQuoteKey] = useState(0);
  const timer = useRef(null);

  const goTo = useCallback((i) => {
    setActive(i);
    setImgKey(k => k + 1);
    setQuoteKey(k => k + 1);
  }, []);

  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);

  useEffect(() => {
    if (!inView) return;
    timer.current = setInterval(next, 5000);
    return () => clearInterval(timer.current);
  }, [inView, next]);

  const resetGo = (i) => {
    clearInterval(timer.current);
    goTo(i);
    timer.current = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length);
      setImgKey(k => k + 1);
      setQuoteKey(k => k + 1);
    }, 5000);
  };

  const t = testimonials[active];
  const pc = programColors[t.program] || programColors.DBA;

  return (
    <section ref={sectionRef} className="bg-ivory py-20 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* section label */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          className="flex items-center gap-4 mb-12">
          <span className="h-px w-10 bg-gold/50" />
          <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold">Alumni Stories</p>
        </div>

        {/* main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-14 items-start">

          {/* ── LEFT: editorial photo ── */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>

            {/* photo */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "500px" }}>
              <div key={imgKey} style={{ animation: "imgFadeIn 0.7s ease forwards", height: "100%" }}>
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                  sizes="420px"
                />
              </div>
              {/* bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent" />

              {/* name overlay on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display font-semibold text-[22px] text-white leading-snug">{t.name}</p>
                    <p className="text-white/60 text-[12px] mt-0.5">{t.role}</p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1.5 rounded-sm font-semibold"
                    style={{ background: pc.bg, color: pc.text }}>
                    {t.program}
                  </span>
                </div>
              </div>
            </div>

            {/* university + country below photo */}
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[12px] text-mist font-mono">{t.university}</span>
              </div>
              <span className="text-[12px] text-mist">{t.country}</span>
            </div>
          </div>

          {/* ── RIGHT: quote + switcher ── */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}
            className="flex flex-col justify-between h-full pt-2 lg:pt-6">

            {/* big opening quote */}
            <div>
              <span className="font-display italic font-bold text-[80px] leading-none text-gold/25 block -mb-4 -ml-2">
                "
              </span>

              {/* quote text */}
              <div key={quoteKey} style={{ animation: "quoteFadeIn 0.5s ease forwards" }}>
                <blockquote className="font-display font-semibold italic text-wine leading-[1.45] mb-8"
                  style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}>
                  {t.quote}"
                </blockquote>
              </div>

              {/* credential badge */}
              <div className="flex items-center gap-3 mb-10 pb-10 border-b border-line">
                <span className="font-mono text-[9px] uppercase tracking-[2px] px-3 py-1.5 rounded-sm"
                  style={{ background: pc.bg, color: pc.text }}>
                  {t.credential}
                </span>
              </div>
            </div>

            {/* ── testimonial switcher cards ── */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">More Stories</p>
              {testimonials.map((tm, i) => (
                <button
                  key={i}
                  onClick={() => resetGo(i)}
                  className={`group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-250
                    ${active === i
                      ? "bg-white border-gold/30 shadow-sm"
                      : "bg-transparent border-line hover:bg-white/60 hover:border-line"}`}
                >
                  {/* mini photo */}
                  <div className={`shrink-0 rounded-full overflow-hidden transition-all duration-250
                    ${active === i ? "w-11 h-11 ring-2 ring-gold/40" : "w-9 h-9 opacity-60 group-hover:opacity-80"}`}>
                    <Image src={tm.img} alt={tm.name} width={44} height={44} className="object-cover object-top w-full h-full" />
                  </div>

                  {/* text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className={`font-semibold text-[13px] transition-colors ${active === i ? "text-wine" : "text-slate"}`}>
                        {tm.name}
                      </p>
                      <span className="font-mono text-[8px] text-mist">{tm.country}</span>
                    </div>
                    <p className="text-[11px] text-mist truncate leading-snug">{tm.quote.slice(0, 60)}…</p>
                  </div>

                  {/* active indicator */}
                  <div className={`shrink-0 w-1 h-8 rounded-full transition-all duration-250
                    ${active === i ? "bg-gold" : "bg-line group-hover:bg-line"}`} />
                </button>
              ))}
            </div>

            {/* bottom CTA */}
            <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
              <p className="text-[12px] text-mist">
                Join <span className="text-wine font-medium">1,000+ professionals</span> who've taken the step.
              </p>
              <Link href="/apply/eligibility-check"
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-wine hover:text-gold transition-colors duration-150">
                Check Your Eligibility →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes quoteFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}