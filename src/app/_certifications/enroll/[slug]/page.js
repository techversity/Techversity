// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { certifications as certs } from "@/lib/certifications";
// import CertEnrollForm from "@/components/forms/CertEnrollForm";

// const slugOf = (c) => c.href.split("/").filter(Boolean).pop();

// export function generateStaticParams() {
//   return certs.map((c) => ({ slug: slugOf(c) }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const cert = certs.find((c) => slugOf(c) === slug);
//   if (!cert) return { title: "Enrol — Techversity.ai" };
//   return {
//     title: `Enrol in ${cert.title} — Techversity.ai`,
//     description: `${cert.desc} ${cert.duration}, ${cert.level}. Career support included.`,
//   };
// }

// export default async function CertEnrollPage({ params }) {
//   const { slug } = await params;
//   const cert = certs.find((c) => slugOf(c) === slug);
//   if (!cert) return notFound();

//   const others = certs.filter((c) => slugOf(c) !== slug);

//   return (
//     <main className="bg-ivory">

//       {/* ═══ HERO BANNER ═══ */}
//       <section className="relative overflow-hidden">
//         <Image src={cert.image} alt={cert.title} fill sizes="100vw" className="object-cover object-center" priority />
//         {/* neutral dark gradient — image stays clear, text readable */}
//         <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(12,22,38,0.78) 0%, rgba(12,22,38,0.45) 45%, rgba(12,22,38,0.25) 100%)" }} />
//         <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.65), transparent 55%)" }} />
//         {/* slim accent strip — subtle brand cue */}
//         <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: cert.accent }} />

//         <div className="relative max-w-[1180px] mx-auto px-5 lg:px-8 pt-10 pb-14 lg:pt-12 lg:pb-20">
//           {/* breadcrumb */}
//           <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/70 mb-8">
//             <Link href="/" className="hover:text-white transition-colors">Home</Link>
//             <span>/</span>
//             <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
//             <span>/</span>
//             <span className="text-white">{cert.title}</span>
//           </div>

//           {/* tag */}
//           {cert.tag && (
//             <span className="inline-block font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full font-semibold mb-5 bg-white/95"
//               style={{ color: cert.accent }}>
//               {cert.tag}
//             </span>
//           )}

//           <p className="font-mono text-[10px] uppercase tracking-[3px] text-white/70 mb-3">{cert.field} Certification</p>
//           <h1 className="font-display font-semibold text-[42px] lg:text-[64px] leading-[0.98] text-white max-w-3xl mb-5">
//             {cert.title}
//           </h1>
//           <p className="text-white/85 text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mb-8">
//             {cert.desc}
//           </p>

//           {/* meta pills */}
//           <div className="flex flex-wrap items-center gap-2.5">
//             <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-white border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm bg-white/10">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//               {cert.duration}
//             </span>
//             <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-white border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm bg-white/10">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
//               {cert.level}
//             </span>
//             <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-white border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm bg-white/10">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
//               100% Online
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ═══ BODY ═══ */}
//       <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-14 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">

