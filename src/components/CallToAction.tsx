import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const TARS_URL = 'https://tars-ai-company.vercel.app/';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative text-center overflow-hidden noise-overlay" ref={ref}>
      {/* Multi-layer dramatic glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[180px]"
        style={{ background: 'radial-gradient(ellipse, hsl(210 100% 56% / 0.12), hsl(260 80% 55% / 0.06), transparent)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(180 100% 50% / 0.06), transparent)' }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Ready to begin?
        </motion.p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[0.95]">
          Intelligence,<br />
          <span className="text-gradient">Reimagined.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12">
          Join the next generation of AI-powered creation. Build, automate, and innovate with TARS AI.
        </p>
        <a
          href={TARS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow text-primary-foreground text-lg px-14 py-4 inline-flex items-center gap-3 group"
        >
          <span>Enter TARS AI</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
