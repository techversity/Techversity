"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { alumni } from "@/lib/alumni";

export default function AlumniCard() {
  const [cards, setCards] = useState([{ id: 0, index: 0, cls: "" }]);
  const curRef = useRef(0);
  const uid = useRef(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (curRef.current + 1) % alumni.length;
      curRef.current = next;
      const newId = uid.current++;
      setCards((prev) => [
        ...prev.map((c) => ({ ...c, cls: "alumni-exit" })),
        { id: newId, index: next, cls: "alumni-enter" },
      ]);
      setTimeout(() => {
        setCards((prev) => prev.filter((c) => c.id === newId));
      }, 1300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[485px]" style={{ perspective: "1200px" }}>
      {cards.map((c) => {
        const a = alumni[c.index];
        return (
          <div
            key={c.id}
            className={`absolute inset-0 bg-white border border-line rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(22,38,61,0.12)] ${c.cls}`}
          >
            {/* top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-wine to-gold z-20"></div>

            {/* photo */}
            <div className="relative h-55 bg-wine">
              <Image src={a.photo} alt={a.name} fill className="object-cover object-top" sizes="400px" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/55 via-transparent to-transparent z-10"></div>
              <span className="absolute bottom-4 left-4 bg-white/95 text-wine text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow z-20">
                <span className="text-gold">✦</span> Accredited Alumni
              </span>
            </div>

            {/* body */}
            <div className="p-5 lg:p-6">
              <p className="font-display italic text-base lg:text-lg text-ink leading-relaxed mb-5 min-h-[80px] break-words line-clamp-4">
                "{a.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-line">
                <div className="min-w-0 pr-3">
                  <div className="font-display font-semibold text-lg text-wine leading-tight truncate">{a.name}</div>
                  <div className="text-xs text-mist leading-snug">{a.role}</div>
                </div>
                <span className="text-[10px] font-mono text-mist uppercase tracking-wider whitespace-nowrap shrink-0">
                  {a.country}
                </span>
              </div>

              <div className="mt-3">
                <span className="inline-block bg-wine-light text-wine text-[11px] font-semibold px-2.5 py-1 rounded">
                  {a.programLabel || a.program}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}