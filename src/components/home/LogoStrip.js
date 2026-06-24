"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const universities = [
  { initials: "ES", name: "ESDST University",          country: "France",        flag: "🇫🇷", programs: "PhD · DBA" },
  { initials: "KU", name: "Kennedy University",        country: "United States", flag: "🇺🇸", programs: "PhD" },
  { initials: "EG", name: "EU Global Institute",       country: "Malta",         flag: "🇲🇹", programs: "DBA · MBA" },
  { initials: "SB", name: "SBS Swiss Business School", country: "Switzerland",   flag: "🇨🇭", programs: "MBA · Exec" },
  { initials: "EP", name: "EPSRU",                     country: "Russia",        flag: "🇷🇺", programs: "PhD · DBA" },
  { initials: "GU", name: "Globus University",         country: "Russia",        flag: "🇷🇺", programs: "PhD" },
  { initials: "EA", name: "Euro-Asian University",     country: "Kazakhstan",    flag: "🇰🇿", programs: "DBA" },
  { initials: "PW", name: "Prowess University",        country: "United Kingdom",flag: "🇬🇧", programs: "PhD · MBA" },
  { initials: "IA", name: "Int'l American University", country: "United States", flag: "🇺🇸", programs: "DBA" },
  { initials: "FC", name: "Florida Coastal",           country: "United States", flag: "🇺🇸", programs: "Exec Ed" },
];

export default function LogoStrip() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % universities.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">
                Global Network
              </p>
              <h2 className="font-display font-semibold text-2xl lg:text-[34px] text-wine leading-tight">
                Trusted by <span className="italic text-gold">10 accredited</span><br className="hidden lg:block" />
                universities worldwide.
              </h2>
            </div>
            <Link href="/universities"
              className="text-sm font-semibold text-gold hover:opacity-70 transition-opacity whitespace-nowrap">
              View All Partners →
            </Link>
          </div>
        </Reveal>

        {/* grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-7">
          {universities.map((u, i) => (
            <div
              key={i}
              className="uni-outer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms`,
              }}
            >
              {/* inner floats — separate layer so no conflict with entry */}
              <div className="uni-float" style={{ animationDelay: `${i * 0.3}s` }}>
                <Link
                  href="/universities"
                  onMouseEnter={() => setActive(i)}
                  className="uni-card group relative block rounded-2xl border p-6 overflow-hidden cursor-pointer"
                  style={{
                    borderColor: active === i ? "rgba(154,115,32,0.5)" : "#E0DCCF",
                    background: active === i
                      ? "linear-gradient(135deg, rgba(154,115,32,0.08), rgba(255,255,255,0))"
                      : "#fff",
                    boxShadow: active === i ? "0 14px 40px rgba(154,115,32,0.15)" : "none",
                    transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {active === i && (
                    <div className="absolute -inset-2 pointer-events-none"
                      style={{ background: "radial-gradient(circle at 50% 0%, rgba(154,115,32,0.15), transparent 70%)" }} />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-[14px] shrink-0 transition-all duration-300"
                        style={{
                          background: active === i ? "linear-gradient(135deg,#B08A2E,#9A7320)" : "#16263D",
                          color: active === i ? "#fff" : "#fff",
                          transform: active === i ? "scale(1.08) rotate(-4deg)" : "scale(1)",
                        }}>
                        {u.initials}
                      </div>
                      <span className="text-xl leading-none transition-transform duration-300"
                        style={{ transform: active === i ? "scale(1.25)" : "scale(1)" }}>
                        {u.flag}
                      </span>
                    </div>

                    <p className="font-display font-semibold text-[15px] text-wine leading-snug mb-3 min-h-[40px]">
                      {u.name}
                    </p>

                    <div className="h-px mb-3 transition-colors duration-300"
                      style={{ background: active === i ? "rgba(154,115,32,0.3)" : "#E0DCCF" }} />

                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-mist">{u.country}</p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gold/80">{u.programs}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                    style={{
                      width: active === i ? "100%" : "0%",
                      background: "linear-gradient(90deg,#B08A2E,#9A7320)",
                    }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .uni-float {
          animation: floatCard 4s ease-in-out infinite;
          will-change: transform;
        }
        .uni-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 44px rgba(22,38,61,0.16) !important;
          border-color: rgba(154,115,32,0.5) !important;
          transition: all 0.3s ease;
        }
        .uni-outer:hover .uni-float {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}