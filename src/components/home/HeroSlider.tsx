import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Calendar, ArrowRight, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-vet.jpg";
import hero2 from "@/assets/hero-treatment.jpg";
import hero3 from "@/assets/hero-happy.jpg";

const slides = [
  {
    img: hero1,
    eyebrow: "Vet & Pet Zone, Dinajpur",
    title: "Expert Care for Your Beloved Pets",
    bn: "বিশেষজ্ঞ ডাক্তার নিয়ে প্রাণীর স্বাস্থ্য সেবায়",
    sub: "A safe, trusted place for your pets — backed by experienced veterinarians and modern equipment.",
    primary: { label: "Book Appointment", to: "/appointment", icon: Calendar },
    secondary: { label: "Call Now", href: "tel:01712551510", icon: Phone },
  },
  {
    img: hero2,
    eyebrow: "Comprehensive Services",
    title: "Vaccination · Diagnosis · Surgery",
    bn: "সম্পূর্ণ চিকিৎসা সেবা একই ছাদের নিচে",
    sub: "From routine checkups to advanced procedures — every treatment delivered with compassion.",
    primary: { label: "Explore Services", to: "/services", icon: ArrowRight },
    secondary: { label: "Meet Our Doctors", to: "/doctors", icon: PawPrint },
  },
  {
    img: hero3,
    eyebrow: "Happy Pets, Happy Families",
    title: "Keep Your Pets Healthy & Happy",
    bn: "আপনার পোষা প্রাণীর সুস্থতার নিশ্চয়তা",
    sub: "Join hundreds of pet owners in Dinajpur who trust us with their loved ones.",
    primary: { label: "Visit Us Today", to: "/contact", icon: ArrowRight },
    secondary: { label: "View Gallery", to: "/gallery", icon: PawPrint },
  },
];

const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Floating paws */}
      {[...Array(6)].map((_, k) => (
        <PawPrint key={k}
          className="absolute text-white/20 animate-float-paw"
          style={{
            width: 28 + (k % 3) * 16,
            height: 28 + (k % 3) * 16,
            top: `${10 + (k * 13) % 70}%`,
            left: `${(k * 17) % 90}%`,
            animationDelay: `${k * 0.7}s`,
          }} />
      ))}

      <div className="container relative h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl text-primary-foreground text-center mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-medium mb-5">
              {s.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-4">
              {s.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-white/90 mb-3">{s.bn}</p>
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8">{s.sub}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-glow font-semibold">
                {s.primary.to ? <Link to={s.primary.to}><s.primary.icon className="w-4 h-4 mr-2" />{s.primary.label}</Link>
                  : <a href={(s.primary as any).href}><s.primary.icon className="w-4 h-4 mr-2" />{s.primary.label}</a>}
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                {s.secondary.to ? <Link to={s.secondary.to}><s.secondary.icon className="w-4 h-4 mr-2" />{s.secondary.label}</Link>
                  : <a href={(s.secondary as any).href}><s.secondary.icon className="w-4 h-4 mr-2" />{s.secondary.label}</a>}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k+1}`}
            className={`h-1.5 rounded-full transition-smooth ${k === i ? "bg-white w-10" : "bg-white/40 w-5 hover:bg-white/70"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
