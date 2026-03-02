const links = [
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === '#') return;
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-sm text-foreground font-semibold tracking-wider">
            TARS<span className="text-primary">LABS</span> © 2026
          </p>
          <p className="text-xs text-muted-foreground mt-1">Founded by Mohidul Alom Laskar</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-display"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
