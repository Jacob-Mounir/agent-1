import { motion } from "framer-motion";
import { MapPin, FileText, Users, Building } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Location Scouting",
    description: "From modernist villas to wild coastlines — we find what fits your vision.",
    features: ["Curated location database", "Site visits & documentation", "Permits & negotiations", "Creative consultation"]
  },
  {
    icon: FileText,
    title: "Permit & Production Management",
    description: "We handle the red tape, so you can roll cameras on time.",
    features: ["Government permits", "Insurance coordination", "Safety compliance", "Timeline management"]
  },
  {
    icon: Users,
    title: "Logistics & Crew Support",
    description: "Local, reliable, professional — from first light to wrap.",
    features: ["Local crew sourcing", "Equipment coordination", "Catering & accommodation", "Transportation logistics"]
  },
  {
    icon: Building,
    title: "Studio (Coming Soon)",
    description: "Launching a boutique production space in central Gothenburg, 2026.",
    features: ["Modern equipment", "Flexible spaces", "Post-production suites", "Creative workshops"],
    comingSoon: true
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-heading mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final wrap, we provide comprehensive support for your 
            Scandinavian productions with meticulous attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass glass-hover p-8 relative group ${service.comingSoon ? 'opacity-80' : ''}`}
              >
                {service.comingSoon && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full uppercase tracking-wide">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-medium mb-3">{service.title}</h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-medium mb-4">Need Something Specific?</h3>
            <p className="text-body text-muted-foreground mb-6">
              Every production is unique. Let's discuss your specific requirements and create a 
              tailored solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-luxury">Discuss Your Project</button>
              <button 
                className="button-ghost"
                onClick={() => window.open('https://www.dropbox.com/scl/fi/noqfeqct6zsdlrb4fpz42/Agents-Scouts-Service-Location-Management-Guide.pdf?rlkey=69vfzwz6425ghxnh0xjchxvof&dl=1', '_blank')}
              >
                Download Services Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;