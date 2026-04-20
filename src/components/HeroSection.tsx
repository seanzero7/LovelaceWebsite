const HeroSection = () => {
  return (
    <section className="rule-bottom">
      <div className="section-shell pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-8">
            <p className="label-mono mb-6">
              <span className="text-accent">&#9679;</span>&nbsp;&nbsp;Currently accepting new projects
            </p>

            <h1 className="display-serif text-[44px] md:text-[72px] lg:text-[84px] mb-8">
              Software, design,
              <br />
              and <em>practical</em> AI.
              <br />
              Built by hand in Atlanta.
            </h1>

            <p className="text-[19px] md:text-[20px] leading-relaxed max-w-[620px] text-foreground/85">
              Lovelace is a three-person studio. We build custom
              software, design products from the interface down
              to the infrastructure, and help companies put AI
              to work in ways that actually fit the business.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="no-underline inline-block bg-foreground text-background px-6 py-3 text-[14px] tracking-wide hover:bg-accent"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="no-underline inline-block border border-foreground px-6 py-3 text-[14px] tracking-wide text-foreground hover:bg-foreground hover:text-background"
              >
                See what we do
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:pl-6 md:border-l border-foreground/30">
            <div className="label-mono mb-4">Fig. 01 / The mark</div>
            <div className="border border-foreground/80 bg-secondary aspect-square flex items-center justify-center mb-3">
              <img
                src="/LovelaceIconFinal.png"
                alt="Lovelace studio mark"
                className="w-2/3 h-2/3 object-contain"
                loading="eager"
              />
            </div>
            <p className="text-[13px] text-muted-foreground leading-snug italic">
              Named for Ada Lovelace, who wrote what is generally
              considered the first computer program in 1843,
              for a machine that was never built.
            </p>
          </aside>
        </div>
      </div>

      <div className="rule-top">
        <div className="section-shell py-4 flex flex-wrap gap-x-10 gap-y-2 justify-between label-mono">
          <span>01 &nbsp; Custom Software</span>
          <span>02 &nbsp; Fullstack Design</span>
          <span>03 &nbsp; AI Consulting</span>
          <span className="text-foreground/60">Est. Atlanta, GA</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
