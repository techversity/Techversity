import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ProgramsHubFinalCTA() {
  return (
    <section className="bg-wine relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" style={{ background: "#D9A441" }} />

      <div className="relative max-w-[820px] mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
        <Reveal direction="up">
          <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold mb-6">Not Sure Which Path Fits?</p>
          <h2 className="font-display font-semibold text-[34px] lg:text-[48px] text-white leading-[1.1] mb-7">
            Let's match you to the right programme.
          </h2>
          <p className="text-white/65 text-[15.5px] lg:text-[17px] leading-relaxed mb-10 max-w-[560px] mx-auto">
            A confidential, obligation-free review of your background and goals —
            matched to the right level, pathway, and university partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href="/apply/eligibility-check"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)" }}
            >
              Check Your Eligibility →
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 transition-colors"
            >
              Talk to an Advisor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}