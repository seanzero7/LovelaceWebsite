import adaPortrait from "../../Ada-1945299396.jpg";

const principles = [
  {
    n: "A",
    t: "Senior by default",
    b: "Every engagement is led by the practice heads you meet on the first call. Scoping, architecture, and critical work stay on their desks.",
  },
  {
    n: "B",
    t: "Scoped to the problem",
    b: "We do not pitch solutions before we understand the question. Discovery comes first, in writing, and we say no when a project is not a fit.",
  },
  {
    n: "C",
    t: "Plainly honest about AI",
    b: "Sometimes AI is the answer, sometimes it is a distraction. We will tell you which, and why, before you spend a dollar on it.",
  },
  {
    n: "D",
    t: "Long attention span",
    b: "We write code we are willing to maintain, and we stay on after the launch to maintain it. Most clients become retainers.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-b-2 border-foreground">
      <div className="shell">
        {/* header row */}
        <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-foreground/20">
          <div className="md:col-span-3">
            <p className="micro">01 / Index / About the studio</p>
          </div>
          <div className="md:col-span-9">
            <p className="micro text-foreground/50 text-right">
              p. 001
            </p>
          </div>
        </div>

        {/* big statement */}
        <div className="grid md:grid-cols-12 gap-x-6 gap-y-10 py-16 md:py-24">
          <div className="md:col-span-8">
            <h2 className="display-sans text-[40px] md:text-[72px]">
              independent <em className="not-italic text-accent">by design.</em>
              <br />
              selective by choice.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl text-[16px] leading-relaxed text-foreground/85">
              <p>
                Lovelace is an independent software studio
                based in Atlanta. The firm was founded by
                three Georgia Tech alumni who now lead our
                design, engineering, and business practices,
                and the studio is built around keeping that
                senior leadership close to every engagement.
              </p>
              <p>
                We are a studio, not an agency. No account
                managers, no handoffs, no outsourced teams.
                Engagements are selective on purpose so that
                the people scoping a project are the same
                people on the calls, in the code, and on the
                invoice through delivery and beyond.
              </p>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="border border-foreground p-3 bg-card">
              <div className="flex items-center justify-between mb-3">
                <span className="micro">Fig. 001</span>
                <span className="micro text-foreground/50">Namesake</span>
              </div>
              <img
                src={adaPortrait}
                alt="Ada Lovelace, portrait"
                className="w-full grayscale mb-3"
                loading="lazy"
              />
              <p className="text-[12px] text-foreground/70 leading-snug">
                Augusta Ada King, Countess of Lovelace.
                1815 to 1852. Often credited as the first
                computer programmer for her notes on
                Babbage&rsquo;s Analytical Engine, 1843.
              </p>
            </div>
          </aside>
        </div>

        {/* principles */}
        <div className="border-t border-foreground/20 py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-6 mb-10">
            <div className="md:col-span-3">
              <p className="micro">&#9632; Operating principles</p>
            </div>
            <div className="md:col-span-9">
              <p className="display-sans text-[28px] md:text-[40px] max-w-3xl">
                four things the studio
                <br />
                is consistent about.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 border-t border-foreground">
            {principles.map((p, i) => (
              <div
                key={p.n}
                className={`p-6 border-foreground/20 ${i > 0 ? "md:border-l" : ""} border-b md:border-b-0`}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="display-sans text-[32px] text-accent">{p.n}</span>
                  <span className="micro text-foreground/50">Principle</span>
                </div>
                <h3 className="display-sans text-[22px] mb-3 normal-case">{p.t}</h3>
                <p className="text-[14px] leading-relaxed text-foreground/80">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
