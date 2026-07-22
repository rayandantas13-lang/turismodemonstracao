import Reveal from "./Reveal";
import { wa } from "../data/site";
import frotaCaminhonetes from "../assets/frota-caminhonetes-4x4.png";
import jetskiQuadriciclo from "../assets/jetski-quadriciclo.png";

const ITEMS = [
  {
    title: "Motoristas locais",
    desc: "Equipe fixa, Cadastur, uniformizada. Conhecem atalho, maré, restaurante bom e barato. Viram amigos da família.",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700",
    badge: "Equipe própria",
  },
  {
    title: "Frota 4x4 & Vans executivas",
    desc: "SW4, Hilux, vans com ar, som bluetooth, seguro total. Cadeirinha baby se precisar. Lavadas todo dia.",
    img: frotaCaminhonetes,
    badge: "Veículos novos",
  },
  {
    title: "Jetski · Buggy · Quadriciclo",
    desc: "Jetski Yamaha 2024, quadriciclo automático 4x4, buggys com motorista. Colete, briefing e guia o tempo todo.",
    img: jetskiQuadriciclo,
    badge: "Aventura segura",
  },
];

export default function Fleet() {
  return (
    <section className="relative py-20 sm:py-28 bg-abyss border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-tropic uppercase mb-3">
                {"//"} Extra — Frota & Equipe
              </p>
              <h2 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95] text-white">
                Motorista, veículo e guia:
                <br />
                <span className="text-hollow-azure">tudo nosso</span>
              </h2>
            </div>
            <a href={wa("Olá! Quero fechar pacote com motorista + veículo exclusivo só pra minha família 🚐")} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] font-bold uppercase tracking-widest border border-white/20 rounded-full px-5 py-3 text-white hover:border-tropic hover:text-tropic transition-colors">Ver pacotes premium →</a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-deep">
                <div className="relative h-[200px] overflow-hidden">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep to-transparent" />
                  <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-tropic text-abyss px-2.5 py-1 rounded-full font-bold">{it.badge}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display uppercase text-[22px] text-white leading-none">{it.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-gray-400">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 grid lg:grid-cols-4 gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-3 bg-white/5">
              <span className="w-2 h-2 bg-tropic rounded-full animate-pulse" /> Busca no aeroporto BPS inclusa
            </div>
            <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-3 bg-white/5">
              <span className="w-2 h-2 bg-tropic rounded-full animate-pulse" /> Busca no hotel todo dia + volta
            </div>
            <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-3 bg-white/5">
              <span className="w-2 h-2 bg-tropic rounded-full animate-pulse" /> Guia local durante toda estadia
            </div>
            <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-3 bg-white/5">
              <span className="w-2 h-2 bg-tropic rounded-full animate-pulse" /> Fecha tudo no WhatsApp · Pix ou cartão
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
