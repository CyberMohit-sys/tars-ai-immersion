import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Users, Globe, ArrowUpRight, Building2, Award, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fundingRounds = [
  { round: 'Series C', amount: '$250M', date: 'March 2026', lead: 'Sequoia Capital', valuation: '$4.2B', desc: 'Scaling global AI infrastructure and expanding enterprise offerings across 28 regions worldwide.' },
  { round: 'Series B', amount: '$120M', date: 'August 2025', lead: 'Andreessen Horowitz', valuation: '$1.8B', desc: 'Accelerating research in multimodal AI, launching TARS Vision, and growing the team to 800+.' },
  { round: 'Series A', amount: '$45M', date: 'January 2025', lead: 'Lightspeed Ventures', valuation: '$500M', desc: 'Building core AI models, establishing the developer platform, and launching first enterprise products.' },
  { round: 'Seed', amount: '$8M', date: 'June 2024', lead: 'Y Combinator + Angels', valuation: '$40M', desc: 'Founded by Mohidul Alom Laskar. Initial research, prototype development, and assembling the founding team.' },
];

const financials = [
  { label: 'Annual Recurring Revenue', value: '$380M', growth: '+240% YoY', icon: DollarSign },
  { label: 'Enterprise Customers', value: '2,400+', growth: '+180% YoY', icon: Building2 },
  { label: 'Total Employees', value: '1,200+', growth: 'Across 12 offices', icon: Users },
  { label: 'Countries Served', value: '85+', growth: '28 data center regions', icon: Globe },
];

const board = [
  { name: 'Mohidul Alom Laskar', role: 'Founder & CEO', bio: 'Visionary technologist who founded TarsLabs Innovation at age 19. Leading the company\'s mission to democratize AI for every organization on Earth.' },
  { name: 'Sarah Chen', role: 'Board Member — Sequoia Capital', bio: 'Partner at Sequoia Capital leading AI/ML investments. Previously VP of Engineering at Google DeepMind. Stanford CS PhD.' },
  { name: 'Michael Rodriguez', role: 'Board Member — a16z', bio: 'General Partner at Andreessen Horowitz. Former CTO of Anthropic. Published 40+ papers on AI alignment and safety.' },
  { name: 'Dr. Priya Sharma', role: 'Independent Board Member', bio: 'Former Chief Scientist at Microsoft Research. World-renowned expert in natural language processing and multimodal AI systems.' },
  { name: 'James Park', role: 'Board Observer — Lightspeed', bio: 'Partner at Lightspeed Ventures focused on enterprise infrastructure. Previously co-founded two AI companies (both acquired).' },
  { name: 'Dr. Amara Osei', role: 'Independent Board Member', bio: 'Professor of AI Ethics at MIT. Advisor to the European Commission on AI regulation. Author of "Responsible Intelligence".' },
];

const milestones = [
  { year: '2024', events: ['Company founded by Mohidul Alom Laskar', 'Seed funding of $8M from YC', 'First 10 employees hired', 'Alpha launch of TARS AI'] },
  { year: '2025', events: ['Series A & B totaling $165M', 'TARS Vision launched', 'Lifecare AI deployed in 50+ clinics', '500+ enterprise customers', 'Team grew to 800+'] },
  { year: '2026', events: ['Series C at $4.2B valuation', 'TARS-4 model launched', '2,400+ enterprise customers', 'Opened offices in 12 countries', 'Named to Forbes AI 50'] },
];

export default function Investors() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="border-b border-border/20 pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Investor Relations</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Building the Future of <span className="text-gradient">AI Infrastructure</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl">
              TarsLabs Innovation is one of the fastest-growing AI companies in the world, backed by leading investors and trusted by thousands of enterprises globally.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-glow text-primary-foreground px-8 py-3 font-display">Contact IR Team</Link>
              <Link to="/press" className="btn-outline-glow px-8 py-3 font-display">Press & Media</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="py-16 px-6 border-b border-border/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Financial Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {financials.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="glass-panel gradient-border p-6 text-center">
                <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{f.value}</div>
                <div className="text-sm text-foreground mt-1 font-medium">{f.label}</div>
                <div className="text-xs text-primary mt-1 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {f.growth}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Funding History */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Funding History</h2>
          <div className="space-y-6">
            {fundingRounds.map((r, i) => (
              <motion.div key={r.round} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="glass-panel gradient-border p-8 hover:bg-muted/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xl font-display font-bold text-foreground">{r.round}</span>
                      <span className="text-2xl font-display font-bold text-gradient">{r.amount}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{r.date} · Led by {r.lead}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-primary font-display text-sm font-bold">{r.valuation} valuation</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Milestones Timeline */}
      <div className="py-16 px-6 border-t border-border/20 bg-muted/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-10 text-center">Company Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className="glass-panel gradient-border p-6">
                <div className="text-3xl font-display font-bold text-gradient mb-4">{m.year}</div>
                <ul className="space-y-3">
                  {m.events.map(e => (
                    <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Board of Directors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((b, i) => (
              <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-display font-bold text-lg">{b.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{b.name}</h3>
                <p className="text-primary text-xs font-display mt-1 mb-3">{b.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 border-t border-border/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Interested in partnering with us?</h2>
          <p className="text-muted-foreground text-sm mb-6">Whether you're an investor, enterprise partner, or researcher, we'd love to connect.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">Contact Us</Link>
            <Link to="/partners" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">Partner Program <ArrowUpRight className="w-4 h-4" /></Link>
            <Link to="/enterprise" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">Enterprise <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
