"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Check Your Eligibility",
    desc: "Answer a few quick questions about your background and goals. Our system instantly matches you with the doctoral and executive pathways that fit your profile.",
    meta: "Takes 3 minutes",
    stat: "2 min",
    statLabel: "Average completion",
    points: ["No documents needed yet", "Instant pathway match", "100% free, no commitment"],
  },
  {
    num: "02",
    title: "Speak With an Advisor",
    desc: "Get paired with a dedicated education advisor who understands your field. Together you'll select the ideal program and accredited university partner.",
    meta: "1-on-1 guidance",
    stat: "100%",
    statLabel: "Personal support",
    points: ["Dedicated advisor", "Program & university match", "All your questions answered"],
  },
  {
    num: "03",
    title: "Submit Your Application",
    desc: "A guided, fully paperless application. Your advisor helps you prepare every document and ensures it meets the university's exact requirements.",
    meta: "Fully supported",
    stat: "Zero",
    statLabel: "Paperwork stress",
    points: ["Paperless process", "Document checklist provided", "Reviewed before submission"],
  },
  {
    num: "04",
    title: "Get Enrolled",
    desc: "Receive your official admission confirmation from the accredited university and begin your journey toward a globally recognized credential.",
    meta: "Welcome aboard",
    stat: "10+",
    statLabel: "Partner universities",
    points: ["Official admission letter", "Onboarding support", "Begin your journey"],
  },
];

