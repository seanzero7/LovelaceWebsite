import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            Our Work
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Building Our Portfolio
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We're currently developing our first wave of products. Here's a glimpse of what we're working on.
          </p>
        </div>

        {/* Siya Project Card */}
        <div
          ref={cardRef}
          className={`mt-14 bg-card border border-border rounded-lg overflow-hidden transition-all duration-700 ease-out ${
            cardVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Geometric Pattern Header */}
          <div className="h-48 bg-gradient-to-br from-accent/20 via-primary/30 to-accent/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                <circle cx="100" cy="100" r="60" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.5" />
                <circle cx="300" cy="80" r="40" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="150" r="80" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.2" />
                <line x1="50" y1="50" x2="350" y2="150" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="180" x2="300" y2="20" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/30">
                In Development
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
              Siya
            </h3>
            <p className="text-accent font-medium text-sm tracking-wide mb-4">
              Social Logistics Platform
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
              A next-generation platform reimagining how people coordinate and share logistics
              in their communities. Currently in development.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors"
            >
              Be the First to Know
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
