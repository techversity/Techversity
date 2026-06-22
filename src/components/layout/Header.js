"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);         // mobile drawer
  const [progOpen, setProgOpen] = useState(false); // mobile accordion

  const simpleLinks = [
    { label: "Universities", href: "/universities" },
    { label: "About", href: "/about-us" },
    { label: "Resources", href: "/resources/blog" },
  ];

  const programItems = [
    { label: "Doctorate Programs", desc: "PhD, DBA & Honorary — for senior professionals.", href: "/doctorate" },
    { label: "Master's & MBA", desc: "Globally recognised master's, 100% online.", href: "/programs/masters" },
    { label: "Bachelor's Programs", desc: "Foundational degrees to begin your path.", href: "/programs/bachelors" },
    { label: "Executive Education", desc: "Short, high-impact programs for leaders.", href: "/programs/executive-education" },
    { label: "Certifications", desc: "Career-ready skills in weeks, with support.", href: "/certifications" },
  ];

  const close = () => setOpen(false);

  return (
    <>
      {/* utility bar (desktop only) */}
      <div className="hidden lg:block bg-wine text-white/75 text-[13px] py-2">
        <div className="max-w-[1260px] mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span>📞 +91-9999-000-000</span>
            <span className="opacity-30">|</span>
            <a href="mailto:admissions@techversity.ai" className="hover:text-gold transition">
              ✉ admissions@techversity.ai
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span>🌐 Region: India</span>
            <span className="opacity-30">|</span>
            <a href="https://wa.me/919999000000" className="hover:text-gold transition">WhatsApp Us</a>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="bg-white border-b border-line sticky top-0 z-50 shadow-[0_2px_12px_rgba(22,38,61,0.08)]">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-[70px]">

          {/* logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={close}>
            <span className="w-9 h-9 lg:w-[38px] lg:h-[38px] bg-gradient-to-br from-wine to-wine-mid text-white rounded-lg flex items-center justify-center font-display font-bold text-base lg:text-[17px]">
              TV
            </span>
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
                <span className="text-[11px] text-gold group-hover:rotate-180 transition-transform duration-200">▾</span>
              </Link>

              {/* dropdown */}
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-line rounded-xl shadow-[0_16px_50px_rgba(22,38,61,0.16)] p-5 w-[620px] grid grid-cols-2 gap-x-6 gap-y-1">
                  <div className="col-span-2 bg-ink rounded-lg p-5 mb-2">
                    <div className="font-mono text-[10px] uppercase tracking-[2px] text-gold mb-2">✦ Programs</div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Doctoral advancement, executive education, and career-ready certifications — guided end-to-end.
                    </p>
                  </div>
                  {programItems.map((item) => (
                    <Link key={item.label} href={item.href} className="block px-3 py-2.5 rounded-lg hover:bg-wine-pale transition">
                      <div className="font-semibold text-sm text-ink mb-0.5">{item.label}</div>
                      <div className="text-xs text-mist leading-snug">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* simple links */}
            {simpleLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-slate px-3.5 py-2 rounded-md hover:bg-wine-pale hover:text-wine transition">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* right side */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:block">
              <Button href="/apply/eligibility-check" variant="primary">Begin Your Application →</Button>
            </div>

            {/* hamburger (mobile only) */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-6 h-[2px] bg-wine rounded"></span>
              <span className="w-6 h-[2px] bg-wine rounded"></span>
              <span className="w-6 h-[2px] bg-wine rounded"></span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`lg:hidden fixed inset-0 z-[60] ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white p-5 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-5">
            <span className="font-display font-bold text-xl text-wine">
              Techversity<span className="text-gold">.ai</span>
            </span>
            <button onClick={close} className="text-2xl text-wine leading-none px-1" aria-label="Close menu">✕</button>
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
              <span className={`text-gold transition-transform ${progOpen ? "rotate-180" : ""}`}>▾</span>
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
            <Link key={link.label} href={link.href} onClick={close} className="block py-3.5 border-b border-line font-semibold text-base text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}