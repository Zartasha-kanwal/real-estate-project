import { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import ResidencesSection from "@/components/sections/ResidencesSection";
import PropertyExplorationSection from "@/components/sections/PropertyExplorationSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import MapSection from "@/components/sections/MapSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import FloorPlansSection from "@/components/sections/FloorPlansSection";
import VirtualTourSection from "@/components/sections/VirtualTourSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import StickyCtaBar from "@/components/sections/StickyCtaBar";
import SavedResidencesPanel from "@/components/SavedResidencesPanel";

const Index = () => {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScroll");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    const handleScroll = () => {
      sessionStorage.setItem("homeScroll", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ResidencesSection />
      <PropertyExplorationSection />
      <AmenitiesSection />
      <GallerySection />
      <InvestmentSection />
      <MapSection />
      <ArchitectureSection />
      <FloorPlansSection />
      <VirtualTourSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <StickyCtaBar />
      <SavedResidencesPanel />
    </div>
  );
};

export default Index;