//           {/* ── LEFT: details ── */}
//           <div>
//             {/* stats */}
//             <div className="grid grid-cols-3 gap-3 mb-12">
//               {cert.stats.map((s) => (
//                 <div key={s.label} className="rounded-2xl bg-white border border-line p-5 text-center">
//                   <div className="font-display font-bold text-[28px] leading-none mb-1.5" style={{ color: cert.accent }}>
//                     {s.val}<span className="text-[15px]">{s.unit}</span>
//                   </div>
//                   <div className="font-mono text-[8px] uppercase tracking-wider text-slate">{s.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* what you'll learn */}
//             <div className="mb-12">
//               <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">Curriculum</p>
//               <h2 className="font-display font-semibold text-[26px] text-wine mb-6">What you'll learn</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {cert.skills.map((skill) => (
//                   <div key={skill} className="flex items-center gap-3 rounded-xl bg-white border border-line px-4 py-3.5">
//                     <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-display font-bold text-[11px] text-white"
//                       style={{ background: cert.accent }}>
//                       ✓
//                     </span>
//                     <span className="text-[14px] text-wine font-medium">{skill}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* what's included */}
//             <div className="mb-12">
//               <p className="font-mono text-[9px] uppercase tracking-[2px] text-mist mb-1">Included</p>
//               <h2 className="font-display font-semibold text-[26px] text-wine mb-6">Every enrolment includes</h2>
//               <div className="rounded-2xl p-7" style={{ background: `${cert.accent}0A`, border: `1px solid ${cert.accent}26` }}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
//                   {cert.included.map((item) => (
//                     <div key={item} className="flex items-start gap-3">
//                       <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${cert.accent}1F` }}>
//                         <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={cert.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//                       </span>
//                       <span className="text-[14px] text-wine leading-snug">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* advisor note */}
//             <div className="rounded-2xl bg-white border border-line p-6 flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-display font-bold text-white text-[16px]"
//                 style={{ background: `linear-gradient(135deg, ${cert.accent}, ${cert.accent}CC)` }}>
//                 TA
//               </div>
//               <div>
//                 <p className="text-[14px] text-wine leading-relaxed mb-2">
//                   "Not sure if this is the right fit? Book a free demo class and speak with a Techversity advisor — no pressure, just clarity."
//                 </p>
//                 <p className="font-mono text-[9px] uppercase tracking-wider text-mist">Techversity Advisory Team</p>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: sticky form ── */}
//           <div className="lg:sticky lg:top-28">
//             <CertEnrollForm cert={cert} slug={slug} />

//             {/* trust strip below form */}
//             <div className="mt-5 flex items-center justify-center gap-5 flex-wrap">
//               <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-mist">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
//                 Secure & private
//               </span>
//               <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-mist">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//                 24-hour response
//               </span>
//               <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-mist">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//                 No payment now
//               </span>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ═══ OTHER CERTS ═══ */}
//       <section className="border-t border-line bg-white">
//         <div className="max-w-[1180px] mx-auto px-5 lg:px-8 py-14 lg:py-18">
//           <div className="flex items-end justify-between mb-8">
//             <h2 className="font-display font-semibold text-[24px] text-wine">Explore other certifications</h2>
//             <span className="hidden sm:flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-mist">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
//               Scroll to see more
//             </span>
//           </div>

//           {/* horizontal scroll row */}
//           <div className="cert-scroll flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 lg:-mx-8 lg:px-8 snap-x snap-mandatory">
//             {others.map((c) => (
//               <Link key={c.title} href={`/certifications/enroll/${slugOf(c)}`}
//                 className="group relative rounded-2xl overflow-hidden h-[200px] w-[300px] shrink-0 block snap-start">
//                 <Image src={c.image} alt={c.title} fill sizes="300px" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,22,38,0.85), rgba(12,22,38,0.15) 70%)" }} />
//                 <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: c.accent }} />
//                 <div className="absolute inset-0 p-5 flex flex-col justify-end">
//                   <p className="font-mono text-[8px] uppercase tracking-[2px] text-white/80 mb-1">{c.duration} · {c.level}</p>
//                   <h3 className="font-display font-semibold text-[19px] text-white leading-tight">{c.title}</h3>
//                   <span className="inline-flex items-center gap-1.5 mt-3 font-mono text-[9px] uppercase tracking-wider text-white/0 group-hover:text-white/90 transition-colors duration-300">
//                     Enrol now
//                     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <style>{`
//           .cert-scroll { scrollbar-width: thin; scrollbar-color: #D4CFC4 transparent; }
//           .cert-scroll::-webkit-scrollbar { height: 6px; }
//           .cert-scroll::-webkit-scrollbar-track { background: transparent; }
//           .cert-scroll::-webkit-scrollbar-thumb { background: #D4CFC4; border-radius: 99px; }
//           .cert-scroll::-webkit-scrollbar-thumb:hover { background: #9A7320; }
//         `}</style>
//       </section>

//     </main>
//   );
// }