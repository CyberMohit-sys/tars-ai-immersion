import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
          {['Technology', 'Products', 'Research', 'Company'].map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              {l}
            </a>
          ))}
        </nav>
        <button className="btn-glow text-primary-foreground text-sm px-5 py-2">
          Launch AI
        </button>
      </div>
    </motion.header>
  );
}
