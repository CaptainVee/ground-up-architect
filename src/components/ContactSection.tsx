import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-secondary">Get In Touch</span>
            <div className="w-8 h-[2px] bg-secondary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">CONTACT US</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl text-foreground mb-4">LET'S BUILD SOMETHING GREAT</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Ready to start your next construction project? Contact us for a free consultation
                and let us bring your vision to life.
              </p>
            </div>

            {[
              { icon: MapPin, label: "Our Office", value: "123 Construction Ave, Building District" },
              { icon: Phone, label: "Phone", value: "+1 (234) 567-8900" },
              { icon: Mail, label: "Email", value: "info@apexbuild.com" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-display text-lg text-foreground">{item.label}</div>
                  <div className="font-body text-sm text-muted-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3 bg-card border border-border rounded-sm p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone Number</label>
              <input
                type="tel"
                className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition"
                placeholder="+1 (234) 567-8900"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Service Needed</label>
              <select className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground focus:ring-2 focus:ring-secondary outline-none transition">
                <option>Building Construction</option>
                <option>Structural Design</option>
                <option>Reconstruction</option>
                <option>Land Surveying</option>
                <option>Borehole Drilling</option>
                <option>Project Management</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                required
                className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-sm font-body font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-all duration-300"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
