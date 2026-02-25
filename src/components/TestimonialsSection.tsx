import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Udoka Ann",
    role: "Business Developer",
    text: "I have known Edoson Constructions and Water Resources Limited since 2022 and can confidently attest to the quality of their work. They completed a bungalow for me and another for my brother, and are currently handling his 4-bedroom duplex in Enugu State. Their professionalism, timeliness, and attention to detail are highly commendable. I strongly recommend them to anyone seeking a reliable construction company.",
    rating: 5,
  },
  {
    name: "Okonkwo Obinna",
    role: "Business Owner",
    text: "Honestly, I was surprised and overwhelmed when we finally got a good amount of water from the borehole, especially since our area is hilly and dry. I never believed we could get water, but you proved your expertise and delivered perfectly. I remember our first meeting — you patiently explained everything and assured us you would deliver. Though I had initial doubts, my husband trusted you, and you truly kept your promise. Well done — you really know your work. Wishing you more knowledge and looking forward to doing more business with you.",
    rating: 5,
  },
  {
    name: "James Adeyemi",
    role: "Municipal Director",
    text: "The borehole drilling and land surveying services were top-notch. They used modern equipment and completed the entire project in record time with impeccable accuracy.",
    rating: 5,
  },
  {
    name: "Linda Nkomo",
    role: "Architect",
    text: "As a fellow industry professional, I can confidently say Edoson Construction's structural design team is among the best. Their engineering solutions are both innovative and practical.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">Testimonials</span>
            <div className="w-8 h-[2px] bg-secondary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">CLIENT REVIEWS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-card border border-border rounded-sm p-8 hover:border-secondary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-secondary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-display text-lg text-secondary">{t.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-display text-lg text-card-foreground">{t.name}</h4>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
