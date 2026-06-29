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

const MCQ = [
  {
    label: "Your Standing", key: "experience",
    q: "Where are you in your career right now?",
    opts: [
      "Founder, CEO or Business Owner",
      "C-Suite Executive or Board Member",
      "Senior Manager, Director or VP",
      "Mid-level Professional looking to advance",
    ],
  },
  {
    label: "Your Goal", key: "intention",
    q: "What do you most want this credential to achieve for you?",
    opts: [
      "Add 'Dr.' to my name and strengthen my personal brand",
      "Open doors to international speaking and advisory roles",
      "Accelerate business growth and global credibility",
      "Transition into research, academia or consulting",
    ],
  },
  {
    label: "Your Timeline", key: "pathway",
    q: "When are you looking to get started?",
    opts: [
      "As soon as possible — I'm ready now",
      "Within the next 3 months",
      "In the next 6 months",
      "Just exploring — want to understand my options first",
    ],
  },
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
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none"
          style={{ caretColor: "#9A7320" }} />
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

function Option({ label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick}
      className="w-full flex items-center gap-4 py-3.5 border-b text-left transition-all duration-200"
      style={{ borderColor: selected ? "rgba(154,115,32,0.25)" : "rgba(224,220,207,0.8)" }}>
      <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200"
        style={{ borderColor: selected ? "#9A7320" : "#C8C4B8", background: selected ? "#9A7320" : "transparent" }}>
        {selected && <span className="w-2 h-2 bg-white rounded-full" />}
      </span>
      <span className="text-[14px] leading-snug transition-colors duration-200"
        style={{ color: selected ? "#16263D" : "#8A92A0", fontWeight: selected ? 500 : 400 }}>{label}</span>
      {selected && (
        <svg className="ml-auto shrink-0 text-gold" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  );
}

/* prefillProgramme: lock programme if user came from a program page (optional) */
export default function EligibilityWizard({ source = "eligibility_check", prefillProgramme = "" }) {
  const [step, setStep]       = useState(0);
  const [dir, setDir]         = useState(1);
  const [anim, setAnim]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake]     = useState([]);
  const [errors, setErrors]   = useState({});
  const [firstErr, setFirstErr] = useState("");

  const [d, setD] = useState({
    name: "", email: "", phone: "", country: "",
    programme: prefillProgramme, designation: "",
    experience: "", intention: "", pathway: "",
  });

  const upd = (k, v) => setD(p => ({ ...p, [k]: v }));
  const clearErr = (k) => { setErrors(p => ({ ...p, [k]: "" })); if (firstErr === k) setFirstErr(""); };

  const go = (next) => {
    setDir(next > step ? 1 : -1); setAnim(true);
    setTimeout(() => { setStep(next); setAnim(false); }, 230);
  };

  const validate0 = () => {
    const e = {}; const bad = [];
    if (!d.name.trim())                             { e.name = "This field is required"; bad.push("name"); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { e.email = "Enter a valid email"; bad.push("email"); }
    if (!/^\+?[\d\s\-]{8,15}$/.test(d.phone))       { e.phone = "Enter a valid phone number"; bad.push("phone"); }
    if (!d.country.trim())                          { e.country = "This field is required"; bad.push("country"); }
    if (!d.programme)                               { e.programme = "Please select a programme"; bad.push("programme"); }
    if (bad.length) { setErrors(e); setFirstErr(bad[0]); setShake(bad); setTimeout(() => setShake([]), 600); return false; }
    return true;
  };

  const handleNext = () => {
    if (step === 0) { if (validate0()) go(1); return; }
    const key = MCQ[step - 1]?.key;
    if (!d[key]) return;
    if (step < 3) { go(step + 1); return; }
    submitForm();
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const notes = [
        d.designation && `Role: ${d.designation}`,
        d.experience  && `Standing: ${d.experience}`,
        d.intention   && `Goal: ${d.intention}`,
        d.pathway     && `Timeline: ${d.pathway}`,
      ].filter(Boolean).join(" | ");
      const fd = new FormData();
      fd.append("name", d.name.trim());      fd.append("email", d.email.trim());
      fd.append("phone", d.phone.trim());    fd.append("country", d.country.trim());
      fd.append("programme", d.programme);   fd.append("notes", notes);
      fd.append("source", source);           fd.append("website", "");
      const res = await fetch(`${API_URL}/api/lead`, { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) go(4);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const slide = {
    opacity: anim ? 0 : 1,
    transform: anim ? `translateY(${dir > 0 ? "12px" : "-12px"})` : "translateY(0)",
    transition: "opacity 0.23s ease, transform 0.23s ease",
  };
  const canNext = step === 0 || (MCQ[step - 1] && !!d[MCQ[step - 1].key]);

  return (
    <div className="bg-white rounded-[24px] border border-line shadow-sm px-8 lg:px-12 py-12 lg:py-14">
      {step < 4 ? (
        <>
          {/* progress dots */}
          <div className="flex items-center gap-2.5 mb-9">
            {[0, 1, 2, 3].map(i => (
              <span key={i} className="block rounded-full transition-all duration-400"
                style={{ width: step === i ? "28px" : "7px", height: "3px", background: i <= step ? "#9A7320" : "#D4CFC4" }} />
            ))}
            <span className="font-mono text-[9px] text-mist ml-1">{`0${step + 1}`} / 04</span>
          </div>

          {/* heading */}
          <div style={slide} className="mb-9">
            <p className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-2">
              {step === 0 ? "Your Details" : MCQ[step - 1].label}
            </p>
            <h2 className="font-display font-semibold text-[30px] lg:text-[38px] text-wine leading-tight">
              {step === 0 && <>Begin with the <span className="italic text-gold">essentials.</span></>}
              {step === 1 && <>Tell us about <span className="italic text-gold">your standing.</span></>}
              {step === 2 && <>What's your <span className="italic text-gold">primary goal?</span></>}
              {step === 3 && <>And your <span className="italic text-gold">timeline?</span></>}
            </h2>
          </div>

          {/* STEP 0 */}
          {step === 0 && (
            <div style={slide} className="flex flex-col gap-6">
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
                <LineField label="Based In" value={d.country} onChange={v => upd("country", v)}
                  placeholder="India, UAE, UK…" shake={shake.includes("country")}
                  error={errors.country} showError={firstErr === "country"} onClearError={() => clearErr("country")} />
                <LineField label="Your Designation" value={d.designation} onChange={v => upd("designation", v)}
                  placeholder="CEO, Director…" />
              </div>
              <LineSelect label="Programme of Interest" value={d.programme} onChange={v => upd("programme", v)}
                options={PROGRAMMES} placeholder="Select a programme…" shake={shake.includes("programme")}
                error={errors.programme} showError={firstErr === "programme"} onClearError={() => clearErr("programme")} />
            </div>
          )}

          {/* STEPS 1–3 */}
          {step >= 1 && step <= 3 && (
            <div style={slide}>
              <p className="text-slate text-[15px] italic mb-7">"{MCQ[step - 1].q}"</p>
              <div className="flex flex-col">
                {MCQ[step - 1].opts.map(opt => (
                  <Option key={opt} label={opt} selected={d[MCQ[step - 1].key] === opt}
                    onClick={() => upd(MCQ[step - 1].key, opt)} />
                ))}
              </div>
            </div>
          )}

          {/* nav */}
          <div className="flex items-center gap-4 mt-10">
            {step > 0 && (
              <button onClick={() => go(step - 1)}
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-mist hover:border-wine hover:text-wine transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <button onClick={handleNext} disabled={loading || (step > 0 && !canNext)}
              className="flex items-center gap-3 font-semibold text-[14px] px-8 py-3.5 rounded-full text-white transition-all duration-250 hover:-translate-y-0.5 disabled:opacity-50"
              style={{ background: "linear-gradient(135deg,#21385C,#16263D)", boxShadow: "0 8px 20px rgba(22,38,61,0.25)" }}>
              {loading ? "Sending…" : step < 3 ? "Continue" : "Get Free Consultation"}
              {!loading
                ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                : <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>}
            </button>
          </div>

          <p className="font-mono text-[9px] text-mist tracking-wider mt-5">
            Your details are private · Advisor responds within 24 hours
          </p>
        </>
      ) : (
        /* success */
        <div className="flex flex-col items-start py-4" style={{ animation: "ctaUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards" }}>
          <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center mb-8" style={{ background: "rgba(154,115,32,0.08)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-4">Application Received</p>
          <h2 className="font-display font-semibold text-[36px] text-wine leading-tight mb-4">
            You're all set,<br />{d.name.split(" ")[0]}.
          </h2>
          <p className="text-slate text-[15px] leading-relaxed max-w-[360px]">
            A dedicated advisor will reach out within 24 hours to discuss your path to{" "}
            <strong>{PROGRAMMES.find(p => p.value === d.programme)?.label || "your credential"}</strong>.
          </p>
        </div>
      )}

      <style>{`
        @keyframes tipIn { from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ctaUp { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-5px)} 40%,80%{transform:translateX(5px)} }
        .animate-shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both; }
      `}</style>
    </div>
  );
}