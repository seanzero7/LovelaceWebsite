import teamKendra from "@/assets/team-kendra.jpg";
import teamSean from "@/assets/team-sean.jpg";
import teamLawton from "@/assets/team-lawton.jpg";

const team = [
  {
    num: "01",
    name: "Kendra Garcia",
    role: "Co-Founder, Design",
    image: teamKendra,
    bio: "Kendra leads design. She has driven redesigns across startup and enterprise platforms, and her background in industrial and product design means she thinks about the shape of a physical chair the same way she thinks about the shape of a checkout flow.",
    education: [
      "M.S. Business, Management, Marketing, Georgia Tech",
      "B.S. Industrial & Product Design, Georgia Tech",
      "Exchange Scholar, Universitat Politècnica de València",
    ],
    linkedin: "https://www.linkedin.com/in/k3ndra-garcia/",
  },
  {
    num: "02",
    name: "Sean Hall",
    role: "Co-Founder, Engineering",
    image: teamSean,
    bio: "Sean leads engineering. Before Lovelace he wrote simulations and embedded systems for Northrop Grumman and several research labs. He is the person you want debugging the thing at 2am, which is occasionally a problem because he will do it.",
    education: [
      "M.S. Electrical & Computer Engineering, Georgia Tech",
      "B.S. Physics and Computer Science, Tulane (Phi Beta Kappa)",
    ],
    linkedin: "https://www.linkedin.com/in/sean-hall-gatech/",
  },
  {
    num: "03",
    name: "Lawton Ward",
    role: "Co-Founder, Business",
    image: teamLawton,
    bio: "Lawton runs the business side. His background spans M&A advisory, venture capital, and logistics. He currently works in healthcare VC alongside Lovelace and handles the scoping, strategy, and contracts so the rest of the team can build.",
    education: [
      "MBA, Strategy & Innovation / Business Analytics, Georgia Tech (Merit Scholarship)",
      "B.A. Economics, College of the Holy Cross (Division I Athlete)",
    ],
    linkedin: "https://www.linkedin.com/in/lawton-ward/",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="rule-bottom">
      <div className="section-shell py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-3">
            <p className="label-mono">&sect; 03 / Team</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-serif text-[40px] md:text-[56px] leading-[1.05] max-w-3xl">
              Three co-founders.
              <br />
              <em>No one else.</em>
            </h2>
            <p className="mt-6 text-[18px] max-w-2xl text-foreground/85">
              We met at Georgia Tech. The people on this page
              are the people who will work on your project.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 rule-top pt-10">
          {team.map((m) => (
            <article key={m.name}>
              <div className="label-mono mb-3">Fig. {m.num}</div>
              <div className="aspect-[4/5] border border-foreground/80 overflow-hidden mb-5">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <h3 className="display-serif text-[26px] leading-tight">
                {m.name}
              </h3>
              <p className="label-mono mt-2 mb-4">{m.role}</p>
              <p className="text-[16px] leading-relaxed text-foreground/85 mb-5">
                {m.bio}
              </p>

              <div className="border-t border-foreground/30 pt-4">
                <p className="label-mono mb-2">Education</p>
                <ul className="list-none m-0 p-0 space-y-1.5 text-[14px] text-foreground/80">
                  {m.education.map((ed) => (
                    <li key={ed}>{ed}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-[14px]">
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn &rarr;
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
