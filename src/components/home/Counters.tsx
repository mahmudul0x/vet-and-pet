import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Stethoscope, Users, Award } from "lucide-react";

const stats = [
  { icon: Heart, value: 5000, suffix: "+", label: "Happy Pets" },
  { icon: Stethoscope, value: 12000, suffix: "+", label: "Treatments Done" },
  { icon: Users, value: 3500, suffix: "+", label: "Trusted Families" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Service" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
};

const Counters = () => (
  <section className="container py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-3xl shadow-soft p-8 border border-border">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-3">
            <s.icon className="w-5 h-5 text-secondary" />
          </div>
          <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
            <Counter to={s.value} suffix={s.suffix} />
          </div>
          <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Counters;
