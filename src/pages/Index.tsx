import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SkepticismSection from "@/components/SkepticismSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import TimelineSection from "@/components/TimelineSection";
import FrameworkSection from "@/components/FrameworkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SkepticismSection />
        <HiddenCostSection />
        <TimelineSection />
        <FrameworkSection />
        <TestimonialsSection />
        <VisionSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
