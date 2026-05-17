import { MessageCircle, CalendarHeart, Building2, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";

const WA = "https://wa.me/51999999999?text=Hola%20quiero%20cotizar%20Villa%20Querencia";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Familias felices en Villa Querencia"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/60 to-black/70" />

      <div className="container mx-auto px-5 relative z-10 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-hope/90 text-hope-foreground px-4 py-1.5 text-xs font-semibold tracking-wide uppercase shadow-soft">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Un proyecto de Eficaxx
          </span>

          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground text-balance leading-[1.05]">
            El hogar que tu <span className="text-hope">familia merece</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-primary-foreground/90 text-balance">
            Invierte hoy en el futuro de tu familia con lotes accesibles y
            financiamiento pensado para ti.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 font-semibold shadow-warm hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 font-semibold shadow-soft hover:bg-card transition-colors"
            >
              <CalendarHeart className="h-5 w-5 text-primary" /> Agenda tu visita
            </a>
            <a
              href="#lotes"
              className="inline-flex items-center gap-2 rounded-full bg-background/20 text-primary-foreground border border-primary-foreground/40 backdrop-blur px-6 py-3.5 font-semibold hover:bg-background/30 transition-colors"
            >
              <Building2 className="h-5 w-5" /> Ver proyectos
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 max-w-2xl">
            {[
              { n: "+15", l: "años de experiencia" },
              { n: "+18", l: "proyectos entregados" },
              { n: "+700", l: "familias felices" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl bg-background/15 backdrop-blur-md border border-primary-foreground/20 p-4 sm:p-5"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-hope">{s.n}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/85 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#beneficios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/80"
      >
        <span className="text-xs uppercase tracking-widest">Descubre más</span>
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/60 flex justify-center pt-1.5">
          <span className="block h-2 w-1 rounded-full bg-primary-foreground animate-scroll-dot" />
        </div>
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
