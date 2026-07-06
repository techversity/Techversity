"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

function FaqRow({ item, index, isOpen, onToggle }) {
  return (
    <div
      className="group relative border-b transition-colors duration-500"
      style={{ borderColor: "#EDE7D8" }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(154,115,32,0.05), transparent 60%)",
          opacity: isOpen ? 1 : 0,
        }}
      />

      <span
        className="absolute -left-2 top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none transition-all duration-500"
        style={{
          fontSize: "88px",
          color: "#9A7320",
          opacity: isOpen ? 0.07 : 0.04,
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <button
        onClick={onToggle}
        className="relative w-full text-left py-8 lg:py-9 pl-16 lg:pl-20 pr-14"
      >
        <span
          className="block font-display font-semibold text-[18px] lg:text-[22px] leading-snug transition-colors duration-300"
          style={{ color: isOpen ? "#5C1F2E" : "#221B17" }}
        >
          {item.q}
        </span>

        <div
          className="grid transition-all duration-500 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p className="text-slate text-[14.5px] lg:text-[15px] leading-relaxed pt-4 max-w-2xl">
              {item.a}
            </p>
          </div>
        </div>

        <span
          className="absolute top-8 lg:top-9 right-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1.5px] transition-all duration-300"
          style={{ color: isOpen ? "#9A7320" : "#B8AE97" }}
        >
          <span className="hidden lg:inline">{isOpen ? "Close" : "Read"}</span>
          <span
            className="inline-block transition-transform duration-400 ease-out"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            →
          </span>
        </span>
      </button>
    </div>
  );
}

export default function ProgramFaq({ p }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!p.faqs?.length) return null;

  return (
    <section className="bg-ivory">
      <div className="max-w-[840px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <Reveal direction="up">
          <div className="text-center max-w-xl mx-auto mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">
                Questions, Answered
              </p>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08] mb-6">
              Everything worth asking.
            </h2>
            <p className="text-slate text-[15px] leading-relaxed">
              The questions distinguished applicants ask before pursuing
              recognition — answered plainly and in full. Still unsure? A first
              consultation is always confidential and free.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div>
            {p.faqs.map((item, i) => (
              <FaqRow
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <div className="text-center mt-12">
            <p className="text-slate text-[13.5px]">
              Still have questions?{" "}
              <Link
                href="/apply/application-form"
                className="text-gold font-semibold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Book a confidential consultation
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
