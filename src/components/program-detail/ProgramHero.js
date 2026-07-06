"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProgramHero({ p }) {
  return (
    <section className="relative bg-wine overflow-hidden">
      <div className="absolute inset-0">
        <Image src={p.heroImage} alt={p.name} fill priority className="object-cover opacity-90" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.95) 0%, rgba(12,22,38,0.5) 45%, rgba(12,22,38,0.7) 100%)" }} />
      </div>

      <div className="relative max-w-[1080px] mx-auto px-5 lg:px-8 pt-40 lg:pt-48 pb-20 lg:pb-28 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold mb-7 opacity-0 animate-fade-up">
          {p.eyebrow}
        </p>
        <h1 className="font-display font-semibold text-[40px] lg:text-[68px] text-white leading-[1.05] max-w-4xl mx-auto mb-7 opacity-0 animate-fade-up delay-1" style={{ textShadow: "0 2px 30px rgba(12,22,38,0.6)" }}>
          {p.title}
        </h1>
        <p className="text-white/85 text-[16px] lg:text-[19px] max-w-2xl mx-auto leading-relaxed mb-11 opacity-0 animate-fade-up delay-2" style={{ textShadow: "0 1px 16px rgba(12,22,38,0.7)" }}>
          {p.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up delay-3">
          <Link href="/apply/eligibility-check"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "#9A7320", boxShadow: "0 12px 30px rgba(154,115,32,0.35)" }}>
            Check Your Eligibility
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <a href="#institutions" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white/85 border border-white/25 hover:border-white/50 transition-colors">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}