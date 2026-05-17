import { GraduationCap, ShoppingBag, Hospital, Bus, MapPin } from "lucide-react";

const items = [
  { icon: GraduationCap, t: "Colegios cercanos", d: "Instituciones educativas a pocos minutos." },
  { icon: ShoppingBag, t: "Comercios", d: "Mercados, tiendas y centros comerciales." },
  { icon: Hospital, t: "Hospitales", d: "Atención médica accesible para tu familia." },
  { icon: Bus, t: "Transporte público", d: "Conexión directa con paradero principal." },
];

export function Location() {
  return (
    <section id="ubicacion" className="py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Ubicación</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Conectado con todo lo que tu familia necesita
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden shadow-warm border border-border/50 min-h-[380px] bg-card">
            <iframe
              title="Mapa Villa Querencia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-77.15%2C-12.10%2C-76.95%2C-11.95&amp;layer=mapnik"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl bg-card p-6 shadow-soft border border-border/50 hover:-translate-y-1 transition-transform"
              >
                <div className="h-12 w-12 rounded-xl bg-hope/30 text-primary flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="sm:col-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex items-center gap-4 shadow-soft">
              <MapPin className="h-8 w-8 shrink-0" />
              <div>
                <div className="font-semibold">Visita el proyecto en persona</div>
                <div className="text-sm opacity-90">Coordina una visita guiada sin compromiso.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
