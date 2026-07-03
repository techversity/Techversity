"use client";

import { useState } from "react";

export default function FaqAccordion({ items, accent = "#9A7320" }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col divide-y divide-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-5 lg:py-6">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-start justify-between gap-6 text-left group"
            >
              <span className="font-display font-semibold text-[18px] lg:text-[20px] text-wine leading-snug">
                {item.q}
              </span>
              <span
                className="shrink-0 mt-1 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300"
                style={{
                  borderColor: isOpen ? accent : "#E0DCCF",
                  color: accent,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="text-[15px] text-slate leading-relaxed pt-4 pr-8 max-w-2xl">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}