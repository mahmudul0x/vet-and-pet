import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, PawPrint, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-smooth",
      scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <PawPrint className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base">Vet & Pet Zone</div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">Dinajpur</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) => cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                isActive ? "text-primary bg-accent" : "text-foreground/75 hover:text-primary hover:bg-accent/60"
              )}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:01712551510" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 01712-551510
          </a>
          <Button asChild className="rounded-full gradient-primary border-0 shadow-glow">
            <Link to="/appointment">Book Now</Link>
          </Button>
        </div>

        <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 rounded-lg hover:bg-accent" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}
                className={({ isActive }) => cn(
                  "px-4 py-3 rounded-lg text-sm font-medium",
                  isActive ? "text-primary bg-accent" : "text-foreground/80 hover:bg-accent/60"
                )}>
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 rounded-full gradient-primary border-0">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
