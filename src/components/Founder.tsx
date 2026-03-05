import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import mohidulImg from '@/assets/team-mohidul.png';
const TARS_URL = 'https://tars-ai-blush.vercel.app/';

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
    <section id="founder" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/4 blur-[180px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Leadership</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            The Mind Behind <span className="text-gradient">TARSLabs.</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-panel gradient-border p-8 md:p-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ boxShadow: '0 0 60px hsl(260 80% 55% / 0.15), 0 0 120px hsl(210 100% 56% / 0.08)' }}
        >
          {/* Avatar */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/40 overflow-hidden relative"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 80px hsl(210 100% 56% / 0.45), 0 0 120px hsl(260 80% 55% / 0.2), inset 0 0 40px hsl(210 100% 56% / 0.15)' }}
          >
            <img src={mohidulImg} alt="Mohidul Alom Laskar" className="w-full h-full object-cover object-top" loading="lazy" />
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-accent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              style={{ top: '5%', left: '50%', transformOrigin: '0 45px', boxShadow: '0 0 10px hsl(180 100% 50% / 0.6)' }}
            />
          </motion.div>

          <h3 className="font-display text-2xl font-bold text-foreground mb-1">Mohidul Alom Laskar</h3>
          <p className="text-primary text-sm font-display tracking-wide mb-1">Founder & AI Architect</p>
          <p className="text-muted-foreground text-xs mb-8 font-display tracking-[0.2em] uppercase">Creator of TARS AI</p>

          <p className="text-primary/70 italic text-sm md:text-base font-display mb-6 tracking-wide">
            "The future belongs to autonomous intelligence."
          </p>

          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto mb-10">
            Mohidul Alom Laskar is the founder of TARSLabs and the architect behind TARS AI. His mission is to build autonomous artificial intelligence systems that can think, learn, and evolve. Through TARSLabs, he is developing the foundation for next-generation AI platforms that automate complex tasks and power intelligent digital ecosystems.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="https://in.linkedin.com/in/mohidul-alom-laskar-09626b320" target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground text-sm">Connect</a>
            <a href="https://github.com/CyberMohit-sys" target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-sm">View Projects</a>
          </div>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
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
