import { Syringe, Stethoscope, Scissors, Heart, ClipboardCheck, Siren } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import imgVacc from "@/assets/service-vaccination.jpg";
import imgDiag from "@/assets/service-diagnosis.jpg";
import imgSurg from "@/assets/service-surgery.jpg";
import imgSpay from "@/assets/service-spay.jpg";
import imgCheck from "@/assets/service-checkup.jpg";
import imgEmerg from "@/assets/service-emergency.jpg";

export const services = [
  { icon: Syringe, img: imgVacc, title: "Vaccination", desc: "Complete vaccination schedules to protect your pets from preventable diseases." },
  { icon: Stethoscope, img: imgDiag, title: "Disease Diagnosis", desc: "Accurate diagnostics with modern equipment and experienced veterinarians." },
  { icon: Scissors, img: imgSurg, title: "Surgery", desc: "Safe surgical procedures performed in a sterile, modern operation theatre." },
  { icon: Heart, img: imgSpay, title: "Spaying & Neutering", desc: "Routine sterilization procedures with the highest standard of care." },
  { icon: ClipboardCheck, img: imgCheck, title: "Health Checkups", desc: "Regular wellness exams to keep your pets in their best shape, year-round." },
  { icon: Siren, img: imgEmerg, title: "Emergency Care", desc: "24/7 emergency response — because your pet's wellbeing can't wait." },
];

const ServicesPreview = () => (
  <section className="bg-muted/40 py-20">
    <div className="container">
      <SectionHeading
        eyebrow="Our Services"
        title="Complete care, all under one roof"
        subtitle="From preventive care to advanced surgery, we deliver veterinary excellence with a gentle touch."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-smooth overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
