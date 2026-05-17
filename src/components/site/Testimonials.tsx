import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import t1 from "@/assets/optimizado/t1.webp";
import t2 from "@/assets/optimizado/t2.webp";
import t3 from "@/assets/optimizado/t3.webp";

const data = [
  { img: t1, name: "Carlos M.", role: "Padre de familia", text: "Después de años alquilando, hoy mis hijos tienen su propio jardín. Villa Querencia hizo realidad lo que parecía imposible." },
  { img: t2, name: "Lucía R.", role: "Mamá emprendedora", text: "El proceso fue claro y humano. Las cuotas se ajustan a mi presupuesto y la urbanización es preciosa." },
  { img: t3, name: "Andrés y Paola", role: "Pareja joven", text: "Compramos pensando en nuestro futuro. Es la mejor decisión que tomamos como pareja." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % data.length);
  const prev = () => setI((p) => (p - 1 + data.length) % data.length);
  const c = data[i];

  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto px-5 max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonios</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Familias que ya cumplieron su sueño
          </h2>
        </div>

        <div className="mt-12 relative rounded-[2rem] bg-card shadow-warm p-8 sm:p-12 border border-border/50">
          <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/15" />
          <div className="flex flex-col sm:flex-row items-center gap-7">
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover shadow-soft border-4 border-hope/40"
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed text-balance">
                "{c.text}"
              </p>
              <div className="mt-5">
                <div className="font-display font-semibold text-foreground">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.role}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                  aria-label={`Testimonio ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="h-11 w-11 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="h-11 w-11 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
