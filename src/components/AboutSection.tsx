import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import aboutBackground from "@/assets/about-background.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-heading mb-6">
                Location Management —{" "}
                <span className="text-gradient">Rooted in the Nordics.</span>
              </h1>
              
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  We're more than scouts — we're your local allies. From boutique shoots to full-scale productions, 
                  we guide you through Sweden's visual landscape with precision and care.
                </p>
                
                <p>
                  Every detail matters — permits, logistics, on-set coordination. You focus on the shot. 
                  We handle the rest.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="font-playfair text-xl italic text-foreground leading-relaxed">
                "They made it effortless — calm, capable, connected."
              </blockquote>
              <cite className="text-caption text-muted-foreground mt-4 block not-italic">
                Producer
              </cite>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/b83b221d-eb46-4bc5-bb38-34c4da7c51a2.png"
                alt="Professional film studio with crew and equipment"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;