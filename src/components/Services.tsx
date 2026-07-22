import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Roteiros sob medida",
    desc: "Nada de pacote engessado: desenhamos a viagem em volta do seu estilo, ritmo e orçamento.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    ),
  },
  {
    title: "Passagens aéreas",
    desc: "Tarifas negociadas em companhias nacionais e internacionais, com bloqueio de preço e parcelamento.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    ),
  },
  {
    title: "Hospedagem selecionada",
    desc: "Hotéis, resorts e pousadas testados pela nossa equipe — do charmoso ao cinco estrelas.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    ),
  },
  {
    title: "Seguro viagem",
    desc: "Cobertura internacional completa com assistência médica, extravio de bagagem e cancelamento.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Translados & passeios",
    desc: "Do aeroporto ao hotel, e do hotel aos melhores mirantes — com guias locais que falam português.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    ),
  },
  {
    title: "Vistos & documentação",
    desc: "Orientação completa sobre vistos, vacinas, passaporte e exigências de cada país. Sem sustos no embarque.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="experiencias" className="relative py-24 sm:py-32 bg-deep overflow-hidden">
      <div className="absolute inset-0 bg-contours opacity-70" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean/20 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-tropic uppercase mb-3">
            {"//"} 03 — Experiências
          </p>
          <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white mb-4">
            A gente resolve,
            <br />
            <span className="text-hollow-azure">você viaja.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mb-14">
            Cada detalhe da viagem passa pelas mãos de um consultor de verdade. É assim que
            embarques viram histórias.
          </p>
        </Reveal>

        <div className="border-t border-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group grid sm:grid-cols-[70px_56px_1fr_1.4fr_auto] items-center gap-4 sm:gap-8 py-7 px-2 sm:px-5 border-b border-white/10 hover:bg-white/5 transition-colors duration-300">
                <span className="font-display text-2xl text-white/20 group-hover:text-tropic/50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-12 h-12 border border-tropic/40 text-tropic flex items-center justify-center rounded-sm group-hover:bg-tropic group-hover:text-abyss group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="font-display uppercase text-xl sm:text-2xl text-white group-hover:translate-x-1.5 transition-transform duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                <svg className="hidden sm:block w-5 h-5 text-white/25 group-hover:text-tropic group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
