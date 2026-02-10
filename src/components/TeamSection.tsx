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
    bio: "Kendra brings a multidisciplinary approach to design, blending product design, UX research, and brand strategy. With experience spanning startup environments to enterprise platforms, she's led end-to-end product redesigns that have improved usability for thousands of users and driven measurable engagement. Her design philosophy centers on creating intuitive, human-centered experiences backed by rigorous user research and testing. At Georgia Tech, Kendra serves as President of the Graduate Entrepreneurship Club and combines her industrial design background with management expertise to bridge creativity and business impact.",
    education: [
      "M.S. in Business, Management, Marketing (Georgia Tech)",
      "B.S. in Industrial and Product Design (Georgia Tech)",
      "Exchange Scholar (Universitat Politècnica de València)",
    ],
    expertise: ["UX/UI Design", "Design Systems", "User Research", "Product Strategy", "Branding"],
    linkedin: "#",
  },
  {
    name: "Sean Hall",
    role: "Co-Founder · Head of Engineering",
    image: teamSean,
    bio: "Sean is an engineer with deep expertise in digital signal processing, machine learning, and systems engineering. His technical foundation spans quantum sensor simulations, optical engineering, and embedded systems work with aerospace and defense applications. With experience at Northrop Grumman and research labs, Sean brings precision engineering and advanced computational thinking to Lovelace's development process. He combines rigorous technical skills with practical problem-solving, whether building Python-based simulations or optimizing real-world hardware systems. Currently pursuing his Master's in Electrical and Computer Engineering at Georgia Tech, Sean ensures Lovelace's products are built on solid engineering principles.",
    education: [
      "M.S. in Electrical and Computer Engineering (Georgia Tech)",
      "B.S. in Physics and Computer Science (Tulane University, Phi Beta Kappa)",
    ],
    expertise: ["Machine Learning", "Digital Signal Processing", "Python Development", "Systems Engineering", "Quantum Computing"],
    linkedin: "#",
  },
  {
    name: "Lawton Ward",
    role: "Co-Founder · Head of Business",
    image: teamLawton,
    bio: "Lawton drives Lovelace's business strategy, operations, and growth initiatives. With a track record of scaling operations, expanding client bases, and delivering measurable revenue growth, he brings operational excellence and strategic thinking to the team. His experience spans M&A advisory, venture capital, logistics management, and enterprise sales—giving him a comprehensive view of how to build sustainable, scalable businesses. Currently working in healthcare venture capital alongside his role at Lovelace, Lawton combines analytical rigor with entrepreneurial vision. At Georgia Tech, he serves on multiple leadership boards and is pursuing his MBA with a focus on Strategy & Innovation.",
    education: [
      "MBA in Strategy & Innovation and Business Analytics (Georgia Tech, Merit-based Scholarship)",
      "B.A. in Economics (College of the Holy Cross, D1 Athlete)",
    ],
    expertise: ["Business Strategy", "Operations Management", "M&A Advisory", "Growth Strategy", "Venture Capital"],
    linkedin: "#",
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

      {/* Expertise */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {member.expertise.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors text-sm"
        aria-label={`${member.name} on LinkedIn`}
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
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
            We met as graduate students at Georgia Tech, united by a belief that technology should serve
            people — not the other way around.
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
