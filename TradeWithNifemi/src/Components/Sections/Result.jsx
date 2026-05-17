import { TrendingUp, Eye, ShieldCheck } from "lucide-react";
import PerformanceChart from "../UI/PerformanceChart";
import STATS from "../../data/stats";
import RECENT_TRADES from "../../data/recentTrades";

const Result = () => {
  // Prefer client's recent trades when available
  const tickets =
    RECENT_TRADES.length > 0
      ? RECENT_TRADES.map((t) => ({
          pair: t.pair,
          side: t.side,
          date: new Date(t.closedAt).toLocaleString(),
          profit: t.profit,
          loss: t.profit <= 0,
        }))
      : [
          {
            pair: "XAU/USD",
            side: "BUY",
            date: "May 2",
            pips: 284,
            loss: false,
          },
          {
            pair: "GBP/USD",
            side: "SELL",
            date: "May 1",
            pips: 156,
            loss: false,
          },
          {
            pair: "EUR/USD",
            side: "BUY",
            date: "Apr 30",
            pips: 142,
            loss: false,
          },
          {
            pair: "BTC/USD",
            side: "BUY",
            date: "Apr 29",
            pips: 520,
            loss: false,
          },
          {
            pair: "XAU/USD",
            side: "SELL",
            date: "Apr 28",
            pips: 98,
            loss: false,
          },
        ];

  return (
    <section id="results" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center gap-8 mb-12">
          <p className="title col-span-12">§ Track Record</p>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl tracking-tight col-span-12 lg:col-span-6">
            Numbers, <span className="italic text-primary">not narratives</span>
            .
          </h1>
          <p className="text-muted-fg md:text-lg col-span-12 lg:col-span-6 lg:ml-auto lg:max-w-lg">
            We don't post screenshots of impossible 10× weekends. We post the
            curve — wins, losses, drawdowns, and all.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 md:gap-6">
          <div className="lg:col-span-8">
            <PerformanceChart />

            <div className="mt-5 md:mt-6 grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { i: TrendingUp, k: STATS.avgMonthlyROI, v: "Avg monthly ROI" },
                { i: Eye, k: STATS.maxDrawdown, v: "Max drawdown" },
                { i: ShieldCheck, k: STATS.profitFactor, v: "Profit factor" },
              ].map((m) => (
                <div key={m.v} className="bg-surface/80 p-5">
                  <m.i className="h-4 w-4 text-primary mb-2" />
                  <div className="font-display text-2xl">{m.k}</div>
                  <div className="label text-muted-foreground mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent tickets */}
          <aside className="lg:col-span-4 glass-strong rounded-3xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="label text-muted-foreground">Recent closes</div>
                <div className="font-display text-xl mt-1">
                  Recent client trades
                </div>
              </div>
              <span className="chip">Verified</span>
            </div>
            <ul className="space-y-2.5 flex-1">
              {tickets.map((t, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`mono text-[10px] px-1.5 py-0.5 rounded ${
                        t.side === "BUY"
                          ? "bg-bull/15 text-bull"
                          : "bg-bear/15 text-bear"
                      }`}
                    >
                      {t.side}
                    </span>
                    <div>
                      <div className="font-medium text-sm">{t.pair}</div>
                      <div className="label text-muted-foreground">
                        {t.date}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`mono font-medium ${t.loss ? "text-bear" : "text-bull"}`}
                  >
                    {typeof t.profit !== "undefined"
                      ? `${t.profit > 0 ? "+" : ""}$${t.profit.toFixed(2)}`
                      : `${t.pips > 0 ? "+" : ""}${t.pips} pips`}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 label text-muted-foreground text-center">
              Past performance ≠ future results
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Result;
