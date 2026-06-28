"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    tag: "Takes 3 minutes · Free",
    title: "Check Your Eligibility",
    desc: "Answer a few quick questions about your background, experience, and goals. Our system instantly matches you with the doctoral and executive pathways that fit your profile.",
    points: ["No documents needed yet", "Instant pathway match", "100% free, no commitment"],
  },
  {
    num: "02",
    tag: "1-on-1 Guidance",
    title: "Speak With an Advisor",
    desc: "Get paired with a dedicated education advisor who understands your field. Together you'll select the ideal program and the right accredited university partner — personally, never via a chatbot.",
    points: ["Dedicated advisor assigned", "Program & university match", "Every question answered"],
  },
  {
    num: "03",
    tag: "Fully Supported",
    title: "Submit Your Application",
    desc: "A guided, completely paperless application. Your advisor prepares every document with you and reviews it against the university's exact requirements before it's ever submitted.",
    points: ["100% paperless process", "Document checklist provided", "Reviewed before submission"],
  },
  {
    num: "04",
    tag: "Welcome Aboard",
    title: "Get Enrolled",
    desc: "Receive your official admission confirmation from the accredited university, complete a guided onboarding, and begin your journey toward a globally recognised credential.",
    points: ["Official admission letter", "Full onboarding support", "Begin your journey"],
  },
];

function useStepReveal(count) {
  const refs = useRef([]);
  const [shown, setShown] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setShown(prev => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.35 }
    );
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, [count]);

  return { refs, shown };
}

export default function HowItWorks() {
  const [headerRef, hVisible] = useInView({ threshold: 0.2 });
  const { refs, shown } = useStepReveal(steps.length);

  // how far the gold spine should fill = highest shown index
  const maxShown = shown.size ? Math.max(...shown) : -1;

  return (
    <section className="bg-ivory py-20 lg:py-24 border-b border-line overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-5 lg:px-8">

        {/* header */}
        <div
          ref={headerRef}
          style={{ opacity: hVisible ? 1 : 0, transform: hVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">The Process</p>
            </div>
            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-[1.05]">
              Four steps to<br />
              <span className="italic text-gold">the title "Dr."</span>
            </h2>
          </div>
          <p className="font-display italic text-[16px] text-slate max-w-[280px] leading-relaxed lg:text-right lg:pb-2">
            One dedicated advisor walks beside you the entire way.
          </p>
        </div>

        {/* ── vertical timeline ── */}
        <div className="relative">

          {/* spine track */}
          <div className="absolute left-[26px] lg:left-[34px] top-4 bottom-4 w-[2px] bg-line" />
          {/* spine gold fill */}
          <div
            className="absolute left-[26px] lg:left-[34px] top-4 w-[2px] rounded-full"
            style={{
              height: maxShown < 0 ? "0%" : `${((maxShown + 1) / steps.length) * 100}%`,
              background: "linear-gradient(180deg,#C9A04A,#9A7320)",
              transition: "height 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          <div className="flex flex-col gap-10 lg:gap-14">
            {steps.map((s, i) => {
              const isOn = shown.has(i);
              return (
                <div
                  key={i}
                  ref={el => (refs.current[i] = el)}
                  data-idx={i}
                  className="relative pl-[70px] lg:pl-[90px]"
                >
                  {/* node */}
                  <div
                    className="absolute left-0 top-0 w-[54px] h-[54px] lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center z-10 transition-all duration-500"
                    style={{
                      background: isOn ? "linear-gradient(135deg,#C9A04A,#9A7320)" : "#FFFFFF",
                      border: `2px solid ${isOn ? "#9A7320" : "#E0DCCF"}`,
                      transform: isOn ? "scale(1)" : "scale(0.9)",
                      boxShadow: isOn ? "0 10px 30px rgba(154,115,32,0.28)" : "none",
                    }}
                  >
                    <span className="font-display font-bold text-[20px] lg:text-[26px] transition-colors duration-400"
                      style={{ color: isOn ? "#FFFFFF" : "#C8C4B8" }}>
                      {s.num}
                    </span>
                  </div>

                  {/* content */}
                  <div
                    style={{
                      opacity: isOn ? 1 : 0.3,
                      transform: isOn ? "translateY(0)" : "translateY(16px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-14 items-start">

                      {/* left: title + desc */}
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold font-semibold block mb-2.5 mt-1">
                          {s.tag}
                        </span>
                        <h3 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine leading-[1.1] mb-4">
                          {s.title}
                        </h3>
                        <p className="text-slate text-[14.5px] leading-[1.75] max-w-[480px]">
                          {s.desc}
                        </p>
                      </div>

                      {/* right: checkmark points card */}
                      <div className="relative lg:min-w-[250px]">
                        {/* connector line linking title to card — desktop */}
                        <div className="hidden lg:block absolute top-7 -left-12 w-12 h-px"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(154,115,32,0.35))",
                            opacity: isOn ? 1 : 0,
                            transition: "opacity 0.5s ease 0.3s",
                          }} />

                        <div className="relative flex flex-col gap-3.5 bg-white rounded-2xl border border-line p-6 transition-all duration-300"
                          style={{
                            boxShadow: isOn ? "0 12px 36px rgba(22,38,61,0.07)" : "none",
                            borderColor: isOn ? "rgba(154,115,32,0.18)" : "#E0DCCF",
                          }}>
                          {/* gold corner accent */}
                          <span className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-opacity duration-400"
                            style={{
                              background: "linear-gradient(90deg,#C9A04A,#9A7320)",
                              opacity: isOn ? 1 : 0,
                            }} />

                          {s.points.map((pt, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-3"
                              style={{
                                opacity: isOn ? 1 : 0,
                                transform: isOn ? "translateX(0)" : "translateX(12px)",
                                transition: `opacity 0.4s ease ${200 + j * 100}ms, transform 0.4s ease ${200 + j * 100}ms`,
                              }}
                            >
                              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                                style={{ background: "rgba(154,115,32,0.12)" }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="3" className="w-3 h-3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span className="text-wine text-[13px] font-medium">{pt}</span>
                            </div>
                          ))}

                          {i === steps.length - 1 && (
                            <Link
                              href="/apply/eligibility-check"
                              className="group inline-flex items-center justify-center gap-2 mt-2 text-white font-semibold text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                              style={{ background: "linear-gradient(135deg,#21385C,#16263D)" }}
                            >
                              Start Now
                              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* bottom CTA */}
        <div className="flex justify-center mt-16 pt-12 border-t border-line">
          <Link
            href="/apply/eligibility-check"
            className="group inline-flex items-center gap-4 text-white font-semibold text-[14px] pl-8 pr-3 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_14px_40px_rgba(22,38,61,0.22)]"
            style={{ background: "linear-gradient(135deg,#21385C,#16263D)" }}
          >
            <span>Start Step 1 — Check Eligibility</span>
            <span className="w-9 h-9 rounded-full flex items-center justify-center text-wine transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ background: "linear-gradient(135deg,#C9A04A,#9A7320)" }}>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}