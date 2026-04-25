const Process = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Get in Touch",
      desc: "Tell us about your goals, capital, and timeline. We'll recommend signals, management, or both.",
      duration: "~5 min",
    },
    {
      id: 2,
      title: "Onboard & Calibrate",
      desc: "Connect your broker, set risk limits, and we tune the strategy to your account size.",
      duration: "~24 hrs",
    },
    {
      id: 3,
      title: "Trade with Confidence",
      desc: "Receive signals or let us execute. Track every result on a transparent monthly statement.",
      duration: "Ongoing",
    },
  ];

  return (
    <section id="process" className="text-center py-20 md:py-28">
      <p className="title">§ Process</p>
      <h1 className="text-4xl md:text-6xl font-light font-display text-foreground mb-16">
        Three steps. <span className="italic text-primary">No friction.</span>
      </h1>
      <div className="flex flex-col md:flex-row rounded-3xl gap-px bg-border overflow-hidden">
        {cardInfo.map((card) => (
          <div
            key={card.id}
            className={`p-6 sm:p-8 md:p-10 text-left bg-surface-el`}
          >
            <div className="flex justify-between mb-8">
              <span className="text-primary font-mono text-sm">0{card.id}</span>
              <span className="text-muted-fg text-xs uppercase font-mono tracking-wide">
                {card.duration}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font text-foreground font-display mb-4">
              {card.title}
            </h2>
            <p className="text-muted-fg">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
