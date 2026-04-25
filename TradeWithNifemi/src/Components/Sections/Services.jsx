import ServiceCard from "../UI/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 grid grid-cols-12 items-center"
    >
      <p className="title col-span-12">§ Services</p>
      <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl tracking-tight col-span-12 lg:col-span-6">
        Two ways to <span className="italic text-primary">work</span>
        <br /> with us.
      </h1>
      <p className="text-muted-fg md:text-lg col-span-12 lg:col-span-6 lg:ml-auto lg:max-w-md">
        Two focused services built for traders who care more about consistency
        than clout.
      </p>
      <ServiceCard />
    </section>
  );
};

export default Services;
