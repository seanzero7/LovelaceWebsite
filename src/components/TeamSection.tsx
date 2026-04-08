import { Linkedin } from "lucide-react";
import teamKendra from "@/assets/team-kendra.jpg";
import teamSean from "@/assets/team-sean.jpg";
import teamLawton from "@/assets/team-lawton.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Kendra Garcia",
    role: "Co-Founder · Head of Design",
    image: teamKendra,
    bio: "Multidisciplinary designer blending product design, UX research, and brand strategy. Has led end-to-end redesigns across startup and enterprise platforms, improving usability for thousands of users.",
    education: [
      "M.S. in Business, Management, Marketing (Georgia Tech)",
      "B.S. in Industrial and Product Design (Georgia Tech)",
      "Exchange Scholar (Universitat Politècnica de València)",
    ],
    linkedin: "https://www.linkedin.com/in/k3ndra-garcia/",
  },
  {
    name: "Sean Hall",
    role: "Co-Founder · Head of Engineering",
    image: teamSean,
    bio: "Engineer specializing in digital signal processing, machine learning, and systems engineering. Built simulations and embedded systems for aerospace and defense at Northrop Grumman and research labs.",
    education: [
      "M.S. in Electrical and Computer Engineering (Georgia Tech)",
      "B.S. in Physics and Computer Science (Tulane University, Phi Beta Kappa)",
    ],
    linkedin: "https://www.linkedin.com/in/sean-hall-gatech/",
  },
  {
    name: "Lawton Ward",
    role: "Co-Founder · Head of Business",
    image: teamLawton,
    bio: "Drives strategy, operations, and growth. Background spans M&A advisory, venture capital, logistics, and enterprise sales, with current work in healthcare VC.",
    education: [
      "MBA in Strategy & Innovation and Business Analytics (Georgia Tech, Merit-based Scholarship)",
      "B.A. in Economics (College of the Holy Cross, D1 Athlete)",
    ],
    linkedin: "https://www.linkedin.com/in/lawton-ward/",
  },
];

const TeamMemberCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`text-center group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative mb-6 inline-block">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-colors duration-300">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            className="w-full h-full object-cover"
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
      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-5">
        {member.bio}
      </p>

      {/* Education */}
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-2">Education</h4>
        <ul className="text-muted-foreground text-xs leading-relaxed space-y-1">
          {member.education.map((ed) => (
            <li key={ed}>{ed}</li>
          ))}
        </ul>
      </div>

      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
        aria-label={`${member.name} on LinkedIn`}
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

const TeamSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="team" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            Georgia Tech Founders
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Three Minds, One Mission
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We met during graduate school at Georgia Tech, united by a belief that technology should serve
            people, not the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {team.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
