import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectsData, categories } from "@/data/projects";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-section-dark pb-24">
      <Navbar />
      <div className="container mx-auto px-4 pt-32" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">
              Portfolio
            </span>
            <div className="w-8 h-[2px] bg-secondary" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-section-dark-foreground mb-6">
            ALL PROJECTS
          </h1>

          <p className="font-body text-lg text-section-dark-foreground/60 max-w-2xl mx-auto">
            Explore our comprehensive portfolio of completed and ongoing projects
            across various sectors and categories.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 flex-wrap mb-16"
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index % 6), duration: 0.5 }}
              onClick={() => navigate(`/projects/${project.id}`)}
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
                <span className="font-body text-xs uppercase tracking-wider text-secondary mb-1">
                  {project.category}
                </span>

                <h3 className="font-display text-2xl text-primary-foreground">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-primary-foreground/60 mb-2">
                  {project.location}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-primary-foreground/70">
                    {project.status}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="font-body text-lg text-section-dark-foreground/60">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
