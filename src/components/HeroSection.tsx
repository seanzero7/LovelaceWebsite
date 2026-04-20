const HeroSection = () => {
  const year = new Date().getFullYear();

  return (
    <section className="border-b-2 border-foreground">
      {/* status bar */}
      <div className="shell border-b border-foreground/20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/20">
          <div className="py-3 pr-4 micro flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-accent"></span>
            Open for new work
          </div>
          <div className="py-3 px-4 micro text-foreground/60 hidden md:block">
            33.7490&deg; N, 84.3880&deg; W
          </div>
          <div className="py-3 px-4 micro text-foreground/60">
            Index {year}
          </div>
          <div className="py-3 pl-4 micro text-foreground/60 text-right">
            Vol. 01
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="shell py-14 md:py-24">
        <div className="grid md:grid-cols-12 gap-x-6 gap-y-10">
          <div className="md:col-span-9">
            <p className="micro text-accent mb-6">
              &#9632;&nbsp;&nbsp; A software studio with a small
              footprint and a long attention span
            </p>

            <h1 className="display-sans text-[56px] md:text-[112px] lg:text-[148px]">
              we build
              <br />
              software
              <br />
              <span className="text-accent">that behaves.</span>
            </h1>
          </div>

          <div className="md:col-span-3 md:pt-6 flex flex-col gap-6">
            <div>
              <p className="micro mb-2">File 00 / Brief</p>
              <p className="text-[15px] leading-snug text-foreground/85">
                Lovelace is an independent software studio.
                We design interfaces, engineer the systems
                behind them, and help companies put AI to
                work with rigor.
              </p>
            </div>

            <div className="border-t border-foreground/30 pt-4">
              <p className="micro mb-2">Founded</p>
              <p className="text-[15px]">Atlanta, by Georgia Tech alumni.</p>
            </div>

            <div className="border-t border-foreground/30 pt-4">
              <p className="micro mb-2">Reach</p>
              <a href="#contact" className="text-[15px]">
                Start a project &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* capability strip */}
      <div className="border-t border-foreground/20">
        <div className="shell grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/20">
          <a href="#services" className="no-border group py-8 md:py-10 md:pr-8 flex items-start gap-5 hover:bg-foreground hover:text-background transition-none px-2 md:px-4">
            <span className="display-sans text-[44px] leading-none text-accent group-hover:text-background">01</span>
            <div>
              <p className="display-sans text-[22px] mb-1">custom software</p>
              <p className="text-[13px] text-foreground/60 group-hover:text-background/60">Applications, platforms, internal tools.</p>
            </div>
          </a>
          <a href="#services" className="no-border group py-8 md:py-10 md:px-8 flex items-start gap-5 hover:bg-foreground hover:text-background px-2">
            <span className="display-sans text-[44px] leading-none text-accent group-hover:text-background">02</span>
            <div>
              <p className="display-sans text-[22px] mb-1">fullstack design</p>
              <p className="text-[13px] text-foreground/60 group-hover:text-background/60">Interface, experience, architecture.</p>
            </div>
          </a>
          <a href="#services" className="no-border group py-8 md:py-10 md:pl-8 flex items-start gap-5 hover:bg-foreground hover:text-background px-2 md:px-4">
            <span className="display-sans text-[44px] leading-none text-accent group-hover:text-background">03</span>
            <div>
              <p className="display-sans text-[22px] mb-1">ai consulting</p>
              <p className="text-[13px] text-foreground/60 group-hover:text-background/60">Strategy, selection, integration.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
