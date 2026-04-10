import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

const stats = [
  { value: '12+', label: 'AI Systems', icon: Cpu },
  { value: '5', label: 'Products Live', icon: Zap },
  { value: '8', label: 'Research Domains', icon: Globe },
  { value: '99.9%', label: 'Uptime', icon: Shield },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <motion.div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/3 blur-[180px]" style={{ y: bgY }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About TarsLabs Innovation</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            Built for the<br />
            <span className="text-gradient">Autonomous Future.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel gradient-border p-8 shimmer">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">Who We Are</h3>
            <p className="text-foreground/70 text-base leading-relaxed">
              TarsLabs Innovation is an independent AI research and product company focused on building autonomous intelligence systems that think, build, and execute — independently.
            </p>
          </div>
          <div className="glass-panel gradient-border p-8 shimmer">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-foreground/70 text-base leading-relaxed">
              To transform artificial intelligence from reactive tools into proactive systems capable of creation, reasoning, and execution at scale.
            </p>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="glass-panel-solid p-6 text-center group hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Icon className="w-5 h-5 text-primary/60 mx-auto mb-3 group-hover:text-primary transition-colors" />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground counter-glow">{stat.value}</p>
                <p className="text-muted-foreground text-xs mt-1 font-display tracking-wide">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-20 animated-gradient-line h-px w-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>
    </section>
  );
}
