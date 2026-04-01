import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[150px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About TarsLabs Innovation</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Built for the<br />
            <span className="text-gradient">Autonomous Future.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel gradient-border p-8">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Tars Labs Innovation is an independent AI research and product company focused on building autonomous intelligence systems that think, build, and execute.
            </p>
          </div>
          <div className="glass-panel gradient-border p-8">
            <p className="text-foreground/80 text-lg leading-relaxed">
              The mission is to transform artificial intelligence from reactive tools into proactive systems capable of creation and execution.
            </p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
