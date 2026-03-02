import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative text-center" ref={ref}>
      {/* Glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
          Intelligence,<br />
          <span className="text-gradient">Reimagined.</span>
        </h2>
        <button className="btn-glow text-primary-foreground text-lg px-10 py-4">
          Enter TARS AI
        </button>
      </motion.div>
    </section>
  );
}
