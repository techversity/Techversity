"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

/* ── inline SVG icons — no emoji, no extra dependency ── */
const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.099 1.523 5.82L.057 23.49a.5.5 0 0 0 .614.635l5.84-1.53A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.367l-.358-.214-3.716.975.992-3.633-.233-.373A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);

  const simpleLinks = [
    { label: "Universities", href: "/universities" },
    { label: "About", href: "/about-us" },
    { label: "Resources", href: "/resources/blog" },
  ];

  const programItems = [
    { label: "Doctorate Programs", desc: "PhD, DBA & Honorary — for senior professionals.", href: "/doctorate" },
    { label: "Master's & MBA",     desc: "Globally recognised master's, 100% online.",       href: "/programs/masters" },
    { label: "Bachelor's Programs",desc: "Foundational degrees to begin your path.",          href: "/programs/bachelors" },
    { label: "Executive Education",desc: "Short, high-impact programs for leaders.",           href: "/programs/executive-education" },
    { label: "Certifications",     desc: "Career-ready skills in weeks, with support.",       href: "/certifications" },
  ];

  const close = () => setOpen(false);

  return (
    <>
      {/* ── utility bar (desktop only) ── */}
      <div className="hidden lg:block bg-wine text-white/70 text-[12px] py-2">
        <div className="max-w-[1260px] mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+919999000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneIcon /> +91-9999-000-000
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="mailto:admissions@techversity.ai" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <MailIcon /> admissions@techversity.ai
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <GlobeIcon /> India
            </span>
            <span className="w-px h-3 bg-white/20" />
            <a href="https://wa.me/919999000000" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── main header ── */}
      <header className="bg-white border-b border-line sticky top-0 z-50 shadow-[0_2px_12px_rgba(22,38,61,0.08)]">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-[70px]">

          {/* logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={close}>
            <img
              src="/images/logo.avif"
              alt="Techversity"
              className="w-10 h-10 lg:w-[44px] lg:h-[44px] object-contain"
            />
            <span className="font-display font-bold text-xl lg:text-[22px] text-wine tracking-tight">
              Techversity<span className="text-gold">.ai</span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Programs mega menu */}
            <div className="group relative">
              <Link
                href="/programs"
                className="flex items-center gap-1 text-sm font-medium text-slate px-3.5 py-2 rounded-md group-hover:bg-wine-pale group-hover:text-wine transition"
              >
                Programs
                <svg className="w-3 h-3 text-gold group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 8L1 3h10z"/>
                </svg>
              </Link>

              {/* dropdown */}
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-line rounded-xl shadow-[0_16px_50px_rgba(22,38,61,0.16)] p-5 w-[620px] grid grid-cols-2 gap-x-6 gap-y-1">
                  <div className="col-span-2 bg-ink rounded-lg p-5 mb-2">
                    <div className="font-mono text-[10px] uppercase tracking-[2px] text-gold mb-2">
                      Programs
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Doctoral advancement, executive education, and career-ready certifications — guided end-to-end.
                    </p>
                  </div>
                  {programItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2.5 rounded-lg hover:bg-wine-pale transition"
                    >
                      <div className="font-semibold text-sm text-ink mb-0.5">{item.label}</div>
                      <div className="text-xs text-mist leading-snug">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate px-3.5 py-2 rounded-md hover:bg-wine-pale hover:text-wine transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* right side */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:block">
              <Button href="/apply/eligibility-check" variant="primary">
                Begin Your Application →
              </Button>
            </div>

            {/* hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-6 h-[2px] bg-wine rounded" />
              <span className="w-6 h-[2px] bg-wine rounded" />
              <span className="w-6 h-[2px] bg-wine rounded" />
            </button>
          </div>
        </div>
      </header>

      {/* ── mobile drawer ── */}
      <div className={`lg:hidden fixed inset-0 z-[60] ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />
        <div className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white p-5 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>

          {/* drawer header with logo */}
          <div className="flex items-center justify-between mb-5">
            <Link href="/" onClick={close} className="flex items-center gap-2">
              <img src="/images/logo.avif" alt="Techversity" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-[18px] text-wine">
                Techversity<span className="text-gold">.ai</span>
              </span>
            </Link>
            <button onClick={close} aria-label="Close menu" className="p-1 text-slate hover:text-wine transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <Link
            href="/apply/eligibility-check"
            onClick={close}
            className="block text-center bg-wine text-white font-semibold text-sm py-3 rounded-md mb-5"
          >
            Begin Your Application →
          </Link>

          {/* programs accordion */}
          <div className="border-b border-line">
            <button
              onClick={() => setProgOpen(!progOpen)}
              className="w-full flex items-center justify-between py-3.5 font-semibold text-base text-ink"
            >
              Programs
              <svg className={`w-3.5 h-3.5 text-gold transition-transform ${progOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L1 3h10z"/>
              </svg>
            </button>
            {progOpen && (
              <div className="pb-3 pl-3 flex flex-col gap-2">
                {programItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={close} className="text-sm text-slate py-1">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              className="block py-3.5 border-b border-line font-semibold text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}