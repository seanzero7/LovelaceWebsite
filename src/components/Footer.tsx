const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10 py-10 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg font-bold text-primary-foreground shrink-0 whitespace-nowrap">
          Lovelace&nbsp;<span className="text-primary-foreground/40 text-xs font-sans">LLC</span>
        </div>

        <p className="text-primary-foreground/40 text-xs text-center">
          © {new Date().getFullYear()} Lovelace LLC. All rights reserved. Atlanta, Georgia.
        </p>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-primary-foreground/50 hover:text-accent transition-colors text-xs uppercase tracking-wider">
            About
          </a>
          <a href="#team" className="text-primary-foreground/50 hover:text-accent transition-colors text-xs uppercase tracking-wider">
            Team
          </a>
          <a href="#contact" className="text-primary-foreground/50 hover:text-accent transition-colors text-xs uppercase tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
