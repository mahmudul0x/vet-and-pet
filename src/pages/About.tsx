import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Target, Eye, Award } from "lucide-react";
import img from "@/assets/gallery-3.jpg";
import img2 from "@/assets/hero-vet.jpg";

const About = () => (
  <>
    <PageHeader title="About Vet & Pet Zone"
      subtitle="A trusted name in animal healthcare across Dinajpur — built on compassion, expertise, and dedication." />

    <section className="container py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.img src={img} alt="Clinic" loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-card w-full h-[480px] object-cover" />
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Care that pets and families trust</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vet & Pet Zone is Dinajpur's trusted destination for comprehensive animal healthcare. From
            our humble beginnings, we've grown into a fully equipped veterinary clinic offering
            preventive, diagnostic, and surgical services for pets of every kind.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We treat each pet as if they were our own — combining advanced medical practices with
            the warmth and patience that anxious pets and their owners truly need.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-muted/40 py-16">
      <div className="container grid md:grid-cols-2 gap-6">
        {[
          { icon: Target, title: "Our Mission", text: "To deliver compassionate, evidence-based veterinary care that improves the lives of pets and the families who love them." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted name in animal healthcare across northern Bangladesh — known for excellence, integrity, and kindness." },
        ].map((c, i) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-soft">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <c.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Why choose us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: ShieldCheck, title: "Certified Vets", text: "Qualified, licensed veterinary professionals." },
          { icon: Heart, title: "Compassion First", text: "Gentle handling and stress-free experience." },
          { icon: Sparkles, title: "Hygienic Facility", text: "Sterile, modern environment maintained 24/7." },
          { icon: Award, title: "Proven Trust", text: "Thousands of satisfied pet families." },
        ].map((c, i) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-smooth text-center">
            <c.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h4 className="font-display font-semibold mb-1">{c.title}</h4>
            <p className="text-sm text-muted-foreground">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="container pb-20">
      <img src={img2} alt="Veterinary care" loading="lazy"
        className="rounded-3xl shadow-card w-full h-[420px] object-cover" />
    </section>
  </>
);

export default About;
