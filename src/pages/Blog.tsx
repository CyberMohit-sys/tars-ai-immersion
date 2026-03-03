import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  { category: 'Product Launch', title: 'Introducing TARS Vision — Visual Intelligence Engine', desc: 'Transform ideas into high-fidelity AI-generated visuals through advanced multimodal reasoning.', date: 'Mar 2026' },
  { category: 'Model Improvement', title: 'TARS Ultra 2.0: 3x Faster Reasoning', desc: 'Major performance improvements across all reasoning benchmarks with reduced latency.', date: 'Feb 2026' },
  { category: 'AI Insights', title: 'The Future of Multi-Agent Systems', desc: 'How autonomous agent coordination is reshaping enterprise AI deployment strategies.', date: 'Feb 2026' },
  { category: 'Release Notes', title: 'API v2 — Streaming, Vision, and Agents', desc: 'New unified API with WebSocket streaming, Vision endpoints, and Agent orchestration.', date: 'Jan 2026' },
  { category: 'AI Insights', title: 'Building Safe Autonomous Systems', desc: 'Our approach to AI alignment, red-teaming, and responsible deployment at scale.', date: 'Jan 2026' },
  { category: 'Product Launch', title: 'TARS Code — AI Development Engine', desc: 'Autonomous coding assistant capable of full project generation and iteration.', date: 'Dec 2025' },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Blog</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Latest <span className="text-gradient">Updates</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Product launches, model improvements, and insights from the TarsLabs team.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-4">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            className="glass-panel p-6 md:p-8 group cursor-pointer hover:bg-muted/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-0.5 rounded-full border border-primary/20 text-primary font-display">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{post.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
