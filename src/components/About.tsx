import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Cpu, Globe, Zap, Users } from 'lucide-react';

const stats = [
  { value: 50, suffix: 'K+', label: 'API Requests/Day', icon: Zap },
  { value: 12, suffix: '+', label: 'AI Models Built', icon: Cpu },
  { value: 4, suffix: '+', label: 'Products Live', icon: Globe },
  { value: 10, suffix: '+', label: 'Team Members', icon: Users },
];

function AnimatedStat({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * stat.value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, stat.value]);

  return (
    <div className="text-center group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors border border-primary/10">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      <p className="font-display text-3xl md:text-4xl font-bold text-primary counter-glow">
        {count}{stat.suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
    </div>
  );
}

const pillars = [
  {
    title: 'Autonomous Intelligence',
    desc: 'We build AI systems that don\'t just respond — they think, plan, and execute autonomously. From multi-step reasoning to complex task orchestration, TARS operates beyond simple prompt-response loops.',
  },
  {
    title: 'Full-Stack AI Products',
    desc: 'TarsLabs delivers complete AI platforms — conversational engines, visual AI, healthcare intelligence, and developer APIs. Every product is built for real-world deployment at scale.',
  },
  {
    title: 'Open Research, Real Impact',
    desc: 'Our research isn\'t locked in papers. Every breakthrough in multi-modal understanding, agent orchestration, and autonomous reasoning is directly integrated into our live products.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About TarsLabs</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Built for the<br />
            <span className="text-gradient">Autonomous Future.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            TarsLabs is an independent AI research and product company focused on building autonomous intelligence systems that think, build, and execute — pushing the boundaries of what artificial intelligence can achieve.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 py-10 border-y border-border/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} inView={isInView} />
          ))}
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="glass-panel gradient-border p-8 group hover:bg-muted/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.12)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-5 border border-primary/10">
                <span className="text-primary font-display font-bold text-sm">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
