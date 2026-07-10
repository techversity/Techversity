"use client";

import Link from "next/link";
import Image from "next/image";
import useInView from "@/hooks/useInView";

export default function AboutThreshold() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section id="threshold" ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          clipPath: visible ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
          transition: "clip-path 1.1s cubic-bezier(0.77,0,0.175,1)",
        }}
      >
        <Image
          src="/images/about/Threshold.avif"
          alt="Fountain pen on paper"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* gold sweep line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
        style={{
          left: visible ? "100%" : "0%",
          opacity: visible ? 0 : 1,
          background: "#D9A441",
          boxShadow: "0 0 20px rgba(217,164,65,0.8)",
          transition: "left 1.1s cubic-bezier(0.77,0,0.175,1), opacity 0.3s ease 1.1s",
        }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(11,20,33,0.55) 0%, rgba(11,20,33,0.75) 100%)" }}
      />

      {/* faint dot-grid texture — echoes hero and distinction sections */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "34px 34px" }}
      />

      {/* giant watermark numeral, asymmetric */}
      <span
        className="hidden lg:block absolute bottom-0 left-6 font-display font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: "260px", color: "rgba(255,255,255,0.045)", zIndex: 0, transform: "translateY(20%)" }}
      >
        06
      </span>

      {/* outer frame with corner brackets — same motif as Founding & Standard */}
      <div
        className="absolute inset-6 lg:inset-10 pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}
      >
        <span className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold-light/35" />
        <span className="absolute top-0 right-0 w-10 h-10 border-t border-r border-gold-light/35" />
        <span className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-gold-light/35" />
        <span className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold-light/35" />
      </div>

      <div
        className="relative w-full max-w-[1180px] mx-auto px-6 lg:px-10 py-24 lg:py-28 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
        }}
      >
        {/* seal badge — echoes the verification motif from "The standard" */}
        <div className="flex justify-center mb-8">
          <span
            className="w-14 h-14 rounded-full flex items-center justify-center border"
            style={{ borderColor: "rgba(217,164,65,0.35)", background: "rgba(217,164,65,0.06)" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-light" />
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="font-mono text-[11px] tracking-[3px] text-gold-light">06 / 06</span>
          <span className="w-8 h-px bg-gold-light" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/50">Threshold</span>
        </div>

        <h2 className="font-display italic font-medium text-[30px] sm:text-[42px] lg:text-[52px] text-white leading-[1.15] max-w-[820px] mx-auto">
          If your record merits the record, let&rsquo;s begin.
        </h2>

        <p className="font-mono text-[11px] uppercase tracking-[2px] text-gold-light/90 mt-8">
          Responses within 48 hours · Confidential
        </p>

        <Link
          href="/apply/eligibility-check"
          className="group relative inline-flex items-center gap-4 text-white font-semibold text-[14px] pl-8 pr-3 py-3 rounded-full mt-10 transition-all duration-300 hover:-translate-y-1 shadow-[0_14px_40px_rgba(0,0,0,0.3)]"
          style={{ background: "linear-gradient(135deg,#21385C,#16263D)" }}
        >
          {/* soft pulse ring on hover */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: "0 0 0 4px rgba(217,164,65,0.15)" }}
          />
          <span>Begin the Conversation</span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-wine transition-transform duration-200 group-hover:translate-x-0.5"
            style={{ background: "linear-gradient(135deg,#C9A04A,#9A7320)" }}
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}