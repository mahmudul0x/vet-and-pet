import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props { eyebrow?: string; title: string; subtitle?: string; center?: boolean; className?: string; }

const SectionHeading = ({ eyebrow, title, subtitle, center = true, className }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={cn("max-w-2xl space-y-3", center && "mx-auto text-center", className)}
  >
    {eyebrow && (
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary px-3 py-1 rounded-full bg-accent">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
