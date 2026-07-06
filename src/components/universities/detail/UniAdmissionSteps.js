"use client";

import { useState, useEffect } from "react";
import useInView from "@/hooks/useInView";
import Reveal from "@/components/ui/Reveal";

export default function UniAdmissionSteps({ d }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [activeStep, setActiveStep] = useState(-1);

  const steps = d.admissionSteps || [];
  const count = steps.length;
  const STEP_DELAY = 500; // ms between each step activating

  useEffect(() => {
    if (!inView || count === 0) return;
    const timers = steps.map((_, i) =>
      setTimeout(() => setActiveStep(i), 250 + i * STEP_DELAY)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, count]);

  if (!count) return null;

  return (
    <section ref={ref} className="relative bg-wine overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full blur-[150px] opacity-15 pointer-events-none" style={{ background: "#9A7320" }} />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">How Admission Works</p>
              </div>
              <h2 className="font-display font-semibold text-[30px] lg:text-[46px] text-white leading-[1.06]">
                Five steps, one advisor,<br />zero guesswork.
              </h2>
            </div>

            {/* premium callout — the supporting line, elevated so it can't be missed */}
            <div className="relative shrink-0 w-full lg:w-[320px] rounded-2xl overflow-hidden ring-1 ring-gold/25 px-6 py-6"
              style={{ background: "linear-gradient(155deg, rgba(154,115,32,0.14) 0%, rgba(255,255,255,0.03) 100%)" }}>
              {/* oversized quote mark */}
              <span
                className="absolute -top-3 -left-1 font-display font-bold select-none pointer-events-none leading-none"
                style={{ fontSize: "72px", color: "rgba(201,160,74,0.18)" }}
              >
                &ldquo;
              </span>
              <div className="relative flex items-start gap-3">
                <span className="mt-1 shrink-0 w-9 h-9 rounded-full flex items-center justify-center ring-1 ring-gold/40" style={{ background: "rgba(154,115,32,0.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A04A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <p className="font-display italic text-[15px] lg:text-[15.5px] text-white/90 leading-relaxed">
                  A dedicated <span className="text-gold not-italic font-semibold">Techversity advisor</span> walks with you through every stage below — <span className="text-gold not-italic font-semibold">no step is ever navigated alone.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* desktop: horizontal stepper, activates one node at a time */}
        <div className="hidden lg:block">
          <div className="relative mb-4">
            <div className="absolute left-[27px] right-[27px] top-[27px] h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div
              className="absolute left-[27px] top-[27px] h-px transition-all ease-out"
              style={{
                background: "linear-gradient(to right, #9A7320, #C9A04A)",
                width: count > 1 ? `calc(${(Math.max(activeStep, 0) / (count - 1)) * 100}% - ${activeStep >= 0 ? "54px" : "0px"})` : "0%",
                transitionDuration: `${STEP_DELAY - 50}ms`,
              }}
            />
            <div className="relative grid" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
              {steps.map((s, i) => {
                const active = activeStep >= i;
                const justActivated = activeStep === i;
                return (
                  <div key={s.title} className="flex justify-start">
                    <span
                      className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-[19px] transition-all duration-500"
                      style={{
                        background: active ? "linear-gradient(135deg, #C9A04A, #9A7320)" : "#0C1626",
                        border: "2px solid #9A7320",
                        color: active ? "#0C1626" : "#6B7280",
                        transform: justActivated ? "scale(1.15)" : "scale(1)",
                        boxShadow: active ? "0 0 0 6px rgba(154,115,32,0.18)" : "none",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
            {steps.map((s, i) => {
              const active = activeStep >= i;
              return (
                <div
                  key={s.title}
                  className="group relative pr-6 transition-all duration-700 ease-out"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <span
                    className="absolute -top-4 -left-1 font-display font-bold select-none pointer-events-none leading-none"
                    style={{ fontSize: "72px", color: "rgba(255,255,255,0.05)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="font-display font-semibold text-[18px] text-white leading-snug mb-2.5 transition-colors duration-300 group-hover:text-gold">
                      {s.title}
                    </h3>
                    <p className="text-white/55 text-[13.5px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile: vertical cards, same one-at-a-time reveal */}
        <div className="lg:hidden flex flex-col gap-5">
          {steps.map((s, i) => {
            const active = activeStep >= i;
            return (
              <div
                key={s.title}
                className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] px-6 py-6 transition-all duration-700 ease-out"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <span
                  className="absolute -top-3 right-4 font-display font-bold select-none pointer-events-none leading-none"
                  style={{ fontSize: "56px", color: "rgba(255,255,255,0.05)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex items-start gap-4">
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-[15px] transition-all duration-500"
                    style={{
                      background: active ? "linear-gradient(135deg, #C9A04A, #9A7320)" : "#0C1626",
                      border: "2px solid #9A7320",
                      color: active ? "#0C1626" : "#6B7280",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display font-semibold text-[17px] text-white leading-snug mb-2">{s.title}</h3>
                    <p className="text-white/55 text-[13.5px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}