import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const social = [
    {
      icon: Mail,
      platform: "email",
      link: "mailto:nif3mi123@gmail.com",
      username: "nif3mi123@gmail.com",
    },
    {
      icon: MessageSquare,
      platform: "telegram",
      link: "https://t.me/Nif3mi01",
      username: "@Nif3mi01",
    },
  ];

  return (
    <section
      id="contact"
      className="grid lg:grid-cols-5 gap-8 md:gap-10 items-start py-28 md:py-20"
    >
      <div className="lg:col-span-2">
        <p className="title">get in touch</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Let's <span className="text-primary">talk trades</span>.
        </h2>
        <p className="text-muted-fg mt-5 leading-relaxed">
          Tell us what you're looking for — signals, account management, or both
          — and we'll guide you through the next step.
        </p>
        <div className="flex flex-col gap-4 mt-8">
          {social.map((s, index) => {
            const Icon = s.icon;
            return (
              <a
                key={index}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex items-center rounded-lg bg-surface border border-border gap-4"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </span>
                <div className="flex flex-col gap-0.5">
                  {" "}
                  <span className="font-mono text-xs tracking-widest text-muted-fg uppercase">
                    {s.platform}
                  </span>
                  <span className="text-sm font-semibold">{s.username}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 border border-border/50 bg-surface-el rounded-3xl p-5 sm:p-6 md:p-8 shadow-elevated"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-xs font-mono uppercase tracking-wider text-muted-fg"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full h-11 rounded-lg border border-border/80 bg-background/60 px-3 text-sm text-foreground placeholder-muted-fg/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs font-mono uppercase tracking-wider text-muted-fg"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              maxLength={255}
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full h-11 rounded-lg border border-border/80 bg-background/60 px-3 text-sm text-foreground placeholder-muted-fg/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="interest"
            className="text-xs font-mono uppercase tracking-wider text-muted-fg"
          >
            I'm interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="mt-2 w-full h-11 rounded-lg border border-border/80 bg-background/60 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">Select a service</option>
            <option value="signals">Forex Signals</option>
            <option value="management">Account Management</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="text-xs font-mono uppercase tracking-wider text-muted-fg"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your trading goals, capital, and experience..."
            maxLength={1000}
            value={formData.message}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-border/80 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder-muted-fg/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full h-11 bg-cta text-background font-medium rounded-lg hover:shadow-[0_0_40px_var(--color-primary-glow)/30] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" /> Send Message
        </button>
        <p className="mt-3 text-[11px] text-muted-fg text-center">
          We typically reply within 24 hours. No spam, ever.
        </p>
      </form>
    </section>
  );
};

export default Contact;
