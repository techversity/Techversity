"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";

function useCountUp(target, run, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const num = parseInt(String(target).replace(/[^0-9]/g, ""), 10) || 0;
    if (!num) return;
    const t0 = performance.now();
    const tick = (t) => {
      const pr = Math.min((t - t0) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - pr, 3)) * num));
      if (pr < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, run, duration]);
  return val;
}

function Stat({ s, run, delay }) {
  const n = useCountUp(s.value, run);
  const suffix = String(s.value).replace(/[0-9,]/g, "");
  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-9 lg:py-11 text-center">
      <p className="font-display font-semibold text-[36px] lg:text-[48px] text-gold leading-none mb-3 tabular-nums">
        {n.toLocaleString()}
        {suffix}
      </p>
      <span
        className="h-px bg-gold/40 mb-3 transition-all ease-out"
        style={{ width: run ? "28px" : "0px", transitionDuration: "700ms", transitionDelay: `${delay}ms` }}
      />
      <p className="font-mono text-[9px] lg:text-[9.5px] uppercase tracking-[2px] text-white/50">{s.label}</p>
    </div>
  );
}

export default function ProgramStanding({ p }) {
  const [run, setRun] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!p.standingStats?.length) return null;

  return (
    <section className="relative bg-wine overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: "#9A7320" }}
      />
      <div
        className="absolute -top-40 -right-20 w-[380px] h-[380px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "#9A7320" }}
      />

      {/* faint dotted world-map texture — global reach motif */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <pattern id="dotgrid" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="#C9A04A" />
        </pattern>
        <rect width="1200" height="700" fill="url(#dotgrid)" />
      </svg>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">International Standing</p>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[42px] text-white leading-[1.08] mb-7">
                Recognition that travels.
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-8">{p.standingIntro}</p>
              <ul className="space-y-3.5">
                {p.standingPoints?.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 group">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors duration-300 group-hover:bg-gold/20"
                      style={{ background: "rgba(154,115,32,0.15)", borderColor: "rgba(201,160,74,0.3)" }}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A04A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/75 text-[14px] leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <div ref={ref} className="relative">
              {/* certificate-style corner brackets */}
              {[
                "top-0 left-0 border-t border-l",
                "top-0 right-0 border-t border-r",
                "bottom-0 left-0 border-b border-l",
                "bottom-0 right-0 border-b border-r",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute w-6 h-6 ${pos} pointer-events-none`}
                  style={{ borderColor: "#C9A04A", opacity: 0.5 }}
                />
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm grid grid-cols-2 divide-x divide-y divide-white/10 m-2">
                {p.standingStats.map((s, i) => (
                  <Stat key={s.label} s={s} run={run} delay={i * 120 + 300} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}