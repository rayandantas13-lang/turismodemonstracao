import { wa, EMAIL, WHATSAPP_DISPLAY, DEFAULT_MSG } from "../data/site";

const NAV = [
  { name: "Destinos", href: "#destinos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

const DEST_LINKS = ["Nepal", "Maldivas", "Fernando de Noronha", "Patagônia", "Marrocos", "Singapura"];

export default function Footer() {
  return (
    <footer className="bg-[#030d16] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        {/* giant wordmark */}
        <div className="select-none" aria-hidden="true">
          <p className="font-display uppercase leading-[0.82] text-[16vw] lg:text-[10.5rem] text-white/95 tracking-tight">
            Meridiano<span className="text-tropic">.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="space-y-4">
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Agência de viagens e expedições. Roteiros sob medida feitos por quem já pisou nos
              destinos que recomenda.
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] text-tropic uppercase">
              Cadastur 26.012345-1
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
              Destinos
            </h4>
            <ul className="space-y-3">
              {DEST_LINKS.map((d) => (
                <li key={d}>
                  <a
                    href={wa(`Olá! Quero saber mais sobre o roteiro para ${d}.`)}
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
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href={wa(DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-tropic transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-tropic rounded-full" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-tropic transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="text-gray-500">Seg–Sáb · 9h às 19h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
            © {new Date().getFullYear()} Meridiano Viagens e Turismo · CNPJ 12.345.678/0001-90
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
            São Paulo — Brasil <span className="text-tropic">✈</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
