import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Ornamental top */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
            ✦&ensp;AI Consulting · Software · Fullstack Design&ensp;✦
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Software, Systems, and
          <br />
          <span className="text-gradient-gold">AI That Works for You</span>
        </h1>

        <p className="text-primary-foreground/75 text-lg md:text-xl max-w-2xl mx-auto mb-4 opacity-0 animate-fade-up font-light leading-relaxed" style={{ animationDelay: "0.6s" }}>
          We build custom software, design fullstack experiences from interface to
          infrastructure, and help businesses put AI to work in ways that actually fit
          their goals. Inspired by the visionary spirit of Ada Lovelace.
        </p>

        {/* Ada Lovelace Quote */}
        <p className="font-serif text-primary-foreground/50 text-sm italic max-w-lg mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          "The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves."
          <span className="not-italic text-accent/60 ml-1">— Ada Lovelace</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#about"
            className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors"
          >
            Discover Our Story
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/35 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
