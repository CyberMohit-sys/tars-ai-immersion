import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-pulse-glow" />

          <div className="relative flex flex-col items-center">
            {/* Logo ring */}
            <motion.div
              className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Inner spinning ring */}
              <motion.div
                className="absolute inset-1 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />
              {/* Core dot */}
              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ boxShadow: '0 0 30px hsl(210 100% 56% / 0.8)' }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-2xl font-bold tracking-[0.4em] text-foreground">
                TARS<span className="text-primary">LABS</span>
              </h1>
              <p className="text-xs text-muted-foreground font-display tracking-widest mt-1">INNOVATION</p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-6 w-48 h-px bg-muted overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                initial={{ width: '0%' }}
                animate={phase >= 1 ? { width: '100%' } : {}}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-muted-foreground font-display tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              Initializing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
