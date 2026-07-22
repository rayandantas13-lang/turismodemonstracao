import { wa, EMAIL, WHATSAPP_DISPLAY, DEFAULT_MSG, INSTAGRAM } from "../data/site";

const NAV = [
  { name: "Destinos", href: "#destinos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Passeios & Frota", href: "#experiencias" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

const DEST_LINKS = ["Arraial d'Ajuda", "Trancoso", "Caraiva", "Coroa Vermelha", "Recife de Fora - Mergulho", "Jetski & Quadriciclo"];

export default function Footer() {
  return (
    <footer className="bg-[#030d16] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="select-none" aria-hidden="true">
          <p className="font-display uppercase leading-[0.82] text-[13vw] lg:text-[8.5rem] text-white/95 tracking-tight">
            Meridiano<span className="text-tropic">.</span>
          </p>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-tropic/80 -mt-2">Costa do Descobrimento · Agência local em Porto Seguro</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="space-y-4">
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Agência local em Porto Seguro. Te buscamos no aeroporto (BPS), somos seu guia durante toda estadia em Arraial, Trancoso, Caraiva e Coroa Vermelha. Frota própria, motoristas e experiências exclusivas.
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] text-tropic uppercase">
              Cadastur 00.000000.00-1 · Bahia · Desde 2016<br/>Vans · 4x4 · Jetski · Mergulho com cilindro
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-bold tracking-[0.22em] text-gray-500 uppercase mb-5">
              Navegue
            </h4>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-300 hover:text-tropic transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-bold tracking-[0.22em] text-gray-500 uppercase mb-5">
              Nossos passeios
            </h4>
            <ul className="space-y-3">
              {DEST_LINKS.map((d) => (
                <li key={d}>
                  <a
                    href={wa(`Olá! Quero saber mais sobre ${d} 🌴`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-tropic transition-colors"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-bold tracking-[0.22em] text-gray-500 uppercase mb-5">
              Fale com guia local
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href={wa(DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-tropic transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-tropic rounded-full animate-pulse" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-tropic transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-gray-500">{INSTAGRAM} · Seg–Dom 7h às 22h</span>
              </li>
              <li className="pt-2 font-mono text-[10px] uppercase text-gray-500">
                📍 Arraial d'Ajuda · Porto Seguro - BA<br/>Buscamos no aeroporto BPS + hotel
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
            © {new Date().getFullYear()} Meridiano Costa do Descobrimento · CNPJ 12.345.678/0001-90 · Todos passeios fechados via WhatsApp
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
            Porto Seguro — Bahia <span className="text-tropic">✈</span> Jetski · Buggy · Mergulho · Aldeia Pataxó
          </p>
        </div>
      </div>
    </footer>
  );
}
