import RECENT_TRADES from "../../data/recentTrades";

const HeroChart = () => {
  const w = 480;
  const h = 240;
  const pts = [
    10, 28, 22, 44, 36, 58, 50, 72, 66, 88, 82, 104, 98, 120, 114, 138, 132,
    156, 168, 162, 184,
  ];
  const max = Math.max(...pts);
  const stepX = w / (pts.length - 1);
  const path = pts
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / max) * (h - 30) - 15}`,
    )
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  const lastY = h - (pts[pts.length - 1] / max) * (h - 30) - 15;

  const totalRecent =
    RECENT_TRADES && RECENT_TRADES.length > 0
      ? RECENT_TRADES.reduce((s, t) => s + t.profit, 0)
      : 0;
  const lastTrade =
    RECENT_TRADES && RECENT_TRADES.length > 0
      ? RECENT_TRADES[RECENT_TRADES.length - 1]
      : null;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            x2={w}
            y1={(h / 4) * i + 10}
            y2={(h / 4) * i + 10}
            stroke="var(--border)"
            strokeDasharray="2 5"
          />
        ))}

        <path d={area} fill="url(#heroGrad)" />
        <path
          d={path}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
          style={{ filter: "drop-shadow(0 0 6px var(--primary) / 0.7))" }}
        />
        <circle
          cx={w}
          cy={lastY}
          r="4"
          fill="var(--primary)"
          className="animate-pulse-glow"
        />
      </svg>

      {lastTrade && (
        <div className="absolute left-4 bottom-2 bg-black/40 text-white rounded-md px-3 py-2 text-xs">
          <div className="font-medium">{`${lastTrade.side} ${lastTrade.pair} · ${lastTrade.size} lot`}</div>
          <div className="text-muted-foreground">
            P/L:{" "}
            {lastTrade.profit > 0
              ? `+${lastTrade.profit}$`
              : `${lastTrade.profit}$`}{" "}
            · SL {lastTrade.sl} · TP {lastTrade.tp}
          </div>
        </div>
      )}

      {!lastTrade && totalRecent !== 0 && (
        <div className="absolute left-4 bottom-2 bg-black/40 text-white rounded-md px-3 py-2 text-xs">
          Total recent profit: {totalRecent}$
        </div>
      )}
    </div>
  );
};

export default HeroChart;
