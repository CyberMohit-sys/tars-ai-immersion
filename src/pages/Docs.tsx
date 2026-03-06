import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Key, Code2, Eye, Zap, AlertTriangle, Terminal, Rocket, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { icon: Rocket, title: 'Getting Started', desc: 'Quick start guide to integrate TARS AI into your applications in minutes.' },
  { icon: Key, title: 'Authentication', desc: 'API key management, OAuth flows, and secure token handling.' },
  { icon: Book, title: 'API Reference', desc: 'Complete REST and WebSocket API documentation with examples.' },
  { icon: Zap, title: 'Model Capabilities', desc: 'Detailed specifications for TARS Ultra, Vision, Code, and Agents.' },
  { icon: Eye, title: 'Vision API', desc: 'Multimodal image understanding, generation, and analysis endpoints.' },
  { icon: AlertTriangle, title: 'Rate Limits', desc: 'Usage tiers, rate limiting policies, and quota management.' },
  { icon: Terminal, title: 'SDK Examples', desc: 'Code samples in Python, JavaScript, Go, and Rust.' },
  { icon: Code2, title: 'Error Codes', desc: 'Comprehensive error reference with troubleshooting guides.' },
  { icon: Rocket, title: 'Deployment Guide', desc: 'Best practices for production deployment and scaling.' },
];

export default function Docs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Documentation</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              TARS AI <span className="text-gradient">Docs</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Everything you need to build with TARS AI. Explore guides, API references, and SDK examples.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="glass-panel p-6 group cursor-pointer hover:bg-muted/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                      {s.title}
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 glass-panel gradient-border p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Quick Start</p>
          <div className="bg-background/80 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <div className="text-muted-foreground">{'// Install the TARS SDK'}</div>
            <div className="text-accent mt-1">npm install @tarslabs/sdk</div>
            <div className="text-muted-foreground mt-4">{'// Initialize'}</div>
            <div className="mt-1">
              <span className="text-secondary">import</span>{' '}
              <span className="text-foreground">{'{ TarsAI }'}</span>{' '}
              <span className="text-secondary">from</span>{' '}
              <span className="text-accent">'@tarslabs/sdk'</span>
            </div>
            <div className="mt-2">
              <span className="text-secondary">const</span>{' '}
              <span className="text-foreground">tars</span>{' = '}
              <span className="text-secondary">new</span>{' '}
              <span className="text-primary">TarsAI</span>
              <span className="text-foreground">{'({ apiKey: process.env.TARS_API_KEY })'}</span>
            </div>
            <div className="mt-4">
              <span className="text-secondary">const</span>{' '}
              <span className="text-foreground">response</span>{' = '}
              <span className="text-secondary">await</span>{' '}
              <span className="text-foreground">tars.</span>
              <span className="text-primary">chat</span>
              <span className="text-foreground">{'({ model: "tars-ultra", message: "Hello" })'}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
