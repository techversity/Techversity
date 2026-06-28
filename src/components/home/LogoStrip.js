"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const universities = [
  { initials: "ES", name: "ESDST University", country: "France", code: "fr", programs: "PhD · DBA",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=75",
    founded: "1998", students: "12,000+", accreditation: "EU Accredited", offers: ["PhD", "DBA", "Honorary"] },
  { initials: "KU", name: "Kennedy University", country: "United States", code: "us", programs: "PhD",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=75",
    founded: "1965", students: "8,500+", accreditation: "US Recognized", offers: ["PhD", "Research"] },
  { initials: "EG", name: "EU Global Institute", country: "Malta", code: "mt", programs: "DBA · MBA",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=75",
    founded: "2004", students: "6,200+", accreditation: "EU Accredited", offers: ["DBA", "MBA", "Masters"] },
  { initials: "SB", name: "SBS Swiss Business School", country: "Switzerland", code: "ch", programs: "MBA · Exec",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=75",
    founded: "1998", students: "5,000+", accreditation: "Swiss Accredited", offers: ["MBA", "Exec Ed", "DBA"] },
  { initials: "EP", name: "EPSRU", country: "Russia", code: "ru", programs: "PhD · DBA",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=75",
    founded: "1992", students: "15,000+", accreditation: "State Accredited", offers: ["PhD", "DBA"] },
  { initials: "GU", name: "Globus University", country: "Russia", code: "ru", programs: "PhD",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=75",
    founded: "2001", students: "9,800+", accreditation: "State Accredited", offers: ["PhD", "Research"] },
  { initials: "EA", name: "Euro-Asian University", country: "Kazakhstan", code: "kz", programs: "DBA",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=75",
    founded: "1995", students: "11,000+", accreditation: "Nationally Accredited", offers: ["DBA", "Masters"] },
  { initials: "PW", name: "Prowess University", country: "United Kingdom", code: "gb", programs: "PhD · MBA",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=500&q=75",
    founded: "1987", students: "18,000+", accreditation: "UK Recognized", offers: ["PhD", "MBA", "Masters"] },
  { initials: "IA", name: "Int'l American University", country: "United States", code: "us", programs: "DBA",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&q=75",
    founded: "2003", students: "7,300+", accreditation: "US Recognized", offers: ["DBA", "MBA"] },
  { initials: "FC", name: "Florida Coastal", country: "United States", code: "us", programs: "Exec Ed",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=500&q=75",
    founded: "1996", students: "4,500+", accreditation: "US Recognized", offers: ["Exec Ed", "Certificate"] },
];

const flagUrl = (code) => `https://flagcdn.com/w80/${code}.png`;

export default function LogoStrip() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % universities.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-line overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">

        {/* header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-mist mb-3">
                Global Network
              </p>
              <h2 className="font-display font-semibold text-2xl lg:text-[34px] text-wine leading-tight">
                Trusted by <span className="italic text-gold">10+ accredited</span><br className="hidden lg:block" />
                universities worldwide.
              </h2>
            </div>
            <Link href="/universities"
              className="text-sm font-semibold text-gold hover:opacity-70 transition-opacity whitespace-nowrap">
              View All Partners →
            </Link>
          </div>
        </Reveal>

        {/* grid — items-start so cards expand downward independently */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 items-start">
          {universities.map((u, i) => (
            <div
              key={i}
              className="uni-outer relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms`,
                zIndex: 1,
              }}
            >
              <div className="uni-float" style={{ animationDelay: `${i * 0.35}s` }}>
              <Link
                href="/universities"
                className="uni-card group relative block rounded-2xl border overflow-hidden cursor-pointer bg-white"
                style={{ borderColor: "#E0DCCF" }}
              >
                {/* ── image top ── */}
                <div className="relative h-[140px] lg:h-[150px] overflow-hidden">
                  <Image
                    src={u.image}
                    alt={u.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center uni-img"
                    style={{ filter: "brightness(0.72)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/55 via-transparent to-wine/15" />

                  {/* flag */}
                  <div className="absolute top-3 right-3 z-20 rounded-md overflow-hidden shadow-lg ring-1 ring-white/40">
                    <Image src={flagUrl(u.code)} alt={u.country} width={30} height={20}
                      className="object-cover block" style={{ width: "30px", height: "20px" }} />
                  </div>

                  {/* name over image */}
                  <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3.5">
                    <h3 className="font-display font-semibold text-white text-[16px] lg:text-[17px] leading-tight drop-shadow-md">
                      {u.name}
                    </h3>
                  </div>
                </div>

                {/* ── base body (always visible) ── */}
                <div className="px-4 py-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src={flagUrl(u.code)} alt={u.country} width={16} height={11}
                        className="rounded-[2px] object-cover opacity-80" style={{ width: "16px", height: "11px" }} />
                      <p className="font-mono text-[9px] uppercase tracking-wider text-mist">{u.country}</p>
                    </div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-gold font-semibold">{u.programs}</p>
                  </div>
                </div>

                {/* ── EXPAND SECTION (compact, opens on hover) ── */}
                <div className="uni-expand overflow-hidden">
                  <div className="px-4 pb-3.5">
                    {/* divider */}
                    <div className="h-px bg-line mb-3" />

                    {/* stats inline + accreditation */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-4">
                        <div>
                          <p className="font-display font-bold text-wine text-[15px] leading-none">{u.founded}</p>
                          <p className="font-mono text-[7px] uppercase tracking-wider text-mist mt-0.5">Founded</p>
                        </div>
                        <div>
                          <p className="font-display font-bold text-wine text-[15px] leading-none">{u.students}</p>
                          <p className="font-mono text-[7px] uppercase tracking-wider text-mist mt-0.5">Students</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>
                        </svg>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-gold-deep text-[11px] font-semibold">
                      View University
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform duration-200">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* gold bottom sweep */}
                <div className="uni-sweep absolute bottom-0 left-0 h-0.5 z-40"
                  style={{ background: "linear-gradient(90deg,#B08A2E,#9A7320)" }} />
              </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* gentle float — runs on its own layer, no conflict with expand */
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .uni-float {
          animation: floatCard 4s ease-in-out infinite;
          will-change: transform;
        }
        /* pause float on hover so the expand reads cleanly */
        .uni-float:hover {
          animation-play-state: paused;
        }

        /* expand section: collapsed by default, opens on hover */
        .uni-expand {
          max-height: 0;
          opacity: 0;
          transition: max-height 0.45s cubic-bezier(0.2,0,0.2,1), opacity 0.35s ease;
        }
        .uni-card:hover .uni-expand {
          max-height: 120px;
          opacity: 1;
        }

        /* image subtle zoom on hover */
        .uni-img { transform: scale(1); transition: transform 0.7s cubic-bezier(0.2,0,0.2,1); }
        .uni-card:hover .uni-img { transform: scale(1.08); }

        /* card styling on hover */
        .uni-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .uni-card:hover {
          border-color: rgba(154,115,32,0.5) !important;
          box-shadow: 0 18px 48px rgba(22,38,61,0.18);
        }

        /* gold sweep fills on hover */
        .uni-sweep { width: 0%; transition: width 0.5s ease; }
        .uni-card:hover .uni-sweep { width: 100%; }

        /* lift the whole card slightly + raise above neighbours */
        .uni-outer { transition: transform 0.35s ease; }
        .uni-outer:hover { z-index: 40; }
      `}</style>
    </section>
  );
}