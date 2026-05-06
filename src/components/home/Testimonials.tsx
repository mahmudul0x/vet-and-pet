import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  { name: "Sadia Rahman", pet: "Owner of Bella (Persian Cat)",
    text: "The best veterinary clinic in Dinajpur. The doctors treated my cat with so much love and care. Highly recommended!" },
  { name: "Mohammad Karim", pet: "Owner of Rocky (Labrador)",
    text: "Professional, compassionate and always available in emergencies. Vet & Pet Zone has been a blessing for my family." },
  { name: "Nusrat Jahan", pet: "Owner of Coco (Parrot)",
    text: "Clean clinic, modern equipment, and most importantly — vets who genuinely care. I trust them completely." },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];

  return (
    <section className="bg-muted/40 py-20">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Loved by pet parents" />
        <div className="mt-12 max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="font-display font-semibold">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.pet}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 justify-center mt-6">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Review ${k+1}`}
                className={`h-2 rounded-full transition-smooth ${k === i ? "bg-primary w-8" : "bg-border w-2"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
