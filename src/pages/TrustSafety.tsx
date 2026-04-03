import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Eye, Scale, AlertTriangle, FileCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const principles = [
  { icon: Shield, title: 'Safety by Design', desc: 'Every model undergoes rigorous red-teaming, adversarial testing, and bias evaluation before deployment. We invest 20% of our compute budget in safety research.' },
  { icon: Eye, title: 'Transparency Reports', desc: 'Quarterly published reports detailing content moderation actions, model behavior audits, government requests, and safety incidents.' },
  { icon: Scale, title: 'Responsible AI Framework', desc: 'Our proprietary Responsible AI Framework evaluates models across 147 dimensions including fairness, robustness, and societal impact.' },
  { icon: AlertTriangle, title: 'Incident Response', desc: 'Dedicated 24/7 Trust & Safety operations center with <1 hour response time for critical safety incidents globally.' },
  { icon: FileCheck, title: 'Compliance & Governance', desc: 'Full compliance with EU AI Act, NIST AI RMF, ISO 42001, and partnership with leading AI governance organizations.' },
  { icon: Users, title: 'Community Standards', desc: 'Clear usage policies, developer guidelines, and an independent advisory board overseeing ethical AI deployment.' },
];

export default function TrustSafety() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Trust & Safety</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Building AI You Can <span className="text-gradient">Trust</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Safety isn't an afterthought — it's the foundation of everything we build. We're committed to developing AI that is safe, transparent, and beneficial for all.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {principles.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="glass-panel gradient-border p-8 hover:bg-muted/20 transition-all">
            <p.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
