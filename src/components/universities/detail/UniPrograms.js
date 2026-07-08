import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/programs";

const levelColor = (level) => {
  if (level === "Doctorate" || level === "PhD" || level === "Honorary") return "#9A7320";
  return "#21385C";
};

export default function UniPrograms({ u, d }) {
  const offered = d.programSlugs
    .map((slug) => programs.find((p) => p.slug === slug))
    .filter(Boolean);

  // certifications don't have their own working /programs/[slug] page — they live at
  // /certifications/[slug] instead — so we never render them as individual cards here.
  // if this university offers any, we show one generic "explore all" tile.
  const regularPrograms = offered.filter((p) => p.category !== "certifications");
  const offersCertifications = offered.some((p) => p.category === "certifications");
  const totalCount = regularPrograms.length + (offersCertifications ? 1 : 0);

  return (
    <section id="programs" className="scroll-mt-20 bg-white relative">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Programs at {d.shortName}</p>
              </div>
              <h2 className="font-display font-semibold text-[28px] lg:text-[44px] text-wine leading-[1.08] max-w-2xl">
                Every pathway offered here,<br />guided end to end.
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-mist pb-2">
              {String(totalCount).padStart(2, "0")} Programmes
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPrograms.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={i * 60}>
              <div className="group relative h-full flex flex-col rounded-[18px] bg-white overflow-hidden transition-all duration-400 hover:-translate-y-2"
                style={{ boxShadow: "0 1px 2px rgba(22,38,61,0.06), 0 0 0 1px rgba(224,220,207,0.8)" }}>

                {/* hover: deep shadow + gold ring */}
                <span className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: "0 30px 60px rgba(22,38,61,0.18), 0 0 0 1px rgba(154,115,32,0.45)" }} />

                {/* image */}
                <div className="relative h-[190px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="400px"
                    className="object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.07]" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.55), transparent 50%)" }} />

                  {/* level badge */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[1.5px] text-white rounded-full px-3.5 py-1.5 backdrop-blur-sm"
                    style={{ background: `${levelColor(p.level)}E6` }}>
                    {p.level}
                  </span>

                  {/* duration bottom-right on image */}
                  <span className="absolute bottom-3.5 right-4 font-mono text-[9.5px] uppercase tracking-wide text-white/95 bg-wine/40 backdrop-blur-sm rounded-full px-3 py-1">
                    {p.duration}
                  </span>
                </div>

                {/* body */}
                <div className="relative flex flex-col flex-1 p-6 lg:p-7">
                  {/* gold hairline that grows on hover */}
                  <span className="absolute top-0 left-7 right-7 h-px bg-line overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-600 ease-out" style={{ background: "#9A7320" }} />
                  </span>

                  <h3 className="font-display font-semibold text-[19px] lg:text-[20px] text-wine leading-snug mb-2.5 pt-1">
                    {p.title}
                  </h3>
                  <p className="text-slate text-[13px] leading-[1.75] mb-5 flex-1">{p.desc}</p>

                  {/* meta row — refined, not pill-cluttered */}
                  <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-line">
                    <span className="font-mono text-[9.5px] uppercase tracking-[1.5px] text-mist">{p.mode}</span>
                    <span className="font-display font-semibold text-[15px]" style={{ color: "#9A7320" }}>{d.programPricing?.[p.slug] || p.fee}</span>
                  </div>

                  <div className="flex gap-2.5">
                    <Link href={`/apply/application-form?program=${p.slug}&university=${u.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-3 font-semibold text-[12.5px] text-white transition-all duration-300 hover:gap-2.5"
                      style={{ background: "#16263D" }}>
                      Apply Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href={`/programs/${p.slug}`}
                      className="flex-1 text-center rounded-full py-3 font-semibold text-[12.5px] text-wine border border-line transition-colors duration-300 hover:border-gold hover:text-gold">
                      View Curriculum
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* generic certifications teaser — never links to a specific broken program page */}
          {offersCertifications && (
            <Reveal direction="up" delay={regularPrograms.length * 60}>
              <Link
                href="/certifications"
                className="group relative h-full flex flex-col rounded-[18px] bg-wine overflow-hidden transition-all duration-400 hover:-translate-y-2"
              >
                <span className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
                  style={{ boxShadow: "0 30px 60px rgba(22,38,61,0.28), 0 0 0 1px rgba(154,115,32,0.45)" }} />

                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src="/images/SharedPrograms/cert.avif"
                    alt="Certifications"
                    fill
                    sizes="400px"
                    className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,38,61,0.85) 0%, transparent 55%)" }} />

                  <span className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(217,164,65,0.18)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" />
                    </svg>
                  </span>
                </div>

                <div className="relative flex flex-col flex-1 p-6 lg:p-7">
                  <h3 className="font-display font-semibold text-[19px] lg:text-[20px] text-white leading-snug mb-2.5">
                    Explore All Certifications
                  </h3>
                  <p className="text-white/60 text-[13px] leading-[1.75] mb-5 flex-1">
                    {d.shortName} also offers industry-ready certification tracks — Data Science, AI, Cybersecurity, and more.
                  </p>

                  <span className="inline-flex items-center gap-2 font-semibold text-[12.5px] text-gold-light group-hover:gap-3 transition-all duration-300">
                    View All Certifications
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}