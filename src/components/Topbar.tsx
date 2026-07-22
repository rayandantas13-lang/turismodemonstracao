import { wa, DEFAULT_MSG, WHATSAPP_DISPLAY } from "../data/site";

export default function Topbar() {
  return (
    <div className="bg-tropic text-abyss overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider">
        <p className="truncate uppercase min-w-0">
          🌴 Agência local · Porto Seguro <span className="hidden sm:inline">· Buscamos no aeroporto BPS · Guia durante toda estadia</span>
        </p>
        <a
          href={wa(DEFAULT_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 uppercase hover:underline shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.03 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span className="hidden sm:inline">{WHATSAPP_DISPLAY}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
