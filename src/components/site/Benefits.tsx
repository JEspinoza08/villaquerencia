import { Banknote, Trees, ShieldCheck, TrendingUp, MapPin, PiggyBank } from "lucide-react";

const items = [
  { icon: Banknote, t: "Financiamiento accesible", d: "Cuotas pensadas para tu economía familiar, sin sobresaltos." },
  { icon: Trees, t: "Áreas verdes", d: "Parques y espacios para que tus hijos crezcan al aire libre." },
  { icon: ShieldCheck, t: "Seguridad", d: "Urbanización cerrada con vigilancia 24/7 y accesos controlados." },
  { icon: TrendingUp, t: "Crecimiento urbano", d: "Zona en plena expansión: tu inversión se valoriza año a año." },
  { icon: MapPin, t: "Excelente ubicación", d: "Cerca de colegios, comercios, hospitales y transporte público." },
  { icon: PiggyBank, t: "Inversión segura", d: "Respaldo del grupo Eficaxx, con más de 15 años de experiencia." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Beneficios</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Tu hogar sí es posible
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Diseñado para familias que sueñan con un espacio propio donde crecer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group rounded-3xl bg-card p-7 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all duration-300 border border-border/50"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
