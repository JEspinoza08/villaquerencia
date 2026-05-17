import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "¿Qué opciones de financiamiento tengo?", a: "Ofrecemos financiamiento directo y con bancos. Las cuotas se adaptan a tu capacidad de pago, con plazos de 24 hasta 120 meses." },
  { q: "¿Cuánto necesito para separar mi lote?", a: "Desde S/ 500 puedes asegurar tu lote y comenzar el proceso de compra con total respaldo." },
  { q: "¿Cuál es el monto de la cuota mensual?", a: "Depende del modelo, cuota inicial y plazo elegido. Usa nuestro simulador o escríbenos por WhatsApp para una cotización personalizada." },
  { q: "¿Qué documentos necesito presentar?", a: "Solo DNI, recibo de servicios y un sustento de ingresos. Te acompañamos en cada paso." },
  { q: "¿Puedo visitar el proyecto?", a: "¡Por supuesto! Coordina con nosotros una visita guiada gratuita, cualquier día de la semana." },
  { q: "¿Existen bonos del Estado disponibles?", a: "Sí, te orientamos sobre bonos como el Bono Verde y Mivivienda según el modelo de tu interés." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="container mx-auto px-5 max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Preguntas frecuentes</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="rounded-2xl bg-card border border-border/60 shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
