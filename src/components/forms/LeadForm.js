"use client";

import { useState } from "react";

const API_URL = "https://system-email-generator.onrender.com";

export const PROGRAMMES = [
  { value: "HonoraryDoctorate",     label: "Honorary Doctorate" },
  { value: "HonoraryProfessorship", label: "Honorary Professorship" },
  { value: "DBA",                   label: "DBA — Doctor of Business Administration" },
  { value: "PhD",                   label: "PhD" },
  { value: "Master",                label: "Master's" },
  { value: "Bachelor",              label: "Bachelor's" },
];

/* ── inline error below field ── */
function FieldError({ msg, show }) {
  if (!msg || !show) return null;
  return (
    <div className="flex items-center gap-1.5 mt-2"
      style={{ animation: "tipIn 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}>
      <div className="w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round">
          <line x1="12" y1="8" x2="12" y2="13" />
          <circle cx="12" cy="17" r="0.8" fill="white" />
        </svg>
      </div>
      <span className="text-[11.5px] text-red-500 font-medium">{msg}</span>
    </div>
  );
}

/* ── underline text input ── */
function LineField({ label, value, onChange, placeholder, type = "text", shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}>
        {label}
      </label>
      <div className="relative pb-3">
        <input
          type={type} value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => { setFocused(true); onClearError?.(); }}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none"
          style={{ caretColor: "#9A7320" }}
        />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

/* ── underline textarea ── */
function LineArea({ label, value, onChange, placeholder, shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}>
        {label}
      </label>
      <div className="relative pb-3">
        <textarea
          value={value} rows={3}
          onChange={e => onChange(e.target.value)}
          onFocus={() => { setFocused(true); onClearError?.(); }}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none resize-none"
          style={{ caretColor: "#9A7320" }}
        />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

/* ── underline select ── */
function LineSelect({ label, value, onChange, options, placeholder, shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}>
        {label}
      </label>
      <div className="relative pb-3">
        <select
          value={value}
          onChange={e => { onChange(e.target.value); onClearError?.(); }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-[15px] focus:outline-none cursor-pointer appearance-none pr-6"
          style={{ color: value ? "#16263D" : "#8A92A0" }}
        >
          <option value="">{placeholder}</option>
          {options.map(o => (
            <option key={o.value} value={o.value} className="bg-[#F2F0E9] text-wine">{o.label}</option>
          ))}
        </select>
        <svg className="absolute right-0 top-0.5 pointer-events-none transition-transform duration-200"
          style={{ color: hasErr ? "#ef4444" : "#9A7320", transform: focused ? "rotate(180deg)" : "rotate(0deg)" }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

/* ════════════════════════════════════════════
   LeadForm — reusable across the whole site

   props:
     source       string (CRM tag) — e.g. "contact_us", "dba_page"
     programName  optional — prefills + locks programme
     variant      "inline" | "contact"
     showMessage  bool (contact: show message textarea)
     heading      optional override
     subheading   optional override
     onSuccess    optional callback
   ════════════════════════════════════════════ */
export default function LeadForm({
  source = "website",
  programName = "",
  variant = "inline",
  showMessage = false,
  heading,
  subheading,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [shake, setShake]     = useState([]);
  const [errors, setErrors]   = useState({});
  const [firstErr, setFirstErr] = useState("");

  const [d, setD] = useState({
    name: "", email: "", phone: "", country: "",
    programme: programName || "", message: "",
  });

  const upd = (k, v) => setD(p => ({ ...p, [k]: v }));
  const clearErr = (k) => {
    setErrors(p => ({ ...p, [k]: "" }));
    if (firstErr === k) setFirstErr("");
  };

  const validate = () => {
    const e = {}; const bad = [];
    if (!d.name.trim())                                   { e.name = "This field is required"; bad.push("name"); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))       { e.email = "Enter a valid email"; bad.push("email"); }
    if (!/^\+?[\d\s\-]{8,15}$/.test(d.phone))             { e.phone = "Enter a valid phone number"; bad.push("phone"); }
    if (!programName && !d.programme)                     { e.programme = "Please select a programme"; bad.push("programme"); }
    if (showMessage && !d.message.trim())                { e.message = "Please add a message"; bad.push("message"); }

    if (bad.length) {
      setErrors(e); setFirstErr(bad[0]); setShake(bad);
      setTimeout(() => setShake([]), 600);
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name",      d.name.trim());
      fd.append("email",     d.email.trim());
      fd.append("phone",     d.phone.trim());
      fd.append("country",   d.country.trim());
      fd.append("programme", d.programme || programName);
      fd.append("notes",     d.message.trim());
      fd.append("source",    source);
      fd.append("website",   ""); // honeypot
      const res  = await fetch(`${API_URL}/api/lead`, { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) { setDone(true); onSuccess?.(); }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ── success state ── */
  if (done) {
    return (
      <div className="text-center py-10" style={{ animation: "tipIn 0.4s ease forwards" }}>
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(154,115,32,0.12)" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-[26px] text-wine mb-2">Thank you.</h3>
        <p className="text-slate text-[15px] max-w-sm mx-auto leading-relaxed">
          Your enquiry has reached our advisory team. A Techversity advisor will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {(heading || subheading) && (
        <div className="mb-8">
          {subheading && (
            <p className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-2">{subheading}</p>
          )}
          {heading && (
            <h2 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine leading-tight">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div className="flex flex-col gap-6">
        <LineField label="Your Name" value={d.name} onChange={v => upd("name", v)}
          placeholder="e.g. James Whitmore" shake={shake.includes("name")}
          error={errors.name} showError={firstErr === "name"} onClearError={() => clearErr("name")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <LineField label="Email Address" value={d.email} onChange={v => upd("email", v)}
            placeholder="you@company.com" type="email" shake={shake.includes("email")}
            error={errors.email} showError={firstErr === "email"} onClearError={() => clearErr("email")} />
          <LineField label="Contact Number" value={d.phone} onChange={v => upd("phone", v)}
            placeholder="+91 98765 43210" type="tel" shake={shake.includes("phone")}
            error={errors.phone} showError={firstErr === "phone"} onClearError={() => clearErr("phone")} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <LineField label="Country" value={d.country} onChange={v => upd("country", v)}
            placeholder="e.g. India" shake={shake.includes("country")} />
          {!programName && (
            <LineSelect label="Programme of Interest" value={d.programme} onChange={v => upd("programme", v)}
              options={PROGRAMMES} placeholder="Select a programme" shake={shake.includes("programme")}
              error={errors.programme} showError={firstErr === "programme"} onClearError={() => clearErr("programme")} />
          )}
        </div>

        {programName && (
          <div className="rounded-xl px-4 py-3 flex items-center gap-2.5"
            style={{ background: "rgba(154,115,32,0.08)", border: "1px solid rgba(154,115,32,0.2)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
            </svg>
            <span className="text-[13px] text-wine">
              Enquiring about <span className="font-semibold">{programName}</span>
            </span>
          </div>
        )}

        {showMessage && (
          <LineArea label="Your Message" value={d.message} onChange={v => upd("message", v)}
            placeholder="Tell us how we can help…" shake={shake.includes("message")}
            error={errors.message} showError={firstErr === "message"} onClearError={() => clearErr("message")} />
        )}

        <button
          type="button" onClick={submit} disabled={loading}
          className="group relative mt-2 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold text-[14px] text-white overflow-hidden transition-all duration-300 disabled:opacity-70"
          style={{ background: "linear-gradient(135deg,#B08A2E,#9A7320)" }}
        >
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
              Get Free Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[11px] text-mist leading-relaxed">
          By submitting, you agree to be contacted by a Techversity advisor. We respect your privacy.
        </p>
      </div>
    </div>
  );
}