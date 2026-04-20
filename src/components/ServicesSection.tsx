const services = [
  {
    num: "01",
    title: "Custom Software",
    tag: "Engineering",
    body: "Web and mobile applications, internal tools, and the boring-but-critical systems that keep a business running. We write mostly TypeScript and Python, and we pick the stack to fit the problem rather than the resume. We host it, we maintain it, and we pick up the phone when it breaks.",
    bullets: [
      "Greenfield product builds",
      "Platform and API architecture",
      "Internal tooling and automation",
      "Ongoing engineering retainers",
    ],
  },
  {
    num: "02",
    title: "Fullstack Design",
    tag: "Product",
    body: "Interface, experience, and the architecture underneath. Research first, then sketches, then screens, then code. We do not believe design and engineering are separate disciplines, and we do not staff them as if they are.",
    bullets: [
      "UX research and strategy",
      "Interface and visual design",
      "Design systems",
      "Brand, marketing sites, launch",
    ],
  },
  {
    num: "03",
    title: "AI Consulting",
    tag: "Strategy",
    body: "A plain-English read on where AI actually helps your business and where it is a distraction. Sometimes that is a custom model. Sometimes it is a workflow change. Sometimes it is telling you to wait six months. We will not sell you something you do not need.",
    bullets: [
      "Applied AI strategy",
      "Model and vendor selection",
      "Prototyping and evaluation",
      "Integration and deployment",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="rule-bottom bg-secondary/40">
      <div className="section-shell py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-3">
            <p className="label-mono">&sect; 02 / Services</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-serif text-[40px] md:text-[56px] leading-[1.05] max-w-3xl">
              Three disciplines.
              <br />
              One team. <em>Scoped to fit.</em>
            </h2>
            <p className="mt-6 text-[18px] max-w-2xl text-foreground/85">
              Most engagements touch more than one of the
              following. We scope and price on a project by
              project basis. There is no menu.
            </p>
          </div>
        </div>

        <div className="rule-top">
          {services.map((s) => (
            <article
              key={s.num}
              className="grid md:grid-cols-12 gap-x-8 gap-y-4 py-10 rule-bottom"
            >
              <div className="md:col-span-2">
                <div className="display-serif text-[56px] md:text-[72px] leading-none text-accent">
                  {s.num}
                </div>
                <div className="label-mono mt-1">{s.tag}</div>
              </div>

              <div className="md:col-span-6">
                <h3 className="display-serif text-[30px] md:text-[36px] mb-4">
                  {s.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-foreground/85 max-w-xl">
                  {s.body}
                </p>
              </div>

              <ul className="md:col-span-4 list-none m-0 p-0 text-[15px] self-start">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="py-2 border-b border-foreground/20 flex gap-3"
                  >
                    <span className="text-accent">&#8250;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
