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
    title: "Bang & Olufsen",
    subtitle: "Crafting Memories Since 1925",
    client: "Bang & Olufsen",
    category: "Location Scout & Manager",
    productionCompany: "Camp David Films",
    image: "/lovable-uploads/7af24777-7440-42d6-a930-0cc91efc3b33.png",
    description: "Premium audio brand commercial production",
    link: "https://www.youtube.com/watch?v=-ecSYXkRf6M"
  },
  {
    id: 2,
    title: "M – Lyftet",
    client: "M campaign (Acne Film)",
    category: "Location Scout & Manager",
    productionCompany: "Acne Film",
    image: "/lovable-uploads/99f50dcb-88c5-4599-a8ad-c9aa77d0f55e.png",
    description: "Urban nighttime commercial production",
    link: "https://vimeo.com/492512620"
  },
  {
    id: 3,
    title: "Försvarsmakten",
    client: "Swedish Armed Forces (Försvarsmakten)",
    category: "Production Manager & Location Scout",
    productionCompany: "Camp David Film",
    image: "/lovable-uploads/0b909d00-b701-4add-ab29-e01d3111d53e.png",
    description: "Military recruitment campaign",
    link: "https://www.youtube.com/watch?v=H9Zuji5tQA4"
  },
  {
    id: 4,
    title: "Partisan",
    subtitle: "Award Winning",
    client: "Warner Bros. International",
    category: "Location Manager & Scout",
    productionCompany: "Viaplay Original",
    image: "/lovable-uploads/ec0d060f-ccce-4289-bf36-a5639cef1670.png",
    description: "Cannes Series Award winner set in Jordnära community",
    link: "https://www.youtube.com/watch?v=RtXsJKotJb4"
  },
  {
    id: 5,
    title: "IKEA – One Little Thing",
    client: "IKEA",
    category: "Location Scout & Manager",
    productionCompany: "Soft Citizen",
    image: "/lovable-uploads/3d12b0aa-570b-4f60-9368-0a1105adc033.png",
    description: "Furniture brand storytelling campaign",
    link: "https://vimeo.com/466084328"
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
              onClick={() => project.link && window.open(project.link, '_blank')}
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