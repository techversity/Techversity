"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";

function useCountUp(target, run, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const t0 = performance.now();
    const tick = (t) => {
      const pr = Math.min((t - t0) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - pr, 3)) * target));
      if (pr < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, run, duration]);
  return val;
}

// gives a few fields more visual weight so the cloud doesn't look uniform/robotic
function getSize(i) {
  const pattern = [1, 0, 2, 0, 1, 0, 0, 2, 1, 0, 0, 1, 0, 2, 0];
  return pattern[i % pattern.length];
}

export default function ProgramFields({ p }) {
  const [run, setRun] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!p.fields?.length) return null;
  const count = p.fields.length;
  const n = useCountUp(count, run);

  return (
    <section ref={ref} className="relative bg-white border-y border-line overflow-hidden">
      {/* faint radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Fields of Recognition</p>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08] mb-6">
              Your field is represented.
            </h2>
            <p className="text-slate text-[15px] leading-relaxed">{p.fieldsIntro}</p>
          </div>
        </Reveal>

        {/* count-up, centered, ceremonial */}
        <Reveal direction="up" delay={80}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #C9A04A)" }} />
            <p className="font-display font-semibold text-[28px] text-gold tabular-nums">
              {n}+ <span className="font-mono text-[10px] uppercase tracking-[2px] text-mist align-middle ml-1">Categories</span>
            </p>
            <span className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #C9A04A)" }} />
          </div>
        </Reveal>

        {/* flowing tag cloud */}
        <Reveal direction="up" delay={140}>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-3.5">
            {p.fields.map((f, i) => {
              const size = getSize(i);
              const sizeClasses = [
                "text-[13.5px] px-5 py-2.5",
                "text-[15.5px] px-6 py-3 font-medium",
                "text-[12.5px] px-4 py-2",
              ][size];
              return (
                <span
                  key={f}
                  className="group relative rounded-full border cursor-default transition-all duration-400 ease-out hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(154,115,32,0.28)",
                    transitionDelay: `${i * 30}ms`,
                  }}
                >
                  {/* fill layer */}
                  <span
                    className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-400 ease-out origin-center"
                    style={{ background: "#9A7320" }}
                  />
                  <span
                    className={`relative font-display block whitespace-nowrap transition-colors duration-300 ${sizeClasses}`}
                    style={{ color: "#5C1F2E" }}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {f}
                    </span>
                  </span>
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}