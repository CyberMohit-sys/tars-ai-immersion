import { motion } from 'framer-motion';
import { Check, X, Zap, Eye, Code2, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const models = [
  {
    name: 'TARS Ultra',
    icon: <Zap className="w-5 h-5" />,
    tagline: 'Most capable model for complex reasoning',
    color: 'primary',
    context: '200K tokens',
    speed: '45 tok/s',
    price: '$15 / 1M tokens',
    capabilities: {
      'Text Generation': true,
      'Code Generation': true,
      'Reasoning & Analysis': true,
      'Function Calling': true,
      'Image Understanding': true,
      'Image Generation': false,
      'Agent Orchestration': true,
      'Real-time Streaming': true,
      'Multi-language': true,
      'JSON Mode': true,
    },
    best: 'Research, complex analysis, multi-step reasoning',
  },
  {
    name: 'TARS Vision',
    icon: <Eye className="w-5 h-5" />,
    tagline: 'Visual intelligence and image generation',
    color: 'accent',
    context: '128K tokens',
    speed: '60 tok/s',
    price: '$10 / 1M tokens',
    capabilities: {
      'Text Generation': true,
      'Code Generation': false,
      'Reasoning & Analysis': true,
      'Function Calling': false,
      'Image Understanding': true,
      'Image Generation': true,
      'Agent Orchestration': false,
      'Real-time Streaming': true,
      'Multi-language': true,
      'JSON Mode': true,
    },
    best: 'Image generation, visual analysis, creative content',
  },
  {
    name: 'TARS Code',
    icon: <Code2 className="w-5 h-5" />,
    tagline: 'Optimized for software development',
    color: 'secondary',
    context: '128K tokens',
    speed: '80 tok/s',
    price: '$8 / 1M tokens',
    capabilities: {
      'Text Generation': true,
      'Code Generation': true,
      'Reasoning & Analysis': true,
      'Function Calling': true,
      'Image Understanding': false,
      'Image Generation': false,
      'Agent Orchestration': false,
      'Real-time Streaming': true,
      'Multi-language': true,
      'JSON Mode': true,
    },
    best: 'Code completion, debugging, architecture design',
  },
  {
    name: 'TARS Agent',
    icon: <Bot className="w-5 h-5" />,
    tagline: 'Autonomous task execution and orchestration',
    color: 'primary',
    context: '200K tokens',
    speed: '35 tok/s',
    price: '$20 / 1M tokens',
    capabilities: {
      'Text Generation': true,
      'Code Generation': true,
      'Reasoning & Analysis': true,
      'Function Calling': true,
      'Image Understanding': true,
      'Image Generation': false,
      'Agent Orchestration': true,
      'Real-time Streaming': true,
      'Multi-language': true,
      'JSON Mode': true,
    },
    best: 'Autonomous workflows, multi-tool orchestration, complex tasks',
  },
];

const capabilityKeys = Object.keys(models[0].capabilities);

export default function Models() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Compare</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Model <span className="text-gradient">Comparison</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the right model for your use case. Each model is optimized for specific tasks and workloads.</p>
          </motion.div>

          {/* Model Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
            {models.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel gradient-border p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{m.icon}</div>
                  <h3 className="font-display font-semibold text-foreground">{m.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{m.tagline}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">Context</span><span className="text-foreground font-mono">{m.context}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">Speed</span><span className="text-foreground font-mono">{m.speed}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">Price</span><span className="text-foreground font-mono">{m.price}</span></div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-auto pt-3 border-t border-border/20">
                  <span className="text-primary">Best for:</span> {m.best}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-panel gradient-border overflow-hidden">
            <div className="p-6 border-b border-border/20">
              <h2 className="font-display text-xl font-semibold text-foreground">Capability Matrix</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left p-4 font-display text-muted-foreground text-xs">Capability</th>
                    {models.map(m => (
                      <th key={m.name} className="p-4 font-display text-xs text-center text-foreground">{m.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilityKeys.map((cap, i) => (
                    <tr key={cap} className={i % 2 === 0 ? 'bg-muted/5' : ''}>
                      <td className="p-4 text-xs text-muted-foreground font-display">{cap}</td>
                      {models.map(m => (
                        <td key={m.name} className="p-4 text-center">
                          {m.capabilities[cap as keyof typeof m.capabilities] ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
            <Link to="/playground" className="btn-glow text-primary-foreground text-sm px-8 py-3 inline-flex items-center gap-2">
              Try in Playground <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
