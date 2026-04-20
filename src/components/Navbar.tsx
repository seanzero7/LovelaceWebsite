const Navbar = () => {
  return (
    <nav className="border-b-2 border-foreground bg-background sticky top-0 z-50">
      <div className="shell flex items-stretch justify-between">
        <a href="#" className="no-border flex items-center gap-3 py-4 pr-6 border-r border-foreground/20">
          <img
            src="/LovelaceIconFinal.png"
            alt="Lovelace mark"
            className="w-6 h-6 object-contain"
            loading="eager"
          />
          <span className="display-sans text-[22px]">lovelace</span>
        </a>

        <div className="hidden md:flex items-center micro text-foreground/60 px-6 border-r border-foreground/20">
          Independent software studio / Atlanta, GA
        </div>

        <ul className="flex items-stretch list-none m-0 p-0 ml-auto">
          <li className="border-l border-foreground/20">
            <a href="#about" className="no-border flex items-center h-full px-5 micro hover:bg-foreground hover:text-background">01 About</a>
          </li>
          <li className="border-l border-foreground/20">
            <a href="#services" className="no-border flex items-center h-full px-5 micro hover:bg-foreground hover:text-background">02 Work</a>
          </li>
          <li className="border-l border-foreground/20">
            <a href="#team" className="no-border flex items-center h-full px-5 micro hover:bg-foreground hover:text-background">03 Team</a>
          </li>
          <li className="border-l border-foreground/20">
            <a href="#contact" className="no-border flex items-center h-full px-5 micro bg-accent text-accent-foreground hover:bg-foreground">04 Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
