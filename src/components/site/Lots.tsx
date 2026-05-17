import { MessageCircle, Ruler } from "lucide-react";
import m1 from "@/assets/model1.jpg";
import m2 from "@/assets/model2.jpg";
import m3 from "@/assets/model3.jpg";

const lots = [
  { img: m1, name: "Modelo Familia", size: "90 m²", price: "S/ 38,900", cuota: "S/ 390", tag: "Más vendido" },
  { img: m2, name: "Lote Inversión", size: "120 m²", price: "S/ 52,500", cuota: "S/ 520" },
  { img: m3, name: "Modelo Premium", size: "150 m²", price: "S/ 72,000", cuota: "S/ 710" },
];

const wa = (model: string) =>
  `https://wa.me/51999999999?text=${encodeURIComponent(`Hola, quiero información del ${model} en Villa Querencia`)}`;

export function Lots() {
  return (
    <section id="lotes" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Lotes y modelos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Elige el espacio para tu familia
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Opciones pensadas para cada etapa de vida y cada presupuesto.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {lots.map((l) => (
            <article
              key={l.name}
              className="group rounded-3xl bg-card overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all duration-300 border border-border/50"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {l.tag && (
                  <span className="absolute top-4 left-4 rounded-full bg-hope text-hope-foreground text-xs font-semibold px-3 py-1 shadow-soft">
                    {l.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{l.name}</h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Ruler className="h-4 w-4" /> {l.size}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Desde</div>
                    <div className="text-2xl font-display font-bold text-primary">{l.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Cuota desde</div>
                    <div className="text-lg font-semibold text-warm">{l.cuota}/mes</div>
                  </div>
                </div>
                <a
                  href={wa(l.name)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-3 font-semibold hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="h-4 w-4" /> Cotizar este modelo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
