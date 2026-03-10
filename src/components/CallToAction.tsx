import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const TARS_URL = 'https://tars-ai-blush.vercel.app/';

const badges = [
  { icon: Zap, label: 'Real-Time Streaming' },
  { icon: Shield, label: 'Enterprise-Grade Security' },
  { icon: Sparkles, label: 'Multi-Model Intelligence' },
];

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative text-center overflow-hidden" ref={ref}>
      {/* Multi-layer glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/6 blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Intelligence,<br />
          <span className="text-gradient">Reimagined.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Experience the next generation of AI. Start building with TARS today.
        </p>

        <a
          href={TARS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow text-primary-foreground text-lg px-12 py-4 inline-flex items-center gap-3 group"
        >
          Enter TARS AI
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                <span className="text-xs font-display tracking-wide">{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
