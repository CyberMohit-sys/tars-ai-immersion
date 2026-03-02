import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Workflow, Code2, Radio, Layers, Shield } from 'lucide-react';

const features = [
  { icon: MessageSquare, label: 'Conversational Intelligence' },
  { icon: Workflow, label: 'Autonomous Workflow Execution' },
  { icon: Code2, label: 'Developer API Access' },
  { icon: Radio, label: 'Real-Time Streaming' },
  { icon: Layers, label: 'Multi-Model Switching' },
  { icon: Shield, label: 'Secure Infrastructure' },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Product</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The TARS <span className="text-gradient">Platform</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel gradient-border p-6 glow-blue"
          >
            <div className="rounded-xl bg-background/60 p-4 space-y-3">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="ml-3 text-xs text-muted-foreground font-display">TARS AI — Dashboard</span>
              </div>
              {/* Model selector */}
              <div className="flex gap-2 mb-3">
                {['TARS Ultra', 'TARS Vision', 'TARS Code'].map((m, i) => (
                  <span key={m} className={`text-xs px-3 py-1 rounded-full font-display ${i === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {m}
                  </span>
                ))}
              </div>
              {/* Chat lines */}
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-primary/10 text-foreground/80 text-sm px-4 py-2 rounded-2xl rounded-tr-md max-w-[70%]">
                    Analyze the latest research data and generate a summary report.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground/80 text-sm px-4 py-2 rounded-2xl rounded-tl-md max-w-[80%]">
                    Processing 847 documents across 12 research domains. Generating structured summary with key findings and actionable insights...
                  </div>
                </div>
              </div>
              {/* Input */}
              <div className="mt-4 flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3">
                <span className="text-muted-foreground text-sm flex-1">Ask TARS anything...</span>
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Radio className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-foreground/90 text-sm md:text-base">{f.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
