import { Activity, Sparkle, TrendingUp } from "lucide-react";
import HeroChart from "../UI/HeroChart";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
    >
      <main className="pt-20 md:pt-28 lg:pt-36 lg:col-span-7">
        <div className="font-mono uppercase text-muted-fg flex text-[11px] tracking-widest items-center">
          <div className="text-primary flex items-center bg-primary/10 border border-primary/15 rounded-full px-3 mr-3 py-0.75 text-xs tracking-[3px] mb-4">
            <div className="relative flex items-center justify-center mr-1.5">
              <span className="p-[3px] bg-primary rounded-full "></span>
              <span className="p-[3px] bg-primary rounded-full ripple absolute"></span>
            </div>{" "}
            live{" "}
            <span className="ml-2 mr-2 w-[2.4px] h-[2.4px] inline-block bg-primary rounded-full"></span>{" "}
            london session
          </div>{" "}
          <span className="hidden md:inline-block mb-4">est. 2017</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extralight mb-6">
          <span className="text-gradient">Sniper entries.</span> <br />
          <span className="font-normal italic text-primary">Surgical</span>{" "}
          exits. <br />
          <span className="text-gradient">No noise.</span>
        </h1>
        <p className="text-muted-fg max-w-xl sm:text-lg mb-12">
          Premium forex signals and discretionary account management —
          engineered around a single rule:{" "}
          <span className="text-foreground">
            protect capital first, compound second.
          </span>
        </p>
        <div className="flex flex-col gap-2 sm:items-center sm:gap-3 sm:flex-row mb-12">
          <a
            href="#contact"
            className="btn-glow rounded-xl font-semibold px-8 py-4 flex items-center justify-between gap-2 max-w-fit"
          >
            Start trading{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-right-short size-5 -rotate-45"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="btn-outline rounded-xl font-semibold px-8 py-4 max-w-fit"
          >
            See how it works
          </a>
        </div>
        <div className="flex rounded-xl max-w-fit bg-linear-to-b from-surface to-surface-el">
          <div className="flex flex-col gap-2 p-4 pr-8 border-r border-border">
            <span className="font-mono tracking-[3px] text-muted-fg text-xs uppercase">
              win rate (ttm)
            </span>
            <span className="font-display text-2xl">90%</span>
          </div>{" "}
          <div className="flex flex-col gap-2 p-4 pr-8 border-r border-border">
            <span className="font-mono tracking-[3px] text-muted-fg text-xs uppercase">
              risk per trade
            </span>
            <span className="font-display text-2xl">1-2%</span>
          </div>{" "}
          <div className="flex flex-col gap-2 p-4 pr-8">
            <span className="font-mono tracking-[3px] text-muted-fg text-xs uppercase">
              traders served
            </span>
            <span className="font-display text-2xl">5000+</span>
          </div>
        </div>
      </main>
      <aside className="lg:col-span-5 relative animate-fade-up delay-200 px-2 sm:px-0">
        <div className="absolute -inset-10 bg-gradient-glow blur-3xl opacity-50 -z-10" />

        {/* Main chart card */}
        <div className="glass-strong rounded-3xl p-6 shadow-elevated animate-float">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="label text-muted-foreground flex items-center gap-2">
                <Activity className="h-3 w-3" /> Equity · 30 days
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-3xl">+12.4%</span>
                <span className="mono text-xs text-bull">▲ 184 pips</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="chip">
                <Sparkle className="h-3 w-3" /> Lead: Nifemi
              </span>
              <span className="label text-muted-foreground mt-2">
                7+ yrs · FX & Gold
              </span>
            </div>
          </div>

          <div className="h-44">
            <HeroChart />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px bg-border/60 rounded-xl overflow-hidden">
            {[
              { k: "78%", l: "Win" },
              { k: "2.4", l: "PF" },
              { k: "−4%", l: "DD" },
            ].map((m) => (
              <div key={m.l} className="bg-surface px-3 py-2.5 text-center">
                <div className="mono text-sm font-medium">{m.k}</div>
                <div className="label text-muted-foreground text-[10px]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating signal ticket */}
        <div
          className="absolute -top-4 left-0 sm:-left-4 md:-left-6 z-20 glass-strong rounded-2xl px-3 sm:px-4 py-3 shadow-card animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="label text-muted-foreground">Signal · 14:32 GMT</div>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-display text-lg">XAU/USD</span>
            <span className="mono text-[10px] px-1.5 py-0.5 rounded bg-bull/15 text-bull">
              BUY
            </span>
          </div>
          <div className="mono text-[11px] text-muted-foreground mt-0.5">
            E 2,338 · SL 2,332 · TP 2,358
          </div>
        </div>

        {/* Closed trade ticket */}
        <div className="absolute -bottom-5 -right-4 z-20 glass-strong rounded-2xl px-4 py-3 shadow-card hidden sm:block">
          <div className="label text-muted-foreground flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3 text-bull" /> Closed
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-lg text-bull">+138 pips</span>
            <span className="mono text-[10px] text-muted-foreground">
              EUR/USD
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
