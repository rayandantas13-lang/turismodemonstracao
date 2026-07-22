import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    initials: "MC",
    trip: "Pacote Arraial + Trancoso + Caraiva · 7 dias",
    quote:
      "Fechamos tudo pelo WhatsApp. Nos buscaram no aeroporto, todos os dias no hotel às 8h. Motorista super gente boa, nos levou de quadriciclo em Caraiva e jetski em Arraial. Melhor agência local disparado!",
  },
  {
    name: "Rafael & Júlia",
    initials: "RJ",
    trip: "Lua de mel · Praia do Espelho + Mergulho cilindro",
    quote:
      "Lua de mel inesquecível. Eles organizaram tudo: mergulho em Recife de Fora com fotos lindas, Quadrado de Trancoso à noite e jantar secreto que só local conhece. Nossa van era só nossa!",
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    trip: "Família com 2 crianças · Coroa Vermelha + Aldeia Pataxó",
    quote:
      "Viajamos com crianças e o cuidado foi surreal. Aldeia Pataxó foi o ponto alto para as crianças. Motorista sempre pontual, cadeirinha, água gelada na van. Viramos amigos da equipe.",
  },
  {
    name: "Fernanda Lima",
    initials: "FL",
    trip: "Amigas · Jetski, Buggy e Coroa Vermelha",
    quote:
      "Preço mais justo que no hotel e atendimento humano de verdade. Jetski foi o melhor! E no fim ainda nos levaram para o aeroporto. Recomendo de olhos fechados.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const current = TESTIMONIALS[idx];

  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-ocean overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-tropic/15 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-mint/70 uppercase mb-3">
            {"//"} 04 — Depoimentos reais do Google
          </p>
          <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white mb-14">
            Quem veio com a gente, <span className="text-tropic">volta</span>
          </h2>
        </Reveal>

        <div
          className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote */}
          <Reveal>
            <div key={idx} className="fade-slide relative border-l-4 border-tropic pl-6 sm:pl-10">
              <span className="absolute -top-6 left-4 sm:left-8 font-display text-[110px] leading-none text-tropic/25 select-none">
                “
              </span>
              <blockquote className="relative text-xl sm:text-[28px] font-medium leading-snug text-white">
                {current.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-tropic text-abyss font-display text-lg flex items-center justify-center">
                  {current.initials}
                </span>
                <div>
                  <p className="font-bold text-white">{current.name}</p>
                  <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-mint/60">
                    {current.trip}
                  </p>
                </div>
                <span className="ml-auto text-tropic tracking-widest">★★★★★</span>
              </div>
            </div>
          </Reveal>

          {/* Controls */}
          <Reveal delay={120}>
            <div className="flex lg:flex-col gap-6 lg:items-start">
              <div className="flex gap-3">
                <button
                  onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  aria-label="Depoimento anterior"
                  className="w-12 h-12 border border-white/30 text-white flex items-center justify-center rounded-sm hover:bg-tropic hover:border-tropic hover:text-abyss transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button
                  onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
                  aria-label="Próximo depoimento"
                  className="w-12 h-12 border border-white/30 text-white flex items-center justify-center rounded-sm hover:bg-tropic hover:border-tropic hover:text-abyss transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

              <div className="flex lg:flex-col gap-2 w-full">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIdx(i)}
                    className={`group flex items-center gap-3 px-4 py-3 border rounded-sm text-left transition-all duration-300 w-full ${
                      i === idx
                        ? "border-tropic bg-abyss/40"
                        : "border-white/15 hover:border-white/40"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === idx ? "bg-tropic" : "bg-white/30 group-hover:bg-white/60"
                      }`}
                    />
                    <span className={`text-sm font-semibold ${i === idx ? "text-white" : "text-white/60"}`}>
                      {t.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
