import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Techversity.ai",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="bg-wine relative overflow-hidden min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-[160px] opacity-[0.14] pointer-events-none" style={{ background: "#D9A441" }} />
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full blur-[160px] opacity-[0.10] pointer-events-none" style={{ background: "#21385C" }} />

      <div className="relative max-w-[820px] mx-auto px-5 lg:px-8 py-24 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[4px] text-gold mb-8">Error 404</p>

        <h1
          className="font-display font-semibold leading-none mb-8 select-none"
          style={{ fontSize: "clamp(96px, 18vw, 200px)", color: "rgba(255,255,255,0.08)", letterSpacing: "-4px" }}
        >
          404
        </h1>

        <h2 className="font-display font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-white leading-[1.15] -mt-16 lg:-mt-24 mb-6">
          This page didn't make the <span className="italic text-gold-light">cut.</span>
        </h2>

        <p className="text-white/65 text-[15.5px] lg:text-[17px] leading-relaxed max-w-[520px] mx-auto mb-11">
          The page you're looking for may have moved, been renamed, or never
          existed. Let's get you back to something useful.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-14">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[14px] text-wine transition-transform hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#E8B85A,#D9A441,#9A7320)" }}
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-[14px] text-white border border-white/25 hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-9 border-t border-white/10">
          {[
            { label: "Doctorate Programs", href: "/doctorate" },
            { label: "All Programs", href: "/programs" },
            { label: "Universities", href: "/universities" },
            { label: "Certifications", href: "/certifications" },
            { label: "Blog", href: "/resources/blog" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="font-mono text-[11px] uppercase tracking-wide text-white/50 hover:text-gold-light transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}