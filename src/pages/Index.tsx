import AgentsNavigation from "@/components/AgentsNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import InstagramGrid from "@/components/InstagramGrid";
import ContactSection from "@/components/ContactSection";
import AgentsFooter from "@/components/AgentsFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground antialiased">
      <SEO title="Agents & Scouts – Film- och locationservice i Sverige" description="Premium location scouting och produktionstjänster för reklam, TV och film i Stockholm, Göteborg och hela Norden. Se portfolio och kontakta oss." image="/og-image.svg" canonicalPath="/" />
      <AgentsNavigation />
      
      <HeroSection />
      
      <AboutSection />
      
      <WorkSection />
      
      <ServicesSection />
      
      <ClientsSection />
      
      <ServiceGuideSection />
      
      {/* <InstagramGrid /> */}
      <ContactSection />
      
      <AgentsFooter />
    </div>
  );
};

export default Index;
