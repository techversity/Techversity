import Link from "next/link";

export default function ArticleCTA() {
  return (
    <div className="mt-14 rounded-[24px] bg-wine px-7 py-10 lg:px-12 lg:py-12 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold mb-4">
        Next Step
      </p>
      <h3 className="font-display font-semibold text-[26px] lg:text-[30px] text-white leading-tight mb-4 max-w-[520px] mx-auto">
        Not sure which pathway fits your background?
      </h3>
      <p className="text-[14.5px] text-white/70 leading-relaxed mb-7 max-w-[440px] mx-auto">
        A short advisory call is usually faster than reading every comparison
        guide — tell us where you are, and we&apos;ll tell you honestly what fits.
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[13.5px] bg-gold text-wine hover:bg-gold-deep hover:text-white transition-colors duration-200"
      >
        Talk to an Advisor
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}