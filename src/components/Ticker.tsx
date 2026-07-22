const OFFERS = [
  "LISBOA A PARTIR DE R$ 4.290",
  "CANCÚN A PARTIR DE R$ 5.890",
  "TÓQUIO A PARTIR DE R$ 9.490",
  "ROMA A PARTIR DE R$ 5.190",
  "LIMA A PARTIR DE R$ 2.790",
  "CIDADE DO CABO A PARTIR DE R$ 6.390",
  "SANTIAGO A PARTIR DE R$ 2.490",
  "DUBAI A PARTIR DE R$ 7.990",
];

export default function Ticker() {
  const items = [...OFFERS, ...OFFERS];
  return (
    <div className="relative z-10 -mt-6 rotate-[-1.2deg] scale-x-105">
      <div className="bg-tropic border-y-2 border-abyss overflow-hidden">
        <div className="flex w-max animate-marquee py-3">
          {items.map((offer, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 font-display text-lg uppercase text-abyss whitespace-nowrap"
            >
              {offer}
              <svg className="w-4 h-4 text-abyss/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
