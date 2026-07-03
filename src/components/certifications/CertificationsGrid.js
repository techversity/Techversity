"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import useInView from "@/hooks/useInView";

const CheckIcon = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = ({ color = "currentColor" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function CertCard({ c, index, inView }) {
  return (
    <div
      className="group relative bg-white rounded-[20px] border border-line overflow-hidden flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 70}ms, transform 0.6s ease ${index * 70}ms`,
      }}
    >
      {/* image */}
      <div className="relative h-[168px] overflow-hidden">
        <Image
          src={c.image}
          alt={c.title}
          fill
          sizes="380px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,18,30,0.75) 100%)" }} />
        <span className="absolute top-0 left-0 right-0 h-1" style={{ background: c.accent }} />

        {c.tag && (
          <span
            className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold bg-white/95"
            style={{ color: c.accent }}
          >
            {c.tag}
          </span>
        )}

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
          <span className="font-display font-bold text-white text-[34px] leading-none opacity-90">{c.abbr}</span>
          <span className="font-mono text-[9px] uppercase tracking-wide text-white/85 mb-1">{c.field}</span>
        </div>
      </div>

      {/* body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[21px] text-wine leading-tight mb-2">{c.title}</h3>
        <p className="text-[13.5px] text-slate leading-relaxed mb-4 line-clamp-3">{c.desc}</p>

        {/* skill chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {c.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="font-mono text-[9.5px] uppercase tracking-wide px-2.5 py-1 rounded-full border"
              style={{ color: c.accent, borderColor: `${c.accent}40`, background: c.accentBg }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* stats row */}
        <div className="grid grid-cols-3 gap-2 mb-5 py-4 border-y border-line">
          {c.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-wine text-[17px] leading-none">
                {s.val}
                {s.unit && <span className="text-[11px] font-semibold text-mist ml-0.5">{s.unit}</span>}
              </p>
              <p className="font-mono text-[8.5px] uppercase tracking-wide text-mist mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* included */}
        <ul className="space-y-1.5 mb-6">
          {c.included.slice(0, 2).map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12.5px] text-slate">
              <CheckIcon color={c.accent} />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2.5">
          <Link
            href={`/certifications/enroll/${c.href.split("/").filter(Boolean).pop()}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 font-semibold text-[12.5px] text-white transition-colors"
            style={{ background: c.accent }}
          >
            Apply Now <ArrowIcon color="#fff" />
          </Link>
          <Link
            href={c.href}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 font-semibold text-[12.5px] border transition-colors"
            style={{ color: c.accent, borderColor: `${c.accent}55` }}
          >
            View Curriculum
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsGrid({ certs }) {
  const [sectionRef, inView] = useInView({ threshold: 0.06 });
  const levels = useMemo(() => ["All", ...Array.from(new Set(certs.map((c) => c.level)))], [certs]);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? certs : certs.filter((c) => c.level === active);

  return (
    <section ref={sectionRef} className="max-w-[1260px] mx-auto px-5 lg:px-8 pb-8">
      {/* filter chips */}
      <div className="flex flex-wrap gap-2 mb-9">
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setActive(lvl)}
            className={`font-mono text-[10.5px] uppercase tracking-wide px-4 py-2 rounded-full border transition-all duration-300 ${
              active === lvl
                ? "bg-wine text-white border-wine"
                : "bg-white text-slate border-line hover:border-wine/40 hover:text-wine"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c, i) => (
          <CertCard key={c.href} c={c} index={i} inView={inView} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate py-16">No certifications found at this level right now.</p>
      )}
    </section>
  );
}