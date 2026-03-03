import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, BarChart3, Cpu, Shield, PenTool } from 'lucide-react';

const items = [
  { icon: FileText, title: 'Research Papers', desc: 'Published work on autonomous reasoning, multi-agent coordination, and neural architecture innovations.', tag: 'Papers' },
  { icon: BarChart3, title: 'Benchmarks', desc: 'TARS model performance on industry-standard and proprietary evaluation suites.', tag: 'Data' },
  { icon: Cpu, title: 'Model Architecture', desc: 'Technical overview of TARS Ultra\'s hybrid attention mechanism and inference pipeline.', tag: 'Architecture' },
  { icon: Shield, title: 'Safety Systems', desc: 'AI alignment research, red-teaming frameworks, and responsible deployment methodology.', tag: 'Safety' },
  { icon: PenTool, title: 'Technical Blog', desc: 'Deep dives into engineering challenges, breakthroughs, and development philosophy.', tag: 'Blog' },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Research</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Advancing <span className="text-gradient">Intelligence</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Our research pushes the boundaries of what autonomous AI systems can achieve.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="glass-panel p-6 md:p-8 flex items-start gap-6 group cursor-pointer hover:bg-muted/20 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-primary/20 text-primary font-display">{item.tag}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
