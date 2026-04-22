import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SkepticismSection from "@/components/SkepticismSection";
import SeoNotaCampaignSection from "@/components/SeoNotaCampaignSection";
import TimelineSection from "@/components/TimelineSection";
import FrameworkSection from "@/components/FrameworkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import HiddenCostSection from "@/components/HiddenCostSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#pricing") return;

    // Wait one frame so sections are painted before scrolling.
    requestAnimationFrame(() => {
      const section = document.getElementById("pricing");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SkepticismSection />
        <SeoNotaCampaignSection />
        <HiddenCostSection />
        <TimelineSection />
        <FrameworkSection />
        <TestimonialsSection />
        <VisionSection />
        <HowItWorksSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
