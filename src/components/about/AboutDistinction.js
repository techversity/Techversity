"use client";

import { useRef, useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

/* ── minimal line icons, matching the header's icon style ── */
const StampIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15h6M9 11h3" />
  </svg>
);

const ExchangeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h13M17 8l-3.5-3.5M17 8l-3.5 3.5" />
    <path d="M20 16H7M7 16l3.5-3.5M7 16l3.5 3.5" />
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 3 7l9 5 9-5-9-5Z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);

const notList = [
  {
    num: "01",
    Icon: StampIcon,
    title: "Not a credential mill.",
    desc: "We do not sell degrees. We do not guarantee outcomes in exchange for payment. The institution confers on the strength of a record — and if the record is not yet sufficient, we say so before a single fee is discussed.",
  },
  {
    num: "02",
    Icon: DocumentIcon,
    title: "Not an admissions consultant.",
    desc: "Admissions consultants optimise applications. We build relationships between accomplished people and the institutions that recognise them. The letter of introduction bears the firm's name and standing — not a template.",
  },
  {
    num: "03",
    Icon: ExchangeIcon,
    title: "Not a broker.",
    desc: "Brokers transact and exit. We remain present from qualification through conferment — months of correspondence, committee liaison, and ceremony coordination. Our role ends when the record is formally established, not when the introduction is made.",
  },
  {
    num: "04",
    Icon: LayersIcon,
    title: "Not a volume operation.",
    desc: "We work with fewer than forty recipients in a given year. Each engagement is assigned to a named partner. There is no queue, no batch processing, and no account manager rotating between files.",
  },
];

function useCellReveal(count) {
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
      { threshold: 0.25 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [count]);

  return { refs, shown };
}

export default function AboutDistinction() {
  const [headRef, headVisible] = useInView({ threshold: 0.2 });
  const { refs, shown } = useCellReveal(notList.length);

  return (
    <section id="distinction" className="relative bg-ivory py-24 lg:py-28 border-b border-line overflow-hidden">
      {/* giant watermark numeral — same treatment as other ivory sections */}
      <span
        className="hidden lg:block absolute top-10 right-10 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "200px", color: "rgba(154,115,32,0.07)", zIndex: 0 }}
      >
        03
      </span>

      <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">
        <div
          ref={headRef}
          className="max-w-[680px] mb-16 lg:mb-20"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] tracking-[3px] text-gold">03 / 06</span>
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-mist">The distinction</span>
          </div>
          <h2 className="font-display font-semibold text-[42px] sm:text-[54px] lg:text-[64px] text-wine leading-[1.04]">
            What we are <span className="italic text-gold">not.</span>
          </h2>
          <p className="font-display italic text-[18px] text-slate leading-relaxed mt-6">
            The market is crowded with services that sound like us. None of them are.
          </p>
        </div>

        {/* dossier grid — hairline borders, table-like structure */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border border-line rounded-2xl overflow-hidden bg-white divide-y divide-line lg:divide-y-0">
          {notList.map((item, i) => {
            const isOn = shown.has(i);
            const isRightCol = i % 2 === 1;
            const Icon = item.Icon;
            return (
              <div
                key={item.title}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className={`group relative p-8 lg:p-11 transition-colors duration-500 hover:bg-wine-pale ${
                  isRightCol ? "lg:border-l" : ""
                } ${i < 2 ? "lg:border-b" : ""} border-line`}
                style={{
                  opacity: isOn ? 1 : 0,
                  transform: isOn ? "translateY(0)" : "translateY(18px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-[2px] text-gold">{item.num}</span>
                  <span className="w-11 h-11 rounded-full flex items-center justify-center text-gold-deep border border-gold/25 bg-gold-light/40 transition-all duration-400 group-hover:border-gold/60 group-hover:-translate-y-0.5">
                    <Icon />
                  </span>
                </div>

                <h3 className="font-display font-semibold text-[25px] lg:text-[28px] text-wine mb-1 leading-[1.2]">
                  {item.title}
                </h3>

                {/* underline that grows on hover */}
                <span className="block h-px bg-gold/50 mb-5 transition-all duration-500 w-8 group-hover:w-16" />

                <p className="text-slate text-[15px] leading-[1.8] max-w-[440px]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}