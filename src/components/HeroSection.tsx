import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">
              Building Excellence Since 2005
            </span>
          </motion.div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
            WE BUILD YOUR
            <br />
            <span className="text-gradient-gold">VISION</span> INTO
            <br />
            REALITY
          </h1>

          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
            From structural design to complete construction, we deliver projects
            with precision, quality, and unwavering commitment to excellence.
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
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "20+", label: "Years Experience" },
            { value: "150+", label: "Team Members" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-secondary">{stat.value}</div>
              <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
