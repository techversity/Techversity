// import ApplicationWizard from "@/components/forms/ApplicationWizard";

// export const metadata = {
//   title: "Application Form — Techversity.ai",
//   description: "Apply for a doctoral, executive, or certification programme through Techversity's accredited university partners. Guided, paperless application.",
// };

// const POINTS = [
//   "Guided, paperless application",
//   "Reviewed by a dedicated advisor",
//   "Accredited university partners",
//   "Response within 24 hours",
// ];

// export default function ApplicationPage() {
//   return (
//     <main className="bg-ivory">
//       <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">

//           {/* LEFT */}
//           <div className="lg:sticky lg:top-28">
//             <p className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-4">Application</p>
//             <h1 className="font-display font-semibold text-[36px] lg:text-[50px] text-wine leading-[1.05] mb-6">
//               Begin your <span className="italic text-gold">application.</span>
//             </h1>
//             <p className="text-slate text-[16px] leading-relaxed mb-10 max-w-md">
//               Complete the form below in a few short steps. Your details go straight to our admissions
//               team, who'll guide you through document submission and enrolment.
//             </p>

//             <div className="flex flex-col gap-4">
//               {POINTS.map(p => (
//                 <div key={p} className="flex items-center gap-3">
//                   <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(154,115,32,0.12)" }}>
//                     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A7320" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                   </span>
//                   <span className="text-[14.5px] text-wine">{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT */}
//           <ApplicationWizard source="application_form" />

//         </div>
//       </section>
//     </main>
//   );
// }