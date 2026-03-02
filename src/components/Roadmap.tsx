import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '2026', title: 'Global AI Platform Expansion' },
  { year: '2027', title: 'Multi-Agent Autonomous Systems' },
  { year: '2028', title: 'Robotics & Physical AI Integration' },
];

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Roadmap</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The Path <span className="text-gradient">Forward</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent md:-translate-x-px"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-display text-primary text-sm tracking-[0.2em]">{m.year}</span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mt-1 text-foreground">{m.title}</h3>
                </div>

                {/* Spacer for alternation on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
