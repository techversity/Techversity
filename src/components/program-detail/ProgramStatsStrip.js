"use client";

import { useState, useEffect, useRef } from "react";

function useCountUp(target, run, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const num = parseInt(String(target).replace(/[^0-9]/g, ""), 10) || 0;
    if (!num) return;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, run, duration]);
  return val;
}

const ICONS = [
  <g key="0"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6" /></g>,     // institution
  <g key="1"><circle cx="12" cy="8" r="6" /><path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5" /></g>, // award/category
  <g key="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" /></g>, // globe
  <g key="3"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></g>, // people
];

function Stat({ stat, run, i }) {
  const n = useCountUp(stat.value, run);
  const suffix = String(stat.value).replace(/[0-9,]/g, "");
  return (
    <div
      className="group relative flex flex-col items-center text-center px-6 py-11 lg:py-14 transition-all duration-500"
      style={{ opacity: run ? 1 : 0, transform: run ? "translateY(0)" : "translateY(24px)", transitionDelay: `${i * 130}ms` }}
    >
      {/* top gold bar reveal */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-16 transition-all duration-500" style={{ background: "#9A7320" }} />
      {/* hover glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(154,115,32,0.14), transparent 72%)" }} />

      {/* icon */}
      <span className="relative w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
        style={{ background: "rgba(154,115,32,0.14)" }}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C9A04A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {ICONS[i % ICONS.length]}
        </svg>
      </span>

      <p className="relative font-display font-semibold text-[40px] lg:text-[54px] text-gold leading-none mb-3">
        {n.toLocaleString()}<span className="text-gold/70">{suffix}</span>
      </p>
      <p className="relative font-mono text-[9.5px] lg:text-[10.5px] uppercase tracking-[2px] text-white/55 max-w-[140px]">{stat.label}</p>
    </div>
  );
}

export default function ProgramStatsStrip({ stats }) {
  const [run, setRun] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!stats?.length) return null;

  return (
    <section className="relative bg-wine overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] rounded-full blur-[130px] opacity-[0.12] pointer-events-none" style={{ background: "#9A7320" }} />

      <div ref={ref} className="relative max-w-[1120px] mx-auto px-5 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[20px] border border-white/[0.1] overflow-hidden"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))", boxShadow: "0 30px 70px rgba(0,0,0,0.25)" }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`relative ${i > 0 ? "lg:before:absolute lg:before:left-0 lg:before:top-[20%] lg:before:h-[60%] lg:before:w-px lg:before:bg-white/[0.08]" : ""} ${i % 2 !== 0 ? "before:absolute before:left-0 before:top-[20%] before:h-[60%] before:w-px before:bg-white/[0.08] lg:before:top-[20%]" : ""} ${i >= 2 ? "border-t border-white/[0.08] lg:border-t-0" : ""}`}>
              <Stat stat={s} run={run} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}