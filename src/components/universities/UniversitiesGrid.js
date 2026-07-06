"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { universities } from "@/lib/universities";
import { doctorateTypes } from "@/lib/doctorate";

const programLabel = (slug) => doctorateTypes.find((d) => d.slug === slug)?.abbr || slug;

export default function UniversitiesGrid() {
  const [country, setCountry] = useState("All");
  const countries = useMemo(
    () => ["All", ...Array.from(new Set(universities.map((u) => u.country)))],
    []
  );
  const filtered = universities.filter((u) => country === "All" || u.country === country);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {countries.map((c) => (
          <button
            key={c}
            onClick={() => setCountry(c)}
            className="font-mono text-[10px] uppercase tracking-wide rounded-full px-4 py-2 border transition-colors duration-200"
            style={{
              background: country === c ? "#16263D" : "white",
              color: country === c ? "white" : "#4F5765",
              borderColor: country === c ? "#16263D" : "#E0DCCF",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((u, i) => (
          <Reveal key={u.slug} direction="up" delay={i * 50}>
            <Link
              href={`/universities/${u.slug}`}
              className="group block h-full rounded-2xl border border-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(22,38,61,0.1)]"
            >
              <div className="relative h-[160px] overflow-hidden">
                <Image
                  src={u.heroImage}
                  alt={u.name}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(12,22,38,0.6), transparent 60%)" }}
                />
                <span className="absolute bottom-3 left-4 text-[20px]">{u.flag}</span>
              </div>
              <div className="p-6">
                <p className="font-mono text-[9px] uppercase tracking-wide text-mist mb-2">
                  {u.country} · Est. {u.founded}
                </p>
                <h3 className="font-display font-semibold text-[19px] text-wine leading-snug mb-2">
                  {u.name}
                </h3>
                <p className="text-slate text-[13px] leading-relaxed mb-4">{u.tagline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {u.programsOffered.map((p) => (
                    <span
                      key={p}
                      className="font-mono text-[9px] uppercase tracking-wide text-wine bg-ivory border border-line rounded-full px-2.5 py-1"
                    >
                      {programLabel(p)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}