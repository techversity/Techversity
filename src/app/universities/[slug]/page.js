import { notFound } from "next/navigation";
import { getUniversityBySlug, getUniversityDetail, getUniversitiesWithDetail } from "@/lib/universities";

import UniHero from "@/components/universities/detail/UniHero";
import UniFactsStrip from "@/components/universities/detail/UniFactsStrip";
import UniAboutSticky from "@/components/universities/detail/UniAboutSticky";
import UniWhyTechversity from "@/components/universities/detail/UniWhyTechversity";
import { UniFactsGrid, UniAccreditation } from "@/components/universities/detail/UniFactsAndAccreditation";
import UniPrograms from "@/components/universities/detail/UniPrograms";
import { UniCertificate, UniConvocation, UniFinalCTA } from "@/components/universities/detail/UniShowcase";
import UniAdmissionSteps from "@/components/universities/detail/UniAdmissionSteps";
import UniFaq from "@/components/universities/detail/UniFaq";

export function generateStaticParams() {
  return getUniversitiesWithDetail().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const u = getUniversityBySlug(slug);
  const d = getUniversityDetail(slug);
  if (!u || !d) return { title: "University Partners — Techversity.ai" };
  return {
    title: `${d.name} — Programs, Accreditation & Admissions | Techversity.ai`,
    description: `${d.tagline} Apply to ${d.name} through Techversity — guided end to end by global academic advisors.`,
  };
}

export default async function UniversityDetailPage({ params }) {
  const { slug } = await params;
  const u = getUniversityBySlug(slug);
  const d = getUniversityDetail(slug);

  // universities without rich detail content fall back to 404 for now
  if (!u || !d) return notFound();

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: d.name,
    description: d.tagline,
    url: `https://techversity.ai/universities/${slug}`,
    ...(u.country ? { address: { "@type": "PostalAddress", addressCountry: u.country } } : {}),
    ...(d.founded ? { foundingDate: String(d.founded) } : {}),
  };

  const faqSchema =
    d.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: d.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main className="bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <UniHero u={u} d={d} />
      <UniFactsStrip d={d} />
      <UniAboutSticky d={d} />
      <UniWhyTechversity d={d} />
      <UniFactsGrid d={d} />
      <UniAccreditation d={d} />
      <UniPrograms u={u} d={d} />
      <UniCertificate d={d} />
      <UniConvocation d={d} />
      <UniAdmissionSteps d={d} />
      <UniFaq d={d} />
      <UniFinalCTA u={u} d={d} />
    </main>
  );
}