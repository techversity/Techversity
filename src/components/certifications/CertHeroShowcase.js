"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// hero-only images (do not affect cards / curriculum pages)
const HERO_IMAGES = {
  "data-science": "https://wallpapers.com/images/hd/data-science-concepts-illustration-xe1pmo7wm4jcokpd.jpg",
  "agentic-ai": "https://channelvisionmag.com/wp-content/uploads/2025/08/Agentic-AI-Hands-scaled.jpeg",
  "cybersecurity": "https://static.vecteezy.com/system/resources/previews/025/466/198/original/cyber-security-technology-concept-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-information-protect-and-safe-cyber-data-security-or-network-security-idea-illustration-vector.jpg",
  "data-analytics": "https://i.pinimg.com/736x/a3/34/06/a33406edef902aba21b4a5e0ecdf2cc6.jpg",
  "cloud-computing": "https://img.freepik.com/premium-photo/cloud-computing-technology-vector-circle-business-concepts-with-icons-can-use-infographic_1197797-236800.jpg?w=2000",
  "project-management": "https://i.pinimg.com/736x/5b/c3/ce/5bc3ceda613b418cf8a829899b1fc54f.jpg",
};

const slugOf = (c) => c.href.split("/").filter(Boolean).pop();

export default function CertHeroShowcase({ certs }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startCycle = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % certs.length), 4200);
  };
  useEffect(() => {
    startCycle();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const c = certs[active];
  const pad = (n) => String(n + 1).padStart(2, "0");

  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[760px] overflow-hidden bg-wine">
      {/* sliding image track */}
      <div
        className="absolute inset-0 flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(.65,0,.35,1)]"
        style={{ width: `${certs.length * 100}%`, transform: `translateX(-${active * (100 / certs.length)}%)` }}
      >
        {certs.map((cert, i) => (
          <div key={cert.href} className="relative h-full" style={{ width: `${100 / certs.length}%` }}>
            <Image
              src={HERO_IMAGES[slugOf(cert)] || cert.image}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              quality={90}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* gradients — heavier left + bottom so headline is always crisp */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,30,0.78) 0%, rgba(11,18,30,0.34) 34%, rgba(11,18,30,0.62) 70%, rgba(11,18,30,0.98) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,18,30,0.94) 0%, rgba(11,18,30,0.58) 42%, rgba(11,18,30,0.12) 74%, transparent 100%)" }} />

      {/* ── right editorial index rail ── */}
      <div className="hidden lg:flex absolute top-0 right-0 h-full w-[290px] flex-col justify-center pr-10 z-20">
        <div className="border-l border-white/12 pl-8">
          <p className="font-mono text-[9px] uppercase tracking-[3px] text-white/35 mb-8">The Programs</p>
          {certs.map((cert, i) => {
            const on = i === active;
            return (
              <button
                key={cert.href}
                onClick={() => { setActive(i); startCycle(); }}
                className="group w-full text-left flex items-center gap-4 py-[11px] transition-all duration-400"
              >
                <span
                  className="font-mono text-[10px] tabular-nums transition-colors duration-400"
                  style={{ color: on ? "#9A7320" : "rgba(255,255,255,0.28)" }}
                >
                  {pad(i)}
                </span>
                <span
                  className="h-px transition-all duration-500"
                  style={{ width: on ? "26px" : "12px", background: on ? "#9A7320" : "rgba(255,255,255,0.2)" }}
                />
                <span
                  className="font-display leading-tight transition-all duration-400"
                  style={{
                    fontSize: on ? "19px" : "16px",
                    fontWeight: on ? 600 : 400,
                    color: on ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {cert.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── main content ── */}
      <div className="relative h-full flex flex-col">
        {/* breadcrumb */}
        <div className="max-w-[1320px] w-full mx-auto px-6 lg:px-10 pt-7 lg:pt-9">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/45">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Certifications</span>
          </div>
        </div>

        {/* bottom-anchored copy */}
        <div className="mt-auto max-w-[1320px] w-full mx-auto px-6 lg:px-10 pb-11 lg:pb-14 lg:max-w-[1030px] lg:mr-auto lg:ml-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]">
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold mb-6">Career-Ready Credentials</p>

          <h1
            className="font-display font-semibold text-white leading-[0.98] mb-6 text-[42px] sm:text-[60px] lg:text-[74px]"
            style={{ textShadow: "0 2px 30px rgba(11,18,30,0.6)" }}
          >
            Get certified in
            <br />
            <span className="relative inline-grid align-bottom">
              {certs.map((cert, i) => (
                <span
                  key={cert.href}
                  className="italic text-gold transition-all duration-[600ms] ease-[cubic-bezier(.65,0,.35,1)]"
                  style={{
                    gridArea: "1 / 1",
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "translateY(0)" : "translateY(0.3em)",
                    pointerEvents: "none",
                  }}
                >
                  {cert.title}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-white/72 text-[16px] lg:text-[18px] leading-relaxed max-w-lg mb-8 font-light">
            Six career-ready programs in the fastest-growing fields, delivered online with a dedicated advisor from
            day one. Career-ready in weeks, not years.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-9">
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/80 bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
              {c.duration} · {c.level}
            </span>
            {/* mobile-only dots (rail is desktop) */}
            <div className="flex lg:hidden items-center gap-1.5">
              {certs.map((cert, i) => (
                <button
                  key={cert.href}
                  onClick={() => { setActive(i); startCycle(); }}
                  aria-label={cert.title}
                  className="h-[3px] rounded-full transition-all duration-500"
                  style={{ width: i === active ? "26px" : "10px", background: i === active ? "#9A7320" : "rgba(255,255,255,0.28)" }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-wine bg-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9A04A]"
              style={{ boxShadow: "0 14px 36px rgba(154,115,32,0.4)" }}
            >
              Talk to an Advisor →
            </Link>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Browse All Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}