const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="section-shell py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-foreground/30">
          <div className="flex items-baseline gap-3">
            <img
              src="/LovelaceIconFinal.png"
              alt=""
              className="h-5 w-5 self-center"
              loading="lazy"
            />
            <span className="text-[20px] tracking-tight">Lovelace</span>
            <span className="label-mono">Software Studio</span>
          </div>
          <a
            href="mailto:lovelacetechnologiesgt@gmail.com"
            className="label-mono no-underline text-foreground hover:text-accent"
          >
            lovelacetechnologiesgt@gmail.com &nbsp;&rarr;
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-baseline justify-between gap-4 text-[13px] text-muted-foreground">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Lovelace LLC. Made by hand in Atlanta, Georgia.
          </p>
          <p className="m-0 italic max-w-md text-right">
            &ldquo;That brain of mine is something more than merely mortal;
            as time will show.&rdquo; Ada Lovelace.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
