import { motion } from "framer-motion";
import { Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmergencyCTA = () => (
  <section className="container py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl gradient-emergency p-10 md:p-16 text-center text-primary-foreground shadow-card">
      <Siren className="absolute top-6 left-6 w-20 h-20 text-white/15" />
      <Siren className="absolute bottom-6 right-6 w-20 h-20 text-white/15" />
      <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-4">
        24/7 Emergency
      </span>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Emergency Pet Care Available</h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
        Your pet's emergency is our priority. Call us anytime — day or night — and we'll be ready.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg" className="rounded-full bg-white text-destructive hover:bg-white/90 font-semibold shadow-glow">
          <a href="tel:01712551510"><Phone className="w-4 h-4 mr-2" />Call Now: 01712-551510</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white">
          <Link to="/appointment">Get Help</Link>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default EmergencyCTA;
