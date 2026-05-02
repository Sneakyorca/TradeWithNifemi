import { useEffect, useRef, useState } from "react";

const seed = [
  { pair: "EUR/USD", price: "1.0842", change: 0.18 },
  { pair: "GBP/USD", price: "1.2671", change: -0.22 },
  { pair: "USD/JPY", price: "151.34", change: 0.41 },
  { pair: "XAU/USD", price: "2,341.20", change: 0.86 },
  { pair: "AUD/USD", price: "0.6584", change: -0.11 },
  { pair: "USD/CAD", price: "1.3712", change: 0.05 },
  { pair: "NZD/USD", price: "0.5961", change: -0.34 },
  { pair: "EUR/GBP", price: "0.8556", change: 0.12 },
  { pair: "BTC/USD", price: "67,420", change: 1.42 },
  { pair: "USD/CHF", price: "0.9054", change: -0.07 },
];

const Ticker = () => {
  const [ticks, setTicks] = useState(seed);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTicks((prev) =>
        prev.map((t) => {
          const drift = (Math.random() - 0.5) * 0.06;
          return { ...t, change: +(t.change + drift).toFixed(2) };
        }),
      );
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const row = (key) => (
    <div key={key} className="flex items-center shrink-0">
      {ticks.map((t, i) => (
        <div
          key={`${key}-${i}`}
          className="flex items-center gap-2.5 px-6 border-r border-border/60"
        >
          <span className="label text-muted-foreground">{t.pair}</span>
          <span className="mono text-sm font-medium tabular-nums">
            {t.price}
          </span>
          <span
            className={`mono text-xs tabular-nums ${
              t.change >= 0 ? "text-bull" : "text-bear"
            }`}
          >
            {t.change >= 0 ? "▲" : "▼"} {Math.abs(t.change).toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-surface/40 mt-16 py-3 ticker-mask">
      <div ref={ref} className="flex animate-marquee w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
};

export default Ticker;
