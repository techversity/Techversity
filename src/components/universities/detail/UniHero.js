"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function UniHero({ u, d }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-wine overflow-hidden min-h-[90vh] flex items-end">
      {/* image wipes in from left */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1s cubic-bezier(0.77,0,0.175,1)",
        }}
      >
        <Image src={d.heroImage} alt={`${d.name} campus`} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/25 to-wine/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine/60 via-transparent to-transparent" />
      </div>

      {/* content — left aligned, anchored toward lower-left */}
      <div className="relative w-full px-6 lg:px-16 pb-20 lg:pb-28 pt-40 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-7">
          <span className="font-mono text-[11px] uppercase tracking-[2px] text-white border border-white/30 rounded-full px-4 py-1.5 bg-wine/30 backdrop-blur-sm">
            {d.city}, {d.country}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[2px] text-gold border border-gold/50 rounded-full px-4 py-1.5 bg-wine/30 backdrop-blur-sm">
            Est. {d.founded}
          </span>
        </div>

        <h1 className="font-display font-semibold text-[46px] lg:text-[82px] text-white leading-[1.0] max-w-3xl mb-6" style={{ textShadow: "0 2px 34px rgba(12,22,38,0.55)" }}>
          {d.name}
        </h1>
        <p className="font-display italic text-[18px] lg:text-[22px] text-gold mb-5">&ldquo;{d.motto}&rdquo;</p>
        <p className="text-white/90 text-[15px] lg:text-[17.5px] max-w-xl leading-relaxed mb-10" style={{ textShadow: "0 1px 14px rgba(12,22,38,0.7)" }}>{d.tagline}</p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/apply/application-form?university=${u.slug}`}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "#9A7320", boxShadow: "0 12px 30px rgba(154,115,32,0.4)" }}>
            Check Eligibility
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <a href="#programs" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/45 hover:border-white/75 hover:bg-white/5 transition-colors">
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}