import UniversitiesList from "@/components/universities/UniversitiesList";
import UniversitiesHero from "@/components/universities/UniversitiesHero";

export const metadata = {
  title: "University Partners — Techversity.ai",
  description:
    "10+ internationally accredited university partners, each independently reviewed. Explore accreditation, campuses, and every doctoral pathway offered.",
};

export default function UniversitiesPage() {
  return (
    <main className="bg-ivory">
      <UniversitiesHero />

      {/* LIST */}
      <section className="max-w-[1180px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <UniversitiesList />
      </section>
    </main>
  );
}