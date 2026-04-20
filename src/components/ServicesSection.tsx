const services = [
  {
    num: "01",
    title: "custom software",
    tag: "Engineering practice",
    body: "End-to-end product and platform engineering. We design the architecture, write the code, provision the infrastructure, and stay on through maintenance. We pick the stack to fit the problem, not the resume, and we instrument everything we ship.",
    deliverables: [
      "Greenfield product builds (web & mobile)",
      "API design & backend architecture",
      "Cloud infrastructure & DevOps",
      "Data pipelines, ETL, analytics",
      "Embedded & real-time systems",
      "Internal tooling & automation",
      "Code audits & legacy modernization",
      "Ongoing engineering retainers & SLAs",
    ],
    stack: ["TypeScript", "Python", "Go", "Rust", "Swift", "Kotlin", "React", "Next.js", "Node", "FastAPI", "Postgres", "Redis", "AWS", "GCP", "Terraform", "Docker", "Kubernetes"],
  },
  {
    num: "02",
    title: "fullstack design",
    tag: "Product practice",
    body: "Interface, experience, and the architecture underneath. Research first, then sketches, then screens, then code. We do not treat design and engineering as separate disciplines, and we do not staff them as if they were. Every design deliverable we produce is production-ready.",
    deliverables: [
      "UX research & usability testing",
      "Information architecture & content strategy",
      "Interface, interaction & visual design",
      "Design systems & component libraries",
      "Brand identity & visual systems",
      "Marketing sites, launch collateral",
      "Motion, micro-interactions, prototyping",
      "Accessibility audits (WCAG 2.2 AA)",
    ],
    stack: ["Figma", "Framer", "Webflow", "React", "Next.js", "Tailwind", "Radix", "Storybook", "Motion", "Sanity", "Contentful"],
  },
  {
    num: "03",
    title: "ai consulting",
    tag: "AI practice",
    body: "A plain-English read on where AI actually helps your business, and the technical engagement to see it through. We run evaluations before we write code, and we will tell you when the honest answer is to wait, to buy, or to do nothing at all.",
    deliverables: [
      "Applied AI strategy & roadmap",
      "Model, vendor & build-vs-buy evaluation",
      "Retrieval-augmented generation (RAG)",
      "Agentic workflows & tool-use systems",
      "Custom eval harnesses & benchmarking",
      "Fine-tuning & prompt engineering",
      "Production deployment & guardrails",
      "Observability, cost & drift monitoring",
    ],
    stack: ["Anthropic", "OpenAI", "Llama", "Mistral", "LangChain", "LlamaIndex", "Vercel AI SDK", "Pinecone", "Weaviate", "Evals", "Guardrails", "vLLM"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-b-2 border-foreground">
      <div className="shell">
        {/* header */}
        <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-foreground/20">
          <div className="md:col-span-3">
            <p className="micro">02 / Index / Services</p>
          </div>
          <div className="md:col-span-9">
            <p className="micro text-foreground/50 text-right">p. 002</p>
          </div>
        </div>

        <div className="py-16 md:py-20">
          <h2 className="display-sans text-[48px] md:text-[96px] mb-12">
            engineering, design,
            <br />
            <span className="text-accent">applied ai.</span>
          </h2>

          <p className="text-[17px] max-w-2xl text-foreground/85 mb-16">
            Three practices, run by the three heads who built
            them. Most engagements touch more than one. We
            scope and price on a project by project basis,
            because every serious problem looks different when
            you look at it closely.
          </p>
        </div>

        <div className="border-t border-foreground">
          {services.map((s) => (
            <article
              key={s.num}
              className="grid md:grid-cols-12 gap-x-6 gap-y-6 py-12 md:py-16 border-b border-foreground/20"
            >
              <div className="md:col-span-2">
                <div className="display-sans text-[72px] md:text-[96px] leading-none text-accent">
                  {s.num}
                </div>
                <p className="micro mt-2">{s.tag}</p>
              </div>

              <div className="md:col-span-6">
                <h3 className="display-sans text-[40px] md:text-[56px] mb-5">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-foreground/85 max-w-xl">
                  {s.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="micro border border-foreground/40 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 md:pl-6 md:border-l border-foreground/20">
                <p className="micro mb-4">Deliverables</p>
                <ul className="list-none m-0 p-0">
                  {s.deliverables.map((d, i) => (
                    <li
                      key={d}
                      className={`text-[15px] py-3 flex items-center gap-3 ${i > 0 ? "border-t border-foreground/15" : ""}`}
                    >
                      <span className="w-4 h-4 border border-foreground inline-block relative">
                        <span className="absolute inset-1 bg-accent"></span>
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="py-12 text-center">
          <p className="micro mb-4">Engagement</p>
          <p className="display-sans text-[28px] md:text-[40px] mb-6">
            one practice, or all three. we&rsquo;ll tell you which fits.
          </p>
          <a
            href="#contact"
            className="no-border inline-block bg-accent text-accent-foreground px-7 py-4 micro hover:bg-foreground"
          >
            Start the conversation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
