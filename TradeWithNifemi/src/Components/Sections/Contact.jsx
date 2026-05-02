import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Name must contain only letters and spaces";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^(\+234|0)[0-9]{10}$|^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(
        formData.phone.trim().replace(/\s/g, ""),
      )
    ) {
      newErrors.phone =
        "Invalid phone number (Nigeria: +234 or 0, International format)";
    }
    if (!formData.interest) newErrors.interest = "Please select a service";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setSubmitMessage("");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || "Failed to send message");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
        setSubmitMessage("Message sent. We'll reply within 24 hours.");
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitMessage("Message could not be sent. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
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
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-xs font-mono uppercase tracking-wider text-muted-fg"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full h-11 rounded-lg border border-border/80 bg-background/60 px-3 text-sm text-foreground placeholder-muted-fg/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
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
          {errors.interest && (
            <p className="text-red-400 text-xs mt-1">{errors.interest}</p>
          )}
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
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 bg-cta text-background font-medium rounded-lg hover:shadow-[0_0_40px_var(--color-primary-glow)/30] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="animate-spin">⟳</span> Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </button>
        {submitMessage && (
          <p
            className={`mt-3 text-sm text-center rounded-lg p-3 ${
              submitMessage.includes("could not")
                ? "bg-red-500/10 text-red-400"
                : "bg-green-500/10 text-green-400"
            }`}
          >
            {submitMessage}
          </p>
        )}
        <p className="mt-3 text-[11px] text-muted-fg text-center">
          We typically reply within 24 hours. No spam, ever.
        </p>
      </form>
    </section>
  );
};

export default Contact;
