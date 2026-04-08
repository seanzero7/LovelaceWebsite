import { Sparkles, Code2, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Sparkles,
    title: "AI Consulting",
    description:
      "Practical AI strategy and implementation. We help you choose the right models, tools, and stack so AI fits your goals and delivers real value.",
  },
  {
    icon: Code2,
    title: "Software",
    description:
      "Custom web and mobile applications built around your workflows, your team, and the people you serve.",
  },
  {
    icon: Layers,
    title: "Fullstack Design",
    description:
      "End-to-end product design from interface to infrastructure. Research-driven UX paired with thoughtful backend architecture that scales as you grow.",
  },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Services Crafted Around You
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            From first sketch to production system, we partner with businesses end-to-end —
            blending design, engineering, and strategy into software that lasts.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-700 ease-out group ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
