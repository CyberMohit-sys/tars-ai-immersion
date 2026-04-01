import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const studies = [
  { title: 'Automating Content Pipelines with TARS AI', category: 'Content & Media', metric: '10x faster', desc: 'A media company used TARS AI to automate their entire content pipeline — from ideation to publishing — reducing production time by 10x.' },
  { title: 'TarsVision for Quality Inspection', category: 'Manufacturing', metric: '99.2% accuracy', desc: 'A manufacturing firm deployed TarsVision for automated visual quality inspection, achieving 99.2% defect detection accuracy.' },
  { title: 'Lifecare AI in Rural Healthcare', category: 'Healthcare', metric: '5,000+ patients', desc: 'Lifecare AI was deployed in rural clinics to provide AI-assisted preliminary health assessments, serving over 5,000 patients in 6 months.' },
  { title: 'AI-Powered Code Generation for Startups', category: 'Developer Tools', metric: '60% time saved', desc: 'Early-stage startups leveraged TARS AI\'s code generation capabilities to accelerate MVP development by 60%.' },
  { title: 'Autonomous Research Summaries', category: 'Education & Research', metric: '200+ papers/day', desc: 'A research institution used TARS AI to autonomously summarize and categorize 200+ academic papers daily for their research teams.' },
  { title: 'Smart Customer Support Automation', category: 'Enterprise SaaS', metric: '85% resolution', desc: 'An enterprise SaaS company integrated TARS AI to handle L1 support tickets, achieving 85% first-response resolution rates.' },
];

export default function CaseStudies() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Case Studies</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Real-World <span className="text-gradient">Impact</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              See how organizations are using TarsLabs Innovation products to transform their operations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs text-primary font-display tracking-wide">{s.category}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-display text-sm font-bold">{s.metric}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
