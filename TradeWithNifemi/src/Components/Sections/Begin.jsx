import { ArrowUpRight } from "lucide-react";

const Begin = () => (
  <section className="py-20 md:py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-4xl glass-strong p-8 sm:p-12 md:p-20 text-center shadow-elevated">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[340px] w-[700px] bg-gradient-glow blur-3xl opacity-70" />

        <span className="title">§ Begin</span>
        <h2 className="mt-4 font-display font-light text-4xl sm:text-5xl md:text-7xl tracking-tight max-w-3xl mx-auto leading-[0.95]">
          Trade like you{" "}
          <em className="italic font-normal text-primary">mean it</em>.
        </h2>
        <p className="mt-6 text-muted-fg text-base md:text-lg max-w-xl mx-auto">
          Join 5,000+ traders who chose discipline over hype, and consistency
          over chaos.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="btn-glow rounded-xl font-semibold px-8 py-4 flex items-center justify-between gap-2 max-w-fit"
          >
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
          </a>
          <a
            href="#services"
            className="btn-outline rounded-xl font-semibold px-8 py-4 max-w-fit"
          >
            Explore services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Begin;
