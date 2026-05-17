import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/optimizado/g1.webp";
import g2 from "@/assets/optimizado/g2.webp";
import g3 from "@/assets/optimizado/g3.webp";
import g4 from "@/assets/optimizado/g4.webp";
import g5 from "@/assets/optimizado/g5.webp";
import g6 from "@/assets/optimizado/g6.webp";

const imgs = [
  { src: g1, alt: "Niños jugando en áreas verdes", span: "row-span-2" },
  { src: g2, alt: "Pareja recibiendo llaves de su hogar", span: "" },
  { src: g3, alt: "Zona recreativa", span: "" },
  { src: g4, alt: "Vista aérea de la urbanización", span: "row-span-2" },
  { src: g5, alt: "Familia disfrutando del parque", span: "" },
  { src: g6, alt: "Ingreso principal con seguridad", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Galería</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Vive la experiencia Villa Querencia
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {imgs.map((i, idx) => (
            <button
              key={idx}
              onClick={() => setActive(i.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${i.span}`}
            >
              <img
                src={i.src}
                alt={i.alt}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-foreground/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
        >
          <button
            className="absolute top-5 right-5 rounded-full bg-background/90 text-foreground p-2"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
          <img src={active} alt="" className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-warm" />
        </div>
      )}
    </section>
  );
}
