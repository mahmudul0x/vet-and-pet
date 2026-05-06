import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Phone } from "lucide-react";
import { toast } from "sonner";

const Appointment = () => {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", pet: "Dog", service: "Vaccination", date: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date) {
      toast.error("Please fill in all required fields");
      return;
    }
    setDone(true);
    toast.success("Appointment request received!");
  };

  return (
    <>
      <PageHeader title="Book an Appointment" subtitle="Schedule a visit with our veterinary team — we'll confirm shortly." />
      <section className="container py-16">
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-3xl p-6 border border-border shadow-soft">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold mb-1">Easy Booking</h3>
              <p className="text-sm text-muted-foreground">Quick form, fast confirmation.</p>
            </div>
            <div className="bg-card rounded-3xl p-6 border border-border shadow-soft">
              <Phone className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-display text-lg font-semibold mb-1">Prefer to call?</h3>
              <p className="text-sm text-muted-foreground mb-3">We're here to help.</p>
              <a href="tel:01712551510" className="font-semibold text-primary">01712-551510</a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-card rounded-3xl p-8 border border-border shadow-card">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="d" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Appointment Received!</h3>
                  <p className="text-muted-foreground mb-6">Thank you {form.name}. We'll call you at {form.phone} to confirm shortly.</p>
                  <Button onClick={() => { setDone(false); setForm({ name: "", phone: "", pet: "Dog", service: "Vaccination", date: "" }); }}
                    variant="outline" className="rounded-full">Book Another</Button>
                </motion.div>
              ) : (
                <motion.form key="f" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required maxLength={80} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required maxLength={20} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="01XXX-XXXXXX" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pet">Pet Type</Label>
                      <select id="pet" value={form.pet} onChange={e => setForm({ ...form, pet: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                        {["Dog", "Cat", "Bird", "Rabbit", "Other"].map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <select id="service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                        {["Vaccination", "Checkup", "Diagnosis", "Surgery", "Spay/Neuter", "Emergency"].map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input id="date" type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full gradient-primary border-0 shadow-glow">
                    Request Appointment
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
