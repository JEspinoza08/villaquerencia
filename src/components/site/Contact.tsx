import { useState } from "react";
import { z } from "zod";
import { Send, MessageCircle, Phone, Mail, Instagram, Facebook } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  phone: z.string().trim().regex(/^[0-9+\s-]{6,15}$/, "Celular inválido"),
  email: z.string().trim().email("Correo inválido").max(120),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setErr(r.error.issues[0].message);
      return;
    }
    setErr(null);
    setSent(true);
    const msg = encodeURIComponent(
      `Hola, soy ${r.data.name}. Mi celular: ${r.data.phone}, correo: ${r.data.email}. Quiero información de Villa Querencia.`,
    );
    window.open(`https://wa.me/51999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Haz realidad tu casa propia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Déjanos tus datos y un asesor te contactará por WhatsApp con una
            cotización personalizada. Sin compromiso.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+51999999999" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="h-11 w-11 rounded-xl bg-card shadow-soft flex items-center justify-center text-primary"><Phone className="h-5 w-5" /></span>
              +51 999 999 999
            </a>
            <a href="mailto:contacto@villaquerencia.pe" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="h-11 w-11 rounded-xl bg-card shadow-soft flex items-center justify-center text-primary"><Mail className="h-5 w-5" /></span>
              contacto@villaquerencia.pe
            </a>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-xl bg-card shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-xl bg-card shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[2rem] bg-card p-7 sm:p-9 shadow-warm border border-border/50"
        >
          <h3 className="text-2xl font-display font-bold text-foreground">Solicita tu cotización</h3>
          <p className="mt-1 text-sm text-muted-foreground">Respuesta en minutos.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Nombre completo</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl bg-background border border-input px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                placeholder="Tu nombre"
                maxLength={80}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Celular</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1.5 w-full rounded-xl bg-background border border-input px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                placeholder="+51 9XX XXX XXX"
                maxLength={15}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Correo</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-xl bg-background border border-input px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                placeholder="tucorreo@email.com"
                maxLength={120}
              />
            </div>

            {err && <p className="text-sm text-destructive">{err}</p>}
            {sent && !err && (
              <p className="text-sm text-primary">¡Gracias! Te redirigimos a WhatsApp.</p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition-transform"
            >
              <Send className="h-5 w-5" /> Enviar y abrir WhatsApp
            </button>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 font-semibold hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Escribir directo
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
