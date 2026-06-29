"use client";

import { useState } from "react";

const API_URL = "https://system-email-generator.onrender.com";

const PROGRAMMES = [
  { value: "HonoraryDoctorate",     label: "Honorary Doctorate" },
  { value: "HonoraryProfessorship", label: "Honorary Professorship" },
  { value: "DBA",                   label: "DBA — Doctor of Business Administration" },
  { value: "PhD",                   label: "PhD" },
  { value: "Master",                label: "Master's" },
  { value: "Bachelor",              label: "Bachelor's" },
];

const QUALIFICATIONS = [
  { value: "PhD",       label: "Doctorate / PhD" },
  { value: "Masters",   label: "Master's Degree" },
  { value: "Bachelors", label: "Bachelor's Degree" },
  { value: "Diploma",   label: "Diploma" },
  { value: "Other",     label: "Other" },
];

const EXPERIENCE = [
  { value: "20+",   label: "20+ years" },
  { value: "15-20", label: "15–20 years" },
  { value: "10-15", label: "10–15 years" },
  { value: "5-10",  label: "5–10 years" },
  { value: "0-5",   label: "Under 5 years" },
];

/* 6 steps: each defines the fields it shows */
const STEPS = [
  { label: "Personal Details",   key: "personal" },
  { label: "Contact",            key: "contact" },
  { label: "Education",          key: "education" },
  { label: "Experience",         key: "experience" },
  { label: "Programme",          key: "programme" },
  { label: "Review",             key: "review" },
];

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

function LineField({ label, value, onChange, placeholder, type = "text", shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}>{label}</label>
      <div className="relative pb-3">
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => { setFocused(true); onClearError?.(); }} onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none" style={{ caretColor: "#9A7320" }} />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

function LineSelect({ label, value, onChange, options, placeholder, shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}>{label}</label>
      <div className="relative pb-3">
        <select value={value} onChange={e => { onChange(e.target.value); onClearError?.(); }}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-[15px] focus:outline-none cursor-pointer appearance-none pr-6"
          style={{ color: value ? "#16263D" : "#8A92A0" }}>
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o.value} value={o.value} className="bg-[#F2F0E9] text-wine">{o.label}</option>)}
        </select>
        <svg className="absolute right-0 top-0.5 pointer-events-none transition-transform duration-200"
          style={{ color: hasErr ? "#ef4444" : "#9A7320", transform: focused ? "rotate(180deg)" : "rotate(0deg)" }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }} />
      </div>
      <FieldError msg={error} show={showError} />
    </div>
  );
}

const REVIEW_ROWS = (d) => [
  ["Name", d.name], ["Email", d.email], ["Phone", d.phone], ["Country", d.country],
  ["Highest Qualification", QUALIFICATIONS.find(q => q.value === d.qualification)?.label],
  ["Field of Study", d.fieldOfStudy],
  ["Experience", EXPERIENCE.find(e => e.value === d.experience)?.label],
  ["Designation", d.designation],
  ["Programme", PROGRAMMES.find(p => p.value === d.programme)?.label],
];

