const links = ['About', 'Technology', 'Docs', 'Careers', 'Privacy', 'Contact'];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-sm text-foreground font-semibold">Tars Labs © 2026</p>
          <p className="text-xs text-muted-foreground mt-1">Founded by Mohidul Alom Laskar</p>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-display">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
