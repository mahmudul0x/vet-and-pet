import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.message.trim()) { toast.error("Please complete the form"); return; }
    toast.success("Message sent! We'll get back to you soon.");
    setF({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Your pet deserves the best care — reach out, we're here for you." />
      <section className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: Phone, title: "Call Us", value: "01712-551510", href: "tel:01712551510" },
              { icon: MapPin, title: "Location", value: "Tikiapara, Dinajpur, Bangladesh" },
              { icon: Mail, title: "Email", value: "care@vetpetzone.bd", href: "mailto:care@vetpetzone.bd" },
              { icon: Clock, title: "Hours", value: "Always Open · 24/7 Emergency" },
            ].map(c => (
              <div key={c.title} className="flex gap-4 bg-card rounded-2xl p-5 border border-border shadow-soft">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? <a href={c.href} className="font-display font-semibold hover:text-primary">{c.value}</a>
                    : <div className="font-display font-semibold">{c.value}</div>}
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
              <iframe title="Map" src="https://www.google.com/maps?q=Tikiapara,Dinajpur,Bangladesh&output=embed"
                className="w-full h-64 border-0" loading="lazy" />
            </div>
          </div>

          <form onSubmit={submit} className="bg-card rounded-3xl p-8 border border-border shadow-card space-y-5 h-fit">
            <h3 className="font-display text-2xl font-bold">Send us a message</h3>
            <div className="space-y-2">
              <Label htmlFor="cn">Name</Label>
              <Input id="cn" required maxLength={80} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ce">Email</Label>
              <Input id="ce" type="email" maxLength={120} value={f.email} onChange={e => setF({ ...f, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cm">Message</Label>
              <Textarea id="cm" required maxLength={1000} rows={5} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full gradient-primary border-0 shadow-glow">Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
