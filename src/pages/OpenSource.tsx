import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Star, GitFork, Download, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const repos = [
  { name: 'tars-core', desc: 'Core inference engine powering all TarsLabs models. Optimized for GPU clusters with support for distributed training across thousands of nodes.', stars: '24.8k', forks: '3.2k', language: 'Python' },
  { name: 'tars-vision-sdk', desc: 'Computer vision SDK with pre-trained models for object detection, segmentation, OCR, and real-time video analysis.', stars: '12.4k', forks: '1.8k', language: 'Python' },
  { name: 'tars-js', desc: 'Official JavaScript/TypeScript client library for the TarsLabs API. Supports streaming, function calling, and embeddings.', stars: '8.9k', forks: '920', language: 'TypeScript' },
  { name: 'tars-bench', desc: 'Comprehensive benchmarking suite for evaluating LLMs across reasoning, coding, math, and safety dimensions.', stars: '6.1k', forks: '780', language: 'Python' },
  { name: 'lifecare-models', desc: 'Open-source medical AI models for symptom analysis, drug interaction checking, and clinical note summarization.', stars: '5.3k', forks: '640', language: 'Python' },
  { name: 'tars-deploy', desc: 'One-click deployment toolkit for running TarsLabs models on-premise, in containers, or at the edge.', stars: '4.7k', forks: '510', language: 'Go' },
];

export default function OpenSource() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Open Source</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Open by <span className="text-gradient">Default</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              We believe the future of AI should be open. Our most powerful tools, models, and research are freely available for the global developer community.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/CyberMohit-sys" target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-border/10 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[{ v: '62.2k+', l: 'GitHub Stars' }, { v: '7.8k+', l: 'Contributors' }, { v: '150M+', l: 'Downloads' }].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {repos.map((r, i) => (
          <motion.a key={r.name} href={`https://github.com/CyberMohit-sys`} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group block">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{r.name}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="w-3 h-3" />{r.stars}</span>
              <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{r.forks}</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{r.language}</span>
            </div>
          </motion.a>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
