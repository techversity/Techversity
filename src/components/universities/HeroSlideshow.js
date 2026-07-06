"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { universities } from "@/lib/universities";

const slides = universities.map((u) => ({ src: u.buildingImage, name: u.name }));

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((current) => {
        setPrev(current);
        return (current + 1) % slides.length;
      });
    }, 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((s, i) => {
        const isActive = i === active;
        const isPrev = i === prev;

        // resting position: off-screen to the left, waiting to enter
        let transform = "translateX(-100%)";
        if (isActive) transform = "translateX(0%)"; // slides in from left, into view
        else if (isPrev) transform = "translateX(100%)"; // continues moving right, exits off-screen

        return (
          <div
            key={s.src}
            className="absolute inset-0"
            style={{
              transform,
              // only animate on the way in (waiting -> active) and on the way out
              // (active -> exiting); snap instantly back to the waiting position so
              // there's no reverse (right-to-left) sweep when it resets for its next turn
              transition:
                isActive || isPrev
                  ? "transform 1100ms cubic-bezier(0.65,0,0.35,1)"
                  : "none",
            }}
          >
            <Image
              src={s.src}
              alt={s.name}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover object-center"
            />
          </div>
        );
      })}
    </div>
  );
}