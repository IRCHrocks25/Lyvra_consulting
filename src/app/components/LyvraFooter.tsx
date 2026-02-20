import logoImg from "figma:asset/61f37c316ecb1398921309e55d6e9a1dc1413e96.png";
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function LyvraFooter() {
  return (
    <footer className="lyvra-footer">
      {/* Logo + tagline */}
      <div className="lyvra-f-left">
        <div className="lyvra-f-logo">
          <img src={logoImg} alt="Lyvra" style={{ height: "24px", width: "auto", display: "block" }} />
        </div>
      </div>

      {/* Contact details */}
      <div className="lyvra-f-contact">
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="lyvra-f-contact-item">
          <MapPin size={11} strokeWidth={2} />
          <span>Stockholm, Sweden</span>
        </a>
        <a href="tel:+46701234567" className="lyvra-f-contact-item">
          <Phone size={11} strokeWidth={2} />
          <span>+46 70 123 45 67</span>
        </a>
        <a href="mailto:peter@lyvra.se" className="lyvra-f-contact-item">
          <Mail size={11} strokeWidth={2} />
          <span>peter@lyvra.se</span>
        </a>
      </div>

      {/* Right: socials + CTA */}
      <div className="lyvra-f-right">
        <div className="lyvra-f-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="lyvra-f-social-link" aria-label="LinkedIn">
            <Linkedin size={14} strokeWidth={1.8} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="lyvra-f-social-link" aria-label="Twitter">
            <Twitter size={14} strokeWidth={1.8} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="lyvra-f-social-link" aria-label="Facebook">
            <Facebook size={14} strokeWidth={1.8} />
          </a>
        </div>
        <a href="#contact" className="lyvra-f-cta">Book a Call</a>
      </div>
    </footer>
  );
}