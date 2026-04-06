import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TARS_URL = 'https://tars-ai-company.vercel.app/';

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
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tight">
          Intelligence,<br />
          <span className="text-gradient">Reimagined.</span>
        </h2>
        <a
          href={TARS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow text-primary-foreground text-lg px-12 py-4 inline-block"
        >
          Enter TARS AI
        </a>
      </motion.div>
    </section>
  );
}
