"use client";

import { useRef, useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

const audience = [
  {
    num: "01",
    title: "Senior practitioners",
    desc: "Professionals with fifteen or more years of sustained work in a single discipline. Not beginners seeking credentials — people whose credentials are already the work itself.",
  },
  {
    num: "02",
    title: "Founders and operators",
    desc: "Those who have built, scaled, or led institutions of consequence. Technology, finance, medicine, the arts, public policy, industry.",
  },
  {
    num: "03",
    title: "Authors and scholars",
    desc: "Those who have codified their work — through books, papers, patents, or bodies of research that have shaped a field.",
  },
  {
    num: "04",
    title: "Institutional leaders",
    desc: "Chairs, trustees, presidents, and long-tenured executives whose contribution is a matter of record in their sector.",
  },
];

function useRowReveal(count) {
  const refs = useRef([]);
  const [shown, setShown] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setShown((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [count]);

  return { refs, shown };
}

export default function AboutAudience() {
  const [headRef, headVisible] = useInView({ threshold: 0.2 });
  const { refs, shown } = useRowReveal(audience.length);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="audience" className="relative bg-ivory py-24 lg:py-28 border-b border-line overflow-hidden">
      {/* ghost numeral, tucked behind the heading rather than floating alone */}
      <span
        className="absolute -top-6 right-0 lg:right-10 font-display font-bold select-none pointer-events-none leading-none hidden md:block"
        style={{ fontSize: "220px", color: "rgba(22,38,61,0.035)" }}
      >
        02
      </span>

      <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">
        {/* header — single column, big impactful heading matching the site's pattern */}
        <div
          ref={headRef}
          className="max-w-[760px] mb-16 lg:mb-20"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[3px] text-gold">02 / 06</span>
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-mist">The audience</span>
          </div>

          <h2 className="font-display font-semibold text-[42px] sm:text-[54px] lg:text-[66px] text-wine leading-[1.02] mb-7">
            Who we <span className="italic text-gold">serve.</span>
          </h2>

          <p className="font-display italic text-[18px] lg:text-[20px] text-slate leading-relaxed max-w-[620px]">
            Not a broad market — a narrow one. Four kinds of people, each already
            accomplished, each seeking the same thing: formal recognition of a record
            that already speaks for itself.
          </p>
        </div>

        {/* editorial roster list */}
        <div>
          {audience.map((a, i) => {
            const isOn = shown.has(i);
            const isHovered = hovered === i;
            return (
              <div
                key={a.num}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid lg:grid-cols-[130px_1fr] gap-3 lg:gap-12 py-9 lg:py-10 border-t border-line cursor-default"
                style={{
                  opacity: isOn ? 1 : 0,
                  transform: isOn ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* number */}
                <span
                  className="font-display font-semibold text-[44px] lg:text-[54px] leading-none transition-colors duration-400"
                  style={{ color: isHovered ? "#9A7320" : "rgba(154,115,32,0.35)" }}
                >
                  {a.num}
                </span>

                {/* title + description */}
                <div>
                  <h3
                    className="font-display font-semibold text-[25px] lg:text-[30px] leading-snug mb-3 transition-all duration-300"
                    style={{ color: isHovered ? "#9A7320" : "#16263D", transform: isHovered ? "translateX(6px)" : "translateX(0)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-slate text-[15px] lg:text-[15.5px] leading-[1.75] max-w-[640px]">
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}