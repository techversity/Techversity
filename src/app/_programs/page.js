import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { programs, degreeCategories } from "@/lib/programs";

export const metadata = {
  title: "Degree Programs — Doctorate, Master's & Executive | Techversity.ai",
  description: "Explore internationally accredited degree programs — Doctorate, Master's, and Executive Education — delivered online through Techversity's global university partners.",
};

const flagUrl = (code) => `https://flagcdn.com/w40/${code}.png`;

/* ── horizontal program row ── */
function ProgramRow({ p, i }) {
  const flip = i % 2 === 1;
  return (
    <Reveal direction="up">
      <div className="prog-row group relative grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[22px] border border-line overflow-hidden">
        {/* image side */}
        <div className={`relative h-[240px] lg:h-[340px] overflow-hidden ${flip ? "lg:order-2" : ""}`}>
          <Image src={p.image} alt={p.title} fill sizes="600px" className="prog-img object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.55), rgba(12,22,38,0.05))" }} />
          <span className="absolute top-0 left-0 right-0 h-1" style={{ background: p.badgeBg }} />

          {/* level chip */}
          <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full font-semibold bg-white/95 text-wine">
            {p.level}
          </span>

          {/* university footer */}
          <div className="absolute inset-x-0 bottom-0 p-5 flex items-center gap-2">
            {p.code && p.code !== "un" && (
              <span className="rounded-sm overflow-hidden ring-1 ring-white/40 shrink-0">
                <Image src={flagUrl(p.code)} alt={p.country} width={22} height={15}
                  className="object-cover block" style={{ width: "22px", height: "15px" }} unoptimized />
              </span>
            )}
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/90">{p.university}</span>
          </div>
        </div>

        {/* text side */}
        <div className={`p-7 lg:p-10 flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
          <h3 className="font-display font-semibold text-[26px] lg:text-[32px] text-wine leading-[1.12] mb-4">{p.title}</h3>
          <p className="text-[14.5px] lg:text-[15px] text-slate leading-relaxed mb-5">{p.desc}</p>

          {/* for who */}
          <div className="flex items-start gap-2.5 mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.badgeBg} strokeWidth="2" className="mt-0.5 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-[13px] text-wine/70 leading-snug">{p.forWho}</span>
          </div>

          {/* meta pills */}
          <div className="flex flex-wrap gap-2 mb-7">
            <span className="font-mono text-[9px] uppercase tracking-wide text-wine bg-ivory border border-line rounded-full px-3 py-1.5">{p.duration}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-wine bg-ivory border border-line rounded-full px-3 py-1.5">{p.mode}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-gold bg-gold/8 border border-gold/25 rounded-full px-3 py-1.5 font-semibold">{p.fee}</span>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply/application-form"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#B08A2E,#9A7320)", boxShadow: "0 8px 22px rgba(154,115,32,0.28)" }}>
              Apply Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href={`/programs/${p.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[13.5px] text-wine border border-line hover:border-wine hover:bg-ivory transition-all duration-200">
              View Program
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProgramsPage() {
  return (
    <main className="bg-ivory">

      {/* ═══ HERO — with image (unchanged) ═══ */}
      <section className="relative bg-wine overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80"
            alt="Campus" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(12,22,38,0.94) 0%, rgba(12,22,38,0.78) 45%, rgba(12,22,38,0.55) 100%)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }} />

        <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-20 lg:py-28 relative">
          <Reveal direction="up">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-5">Degree Programs</p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-display font-semibold text-[42px] lg:text-[62px] text-white leading-[1.04] max-w-3xl mb-6">
              Credentials that carry <span className="italic text-gold">across borders.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mb-8">
              Internationally accredited degrees — Doctorate, Master's, and Executive Education — delivered
              online through our global university partners, built for working professionals.
            </p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {degreeCategories.map((c) => (
                <a key={c.value} href={`#${c.value}`} className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[11px] uppercase tracking-wide">{c.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CATEGORY SECTIONS ═══ */}
      {degreeCategories.map((cat, idx) => {
        const list = programs.filter((p) => p.category === cat.value);
        if (!list.length) return null;
        return (
          <section key={cat.value} id={cat.value} className={`scroll-mt-24 ${idx % 2 === 1 ? "bg-white border-y border-line" : ""}`}>
            <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
              {/* section header */}
              <Reveal direction="up">
                <div className="relative mb-12">
                  <span className="absolute -top-8 right-0 font-display font-bold text-[100px] lg:text-[150px] leading-none text-wine/[0.04] select-none pointer-events-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[12px] font-bold" style={{ color: cat.accent }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-10 h-0.5 rounded-full" style={{ background: cat.accent }} />
                      <p className="font-mono text-[10px] uppercase tracking-[2.5px]" style={{ color: cat.accent }}>{cat.label}</p>
                      <span className="font-mono text-[9px] text-mist">· {list.length} {list.length === 1 ? "programme" : "programmes"}</span>
                    </div>
                    <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-wine leading-[1.1]">{cat.tagline}</h2>
                  </div>
                </div>
              </Reveal>

              {/* rows */}
              <div className="flex flex-col gap-7">
                {list.map((p, i) => <ProgramRow key={p.id} p={p} i={i} />)}
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══ CTA ═══ */}
     

      <style>{`
        .prog-row {
          box-shadow: 0 4px 20px rgba(22,38,61,0.06);
          transition: transform 0.4s cubic-bezier(0.2,0,0.2,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .prog-row:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 56px rgba(22,38,61,0.16);
          border-color: rgba(154,115,32,0.35);
        }
        .prog-img { transform: scale(1); transition: transform 0.8s cubic-bezier(0.2,0,0.2,1); }
        .prog-row:hover .prog-img { transform: scale(1.06); }
      `}</style>

    </main>
  );
}