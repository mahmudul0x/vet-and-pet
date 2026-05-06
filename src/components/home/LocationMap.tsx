import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const LocationMap = () => (
  <section className="container py-20">
    <SectionHeading eyebrow="Visit Us" title="Find our clinic in Dinajpur"
      subtitle="Tikiapara, Dinajpur, Bangladesh — easy to reach, always welcoming." />
    <div className="mt-10 rounded-3xl overflow-hidden shadow-card border border-border">
      <iframe
        title="Vet & Pet Zone Location"
        src="https://www.google.com/maps?q=Tikiapara,Dinajpur,Bangladesh&output=embed"
        className="w-full h-[420px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
      <MapPin className="w-4 h-4 text-primary" /> Tikiapara, Dinajpur, Bangladesh
    </div>
  </section>
);

export default LocationMap;
