import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 8, suffix: "", label: "anos em Porto Seguro" },
  { value: 2800, suffix: "+", label: "famílias atendidas por ano" },
  { value: 4, suffix: " destinos base", label: "Arraial · Trancoso · Caraiva · Coroa" },
  { value: 100, suffix: "%", label: "equipe local + motoristas próprios" },
];

export default function Stats() {
  return (
    <section className="bg-abyss border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={
                "border-dashed border-white/15 " +
                (i > 0 && i % 2 !== 0 ? "border-l " : "") +
                (i >= 2 ? "border-t sm:border-t-0 " : "") +
                (i >= 2 && i % 2 === 0 ? "sm:border-l " : "")
              }
            >
              <div className="py-10 sm:py-12 px-4 sm:px-10">
                <div className="font-display text-4xl sm:text-5xl text-tropic leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 font-mono text-[9.5px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-gray-400 leading-relaxed">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
