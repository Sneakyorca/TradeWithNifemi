import { Quote, Star } from "lucide-react";
import t1 from "./../../assets/t1.jpg";
import t2 from "./../../assets/t2.jpg";
import t3 from "./../../assets/t3.jpg";
const TestimonialCard = () => {
  const testimonials = [
    {
      img: t1,
      quote:
        "The risk-first approach changed everything. I stopped overtrading and my equity curve finally goes up.",
      name: "Daniel O.",
      role: "Signals · 8 months",
      metric: "+42% / 8mo",
    },
    {
      img: t2,
      quote:
        "Monthly reports are clear and the returns are consistent. No drama — just professional execution.",
      name: "Amake N.",
      role: "Account Management · 1 year",
      metric: "+71 / 12mo",
    },
    {
      img: t3,
      quote:
        "Every signal explains the reasoning. I'm not just copying — I'm actually learning to trade.",
      name: "Marco S.",
      role: "Signals · 5 months",
      metric: "+28% / 5mo",
    },
  ];
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={` rounded-3xl p-6 sm:p-7 flex flex-col ${index === 1 ? "bg-linear-to-br from-primary/8 to-transparent border border-primary/30" : "border border-border"}`}
        >
          <Quote className="h-7 w-7 text-primary/40 mb-4" />
          <blockquote className="font-display text-lg leading-snug text-foreground/95 flex-1">
            "{testimonial.quote}"
          </blockquote>
          <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={testimonial.img}
                className="h-10 w-10 rounded-full object-cover"
                alt={testimonial.name}
                loading="lazy"
              />
              <div>
                <div className="font-medium text-sm">{testimonial.name}</div>
                <div className="font-mono text-xs tracking-[2px] text-muted-fg uppercase">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-primary font-medium">
                {testimonial.metric}
              </div>
              <div className="flex gap-0.5 text-primary mt-0.5 justify-end">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-2.5 w-2.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;
