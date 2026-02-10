import { Code2, Heart, Lightbulb } from "lucide-react";
import adaPortrait from "@/assets/ada-lovelace.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "Every line of code we write serves real people. We design with empathy and build with intention.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Craft",
    description:
      "We believe great software is the product of careful thought, not rushed deadlines. Quality is our standard.",
  },
  {
    icon: Code2,
    title: "Visionary Spirit",
    description:
      "Inspired by Ada Lovelace — the first computer programmer — we honor the tradition of seeing what others haven't yet imagined.",
  },
];

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: adaRef, isVisible: adaVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Where History Meets Innovation
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out delay-100 ${
            storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Lovelace was born from a shared vision among three Georgia Tech graduate students who believed software
            could be more — more thoughtful, more human, more meaningful. Named after{" "}
            <span className="text-accent font-medium">Ada Lovelace</span>, the world's first computer programmer
            and a visionary who saw the potential of computing long before anyone else, our company carries forward
            that spirit of imagination and purpose.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Today, we're a boutique software studio based in Atlanta, Georgia, crafting apps and platforms
            that range from social experiences to essential business utilities — all guided by our
            People First philosophy. We're currently building our portfolio and taking on select projects
            that align with our mission.
          </p>
        </div>

        {/* Ada Lovelace Feature */}
        <div
          ref={adaRef}
          className={`flex flex-col md:flex-row items-center gap-10 mb-20 transition-all duration-700 ease-out ${
            adaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-48 h-60 flex-shrink-0 rounded-lg overflow-hidden border-2 border-accent/30 shadow-lg">
            <img
              src={adaPortrait}
              alt="Portrait of Ada Lovelace, the world's first computer programmer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
              "The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves."
            </blockquote>
            <p className="text-accent font-medium text-sm tracking-wide mb-4">— Ada Lovelace, 1843</p>
            <p className="text-muted-foreground leading-relaxed">
              Named after Ada Lovelace, the world's first computer programmer, we honor her legacy of
              innovation and vision by building technology that serves people first.
            </p>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-card rounded-lg p-8 text-center border border-border hover:border-accent/30 transition-all duration-700 ease-out group ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
