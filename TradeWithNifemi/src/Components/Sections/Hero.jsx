const Hero = () => {
  return (
    <section id="hero">
      <main className="mt-24">
        <div className="font-mono uppercase text-muted-fg flex text-[11px] tracking-widest items-center">
          <div className="text-primary flex items-center bg-primary/10 border border-primary/15 rounded-full px-3 mr-3 py-0.75 text-xs tracking-[3px]">
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
        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extralight">
          <span className="text-gradient">Sniper entries.</span> <br />
          <span className="font-normal italic text-primary">Surgical</span>{" "}
          exits. <br />
          <span className="text-gradient">No noise.</span>
        </h1>
      </main>
    </section>
  );
};

export default Hero;
