import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState(null);

  const faqs = [
    {
      q: "What exactly do I get with the signals service?",
      a: "10–15 curated forex signals per week with entry, stop loss, take profit, and a clear breakdown of why the trade was taken — delivered via Telegram and email.",
    },
    {
      q: "How does account management work?",
      a: "You keep your money in your own broker account. We trade it under a limited power of attorney with strict 1–2% risk per trade and send transparent monthly reports.",
    },
    {
      q: "Do I need experience to get started?",
      a: "No. Beginners can follow signals exactly. Account management is fully hands-off — ideal if you don't have time to trade yourself.",
    },
    {
      q: "What brokers do you support?",
      a: "Most major regulated brokers offering MT4 / MT5. We'll guide you through setup during onboarding.",
    },
    {
      q: "Are returns guaranteed?",
      a: "No — and anyone promising guaranteed returns in forex is misleading you. We focus on consistent, risk-controlled performance and full transparency.",
    },
    {
      q: "How do I cancel?",
      a: "Anytime. Signals are month-to-month. For account management we ask for 30 days' notice so we can close positions cleanly.",
    },
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-t border-border">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left"
            onClick={() => {
              setIsActive(isActive === index ? null : index);
            }}
            aria-expanded={isActive === index}
          >
            <h3 className="flex min-w-0 gap-3 font-display text-lg sm:text-xl font-normal hover:text-primary transition-colors items-center">
              <span className="shrink-0 font-mono text-muted-fg text-xs mt-1 sm:mt-0">
                0{index + 1}
              </span>
              <span className="min-w-0 overflow-hidden">{faq.q}</span>
            </h3>
            <ChevronDown
              className={`shrink-0 transition-transform duration-300 ${
                isActive === index ? "rotate-180 text-primary" : "text-muted-fg"
              }`}
            />
          </button>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
              isActive === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="pb-6 pl-7 sm:pl-9 text-sm sm:text-base leading-relaxed text-muted-fg">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
