import { redirect, notFound } from "next/navigation";
import { programs } from "@/lib/programs";
import { getProgramDetail } from "@/lib/programs/index";

import ProgramHero from "@/components/program-detail/ProgramHero";
import ProgramStatsStrip from "@/components/program-detail/ProgramStatsStrip";
import ProgramInstitutions from "@/components/program-detail/ProgramInstitutions";
import ProgramWhatIs from "@/components/program-detail/ProgramWhatIs";
import ProgramWhoFor from "@/components/program-detail/ProgramWhoFor";
import ProgramWhyMatters from "@/components/program-detail/ProgramWhyMatters";
import ProgramFields from "@/components/program-detail/ProgramFields";
import ProgramReceive from "@/components/program-detail/ProgramReceive";
import ProgramStanding from "@/components/program-detail/ProgramStanding";
import ProgramJourney from "@/components/program-detail/ProgramJourney";
import ProgramProfiles from "@/components/program-detail/ProgramProfiles";
import ProgramFaq from "@/components/program-detail/ProgramFaq";
import ProgramCeremony from "@/components/program-detail/ProgramCeremony";
import { ProgramResources, ProgramFinalCTA } from "@/components/program-detail/ProgramShowcase";


export async function generateStaticParams() {
  return programs
    .filter((p) => p.category !== "certifications")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const rich = getProgramDetail(slug);
  if (rich) {
    return {
      title: `${rich.name} | Techversity.ai`,
      description: rich.subtitle,
    };
  }
  return {};
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;

  const prog = programs.find((p) => p.slug === slug);

  // certifications don't have a page here — send visitors to the real one
  if (prog?.category === "certifications") {
    redirect(`/certifications/${slug}`);
  }

  const rich = getProgramDetail(slug);
  if (!rich) notFound();

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: rich.name,
    description: rich.subtitle,
    url: `https://techversity.ai/programs/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Techversity.ai",
      sameAs: "https://techversity.ai",
    },
  };

  const faqSchema =
    rich.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: rich.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ProgramHero p={rich} />
      <ProgramStatsStrip stats={rich.heroStats} />
      <ProgramWhatIs p={rich} />
      <ProgramWhoFor p={rich} />
      <ProgramWhyMatters p={rich} />
      <ProgramFields p={rich} />
      <ProgramReceive p={rich} />
      <ProgramJourney p={rich} />
      <ProgramProfiles p={rich} />
      <ProgramStanding p={rich} />
      <ProgramInstitutions p={rich} />
      <ProgramCeremony p={rich} />
      <ProgramFaq p={rich} />
      <ProgramResources p={rich} />
      <ProgramFinalCTA p={rich} />
    </main>
  );
}