export default function ApplicationWizard({ source = "application_form", prefillProgramme = "" }) {
  const [step, setStep]       = useState(0);
  const [dir, setDir]         = useState(1);
  const [anim, setAnim]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake]     = useState([]);
  const [errors, setErrors]   = useState({});
  const [firstErr, setFirstErr] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [d, setD] = useState({
    name: "", fatherName: "", dob: "",
    email: "", phone: "", country: "", city: "",
    qualification: "", fieldOfStudy: "", institution: "",
    experience: "", designation: "", organisation: "",
    programme: prefillProgramme,
  });

  const upd = (k, v) => setD(p => ({ ...p, [k]: v }));
  const clearErr = (k) => { setErrors(p => ({ ...p, [k]: "" })); if (firstErr === k) setFirstErr(""); };

  const go = (next) => {
    setDir(next > step ? 1 : -1); setAnim(true);
    setTimeout(() => { setStep(next); setAnim(false); }, 230);
  };

  /* per-step validation */
  const validateStep = () => {
    const e = {}; const bad = [];
    const need = (k, msg, test) => { if (!(test ? test() : d[k]?.trim())) { e[k] = msg; bad.push(k); } };

    if (step === 0) {
      need("name", "This field is required");
      need("dob", "Please enter your date of birth");
    }
    if (step === 1) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { e.email = "Enter a valid email"; bad.push("email"); }
      if (!/^\+?[\d\s\-]{8,15}$/.test(d.phone))       { e.phone = "Enter a valid phone number"; bad.push("phone"); }
      need("country", "This field is required");
    }
    if (step === 2) {
      need("qualification", "Please select", () => !!d.qualification);
      need("fieldOfStudy", "This field is required");
    }
    if (step === 3) {
      need("experience", "Please select", () => !!d.experience);
      need("designation", "This field is required");
    }
    if (step === 4) {
      need("programme", "Please select a programme", () => !!d.programme);
    }
    if (bad.length) { setErrors(e); setFirstErr(bad[0]); setShake(bad); setTimeout(() => setShake([]), 600); return false; }
    return true;
  };

  const handleNext = () => {
    if (step < 5) { if (validateStep()) go(step + 1); return; }
    submitForm();
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const notes = [
        d.fatherName   && `Father: ${d.fatherName}`,
        d.dob          && `DOB: ${d.dob}`,
        d.city         && `City: ${d.city}`,
        d.qualification&& `Qualification: ${QUALIFICATIONS.find(q => q.value === d.qualification)?.label}`,
        d.fieldOfStudy && `Field: ${d.fieldOfStudy}`,
        d.institution  && `Institution: ${d.institution}`,
        d.experience   && `Experience: ${EXPERIENCE.find(x => x.value === d.experience)?.label}`,
        d.designation  && `Role: ${d.designation}`,
        d.organisation && `Org: ${d.organisation}`,
      ].filter(Boolean).join(" | ");
      const fd = new FormData();
      fd.append("name", d.name.trim());      fd.append("email", d.email.trim());
      fd.append("phone", d.phone.trim());    fd.append("country", d.country.trim());
      fd.append("programme", d.programme);   fd.append("notes", notes);
      fd.append("source", source);           fd.append("website", "");
      const res = await fetch(`${API_URL}/api/lead`, { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) { setSubmitted(true); }
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const slide = {
    opacity: anim ? 0 : 1,
    transform: anim ? `translateY(${dir > 0 ? "12px" : "-12px"})` : "translateY(0)",
    transition: "opacity 0.23s ease, transform 0.23s ease",
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[24px] border border-line shadow-sm px-8 lg:px-12 py-14">
        <div className="flex flex-col items-start" style={{ animation: "ctaUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards" }}>
          <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center mb-8" style={{ background: "rgba(154,115,32,0.08)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-4">Application Submitted</p>
          <h2 className="font-display font-semibold text-[36px] text-wine leading-tight mb-4">
            Thank you,<br />{d.name.split(" ")[0]}.
          </h2>
          <p className="text-slate text-[15px] leading-relaxed max-w-[400px]">
            Your application for <strong>{PROGRAMMES.find(p => p.value === d.programme)?.label}</strong> has been
            received. An admissions advisor will review it and contact you within 24 hours with the next steps.
          </p>
        </div>
        <style>{`@keyframes ctaUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] border border-line shadow-sm px-8 lg:px-12 py-12 lg:py-14">
      {/* progress */}
      <div className="flex items-center gap-1.5 mb-3">
        {STEPS.map((s, i) => (
          <span key={i} className="block rounded-full transition-all duration-400 flex-1"
            style={{ height: "3px", background: i <= step ? "#9A7320" : "#D4CFC4" }} />
        ))}
      </div>
      <div className="flex items-center justify-between mb-9">
        <p className="font-mono text-[9px] uppercase tracking-[2.5px] text-gold">{STEPS[step].label}</p>
        <span className="font-mono text-[9px] text-mist">{`0${step + 1}`} / 0{STEPS.length}</span>
      </div>

      {/* STEP 0: personal */}
      {step === 0 && (
        <div style={slide} className="flex flex-col gap-6">
          <LineField label="Full Name" value={d.name} onChange={v => upd("name", v)} placeholder="As on official documents"
            shake={shake.includes("name")} error={errors.name} showError={firstErr === "name"} onClearError={() => clearErr("name")} />
          <LineField label="Father's / Guardian's Name" value={d.fatherName} onChange={v => upd("fatherName", v)} placeholder="Optional" />
          <LineField label="Date of Birth" value={d.dob} onChange={v => upd("dob", v)} placeholder="DD / MM / YYYY"
            shake={shake.includes("dob")} error={errors.dob} showError={firstErr === "dob"} onClearError={() => clearErr("dob")} />
        </div>
      )}

      {/* STEP 1: contact */}
      {step === 1 && (
        <div style={slide} className="flex flex-col gap-6">
          <LineField label="Email Address" value={d.email} onChange={v => upd("email", v)} placeholder="you@company.com" type="email"
            shake={shake.includes("email")} error={errors.email} showError={firstErr === "email"} onClearError={() => clearErr("email")} />
          <LineField label="Contact Number" value={d.phone} onChange={v => upd("phone", v)} placeholder="+91 98765 43210" type="tel"
            shake={shake.includes("phone")} error={errors.phone} showError={firstErr === "phone"} onClearError={() => clearErr("phone")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LineField label="Country" value={d.country} onChange={v => upd("country", v)} placeholder="India, UAE, UK…"
              shake={shake.includes("country")} error={errors.country} showError={firstErr === "country"} onClearError={() => clearErr("country")} />
            <LineField label="City" value={d.city} onChange={v => upd("city", v)} placeholder="Optional" />
          </div>
        </div>
      )}

      {/* STEP 2: education */}
      {step === 2 && (
        <div style={slide} className="flex flex-col gap-6">
          <LineSelect label="Highest Qualification" value={d.qualification} onChange={v => upd("qualification", v)}
            options={QUALIFICATIONS} placeholder="Select…" shake={shake.includes("qualification")}
            error={errors.qualification} showError={firstErr === "qualification"} onClearError={() => clearErr("qualification")} />
          <LineField label="Field of Study" value={d.fieldOfStudy} onChange={v => upd("fieldOfStudy", v)} placeholder="e.g. Business Administration"
            shake={shake.includes("fieldOfStudy")} error={errors.fieldOfStudy} showError={firstErr === "fieldOfStudy"} onClearError={() => clearErr("fieldOfStudy")} />
          <LineField label="Institution" value={d.institution} onChange={v => upd("institution", v)} placeholder="Optional" />
        </div>
      )}

      {/* STEP 3: experience */}
      {step === 3 && (
        <div style={slide} className="flex flex-col gap-6">
          <LineSelect label="Years of Experience" value={d.experience} onChange={v => upd("experience", v)}
            options={EXPERIENCE} placeholder="Select…" shake={shake.includes("experience")}
            error={errors.experience} showError={firstErr === "experience"} onClearError={() => clearErr("experience")} />
          <LineField label="Current Designation" value={d.designation} onChange={v => upd("designation", v)} placeholder="CEO, Director, VP…"
            shake={shake.includes("designation")} error={errors.designation} showError={firstErr === "designation"} onClearError={() => clearErr("designation")} />
          <LineField label="Organisation" value={d.organisation} onChange={v => upd("organisation", v)} placeholder="Optional" />
        </div>
      )}

      {/* STEP 4: programme */}
      {step === 4 && (
        <div style={slide} className="flex flex-col gap-6">
          <LineSelect label="Programme You're Applying For" value={d.programme} onChange={v => upd("programme", v)}
            options={PROGRAMMES} placeholder="Select a programme…" shake={shake.includes("programme")}
            error={errors.programme} showError={firstErr === "programme"} onClearError={() => clearErr("programme")} />
          <div className="rounded-xl px-4 py-3.5 flex items-start gap-2.5" style={{ background: "rgba(154,115,32,0.06)", border: "1px solid rgba(154,115,32,0.18)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <p className="text-[13px] text-slate leading-relaxed">
              Document uploads (degree certificates, ID, CV) will be collected by your advisor after this step.
            </p>
          </div>
        </div>
      )}

      {/* STEP 5: review */}
      {step === 5 && (
        <div style={slide}>
          <p className="text-slate text-[14px] mb-6">Please review your details before submitting.</p>
          <div className="rounded-2xl border border-line divide-y divide-line overflow-hidden">
            {REVIEW_ROWS(d).filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-4 px-5 py-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-mist pt-1 shrink-0">{k}</span>
                <span className="text-[14px] text-wine font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* nav */}
      <div className="flex items-center gap-4 mt-10">
        {step > 0 && (
          <button onClick={() => go(step - 1)}
            className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-mist hover:border-wine hover:text-wine transition-all duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
        )}
        <button onClick={handleNext} disabled={loading}
          className="flex items-center gap-3 font-semibold text-[14px] px-8 py-3.5 rounded-full text-white transition-all duration-250 hover:-translate-y-0.5 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg,#21385C,#16263D)", boxShadow: "0 8px 20px rgba(22,38,61,0.25)" }}>
          {loading ? "Submitting…" : step < 5 ? "Continue" : "Submit Application"}
          {!loading && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
        </button>
      </div>

      <p className="font-mono text-[9px] text-mist tracking-wider mt-5">
        Your application is private · Reviewed within 24 hours
      </p>

      <style>{`
        @keyframes tipIn { from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-5px)} 40%,80%{transform:translateX(5px)} }
        .animate-shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both; }
      `}</style>
    </div>
  );
}