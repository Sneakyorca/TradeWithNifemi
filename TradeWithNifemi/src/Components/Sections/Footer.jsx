import { TrendingUp } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/60 mt-10">
    <div className="container py-14 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
            <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl">
            Trade<em className="italic text-primary px-0.5">With</em>Nifemi
          </span>
        </div>
        <p className="mt-5 text-sm text-muted-fg max-w-sm leading-relaxed">
          Premium forex signals and discretionary account management. Built for
          traders who value precision over promises.
        </p>
      </div>

      <div className="md:col-span-3">
        <div className="label text-muted-fg mb-4">Navigate</div>
        <ul className="space-y-2.5 text-sm">
          {["Services", "Process", "Results", "FAQ"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase() === "faq" ? "faqs" : item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="label text-muted-fg mb-4">Contact</div>
        <ul className="space-y-2.5 text-sm">
          <li>
            <a
              className="text-foreground/80 hover:text-primary"
              href="mailto:nif3mi123@gmail.com"
            >
              nif3mi123@gmail.com
            </a>
          </li>
          <li>
            <a
              className="text-foreground/80 hover:text-primary"
              href="https://t.me/Nif3mi01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram · @Nif3mi01
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border/60">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="label text-muted-fg">
          © {new Date().getFullYear()} Trade With Nifemi · All rights reserved
        </p>
        <p className="label text-muted-fg text-center sm:text-right max-w-md">
          Trading forex involves substantial risk. Past performance does not
          guarantee future results.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
