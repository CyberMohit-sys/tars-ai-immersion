import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, lazy, useRef, useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const TARS_URL = 'https://tars-ai-company.vercel.app/';
const AISphere = lazy(() => import('./AISphere'));

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      )}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Cinematic background with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
      </motion.div>

      {/* Animated gradient mesh — larger, more dramatic */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(circle, hsl(210 100% 56% / 0.15), hsl(260 80% 55% / 0.08), transparent)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, hsl(180 100% 50% / 0.08), transparent)' }}
          animate={{ scale: [1.1, 1, 1.1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(260 80% 55% / 0.1), transparent)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(210 100% 56% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 56% / 0.4) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* 3D Sphere */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <AISphere />
        </Suspense>
      </div>

      {/* Content */}
      <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-6" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse-glow" />
            <span className="text-xs font-display text-primary tracking-[0.25em] uppercase">Autonomous Intelligence</span>
          </motion.div>

          {/* Main title */}
          <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-6 leading-[0.9]">
            <span className="text-gradient">TARS AI</span>
          </h1>

          {/* Subtitle with typewriter */}
          <div className="font-mono text-sm md:text-base text-foreground/50 tracking-[0.15em] uppercase mb-6 h-6">
            <TypewriterText text="Autonomous Intelligence System" delay={1000} />
          </div>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Engineering the next evolution of artificial intelligence — systems that think, create, and execute autonomously.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href={TARS_URL} target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground text-base">
            <span>Launch TARS AI</span>
          </a>
          <button onClick={() => scrollTo('#technology')} className="btn-outline-glow text-base">
            Explore Technology
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-[10px] text-muted-foreground/40 font-display tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground/30" />
      </motion.div>
    </section>
  );
}
