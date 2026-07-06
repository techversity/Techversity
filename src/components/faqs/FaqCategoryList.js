"use client";

import { useState } from "react";

function FaqRow({ item, index, isOpen, onToggle }) {
  return (
    <div className="group relative border-b transition-colors duration-500" style={{ borderColor: "#EDE7D8" }}>
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(154,115,32,0.05), transparent 60%)",
          opacity: isOpen ? 1 : 0,
        }}
      />

      <span
        className="absolute -left-2 top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none transition-all duration-500"
        style={{
          fontSize: "72px",
          color: "#9A7320",
          opacity: isOpen ? 0.08 : 0.045,
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <button onClick={onToggle} className="relative w-full text-left py-7 lg:py-8 pl-14 lg:pl-16 pr-14">
        <span
          className="block font-display font-semibold text-[17px] lg:text-[20px] leading-snug transition-colors duration-300"
          style={{ color: isOpen ? "#16263D" : "#221B17" }}
        >
          {item.q}
        </span>

        <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
          <div className="overflow-hidden">
            <p className="text-slate text-[14.5px] lg:text-[15px] leading-relaxed pt-4 max-w-2xl">{item.a}</p>
          </div>
        </div>

        <span
          className="absolute top-7 lg:top-8 right-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1.5px] transition-all duration-300"
          style={{ color: isOpen ? "#9A7320" : "#B8AE97" }}
        >
          <span className="hidden lg:inline">{isOpen ? "Close" : "Read"}</span>
          <span className="inline-block transition-transform duration-400 ease-out" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
            →
          </span>
        </span>
      </button>
    </div>
  );
}

const icons = {
  info: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  ),
  shield: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  document: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  lock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
};

export default function FaqCategoryList({ id, title, icon, items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div id={id} className="mb-14 lg:mb-16 scroll-mt-24">
      <div className="flex items-center gap-2.5 mb-1">
        {icon && (
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-gold-deep border border-gold/25 bg-gold-light/30">
            {icons[icon]}
          </span>
        )}
        <h2 className="font-display font-semibold text-[22px] lg:text-[26px] text-wine">{title}</h2>
      </div>
      <div>
        {items.map((item, i) => (
          <FaqRow
            key={item.q}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </div>
  );
}