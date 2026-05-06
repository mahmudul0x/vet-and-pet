import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <a
      href="https://wa.me/8801712551510"
      target="_blank" rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href="tel:01712551510"
      aria-label="Call now"
      className="w-14 h-14 rounded-full bg-destructive text-destructive-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-smooth animate-pulse-ring"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingActions;
