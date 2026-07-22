import { useState } from "react";
import Reveal from "./Reveal";
import { wa, DESTINATIONS_MSG } from "../data/site";

type Cat = "todos" | "praias" | "aventura" | "cultural";

const DESTINATIONS = [
  {
    name: "Arraial d'Ajuda",
    place: "Porto Seguro · distrito mais charmoso",
    cat: "praias" as Cat,
    badge: "Mais pedido",
    price: "a partir de R$ 180",
    days: "bate-volta / full day",
    desc: "Ruas de pedra, Praia do Mucugê, Pitinga e Lagoa Azul. Balsa + van com ar + guia te esperando no hotel.",
    highlights: ["Mucugê & Pitinga", "Lagoa Azul", "Rua do Mucugê"],
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    name: "Trancoso",
    place: "Quadrado · Praia do Espelho · Rio dos Frades",
    cat: "praias" as Cat,
    badge: "Instagramável",
    price: "a partir de R$ 250",
    days: "full day com 4x4",
    desc: "O Quadrado mais famoso do Brasil + Praia do Espelho. Veículo 4x4, motorista local e parada para fotos.",
    highlights: ["Quadrado", "Praia do Espelho", "Mirantes"],
    img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    name: "Caraiva",
    place: "Vila sem carros · Rio + Mar",
    cat: "aventura" as Cat,
    badge: "Experiência raiz",
    price: "a partir de R$ 320",
    days: "full day - buggy / jetski opcional",
    desc: "Travessia de canoa no Rio Caraiva, ruas de areia, forró e por do sol inesquecível. Pacote com buggy e quadriciclo.",
    highlights: ["Travessia de canoa", "Por do sol no rio", "Buggy & Quadriciclo"],
    img: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    name: "Coroa Vermelha",
    place: "Berço do Brasil · Aldeia Pataxó",
    cat: "cultural" as Cat,
    badge: "História viva",
    price: "a partir de R$ 150",
    days: "meio período / full day",
    desc: "Onde o Brasil começou. Museu a céu aberto, feirinha de artesanato e imersão na Aldeia Indígena Pataxó.",
    highlights: ["Aldeia Pataxó", "Cruz da Primeira Missa", "Feira de artesanato"],
    img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    name: "Recife de Fora",
    place: "Mergulho de cilindro · Piscinas naturais",
    cat: "aventura" as Cat,
    badge: "Mergulho",
    price: "a partir de R$ 220",
    days: "meio período",
    desc: "Mergulho em alto mar com cilindro, lancha, equipamento e instrutor. Segundo maior recife da América Latina.",
    highlights: ["Mergulho cilindro", "Lancha", "Fotos sub inclusas"],
    img: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Praia do Espelho & Curuípe",
    place: "Trancoso · eleita mais bonita do Brasil",
    cat: "praias" as Cat,
    badge: "Premium",
    price: "a partir de R$ 280",
    days: "full day premium",
    desc: "Falésias coloridas e mar espelhado. Roteiro premium com parada no Espelho + Curuípe, 4x4 exclusivo.",
    highlights: ["Falésias", "Mar cristalino", "Beach club"],
    img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
];

const TABS: { label: string; value: Cat }[] = [
  { label: "Todos", value: "todos" },
  { label: "Praias paradisíacas", value: "praias" },
  { label: "Aventura", value: "aventura" },
  { label: "Cultural", value: "cultural" },
];

const SIZES = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
];

export default function Destinations() {
  const [cat, setCat] = useState<Cat>("todos");
  const list = cat === "todos" ? DESTINATIONS : DESTINATIONS.filter((d) => d.cat === cat);

  return (
    <section id="destinos" className="relative py-24 sm:py-32 bg-abyss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-tropic uppercase mb-3">
                {"//"} 01 — Destinos locais
              </p>
              <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white">
                Costa do <span className="text-hollow-tropic">Descobrimento</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl text-[15px] leading-relaxed">
                Somos de Porto Seguro. Conhecemos cada atalho, cada maré e o melhor horário pra você pegar a praia vazia. Pacotes fechados com passeios diários + translado hotel incluso.
              </p>
            </div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-gray-500 uppercase">
              04 destinos principais + experiências extras
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {TABS.map((t) => (
              <button
                key={t.value}
                onClick={() => setCat(t.value)}
                className={`font-mono text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  cat === t.value
                    ? "bg-tropic text-abyss border-tropic"
                    : "border-white/20 text-gray-300 hover:border-azure hover:text-azure"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={cat} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px] sm:auto-rows-[300px]">
          {list.map((d, i) => (
            <a
              key={d.name}
              href={wa(DESTINATIONS_MSG[d.name] ?? `Olá! Quero fazer o passeio para ${d.name} 🌴`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-sm border border-white/10 hover:border-tropic/60 fade-slide ${SIZES[i] ?? ""}`}
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-abyss/10" />

              <span className="absolute top-3 left-3 font-mono text-[9px] font-bold tracking-[0.18em] uppercase bg-tropic text-abyss px-2.5 py-1 rounded-full">
                {d.badge}
              </span>
              <span className="absolute top-3 right-3 font-mono text-[9px] font-bold tracking-[0.18em] uppercase bg-abyss/75 border border-white/15 text-tropic px-2.5 py-1 rounded-full">
                {d.cat}
              </span>
              <span className="absolute top-10 right-3 font-display text-2xl text-white/20 group-hover:text-tropic/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display uppercase text-[26px] sm:text-[32px] text-white leading-[0.95]">
                  {d.name}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-gray-200">
                  {d.place}
                </p>
                <p className="mt-3 text-[13px] text-gray-300 leading-snug line-clamp-2">
                  {d.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.highlights.map(h => (
                    <span key={h} className="font-mono text-[9px] uppercase tracking-widest border border-white/20 bg-white/5 text-white/80 px-2 py-1 rounded-full">{h}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="block font-mono text-[9px] tracking-[0.16em] uppercase text-gray-400">
                      {d.days}
                    </span>
                    <span className="font-display text-xl text-tropic">{d.price}</span>
                  </div>
                  <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-tropic group-hover:border-tropic group-hover:text-abyss group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-4">
            <div className="border border-tropic/20 bg-tropic/5 rounded-sm p-5 flex gap-4">
              <span className="w-10 h-10 rounded-full bg-tropic text-abyss flex items-center justify-center shrink-0 font-display text-xl">!</span>
              <div>
                <p className="font-bold text-white text-sm">Todos os passeios incluem busca no hotel e volta no fim do dia</p>
                <p className="font-mono text-[11px] text-gray-400 mt-1 leading-relaxed">Motoristas próprios, vans com ar-condicionado, 4x4 legalizado, guia local credenciado. Você não se preocupa com nada — só curte.</p>
              </div>
            </div>
            <a href={wa("Olá! Quero fechar um pacote completo com Arraial + Trancoso + Caraiva + Coroa Vermelha 🌴 Qual o melhor valor fechando tudo?")} target="_blank" rel="noopener noreferrer" className="group border border-white/15 rounded-sm p-5 hover:border-tropic transition-colors flex items-center justify-between">
              <div>
                <p className="font-display uppercase text-xl text-white">Pacote 4 dias completo</p>
                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">Mais econômico - fecha tudo de uma vez</p>
              </div>
              <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-tropic group-hover:text-abyss transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
