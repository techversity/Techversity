"use client";

import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

const certs = [
  {
    abbr: "DS", field: "Data Science", title: "Data Science",
    desc: "Build and deploy production-grade ML models. Python, TensorFlow, scikit-learn — from data wrangling to live inference.",
    skills: ["Python & Pandas", "Machine Learning", "Neural Networks", "Model Deployment"],
    duration: "12 Weeks", level: "Intermediate", tag: "Most Popular",
    href: "/certifications/data-science",
    accent: "#2563EB", accentBg: "#EFF6FF", accentMid: "#BFDBFE",
  },
  {
    abbr: "AI", field: "Artificial Intelligence", title: "Agentic AI",
    desc: "LLMs, RAG pipelines, autonomous agents — the fastest-growing skill in tech. LangChain, AutoGen, and beyond.",
    skills: ["Prompt Engineering", "RAG Architecture", "LangChain / AutoGen", "Agent Deployment"],
    duration: "8 Weeks", level: "Advanced", tag: "Trending",
    href: "/certifications/agentic-ai",
    accent: "#7C3AED", accentBg: "#F5F3FF", accentMid: "#DDD6FE",
  },
  {
    abbr: "CS", field: "Cybersecurity", title: "Cybersecurity",
    desc: "Ethical hacking, threat analysis, SOC operations. Build the skills employers can't find enough of.",
    skills: ["Ethical Hacking", "Threat Modelling", "SOC Operations", "Security Audits"],
    duration: "10 Weeks", level: "Intermediate", tag: null,
    href: "/certifications/cybersecurity",
    accent: "#DC2626", accentBg: "#FEF2F2", accentMid: "#FECACA",
  },
  {
    abbr: "DA", field: "Data & Business Intelligence", title: "Data Analytics",
    desc: "SQL, Power BI, Tableau — transform raw data into boardroom-ready insight. No coding background needed.",
    skills: ["SQL & Excel", "Power BI / Tableau", "Statistical Analysis", "Dashboard Design"],
    duration: "8 Weeks", level: "Beginner", tag: null,
    href: "/certifications/data-analytics",
    accent: "#059669", accentBg: "#ECFDF5", accentMid: "#A7F3D0",
  },
  {
    abbr: "CC", field: "Cloud Infrastructure", title: "Cloud Computing",
    desc: "AWS, Azure, GCP — architect, deploy, and manage enterprise cloud at scale. Exam-aligned curriculum.",
    skills: ["AWS / Azure / GCP", "Cloud Architecture", "DevOps & CI/CD", "Cost Optimisation"],
    duration: "10 Weeks", level: "Intermediate", tag: null,
    href: "/certifications/cloud-computing",
    accent: "#0891B2", accentBg: "#ECFEFF", accentMid: "#A5F3FC",
  },
  {
    abbr: "PM", field: "Project Management", title: "Project Management",
    desc: "PMP-aligned curriculum. Lead complex cross-functional projects using Agile, Scrum, and traditional methodologies.",
    skills: ["Agile & Scrum", "Risk Management", "Stakeholder Comms", "PMP Prep"],
    duration: "6 Weeks", level: "All Levels", tag: null,
    href: "/certifications/project-management",
    accent: "#9A7320", accentBg: "#FEFCE8", accentMid: "#FDE68A",
  },
];

