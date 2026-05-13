import { Check } from "lucide-react";
const ServiceCard = () => {
  const Service = [
    {
      id: 1,
      badge: "Most Chosen",
      title: "Account Management",
      tagline: "We trade your account. You stay in control.",
      desc: "Limited power-of-attorney broker account. We execute with strict risk caps and report monthly — fully transparent.",
      points: [
        "Strict 1-2% risk per trade",
        "Profit-share, no upfront fees",
        "MT4 / MT5 compatible",
        "Monthly performance statements",
      ],
      cta: "Apply for management",
    },
    {
      id: 2,
      title: "Premium Signals",
      tagline: "High-conviction setups, surgically delivered.",
      desc: "Sniper entries, defined invalidation, and as clear thesis on every trade. You don't just copy — you understand.",
      points: [
        "10-15 curated signals / week",
        "Entry · Stop · Target · Rationale",
        "Telegram + email alerts",
        "Daily London + NY pre-session brief",
      ],
      cta: "Subscribe to signals",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2  col-span-12 gap-6">
      {Service.map((s) => (
        <div
          key={s.id}
          className={`group relative rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 flex gap-5 ${
            s.id === 1
              ? "bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/30 shadow-[0_0_30px_var(--color-primary-glow)]/20"
              : "border border-border hover:border-primary/30 bg-surface/50"
          }`}
        >
          {s.badge ? (
            <span className="text-xs uppercase text-primary bg-primary/10 border border-primary/40 inline-block py-0.5 px-2.5 rounded-full font-mono font-semibold tracking-[3px] absolute top-6 right-6">
              <span className="inline-block mr-2">★</span>
              {s.badge}
            </span>
          ) : (
            ""
          )}
          <span className="font-mono text-sm text-muted-fg">0{s.id}</span>
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-primary-foreground shadow-[0_0_40px_3px_var(--color-primary-glow)]/20 mb-6">
              {" "}
              {s.id === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5 text-black"
                  strokeWidth={3}
                >
                  <path d="M552 120C552 106.7 541.3 96 528 96C514.7 96 504 106.7 504 120L504 520C504 533.3 514.7 544 528 544C541.3 544 552 533.3 552 520L552 120zM424 192C410.7 192 400 202.7 400 216L400 520C400 533.3 410.7 544 424 544C437.3 544 448 533.3 448 520L448 216C448 202.7 437.3 192 424 192zM344 312C344 298.7 333.3 288 320 288C306.7 288 296 298.7 296 312L296 520C296 533.3 306.7 544 320 544C333.3 544 344 533.3 344 520L344 312zM216 384C202.7 384 192 394.7 192 408L192 520C192 533.3 202.7 544 216 544C229.3 544 240 533.3 240 520L240 408C240 394.7 229.3 384 216 384zM112 448C98.7 448 88 458.7 88 472L88 520C88 533.3 98.7 544 112 544C125.3 544 136 533.3 136 520L136 472C136 458.7 125.3 448 112 448z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase-icon lucide-briefcase text-black h-5 w-5"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              )}
            </div>
            <h3 className="text-3xl font-display mb-2">{s.title}</h3>
            <p className="text-sm text-primary mb-4">{s.tagline}</p>
            <p className="text-muted-fg mb-6">{s.desc}</p>
            <ul className="space-y-3 pb-9 border-b border-border mb-7">
              {s.points.map((point) => (
                <li
                  key={point}
                  className="text-sm text-foreground flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between flex-col items-start gap-4 lg:items-center lg:flex-row">
              <a
                href="#contact"
                className={`px-4 py-2 rounded-xl inline-block ${
                  s.id === 1 ? "btn-glow" : "btn-outline"
                }`}
              >
                {s.cta}
              </a>
              <span className="tracking-[3px] font-mono text-xs text-muted-fg uppercase hidden md:inline-block">
                by application
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
