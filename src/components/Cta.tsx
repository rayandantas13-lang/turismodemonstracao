import Reveal from "./Reveal";
import { wa, DEFAULT_MSG } from "../data/site";

export default function Cta() {
  return (
    <section className="py-24 sm:py-28 bg-abyss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-md border border-azure/30 bg-gradient-to-br from-ocean via-[#0a5fa0] to-deep px-7 py-16 sm:p-16">
            <div className="absolute inset-0 bg-dots opacity-30" />

            {/* animated flight trail */}
            <svg
              className="absolute top-8 right-[-40px] w-[420px] h-[220px] text-tropic/40 hidden md:block"
              viewBox="0 0 420 220"
              fill="none"
            >
              <path className="trail" d="M10 200 C 120 40, 300 240, 410 30" stroke="currentColor" strokeWidth="2.5" />
              <g transform="translate(370,42) rotate(-38)">
                <path
                  d="M0 0 L34 10 L0 20 L7 10 Z"
                  fill="currentColor"
                />
              </g>
            </svg>

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-mint/70 uppercase mb-4">
                  Última chamada · portão A7
                </p>
                <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white">
                  Pronto para
                  <br />
                  <span className="text-tropic">decolar?</span>
                </h2>
                <p className="mt-5 text-mint/85 text-lg max-w-lg">
                  Mande um “oi” agora e receba em minutos as primeiras ideias de roteiro para a sua
                  próxima viagem. Sem compromisso, sem robô — gente de verdade do outro lado.
                </p>
              </div>

              <div className="lg:ml-auto flex flex-col items-start gap-4">
                <a
                  href={wa(DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-tropic text-abyss font-bold text-lg px-9 py-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/30"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="font-mono text-[10px] tracking-[0.2em] text-mint/60 uppercase">
                  Resposta em minutos · atendimento humano
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
