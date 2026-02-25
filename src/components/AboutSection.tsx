import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "Quality Guaranteed", desc: "We use premium materials and proven techniques to ensure lasting results." },
  { icon: Award, title: "Licensed & Insured", desc: "Fully certified professionals you can trust with your project." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and deliver projects within agreed timelines." },
  { icon: Users, title: "Expert Team", desc: "Skilled engineers, architects, and craftsmen with decades of experience." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-secondary" />
              <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">Why Choose Us</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-section-dark-foreground mb-6">
              BUILDING TRUST<br />
              <span className="text-gradient-gold">SINCE 2019</span>
            </h2>
            <p className="font-body text-section-dark-foreground/70 leading-relaxed mb-8">
              With almost a decade of experience, Edoson Constructions has become a trusted name in construction
              and engineering. We combine traditional craftsmanship with modern technology to deliver
              projects that stand the test of time. Our commitment to quality, safety, and client
              satisfaction drives everything we do.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-section-dark-foreground">{f.title}</h4>
                    <p className="font-body text-xs text-section-dark-foreground/60 mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary/10 rounded-sm p-8 text-center">
                  <div className="font-display text-5xl text-secondary">30+</div>
                  <div className="font-body text-xs uppercase tracking-wider text-section-dark-foreground/60 mt-2">Projects Done</div>
                </div>
                <div className="bg-secondary/10 rounded-sm p-8 text-center">
                  <div className="font-display text-5xl text-secondary">7+</div>
                  <div className="font-body text-xs uppercase tracking-wider text-section-dark-foreground/60 mt-2">Years Active</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary/10 rounded-sm p-8 text-center">
                  <div className="font-display text-5xl text-secondary">50+</div>
                  <div className="font-body text-xs uppercase tracking-wider text-section-dark-foreground/60 mt-2">Team Members</div>
                </div>
                <div className="bg-secondary/10 rounded-sm p-8 text-center">
                  <div className="font-display text-5xl text-secondary">4</div>
                  <div className="font-body text-xs uppercase tracking-wider text-section-dark-foreground/60 mt-2">States</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
