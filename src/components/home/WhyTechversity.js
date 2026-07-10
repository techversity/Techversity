"use client";

import Image from "next/image";
import { useState } from "react";
import useInView from "@/hooks/useInView";

const ITEMS = [
  {
    img: "/images/HomePage/1.avif",
    title: "Global Reach",
    desc: "Learners connected across countries and continents, guided by one consistent standard.",
    mark: "GR",
  },
  {
    img: "/images/HomePage/2.avif",
    title: "Accredited Partners",
    desc: "Every credential we facilitate is backed by an independently verified university.",
    mark: "AP",
  },
  {
    img: "/images/HomePage/3.avif",
    title: "Fast-Track Timeline",
    desc: "A structured, guided pathway — from first conversation to conferment.",
    mark: "FT",
  },
  {
    img: "/images/HomePage/4.avif",
    title: "Alumni Network",
    desc: "Join a growing community of recognised professionals worldwide.",
    mark: "AN",
  },
];

// Fan positions tuned for landscape cards (image aspect ~1300:867).
// Mostly vertical/rotational stagger with modest horizontal overlap,
// so each image's own design stays intact — no cropping.
const BASE = [
  { rotate: -7, x: 0, y: 24 },
  { rotate: -2, x: 208, y: -8 },
  { rotate: 3, x: 416, y: 18 },
  { rotate: 8, x: 624, y: -14 },
];

const CARD_W = 340;
const CARD_H = Math.round((CARD_W * 867) / 1300); // matches source image ratio, zero crop

function DeckCard({ item, index, hoveredIndex, setHoveredIndex, visible }) {
  const base = BASE[index];
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  let x = base.x;
  let y = base.y;
  let rotate = base.rotate;
  let scale = 1;
  let z = index + 1;
  let opacity = 1;

  if (isHovered) {
    rotate = 0;
    y = base.y - 28;
    scale = 1.1;
    z = 20;
  } else if (isOtherHovered) {
    x = base.x + (index < hoveredIndex ? -30 : 30);
    scale = 0.95;
    opacity = 0.6;
  }

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onFocus={() => setHoveredIndex(index)}
      onBlur={() => setHoveredIndex(null)}
      tabIndex={0}
      className="absolute top-0 rounded-[16px] overflow-hidden cursor-pointer outline-none"
      style={{
        left: 0,
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        transform: visible
          ? `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`
          : `translate(${base.x}px, 30px) rotate(0deg) scale(0.9)`,
        opacity: visible ? opacity : 0,
        zIndex: z,
        transition: `transform 0.5s cubic-bezier(0.22,1,0.36,1) ${visible ? index * 90 : 0}ms, opacity 0.4s ease ${
          visible ? index * 90 : 0
        }ms`,
        boxShadow: isHovered
          ? "0 28px 56px rgba(22,38,61,0.4), 0 0 0 2px rgba(154,115,32,0.5)"
          : "0 10px 24px rgba(22,38,61,0.2), 0 0 0 1px rgba(224,220,207,0.9)",
      }}
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        sizes={`${CARD_W}px`}
        className="object-cover object-center"
        style={{
          transform: isHovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* subtle sheen ring on hover — signature touch, sits at the frame edge only */}
      <div
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{
          boxShadow: isHovered ? "inset 0 0 0 1.5px rgba(232,184,90,0.9)" : "inset 0 0 0 0px rgba(232,184,90,0)",
          transition: "box-shadow 0.4s ease",
        }}
      />

      <span
        className="absolute top-3 left-3 font-mono text-[10px] tracking-[2px] px-2 py-1 rounded-full"
        style={{ color: "#F2F0E9", background: "rgba(22,38,61,0.55)", backdropFilter: "blur(2px)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function MobileCard({ item, index }) {
  return (
    <div className="rounded-[16px] overflow-hidden" style={{ boxShadow: "0 10px 24px rgba(22,38,61,0.16), 0 0 0 1px rgba(224,220,207,0.9)" }}>
      <div className="relative w-full" style={{ aspectRatio: "1300 / 867" }}>
        <Image src={item.img} alt={item.title} fill sizes="100vw" className="object-cover object-center" />
        <span
          className="absolute top-3 left-3 font-mono text-[10px] tracking-[2px] px-2 py-1 rounded-full"
          style={{ color: "#F2F0E9", background: "rgba(22,38,61,0.55)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function WhyTechversity() {
  const [sectionRef, visible] = useInView({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = hoveredIndex ?? 0;
  const active = ITEMS[activeIndex];

  const containerWidth = BASE[BASE.length - 1].x + CARD_W;
  const containerHeight = CARD_H + 70; // room for hover lift + rotation

  return (
    <section ref={sectionRef} className="bg-ivory py-20 lg:py-28 border-b border-line overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8">
        <div
          className="max-w-2xl mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold">Why Techversity</p>
          </div>
          <h2 className="font-display font-semibold text-[32px] lg:text-[46px] text-wine leading-[1.08]">
            Built on trust, <span className="italic text-gold">proven at scale.</span>
          </h2>
        </div>

        {/* Desktop — fanned deck, images shown at native ratio, zero crop */}
        <div className="hidden lg:block">
          <div
            className="relative mx-auto"
            style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
          >
            {ITEMS.map((item, i) => (
              <DeckCard
                key={item.title}
                item={item}
                index={i}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                visible={visible}
              />
            ))}
          </div>

          {/* shared caption plate — crossfades with whichever card is active */}
          <div
            className="max-w-xl mx-auto text-center mt-10"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <div key={activeIndex} style={{ animation: "fade-up 0.4s ease" }}>
              <span className="font-mono text-[10px] tracking-[3px] text-gold uppercase">
                {String(activeIndex + 1).padStart(2, "0")} — {active.mark}
              </span>
              <h3 className="font-display font-semibold text-[24px] text-wine mt-2 mb-2">
                {active.title}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#4F5765" }}>
                {active.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile / tablet — clean stacked list, image speaks for itself */}
        <div className="flex flex-col gap-5 lg:hidden">
          {ITEMS.map((item, i) => (
            <div key={item.title}>
              <MobileCard item={item} index={i} />
              <div className="mt-3 px-1">
                <h3 className="font-display font-semibold text-[18px] text-wine mb-1">{item.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "#4F5765" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}