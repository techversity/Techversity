"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import useInView from "@/hooks/useInView";
import { certifications as certs } from "@/lib/certifications";

const CheckIcon = ({ color }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function CertificationsCarousel() {
  const [sectionRef, inView] = useInView({ threshold: 0.08 });
  const [active,    setActive]    = useState(0);
  const [animKey,   setAnimKey]   = useState(0);
  const timerRef   = useRef(null);


  const startCycle = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % certs.length);
      setAnimKey(k => k + 1);
    }, 4500);
  }, []);

  useEffect(() => {
    if (inView) startCycle();
    return () => clearInterval(timerRef.current);
  }, [inView, startCycle]);

  const switchTo = (idx) => {
    if (idx === active) return;
    setActive(idx);
    setAnimKey(k => k + 1);
    startCycle();
  };

  const c = certs[active];

  return (
    <section ref={sectionRef} className="bg-white py-20 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">Certifications</p>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-tight">
                Career-Ready Skills<br />
                <span className="italic text-gold">in Weeks, Not Years</span>
              </h2>
            </div>
            <p className="text-slate text-[14px] max-w-[260px] leading-relaxed lg:text-right">
              Industry-aligned programs with career support — not just a certificate.
            </p>
          </div>
        </div>

        {/* tab pills */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
          className="flex flex-wrap gap-2 mb-8">
          {certs.map((cert, i) => (
            <button key={cert.abbr} onClick={() => switchTo(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold border transition-all duration-250"
              style={{
                background:  active === i ? cert.accent : "transparent",
                color:       active === i ? "#fff"      : cert.accent,
                borderColor: active === i ? cert.accent : `${cert.accent}40`,
              }}
            >
              <span className="font-mono font-bold text-[10px]">{cert.abbr}</span>
              <span className="hidden sm:inline">{cert.title}</span>
            </button>
          ))}
        </div>

        {/* featured panel */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: `${c.accent}20` }}>
            <div key={animKey} style={{ animation: "panelIn 0.38s cubic-bezier(0.4,0,0.2,1) forwards" }}>
              <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr]">

                {/* LEFT */}
                <div className="relative flex flex-col justify-between p-8 lg:p-10 overflow-hidden"
                  style={{ background: c.accentBg, minHeight: "380px" }}>

                  {/* bg image */}
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="460px"
                    className="object-cover object-center"
                  />

                  {/* neutral dark gradient — lets the photo's true colours show, keeps text readable */}
                  <div className="absolute inset-0"
                    style={{
                      background: "linear-gradient(155deg, rgba(12,22,38,0.55) 0%, rgba(12,22,38,0.35) 45%, rgba(12,22,38,0.65) 100%)",
                    }} />

                  {/* slim accent strip on the left edge — subtle brand cue */}
                  <div className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: c.accent }} />

                  {/* dark anchor at bottom for stat-card contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.40), transparent)" }} />

                  {/* dark anchor at top for badge/title contrast */}
                  <div className="absolute inset-x-0 top-0 h-2/5"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)" }} />

                  {/* top: only the tag pill (image already shows the title) */}
                  <div className="relative z-10 flex justify-end">
                    {c.tag && (
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold shadow-sm"
                        style={{ background: c.accent, color: "#fff" }}>
                        {c.tag}
                      </span>
                    )}
                  </div>

                  {/* bottom: small title + stats */}
                  <div className="relative z-10">
                    <p className="font-mono text-[9px] uppercase tracking-[2px] mb-1 font-semibold drop-shadow"
                      style={{ color: c.accent, filter: "brightness(1.4)" }}>
                      {c.field}
                    </p>
                    <h3 className="font-display font-semibold text-[22px] leading-tight mb-5 drop-shadow-md"
                      style={{ color: c.accent, filter: "brightness(1.5)" }}>
                      {c.title}
                    </h3>

                    {/* stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {c.stats.map((s) => (
                        <div key={s.label} className="rounded-xl p-3 text-center"
                          style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                          <div className="font-display font-bold text-[22px] leading-none mb-0.5" style={{ color: c.accent }}>
                            {s.val}<span className="text-[14px]">{s.unit}</span>
                          </div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-slate">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-between p-8 lg:p-10 bg-white">

                  {/* description */}
                  <p className="text-slate text-[15px] leading-[1.8] mb-7 pb-7 border-b border-line">
                    {c.desc}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
                    {/* skills */}
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-3">What you'll learn</p>
                      <div className="flex flex-wrap gap-2">
                        {c.skills.map((skill) => (
                          <span key={skill}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md"
                            style={{ background: c.accentBg, color: c.accent }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* included */}
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-3">What's included</p>
                      <div className="flex flex-col gap-2">
                        {c.included.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: c.accentBg }}>
                              <CheckIcon color={c.accent} />
                            </span>
                            <span className="text-[12.5px] text-slate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center gap-4 pt-6 border-t border-line">
                    <Link href={`/certifications/enroll/${c.href.split("/").filter(Boolean).pop()}`}
                      className="inline-flex items-center gap-2.5 font-semibold text-[13px] px-6 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
                      style={{ background: c.accent }}>
                      Enroll Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href={c.href} className="text-[13px] font-medium text-mist hover:text-wine transition-colors duration-150">
                      View Curriculum →
                    </Link>

                    {/* dot nav */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      {certs.map((_, i) => (
                        <button key={i} onClick={() => switchTo(i)}>
                          <span className="block rounded-full transition-all duration-300"
                            style={{
                              width:  active === i ? "20px" : "6px",
                              height: "6px",
                              background: active === i ? c.accent : "#E0DCCF",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-8 border-t border-line">
          <p className="text-[13px] text-mist">
            All certifications include <span className="text-wine font-medium">career support</span> — resume review, interview prep &amp; placement assistance.
          </p>
          <Link href="/certifications"
            className="shrink-0 inline-flex items-center gap-2 border border-wine text-wine font-semibold text-[13px] px-5 py-2.5 rounded-xl hover:bg-wine hover:text-white transition-all duration-200">
            Browse All →
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}