export default function CertificationsCarousel() {
  const sectionRef  = useRef(null);
  const [inView,    setInView]   = useState(false);
  const [active,    setActive]   = useState(0);
  const [prev,      setPrev]     = useState(null);
  const [animating, setAnimating]= useState(false);
  const timerRef    = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const switchTo = useCallback((idx) => {
    if (idx === active || animating) return;
    setPrev(active);
    setAnimating(true);
    setActive(idx);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 420);
  }, [active, animating]);

  /* auto-cycle every 4s */
  useEffect(() => {
    if (!inView) return;
    timerRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % certs.length;
        setPrev(a);
        setAnimating(true);
        setTimeout(() => { setPrev(null); setAnimating(false); }, 420);
        return next;
      });
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [inView]);

  const resetTimer = (idx) => {
    clearInterval(timerRef.current);
    switchTo(idx);
    timerRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % certs.length;
        setPrev(a); setAnimating(true);
        setTimeout(() => { setPrev(null); setAnimating(false); }, 420);
        return next;
      });
    }, 4000);
  };

  const c = certs[active];

  return (
    <section ref={sectionRef} className="bg-white py-20 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* ── header ── */}
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

        {/* ── tab pills ── */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
          className="flex flex-wrap gap-2 mb-8">
          {certs.map((cert, i) => (
            <button
              key={cert.abbr}
              onClick={() => resetTimer(i)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold border transition-all duration-250"
              style={{
                background:   active === i ? cert.accent        : "transparent",
                color:        active === i ? "#fff"             : cert.accent,
                borderColor:  active === i ? cert.accent        : `${cert.accent}40`,
              }}
            >
              <span className="font-mono font-bold text-[11px]">{cert.abbr}</span>
              <span className="hidden sm:inline">{cert.title}</span>

              {/* progress bar inside active tab */}
              {active === i && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    animation: "tabProgress 4s linear forwards",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── featured panel ── */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ borderColor: `${c.accent}25` }}
          >
            {/* animated content */}
            <div
              key={active}
              style={{ animation: "panelIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] min-h-[340px]">

                {/* LEFT — accent panel */}
                <div
                  className="relative flex flex-col items-center justify-center p-10 gap-5 overflow-hidden"
                  style={{ background: c.accentBg }}
                >
                  {/* large ghost abbr */}
                  <span
                    className="absolute font-display font-bold select-none pointer-events-none"
                    style={{
                      fontSize: "180px", lineHeight: 1,
                      color: c.accentMid,
                      opacity: 0.55,
                      bottom: "-20px", right: "-10px",
                    }}
                  >
                    {c.abbr}
                  </span>

                  {/* abbr badge */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-[32px] shadow-lg"
                    style={{ background: c.accent, color: "#fff" }}
                  >
                    {c.abbr}
                  </div>

                  <div className="relative z-10 text-center">
                    <p className="font-mono text-[9px] uppercase tracking-[2px] mb-1" style={{ color: c.accent }}>{c.field}</p>
                    <h3 className="font-display font-semibold text-[28px] leading-tight" style={{ color: c.accent }}>
                      {c.title}
                    </h3>
                  </div>

                  {/* tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 justify-center">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold"
                      style={{ background: c.accent, color: "#fff" }}>
                      {c.duration}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{ color: c.accent, borderColor: `${c.accent}50` }}>
                      {c.level}
                    </span>
                    {c.tag && (
                      <span className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border"
                        style={{ color: c.accent, borderColor: `${c.accent}50` }}>
                        {c.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* RIGHT — content */}
                <div className="flex flex-col justify-between p-8 lg:p-10 bg-white">
                  <div>
                    <p className="text-slate text-[15px] leading-[1.75] mb-8">{c.desc}</p>

                    {/* skills grid */}
                    <div className="mb-8">
                      <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-3">What you'll learn</p>
                      <div className="grid grid-cols-2 gap-2.5">
                        {c.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.accent }} />
                            <span className="text-[13px] text-wine font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* bottom CTA row */}
                  <div className="flex items-center gap-4 pt-6 border-t border-line">
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-2.5 font-semibold text-[13px] px-6 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{ background: c.accent }}
                    >
                      Enroll Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href={c.href}
                      className="text-[13px] font-medium text-mist hover:text-wine transition-colors duration-150">
                      View Curriculum →
                    </Link>

                    {/* dot nav */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      {certs.map((_, i) => (
                        <button key={i} onClick={() => resetTimer(i)}>
                          <span
                            className="block rounded-full transition-all duration-300"
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

        {/* ── bottom strip ── */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-line mt-8">
          <p className="text-[13px] text-mist">
            Every certification includes <span className="text-wine font-medium">career support</span> — resume review, interview prep &amp; placement assistance.
          </p>
          <Link href="/certifications"
            className="shrink-0 inline-flex items-center gap-2 border border-wine text-wine font-semibold text-[13px] px-5 py-2.5 rounded-xl hover:bg-wine hover:text-white transition-all duration-200">
            Browse All →
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tabProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}