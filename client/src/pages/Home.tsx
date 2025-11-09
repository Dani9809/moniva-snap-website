import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsetGrid from "@/components/ToolsetGrid";
import ServicesAccordion from "@/components/ServicesAccordion";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import FeatureBenefits from "@/components/FeatureBenefits";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolsetGrid />
        <ServicesAccordion />
        <ProjectsShowcase />
        <FeatureBenefits />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
