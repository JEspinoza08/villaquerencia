import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";

const PRICE = 52000; // referencia
const RATE = 0.009; // mensual aprox

export function Simulator() {
  const [inicial, setInicial] = useState(20); // %
  const [cuotas, setCuotas] = useState(60); // meses

  const { financiado, cuotaMensual } = useMemo(() => {
    const f = PRICE * (1 - inicial / 100);
    const c = (f * RATE) / (1 - Math.pow(1 + RATE, -cuotas));
    return { financiado: f, cuotaMensual: Math.round(c) };
  }, [inicial, cuotas]);

  const wa = `https://wa.me/51999999999?text=${encodeURIComponent(
    `Hola, simulé en la web: Inicial ${inicial}%, ${cuotas} cuotas, cuota mensual S/ ${cuotaMensual}. Quiero más info.`,
  )}`;

  return (
    <section id="simulador" className="py-24">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Simulador</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Calcula tu cuota mensual
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre en segundos cuánto pagarías al mes por tu lote en Villa
            Querencia. Sin compromiso.
          </p>
          <div className="mt-6 rounded-2xl bg-secondary/60 p-5 border border-border/50">
            <p className="text-sm text-muted-foreground">
              * Cálculo referencial sobre un lote modelo de{" "}
              <span className="font-semibold text-foreground">S/ {PRICE.toLocaleString()}</span>. La cuota final puede variar según evaluación.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-card p-7 sm:p-9 shadow-warm border border-border/50">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display font-semibold text-foreground">Simulador rápido</div>
              <div className="text-sm text-muted-foreground">Ajusta y mira tu cuota al instante</div>
            </div>
          </div>

          <div className="mt-7 space-y-7">
            <div>
              <div className="flex justify-between text-sm font-medium">
                <label className="text-foreground">Cuota inicial</label>
                <span className="text-primary font-semibold">{inicial}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={inicial}
                onChange={(e) => setInicial(Number(e.target.value))}
                className="mt-2 w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium">
                <label className="text-foreground">Cantidad de cuotas</label>
                <span className="text-primary font-semibold">{cuotas} meses</span>
              </div>
              <input
                type="range"
                min={24}
                max={120}
                step={12}
                value={cuotas}
                onChange={(e) => setCuotas(Number(e.target.value))}
                className="mt-2 w-full accent-primary"
              />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary to-warm text-primary-foreground p-6">
              <div className="text-xs uppercase tracking-widest opacity-80">Tu cuota mensual estimada</div>
              <div className="mt-2 text-4xl sm:text-5xl font-display font-bold">
                S/ {cuotaMensual.toLocaleString()}
              </div>
              <div className="mt-2 text-sm opacity-90">
                Monto a financiar: S/ {Math.round(financiado).toLocaleString()}
              </div>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Quiero esta cuota
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
