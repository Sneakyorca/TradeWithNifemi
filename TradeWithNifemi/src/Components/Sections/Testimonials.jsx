import TestimonialCard from "../UI/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="md:py-28 py-20">
      <header className="grid lg:grid-cols-12 gap-6 md:gap-8 items-end mb-12 md:mb-14">
        <div className="lg:col-span-7">
          <span className="title text-primary">§ Voices</span>
          <h2 className="mt-4 font-display font-light text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight">
            From the <em className="italic font-normal text-primary">desks</em>{" "}
            of real traders.
          </h2>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-5">
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
