import { useEffect, useRef, useState } from "react";

const points = [
  0, 12, 8, 22, 18, 30, 26, 38, 32, 48, 44, 56, 52, 68, 64, 78, 86, 80, 95, 102,
  98, 115, 122, 118, 134, 142,
];

const months = [
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
];

const PerformanceChart = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const w = 600;
  const h = 220;
  const max = Math.max(...points);
  const stepX = w / (points.length - 1);
  const path = points
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / max) * (h - 20) - 10}`,
    )
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div
      ref={ref}
      className="glass-strong rounded-3xl p-6 md:p-8 shadow-elevated"
    >
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="label text-muted-foreground">
            Equity curve · 12 months
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-4xl">+68.4%</span>
            <span className="mono text-sm text-bull">▲ 5.8% MoM avg</span>
          </div>
        </div>
        <div className="hidden sm:flex gap-1.5">
          {["1M", "3M", "6M", "1Y"].map((t, i) => (
            <span
              key={t}
              className={`label px-2.5 py-1 rounded-md ${
                i === 3 ? "bg-primary/15 text-primary" : "text-muted-foreground"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* grid */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              x2={w}
              y1={(h / 4) * i + 10}
              y2={(h / 4) * i + 10}
              stroke="hsl(var(--border))"
              strokeDasharray="2 4"
            />
          ))}

          <path
            d={area}
            fill="url(#g)"
            opacity={visible ? 1 : 0}
            style={{ transition: "opacity 1.5s" }}
          />
          <path
            d={path}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={visible ? "animate-draw" : ""}
            style={{ filter: "drop-shadow(0 0 8px var(--primary) / 0.6)" }}
          />

          {/* end dot */}
          {visible && (
            <circle
              cx={w}
              cy={h - (points[points.length - 1] / max) * (h - 20) - 10}
              r="5"
              fill="var(--primary)"
              className="animate-pulse-glow"
            />
          )}
        </svg>

        <div className="flex justify-between mt-3 label text-muted-foreground">
          {months.map((m) => (
            <span key={m} className="hidden sm:inline">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
