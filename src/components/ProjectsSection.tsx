import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";

const projects = [
  { image: project1, title: "6 Units of 2 Bedroom Flats", category: "Commercial", location: "Villa Estate Ozalla Abor, Enugu North, Enugu State" },
  { image: project2, title: "4 Bedroom Duplex", category: "Residential", location: "Amankpaka, Ugwogo Nike, Enugu East, Enugu State." },
  { image: project3, title: "4 Bedroom Duplex", category: "Residential", location: "Business District" },
  { image: project4, title: "10 pens of a modern pig farm", category: "Industrial", location: "Vannis Farms and Equipment, Odobudo Ubahu, Nkanu East, Enugu State" },
  { image: project5, title: "Soil test, for geotechnical properties of the soil", category: "Residential", location: "Army Barracks, 82 Division, Abakpa Junction, Enugu" },
  { image: project6, title: "borehole and construction of a fish pond", category: "Industrial", location: "Vannis Farms and Equipment, Odobudo Ubahu, Nkanu East, Enugu State" },
];

const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">Portfolio</span>
            <div className="w-8 h-[2px] bg-secondary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-section-dark-foreground">OUR PROJECTS</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 flex-wrap mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-body text-xs uppercase tracking-wider px-5 py-2 rounded-sm transition-all duration-300 ${
                filter === cat
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-secondary/10 text-section-dark-foreground/60 hover:bg-secondary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-body text-xs uppercase tracking-wider text-secondary mb-1">{project.category}</span>
                <h3 className="font-display text-2xl text-primary-foreground">{project.title}</h3>
                <p className="font-body text-sm text-primary-foreground/60">{project.location}</p>
                <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
