import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Building2, Palette, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const segments = [
  { icon: Code2, title: 'For Developers', desc: 'Powerful APIs, SDKs, and tools to integrate autonomous AI into your applications. Build faster with TARS Code and deploy intelligent agents.', features: ['REST & WebSocket APIs', 'Python / JS / Go SDKs', 'Streaming responses', 'Model fine-tuning'] },
  { icon: Building2, title: 'For Enterprises', desc: 'Enterprise-grade AI solutions with dedicated infrastructure, compliance support, and custom model training for your organization.', features: ['Dedicated instances', 'SOC 2 compliance', 'Custom training', 'Priority support'] },
  { icon: Palette, title: 'For Creators', desc: 'Generate stunning visuals, write compelling content, and automate creative workflows with TARS Vision and multimodal AI.', features: ['Text-to-image generation', 'Content automation', 'Creative assistants', 'Brand voice training'] },
  { icon: Rocket, title: 'For Startups', desc: 'Accelerate your startup with free-tier access, startup credits, and scalable AI infrastructure that grows with you.', features: ['Free tier included', 'Startup credits program', 'Scalable infrastructure', 'Technical mentorship'] },
];

export default function Solutions() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Solutions</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Built for <span className="text-gradient">Everyone</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              From individual developers to global enterprises — TARS AI adapts to your needs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {segments.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              className="glass-panel gradient-border p-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map(f => (
                  <li key={f} className="text-sm text-foreground/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </motion.div>
  );
}
