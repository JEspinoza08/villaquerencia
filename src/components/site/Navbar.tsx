import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proyecto", label: "Proyecto" },
  { href: "#lotes", label: "Lotes" },
  { href: "#simulador", label: "Simulador" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

const WA = "https://wa.me/51999999999?text=Hola%20quiero%20información%20de%20Villa%20Querencia";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-[#F5EFE3]/95 backdrop-blur-md shadow-soft py-2"
    : "bg-[#F5EFE3]/90 backdrop-blur-md shadow-soft py-3"
}`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Villa Querencia" className="h-11 w-11 rounded-xl object-cover shadow-soft" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-foreground">Villa Querencia</div>
            <div className="text-xs text-muted-foreground">Tu lugar para soñar</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-[#3B2F22] hover:text-[#6B7A3A] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-medium shadow-soft hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden rounded-lg p-2 text-foreground hover:bg-muted"
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mx-5 mt-3 rounded-2xl bg-card shadow-warm p-5 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-3 text-foreground hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-3 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
