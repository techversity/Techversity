"use client";

import { useRef, useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

const rows = [
  { label: "Institution", value: "Independently registered" },
  { label: "Status", value: "Verified" },
  { label: "Source", value: "Public register" },
];

function useRowReveal(count, active) {
  const refs = useRef([]);
  const [shown, setShown] = useState(new Set());

  useEffect(() => {
    if (!active) return;
    const timeouts = rows.map((_, i) =>
      setTimeout(() => {
        setShown((prev) => new Set(prev).add(i));
      }, 500 + i * 260)
    );
    refs.current = timeouts;
    return () => timeouts.forEach(clearTimeout);
  }, [active]);

  return { shown };
}

function Checkmark({ drawn }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#9A7320"
        strokeWidth="1.6"
        style={{
          strokeDasharray: 63,
          strokeDashoffset: drawn ? 0 : 63,
          transition: "stroke-dashoffset 0.6s cubic-bezier(0.65,0,0.35,1)",
        }}
      />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="#9A7320"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 12,
          strokeDashoffset: drawn ? 0 : 12,
          transition: "stroke-dashoffset 0.4s ease 0.4s",
        }}
      />
    </svg>
  );
}

export default function AboutStandard() {
  const [ref, visible] = useInView({ threshold: 0.2 });
  const { shown } = useRowReveal(rows.length, visible);

  return (
    <section id="standard" className="relative bg-ivory py-24 lg:py-28 border-b border-line overflow-hidden">
      {/* giant watermark numeral */}
      <span
        className="hidden lg:block absolute top-10 left-0 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "220px", color: "rgba(154,115,32,0.06)", zIndex: 0 }}
      >
        04
      </span>

      <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">
        <div
          className="max-w-[760px] mb-14 lg:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] tracking-[3px] text-gold">04 / 06</span>
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-mist">The standard</span>
          </div>
          <h2 className="font-display font-semibold text-[42px] sm:text-[54px] lg:text-[64px] text-wine leading-[1.04]">
            A record, <span className="italic text-gold">not a claim.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-start">

          {/* left — text with drop-cap and pull-quote */}
          <div
            className="relative text-slate text-[15px] leading-[1.85]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            <p>
              <span
                className="float-left font-display font-semibold text-wine leading-[0.8] pr-3 pt-1"
                style={{ fontSize: "64px" }}
              >
                E
              </span>
              very accreditation cited on this site is documented and linked to the issuing
              body&rsquo;s own public register. Where a partner institution&rsquo;s standing
              cannot be independently confirmed, we do not assert it — we describe the
              institution in plain, unembellished terms instead.
            </p>

            <p className="font-display italic text-wine text-[24px] lg:text-[28px] leading-snug my-10 clear-left">
              We say so <span className="text-gold">directly</span> to the recipient — before any
              fee is discussed.
            </p>

            <p>
              A credential, once conferred through the firm, can be verified independently — by
              an employer, a licensing body, or the recipient themselves. The record speaks for
              itself; our role is to ensure it was built correctly the first time.
            </p>
          </div>

          {/* right — verification specimen card, the signature element */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            <div className="relative bg-white border border-line rounded-2xl p-7 lg:p-8 shadow-[0_20px_60px_-12px_rgba(22,38,61,0.12)]">
              {/* corner brackets */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />

              <div className="flex items-center justify-between mb-7">
                <span className="font-mono text-[9px] uppercase tracking-[2px] text-mist">
                  Specimen — verification
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(154,115,32,0.1)" }}
                >
                  <Checkmark drawn={shown.has(rows.length - 1)} />
                </span>
              </div>

              <div className="space-y-0">
                {rows.map((r, i) => {
                  const isOn = shown.has(i);
                  return (
                    <div
                      key={r.label}
                      className="flex items-center justify-between py-4 border-t border-line first:border-t-0"
                      style={{
                        opacity: isOn ? 1 : 0,
                        transform: isOn ? "translateX(0)" : "translateX(8px)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                      }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[1px] text-mist">
                        {r.label}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="font-display font-medium text-[14px] text-wine">
                          {r.value}
                        </span>
                        <Checkmark drawn={isOn} />
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-line">
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-gold-deep">
                  Verifiable on request
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}