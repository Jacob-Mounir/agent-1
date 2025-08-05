import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ServiceGuideSection = () => {
  const handleDownload = () => {
    // Open Dropbox link for direct download
    window.open('https://www.dropbox.com/scl/fi/noqfeqct6zsdlrb4fpz42/Agents-Scouts-Service-Location-Management-Guide.pdf?rlkey=69vfzwz6425ghxnh0xjchxvof&dl=1', '_blank');
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="glass p-12 lg:p-16">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-heading mb-6">Service Guide</h2>
            
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our comprehensive service guide to learn more about our location scouting, 
              production management, and logistics coordination services across Scandinavia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleDownload}
                className="button-primary group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Service Guide
              </Button>
              
              <p className="text-caption text-muted-foreground">
                PDF • 1.1 MB • Updated 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGuideSection;