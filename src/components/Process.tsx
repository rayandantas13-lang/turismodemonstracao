import Reveal from "./Reveal";
import { wa, DEFAULT_MSG } from "../data/site";

const STEPS = [
  {
    n: "01",
    title: "Chama no WhatsApp",
    desc: "Manda as datas, hotel e quantas pessoas. Em minutos te respondemos com roteiro - sem robozão, é equipe local.",
    icon: "💬",
  },
  {
    n: "02",
    title: "Fecha o pacote com passeios",
    desc: "Arraial, Trancoso, Caraiva, Coroa Vermelha... você escolhe. Montamos pacote fechado com valores e o que está incluso em cada dia.",
    icon: "🗺️",
  },
  {
    n: "03",
    title: "Buscamos no aeroporto & hotel",
    desc: "Chegou em Porto Seguro? Nosso motorista te busca no BPS com plaquinha. Todos os dias buscamos no hotel e devolvemos no fim do passeio.",
    icon: "🚐",
  },
  {
    n: "04",
    title: "Seu guia durante toda a estadia",
    desc: "Vira da família! Guia local 24h no WhatsApp, dicas de restaurante, passeio extra de jetski, quadriciclo, mergulho - tudo com nossa equipe.",
    icon: "🌴",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="relative bg-mint text-abyss py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-ocean uppercase mb-3">
                {"//"} 02 — Como funciona
              </p>
              <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95]">
                Do aeroporto
                <br />
                <span className="text-hollow-dark">ao paraíso em 4 passos</span>
              </h2>
              <p className="mt-4 text-abyss/60 max-w-xl text-[15px] leading-relaxed">
                Somos agência local, não marketplace. Você fala direto com quem vai te guiar em Arraial, Trancoso, Caraiva e Coroa Vermelha.
              </p>
            </div>
            <a
              href={wa(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] uppercase border-2 border-abyss px-5 py-3 rounded-full hover:bg-abyss hover:text-tropic transition-all duration-300"
            >
              Fechar pacote agora ✈
            </a>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[6%] right-[6%] border-t-2 border-dashed border-abyss/25">
            <span className="plane-run -top-[11px] text-ocean">
              <svg className="w-[34px] h-[34px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group">
                  <div className="w-20 h-20 relative bg-abyss text-tropic flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 group-hover:bg-ocean group-hover:text-white transition-all duration-500">
                    <span className="font-display text-3xl">{s.n}</span>
                  </div>
                  <h3 className="mt-6 font-display uppercase text-[22px] leading-none flex items-center gap-2">
                    <span>{s.icon}</span> {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-abyss/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 grid sm:grid-cols-3 gap-4 border-t-2 border-dashed border-abyss/15 pt-10">
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-abyss text-sm uppercase tracking-wide">Busca no hotel inclusa</p>
                  <p className="font-mono text-[11px] text-abyss/60 mt-1">Todos os passeios. Sem taxa extra.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-abyss text-sm uppercase tracking-wide">Motoristas próprios</p>
                  <p className="font-mono text-[11px] text-abyss/60 mt-1">Vans e 4x4 novos, ar e seguro.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-abyss text-sm uppercase tracking-wide">Pagamento no WhatsApp</p>
                  <p className="font-mono text-[11px] text-abyss/60 mt-1">Pix, cartão até 12x, sem burocracia.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
