import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn, LogOut, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth';

const TARS_URL = 'https://tars-ai-blush.vercel.app/';
const LINKEDIN_URL = 'https://in.linkedin.com/in/mohidul-alom-laskar-09626b320';
const GITHUB_URL = 'https://github.com/CyberMohit-sys';

const navItems = [
  {
    label: 'Products',
    children: [
      { label: 'TARS AI', href: TARS_URL, external: true },
      { label: 'TARS Vision', href: 'https://tarsvision.vercel.app/', external: true },
      { label: 'Lifecare AI', href: 'https://lifecareai-health-guardian.vercel.app/', external: true },
      { label: 'Models', href: '/models' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  { label: 'Research', href: '/research' },
  {
    label: 'Developers',
    children: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Playground', href: '/playground' },
      { label: 'Open Source', href: '/open-source' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  { label: 'Solutions', href: '/solutions' },
  {
    label: 'Company',
    children: [
      { label: 'About', href: '/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Partners', href: '/partners' },
      { label: 'Events', href: '/events' },
      { label: 'Press', href: '/press' },
      { label: 'Trust & Safety', href: '/trust-safety' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

function DropdownItem({ item }: { item: typeof navItems[0] }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return item.href?.startsWith('/') ? (
      <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">{item.label}</Link>
    ) : (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">{item.label}</a>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display flex items-center gap-1">
        {item.label} <ChevronDown className="w-3 h-3" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 mt-2 glass-panel p-2 min-w-[180px] z-50"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            {item.children.map(c =>
              c.external ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-colors font-display">{c.label}</a>
              ) : (
                <Link key={c.label} to={c.href!} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-colors font-display">{c.label}</Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate('/' + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel rounded-none border-x-0 border-t-0' : 'bg-transparent'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-bold tracking-wider text-foreground">
            TARS<span className="text-primary">LABS</span> <span className="text-xs text-muted-foreground font-normal tracking-normal">Innovation</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <DropdownItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Social links */}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hidden md:flex w-8 h-8 items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hidden md:flex w-8 h-8 items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-display">{user?.name || user?.email}</span>
                <button onClick={signOut} className="btn-outline-glow text-sm px-4 py-1.5 flex items-center gap-1.5">
                  <LogOut className="w-3.5 h-3.5" /> Sign Out
                </button>
              </div>
            ) : (
              <Link to="/sign-in" className="btn-glow text-primary-foreground text-sm px-5 py-2 hidden sm:inline-flex items-center gap-1.5">
                <LogIn className="w-3.5 h-3.5" /> Sign In
              </Link>
            )}

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile slide-out */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-background/60 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[80] w-80 glass-panel rounded-l-2xl border-r-0 rounded-r-none p-8 flex flex-col overflow-y-auto"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display text-lg font-bold tracking-wider text-foreground">
                  TARS<span className="text-primary">LABS</span> <span className="text-xs text-muted-foreground font-normal tracking-normal">Innovation</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map(item => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <span className="text-xs text-muted-foreground font-display tracking-widest uppercase">{item.label}</span>
                        <div className="ml-3 mt-2 space-y-2">
                          {item.children.map(c =>
                            c.external ? (
                              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block text-foreground/80 hover:text-foreground text-sm font-display">{c.label}</a>
                            ) : (
                              <Link key={c.label} to={c.href!} onClick={() => setMobileOpen(false)} className="block text-foreground/80 hover:text-foreground text-sm font-display">{c.label}</Link>
                            )
                          )}
                        </div>
                      </>
                    ) : item.href?.startsWith('/') ? (
                      <Link to={item.href} onClick={() => setMobileOpen(false)} className="text-lg text-foreground/80 hover:text-foreground font-display">{item.label}</Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-lg text-foreground/80 hover:text-foreground font-display">{item.label}</a>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 flex gap-4">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>

              <div className="mt-auto pt-8">
                {isAuthenticated ? (
                  <button onClick={() => { signOut(); setMobileOpen(false); }} className="btn-outline-glow text-sm w-full text-center py-3">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/sign-in" onClick={() => setMobileOpen(false)} className="btn-glow text-primary-foreground text-sm w-full text-center block py-3">
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
