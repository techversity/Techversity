"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: 0.08 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return v;
}

const programs = [
  "Doctor of Business Administration (DBA)",
  "PhD Program",
  "Honorary Doctorate",
  "Master's / MBA",
  "Executive Education",
  "Data Science Certification",
  "Agentic AI Certification",
  "Cybersecurity Certification",
  "Other / Not Sure Yet",
];

/* ── Single field with number + underline only ── */
function Field({ num, label, children, visible, delay }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        {/* step number */}
        <span className="font-mono text-[10px] text-gold/60 mt-1 shrink-0 w-5 tracking-wider">
          {num}
        </span>
        <div className="flex-1">
          {/* label */}
          <label className="font-mono text-[9px] uppercase tracking-[3px] text-white/40 block mb-2">
            {label}
          </label>
          {/* field — only bottom border */}
          {children}
        </div>
      </div>
    </div>
  );
}

const inputClass = `
  w-full bg-transparent border-0 border-b pb-3
  font-sans text-[15px] text-white placeholder-white/25
  focus:outline-none focus:border-gold
  transition-colors duration-300
  border-white/15
`;

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const visible    = useInView(sectionRef);
  const [form,     setForm]     = useState({ name: "", contact: "", program: "" });
  const [focused,  setFocused]  = useState(null);
  const [submitted,setSubmitted]= useState(false);
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.program) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* ── LEFT: editorial image ── */}
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "400px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <Image
            src="https://i.pinimg.com/736x/f2/43/46/f24346a4f08a935cda0f589c8b464a25.jpg"
            alt="Graduation ceremony"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* dark overlay */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.2) 60%, transparent 100%)" }}
          />

          {/* overlaid stat */}
          <div className="absolute bottom-10 left-10 right-10">
            <p className="font-display italic font-semibold text-[28px] lg:text-[34px] text-white leading-snug mb-4">
              "The credential that closes the argument."
            </p>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold/60" />
              <span className="font-mono text-[9px] uppercase tracking-[3px] text-white/50">
                Techversity Alumni, 2024
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: dark form panel ── */}
        <div
          className="relative flex flex-col justify-center px-10 lg:px-16 py-16"
          style={{
            background: "linear-gradient(160deg, #0B2545 0%, #081A2F 100%)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {/* subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#D9A441 1px,transparent 1px)", backgroundSize: "24px 24px" }}
          />

          <div className="relative max-w-[440px]">
            {/* eyebrow */}
            <div
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-gold/50" />
              <p className="font-mono text-[9px] uppercase tracking-[4px] text-gold/70">
                Start Your Journey
              </p>
            </div>

            {/* headline */}
            <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s" }}>
              <h2 className="font-display font-semibold text-[36px] lg:text-[42px] text-white leading-[1.1] mb-3">
                Ready to Earn<br />
                <span className="italic text-gold">Your Credential?</span>
              </h2>
              <p className="text-white/45 text-[13px] leading-relaxed mb-10">
                Speak with an advisor within 24 hours. No commitment, no pressure — just clarity on which path fits your goals.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                <Field num="01" label="Your Full Name" visible={visible} delay={350}>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass}
                    style={{ borderBottomColor: focused === "name" ? "#D9A441" : "rgba(255,255,255,0.15)" }}
                    required
                  />
                </Field>

                <Field num="02" label="Email or Phone" visible={visible} delay={450}>
                  <input
                    type="text"
                    placeholder="you@company.com or +91 98765 43210"
                    value={form.contact}
                    onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                    onFocus={() => setFocused("contact")}
                    onBlur={() => setFocused(null)}
                    className={inputClass}
                    style={{ borderBottomColor: focused === "contact" ? "#D9A441" : "rgba(255,255,255,0.15)" }}
                    required
                  />
                </Field>

                <Field num="03" label="Program of Interest" visible={visible} delay={550}>
                  <select
                    value={form.program}
                    onChange={e => setForm(f => ({ ...f, program: e.target.value }))}
                    onFocus={() => setFocused("program")}
                    onBlur={() => setFocused(null)}
                    className={inputClass + " cursor-pointer appearance-none"}
                    style={{ borderBottomColor: focused === "program" ? "#D9A441" : "rgba(255,255,255,0.15)" }}
                    required
                  >
                    <option value="" disabled className="bg-[#0B2545]">Select a program…</option>
                    {programs.map(p => (
                      <option key={p} value={p} className="bg-[#0B2545] text-white">{p}</option>
                    ))}
                  </select>
                </Field>

                {/* submit */}
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.6s ease 650ms, transform 0.6s ease 650ms",
                  }}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-between px-7 py-4 rounded-xl font-semibold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
                    style={{ background: loading ? "#7C5C16" : "linear-gradient(135deg,#C9A04A,#9A7320)" }}
                  >
                    <span>{loading ? "Sending…" : "Get Free Consultation"}</span>
                    {!loading ? (
                      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-200">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                        <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 12a9 9 0 11-6.219-8.56"/>
                        </svg>
                      </span>
                    )}
                  </button>

                  <p className="font-mono text-[9px] text-white/25 text-center mt-4 tracking-wider">
                    Your details are never shared. Advisor responds within 24 hours.
                  </p>
                </div>
              </form>
            ) : (
              /* success state */
              <div
                className="text-center py-8"
                style={{ animation: "fadeUpIn 0.5s ease forwards" }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[26px] text-white mb-2">
                  You're on the list.
                </h3>
                <p className="text-white/45 text-[13px] leading-relaxed max-w-[300px] mx-auto">
                  An advisor will reach out within 24 hours. Check your inbox — and your ambitions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}