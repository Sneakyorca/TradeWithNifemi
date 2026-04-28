import Accordion from "../UI/Accordion";

const Faq = () => {
  return (
    <section
      id="faqs"
      className="py-20 md:py-28 grid grid-cols-12 gap-12 lg:gap-2"
    >
      <header className="col-span-12 lg:col-span-5">
        <p className="title">§ faq</p>
        <h2 className="mt-4 font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight">
          Questions,{" "}
          <span className="italic text-primary font-normal">answered</span>.
        </h2>
        <p className="text-muted-fg leading-relaxed mt-6">
          Still curious? Drop us a message — we reply within 24 hours.
        </p>
      </header>
      <div className="col-span-12 lg:col-span-7">
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
