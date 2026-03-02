import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, MapPin, Calendar, CheckCircle, Clock, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";

const isVideoFile = (src: string): boolean => {
  if (!src) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const project = projectsData.find((p) => p.id === parseInt(id || ""));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const galleryImages = project?.details?.gallery || [];

  const nextGalleryImage = () => {
    if (galleryImages.length > 0) {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevGalleryImage = () => {
    if (galleryImages.length > 0) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-section-dark flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-display text-4xl text-section-dark-foreground mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/projects")}
            className="font-body text-secondary hover:text-secondary/80 transition-colors flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projectsData
    .filter(
      (p) => p.category === project.category && p.id !== project.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-section-dark pb-24">
      <Navbar />
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8 pt-32">
        <button
          onClick={() => navigate("/projects")}
          className="font-body text-sm uppercase tracking-wider text-secondary hover:text-secondary/80 transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-12"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-4xl h-auto max-h-96 object-contain rounded-lg"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Title and Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary px-3 py-1 bg-secondary/10 rounded-sm">
                  {project.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-section-dark-foreground/60">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl text-section-dark-foreground mb-4">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-lg text-section-dark-foreground/70">
                <MapPin className="w-5 h-5 text-secondary" />
                {project.location}
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 bg-secondary/10 rounded-sm">
              {project.status === "Completed" ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Clock className="w-6 h-6 text-orange-500" />
              )}
              <span className="font-body text-sm font-semibold text-section-dark-foreground">
                {project.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-body text-lg text-section-dark-foreground/70 leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-section-dark-foreground/10"
        >
          <div>
            <h3 className="font-body text-xs uppercase tracking-wider text-secondary mb-3">
              Duration
            </h3>
            <p className="font-display text-2xl text-section-dark-foreground">
              {project.details.duration}
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-wider text-secondary mb-3">
              Scope
            </h3>
            <p className="font-display text-2xl text-section-dark-foreground">
              {project.details.scope}
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-wider text-secondary mb-3">
              Category
            </h3>
            <p className="font-display text-2xl text-section-dark-foreground">
              {project.category}
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl text-section-dark-foreground mb-8">
            Project Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.details.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-secondary/5 rounded-sm"
              >
                <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 mt-1" />
                <p className="font-body text-lg text-section-dark-foreground/80">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 pb-16 border-b border-section-dark-foreground/10"
          >
            <h2 className="font-display text-3xl text-section-dark-foreground mb-8">
              Project Gallery
            </h2>

            <div className="relative">
              {/* Main Image */}
              <motion.div
                key={currentGalleryIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-6 bg-section-dark-foreground/5 flex items-center justify-center"
              >
                {isVideoFile(galleryImages[currentGalleryIndex]) ? (
                  <video
                    src={galleryImages[currentGalleryIndex]}
                    controls
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                ) : (
                  <img
                    src={galleryImages[currentGalleryIndex]}
                    alt={`Gallery ${currentGalleryIndex + 1}`}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
                <button
                  onClick={prevGalleryImage}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-sm transition-colors"
                  disabled={galleryImages.length <= 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <span className="font-body text-sm text-section-dark-foreground/60">
                  {currentGalleryIndex + 1} / {galleryImages.length}
                </span>

                <button
                  onClick={nextGalleryImage}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-sm transition-colors"
                  disabled={galleryImages.length <= 1}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 max-w-4xl mx-auto overflow-x-auto pb-2">
                  {galleryImages.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                        index === currentGalleryIndex
                          ? "border-secondary"
                          : "border-secondary/20 hover:border-secondary/40"
                      }`}
                    >
                      {isVideoFile(image) ? (
                        <div className="w-full h-full bg-section-dark-foreground/20 flex items-center justify-center">
                          <Play className="w-6 h-6 text-secondary" />
                        </div>
                      ) : (
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-16 border-t border-section-dark-foreground/10"
          >
            <h2 className="font-display text-3xl text-section-dark-foreground mb-8">
              Related Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject, index) => (
                <motion.div
                  key={relProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  onClick={() => navigate(`/projects/${relProject.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 aspect-[4/3]">
                    <img
                      src={relProject.image}
                      alt={relProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <span className="font-body text-xs uppercase tracking-wider text-secondary mb-1 block">
                    {relProject.category}
                  </span>

                  <h3 className="font-display text-xl text-section-dark-foreground group-hover:text-secondary transition-colors">
                    {relProject.title}
                  </h3>

                  <p className="font-body text-sm text-section-dark-foreground/60 mt-2 line-clamp-2">
                    {relProject.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
