import teamLawton from "@/assets/team-lawton.jpg";
import teamKendra from "@/assets/team-kendra.jpg";
import teamSean from "@/assets/team-sean.jpg";

const team = [
  {
    name: "Lawton Ward",
    role: "Co-Founder · Head of Business",
    image: teamLawton,
    bio: "With a sharp eye for market opportunity and a passion for building sustainable ventures, Lawton drives Lovelace's strategy and client relationships. Georgia Tech trained, business-minded, people-focused.",
  },
  {
    name: "Kendra Garcia",
    role: "Co-Founder · Head of Design",
    image: teamKendra,
    bio: "Kendra brings empathy and elegance to every interface she designs. Her background in human-computer interaction from Georgia Tech ensures every product we build is intuitive, beautiful, and purposeful.",
  },
  {
    name: "Sean Hall",
    role: "Co-Founder · Head of Engineering",
    image: teamSean,
    bio: "Sean architects the systems that power our products. With deep expertise in full-stack development honed at Georgia Tech, he turns ambitious ideas into robust, scalable software.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            The Founders
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Three Minds, One Mission
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We met as graduate students at Georgia Tech, united by a belief that technology should serve
            people — not the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium tracking-wide mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
