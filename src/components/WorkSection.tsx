import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    client: "Viaplay Original",
    category: "Location Scouting",
    image: project1,
    description: "Architectural elegance meets Nordic minimalism"
  },
  {
    id: 2,
    title: "Coastal Drama",
    client: "HBO Nordic",
    category: "Production Management",
    image: project2,
    description: "Dramatic landscapes for premium storytelling"
  },
  {
    id: 3,
    title: "Urban Night",
    client: "Acne Studios",
    category: "Commercial Locations",
    image: project3,
    description: "Stockholm's brutalist beauty after dark"
  },
  {
    id: 4,
    title: "Winter Retreat",
    client: "SVT Drama",
    category: "Location Scouting",
    image: project4,
    description: "Remote cabin for intimate character study"
  },
  {
    id: 5,
    title: "Industrial Space",
    client: "Partisan Films",
    category: "Studio Management",
    image: project5,
    description: "Gothenburg warehouse transformed"
  },
  {
    id: 6,
    title: "Archipelago Luxury",
    client: "International Feature",
    category: "Logistics Coordination",
    image: project6,
    description: "Swedish islands for high-end production"
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 bg-black relative overflow-hidden">
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
          <h2 className="text-heading mb-6">Featured Work</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            A selection of locations and productions that showcase our commitment to 
            cinematic excellence and Scandinavian authenticity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg glass glass-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-caption text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-playfair font-medium mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button className="button-ghost">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;