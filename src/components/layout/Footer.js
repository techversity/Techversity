import Link from "next/link";

export default function Footer() {
  // footer ke columns — har column ka heading + links
  const columns = [
    {
      heading: "Explore",
      links: [
        { label: "Universities", href: "/universities" },
        { label: "Certifications", href: "/certifications" },
        { label: "Career Services", href: "/career-services" },
        { label: "Verify a Degree", href: "/verification/degree-verification" },
      ],
    },
    {
      heading: "Programs",
      links: [
        { label: "Doctorate (PhD/DBA)", href: "/doctorate" },
        { label: "Master's / MBA", href: "/programs/masters" },
        { label: "Bachelor's", href: "/programs/bachelors" },
        { label: "Executive Education", href: "/programs/executive-education" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Our Global Partners", href: "/about-us/global-partners" },
        { label: "Partner With Us", href: "/partner-with-us" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ];

  return (
    <footer className="bg-ink pt-16 pb-6">
      <div className="max-w-[1260px] mx-auto px-8">

        {/* TOP: logo + columns */}
        <div className="grid grid-cols-5 gap-8 pb-12">

          {/* logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-wine text-white rounded-md flex items-center justify-center font-display font-bold text-xs">
                TV
              </span>
              <span className="font-display font-bold text-lg text-white">
                Techversity<span className="text-gold">.ai</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Your global path to doctoral &amp; executive credentials — personally guided, transparently accredited.
            </p>
          </div>

          {/* 4 link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/90 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM: copyright */}
        <div className="border-t border-white/10 pt-6 text-sm text-white/35">
          © {new Date().getFullYear()} Techverso Pvt Ltd · Lucknow, India
        </div>

      </div>
    </footer>
  );
}