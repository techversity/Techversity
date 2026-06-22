"use client";

export default function LogoStrip() {
  const universities = [
    "ESDST University", "Kennedy University", "EU Global Institute", "EPSRU",
    "Florida Coastal", "Christian Central", "Globus University",
    "Euro-Asian University", "International American", "Prowess University",
  ];

  // duplicate for seamless loop
  const loop = [...universities, ...universities];

  return (
    <section className="bg-white border-b border-line py-10 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 lg:px-8">
        <p className="text-center font-mono text-[10px] lg:text-[11px] uppercase tracking-[2.5px] text-mist mb-8">
          Trusted by Leading Global Universities
        </p>
      </div>

      {/* marquee */}
      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-max animate-marquee">
          {loop.map((name, i) => (
            <div key={i} className="flex items-center px-6 lg:px-8 shrink-0">
              <span className="font-display font-semibold text-base lg:text-lg text-wine/70 border border-line rounded px-5 py-2 whitespace-nowrap hover:text-wine hover:border-wine/40 transition">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}