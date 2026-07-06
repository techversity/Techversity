"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const pathways = [
  {
    initials: "DBA",
    title: "Doctor of Business Administration",
    desc: "An applied doctoral path for senior leaders who research real problems inside their own organizations — rigorous, practical, immediately useful.",
    duration: "18 Months",
    university: "ESDST, France",
    forWho: "Senior executives, 10+ yrs",
    href: "/programs/dba",
  },
  {
    initials: "PhD",
    title: "PhD in Business & Management",
    desc: "A research-intensive doctorate with full dissertation support and international faculty supervision — for those advancing knowledge.",
    duration: "24 Months",
    university: "Kennedy, USA",
    forWho: "Academics & researchers",
    href: "/programs/phd",
  },
  {
    initials: "HD",
    title: "Honorary Doctorate",
    desc: "A formal recognition of a lifetime of distinguished achievement — accredited, transparent, dignified. Issued through trusted partner universities.",
    duration: "6–12 Months",
    university: "Global Partners",
    forWho: "Distinguished leaders, 15+ yrs",
    href: "/programs/honorary-doctorate",
  },
];

export default function DoctorateSpotlight() {
  const [active, setActive] = useState(0);
  const [anim, setAnim] = useState("alumni-enter");

  useEffect(() => {
    const t = setInterval(() => {
      setAnim("alumni-exit");
      setTimeout(() => {
        setActive((p) => (p + 1) % pathways.length);
        setAnim("alumni-enter");
      }, 400);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const select = (i) => {
    if (i === active) return;
    setAnim("alumni-exit");
    setTimeout(() => {
      setActive(i);
      setAnim("alumni-enter");
    }, 400);
  };

  const p = pathways[active];

  return (
    <section
      className="overflow-hidden relative"
      style={{
        background:
          "linear-gradient(125deg, #06121F 0%, #0B2545 40%, #143155 70%, #0C2548 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D9A441 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[660px]">
        {/* LEFT — full bleed image */}
        <Reveal direction="left">
          <div className="relative h-[280px] sm:h-[360px] lg:h-full group overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1720805752653-10ddccea4c94?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Senior executive"
              fill
              className="object-cover object-[center_15%] transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121F]/70 via-transparent to-[#06121F]/30" />
            {/* desktop: right fade · mobile: bottom fade */}
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#06121F]/25 via-transparent to-[#0B2545]" />
            <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#0B2545]" />

            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-gold" />
                <p className="font-mono text-[9px] uppercase tracking-[2px] text-gold/80">
                  Premium Pathway
                </p>
              </div>
              <p className="font-display italic text-[17px] lg:text-[19px] text-white leading-snug">
                "The record a life's work earns."
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — content */}
        <div className="flex flex-col justify-center gap-6 lg:gap-7 px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 relative z-10">
          <Reveal direction="up">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold/50 mb-3">
                Doctorate Programs
              </p>
              <h2 className="font-display font-semibold text-[28px] sm:text-3xl lg:text-[40px] text-white leading-[1.1]">
                Earn the Title Your
                <br />
                Career Has Already{" "}
                <em className="text-gold not-italic">Built.</em>
              </h2>
            </div>
          </Reveal>

          {/* pill selector */}
          <Reveal direction="up" delay={100}>
            <div className="flex gap-2">
              {pathways.map((path, i) => (
                <button
                  key={i}
                  onClick={() => select(i)}
                  className="flex-1 py-2.5 rounded-lg font-display font-bold text-[13px] transition-all duration-300 border"
                  style={{
                    borderColor:
                      active === i
                        ? "rgba(217,164,65,0.5)"
                        : "rgba(255,255,255,0.1)",
                    background:
                      active === i
                        ? "linear-gradient(135deg,#E8B85A,#D9A441)"
                        : "rgba(255,255,255,0.07)",
                    color: active === i ? "#0B2545" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {path.initials}
                </button>
              ))}
            </div>
          </Reveal>

          {/* detail panel */}
          <div
            className="relative rounded-2xl border border-white/10 overflow-hidden min-h-[280px] sm:min-h-[260px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
            }}
          >
            <div
              key={`wm-${active}`}
              className={`absolute -right-2 -bottom-8 font-display font-bold text-[120px] leading-none text-gold/[0.05] select-none pointer-events-none ${anim}`}
            >
              {p.initials}
            </div>

            <div
              className="h-[3px] w-full"
              style={{
                background:
                  "linear-gradient(90deg,#E8B85A,#D9A441 60%,transparent)",
              }}
            />

            <div key={`body-${active}`} className={`relative p-6 sm:p-7 ${anim}`}>
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold/70 border-l-2 border-l-gold border border-gold/20 px-2.5 py-1 rounded-sm">
                {p.university}
              </span>

              <h3 className="font-display font-semibold text-[22px] sm:text-[24px] text-white leading-snug mt-4 mb-3">
                {p.title}
              </h3>

              <p className="text-white/50 text-[13px] leading-relaxed mb-6 max-w-[440px]">
                {p.desc}
              </p>

              <div className="flex gap-6 mb-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/30 mb-1">
                    Duration
                  </p>
                  <p className="font-display font-semibold text-[15px] text-gold">
                    {p.duration}
                  </p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/30 mb-1">
                    Ideal For
                  </p>
                  <p className="font-display font-semibold text-[15px] text-white">
                    {p.forWho}
                  </p>
                </div>
              </div>

              <Link
                href={p.href}
                className="inline-flex items-center gap-2 text-[#0B2545] font-bold text-[13px] px-5 py-2.5 rounded-xl w-fit transition-all hover:-translate-y-0.5 shadow-[0_6px_28px_rgba(217,164,65,0.5)] hover:shadow-[0_8px_32px_rgba(217,164,65,0.65)]"
                style={{
                  background:
                    "linear-gradient(135deg,#E8B85A,#D9A441 60%,#C68F2E)",
                }}
              >
                Explore Pathway →
              </Link>
            </div>
          </div>

          {/* footer stats + cta — stacks on mobile */}
          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 mt-2 border-t border-white/[0.07]">
              <div className="flex items-center">
                {[
                  ["3", "Pathways"],
                  ["10+", "Universities"],
                  ["15+", "Countries"],
                ].map(([n, l], idx) => (
                  <div key={l} className="flex items-center">
                    <div className={idx === 0 ? "pr-5 sm:pr-8" : "px-5 sm:px-8"}>
                      <div className="font-display font-bold text-[24px] sm:text-[26px] text-gold leading-none">
                        {n}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-[2px] text-white/30 mt-1">
                        {l}
                      </div>
                    </div>
                    {idx < 2 && <div className="h-7 w-px bg-white/[0.12]" />}
                  </div>
                ))}
              </div>

              <Link
                href="/apply/eligibility-check"
                className="group relative flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl font-semibold text-[13px] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(217,164,65,0.12), rgba(217,164,65,0.04))",
                  }}
                />
                <span className="relative group-hover:text-gold transition-colors duration-300">
                  Check Eligibility
                </span>
                <span className="relative text-gold transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}