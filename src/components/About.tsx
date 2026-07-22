const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança",
    description: "Todas as transações são protegidas e trabalhamos apenas com fornecedores certificados.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Qualidade Premium",
    description: "Selecionamos apenas as melhores experiências em cada categoria de serviço e destino.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Melhor Preço",
    description: "Garantimos as tarifas mais competitivas do mercado com parcelamento em até 12x.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Suporte 24h",
    description: "Nossa equipe está disponível a qualquer momento via WhatsApp para ajudar no que precisar.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden border border-white/10" />
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tl from-green-600 to-green-800 overflow-hidden border border-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-bl from-blue-600 to-blue-900 overflow-hidden border border-white/10" />
                <div className="aspect-square rounded-2xl bg-gradient-to-tr from-green-600 to-blue-700 overflow-hidden border border-white/10" />
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-green-600/30">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-green-600/20 text-green-400 text-sm font-medium rounded-full">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Somos Apaixonados Por Viagens
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A HorizonTravel nasceu do sonho de tornar viagens incríveis acessíveis a todos. Há mais de 15 anos,
              conectamos pessoas aos destinos dos seus sonhos, sempre com atendimento humanizado e roteiros
              personalizados.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Nossa equipe é formada por consultores experientes que já visitaram os destinos que recomendam.
              Isso nos permite oferecer dicas reais e criar experiências autênticas para cada cliente.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                    <p className="text-gray-400 text-xs mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
