import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background noise-overlay"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Multi-layer ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle, hsl(210 100% 56% / 0.08), hsl(260 80% 55% / 0.04), transparent)' }} />

          <div className="relative flex flex-col items-center">
            {/* Logo ring with orbiting dots */}
            <motion.div
              className="w-28 h-28 rounded-full border border-primary/20 flex items-center justify-center relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Outer spinning ring */}
              <motion.div
                className="absolute inset-[-4px] rounded-full"
                style={{ border: '1px solid transparent', borderTopColor: 'hsl(210 100% 56% / 0.4)', borderRightColor: 'hsl(260 80% 55% / 0.2)' }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
              {/* Inner dashed ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-dashed border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              />
              {/* Core dot */}
              <motion.div
                className="w-4 h-4 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.8, 1] }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ boxShadow: '0 0 40px hsl(210 100% 56% / 0.8), 0 0 80px hsl(210 100% 56% / 0.3)' }}
              />
            </motion.div>

            {/* Brand text */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-3xl font-bold tracking-[0.5em] text-foreground">
                TARS<span className="text-primary">LABS</span>
              </h1>
              <p className="text-[10px] text-muted-foreground/60 font-display tracking-[0.6em] mt-2 uppercase">Innovation</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="mt-8 w-56 h-[2px] bg-muted/30 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, hsl(210 100% 56%), hsl(180 100% 50%), hsl(260 80% 55%))' }}
                initial={{ width: '0%' }}
                animate={phase >= 1 ? { width: '100%' } : {}}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              className="mt-5 text-[10px] text-muted-foreground/40 font-display tracking-[0.4em] uppercase"
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              Initializing Systems
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
