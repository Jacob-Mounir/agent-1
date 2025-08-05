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

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground antialiased">
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
