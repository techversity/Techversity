import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import TrustBar from "@/components/home/TrustBar";
import WhyTechversity from "@/components/home/WhyTechversity";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import DoctorateSpotlight from "@/components/home/DoctorateSpotlight";
import HowItWorks from "@/components/home/HowItWorks";
import DegreeGrid from "@/components/home/DegreeGrid";
import CertificationsCarousel from "@/components/home/CertificationsCarousel";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";


export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <TrustBar />
      <ProgramsGrid />
      <DoctorateSpotlight />
      <DegreeGrid /> 
      <CertificationsCarousel />
      <HowItWorks />
      <WhyTechversity />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
      
     
    </>
  );
}