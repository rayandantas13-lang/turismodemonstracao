import { useState } from "react";
import { wa, DEFAULT_MSG } from "../data/site";

const links = [
  { name: "Destinos", href: "#destinos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-3 group">
      <span className="relative flex items-center justify-center w-9 h-9">
        <svg className="w-9 h-9 text-tropic group-hover:rotate-180 transition-transform duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9.2" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9.2" />
          <path d="M3.5 9.5h17M3.5 14.5h17" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-wide text-white">
          MERIDIANO<span className="text-tropic">.</span>
        </span>
        <span className="block font-mono text-[9px] tracking-[0.28em] text-gray-400 uppercase mt-1">
          viagens &amp; expedições
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-abyss/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gray-300 hover:text-tropic transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={wa(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-tropic text-abyss font-bold text-sm px-5 py-2.5 hover:bg-azure hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-tropic transition-colors"
              aria-label="Abrir menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-abyss/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3.5 px-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-gray-300 hover:text-tropic border-b border-white/5 transition-colors"
              >
                {l.name}
              </a>
            ))}
            <a
              href={wa(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-tropic text-abyss font-bold text-sm px-5 py-3"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
