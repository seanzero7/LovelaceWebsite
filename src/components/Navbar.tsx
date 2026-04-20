const Navbar = () => {
  return (
    <nav className="rule-bottom bg-background sticky top-0 z-50">
      <div className="section-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <a href="#" className="no-underline text-foreground flex items-baseline gap-3">
          <img
            src="/LovelaceIconFinal.png"
            alt=""
            className="h-6 w-6 self-center"
            loading="eager"
          />
          <span className="text-[22px] tracking-tight">Lovelace</span>
          <span className="label-mono hidden sm:inline">Software Studio / Atlanta</span>
        </a>
        <ul className="flex gap-6 list-none m-0 p-0 text-[14px]">
          <li><a href="#about" className="text-foreground/80 no-underline hover:text-accent hover:underline">About</a></li>
          <li><a href="#services" className="text-foreground/80 no-underline hover:text-accent hover:underline">Work</a></li>
          <li><a href="#team" className="text-foreground/80 no-underline hover:text-accent hover:underline">Team</a></li>
          <li><a href="#contact" className="text-accent">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
