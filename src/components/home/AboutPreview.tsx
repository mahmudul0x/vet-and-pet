import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "@/assets/gallery-3.jpg";

const AboutPreview = () => (
  <section className="container py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="relative">
        <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-20" />
        <img src={img} alt="Our clinic" loading="lazy"
          className="relative rounded-3xl shadow-card w-full h-[480px] object-cover" />
        <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-card p-5 border border-border max-w-[200px]">
          <div className="text-3xl font-display font-bold text-primary">15+</div>
          <div className="text-sm text-muted-foreground">Years of trusted veterinary care in Dinajpur</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="space-y-6">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary px-3 py-1 rounded-full bg-accent">
          About Us
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
          A trusted veterinary <span className="text-gradient">family</span> in Dinajpur
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          At Vet & Pet Zone, we believe every pet deserves world-class medical care. Our team combines
          expertise with genuine compassion to keep your companions healthy, happy and thriving.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {[
            { icon: ShieldCheck, label: "Certified Vets" },
            { icon: Heart, label: "Compassionate Care" },
            { icon: Award, label: "Trusted Service" },
          ].map(b => (
            <div key={b.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-accent/40">
              <b.icon className="w-7 h-7 text-secondary mb-2" />
              <span className="text-sm font-semibold">{b.label}</span>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="rounded-full gradient-primary border-0 shadow-glow">
          <Link to="/about">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AboutPreview;
