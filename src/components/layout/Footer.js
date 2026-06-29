import Link from "next/link";

const PHONE_RAW = "+13239168629";
const PHONE     = "+1 (323) 916-8629";
const WHATSAPP  = "13239168629";
const EMAIL     = "admissions@techversity.ai";

export default function Footer() {
  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      ),
      label: "Globally Accredited Programs",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      label: "Dedicated Personal Advisor",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>
        </svg>
      ),
      label: "Flexible, Self-Paced Study",
    },
  ];

  const columns = [
    {
      heading: "Explore",
      links: [
        { label: "Universities",    href: "/universities" },
        { label: "Certifications",  href: "/certifications" },
        { label: "Career Services", href: "/career-services" },
        { label: "Verify a Degree", href: "/verification/degree-verification" },
      ],
    },
    {
      heading: "Programs",
      links: [
        { label: "Doctorate (PhD/DBA)", href: "/doctorate" },
        { label: "Master's / MBA",      href: "/programs/masters" },
        { label: "Bachelor's",          href: "/programs/bachelors" },
        { label: "Executive Education", href: "/programs/executive-education" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us",            href: "/about-us" },
        { label: "Our Global Partners", href: "/about-us/global-partners" },
        { label: "Partner With Us",     href: "/partner-with-us" },
        { label: "Contact Us",          href: "/contact-us" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy",   href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Refund Policy",    href: "/refund-policy" },
        { label: "FAQs",             href: "/faqs" },
      ],
    },
  ];

  const socials = [
    { label: "LinkedIn",  href: "https://www.linkedin.com/company/techversity-ai", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
    { label: "Instagram", href: "https://www.instagram.com/techv_ersity/", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M2 12c0-3.2 0-4.8.62-6.02a6 6 0 0 1 2.36-2.36C6.2 3 7.8 3 12 3s5.8 0 7.02.62a6 6 0 0 1 2.36 2.36C22 7.2 22 8.8 22 12s0 5.8-.62 7.02a6 6 0 0 1-2.36 2.36C17.8 22 16.2 22 12 22s-5.8 0-7.02-.62a6 6 0 0 1-2.36-2.36C2 16.8 2 15.2 2 12z" },
    { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61577651143895", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  ];

  return (
    <footer className="relative bg-ink overflow-hidden">

      {/* subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ═══ CTA STRIP — centered, more impactful ═══ */}
      <div className="relative border-b border-white/8">
        {/* gold hairline top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(176,138,46,0.5) 30%, rgba(176,138,46,0.5) 70%, transparent)" }}
        />

        <div className="max-w-[1260px] mx-auto px-5 lg:px-8 py-16 lg:py-20 text-center">
          {/* eyebrow */}
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Begin Today</p>

          {/* heading */}
          <h2 className="font-display font-semibold text-[30px] lg:text-[52px] text-white leading-[1.05] max-w-3xl mx-auto mb-10">
            Ready to earn a{" "}
            <span className="italic text-gold">globally recognised</span>{" "}
            credential?
          </h2>

          {/* feature highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mb-10">
            {features.map((f, i) => (
              <div key={f.label} className="flex items-center">
                <div className="flex items-center gap-2.5 text-white/55 hover:text-white/80 transition-colors">
                  <span className="text-gold/80">{f.icon}</span>
                  <span className="text-[13px] font-medium tracking-wide">{f.label}</span>
                </div>
                {i < features.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-white/15 mx-7" />
                )}
              </div>
            ))}
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/apply/eligibility-check"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#B08A2E,#9A7320)",
                boxShadow: "0 10px 28px rgba(154,115,32,0.3)",
              }}
            >
              Check Your Eligibility
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Talk to an Advisor
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[14px] border border-white/10 hover:bg-white/5 transition-all duration-200"
              style={{ color: "#25D366" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ═══ MAIN LINKS ═══ */}
      <div className="relative max-w-[1260px] mx-auto px-5 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10">

          {/* brand + contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <img
                src="/images/logo.avif"
                alt="Techversity"
                className="w-9 h-9 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition"
              />
              <span className="font-display font-bold text-[19px] text-white">
                Techversity<span className="text-gold">.ai</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-white/45 leading-relaxed mb-6 max-w-[260px]">
              Your global path to doctoral &amp; executive credentials — personally guided, transparently accredited.
            </p>

            {/* contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-gold transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/70 shrink-0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-gold transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/70 shrink-0" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#25D366] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" style={{ color: "rgba(37,211,102,0.7)" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              {/* ── Address ── */}
              <div className="flex items-start gap-2.5 mt-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/70 shrink-0 mt-0.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-[13px] text-white/55 leading-relaxed">
                  1138 East Rosecrans Avenue,<br />
                  Los Angeles, CA 90059,<br />
                  United States
                </span>
              </div>

            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-white/55 mb-4 pb-3 border-b border-white/8">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-[13.5px] text-white/45 hover:text-white transition-colors duration-150"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                        <span className="text-gold pr-1">→</span>
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ BOTTOM BAR ═══ */}
      <div className="relative">
        {/* gold gradient separator */}
        <div
          className="mx-5 lg:mx-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(176,138,46,0.35) 25%, rgba(176,138,46,0.35) 75%, transparent)" }}
        />

        <div className="max-w-[1260px] mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="text-[12px] text-white/30 text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Techverso Pvt Ltd · 1138 East Rosecrans Ave, Los Angeles, CA 90059, USA
          </span>

          {/* socials */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-white hover:border-gold/50 hover:bg-gold/10 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}