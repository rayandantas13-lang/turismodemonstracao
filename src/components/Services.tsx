import Reveal from "./Reveal";
import { wa } from "../data/site";

const SERVICES = [
  {
    title: "Passeio de Jetski",
    desc: "Jetski Yamaha novo, colete e guia. Roteiro pelo Rio João de Tiba e mar de Arraial. 30min, 1h ou free. Fotos de drone opcionais.",
    tag: "Adrenalina",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    ),
  },
  {
    title: "Quadriciclo & Buggy",
    desc: "Trilhas por Trancoso, Caraiva e Praia do Espelho. Quadri 4x4 automático e buggys com motorista. Rota das falésias + mirantes secretos.",
    tag: "Mais alugado",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    ),
  },
  {
    title: "Mergulho com cilindro",
    desc: "Recife de Fora e Coroa Alta. Equipamento completo, instrutor PADI, lancha rápida e fotos subaquáticas inclusas. Batismo para iniciantes.",
    tag: "Alto mar",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Visita Aldeia Pataxó",
    desc: "Imersão cultural em Coroa Vermelha. Danças, pinturas, artesanato direto das artesãs e conversa com cacique. Guia indígena local.",
    tag: "Cultural",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
  },
  {
    title: "Lancha privativa & Chalana",
    desc: "Passeio de lancha exclusiva saindo de Arraial ou Caraiva. Som, churrasco a bordo opcional, paradas em ilhas e Recife de Fora.",
    tag: "Privativo",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z" />
    ),
  },
  {
    title: "Transfer aeroporto + motoristas",
    desc: "Nossa frota própria: vans executivas, SW4 4x4, buggys. Motoristas com Cadastur, uniformizados, que te buscam no hotel e te levam de volta todo dia.",
    tag: "Incluso",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
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
            {"//"} 03 — Experiências + Frota
          </p>
          <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white mb-4">
            Muito além da praia,
            <br />
            <span className="text-hollow-azure">é sobre viver.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-6 text-[15px] leading-relaxed">
            Jetski, quadriciclo, mergulho com cilindro, aldeias Pataxó, lancha privativa... Tudo com nossa equipe própria: motoristas, veículos, equipamentos e guias locais. Você fecha no WhatsApp e a gente resolve.
          </p>

          <div className="mb-12 grid sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="border border-tropic/20 bg-tropic/5 rounded-sm px-4 py-3 flex items-center gap-2.5">
              <span className="text-tropic">✔</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">Veículos próprios 4x4 & vans</span>
            </div>
            <div className="border border-tropic/20 bg-tropic/5 rounded-sm px-4 py-3 flex items-center gap-2.5">
              <span className="text-tropic">✔</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">Motoristas com Cadastur</span>
            </div>
            <div className="border border-tropic/20 bg-tropic/5 rounded-sm px-4 py-3 flex items-center gap-2.5">
              <span className="text-tropic">✔</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">Busca no hotel ida e volta</span>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <a
                href={wa(`Olá! Quero adicionar ${s.title} no meu pacote 🌴 Pode me mandar valores?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid grid-cols-[40px_48px_1fr] sm:grid-cols-[70px_56px_1fr_1.6fr_auto] items-start sm:items-center gap-3 sm:gap-8 py-6 sm:py-7 px-2 sm:px-5 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
              >
                <span className="font-display text-xl sm:text-2xl text-white/20 group-hover:text-tropic/50 transition-colors pt-1 sm:pt-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-11 h-11 sm:w-12 sm:h-12 border border-tropic/40 text-tropic flex items-center justify-center rounded-sm group-hover:bg-tropic group-hover:text-abyss group-hover:rotate-6 transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
                    {s.icon}
                  </svg>
                </span>
                <div className="sm:contents">
                  <div className="min-w-0">
                    <h3 className="font-display uppercase text-[18px] sm:text-[22px] text-white sm:group-hover:translate-x-1.5 transition-transform duration-300 leading-tight sm:leading-none break-words">
                      {s.title}
                    </h3>
                    <span className="mt-1 inline-block font-mono text-[9px] tracking-widest uppercase bg-white/10 border border-white/10 text-tropic px-2 py-0.5 rounded-full">{s.tag}</span>
                    <p className="sm:hidden mt-3 text-[13px] text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                  <p className="hidden sm:block text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-white/25 group-hover:text-tropic group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <svg className="absolute right-2 top-6 sm:hidden w-4 h-4 text-white/40 group-hover:text-tropic transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 p-6 sm:p-8 rounded-sm border border-tropic/20 bg-gradient-to-br from-tropic/10 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display uppercase text-2xl text-white leading-none">Quer fechar pacote com motorista exclusivo?</p>
              <p className="font-mono text-[11px] text-gray-400 uppercase tracking-widest mt-2">Van ou SW4 só pra sua família durante toda estadia + roteiro personalizado</p>
            </div>
            <a href={wa("Olá! Quero fechar pacote PREMIUM com motorista exclusivo + van/SW4 só pra minha família durante toda a estadia 🚐🌴")} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-tropic text-abyss font-bold px-6 py-3.5 hover:bg-white transition-colors">
              Pedir orçamento premium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
