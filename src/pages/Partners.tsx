import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, Globe, Zap, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const partnerTypes = [
  { icon: Globe, title: 'Technology Partners', desc: 'Integrate TarsLabs AI capabilities into your platform or product. Access our APIs, SDKs, and co-development opportunities.' },
  { icon: Zap, title: 'Solution Partners', desc: 'Resell and implement TarsLabs Innovation solutions for your clients. Get training, support, and co-marketing resources.' },
  { icon: Shield, title: 'Research Partners', desc: 'Collaborate on cutting-edge AI research. Joint publications, shared datasets, and access to our research infrastructure.' },
  { icon: Handshake, title: 'Strategic Alliances', desc: 'Long-term partnerships for enterprises looking to deeply integrate autonomous AI into their operations.' },
];

const benefits = [
  'Early access to new products and features',
  'Dedicated partner support and engineering assistance',
  'Co-marketing and co-branding opportunities',
  'Revenue sharing and referral programs',
  'Joint go-to-market strategies',
  'Access to TarsLabs research and publications',
];

export default function Partners() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Partners</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Build the Future <span className="text-gradient">Together</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Partner with TarsLabs Innovation to bring autonomous AI to your customers and markets.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {partnerTypes.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel gradient-border p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Partner Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map(b => (
              <div key={b} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-muted-foreground text-sm">{b}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-glow text-primary-foreground text-sm px-8 py-3 inline-block mt-8">Become a Partner</Link>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
