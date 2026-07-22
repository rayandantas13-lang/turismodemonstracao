import Reveal from "./Reveal";
import { wa, DEFAULT_MSG } from "../data/site";

const STEPS = [
  {
    n: "01",
    title: "Chama no WhatsApp",
    desc: "Conte pra gente o destino, as datas e o orçamento. Nada de formulário gigante — é uma conversa.",
  },
  {
    n: "02",
    title: "Roteiro sob medida",
    desc: "Em até 48h você recebe uma proposta personalizada com voos, hospedagem e experiências.",
  },
  {
    n: "03",
    title: "Confirme & relaxe",
    desc: "A gente reserva tudo: passagens, hotel, seguro, translados e passeios. Parcelamos em até 12x.",
  },
  {
    n: "04",
    title: "Embarque",
    desc: "Viaje com suporte 24h em português. Qualquer imprevisto, estamos a uma mensagem de distância.",
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
                Do sonho ao embarque
                <br />
                <span className="text-hollow-dark">em 4 passos</span>
              </h2>
            </div>
            <a
              href={wa(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] uppercase border-2 border-abyss px-5 py-3 rounded-full hover:bg-abyss hover:text-tropic transition-all duration-300"
            >
              Começar agora ✈
            </a>
          </div>
        </Reveal>

        <div className="relative">
          {/* route line with running plane */}
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
                  <h3 className="mt-6 font-display uppercase text-2xl leading-none">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-abyss/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
