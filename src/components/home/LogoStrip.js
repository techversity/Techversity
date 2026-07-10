"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { universities as allUniversities } from "@/lib/universities";
import { programs } from "@/lib/programs";
import { flagUrl } from "@/lib/flag";

const programLabel = (slug) =>
  programs.find((p) => p.slug === slug)?.initials || slug;

// only the fields this component actually needs, mapped from the shared data
const universities = allUniversities.map((u) => ({
  name: u.name,
  slug: u.slug,
  country: u.country,
  image: u.buildingImage,
  programs: u.programsOffered.map(programLabel),
}));

export default function LogoStrip() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useInView({ threshold: 0.15 });

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % universities.length),
      3200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-line overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-8">
        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">
                Global Network
              </p>
              <h2 className="font-display font-semibold text-2xl lg:text-[34px] text-wine leading-tight">
                Trusted by{" "}
                <span className="italic text-gold">10+ accredited</span>
                <br className="hidden lg:block" />
                universities worldwide.
              </h2>
            </div>
            <Link
              href="/universities"
              className="text-sm font-semibold text-gold hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              View All Partners →
            </Link>
          </div>
        </Reveal>

        {/* ── DESKTOP: accordion spread ── */}
        <div
          ref={ref}
          className="hidden lg:flex justify-center gap-2.5 h-[400px] max-w-[1340px] mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition:
              "opacity 0.7s ease, transform 0.7s cubic-bezier(0.34,1.4,0.64,1)",
          }}
        >
          {universities.map((u, i) => {
            const isActive = active === i;
            return (
              <Link
                key={i}
                href={`/universities/${u.slug}`}
                onMouseEnter={() => setActive(i)}
                className="group relative rounded-[20px] overflow-hidden cursor-pointer flex-shrink-0"
                style={{
                  width: isActive ? "300px" : "100px",
                  transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
                  boxShadow: isActive
                    ? "0 24px 60px rgba(22,38,61,0.30)"
                    : "0 4px 16px rgba(22,38,61,0.14)",
                }}
              >
                {/* bg image */}
                <Image
                  src={u.image}
                  alt={u.name}
                  fill
                  sizes="300px"
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                  className="object-cover object-center"
                  style={{
                    transform: isActive ? "scale(1.03)" : "scale(1.12)",
                    transition: "transform 0.7s ease",
                  }}
                />

                {/* gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(12,22,38,0.92) 0%, rgba(12,22,38,0.30) 55%, rgba(12,22,38,0.10) 100%)"
                      : "linear-gradient(to top, rgba(12,22,38,0.78) 0%, rgba(12,22,38,0.55) 100%)",
                    transition: "background 0.5s ease",
                  }}
                />

                {/* ── collapsed: vertical rotated name + flag ── */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-between py-5"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <div className="rounded-md overflow-hidden ring-1 ring-white/40 shadow">
                    <Image
                      src={flagUrl(u.country)}
                      alt={u.country}
                      width={26}
                      height={17}
                      className="object-cover block"
                      style={{ width: "26px", height: "17px" }}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[3px] text-white/85 whitespace-nowrap font-medium"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {u.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>

                {/* ── expanded: flag + name + country + programs ── */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-6"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: `opacity 0.3s ease ${isActive ? "0.2s" : "0s"}`,
                  }}
                >
                  {/* top: flag */}
                  <div className="rounded-md overflow-hidden ring-1 ring-white/40 shadow-lg w-fit">
                    <Image
                      src={flagUrl(u.country)}
                      alt={u.country}
                      width={34}
                      height={23}
                      className="object-cover block"
                      style={{ width: "34px", height: "23px" }}
                    />
                  </div>

                  {/* bottom: name + country + programs */}
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[2.5px] text-white/55 mb-2">
                      {u.country}
                    </p>
                    <h3 className="font-display font-semibold text-[21px] text-white leading-tight mb-4 drop-shadow-md">
                      {u.name}
                    </h3>

                    {/* program tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {u.programs.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(154,115,32,0.22)",
                            border: "1px solid rgba(154,115,32,0.45)",
                            color: "#E0BE6E",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* gold bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg,#C9A04A,#9A7320)",
                    opacity: isActive ? 1 : 0.3,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* ── MOBILE: 2-col image grid ── */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {universities.map((u, i) => (
            <Link
              key={i}
              href={`/universities/${u.slug}`}
              className="relative rounded-2xl overflow-hidden h-[150px] block"
            >
              <Image
                src={u.image}
                alt={u.name}
                fill
                sizes="50vw"
                priority={i < 2}
                loading={i < 2 ? undefined : "lazy"}
                className="object-cover object-center"
                style={{ filter: "brightness(0.65)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 to-wine/20" />
              <div className="absolute top-2.5 right-2.5 rounded overflow-hidden ring-1 ring-white/40">
                <Image
                  src={flagUrl(u.country)}
                  alt={u.country}
                  width={24}
                  height={16}
                  className="object-cover block"
                  style={{ width: "24px", height: "16px" }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <h3 className="font-display font-semibold text-white text-[14px] leading-tight mb-1.5 line-clamp-2">
                  {u.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {u.programs.map((p) => (
                    <span
                      key={p}
                      className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(154,115,32,0.3)",
                        color: "#E0BE6E",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg,#C9A04A,#9A7320)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}