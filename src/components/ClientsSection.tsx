import { motion } from "framer-motion";

const clients = [
  "HBO Nordic",
  "Viaplay",
  "SVT",
  "Acne Studios", 
  "Partisan Films",
  "A24",
  "NENT Studios",
  "Zentropa"
];

const testimonials = [
  {
    quote: "Agents & Scouts are the quiet force behind many of our smoothest shoots in Scandinavia.",
    author: "Producer",
    company: "Acne Studios"
  },
  {
    quote: "They know the terrain — both creatively and logistically.",
    author: "Director", 
    company: "Viaplay Original"
  },
  {
    quote: "Professional, discreet, and incredibly well-connected. They understand the Nordic landscape like no one else.",
    author: "Executive Producer",
    company: "HBO Nordic"
  }
];

const ClientsSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-heading mb-12">Trusted Collaborations</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-caption font-medium tracking-wider hover:opacity-100 transition-opacity duration-300"
              >
                {client}
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-body text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            Trusted by production teams from around the world for our deep understanding 
            of Scandinavian locations and seamless production support.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 relative"
            >
              <div className="mb-6">
                <div className="w-8 h-px bg-primary mb-6" />
                <blockquote className="font-playfair text-lg italic text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="text-sm">
                <cite className="text-muted-foreground not-italic">
                  {testimonial.author}
                </cite>
                <div className="text-primary font-medium">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;