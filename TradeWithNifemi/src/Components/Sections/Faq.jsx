const Faq = () => {
  return (
    <section id="faqs" className="py-20 md:py-28 grid grid-cols-12">
      <header className="cols-span-12 md:col-span-4">
        <p className="title">§ faq</p>
        <h2 className="mt-4 font-display font-light text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight">
          Questions, <span className="italic text-primary">answered</span>.
        </h2>
        <p className="text-muted-fg">
          Still curious? Drop us a message — we reply within 24 hours.
        </p>
      </header>
    </section>
  );
};

export default Faq;
