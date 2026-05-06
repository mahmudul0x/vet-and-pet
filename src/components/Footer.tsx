import { Link } from "react-router-dom";
import { PawPrint, Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/85 mt-24">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <PawPrint className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display font-bold text-background">Vet & Pet Zone</div>
            <div className="text-xs text-background/60">Dinajpur, Bangladesh</div>
          </div>
        </div>
        <p className="text-sm text-background/70 leading-relaxed">
          A trusted animal healthcare center providing expert veterinary care for pets across Dinajpur.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {["About", "Services", "Doctors", "Gallery", "Appointment", "Contact"].map(l => (
            <li key={l}><Link to={`/${l.toLowerCase()}`} className="hover:text-primary-glow transition-smooth">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-background mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li>Vaccination</li><li>Disease Diagnosis</li><li>Surgery</li>
          <li>Spaying & Neutering</li><li>Emergency Care</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-background mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary-glow" /> Tikiapara, Dinajpur, Bangladesh</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary-glow" /> 01712-551510</li>
          <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-primary-glow" /> Always Open · 24/7 Emergency</li>
          <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary-glow" /> care@vetpetzone.bd</li>
        </ul>
        <div className="flex gap-3 mt-4">
          <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Vet & Pet Zone, Dinajpur. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
