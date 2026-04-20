const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      {/* giant wordmark */}
      <div className="shell py-16 md:py-24 border-b border-foreground/20">
        <p className="display-sans text-[22vw] md:text-[18vw] leading-none tracking-tighter text-foreground">
          lovelace<span className="text-accent">.</span>
        </p>
      </div>

      <div className="shell py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-foreground/20">
          <div>
            <p className="micro text-foreground/50 mb-2">Studio</p>
            <p className="text-[14px]">Atlanta, Georgia</p>
          </div>
          <div>
            <p className="micro text-foreground/50 mb-2">Email</p>
            <a
              href="mailto:lovelacetechnologiesgt@gmail.com"
              className="text-[14px] break-all"
            >
              lovelacetechnologiesgt@gmail.com
            </a>
          </div>
          <div>
            <p className="micro text-foreground/50 mb-2">Founded</p>
            <p className="text-[14px]">By Georgia Tech alumni</p>
          </div>
          <div>
            <p className="micro text-foreground/50 mb-2">Status</p>
            <p className="text-[14px] flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-accent"></span>
              Open for new projects
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-baseline justify-between gap-4 micro text-foreground/60">
          <p className="m-0">
            &copy; {year} Lovelace LLC. All rights reserved.
          </p>
          <p className="m-0 normal-case tracking-normal text-[12px] italic max-w-md text-right">
            &ldquo;That brain of mine is something more than merely
            mortal; as time will show.&rdquo; Ada Lovelace.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
