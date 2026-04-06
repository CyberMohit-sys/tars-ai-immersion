import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Scale, Brain, Users, FileText, ArrowUpRight, AlertTriangle, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pillars = [
  { icon: Shield, title: 'Safety First', desc: 'Every model undergoes rigorous red-teaming, adversarial testing, and human evaluation before deployment. We maintain a dedicated AI Safety team of 40+ researchers.' },
  { icon: Scale, title: 'Fairness & Bias Mitigation', desc: 'We systematically audit our models for demographic biases across gender, race, age, and culture. Regular third-party audits ensure accountability.' },
  { icon: Brain, title: 'Transparency', desc: 'We publish model cards, system prompts, and detailed documentation. Our research papers are open-access and our methodology is reproducible.' },
  { icon: Users, title: 'Human Oversight', desc: 'AI should augment, not replace, human decision-making in critical domains. We build guardrails and human-in-the-loop systems by default.' },
  { icon: AlertTriangle, title: 'Misuse Prevention', desc: 'Proactive monitoring, usage policies, and technical controls prevent harmful applications. We maintain a Responsible Disclosure program.' },
  { icon: Lightbulb, title: 'Societal Benefit', desc: 'We allocate 10% of compute to pro-bono projects in healthcare, education, climate science, and accessibility.' },
];

const commitments = [
  'Published 12 AI safety research papers in 2025-2026',
  'Established independent AI Ethics Advisory Board',
  'Member of the Partnership on AI and OECD AI Policy Observatory',
  'Annual Responsible AI Report published publicly',
  'Bug bounty program for AI safety vulnerabilities ($50K max reward)',
  'No deployment of AI for autonomous weapons or mass surveillance',
];

export default function Ethics() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">AI Ethics</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Responsible <span className="text-gradient">AI Development</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Building AI that is safe, fair, transparent, and beneficial for all of humanity. Our ethical framework guides every decision we make.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2"><FileText className="w-4 h-4" /> Read Our Ethics Policy</a>
              <Link to="/trust-safety" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Trust & Safety</Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Ethical Pillars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel gradient-border p-6">
              <p.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 border-t border-border/20">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Commitments</h2>
        <div className="glass-panel gradient-border p-8">
          <ul className="space-y-4">
            {commitments.map((c, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {c}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Questions about our AI ethics?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/contact" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Contact Ethics Team</Link>
            <Link to="/research" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Research</Link>
            <Link to="/security" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Security</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
