import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pressReleases = [
  { date: 'Mar 28, 2026', title: 'TarsLabs Innovation Raises $250M Series C to Scale AI Infrastructure Globally', source: 'TarsLabs Newsroom' },
  { date: 'Feb 15, 2026', title: 'TarsLabs Launches TARS-4 — Most Capable Multimodal AI Model to Date', source: 'TarsLabs Newsroom' },
  { date: 'Jan 10, 2026', title: 'TarsLabs Partners with World Health Organization for Global Health AI Initiative', source: 'TarsLabs Newsroom' },
  { date: 'Dec 5, 2025', title: 'TarsLabs Named to Forbes AI 50 List for Second Consecutive Year', source: 'Forbes' },
  { date: 'Nov 20, 2025', title: 'TarsLabs Opens New R&D Center in Bangalore, Plans to Hire 500 Researchers', source: 'TarsLabs Newsroom' },
  { date: 'Oct 8, 2025', title: 'TARS Vision Achieves State-of-the-Art Results on ImageNet and COCO Benchmarks', source: 'TarsLabs Research' },
];

const coverage = [
  { source: 'TechCrunch', title: '"TarsLabs is building the AI infrastructure layer that every enterprise will need"' },
  { source: 'The Verge', title: '"The most impressive AI demo we\'ve seen this year comes from an unexpected player"' },
  { source: 'Wired', title: '"TarsLabs\' open-source approach is reshaping the competitive landscape of AI"' },
  { source: 'MIT Technology Review', title: '"How TarsLabs is solving the AI safety problem from the ground up"' },
];

export default function Press() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Press & Media</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              In the <span className="text-gradient">News</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Press releases, media coverage, and brand resources. For press inquiries, contact our communications team.
            </p>
            <a href="mailto:press@tarslabs.com" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2 mt-6">
              <Mail className="w-4 h-4" /> Press Inquiries
            </a>
          </motion.div>
        </div>
      </div>

      {/* Media Coverage */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Media Coverage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coverage.map((c, i) => (
            <motion.div key={c.source} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group cursor-pointer">
              <span className="text-xs text-primary font-display tracking-wide">{c.source}</span>
              <p className="text-foreground text-sm mt-2 italic leading-relaxed group-hover:text-primary transition-colors">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Press Releases */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Press Releases</h2>
        <div className="space-y-4">
          {pressReleases.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/10 transition-all group cursor-pointer border border-border/10">
              <span className="text-xs text-muted-foreground font-display min-w-[100px] pt-0.5">{p.date}</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.source}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Kit */}
      <div className="max-w-5xl mx-auto px-6 py-12 mb-8">
        <div className="glass-panel gradient-border p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Brand Assets</h2>
          <p className="text-muted-foreground text-sm mb-6">Download logos, brand guidelines, product screenshots, and executive headshots.</p>
          <button className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Brand Kit
          </button>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
