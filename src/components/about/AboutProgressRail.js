"use client";

import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "firm", num: "01", label: "The firm" },
  { id: "audience", num: "02", label: "The audience" },
  { id: "distinction", num: "03", label: "The distinction" },
  { id: "standard", num: "04", label: "The standard" },
  { id: "founding", num: "05", label: "The founding" },
  { id: "threshold", num: "06", label: "Threshold" },
];

export default function AboutProgressRail() {
  const [active, setActive] = useState(0);
  const ratios = useRef({});

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current[entry.target.id] = entry.intersectionRatio;
        });

        let maxId = null;
        let maxRatio = 0;
        for (const [id, ratio] of Object.entries(ratios.current)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }
        if (maxId) {
          const idx = sections.findIndex((s) => s.id === maxId);
          if (idx !== -1) setActive(idx);
        }
      },
      { threshold: [0, 0.1, 0.25, 0.4, 0.5, 0.65, 0.8, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const haloShadow = "0 0 6px rgba(0,0,0,0.35), 0 0 12px rgba(255,255,255,0.35)";

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
      {sections.map((s, i) => {
        const isActive = i === active;
        const isPast = i <= active;
        return (
          <div key={s.id} className="flex flex-col items-center">
            <button
              onClick={() => scrollTo(s.id)}
              aria-label={`Go to section ${s.num}: ${s.label}`}
              className="group relative flex items-center py-2.5"
            >
              <span
                className="font-mono transition-all duration-300"
                style={{
                  fontSize: isActive ? "12px" : "10px",
                  letterSpacing: "1px",
                  color: "#D9A441",
                  opacity: isActive ? 1 : isPast ? 0.75 : 0.4,
                  fontWeight: isActive ? 700 : 500,
                  textShadow: haloShadow,
                }}
              >
                {s.num}
              </span>

              {/* label — reveals on hover, sits to the right */}
              <span
                className="absolute left-full ml-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[2px] text-wine bg-white border border-line rounded-full px-3 py-1.5 opacity-0 -translate-x-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shadow-[0_6px_20px_rgba(22,38,61,0.12)]"
              >
                {s.label}
              </span>
            </button>

            {i < sections.length - 1 && (
              <span
                className="w-px h-8 transition-all duration-500"
                style={{
                  background: isPast ? "#D9A441" : "rgba(154,115,32,0.25)",
                  boxShadow: isPast ? haloShadow : "none",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}