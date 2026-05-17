import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/51999999999?text=Hola%20quiero%20información%20de%20Villa%20Querencia"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-3.5 font-semibold shadow-warm hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Cotizar ahora</span>
    </a>
  );
}
