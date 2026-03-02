import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '2026', title: 'Global AI Platform Expansion', desc: 'Scaling TARS AI to serve millions across the globe.' },
  { year: '2027', title: 'Multi-Agent Autonomous Systems', desc: 'Deploying collaborative AI agents for complex tasks.' },
  { year: '2028', title: 'Robotics & Physical AI Integration', desc: 'Bridging digital intelligence with the physical world.' },
];

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="section-padding relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Roadmap</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            The Path <span className="text-gradient">Forward</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px origin-top"
            style={{ background: 'linear-gradient(to bottom, hsl(210 100% 56% / 0.5), hsl(260 80% 55% / 0.3), transparent)' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="space-y-20">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-2 border-background" style={{ boxShadow: '0 0 20px hsl(210 100% 56% / 0.5)' }} />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-display text-primary text-sm tracking-[0.3em] font-medium">{m.year}</span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mt-2 text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
