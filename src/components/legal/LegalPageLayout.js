"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function Block({ block }) {
  switch (block.type) {
    case "h3":
      return <h3 className="font-display font-semibold text-[19px] lg:text-[21px] text-wine mt-8 mb-3 first:mt-0">{block.text}</h3>;
    case "paragraph":
      return <p className="text-[14.5px] lg:text-[15px] leading-[1.85] text-slate mb-4">{block.text}</p>;
    case "list":
      return (
        <ul className="mb-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[14px] lg:text-[14.5px] leading-relaxed text-slate">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-5 rounded-xl border border-gold/30 bg-gold-light/40 px-5 py-4">
          <p className="font-mono text-[9.5px] uppercase tracking-[1.5px] text-gold-deep font-semibold mb-2">{block.label || "Important"}</p>
          <p className="text-[13.5px] lg:text-[14px] leading-relaxed text-wine/90">{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div className="my-5 overflow-x-auto rounded-xl border border-line">
          <table className="w-full border-collapse min-w-[480px]">
            <thead>
              <tr className="bg-wine">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left font-mono text-[9.5px] uppercase tracking-wider text-gold-light px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-ivory/60"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-[13px] leading-relaxed text-slate align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function LegalPageLayout({ eyebrow = "Legal", title, intro, lastUpdated, effective, sections, contact }) {
  const [active, setActive] = useState(sections[0]?.id);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="bg-ivory">
      {/* header */}
      <section className="bg-wine relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 pt-16 lg:pt-20 pb-14 lg:pb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">{eyebrow}</p>
          </div>
          <h1 className="font-display font-semibold text-[34px] sm:text-[42px] lg:text-[52px] text-white leading-[1.08] mb-5 max-w-2xl">
            {title}
          </h1>
          {intro && <p className="text-white/65 text-[15px] lg:text-[16.5px] leading-relaxed max-w-xl mb-7">{intro}</p>}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-white/45 uppercase tracking-wide">
            <span>Last Updated: {lastUpdated}</span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>Effective: {effective}</span>
          </div>
        </div>
      </section>

      {/* body */}
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
          {/* sticky section nav */}
          <nav className="hidden lg:block lg:sticky lg:top-24 self-start">
            <p className="font-mono text-[9.5px] uppercase tracking-[2px] text-mist mb-4">On This Page</p>
            <ul className="space-y-1 border-l border-line">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block pl-4 py-1.5 text-[13px] leading-snug transition-colors duration-200 -ml-px border-l-2"
                    style={{
                      borderColor: active === s.id ? "#9A7320" : "transparent",
                      color: active === s.id ? "#9A7320" : "#4F5765",
                      fontWeight: active === s.id ? 600 : 400,
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* content */}
          <div className="max-w-[720px]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 mb-12 lg:mb-14 pb-12 lg:pb-14 border-b border-line last:border-b-0 last:mb-0 last:pb-0">
                <h2 className="font-display font-semibold text-[22px] lg:text-[27px] text-wine leading-tight mb-5">{s.title}</h2>
                {s.blocks.map((block, i) => <Block key={i} block={block} />)}
              </section>
            ))}

            {contact && (
              <div className="mt-4 rounded-2xl bg-white border border-line p-7 lg:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[2px] text-gold mb-3">Questions About This Policy?</p>
                <div className="space-y-1.5">
                  {contact.map((c, i) => (
                    <p key={i} className="text-[14px] text-slate">
                      <span className="text-wine font-semibold">{c.label}: </span>
                      {c.href ? <a href={c.href} className="text-gold-deep hover:underline">{c.value}</a> : c.value}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}