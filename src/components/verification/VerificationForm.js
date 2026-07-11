"use client";

import { useState } from "react";

const API_URL = "https://system-email-generator.onrender.com";

/* ── underline text input, matching LeadForm's LineField pattern ── */
function LineField({ label, value, onChange, placeholder, type = "text", shake, error, showError, onClearError }) {
  const [focused, setFocused] = useState(false);
  const hasErr = !!error;
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label
        className="font-mono text-[9px] uppercase tracking-[2.5px] block mb-2.5 transition-colors duration-200"
        style={{ color: hasErr ? "#ef4444" : focused ? "#9A7320" : "#8A92A0" }}
      >
        {label}
      </label>
      <div className="relative pb-3">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => { setFocused(true); onClearError?.(); }}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-wine placeholder-mist/50 focus:outline-none"
          style={{ caretColor: "#9A7320" }}
        />
        <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: hasErr ? "#fca5a5" : "#E0DCCF" }} />
        <span
          className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-400"
          style={{ width: focused || value ? "100%" : "0%", background: hasErr ? "#ef4444" : "#9A7320" }}
        />
      </div>
      {error && showError && (
        <div className="flex items-center gap-1.5 mt-2" style={{ animation: "tipIn 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}>
          <span className="text-[11.5px] text-red-500 font-medium">{error}</span>
        </div>
      )}
    </div>
  );
}

function Checkmark({ drawn }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12" cy="12" r="10" stroke="#9A7320" strokeWidth="1.6"
        style={{ strokeDasharray: 63, strokeDashoffset: drawn ? 0 : 63, transition: "stroke-dashoffset 0.6s cubic-bezier(0.65,0,0.35,1)" }}
      />
      <path
        d="M8 12.5l2.5 2.5L16 9.5" stroke="#9A7320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 12, strokeDashoffset: drawn ? 0 : 12, transition: "stroke-dashoffset 0.4s ease 0.4s" }}
      />
    </svg>
  );
}

export default function VerificationForm({ type: initialType = "degree" }) {
  const [type, setType] = useState(initialType);
  const isDegree = type === "degree";
  const source = isDegree ? "degree_verification" : "certificate_verification";
  const idLabel = isDegree ? "Certificate / Enrollment ID" : "Certification ID";

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [shake, setShake] = useState([]);
  const [errors, setErrors] = useState({});
  const [firstErr, setFirstErr] = useState("");

  const [d, setD] = useState({ name: "", dob: "", credId: "", email: "" });
  const upd = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const clearErr = (k) => {
    setErrors((p) => ({ ...p, [k]: "" }));
    if (firstErr === k) setFirstErr("");
  };

  const validate = () => {
    const e = {};
    const bad = [];
    if (!d.name.trim()) { e.name = "This field is required"; bad.push("name"); }
    if (!d.dob.trim()) { e.dob = "This field is required"; bad.push("dob"); }
    if (!d.credId.trim()) { e.credId = "This field is required"; bad.push("credId"); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { e.email = "Enter a valid email"; bad.push("email"); }

    if (bad.length) {
      setErrors(e);
      setFirstErr(bad[0]);
      setShake(bad);
      setTimeout(() => setShake([]), 600);
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: d.name.trim(),
          dob: d.dob.trim(),
          credId: d.credId.trim(),
          email: d.email.trim(),
          type,
          source,
          website: "", // honeypot
        }),
      });
      const data = await res.json();
      if (data.ok) setDone(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white border border-line rounded-2xl p-7 lg:p-9 shadow-[0_20px_60px_-12px_rgba(22,38,61,0.12)] max-w-[480px] mx-auto">
      {/* corner brackets — same motif as "The standard" specimen card */}
      <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
      <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />

      {/* type toggle */}
      <div className="flex gap-1 p-1 rounded-full bg-ivory border border-line mb-6">
        {[
          { key: "degree", label: "Degree" },
          { key: "certificate", label: "Certificate" },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => !done && setType(opt.key)}
            className="flex-1 py-2 rounded-full font-mono text-[11px] uppercase tracking-[1px] transition-all duration-300"
            style={{
              background: type === opt.key ? "#16263D" : "transparent",
              color: type === opt.key ? "#F6EEDB" : "#8A92A0",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-7">
        <span className="font-mono text-[9px] uppercase tracking-[2px] text-mist">
          Specimen — {isDegree ? "degree" : "certificate"}
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(154,115,32,0.1)" }}>
          <Checkmark drawn={done} />
        </span>
      </div>

      {done ? (
        <div className="text-center py-4" style={{ animation: "tipIn 0.4s ease forwards" }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(154,115,32,0.1)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-[22px] text-wine mb-2.5">Request received.</h3>
          <p className="text-slate text-[14.5px] leading-relaxed max-w-[340px] mx-auto">
            A named advisor is confirming this record against the issuing institution's register.
            You'll hear back at <span className="text-wine font-medium">{d.email}</span> within
            twenty-four hours.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <LineField
            label="Full Name"
            value={d.name}
            onChange={(v) => upd("name", v)}
            placeholder="As it appears on the record"
            shake={shake.includes("name")}
            error={errors.name}
            showError={firstErr === "name"}
            onClearError={() => clearErr("name")}
          />
          <LineField
            label="Date of Birth"
            value={d.dob}
            onChange={(v) => upd("dob", v)}
            placeholder="DD / MM / YYYY"
            shake={shake.includes("dob")}
            error={errors.dob}
            showError={firstErr === "dob"}
            onClearError={() => clearErr("dob")}
          />
          <LineField
            label={idLabel}
            value={d.credId}
            onChange={(v) => upd("credId", v)}
            placeholder="e.g. TV-2024-00123"
            shake={shake.includes("credId")}
            error={errors.credId}
            showError={firstErr === "credId"}
            onClearError={() => clearErr("credId")}
          />
          <LineField
            label="Email — for the confirmation"
            value={d.email}
            onChange={(v) => upd("email", v)}
            placeholder="you@company.com"
            type="email"
            shake={shake.includes("email")}
            error={errors.email}
            showError={firstErr === "email"}
            onClearError={() => clearErr("email")}
          />

          <button
            onClick={submit}
            disabled={loading}
            className="mt-2 w-full text-white font-semibold text-[14px] py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#21385C,#16263D)" }}
          >
            {loading ? "Submitting…" : "Verify This Record"}
          </button>

          <p className="text-mist text-[11.5px] text-center leading-relaxed">
            Verification requests are confirmed personally against the issuing institution's
            register — never an automated instant match.
          </p>
        </div>
      )}

      <style>{`
        @keyframes tipIn { from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-5px)} 40%,80%{transform:translateX(5px)} }
        .animate-shake { animation: shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both; }
      `}</style>
    </div>
  );
}
