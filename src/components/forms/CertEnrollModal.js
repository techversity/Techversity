"use client";

import { useEffect } from "react";
import Image from "next/image";
import LeadForm from "@/components/forms/LeadForm";

/* cert: the certification object (title, image, accent, duration, level, stats)
   open: bool ; onClose: fn */
export default function CertEnrollModal({ cert, open, onClose }) {
  // lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={onClose} />

      {/* modal card */}
      <div
        className="relative w-full max-w-[860px] max-h-[92vh] overflow-hidden rounded-[24px] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2"
        style={{
          transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* close btn */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-wine shadow-md hover:bg-white transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── LEFT: cert image + info ── */}
        <div className="relative min-h-[200px] md:min-h-full p-7 flex flex-col justify-between overflow-hidden">
          <Image src={cert.image} alt={cert.title} fill sizes="430px" className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(12,22,38,0.55), rgba(12,22,38,0.78))" }} />
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: cert.accent }} />

          {/* top: tag */}
          <div className="relative z-10">
            {cert.tag && (
              <span className="font-mono text-[8px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold"
                style={{ background: cert.accent, color: "#fff" }}>
                {cert.tag}
              </span>
            )}
          </div>

          {/* bottom: title + meta + stats */}
          <div className="relative z-10">
            <p className="font-mono text-[9px] uppercase tracking-[2px] mb-1 font-semibold"
              style={{ color: cert.accent, filter: "brightness(1.5)" }}>
              {cert.field}
            </p>
            <h3 className="font-display font-semibold text-[24px] leading-tight mb-3"
              style={{ color: cert.accent, filter: "brightness(1.6)" }}>
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wide text-white/80 border border-white/25 rounded-full px-2.5 py-1">
                {cert.duration}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wide text-white/80 border border-white/25 rounded-full px-2.5 py-1">
                {cert.level}
              </span>
            </div>
            {cert.stats && (
              <div className="grid grid-cols-3 gap-2">
                {cert.stats.map((s) => (
                  <div key={s.label} className="rounded-lg p-2 text-center" style={{ background: "rgba(255,255,255,0.92)" }}>
                    <div className="font-display font-bold text-[15px] leading-none mb-0.5" style={{ color: cert.accent }}>
                      {s.val}<span className="text-[10px]">{s.unit}</span>
                    </div>
                    <div className="font-mono text-[7px] uppercase tracking-wider text-slate">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: form (programme prefilled) ── */}
        <div className="p-7 lg:p-8 overflow-y-auto bg-ivory-2">
          <LeadForm
            source={`cert_${cert.title.toLowerCase().replace(/\s+/g, "_")}`}
            programName={`${cert.title} Certification`}
            variant="contact"
            showMessage
            heading={<>Enrol in <span className="italic text-gold">{cert.title}.</span></>}
            subheading="Free Demo & Enrolment"
          />
        </div>
      </div>
    </div>
  );
}