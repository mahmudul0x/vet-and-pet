import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, Clock, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctors } from "@/components/home/DoctorsPreview";

const DoctorDetail = () => {
  const { slug } = useParams();
  const doctor = doctors.find(d => d.slug === slug);

  if (!doctor) {
    return (
      <section className="container py-32 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Doctor not found</h1>
        <Button asChild><Link to="/doctors">Back to Doctors</Link></Button>
      </section>
    );
  }

  return (
    <section className="bg-muted/30">
      <div className="container py-16">
        <Link to="/doctors" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all doctors
        </Link>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-card sticky top-24">
              <img src={doctor.img} alt={doctor.name} className="w-full aspect-[4/5] object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3">
            <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">{doctor.role}</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{doctor.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{doctor.qual}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {doctor.specialties.map(s => (
                <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{s}</span>
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">{doctor.bio}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                  <div className="font-semibold">{doctor.exp}</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground">Available</div>
                  <div className="font-semibold text-sm">{doctor.schedule}</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <a href={`tel:${doctor.phone}`} className="font-semibold hover:text-primary">{doctor.phone}</a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href={`mailto:${doctor.email}`} className="font-semibold hover:text-primary text-sm break-all">{doctor.email}</a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/appointment"><Calendar className="w-4 h-4 mr-2" />Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={`tel:${doctor.phone}`}><Phone className="w-4 h-4 mr-2" />Call Doctor</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetail;
