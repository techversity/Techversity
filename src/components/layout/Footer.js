import Link from "next/link";

export default function Footer() {
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
        { label: "About Us",           href: "/about-us" },
        { label: "Our Global Partners",href: "/about-us/global-partners" },
        { label: "Partner With Us",    href: "/partner-with-us" },
        { label: "Contact Us",         href: "/contact-us" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy",  href: "/privacy-policy" },
        { label: "Terms of Service",href: "/terms-of-service" },
        { label: "Refund Policy",   href: "/refund-policy" },
        { label: "FAQs",            href: "/faqs" },
      ],
    },
  ];

  return (
    <footer className="bg-ink pt-16 pb-6">
      <div className="max-w-[1260px] mx-auto px-8">

        {/* TOP */}
        <div className="grid grid-cols-5 gap-8 pb-12">

          {/* logo + tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                src="/images/logo.avif"
                alt="Techversity"
                className="w-9 h-9 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition"
              />
              <span className="font-display font-bold text-[18px] text-white">
                Techversity<span className="text-gold">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed">
              Your global path to doctoral &amp; executive credentials — personally guided, transparently accredited.
            </p>
          </div>

          {/* 4 link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-white/60 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-gold transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/8 pt-6 flex items-center justify-between text-[12px] text-white/30">
          <span>© {new Date().getFullYear()} Techverso Pvt Ltd · 1138 East Rosecrans Ave, Los Angeles, CA 90059, USA</span>
          <span className="font-mono tracking-wider">EST. 2019</span>
        </div>

      </div>
    </footer>
  );
}