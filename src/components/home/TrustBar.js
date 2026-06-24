"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    num: "01",
    tag: "Accreditation",
    title: "Every claim links to an official registry.",
    sub: "Always.",
    desc: "We don't say 'internationally accredited' and leave it there. Every program page links directly to the issuing body's official register — so you can verify before you trust.",
    link: { label: "View Accreditation Sources", href: "/universities" },
  },
  {
    num: "02",
    tag: "Transparency",
    title: "We tell you exactly what an Honorary Doctorate is",
    sub: "— and is not.",
    desc: "Most platforms bury the fine print. We put the disclaimer at the top. An honorary title is recognition for achievement, not an earned academic degree. We say that clearly, every time.",
    link: { label: "Honorary Doctorate Guide", href: "/doctorate/honorary-doctorate" },
  },
  {
    num: "03",
    tag: "Verification",
    title: "Anyone can verify a credential issued through us",
    sub: "in seconds.",
    desc: "Employers, background-check teams, family members — anyone can look up a Techversity-issued certificate or degree and confirm it is genuine. No emails, no waiting.",
    link: { label: "Verify a Credential", href: "/verification" },
  },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory-2 py-20 border-y border-line">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-4">
                Why Trust Techversity
              </p>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-wine leading-[1.1]">
                Proof, not<br />
                <span className="italic text-gold">promises.</span>
              </h2>
            </div>
            <p className="font-display italic text-[17px] text-slate max-w-xs lg:text-right leading-relaxed">
              "In an industry of unverifiable claims, we hold ourselves to a different standard."
            </p>
          </div>
        </Reveal>

        {/* stacked rows */}
        <div className="divide-y divide-line">
          {items.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 120}>
              <div className="group grid grid-cols-12 gap-4 lg:gap-8 py-10 hover:bg-ivory-3 -mx-5 px-5 lg:-mx-8 lg:px-8 transition-colors duration-300 cursor-default">

                {/* large bg number */}
                <div className="hidden lg:flex col-span-1 items-center">
                  <span className="font-display font-bold text-[56px] leading-none text-wine/[0.07] group-hover:text-gold/20 transition-colors duration-300 select-none">
                    {item.num}
                  </span>
                </div>

                {/* tag */}
                <div className="col-span-12 lg:col-span-2 flex items-start pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold border border-gold/30 px-2.5 py-1 rounded-sm group-hover:border-gold/60 transition-colors duration-300">
                    {item.tag}
                  </span>
                </div>

                {/* title + desc */}
                <div className="col-span-12 lg:col-span-6">
                  <h3 className="font-display font-semibold text-[22px] lg:text-[26px] text-wine leading-snug mb-3">
                    {item.title}{" "}
                    <span className="italic text-gold">{item.sub}</span>
                  </h3>
                  <p className="text-[14px] text-slate leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* link */}
                <div className="col-span-12 lg:col-span-3 flex lg:items-center lg:justify-end">
                  <Link
                    href={item.link.href}
                    className="font-sans text-[13px] font-semibold text-wine hover:text-gold transition-colors duration-150 flex items-center gap-2 group/link"
                  >
                    {item.link.label}
                    <span className="group-hover/link:translate-x-1 transition-transform duration-150 inline-block">→</span>
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}