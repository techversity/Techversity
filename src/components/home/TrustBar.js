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
    stat: "100%",
    statLabel: "Verifiable",
    link: { label: "View Accreditation Sources", href: "/universities" },
  },
  {
    num: "02",
    tag: "Transparency",
    title: "We tell you exactly what an Honorary Doctorate is",
    sub: "— and is not.",
    desc: "Most platforms bury the fine print. We put the disclaimer at the top. An honorary title is recognition for achievement, not an earned academic degree. We say that clearly, every time.",
    stat: "Zero",
    statLabel: "Hidden clauses",
    link: { label: "Honorary Doctorate Guide", href: "/doctorate/honorary-doctorate" },
  },
  {
    num: "03",
    tag: "Verification",
    title: "Anyone can verify a credential issued through us",
    sub: "in seconds.",
    desc: "Employers, background-check teams, family members — anyone can look up a Techversity-issued certificate or degree and confirm it is genuine. No emails, no waiting.",
    stat: "Instant",
    statLabel: "Verification",
    link: { label: "Verify a Credential", href: "/verification" },
  },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory-2 py-20 border-y border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4">
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

        {/* cards */}
        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 110}>
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-350 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_55px_rgba(154,115,32,0.13)]"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDFBF5 55%, #FBF7EC 100%)",
                  border: "1px solid #EAE5D8",
                }}
              >
                {/* gold left accent bar — grows on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400"
                  style={{ background: "linear-gradient(180deg,#C9A04A,#9A7320)" }} />

                {/* top hairline — appears on hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(90deg, transparent, #C9A04A, transparent)" }} />

                {/* ghost number */}
                <span className="absolute right-7 -bottom-6 font-display font-bold text-[130px] leading-none select-none pointer-events-none text-gold/[0.05] group-hover:text-gold/[0.10] transition-colors duration-400">
                  {item.num}
                </span>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-7 lg:p-9">

                  {/* number + tag */}
                  <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-3">
                    <span className="font-display font-bold text-[42px] leading-none text-gold">
                      {item.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[2px] text-gold border border-gold/30 bg-gold/5 px-2.5 py-1 rounded-sm group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* title + desc */}
                  <div className="lg:col-span-6">
                    <h3 className="font-display font-semibold text-[21px] lg:text-[25px] text-wine leading-snug mb-2.5">
                      {item.title}{" "}
                      <span className="italic text-gold">{item.sub}</span>
                    </h3>
                    <p className="text-[13.5px] text-slate leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* stat */}
                  <div className="lg:col-span-2">
                    <div className="font-display font-bold text-[34px] text-gold leading-none mb-1.5">{item.stat}</div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-px bg-gold" />
                      <span className="font-mono text-[9px] uppercase tracking-wider text-mist">{item.statLabel}</span>
                    </div>
                  </div>

                  {/* link */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <Link
                      href={item.link.href}
                      className="font-sans text-[12.5px] font-semibold text-wine hover:text-gold transition-colors duration-150 flex items-center gap-2 group/link"
                    >
                      {item.link.label}
                      <span className="group-hover/link:translate-x-1 transition-transform duration-150 inline-block">→</span>
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}