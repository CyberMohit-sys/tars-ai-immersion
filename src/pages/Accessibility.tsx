import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Ear, Hand, Monitor, CheckCircle, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const principles = [
  { icon: Eye, title: 'Perceivable', desc: 'All content is available in alternative formats — screen reader support, alt text, captions, and high-contrast modes across every product.' },
  { icon: Hand, title: 'Operable', desc: 'Full keyboard navigation, no time-dependent interactions, skip navigation links, and focus management throughout the entire interface.' },
  { icon: Ear, title: 'Understandable', desc: 'Clear language, consistent navigation, predictable behavior, input assistance, and error prevention across all user interactions.' },
  { icon: Monitor, title: 'Robust', desc: 'Compatible with all major assistive technologies including JAWS, NVDA, VoiceOver, and TalkBack. Semantic HTML and ARIA throughout.' },
];

const compliance = [
  { standard: 'WCAG 2.1 AA', status: 'Compliant', desc: 'All TarsLabs products meet WCAG 2.1 Level AA requirements.' },
  { standard: 'Section 508', status: 'Compliant', desc: 'Federal accessibility standards for US government and enterprise use.' },
  { standard: 'EN 301 549', status: 'Compliant', desc: 'European standard for ICT accessibility requirements.' },
  { standard: 'WCAG 2.2 AAA', status: 'In Progress', desc: 'Working toward the highest level of accessibility compliance.' },
  { standard: 'ADA Compliance', status: 'Compliant', desc: 'Americans with Disabilities Act digital accessibility requirements.' },
];

export default function Accessibility() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Accessibility</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              AI for <span className="text-gradient">Everyone</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              TarsLabs is committed to making AI technology accessible to all people, regardless of ability. We design and build with inclusion at the core.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="glass-panel gradient-border p-8">
              <p.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Compliance Standards</h2>
        <div className="space-y-4">
          {compliance.map((c, i) => (
            <motion.div key={c.standard} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              className="glass-panel p-5 flex items-center gap-4">
              <CheckCircle className={`w-5 h-5 flex-shrink-0 ${c.status === 'Compliant' ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="flex-1">
                <h3 className="font-display text-sm font-semibold text-foreground">{c.standard}</h3>
                <p className="text-muted-foreground text-xs">{c.desc}</p>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-display ${c.status === 'Compliant' ? 'bg-primary/10 border border-primary/20 text-primary' : 'bg-muted/30 text-muted-foreground'}`}>{c.status}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Report an Accessibility Issue</h2>
          <p className="text-muted-foreground text-sm mb-6">If you encounter any barriers, please let us know. We take every report seriously.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Report Issue</Link>
            <Link to="/trust-safety" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Trust & Safety</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
