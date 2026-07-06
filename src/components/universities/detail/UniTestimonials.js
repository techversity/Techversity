import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { alumni } from "@/lib/alumni";

export default function UniTestimonials({ d }) {
  const list = alumni
    .filter((a) => a.university.toLowerCase().includes(d.shortName.toLowerCase()))
    .slice(0, 3);
  if (!list.length) return null;

  return (
    <section className="bg-ivory-2/50">
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Alumni From {d.shortName}</p>
          <h2 className="font-display font-semibold text-[26px] lg:text-[36px] text-wine leading-[1.15] mb-12 max-w-xl">
            The people who walked this path.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 80}>
              <div className="h-full rounded-2xl bg-white border border-line p-7 flex flex-col">
                <p className="font-display italic text-[15px] text-ink leading-relaxed flex-1">“{t.quote}”</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[13.5px] text-wine">{t.name}</p>
                    <p className="text-mist text-[11.5px] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}