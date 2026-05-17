import logo from "@/assets/logo2.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-14 pb-8">
      <div className="container mx-auto px-5 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Villa Querencia" className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <div className="font-display font-bold text-lg">Villa Querencia</div>
              <div className="text-xs opacity-80">Tu lugar para soñar</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-85 max-w-xs">
            Un proyecto del grupo Eficaxx. Crece junto a Villa Querencia: tu hogar
            sí es posible.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#beneficios" className="hover:opacity-100">Beneficios</a></li>
            <li><a href="#proyecto" className="hover:opacity-100">Proyecto</a></li>
            <li><a href="#lotes" className="hover:opacity-100">Lotes</a></li>
            <li><a href="#simulador" className="hover:opacity-100">Simulador</a></li>
            <li><a href="#contacto" className="hover:opacity-100">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>+51 999 999 999</li>
            <li>contacto@villaquerencia.pe</li>
            <li>Lima, Perú</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-5 mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-75">
        © {new Date().getFullYear()} Villa Querencia · Un proyecto de Eficaxx. Todos los derechos reservados.
      </div>
    </footer>
  );
}
