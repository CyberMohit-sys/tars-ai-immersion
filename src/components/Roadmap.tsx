import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Clock, Rocket, Bot, Globe2, BrainCircuit } from 'lucide-react';

const milestones = [
  { year: '2024', title: 'Foundation & Core AI', desc: 'Built TARS AI core engine, launched conversational intelligence and multi-model architecture.', status: 'completed', icon: CheckCircle2 },
  { year: '2025', title: 'Visual AI & Healthcare', desc: 'Launched TarsVision for image generation, deployed Lifecare AI for healthcare diagnostics. Expanding the team.', status: 'current', icon: Clock },
  { year: '2026', title: 'Global Platform Expansion', desc: 'Scaling TARS AI to serve millions globally. Launching TARS AI Studio and developer APIs.', status: 'upcoming', icon: Globe2 },
  { year: '2027', title: 'Multi-Agent Autonomous Systems', desc: 'Deploying collaborative AI agents for complex task orchestration and enterprise workflows.', status: 'upcoming', icon: Bot },
  { year: '2028', title: 'Robotics & Physical AI', desc: 'Bridging digital intelligence with the physical world — autonomous systems beyond the screen.', status: 'upcoming', icon: BrainCircuit },
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
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From foundational research to global deployment — our journey to autonomous intelligence.
          </p>
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

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-background ${
                      m.status === 'completed' ? 'bg-accent/20' :
                      m.status === 'current' ? 'bg-primary/20 shadow-[0_0_25px_hsl(210_100%_56%/0.5)]' :
                      'bg-muted/40'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        m.status === 'completed' ? 'text-accent' :
                        m.status === 'current' ? 'text-primary' :
                        'text-muted-foreground'
                      }`} strokeWidth={2} />
                    </div>
                    {m.status === 'current' && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-primary/30"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="font-display text-primary text-sm tracking-[0.3em] font-medium">{m.year}</span>
                      {m.status === 'current' && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-display tracking-wider uppercase">
                          Now
                        </span>
                      )}
                      {m.status === 'completed' && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-display tracking-wider uppercase">
                          Done
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mt-1 text-foreground">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{m.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
