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
    <section id="products" className="section-padding relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Product</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            The TARS <span className="text-gradient">Platform</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel gradient-border p-1 glow-blue"
          >
            <div className="rounded-xl bg-background/80 p-5 space-y-3">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                <span className="ml-3 text-xs text-muted-foreground font-display tracking-wider">TARS AI — Dashboard</span>
              </div>
              {/* Model selector */}
              <div className="flex gap-2 mb-4">
                {['TARS Ultra', 'TARS Vision', 'TARS Code'].map((m, i) => (
                  <span key={m} className={`text-xs px-3 py-1.5 rounded-lg font-display transition-colors ${i === 0 ? 'bg-primary/15 text-primary border border-primary/20' : 'bg-muted/50 text-muted-foreground'}`}>
                    {m}
                  </span>
                ))}
              </div>
              {/* Chat */}
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-primary/10 text-foreground/80 text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[75%] border border-primary/10">
                    Analyze the latest research data and generate a summary report.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted/60 text-foreground/80 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%] border border-border/30">
                    Processing 847 documents across 12 research domains. Generating structured summary with key findings...
                  </div>
                </div>
              </div>
              {/* Input */}
              <div className="mt-5 flex items-center gap-3 bg-muted/30 rounded-xl px-4 py-3 border border-border/20">
                <span className="text-muted-foreground text-sm flex-1">Ask TARS anything...</span>
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20">
                  <Radio className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  className="flex items-center gap-4 p-4 rounded-xl group hover:bg-muted/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0 border border-primary/10">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-foreground/90">{f.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
