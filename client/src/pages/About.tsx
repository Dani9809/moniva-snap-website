import Header from "@/components/Header";
import TeamIntro from "@/components/TeamIntro";
import TeamGrid from "@/components/TeamGrid";
import FeatureBenefits from "@/components/FeatureBenefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TeamIntro />
        <TeamGrid />
        <FeatureBenefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
