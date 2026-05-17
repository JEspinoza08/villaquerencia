import { Check } from "lucide-react";
import about from "@/assets/optimizado/about.webp";

export function About() {
  return (
    <section id="proyecto" className="py-24">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={about}
            alt="Vista aérea de Villa Querencia"
            loading="lazy"
            className="rounded-[2rem] shadow-warm w-full h-full object-cover aspect-[5/4]"
          />
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-card rounded-2xl shadow-warm p-5 max-w-[14rem] border border-border/50">
            <div className="text-3xl font-display font-bold text-primary">+700</div>
            <div className="text-sm text-muted-foreground mt-1">familias ya confiaron en nosotros</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre Villa Querencia</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Más que un terreno, <span className="text-primary">un nuevo comienzo</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Villa Querencia nace con un propósito: que cada familia peruana pueda
            tener un lugar al que llamar hogar. Un espacio para crecer juntos,
            con áreas verdes, seguridad y la tranquilidad de invertir en algo
            verdaderamente tuyo.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "Visión de crecimiento familiar y comunidad",
              "Tranquilidad y plusvalía a largo plazo",
              "Respaldo sólido del grupo Eficaxx",
              "Atención personalizada en cada paso",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hope text-hope-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:scale-105 transition-transform"
          >
            Quiero conocer más
          </a>
        </div>
      </div>
    </section>
  );
}
