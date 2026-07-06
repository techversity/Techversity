"use client";

import { useRef, useState, useEffect } from "react";

/* ── reveal-on-scroll ── */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
}

/* ── counts up from 1 to target once visible, only for numeric values ── */
function useCountUp(target, shown, duration = 1400) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (!shown || target == null) return;
    let raf;
    const start = performance.now();
    const from = 1;
    const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(from + (target - from) * ease(progress));
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, target, duration]);
  return value;
}

function FactCell({ label, value, numeric, index, shown }) {
  const delay = index * 90;
  const count = useCountUp(numeric ? Number(value) : null, shown);

  return (
    <div
      className="relative px-6 lg:px-10 py-8 lg:py-10"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* faint oversized index number in the background */}
      <span
        className="absolute -top-2 right-4 font-display font-semibold select-none pointer-events-none"
        style={{
          fontSize: "56px",
          color: "rgba(255,255,255,0.06)",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <p className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-3 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-gold/60" />
          {label}
        </p>

        {numeric ? (
          <p className="font-display font-semibold text-[30px] lg:text-[38px] text-white leading-none tabular-nums">
            {count}
          </p>
        ) : (
          <p className="text-white text-[16px] lg:text-[19px] font-medium leading-snug font-display">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function UniFactsStrip({ d }) {
  const [sectionRef, shown] = useReveal(0.2);

  const items = [
    { label: "Location", value: `${d.city}, ${d.country}`, numeric: false },
    { label: "Established", value: d.founded, numeric: true },
    { label: "Delivery", value: d.mode, numeric: false },
    { label: "Language", value: d.language, numeric: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-wine border-t border-white/10 overflow-hidden"
    >
      {/* subtle ambient glow, premium touch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 15% 0%, rgba(199,158,58,0.10), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`
                ${i % 2 !== 0 ? "border-l border-white/10" : ""}
                ${i >= 2 ? "lg:border-l" : i !== 0 ? "lg:border-l" : ""}
              `}
            >
              <FactCell
                label={item.label}
                value={item.value}
                numeric={item.numeric}
                index={i}
                shown={shown}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}