"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { programs, tabs } from "@/lib/programs";

function ProgramCard({ p, delay = 0 }) {
  return (
    <Reveal direction="up" delay={delay}>
      <Link href={`/programs/${p.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl border border-[#DDD8CE] shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,37,69,0.12)] hover:border-wine/20"
      >
        {/* top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-[15px] shrink-0"
              style={{ background: p.badgeBg, color: p.badgeText }}>
              {p.initials}
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-mist leading-none mb-0.5">
                {p.flag} {p.university}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-mist">
                {p.country}
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-gold border border-gold/40 px-2 py-0.5 rounded-sm shrink-0">
            {p.level}
          </span>
        </div>

        {/* title */}
        <h3 className="font-display font-semibold text-[20px] leading-snug text-wine mb-2">
          {p.title}
        </h3>

        {/* desc */}
        <p className="text-[13px] text-slate leading-relaxed mb-4 flex-1">
          {p.desc}
        </p>

        {/* for who */}
        <div className="bg-ivory rounded-lg px-3 py-2.5 mb-4">
          <p className="font-mono text-[9px] uppercase tracking-wider text-mist mb-0.5">Ideal for</p>
          <p className="text-[12px] text-wine font-medium">{p.forWho}</p>
        </div>

        {/* chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[11px] font-mono bg-ivory-2 text-slate px-2.5 py-1 rounded-sm">{p.duration}</span>
          <span className="text-[11px] font-mono bg-ivory-2 text-slate px-2.5 py-1 rounded-sm">{p.mode}</span>
          <span className="text-[11px] font-mono bg-gold-light text-gold-deep font-semibold px-2.5 py-1 rounded-sm">{p.fee}</span>
        </div>

        {/* outcome */}
        <p className="text-[11px] italic text-gold-deep mb-4">{p.outcome}</p>

        {/* cta */}
        <div className="flex items-center justify-between pt-3 border-t border-line">
          <span className="text-[13px] font-semibold text-wine group-hover:text-gold transition-colors duration-150">
            View Program
          </span>
          <span className="text-wine group-hover:text-gold group-hover:translate-x-1 transition-all duration-150 inline-block">→</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ProgramsGrid() {
  const [active, setActive]       = useState("all");
  const [displayed, setDisplayed] = useState("all");
  const [bg, setBg]               = useState("#FAF8F4");
  const [cardsVisible, setCardsVisible] = useState(true);
  const [mounted, setMounted]     = useState(false);

  useEffect(() => setMounted(true), []);

  const handleTab = (value) => {
    if (value === active) return;
    // 1. fade cards out
    setCardsVisible(false);
    setTimeout(() => {
      // 2. swap content + bg
      setActive(value);
      setDisplayed(value);
      const tab = tabs.find(t => t.value === value);
      if (tab) setBg(tab.bg);
      // 3. fade cards in
      setTimeout(() => setCardsVisible(true), 40);
    }, 220);
  };

  const filtered = displayed === "all" ? programs : programs.filter(p => p.category === displayed);
  const visible  = filtered.slice(0, 6);

  return (
    <section
      style={{ backgroundColor: bg, transition: "background-color 0.8s cubic-bezier(0.4,0,0.2,1)" }}
      className="py-20"
    >
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">Programs</p>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-tight">
                Explore Our Most<br />
                <span className="italic text-gold">In-Demand Programs</span>
              </h2>
            </div>
            <p className="text-slate text-[14px] max-w-xs leading-relaxed">
              Every program comes with personal advisory support — from first inquiry to enrollment.
            </p>
          </div>
        </Reveal>

        {/* tabs */}
        <Reveal direction="up" delay={80}>
          <div className="flex gap-0 mb-10 border-b border-line w-fit">
            {tabs.map((tab, i) => (
              <button key={tab.value} onClick={() => handleTab(tab.value)}
                className={`relative px-5 py-3 text-[13px] font-semibold transition-all duration-200 whitespace-nowrap
                  ${active === tab.value
                    ? "text-wine"
                    : "text-mist hover:text-slate"}`}>
                {tab.label}
                {/* active underline */}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-all duration-300
                  ${active === tab.value ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* uniform 3-col grid */}
        {mounted && (
          <div
            style={{ transition: "opacity 0.22s ease, transform 0.22s ease" }}
            className={cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((p, i) => (
                <div
                  key={`${displayed}-${p.id}`}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.35s",
                    transitionTimingFunction: "ease",
                    transitionDelay: cardsVisible ? `${i * 55}ms` : "0ms",
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <ProgramCard p={p} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Reveal direction="up" delay={200}>
          <div className="text-center mt-12">
            <Link href="/programs"
              className="inline-flex items-center gap-2 border border-wine text-wine font-semibold text-[14px] px-7 py-3 rounded-xl hover:bg-wine hover:text-white transition-all duration-200">
              View All Programs →
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}