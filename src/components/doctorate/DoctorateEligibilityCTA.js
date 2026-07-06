import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function DoctorateEligibilityCTA() {
  return (
    <section className="bg-white border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <Reveal direction="up">
          <div
            className="relative overflow-hidden rounded-[28px] px-7 py-12 lg:px-14 lg:py-16 text-center"
            style={{ background: "linear-gradient(135deg, #16263D, #21385C)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "28px 28px" }}
            />
            <div className="absolute -bottom-24 -right-16 w-[380px] h-[380px] rounded-full blur-[140px] opacity-[0.16] pointer-events-none" style={{ background: "#D9A441" }} />

            <div className="relative max-w-[620px] mx-auto">
              <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold mb-5">Not Sure Where You Fit?</p>
              <h2 className="font-display font-semibold text-[28px] lg:text-[38px] text-white leading-tight mb-5">
                Is a doctorate right for you?
              </h2>
              <p className="text-white/65 text-[15px] lg:text-[16px] leading-relaxed mb-9">
                Answer a few quick questions about your background and goals — our advisory
                team reviews your profile and tells you honestly which pathway, if any, fits.
              </p>
              <Link
                href="/apply/eligibility-check"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)" }}
              >
                Take the Eligibility Check →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}