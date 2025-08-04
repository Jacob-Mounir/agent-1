import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
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
    title: "Volvo - Lyftet",
    client: "Volvo OnDemand",
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
    description: "Cannes Series Award winner",
    link: "https://www.youtube.com/watch?v=RtXsJKotJb4"
  },
  {
    id: 5,
    title: "IKEA – One Little Thing",
    client: "IKEA",
    category: "Location Scout & Manager",
    image: "/lovable-uploads/3d12b0aa-570b-4f60-9368-0a1105adc033.png",
    description: "Furniture brand storytelling campaign",
    link: "https://vimeo.com/466084328"
  },
  {
    id: 6,
    title: "Powering a thriving world",
    client: "Fortum",
    category: "Location Scout",
    productionCompany: "Aspekt",
    image: "/lovable-uploads/703d86ba-4335-4280-8fcc-fd4572e410cd.png",
    description: "Energy company commercial production",
    link: "https://aspekt.com/projects/fortum-powering-a-thriving-world/"
  },
  {
    id: 7,
    title: "Tech Innovation Hub",
    client: "Nordic Tech Solutions",
    category: "Location Scout & Manager",
    productionCompany: "Digital Focus",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    description: "Modern technology workspace commercial",
    link: "#"
  },
  {
    id: 8,
    title: "Code Masters",
    client: "Software Development Corp",
    category: "Production Manager",
    productionCompany: "Tech Films",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    description: "Software development documentary series",
    link: "#"
  },
  {
    id: 9,
    title: "Digital Workspace",
    client: "Creative Studios AB",
    category: "Location Scout",
    productionCompany: "Modern Productions",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    description: "Creative workspace brand campaign",
    link: "#"
  },
  {
    id: 10,
    title: "Office Evolution",
    client: "Business Solutions Ltd",
    category: "Location Manager",
    productionCompany: "Corporate Films",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
    description: "Modern office environment showcase",
    link: "#"
  },
  {
    id: 11,
    title: "Nordic Forest Dreams",
    client: "Scandinavian Tourism Board",
    category: "Location Scout & Manager",
    productionCompany: "Nature Films",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
    description: "Tourism campaign in Swedish forests",
    link: "#"
  },
  {
    id: 12,
    title: "Golden Hour Magic",
    client: "Outdoor Adventures Co",
    category: "Location Scout",
    productionCompany: "Adventure Productions",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
    description: "Outdoor adventure series production",
    link: "#"
  },
  {
    id: 13,
    title: "Lakeside Serenity",
    client: "Wellness Retreats Sweden",
    category: "Production Manager & Scout",
    productionCompany: "Tranquil Films",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    description: "Wellness and mindfulness campaign",
    link: "#"
  },
  {
    id: 14,
    title: "Midnight Sun",
    client: "Arctic Expeditions",
    category: "Location Manager",
    productionCompany: "Arctic Productions",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80",
    description: "Arctic adventure documentary",
    link: "#"
  }
];

const WorkSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const openVideo = (link: string) => {
    setSelectedVideo(getEmbedUrl(link));
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

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
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => project.link && openVideo(project.link)}
            >
              <div className="relative overflow-hidden rounded-lg glass glass-hover">
                <img
                  src={project.image}
                  alt={`${project.title} - Location scouting and film production services for ${project.client} in Sweden`}
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
          <Button className="button-luxury" onClick={toggleProjects}>
            <ExternalLink className="w-4 h-4 mr-2" />
            {showAllProjects ? 'Show Less' : 'View All Projects'}
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;