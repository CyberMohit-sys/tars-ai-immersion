import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, label }: { target: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, numericTarget]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-primary counter-glow">{count}+</p>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  );
}

const counters = [
  { target: '12', label: 'AI Systems Built' },
  { target: '5', label: 'Products Deployed' },
  { target: '8', label: 'Research Domains' },
  { target: '15', label: 'Ongoing Innovations' },
];

export default function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Leadership</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Built by <span className="text-gradient">Vision.</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-panel gradient-border p-8 md:p-12 glow-purple max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Avatar */}
          <motion.div
            className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-primary/40 bg-muted flex items-center justify-center animate-float"
            style={{ boxShadow: '0 0 40px hsl(210 100% 56% / 0.3)' }}
          >
            <span className="font-display text-3xl font-bold text-primary">ML</span>
          </motion.div>

          <h3 className="font-display text-2xl font-bold text-foreground mb-1">Mohidul Alom Laskar</h3>
          <p className="text-primary text-sm font-display tracking-wide mb-2">Founder & AI Architect</p>
          <p className="text-muted-foreground text-xs mb-6 font-display tracking-wider uppercase">Creator of TARS AI</p>

          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto mb-8">
            Mohidul Alom Laskar is the founder of Tars Labs and the architect behind TARS AI. With a mission to redefine artificial intelligence, he designs and engineers autonomous systems that think, build, and evolve. Every layer of TARS AI — from infrastructure to experience — is developed under his vision.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="btn-glow text-primary-foreground text-sm">Connect</button>
            <button className="btn-outline-glow text-sm">View Projects</button>
          </div>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {counters.map((c) => (
            <AnimatedCounter key={c.label} target={c.target} label={c.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
