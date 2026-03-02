import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const TARS_URL = 'https://tars-ai-blush.vercel.app/';

const navLinks = [
  { label: 'Technology', href: '#technology' },
  { label: 'Products', href: '#products' },
  { label: 'Founder', href: '#founder' },
  { label: 'Roadmap', href: '#roadmap' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
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
          <a href="#" className="font-display text-lg font-bold tracking-wider text-foreground">
            TARS<span className="text-primary">LABS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={TARS_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground text-sm px-5 py-2 hidden sm:inline-flex">
              Launch AI
            </a>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[80] w-72 glass-panel rounded-l-2xl border-r-0 rounded-r-none p-8 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display text-lg font-bold tracking-wider text-foreground">
                  TARS<span className="text-primary">LABS</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => scrollTo(l.href)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors font-display text-left"
                  >
                    {l.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href={TARS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow text-primary-foreground text-sm w-full text-center block py-3"
                >
                  Launch TARS AI
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
