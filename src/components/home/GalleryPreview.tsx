import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const gallery = [g1, g2, g3, g4, g5, g6];

const GalleryPreview = () => (
  <section className="bg-muted/40 py-20">
    <div className="container">
      <SectionHeading eyebrow="Gallery" title="Moments of care & joy" />
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((src, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl aspect-square shadow-soft">
            <img src={src} alt={`Gallery ${i+1}`} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-smooth" />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link to="/gallery">View Full Gallery</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
