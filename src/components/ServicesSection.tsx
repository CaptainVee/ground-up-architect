import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Ruler, HardHat, MapPin, Droplets, PencilRuler } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    description: "Complete residential and commercial construction from foundation to finish, built to the highest standards.",
  },
  {
    icon: PencilRuler,
    title: "Structural Design",
    description: "Expert structural engineering and architectural design for safe, efficient, and aesthetically pleasing buildings.",
  },
  {
    icon: HardHat,
    title: "Reconstruction",
    description: "Renovation, remodeling, and reconstruction services that breathe new life into existing structures.",
  },
  {
    icon: MapPin,
    title: "Land Surveying",
    description: "Precise land surveying and mapping services using modern equipment for accurate site assessments.",
  },
  {
    icon: Droplets,
    title: "Borehole Drilling",
    description: "Professional borehole drilling for reliable water supply solutions for residential and commercial properties.",
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery, cost control, and quality assurance.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">What We Do</span>
            <div className="w-8 h-[2px] bg-secondary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">OUR SERVICES</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-sm p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
            >
              <div className="w-14 h-14 rounded-sm bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl text-card-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
