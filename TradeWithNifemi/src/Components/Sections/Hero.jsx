const Hero = () => {
  return (
    <section id="hero">
      <main className="pt-20 md:pt-28 lg:pt-36">
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
          <span className="hidden md:inline">est. 2017</span>
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
          <button className="btn-glow rounded-xl font-semibold px-8 py-4 flex items-center justify-between gap-2 max-w-fit">
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
          </button>
          <button className="btn-outline rounded-xl font-semibold px-8 py-4 max-w-fit">
            See how it works
          </button>
        </div>
        <div className="flex rounded-xl max-w-fit bg-gradient-to-b from-surface to-surface-el">
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
    </section>
  );
};

export default Hero;
