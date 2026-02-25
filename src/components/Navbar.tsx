import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = ["Home", "Services", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button onClick={() => scrollTo("home")} className="font-display text-3xl text-primary-foreground tracking-wider">
          EDOSON<span className="text-secondary"> CONSTRUCTIONS AND WATER RESOURCES LIMITED</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors tracking-wide uppercase"
            >
              {item}
            </button>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-sm font-body text-sm font-semibold hover:bg-gold-glow transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 px-4 pb-4"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm uppercase tracking-wide"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