function StepPanel({ step }) {
  return (
    <div className="absolute inset-0 flex items-start justify-center px-12 pt-36">
      <div className="max-w-[1080px] w-full grid grid-cols-[0.85fr_1fr] gap-20 items-center">
        <div className="relative flex items-center justify-center">
          <span
            className="font-display font-bold block select-none"
            style={{
              fontSize: "240px",
              lineHeight: "1.15",
              background: "linear-gradient(160deg,#C9A04A,#9A7320 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              padding: "0 0.1em",
            }}
          >
            {step.num}
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[3px] text-mist whitespace-nowrap">
            Step {step.num} of 04
          </span>
        </div>

        <div className="max-w-[460px]">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-gold mb-6">
            <span className="w-6 h-px bg-gold" />
            {step.meta}
          </span>
          <h3 className="font-display font-semibold text-[44px] text-wine leading-[1.05] mb-5">
            {step.title}
          </h3>
          <p className="text-slate text-[15px] leading-[1.7] mb-7">{step.desc}</p>
          <div className="flex flex-col gap-2.5 mb-8">
            {step.points.map((pt, j) => (
              <div key={j} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="3" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-wine text-[13px] font-medium">{pt}</span>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-4 pt-6 border-t border-line">
            <span className="font-display font-bold text-[40px] text-gold leading-none">{step.stat}</span>
            <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-mist leading-[1.4] max-w-[110px] pb-1.5">
              {step.statLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const wrapRef    = useRef(null);
  const [progress, setProgress] = useState(0);

  /* ── scroll logic: progress update + snap-to-step ── */
  useEffect(() => {
    const n          = steps.length;
    let snapTimer    = null;
    let isSnapping   = false;

    /* snap to the nearest whole step after scroll stops */
    const snapToNearest = () => {
      if (!wrapRef.current || isSnapping) return;

      const rect       = wrapRef.current.getBoundingClientRect();
      const scrolled   = -rect.top;                          // px scrolled into section
      const stepHeight = window.innerHeight;

      /* only act when inside the section */
      if (scrolled < -stepHeight * 0.1 || scrolled > (n - 0.9) * stepHeight) return;

      const nearestStep  = Math.round(scrolled / stepHeight);
      const clamped      = Math.max(0, Math.min(n - 1, nearestStep));
      const sectionTop   = rect.top + window.scrollY;        // absolute top of section
      const targetY      = sectionTop + clamped * stepHeight; // absolute scroll target

      /* skip if already close enough (within 8px) */
      if (Math.abs(window.scrollY - targetY) < 8) return;

      isSnapping = true;

      /* use Lenis if available, else native smooth scroll */
      if (window.__lenis) {
        window.__lenis.scrollTo(targetY, { duration: 0.65, easing: (t) => 1 - Math.pow(1 - t, 3) });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }

      /* unlock after animation finishes */
      setTimeout(() => { isSnapping = false; }, 900);
    };

    const onScroll = () => {
      if (!wrapRef.current) return;

      /* update progress bar */
      const rect    = wrapRef.current.getBoundingClientRect();
      const total   = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));

      /* schedule snap — 280ms after last scroll event */
      if (!isSnapping) {
        clearTimeout(snapTimer);
        snapTimer = setTimeout(snapToNearest, 280);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  const n           = steps.length;
  const pos         = progress * (n - 1);
  const activeIndex = Math.min(Math.round(pos), n - 1);
  const fillProgress = Math.min(progress * 1.05, 1);

  return (
    <>
      {/* DESKTOP — scroll pinned */}
      <section ref={wrapRef} className="hidden lg:block relative bg-ivory" style={{ height: `${n * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">

          <div
            className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"
            style={{ background: "radial-gradient(circle, rgba(154,115,32,0.06), transparent 70%)" }}
          />

          {/* header bar */}
          <div className="absolute top-0 left-0 right-0 z-30 pt-12 pb-8 px-12 bg-ivory">
            <div className="max-w-[1180px] mx-auto flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">The Process</p>
                </div>
                <h2 className="font-display font-semibold text-[40px] text-wine leading-[1.05] tracking-tight">
                  Your Journey, <span className="italic text-gold">Simplified.</span>
                </h2>
              </div>
              <div className="flex flex-col items-end gap-2.5 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-mist">Progress</span>
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-[18px] text-gold leading-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="w-32 h-[3px] bg-line rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-200"
                      style={{
                        width: `${fillProgress * 100}%`,
                        background: "linear-gradient(90deg,#B08A2E,#9A7320)",
                      }}
                    />
                  </div>
                  <span className="font-mono text-[12px] text-mist">04</span>
                </div>
              </div>
            </div>
          </div>

          {/* dissolve panel stack */}
          <div className="relative w-full h-full z-20">
            {steps.map((step, i) => {
              const dist    = Math.abs(pos - i);
              const visible = dist < 1;
              const opacity = visible ? 1 - dist : 0;
              const blur    = dist * 6;
              const scale   = 1 - dist * 0.04;
              const ty      = (pos - i) * -30;
              return (
                <div
                  key={i}
                  className="will-change-[opacity,transform,filter]"
                  style={{
                    opacity,
                    filter: `blur(${blur}px)`,
                    transform: `translateY(${ty}px) scale(${scale})`,
                    pointerEvents: dist < 0.5 ? "auto" : "none",
                    transition: "opacity 0.15s linear",
                  }}
                >
                  <StepPanel step={step} idx={i} />
                </div>
              );
            })}
          </div>

          {/* scroll hint */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[2px] text-mist"
            style={{ opacity: progress > 0.04 ? 0 : 1, transition: "opacity 0.3s" }}
          >
            Scroll to explore ↓
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="lg:hidden bg-ivory py-20">
        <div className="max-w-[600px] mx-auto px-5">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">The Process</p>
            <h2 className="font-display font-semibold text-4xl text-wine leading-tight">
              Your Journey, <span className="italic text-gold">Simplified.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-line p-6">
                <div className="flex items-start gap-4">
                  <span className="font-display font-bold text-[40px] text-gold/30 leading-none shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <span className="inline-block font-mono text-[9px] uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5 rounded-sm mb-2">
                      {step.meta}
                    </span>
                    <h3 className="font-display font-semibold text-[20px] text-wine leading-snug mb-2">{step.title}</h3>
                    <p className="text-slate text-[13px] leading-relaxed mb-3">{step.desc}</p>
                    <div className="flex flex-col gap-1.5">
                      {step.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="3" className="w-2.5 h-2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-wine text-[12px] font-medium">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/apply/eligibility-check"
              className="group inline-flex items-center gap-3 text-white font-semibold text-[14px] pl-7 pr-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(22,38,61,0.25)]"
              style={{ background: "linear-gradient(135deg,#21385C,#16263D)" }}
            >
              <span>Start Step 1</span>
              <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-wine text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DESKTOP CTA */}
      <section className="hidden lg:block bg-ivory pb-28 pt-4">
        <div className="flex justify-center">
          <Link href="/apply/eligibility-check"
            className="group relative inline-flex items-center gap-4 text-white font-semibold text-[15px] pl-9 pr-3 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-[0_14px_40px_rgba(22,38,61,0.30)]"
            style={{ background: "linear-gradient(135deg,#21385C 0%,#16263D 100%)" }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(135deg,#2A4571,#1B2E4D)" }}
            />
            <span className="relative tracking-wide">Start Step 1 — Check Eligibility</span>
            <span className="relative w-10 h-10 rounded-full flex items-center justify-center text-wine text-lg transition-transform duration-300 group-hover:translate-x-1"
              style={{ background: "linear-gradient(135deg,#C9A04A,#9A7320)" }}
            >→</span>
          </Link>
        </div>
      </section>
    </>
  );
}