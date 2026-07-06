"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { universities } from "@/lib/universities";
import { doctorateTypes } from "@/lib/doctorate";
import { flagUrl } from "@/lib/flag";

const EXTRA_LABELS = { masters: "MA", professorship: "PROF", "executive-education": "EXEC" };
const programLabel = (slug) =>
  doctorateTypes.find((d) => d.slug === slug)?.abbr || EXTRA_LABELS[slug] || slug;

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
}

/* ── Desktop: row expands on hover, fixed image panel slides in beside it ── */
function ExpandableList({ list }) {
  const [sectionRef, shown] = useReveal(0.1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (list.length === 0) return null;

  return (
    <div ref={sectionRef} className="hidden lg:block">
      <div className="flex flex-col">
        {list.map((item, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <Link
              key={item.slug}
              href={`/universities/${item.slug}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex items-stretch gap-8 border-b overflow-hidden"
              style={{
                borderColor: "#E0DCCF",
                paddingTop: isHovered ? "28px" : "32px",
                paddingBottom: isHovered ? "28px" : "32px",
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 50}ms, transform 0.6s ease ${i * 50}ms, padding 0.5s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {/* animated underline that draws in on hover */}
              <span
                className="absolute bottom-0 left-0 h-px bg-gold"
                style={{
                  width: isHovered ? "100%" : "0%",
                  transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              />

              {/* index number */}
              <span
                className="font-mono text-[12px] tabular-nums shrink-0 self-start pt-1 transition-colors duration-300"
                style={{ color: isHovered ? "#9A7320" : "#C7CBD1" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* fixed image panel — slides open inline, does not follow cursor */}
              <div
                className="relative shrink-0 rounded-[14px] overflow-hidden ring-1 ring-white/15 self-center"
                style={{
                  width: isHovered ? "180px" : "0px",
                  height: isHovered ? "130px" : "0px",
                  opacity: isHovered ? 1 : 0,
                  transition:
                    "width 0.5s cubic-bezier(0.16,1,0.3,1), height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
                  boxShadow: isHovered ? "0 20px 40px -12px rgba(22,38,61,0.35)" : "none",
                }}
              >
                <Image
                  src={item.buildingImage}
                  alt={item.name}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,22,36,0.75) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-white/95 py-0.5 pl-0.5 pr-1.5">
                  <span className="relative w-3 h-3 rounded-full overflow-hidden ring-1 ring-white shrink-0">
                    <Image src={flagUrl(item.country)} alt={item.country} fill className="object-cover" />
                  </span>
                  <span className="font-mono text-[7px] uppercase tracking-wide text-wine">
                    {item.country}
                  </span>
                </div>
              </div>

              {/* text content */}
              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <h3
                  className="font-display font-semibold leading-none truncate transition-all duration-300"
                  style={{
                    fontSize: "clamp(22px, 2.8vw, 38px)",
                    color: isHovered ? "#9A7320" : "#16263D",
                    transform: isHovered ? "translateX(6px)" : "translateX(0)",
                  }}
                >
                  {item.name}
                </h3>

                {/* tagline — reveals only on hover */}
                <p
                  className="font-display italic text-[14px] text-slate overflow-hidden"
                  style={{
                    maxHeight: isHovered ? "24px" : "0px",
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? "8px" : "0px",
                    transform: isHovered ? "translateX(6px)" : "translateX(0)",
                    transition: "max-height 0.4s ease, opacity 0.35s ease, margin-top 0.4s ease, transform 0.3s ease",
                  }}
                >
                  {item.tagline}
                </p>

                <p
                  className="font-mono text-[8.5px] uppercase tracking-[2px] overflow-hidden"
                  style={{
                    color: "#9A7320",
                    maxHeight: isHovered ? "16px" : "0px",
                    opacity: isHovered ? 0.85 : 0,
                    marginTop: isHovered ? "6px" : "0px",
                    transition: "max-height 0.4s ease, opacity 0.35s ease, margin-top 0.4s ease",
                  }}
                >
                  Est. {item.founded} · {item.mode}
                </p>
              </div>

              {/* right meta */}
              <div className="flex items-center gap-7 shrink-0">
                <div className="hidden sm:flex flex-wrap gap-1.5 justify-end max-w-[180px]">
                  {item.programsOffered.map((p) => (
                    <span
                      key={p}
                      className="font-mono text-[8.5px] uppercase tracking-wide text-mist border border-line rounded-full px-2 py-0.5 transition-colors duration-300 group-hover:border-gold/40"
                    >
                      {programLabel(p)}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-mist text-right whitespace-nowrap leading-relaxed">
                  {item.country}
                  <br />
                  Est. {item.founded}
                </p>
                <svg
                  className="shrink-0 transition-all duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                    color: "#9A7320",
                  }}
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ── Mobile: compact tappable rows ── */
function MobileRow({ u, index }) {
  const [ref, shown] = useReveal(0.15);
  const delay = index * 70;

  return (
    <Link
      href={`/universities/${u.slug}`}
      ref={ref}
      className="flex items-center gap-4 py-5 border-b border-line active:bg-gold-light/30 transition-colors duration-200"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateX(0)" : "translateX(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden shrink-0 ring-1 ring-line">
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: shown ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: `clip-path 0.7s cubic-bezier(0.77,0,0.175,1) ${delay + 80}ms`,
          }}
        >
          <Image src={u.buildingImage} alt={u.name} fill sizes="80px" className="object-cover" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="relative w-[16px] h-[11px] rounded-[2px] overflow-hidden ring-1 ring-line shrink-0">
            <Image src={flagUrl(u.country)} alt={u.country} fill className="object-cover" />
          </span>
          <span className="font-mono text-[8.5px] uppercase tracking-wide text-mist">
            {u.country} · Est. {u.founded}
          </span>
        </div>
        <h3 className="font-display font-semibold text-[17px] text-wine leading-snug truncate mb-1">
          {u.name}
        </h3>
        <p className="font-display italic text-[12.5px] text-slate leading-snug truncate">
          {u.tagline}
        </p>
      </div>
      <svg className="text-mist shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export default function UniversitiesList() {
  const [country, setCountry] = useState("All");
  const countries = useMemo(
    () => ["All", ...Array.from(new Set(universities.map((u) => u.country)))],
    []
  );
  const filtered = universities.filter(
    (u) => country === "All" || u.country === country
  );

  return (
    <>
      {/* header + country filter */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">
            Filter by Region
          </p>
          <h2 className="font-display font-semibold text-[28px] lg:text-[34px] text-wine leading-tight">
            Every partner, <span className="italic text-gold">independently reviewed.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {countries.map((c) => {
            const count =
              c === "All"
                ? universities.length
                : universities.filter((u) => u.country === c).length;
            const active = country === c;
            return (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className="font-mono text-[10px] uppercase tracking-wide rounded-full px-4 py-2 border transition-all duration-200 flex items-center gap-1.5"
                style={{
                  background: active ? "#16263D" : "white",
                  color: active ? "white" : "#4F5765",
                  borderColor: active ? "#16263D" : "#E0DCCF",
                }}
              >
                {c}
                <span
                  className="text-[9px] rounded-full px-1.5 leading-[16px]"
                  style={{
                    background: active ? "rgba(255,255,255,0.18)" : "#F2EFE6",
                    color: active ? "white" : "#8A92A0",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* desktop: rows expand on hover with fixed inline image panel */}
      <ExpandableList list={filtered} />

      {/* mobile compact list */}
      <div className="lg:hidden flex flex-col">
        {filtered.map((u, i) => (
          <MobileRow key={u.slug} u={u} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-[11px] uppercase tracking-wide text-mist">
          No partners in this region yet.
        </p>
      )}
    </>
  );
}