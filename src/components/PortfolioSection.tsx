import { Sparkles } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
          Our Work
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
          Portfolio
        </h2>
        <div className="ornamental-divider max-w-xs mx-auto">
          <span className="text-accent">✦</span>
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-12 md:p-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Something Great Is Coming
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
            We're currently building our first wave of products — thoughtful apps and platforms
            designed to make a real difference. Stay tuned for case studies, demos, and launches.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors"
          >
            Be the First to Know
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
