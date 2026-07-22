import { useState } from "react";
import Reveal from "./Reveal";
import { wa } from "../data/site";

type Cat = "todos" | "brasil" | "praia" | "aventura" | "internacional";

const DESTINATIONS = [
  {
    name: "Nepal",
    place: "Trilha do Everest Base Camp",
    cat: "aventura" as Cat,
    price: "R$ 14.990",
    days: "12 dias",
    img: "https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
  },
  {
    name: "Maldivas",
    place: "Atol de Malé · all inclusive",
    cat: "praia" as Cat,
    price: "R$ 13.490",
    days: "8 dias",
    img: "https://images.pexels.com/photos/1450355/pexels-photo-1450355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Fernando de Noronha",
    place: "Pernambuco · Brasil",
    cat: "brasil" as Cat,
    price: "R$ 6.890",
    days: "6 dias",
    img: "https://images.pexels.com/photos/16156054/pexels-photo-16156054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Patagônia",
    place: "El Chaltén · Torres del Paine",
    cat: "aventura" as Cat,
    price: "R$ 9.990",
    days: "10 dias",
    img: "https://images.pexels.com/photos/25252018/pexels-photo-25252018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200",
  },
  {
    name: "Marrocos",
    place: "Deserto do Saara · caravana",
    cat: "aventura" as Cat,
    price: "R$ 8.790",
    days: "9 dias",
    img: "https://images.pexels.com/photos/17877123/pexels-photo-17877123.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Singapura",
    place: "Marina Bay · city tour",
    cat: "internacional" as Cat,
    price: "R$ 11.290",
    days: "8 dias",
    img: "https://images.pexels.com/photos/3914755/pexels-photo-3914755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Chapada Diamantina",
    place: "Bahia · Brasil",
    cat: "brasil" as Cat,
    price: "R$ 3.990",
    days: "5 dias",
    img: "https://images.pexels.com/photos/14207596/pexels-photo-14207596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Bali",
    place: "Indonésia · praias & templos",
    cat: "praia" as Cat,
    price: "R$ 10.490",
    days: "10 dias",
    img: "https://images.pexels.com/photos/33549425/pexels-photo-33549425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Kuala Lumpur",
    place: "Malásia · Petronas Towers",
    cat: "internacional" as Cat,
    price: "R$ 9.490",
    days: "8 dias",
    img: "https://images.pexels.com/photos/433942/pexels-photo-433942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
  {
    name: "Maragogi",
    place: "Alagoas · piscinas naturais",
    cat: "brasil" as Cat,
    price: "R$ 3.490",
    days: "5 dias",
    img: "https://images.pexels.com/photos/5007562/pexels-photo-5007562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
  },
];

const TABS: { label: string; value: Cat }[] = [
  { label: "Todos", value: "todos" },
  { label: "Brasil", value: "brasil" },
  { label: "Praia", value: "praia" },
  { label: "Aventura", value: "aventura" },
  { label: "Internacional", value: "internacional" },
];

// bento pattern: featured (2x2), small, small, wide (2x1), small...
const SIZES = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "",
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
                {"//"} 01 — Destinos
              </p>
              <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white">
                Roteiros <span className="text-hollow-tropic">em alta</span>
              </h2>
            </div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-gray-500 uppercase">
              {String(DESTINATIONS.length).padStart(2, "0")} roteiros no catálogo
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

        <div key={cat} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] sm:auto-rows-[260px]">
          {list.map((d, i) => (
            <a
              key={d.name}
              href={wa(`Olá! Tenho interesse no roteiro para ${d.name} (${d.days}). Pode me passar mais detalhes?`)}
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
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-transparent" />

              <span className="absolute top-3 left-3 font-mono text-[9px] font-bold tracking-[0.18em] uppercase bg-abyss/75 border border-white/15 text-tropic px-2.5 py-1 rounded-full">
                {d.cat}
              </span>
              <span className="absolute top-2 right-3 font-display text-2xl text-white/25 group-hover:text-tropic/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display uppercase text-2xl sm:text-3xl text-white leading-none">
                  {d.name}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-gray-300">
                  {d.place} · {d.days}
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <span className="block font-mono text-[9px] tracking-[0.16em] uppercase text-gray-400">
                      a partir de
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
          <p className="mt-6 font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
            * valores por pessoa, saída de São Paulo — sujeitos à disponibilidade.{" "}
            <a
              href={wa("Olá! Não encontrei meu destino no site. Podemos montar um roteiro diferente?")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tropic underline underline-offset-4 hover:text-azure transition-colors"
            >
              Não achou seu destino? Chama no WhatsApp →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
