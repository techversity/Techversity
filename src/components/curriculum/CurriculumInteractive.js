"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CurriculumInteractive({ data, cert, accent, enrollHref }) {
  const [openMod, setOpenMod] = useState(0);
  const [tab, setTab] = useState(0);

  return (
    <>
      {/* ═══ CURRICULUM MODULES ═══ */}
      {data.modules?.length > 0 && (
        <section className="bg-white border-y border-line">
          <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>The Complete Curriculum</p>
                <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight mb-2">
                  What you'll build — module by module.
                </h2>
                <p className="text-slate text-[14px]">{data.modules.length} modules · hands-on courses, workshops and real deliverables.</p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {data.modules.map((m, i) => {
                const isOpen = openMod === i;
                return (
                  <Reveal key={m.title} direction="up" delay={i < 4 ? i * 70 : 0}>
                  <div className="rounded-2xl bg-ivory border border-line overflow-hidden transition-all duration-300"
                    style={{ borderColor: isOpen ? `${accent}55` : undefined }}>
                    {/* header */}
                    <button onClick={() => setOpenMod(isOpen ? -1 : i)}
                      className="w-full flex items-center gap-4 p-5 lg:p-6 text-left">
                      <span className="shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center font-display font-bold text-white leading-none"
                        style={{ background: m.isCapstone ? "#16263D" : accent }}>
                        <span className="text-[8px] font-mono opacity-70 mb-0.5">{m.isCapstone ? "FINAL" : "MOD"}</span>
                        <span className="text-[16px]">{m.isCapstone ? "★" : (m.n || i + 1)}</span>
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-[16px] lg:text-[18px] text-wine leading-snug">{m.title}</h3>
                        <span className="font-mono text-[9px] uppercase tracking-wide text-mist">
                          {m.weeks}{m.courses ? ` · ${m.courses.length} courses` : ""}{m.workshops ? ` · ${m.workshops.length} workshops` : ""}
                        </span>
                      </div>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center transition-all duration-300"
                        style={{ background: isOpen ? accent : "transparent", borderColor: isOpen ? accent : undefined }}>
                        <svg className="transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "none", color: isOpen ? "#fff" : "#16263D" }}
                          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                      </span>
                    </button>

                    {/* body */}
                    <div className="grid transition-all duration-400 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                      <div className="overflow-hidden">
                        <div className="px-5 lg:px-6 pb-6">
                          <div className="lg:pl-16 space-y-5">

                            {m.courses?.length > 0 && (
                              <div>
                                <p className="font-mono text-[9px] uppercase tracking-[2px] mb-2.5" style={{ color: accent }}>Courses</p>
                                <ul className="space-y-2">
                                  {m.courses.map((c, ci) => (
                                    <li key={ci} className="flex items-start gap-2.5 text-[13.5px] text-slate leading-relaxed">
                                      <span className="font-mono text-[10px] font-bold shrink-0 mt-0.5" style={{ color: accent }}>{String(ci + 1).padStart(2, "0")}</span>
                                      {c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {m.workshops?.length > 0 && (
                              <div>
                                <p className="font-mono text-[9px] uppercase tracking-[2px] mb-2.5" style={{ color: accent }}>Hands-on Workshops</p>
                                <div className="space-y-2">
                                  {m.workshops.map((w, wi) => (
                                    <div key={wi} className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5" style={{ background: cert.accentBg }}>
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                      <span className="text-[13px] text-wine leading-snug">{w}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {m.deliverables && (
                              <div className="rounded-xl border border-dashed p-4" style={{ borderColor: `${accent}55` }}>
                                <p className="font-mono text-[9px] uppercase tracking-[2px] mb-1.5" style={{ color: accent }}>You'll Deliver</p>
                                <p className="text-[13px] text-wine leading-relaxed">{m.deliverables}</p>
                              </div>
                            )}

                            {m.skills?.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {m.skills.map((s) => (
                                  <span key={s} className="text-[10.5px] font-medium px-2.5 py-1 rounded-md" style={{ background: cert.accentBg, color: accent }}>{s}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══ LEARNING JOURNEY (tabs) ═══ */}
      {data.learningJourney?.length > 0 && (
        <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <Reveal direction="up">
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: accent }}>Learning Journey</p>
              <h2 className="font-display font-semibold text-[30px] lg:text-[40px] text-wine leading-tight">We're with you the whole way.</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            {/* tab list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {data.learningJourney.map((lj, i) => (
                <button key={lj.tab} onClick={() => setTab(i)}
                  className="text-left rounded-xl px-5 py-4 border transition-all duration-200 shrink-0 lg:shrink"
                  style={{
                    background: tab === i ? accent : "#fff",
                    borderColor: tab === i ? accent : "#E0DCCF",
                    color: tab === i ? "#fff" : "#16263D",
                  }}>
                  <span className="font-display font-semibold text-[15px]">{lj.tab}</span>
                </button>
              ))}
            </div>

            {/* tab content */}
            <div className="rounded-2xl bg-white border border-line p-7 lg:p-9">
              <h3 className="font-display font-semibold text-[22px] text-wine mb-6">{data.learningJourney[tab].heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.learningJourney[tab].points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: cert.accentBg }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-[14px] text-wine leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}