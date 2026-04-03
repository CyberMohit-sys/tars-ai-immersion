import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MessageSquare, Trophy, Users, Star, ArrowUpRight, ThumbsUp, Eye, Code, Lightbulb, HelpCircle, Cpu, Palette, Zap, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  { icon: Code, label: 'API & SDKs', threads: 1284, desc: 'Questions and discussions about the TarsLabs API, client libraries, and integrations.' },
  { icon: Cpu, label: 'Models & Training', threads: 856, desc: 'Discuss model capabilities, fine-tuning, benchmarks, and training techniques.' },
  { icon: Lightbulb, label: 'Show & Tell', threads: 2341, desc: 'Share what you\'ve built with TarsLabs products. Get feedback and inspire others.' },
  { icon: HelpCircle, label: 'Help & Support', threads: 3102, desc: 'Get help from the community and TarsLabs engineers on technical issues.' },
  { icon: Palette, label: 'Feature Requests', threads: 945, desc: 'Suggest new features, vote on ideas, and see what\'s coming next.' },
  { icon: BookOpen, label: 'Research & Papers', threads: 412, desc: 'Discuss research papers, academic collaborations, and cutting-edge AI topics.' },
];

const leaderboard = [
  { rank: 1, name: 'AlexDev42', points: 24850, badge: '🏆', contributions: 342, helped: 1203 },
  { rank: 2, name: 'SarahML', points: 21200, badge: '🥈', contributions: 298, helped: 980 },
  { rank: 3, name: 'RajeshAI', points: 19750, badge: '🥉', contributions: 275, helped: 912 },
  { rank: 4, name: 'CodeNinja_Lisa', points: 17300, badge: '⭐', contributions: 241, helped: 845 },
  { rank: 5, name: 'DrNeuralNet', points: 15900, badge: '⭐', contributions: 218, helped: 788 },
  { rank: 6, name: 'TarsBuilder_Mo', points: 14200, badge: '⭐', contributions: 195, helped: 720 },
  { rank: 7, name: 'AIpioneer_Kim', points: 12800, badge: '⭐', contributions: 178, helped: 665 },
  { rank: 8, name: 'FullStackFarah', points: 11500, badge: '⭐', contributions: 162, helped: 598 },
];

const trendingThreads = [
  { title: 'How to fine-tune TARS-4 for domain-specific tasks', category: 'Models & Training', replies: 89, views: 4200, author: 'AlexDev42', hot: true },
  { title: 'Announcing: TarsLabs Community Hackathon — $100K in prizes!', category: 'Show & Tell', replies: 234, views: 12400, author: 'TarsLabs_Official', hot: true },
  { title: 'Best practices for streaming API responses in React', category: 'API & SDKs', replies: 56, views: 2800, author: 'SarahML' },
  { title: 'I built a real-time translation app with TARS Vision — here\'s how', category: 'Show & Tell', replies: 127, views: 8900, author: 'CodeNinja_Lisa' },
  { title: '[RFC] Proposal for new embedding model API endpoint', category: 'Feature Requests', replies: 43, views: 1900, author: 'DrNeuralNet' },
  { title: 'Comparing TARS-4 vs GPT-5 vs Claude 4 on coding benchmarks', category: 'Research & Papers', replies: 178, views: 15600, author: 'RajeshAI', hot: true },
  { title: 'Lifecare AI integration guide for hospital management systems', category: 'Help & Support', replies: 34, views: 1200, author: 'FullStackFarah' },
  { title: 'Feature request: Built-in RAG pipeline in the SDK', category: 'Feature Requests', replies: 92, views: 5600, author: 'AIpioneer_Kim' },
];

const stats = [
  { value: '125K+', label: 'Community Members' },
  { value: '48K+', label: 'Discussion Threads' },
  { value: '2.1M+', label: 'Messages Posted' },
  { value: '15K+', label: 'Projects Shared' },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'leaderboard'>('discussions');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Community</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Developer <span className="text-gradient">Community</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Join 125,000+ developers building the future with TarsLabs. Ask questions, share projects, earn recognition, and connect with AI engineers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Join the Community
              </button>
              <Link to="/open-source" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">
                <Code className="w-4 h-4" /> Open Source
              </Link>
              <Link to="/events" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">
                <Users className="w-4 h-4" /> Events
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-border/10 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Discussion Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <c.icon className="w-8 h-8 text-primary" />
                  <span className="text-xs text-muted-foreground font-display">{c.threads.toLocaleString()} threads</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{c.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs: Trending + Leaderboard */}
      <div className="py-16 px-6 border-t border-border/20 bg-muted/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 mb-8">
            <button onClick={() => setActiveTab('discussions')}
              className={`px-5 py-2 rounded-full font-display text-sm transition-all ${activeTab === 'discussions' ? 'bg-primary text-primary-foreground' : 'bg-muted/30 text-muted-foreground hover:text-foreground'}`}>
              🔥 Trending Discussions
            </button>
            <button onClick={() => setActiveTab('leaderboard')}
              className={`px-5 py-2 rounded-full font-display text-sm transition-all ${activeTab === 'leaderboard' ? 'bg-primary text-primary-foreground' : 'bg-muted/30 text-muted-foreground hover:text-foreground'}`}>
              🏆 Top Contributors
            </button>
          </div>

          {activeTab === 'discussions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              {trendingThreads.map((t, i) => (
                <motion.div key={t.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="glass-panel p-5 hover:bg-muted/20 transition-all group cursor-pointer flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {t.hot && <span className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/20 text-destructive border border-destructive/20 font-display">HOT</span>}
                      <span className="text-[10px] text-primary font-display tracking-wide">{t.category}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{t.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>by {t.author}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{t.replies}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{t.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'leaderboard' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              {leaderboard.map((u, i) => (
                <motion.div key={u.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="glass-panel p-5 hover:bg-muted/20 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-lg flex-shrink-0">
                    {u.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-display font-semibold text-foreground">#{u.rank} {u.name}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-primary" />{u.points.toLocaleString()} pts</span>
                      <span>{u.contributions} contributions</span>
                      <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{u.helped} helped</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-display font-bold text-gradient">{u.points.toLocaleString()}</span>
                    <p className="text-[10px] text-muted-foreground">points</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to join the conversation?</h2>
          <p className="text-muted-foreground text-sm mb-6">Connect with developers, share your projects, and help shape the future of AI.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Join Community
            </button>
            <Link to="/docs" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Read the Docs
            </Link>
            <Link to="/careers" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">
              <Zap className="w-4 h-4" /> We're Hiring
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
