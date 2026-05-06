import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { doctors } from "@/components/home/DoctorsPreview";

const Doctors = () => (
  <>
    <PageHeader title="Our Doctors" subtitle="Meet the dedicated veterinary professionals behind Vet & Pet Zone." />
    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((d, i) => (
          <motion.div key={d.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <Link to={`/doctors/${d.slug}`}
              className="block group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-smooth">
              <div className="relative h-80 overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              </div>
              <div className="p-6">
                <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">{d.role}</div>
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-smooth">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{d.qual}</p>
                <p className="text-sm text-muted-foreground">{d.exp}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-primary">View Profile →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Doctors;
