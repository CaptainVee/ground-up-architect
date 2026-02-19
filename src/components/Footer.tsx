import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-section-dark border-t border-section-dark-foreground/10 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="font-display text-2xl text-section-dark-foreground tracking-wider mb-3">
            APEX<span className="text-secondary">BUILD</span>
          </div>
          <p className="font-body text-sm text-section-dark-foreground/60 leading-relaxed">
            Building excellence through quality construction, innovative design, and unwavering commitment to our clients.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl text-section-dark-foreground mb-4">SERVICES</h4>
          <ul className="space-y-2 font-body text-sm text-section-dark-foreground/60">
            <li>Building Construction</li>
            <li>Structural Design</li>
            <li>Reconstruction</li>
            <li>Land Surveying</li>
            <li>Borehole Drilling</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-section-dark-foreground mb-4">CONTACT</h4>
          <div className="space-y-3 font-body text-sm text-section-dark-foreground/60">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> 123 Construction Ave</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +1 (234) 567-8900</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> info@apexbuild.com</div>
          </div>
        </div>
      </div>
      <div className="border-t border-section-dark-foreground/10 pt-6 text-center">
        <p className="font-body text-xs text-section-dark-foreground/40">
          © {new Date().getFullYear()} ApexBuild. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
