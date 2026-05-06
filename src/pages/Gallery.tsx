import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/components/home/GalleryPreview";

const cats = ["All", "Clinic", "Treatments", "Pets"];
const items = [
  { src: gallery[2], cat: "Clinic" },
  { src: gallery[0], cat: "Pets" },
  { src: gallery[1], cat: "Treatments" },
  { src: gallery[3], cat: "Treatments" },
  { src: gallery[4], cat: "Pets" },
  { src: gallery[5], cat: "Treatments" },
  { src: gallery[0], cat: "Pets" },
  { src: gallery[2], cat: "Clinic" },
  { src: gallery[3], cat: "Treatments" },
];

const Gallery = () => {
  const [tab, setTab] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = tab === "All" ? items : items.filter(i => i.cat === tab);

  return (
    <>
      <PageHeader title="Gallery" subtitle="A look inside our clinic, our team, and the pets we love caring for." />
      <section className="container py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setTab(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                tab === c ? "gradient-primary text-primary-foreground shadow-glow" : "bg-muted hover:bg-accent text-foreground"
              }`}>
              {c}
            </button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((it, i) => (
            <motion.button key={i} onClick={() => setOpen(it.src)}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="break-inside-avoid w-full overflow-hidden rounded-2xl shadow-soft block group">
              <img src={it.src} alt="" loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition-smooth duration-500" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-foreground/85 backdrop-blur p-6 flex items-center justify-center cursor-pointer">
            <button className="absolute top-6 right-6 text-white p-2" onClick={() => setOpen(null)}><X className="w-7 h-7" /></button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={open} alt="" className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-card" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
