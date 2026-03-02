import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS - Replace with your public key from https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Building Construction",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY") {
      setError("Email service not configured. Please try WhatsApp instead.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: "edosonconstructions@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Building Construction",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try WhatsApp instead.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Edoson Constructions and Water Resources,\n\nMy name is ${formData.name || "There"}.\n\nI'm interested in ${formData.service}.\n\n${formData.message || "I'd like to inquire about your services."}\n\nYou can reach me at:\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nThank you!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2347045677482?text=${encodedMessage}`, "_blank");
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
              { icon: MapPin, label: "Our Office", value: "4 Victor Anukwu Close, Golf Estate, GRA Enugu" },
              { icon: Phone, label: "Phone (Calls)", value: "+234 8108730679" },
              { icon: MessageCircle, label: "WhatsApp", value: "+234 7045677482" },
              { icon: Mail, label: "Email", value: "edosonconstructions@gmail.com" },
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition"
                placeholder="+1 (234) 567-8900"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Service Needed</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground focus:ring-2 focus:ring-secondary outline-none transition"
              >
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
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-muted border-0 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary outline-none transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-sm font-body font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-sm font-body font-semibold text-sm uppercase tracking-wider hover:bg-green-700 transition-all duration-300"
              >
                WhatsApp Us
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-600 font-body text-sm"
              >
                {error}
              </motion.div>
            )}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm text-green-600 font-body text-sm"
              >
                ✓ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
