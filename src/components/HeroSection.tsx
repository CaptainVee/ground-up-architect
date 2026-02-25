import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroBorehole from "@/assets/hero-borehole.jpg";
import heroRoad from "@/assets/hero-road.jpg";

const slides = [
  {
    image: heroConstruction,
    subtitle: "Building Excellence Since 2005",
    title: ["WE BUILD YOUR", "VISION", "INTO", "REALITY"],
    description:
      "From structural design to complete construction, we deliver projects with precision, quality, and unwavering commitment to excellence.",
  },
  {
    image: heroBorehole,
    subtitle: "Expert Borehole Drilling Services",
    title: ["CLEAN WATER", "ACCESS", "FOR", "EVERYONE"],
    description:
      "Professional borehole drilling with modern equipment, ensuring reliable water supply for communities, farms, and industries.",
  },
  {
    image: heroRoad,
    subtitle: "Road & Infrastructure Specialists",
    title: ["PAVING THE", "WAY", "TO", "PROGRESS"],
    description:
      "Quality road construction and rehabilitation projects that connect communities and drive economic growth.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-secondary" />
              <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">
                {slide.subtitle}
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
              {slide.title[0]}
              <br />
              <span className="text-gradient-gold">{slide.title[1]}</span> {slide.title[2]}
              <br />
              {slide.title[3]}
            </h1>

            <p className="font-body text-lg text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-sm font-body font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-body font-semibold text-sm uppercase tracking-wider hover:border-secondary hover:text-secondary transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:border-secondary hover:text-secondary transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:border-secondary hover:text-secondary transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-secondary" : "w-4 bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "30+", label: "Projects Completed" },
            { value: "7+", label: "Years Experience" },
            { value: "50+", label: "Team Members" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-secondary">{stat.value}</div>
              <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
