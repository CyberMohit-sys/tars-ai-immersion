import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const TARS_URL = 'https://tars-ai-blush.vercel.app/';
const AISphere = lazy(() => import('./AISphere'));

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/8 blur-[150px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(210 100% 56% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 56% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* 3D Sphere */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <AISphere />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-display text-primary tracking-widest uppercase">Autonomous Intelligence</span>
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">TARS AI</span>
          </h1>
          <p className="font-display text-base md:text-lg text-foreground/60 tracking-[0.25em] uppercase mb-4">
            Autonomous Intelligence System
          </p>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Engineering the next evolution of artificial intelligence — systems that think, reason, and build autonomously.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href={TARS_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground inline-flex items-center gap-2 group">
            Launch TARS AI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => scrollTo('#technology')} className="btn-outline-glow">
            Explore Technology
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <div className="w-5 h-9 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary/50"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
