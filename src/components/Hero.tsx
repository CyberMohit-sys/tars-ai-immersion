import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

const AISphere = lazy(() => import('./AISphere'));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      {/* 3D Sphere */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <AISphere />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">TARS AI</span>
          </h1>
          <p className="font-display text-lg md:text-xl text-foreground/80 tracking-widest uppercase mb-4">
            Autonomous Intelligence System
          </p>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Engineering the next evolution of artificial intelligence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="btn-glow text-primary-foreground">
            Launch TARS AI
          </button>
          <button className="btn-outline-glow">
            Explore Technology
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
}
