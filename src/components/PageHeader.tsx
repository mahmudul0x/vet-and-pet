import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

interface Props { title: string; subtitle?: string; }

const PageHeader = ({ title, subtitle }: Props) => (
  <section className="relative overflow-hidden gradient-soft border-b border-border">
    <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
    <PawPrint className="absolute top-10 right-10 w-20 h-20 text-primary/10 animate-float-paw" />
    <div className="container relative py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-display font-bold text-gradient">
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;
