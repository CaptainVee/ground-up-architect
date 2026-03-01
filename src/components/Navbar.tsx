import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = ["Home", "Services", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    // Handle Projects navigation separately
    if (id === "Projects") {
      navigate("/projects");
      setIsOpen(false);
      return;
    }

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll after navigation completes
      setTimeout(() => {
        const el = document.getElementById(id.toLowerCase());
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home page, just scroll
      const el = document.getElementById(id.toLowerCase());
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Brand */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Edoson Logo"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-8" : "h-11"
            }`}
          />

          <div className="flex flex-col leading-tight">
            <span
              className={`font-display font-black tracking-wider transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              } text-secondary text-left`}
            >
              EDOSON
            </span>

            <span className="font-body text-xs uppercase tracking-wider text-primary-foreground">
              Constructions & Water Resources
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
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
            href="https://wa.me/2348108730679?text=Hello%20Edoson%20Constructions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-sm font-body text-sm font-semibold hover:bg-gold-glow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
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