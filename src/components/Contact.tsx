import { useState } from "react";
import Reveal from "./Reveal";
import { wa, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, EMAIL } from "../data/site";

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const DESTINATION_OPTIONS = [
  "Quero pacote completo: Arraial + Trancoso + Caraiva + Coroa Vermelha",
  "Arraial d'Ajuda",
  "Trancoso - Quadrado e Praia do Espelho",
  "Caraiva - com buggy/quadriciclo",
  "Coroa Vermelha + Aldeia Pataxó",
  "Recife de Fora - Mergulho com cilindro",
  "Jetski e lancha privativa",
  "Ainda não sei - me ajudem a montar",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: DESTINATION_OPTIONS[0],
    month: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.name} 🌴`,
      `📍 Interesse: ${form.destination}`,
      form.month ? `📅 Mês da viagem: ${form.month}` : "",
      form.phone ? `📱 Meu whats: ${form.phone}` : "",
      form.message ? `✏️ Detalhes: ${form.message}` : "",
      "Quero fechar pacote com busca no hotel + guia local! ✈️",
    ].filter(Boolean);
    window.open(wa(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full bg-white border border-abyss/15 rounded-sm px-3.5 py-3 text-sm text-abyss placeholder:text-abyss/35 outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all";

  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-abyss overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute top-1/4 left-[-10%] w-[380px] h-[380px] rounded-full bg-ocean/25 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — info */}
          <Reveal>
            <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-tropic uppercase mb-3">
              {"//"} 05 — Contato direto
            </p>
            <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-white mb-6">
              Bora fechar seu
              <br />
              <span className="text-hollow-azure">pacote no zap?</span>
            </h2>
            <p className="text-gray-300 max-w-lg mb-8 leading-relaxed">
              Somos agência 100% local em Porto Seguro. Nada de call center. Você fala direto com quem vai te buscar no aeroporto e te levar pra Arraial, Trancoso, Caraiva e Coroa Vermelha. Resposta em minutos.
            </p>

            <div className="space-y-4">
              <a
                href={wa("Olá! Quero fechar meu pacote em Porto Seguro 🌴✈️")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 border border-tropic/50 bg-tropic/10 rounded-sm hover:bg-tropic/20 hover:border-tropic transition-all duration-300"
              >
                <span className="w-14 h-14 bg-tropic text-abyss flex items-center justify-center rounded-sm group-hover:rotate-6 transition-transform duration-300 shrink-0">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block font-display uppercase text-xl text-white">WhatsApp direto com guia</span>
                  <span className="block font-mono text-xs text-tropic tracking-wider">
                    {WHATSAPP_DISPLAY} · online agora - resposta em minutos
                  </span>
                </span>
                <svg className="w-5 h-5 text-gray-500 group-hover:text-tropic group-hover:translate-x-1.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-5 p-5 border border-white/15 rounded-sm hover:border-azure transition-all duration-300"
              >
                <span className="w-14 h-14 border border-azure/50 text-azure flex items-center justify-center rounded-sm group-hover:bg-azure group-hover:text-white transition-all duration-300 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block font-display uppercase text-xl text-white">E-mail</span>
                  <span className="block font-mono text-xs text-gray-400 tracking-wider">{EMAIL}</span>
                </span>
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/15 rounded-sm">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">Base local</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Av. Beira Mar, 1000 · Arraial d'Ajuda
                    <br />
                    Porto Seguro — BA · Costa do Descobrimento
                  </p>
                </div>
                <div className="p-5 border border-white/15 rounded-sm">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">Horário & Frota</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Seg–Dom · 7h às 22h
                    <br />
                    <span className="text-tropic">Vans, SW4 4x4, buggy, jetski</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — boarding-pass form */}
          <Reveal delay={140}>
            <form
              onSubmit={handleSubmit}
              className="relative bg-mint text-abyss rounded-sm shadow-2xl shadow-black/50 rotate-[0.6deg] hover:rotate-0 transition-transform duration-500"
            >
              <div className="px-6 sm:px-9 pt-7 pb-5 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg tracking-wide">
                    MERIDIANO<span className="text-ocean"> TOUR</span>
                  </p>
                  <p className="font-mono text-[9px] font-bold tracking-[0.22em] text-ocean uppercase">
                    Reserva de pacote - Costa do Descobrimento
                  </p>
                </div>
                <span className="font-mono text-[10px] font-bold text-abyss/50">BPS·{new Date().getFullYear()}</span>
              </div>

              <div className="relative border-t-2 border-dashed border-abyss/25">
                <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-abyss" />
                <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-abyss" />
              </div>

              <div className="px-6 sm:px-9 py-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-abyss/60 mb-2">
                      Nome*
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Como podemos te chamar?"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-abyss/60 mb-2">
                      WhatsApp*
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(73) 98888-8888"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-dest" className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-abyss/60 mb-2">
                      Pacote desejado
                    </label>
                    <select
                      id="c-dest"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className={inputCls}
                    >
                      {DESTINATION_OPTIONS.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-month" className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-abyss/60 mb-2">
                      Mês da viagem
                    </label>
                    <select
                      id="c-month"
                      value={form.month}
                      onChange={(e) => setForm({ ...form, month: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Ainda não decidi</option>
                      {MONTHS.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-abyss/60 mb-2">
                    Detalhes
                  </label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Quantas pessoas? Já tem hotel? Quer adicionar jetski, quadriciclo, mergulho?"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-abyss text-tropic font-bold uppercase tracking-[0.14em] text-sm py-4 rounded-sm hover:bg-ocean hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Fechar pacote no WhatsApp
                  <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                <p className="font-mono text-[9px] tracking-[0.14em] text-abyss/45 uppercase text-center">
                  * vai direto pro WhatsApp ({WHATSAPP_NUMBER}) - sem spam, atendimento humano local
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
