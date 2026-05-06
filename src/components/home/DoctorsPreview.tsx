import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

export const doctors = [
  {
    slug: "dr-md-rahman",
    img: d1,
    name: "Dr. Md. Rahman",
    role: "Chief Veterinarian",
    qual: "DVM, MS in Veterinary Surgery",
    exp: "12+ years experience",
    phone: "+880 1712-551510",
    email: "rahman@vetpetzone.com",
    specialties: ["Surgery", "Internal Medicine", "Emergency Care"],
    bio: "Dr. Md. Rahman is the founder and chief veterinarian of Vet & Pet Zone. With over 12 years of clinical and surgical experience, he has helped thousands of pets across Dinajpur live healthier and happier lives. He specializes in soft tissue surgery, internal medicine, and emergency veterinary care.",
    schedule: "Sat – Thu: 10:00 AM – 8:00 PM",
  },
  {
    slug: "dr-farzana-akter",
    img: d2,
    name: "Dr. Farzana Akter",
    role: "Small Animal Specialist",
    qual: "DVM, Diploma in Pet Medicine",
    exp: "8+ years experience",
    phone: "+880 1712-551511",
    email: "farzana@vetpetzone.com",
    specialties: ["Cats & Dogs", "Vaccination", "Nutrition"],
    bio: "Dr. Farzana Akter focuses on small animal medicine with a gentle, fear-free approach. She is passionate about preventive care, nutrition, and building lifelong relationships between pets and their families.",
    schedule: "Sat – Thu: 11:00 AM – 7:00 PM",
  },
  {
    slug: "dr-imran-hossain",
    img: d3,
    name: "Dr. Imran Hossain",
    role: "Surgical Consultant",
    qual: "DVM, Advanced Surgery Training",
    exp: "10+ years experience",
    phone: "+880 1712-551512",
    email: "imran@vetpetzone.com",
    specialties: ["Orthopedic Surgery", "Spay & Neuter", "Diagnostics"],
    bio: "Dr. Imran Hossain is our surgical consultant with advanced training in orthopedic and soft tissue procedures. Known for his calm precision in the operating theatre, he ensures every surgery follows international safety standards.",
    schedule: "Sun – Thu: 12:00 PM – 8:00 PM",
  },
];

const DoctorsPreview = () => (
  <section className="container py-20">
    <SectionHeading eyebrow="Meet The Team" title="Caring hands, expert minds"
      subtitle="Our veterinarians combine decades of experience with genuine love for animals." />
    <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {doctors.slice(0, 2).map((d, i) => (
        <motion.div key={d.name}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
          <Link to={`/doctors/${d.slug}`}
            className="block group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-smooth">
            <div className="relative overflow-hidden h-72">
              <img src={d.img} alt={d.name} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="p-6">
              <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">{d.role}</div>
              <h3 className="font-display text-xl font-semibold">{d.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d.qual}</p>
              <p className="text-sm text-muted-foreground">{d.exp}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-10">
      <Button asChild size="lg" variant="outline" className="rounded-full">
        <Link to="/doctors">View All Doctors</Link>
      </Button>
    </div>
  </section>
);

export default DoctorsPreview;
