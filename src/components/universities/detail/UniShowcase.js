"use client";

import Link from "next/link";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import Reveal from "@/components/ui/Reveal";

export function UniCertificate({ d }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="bg-ivory">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
  <div className="relative">
    <div className="relative rounded-xl overflow-hidden aspect-[4/3]"
      style={{ boxShadow: "0 30px 60px -20px rgba(22,38,61,0.35)" }}>
      <Image src={d.certificateImage} alt={`${d.name} credential`} fill sizes="560px" className="object-cover" />
    </div>
    {/* subtle gold corner accent, top-left */}
    <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 rounded-tl-xl"
      style={{ borderColor: "#9A7320", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.3s" }} />
    {/* subtle gold corner accent, bottom-right */}
    <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 rounded-br-xl"
      style={{ borderColor: "#9A7320", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.3s" }} />
  </div>
</Reveal>
          <Reveal direction="left" delay={100}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">The Credential</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-wine leading-[1.15] mb-6">
                A degree that travels as far as you do.
              </h2>
              <p className="text-slate text-[15px] leading-[1.9] mb-6">
                Every credential conferred through {d.shortName} arrives with an official certificate, a verifiable
                digital record, and a transcript recognised across the university's accreditation network — issued
                in your name, ready to stand up to scrutiny anywhere.
              </p>
              <Link href={`/apply/application-form?university=${d.slug}`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[14px] text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "#9A7320" }}>
                Begin Your Application
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function UniConvocation({ d }) {
  if (!d.convocationImage) return null;
  return (
    <section className="relative bg-wine overflow-hidden">
      {/* full-bleed image */}
      <div className="absolute inset-0">
        <Image src={d.convocationImage} alt={`${d.name} convocation`} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,22,38,0.88) 0%, rgba(12,22,38,0.5) 42%, rgba(12,22,38,0.15) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.55), transparent 45%)" }} />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 py-28 lg:py-40">
        <div className="max-w-xl">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">The Moment</p>
            </div>
            <h2 className="font-display font-semibold text-[36px] lg:text-[58px] text-white leading-[1.05] mb-6">
              The day it becomes<br /><span className="text-gold italic">&ldquo;Doctor.&rdquo;</span>
            </h2>
            <p className="text-white/75 text-[15px] lg:text-[17px] leading-relaxed mb-4">
              Years of work, distilled into a single conferral. Whether you attend the ceremony in person
              or receive your credential by dispatch, the recognition is the same — earned, formal, and yours to carry for life.
            </p>
            <p className="font-display italic text-[17px] lg:text-[19px] text-white/90">
              {d.ctaLine}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function UniFinalCTA({ u, d }) {
  return (
    <section className="relative bg-wine overflow-hidden">
      {d.finalCtaImage && (
        <div className="absolute inset-0">
          <Image
            src={d.finalCtaImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none" style={{ background: "#9A7320" }} />

      <div className="relative max-w-[820px] mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
        {/* soft dark patch — sits only behind the text, image stays bright elsewhere */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "110%",
            height: "160%",
            background: "radial-gradient(ellipse at center, rgba(12,22,38,0.6) 0%, rgba(12,22,38,0.25) 55%, transparent 75%)",
            filter: "blur(4px)",
          }}
        />

        <Reveal direction="up">
          <p className="relative font-display italic text-[16px] text-gold/90 mb-6"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.75)" }}>
            {d.ctaLine}
          </p>
          <h2 className="relative font-display font-semibold text-[30px] lg:text-[46px] text-white leading-[1.08] mb-8"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Apply to {d.name},<br />guided by Techversity.
          </h2>
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Link href={`/apply/application-form?university=${u.slug}`}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#9A7320" }}>
              Start Your Application
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white/85 border border-white/25 hover:border-white/50 transition-colors">
              Explore Programs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}