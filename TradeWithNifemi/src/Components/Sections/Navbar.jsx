import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = (event) => {
      setIsDesktop(event.matches);
      if (event.matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    mediaQuery.addEventListener("change", handleBreakpointChange);
    handleScroll();
    handleBreakpointChange(mediaQuery);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      className={
        "fixed inset-x-6 items-center top-4" +
        (isScrolled ? " -translate-y-1" : " translate-y-0")
      }
    >
      <nav
        className={
          "p-6 py-3 rounded-xl flex justify-between items-center transition-transform duration-300  box-border w-full" +
          (isScrolled
            ? " bg-surface-el border border-border"
            : "bg-transparent")
        }
      >
        <h1 className="font-display text-xl tracking-tight text-foreground flex items-center">
          <span className="inline-block bg-primary-glow rounded-xl p-2 mr-2 shadow-[0_0_40px_3px_var(--color-primary-glow)]/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
              style={{ opacity: 1 }}
              className="size-5"
            >
              <path d="M2.293 17.707a1 1 0 0 0 1.414 0L9 12.414l3.293 3.293a1 1 0 0 0 1.414 0L20 9.414V14a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h4.586L13 13.586l-3.293-3.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z" />
            </svg>
          </span>
          Trade <span className="text-primary italic">With</span> Nifemi
        </h1>
        {isDesktop ? (
          <>
            <ul
              className={
                "text-muted-fg flex bg-red text-sm items-center gap-1 transition-all ease-in-out duration-500"
              }
            >
              <li className="hover:bg-surface-el hover:text-foreground p-2 rounded-xl transition-all duration-300">
                <a href="#services">Services</a>
              </li>
              <li className="hover:bg-surface-el hover:text-foreground p-2 rounded-xl transition-all duration-300">
                <a href="#process">How It Works</a>
              </li>
              <li className="hover:bg-surface-el hover:text-foreground p-2 rounded-xl transition-all duration-300">
                <a href="#results">Results</a>
              </li>
              <li className="hover:bg-surface-el hover:text-foreground p-2 rounded-xl transition-all duration-300">
                <a href="#faqs">FAQ</a>
              </li>
              <li className="hover:bg-surface-el hover:text-foreground p-2 rounded-xl transition-all duration-300">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="bg-primary-glow text-background p-2.5 rounded-xl mt-2 shadow-[0_0_20px_var(--color-primary-glow)]/30 text-sm font-semibold hover:-translate-y-1 hover:shadow-[0_0_60px_var(--color-primary-glow)]/30 transition-all duration-300">
              <a href="#contact">Get Started</a>
            </button>
          </>
        ) : (
          <button
            className="menu flex flex-col gap-1 p-3 border border-border rounded-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={
                "bg-foreground w-4 h-0.5 rounded-full inline-block transition-all duration-300" +
                (isOpen
                  ? " rotate-45 translate-y-1.5"
                  : "rotate-0 translate-y-0")
              }
            ></span>
            <span
              className={
                "bg-foreground w-4 h-0.5 rounded-full inline-block transition-all duration-300" +
                (isOpen ? " opacity-0" : "opacity-100")
              }
            ></span>
            <span
              className={
                "bg-foreground w-4 h-0.5 rounded-full inline-block transition-all duration-300" +
                (isOpen
                  ? " -rotate-45 -translate-y-1.5"
                  : "rotate-0 translate-y-0")
              }
            ></span>
          </button>
        )}
      </nav>
      <ul
        className={
          "bg-surface-el border border-border p-4 pt-6 box-border text-muted-fg flex flex-col items-start text-sm absolute top-20 rounded-2xl w-full gap-1 transition-all ease-in-out duration-500 md:hidden" +
          (isOpen ? " translate-y-0 opacity-300" : " translate-y-8 opacity-0")
        }
      >
        <li className="hover:bg-surface-el hover:text-foreground w-full pl-4 p-2 rounded-xl transition-all duration-300">
          <a href="#services">Services</a>
        </li>
        <li className="hover:bg-surface-el hover:text-foreground w-full pl-4 p-2 rounded-xl transition-all duration-300">
          <a href="#process">How It Works</a>
        </li>
        <li className="hover:bg-surface-el hover:text-foreground w-full pl-4 p-2 rounded-xl transition-all duration-300">
          <a href="#results">Results</a>
        </li>
        <li className="hover:bg-surface-el hover:text-foreground w-full pl-4 p-2 rounded-xl transition-all duration-300">
          <a href="#faqs">FAQ</a>
        </li>
        <li className="hover:bg-surface-el hover:text-foreground w-full pl-4 p-2 rounded-xl transition-all duration-300">
          <a href="#contact">Contact</a>
        </li>
        <button className="bg-primary-glow text-background w-full p-2.5 rounded-xl mt-2 shadow-[0_0_20px_var(--color-primary-glow)]/30 font-semibold hover:-translate-y-1 hover:shadow-[0_0_60px_var(--color-primary-glow)]/30 transition-all duration-300">
          <a href="#contact">Get Started</a>
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
