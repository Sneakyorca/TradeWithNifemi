const Result = () => {
  return (
    <section
      id="results"
      className="py-20 md:py-28 grid grid-cols-12 items-center"
    >
      <p className="title col-span-12">§ Track Record</p>
      <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl tracking-tight col-span-12 lg:col-span-6">
        Numbers, <span className="italic text-primary">not narratives</span>.
      </h1>
      <p className="text-muted-fg md:text-lg col-span-12 lg:col-span-6 lg:ml-auto lg:max-w-lg">
        We don't post screenshots of impossible 10× weekends. We post the curve
        — wins, losses, drawdowns, and all.
      </p>
    </section>
  );
};

export default Result;
