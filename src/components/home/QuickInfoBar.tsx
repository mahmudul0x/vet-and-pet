import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: MapPin, label: "Location", value: "Tikiapara, Dinajpur" },
  { icon: Phone, label: "Call Us", value: "01712-551510" },
  { icon: Clock, label: "Hours", value: "Always Open · 24/7" },
];

const QuickInfoBar = () => (
  <section className="container -mt-12 relative z-20">
    <div className="grid md:grid-cols-3 gap-4 bg-card rounded-2xl shadow-card p-6 border border-border">
      {items.map((it, i) => (
        <motion.div key={it.label}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex items-center gap-4 px-4 md:border-r last:border-r-0 border-border">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <it.icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{it.label}</div>
            <div className="font-display font-semibold">{it.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuickInfoBar;
