"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";
import LeadForm from "@/components/forms/LeadForm";

export default function FinalCTA() {
  const [ref, visible] = useInView({ threshold: 0.08 });

  return (
    <section ref={ref} className="border-t border-line overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "640px" }}>

        {/* ═══ LEFT: image + testimonial ═══ */}
        <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
          <div
            className="absolute inset-0"
            style={{
              clipPath: visible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 1.1s cubic-bezier(0.77,0,0.175,1) 0.15s",
            }}
          >
            <Image
              src="/images/homePage/ContactImg.avif"
              alt="Graduation ceremony"
              fill
              className="object-cover"
              sizes="50vw"
              style={{
                objectPosition: "left center", // 👈 crop se left content bachega
                transform: visible ? "scale(1)" : "scale(1.03)", // 👈 zyada zoom hata diya
                transition: "transform 1.6s cubic-bezier(0.22,1,0.36,1) 0.15s",
              }}
            />
          </div>

          {/* gold sweep */}
          <div
            className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
            style={{
              left: visible ? "100%" : "0%",
              opacity: visible ? 0 : 1,
              background: "#D9A441",
              boxShadow: "0 0 20px rgba(217,164,65,0.8)",
              transition: "left 1.1s cubic-bezier(0.77,0,0.175,1) 0.15s, opacity 0.3s ease 1.1s",
            }}
          />

          {/* gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg,rgba(11,37,69,0.35) 0%,rgba(11,37,69,0.05) 40%,rgba(8,26,47,0.82) 100%)" }}
          />
        </div>

        {/* ═══ RIGHT: contact form ═══ */}
        <div
          className="relative flex flex-col justify-center bg-ivory-2 px-8 lg:px-14 py-14"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.3s" }}
        >
          <LeadForm
            source="homepage_finalcta"
            variant="contact"
            showMessage
            heading={<>Start your <span className="italic text-gold">journey.</span></>}
            subheading="Free Consultation"
          />
        </div>

      </div>
    </section>
  );
}