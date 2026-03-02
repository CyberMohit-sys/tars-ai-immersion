import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About Tars Labs</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Built for the<br />
            <span className="text-gradient">Autonomous Future.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tars Labs is an independent AI research and product company focused on building autonomous intelligence systems that think, build, and execute.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The mission is to transform artificial intelligence from reactive tools into proactive systems capable of creation and execution.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
