import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Syringe, Stethoscope, Scissors, Heart, ClipboardCheck, Siren, Apple } from "lucide-react";
import imgVacc from "@/assets/service-vaccination.jpg";
import imgDiag from "@/assets/service-diagnosis.jpg";
import imgSurg from "@/assets/service-surgery.jpg";
import imgSpay from "@/assets/service-spay.jpg";
import imgNeuter from "@/assets/service-neuter.jpg";
import imgNutri from "@/assets/service-nutrition.jpg";
import imgCheck from "@/assets/service-checkup.jpg";
import imgEmerg from "@/assets/service-emergency.jpg";

const all = [
  { icon: Syringe, img: imgVacc, title: "Vaccination", desc: "Core and lifestyle vaccines including rabies, distemper, parvovirus, and feline panleukopenia — administered on safe, evidence-based schedules." },
  { icon: Stethoscope, img: imgDiag, title: "Disease Diagnosis", desc: "Modern diagnostic tools combined with clinical expertise to identify illnesses early and accurately, from infections to chronic conditions." },
  { icon: Scissors, img: imgSurg, title: "Surgery", desc: "General and orthopedic surgery in a sterile theatre, performed by experienced surgeons with anesthetic monitoring throughout." },
  { icon: Heart, img: imgSpay, title: "Spaying", desc: "Safe ovariohysterectomy procedures for female pets — reducing health risks and supporting responsible pet ownership." },
  { icon: Heart, img: imgNeuter, title: "Neutering", desc: "Routine castration with minimal recovery time, performed under modern anesthesia with full post-op care." },
  { icon: Apple, img: imgNutri, title: "Pet Nutrition Advice", desc: "Personalized dietary plans based on age, breed, weight and any medical conditions your pet may have." },
  { icon: ClipboardCheck, img: imgCheck, title: "General Checkups", desc: "Comprehensive wellness exams covering vital signs, dental, skin, weight and behavior assessments." },
  { icon: Siren, img: imgEmerg, title: "Emergency Care", desc: "24/7 critical care response — from trauma to acute illness, we are ready when every minute counts." },
];

const Services = () => (
  <>
    <PageHeader title="Our Services"
      subtitle="Comprehensive veterinary services delivered with skill, gentleness, and modern medicine." />
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {all.map((s, i) => (
          <motion.article key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group bg-card rounded-3xl border border-border hover:border-primary/30 hover:shadow-card transition-smooth overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Services;
