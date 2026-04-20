import teamKendra from "@/assets/team-kendra.jpg";
import teamSean from "@/assets/team-sean.jpg";
import teamLawton from "@/assets/team-lawton.jpg";

const team = [
  {
    num: "001",
    name: "Kendra Garcia",
    first: "kendra",
    last: "garcia",
    role: "Co-Founder / Head of Design",
    image: teamKendra,
    bio: "Kendra heads the design practice. She has driven redesigns across startup and enterprise platforms, and her background in industrial and product design means she thinks about the shape of a physical chair the same way she thinks about the shape of a checkout flow.",
    education: [
      "M.S. Business, Management, Marketing, Georgia Tech",
      "B.S. Industrial & Product Design, Georgia Tech",
      "Exchange Scholar, Universitat Politècnica de València",
    ],
    linkedin: "https://www.linkedin.com/in/k3ndra-garcia/",
    facts: [
      ["Practice", "Design"],
      ["Based", "Atlanta"],
      ["School", "Georgia Tech"],
    ],
  },
  {
    num: "002",
    name: "Sean Hall",
    first: "sean",
    last: "hall",
    role: "Co-Founder / Head of Engineering",
    image: teamSean,
    bio: "Sean heads the engineering practice. Before Lovelace he wrote simulations and embedded systems for Northrop Grumman and several research labs. He is the person you want reviewing the architecture, and he sets the technical standard the rest of the practice is held to.",
    education: [
      "M.S. Electrical & Computer Engineering, Georgia Tech",
      "B.S. Physics and Computer Science, Tulane (Phi Beta Kappa)",
    ],
    linkedin: "https://www.linkedin.com/in/sean-hall-gatech/",
    facts: [
      ["Practice", "Engineering"],
      ["Based", "Atlanta"],
      ["School", "Georgia Tech, Tulane"],
    ],
  },
  {
    num: "003",
    name: "Lawton Ward",
    first: "lawton",
    last: "ward",
    role: "Co-Founder / Head of Business",
    image: teamLawton,
    bio: "Lawton heads the business practice. His background spans M&A advisory, venture capital, and logistics, with current work in healthcare VC. He leads scoping, strategy, and partnerships so the engineering and design practices can stay focused on the work.",
    education: [
      "MBA, Strategy & Innovation / Business Analytics, Georgia Tech (Merit Scholarship)",
      "B.A. Economics, College of the Holy Cross (Division I Athlete)",
    ],
    linkedin: "https://www.linkedin.com/in/lawton-ward/",
    facts: [
      ["Practice", "Business"],
      ["Based", "Atlanta"],
      ["School", "Georgia Tech, Holy Cross"],
    ],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="border-b-2 border-foreground bg-card">
      <div className="shell">
        {/* header */}
        <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-foreground/20">
          <div className="md:col-span-3">
            <p className="micro">03 / Index / The team</p>
          </div>
          <div className="md:col-span-9">
            <p className="micro text-foreground/50 text-right">p. 003</p>
          </div>
        </div>

        <div className="py-16 md:py-20">
          <h2 className="display-sans text-[48px] md:text-[96px] mb-8">
            founders
            <br />
            <span className="text-accent">& practice leads.</span>
          </h2>
          <p className="text-[17px] max-w-2xl text-foreground/85">
            The studio is led by its three co-founders, each
            heading one of our core practices. They lead
            scoping, architecture, and the senior work on
            every engagement, and they are the people you
            will work with most directly.
          </p>
        </div>

        <div className="border-t border-foreground">
          {team.map((m) => (
            <article
              key={m.name}
              className="grid md:grid-cols-12 gap-x-6 gap-y-6 py-10 md:py-14 border-b border-foreground/20"
            >
              <div className="md:col-span-3">
                <p className="micro mb-3">Fig. {m.num}</p>
                <div className="aspect-[4/5] border border-foreground overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="md:col-span-6">
                <h3 className="display-sans text-[48px] md:text-[72px] leading-[0.95]">
                  {m.first}
                  <br />
                  <span className="text-accent">{m.last}.</span>
                </h3>
                <p className="micro mt-3 mb-6">{m.role}</p>
                <p className="text-[16px] leading-relaxed text-foreground/85 mb-6 max-w-xl">
                  {m.bio}
                </p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro"
                >
                  LinkedIn &rarr;
                </a>
              </div>

              <div className="md:col-span-3 md:pl-6 md:border-l border-foreground/20">
                <p className="micro mb-4">Index card</p>
                <table className="w-full text-[13px]">
                  <tbody>
                    {m.facts.map(([k, v]) => (
                      <tr key={k} className="border-t border-foreground/20">
                        <td className="py-2 pr-3 text-foreground/50 micro align-top">{k}</td>
                        <td className="py-2 align-top">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="micro mt-6 mb-3">Education</p>
                <ul className="list-none m-0 p-0 text-[12px] text-foreground/75 space-y-2">
                  {m.education.map((e) => (
                    <li key={e} className="border-t border-foreground/15 pt-2 leading-snug">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
