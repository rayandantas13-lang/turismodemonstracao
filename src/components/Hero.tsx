import { useEffect, useState } from "react";
import { wa, DEFAULT_MSG } from "../data/site";

const WORDS = ["ARRAIAL", "TRANCOSO", "CARAIVA", "COROA VERMELHA"];

function BoardingPass() {
  return (
    <div className="absolute -bottom-10 left-2 sm:-left-10 w-[280px] sm:w-[320px] max-w-[92vw] bg-mint text-[#0b2233] rounded-md shadow-2xl shadow-black/50 rotate-[-3deg] animate-floaty">
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <span className="font-display text-base tracking-wide">
          MERIDIANO<span className="text-ocean"> TOUR</span>
        </span>
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-ocean">
          Costa do Descobrimento
        </span>
      </div>

      <div className="px-5 pb-4 flex items-center justify-between">
        <div>
          <div className="font-mono text-[9px] uppercase text-[#0b2233]/60">De</div>
          <div className="font-display text-2xl leading-none">BPS / Aeroporto</div>
        </div>
        <svg className="w-6 h-6 text-tropic" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <div className="text-right">
          <div className="font-mono text-[9px] uppercase text-[#0b2233]/60">Para</div>
          <div className="font-display text-2xl leading-none">PARAÍSO</div>
        </div>
      </div>

      <div className="relative border-t-2 border-dashed border-[#0b2233]/25">
        <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-abyss" />
        <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-abyss" />
      </div>

      <div className="px-5 py-3 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div>
          <div className="text-[#0b2233]/55 uppercase">Incluso</div>
          <div className="font-bold">GUIA + TRANSPORTE</div>
        </div>
        <div>
          <div className="text-[#0b2233]/55 uppercase">Busca</div>
          <div className="font-bold">HOTEL/AEROPORTO</div>
        </div>
        <div>
          <div className="text-[#0b2233]/55 uppercase">Fechamento</div>
          <div className="font-bold">WHATSAPP</div>
        </div>
      </div>

      <div className="px-5 pb-4 flex items-end gap-[2px] h-12">
        {Array.from({ length: 42 }).map((_, i) => (
          <span
            key={i}
            className="inline-block bg-[#0b2233]"
            style={{ width: ((i * 7) % 3) + 1, height: `${70 + ((i * 13) % 30)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-abyss to-abyss" />
      <div className="absolute inset-0 bg-contours" />
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full bg-ocean/30 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-8%] w-[420px] h-[420px] rounded-full bg-tropic/12 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-36 lg:pb-44">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Left */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex items-start sm:items-center gap-3 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-tropic uppercase leading-tight">
              <span className="w-2.5 h-2.5 mt-[3px] sm:mt-0 bg-tropic animate-pulse shrink-0" />
              <span>Agência local em Porto Seguro · Costa do Descobrimento</span>
            </div>

            <h1 className="font-display uppercase leading-[0.92] text-[clamp(3rem,9vw,6.8rem)]">
              <span className="block text-white">SEU GUIA</span>
              <span className="block text-white">LOCAL EM</span>
              <span className="block overflow-hidden h-[1.05em]">
                <span key={wordIdx} className="word-in text-hollow-azure">
                  {WORDS[wordIdx]}
                </span>
              </span>
            </h1>

            <p className="max-w-xl text-gray-300 text-[17px] leading-relaxed">
              A gente busca você no <span className="text-white font-semibold">aeroporto de Porto Seguro (BPS)</span>, te leva no hotel e vira seu guia durante toda a estadia. Pacotes com passeios fechados para <strong className="text-white">Arraial d'Ajuda, Trancoso, Caraiva e Coroa Vermelha</strong> + experiências de tirar o fôlego.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest border border-white/15 rounded-full px-3 py-1.5 text-gray-300">
                <span className="w-1.5 h-1.5 bg-tropic rounded-full" /> Motoristas próprios
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest border border-white/15 rounded-full px-3 py-1.5 text-gray-300">
                <span className="w-1.5 h-1.5 bg-tropic rounded-full" /> Veículos 4x4 & vans
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest border border-white/15 rounded-full px-3 py-1.5 text-gray-300">
                Jetski · Quadriciclo · Mergulho
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={wa(DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-tropic text-abyss font-bold px-7 py-4 hover:bg-azure hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Fechar meu pacote no WhatsApp
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#destinos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-bold text-white hover:border-tropic hover:text-tropic transition-all duration-300"
              >
                Ver destinos
              </a>
            </div>

            <p className="font-mono text-[11px] tracking-[0.14em] text-gray-400 uppercase">
              ★ 4.9 no Google <span className="text-tropic">✦</span> +2.800 famílias atendidas{" "}
              <span className="text-tropic">✦</span> Transfer aeroporto ↔ hotel incluso
            </p>
          </div>

          {/* Right — photo + boarding pass */}
          <div className="lg:col-span-5 relative pl-4 sm:pl-10 pb-20 sm:pb-16 lg:pb-20 mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-sm border border-white/15 rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800"
                alt="Praia de Arraial d'Ajuda com coqueiros e mar cristalino"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/80 uppercase">Arraial d'Ajuda — 07h12 · busca no hotel</p>
                <p className="font-display text-xl sm:text-2xl text-white uppercase leading-none mt-1">Translado + Guia Local + Passeios</p>
              </div>
            </div>

            <div className="absolute top-2 right-2 sm:-top-6 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-tropic bg-abyss/80 backdrop-blur flex flex-col items-center justify-center text-center rotate-[-14deg] z-10">
              <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-widest text-tropic leading-tight">
                AGÊNCIA<br />100%<br />LOCAL 🌴
              </span>
            </div>

            <BoardingPass />
          </div>
        </div>
      </div>
    </section>
  );
}
