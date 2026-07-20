"use client";

import { useState } from "react";

const API_URL = "https://system-email-generator.onrender.com";

function FieldError({ msg, show }) {
  if (!msg || !show) return null;
  return (
    <div className="flex items-center gap-1.5 mt-2" style={{ animation: "tipIn 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}>
      <div className="w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round">
          <line x1="12" y1="8" x2="12" y2="13" /><circle cx="12" cy="17" r="0.8" fill="white" />
        </svg>
      </div>
      <span className="text-[11.5px] text-red-500 font-medium">{msg}</span>
    </div>
  );
}

function LineField({ label, value, onChange, placeholder, type = "text", accent, shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? accent : "#8A92A0" }}>{label}</label>
      <div className="relative pb-3">
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => { setFocused(true); onClearError?.(); }} onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none" style={{ caretColor: accent }} />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : accent }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

function LineArea({ label, value, onChange, placeholder, accent }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: focused ? accent : "#8A92A0" }}>{label}</label>
      <div className="relative">
        <textarea value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none resize-none leading-snug block"
          style={{ caretColor: accent, height: "48px", paddingBottom: "8px" }} />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: accent }} />
      </div>
    </div>
  );
}

export default function CertEnrollForm({ cert, slug }) {
  const accent = cert.accent;
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [shake, setShake]     = useState([]);
  const [errors, setErrors]   = useState({});
  const [firstErr, setFirstErr] = useState("");
  const [d, setD] = useState({ name: "", email: "", phone: "", country: "", message: "" });

  const upd = (k, v) => setD(p => ({ ...p, [k]: v }));
  const clearErr = (k) => { setErrors(p => ({ ...p, [k]: "" })); if (firstErr === k) setFirstErr(""); };

  const validate = () => {
    const e = {}; const bad = [];
    if (!d.name.trim())                             { e.name = "This field is required"; bad.push("name"); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { e.email = "Enter a valid email"; bad.push("email"); }
    if (!/^\+?[\d\s\-]{8,15}$/.test(d.phone))       { e.phone = "Enter a valid phone number"; bad.push("phone"); }
    if (bad.length) { setErrors(e); setFirstErr(bad[0]); setShake(bad); setTimeout(() => setShake([]), 600); return false; }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", d.name.trim());      fd.append("email", d.email.trim());
      fd.append("phone", d.phone.trim());    fd.append("country", d.country.trim());
      fd.append("programme", `${cert.title} Certification`);
      fd.append("notes", d.message.trim());
      fd.append("source", `cert_${slug}`);   fd.append("website", "");
      const res = await fetch(`${API_URL}/api/lead`, { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) setDone(true);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  if (done) {
    return (
      <div className="bg-white rounded-[24px] border border-line shadow-sm p-8 lg:p-10 text-center" style={{ animation: "tipIn 0.4s ease forwards" }}>
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `${accent}1A` }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="font-display font-semibold text-[26px] text-wine mb-2">You're enrolled-ready!</h3>
        <p className="text-slate text-[15px] leading-relaxed">
          Thanks for your interest in <strong>{cert.title}</strong>. A Techversity advisor will call you within 24 hours
          to guide you through the next steps and confirm enrolment.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] border border-line shadow-sm p-8 lg:p-9">
      {/* header */}
      <div className="mb-7">
        <p className="font-mono text-[9px] uppercase tracking-[3px] mb-2" style={{ color: accent }}>Enrolment & Advisory</p>
        <h2 className="font-display font-semibold text-[27px] text-wine leading-tight">
          Reserve your seat.
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <LineField label="Your Name" value={d.name} onChange={v => upd("name", v)} placeholder="e.g. Aarav Sharma" accent={accent}
          shake={shake.includes("name")} error={errors.name} showError={firstErr === "name"} onClearError={() => clearErr("name")} />
        <LineField label="Email Address" value={d.email} onChange={v => upd("email", v)} placeholder="you@email.com" type="email" accent={accent}
          shake={shake.includes("email")} error={errors.email} showError={firstErr === "email"} onClearError={() => clearErr("email")} />
        <div className="grid grid-cols-2 gap-5">
          <LineField label="Phone" value={d.phone} onChange={v => upd("phone", v)} placeholder="+91 98765…" type="tel" accent={accent}
            shake={shake.includes("phone")} error={errors.phone} showError={firstErr === "phone"} onClearError={() => clearErr("phone")} />
          <LineField label="Country" value={d.country} onChange={v => upd("country", v)} placeholder="India" accent={accent} />
        </div>

        {/* locked programme */}
        <div className="rounded-xl px-4 py-3 flex items-center gap-2.5" style={{ background: `${accent}0F`, border: `1px solid ${accent}33` }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
          </svg>
          <span className="text-[13px] text-wine">
            Enrolling in <span className="font-semibold">{cert.title}</span>
          </span>
        </div>

        <LineArea label="Anything you'd like to ask? (optional)" value={d.message} onChange={v => upd("message", v)}
          placeholder="e.g. I'd like to know about batch timings…" accent={accent} />

        <button type="button" onClick={submit} disabled={loading}
          className="group relative mt-1 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold text-[14px] text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}D9)`, boxShadow: `0 10px 26px ${accent}40` }}>
          {loading ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
                <path d="M21 12a9 9 0 0 1-9 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              Reserve My Seat
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </>
          )}
        </button>

        <p className="text-[11px] text-mist leading-relaxed text-center">
          By submitting, you agree to be contacted by a Techversity advisor.
        </p>
      </div>

      <style>{`
        @keyframes tipIn { from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-5px)} 40%,80%{transform:translateX(5px)} }
        .animate-shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both; }
      `}</style>
    </div>
  );
}