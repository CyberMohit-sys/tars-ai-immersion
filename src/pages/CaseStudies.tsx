import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, TrendingUp, Users, Globe, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const studies = [
  { title: 'Automating Content Pipelines with TARS AI', category: 'Content & Media', metric: '10x faster', desc: 'A media company used TARS AI to automate their entire content pipeline — from ideation to publishing — reducing production time by 10x.', company: 'MediaFlow Inc.', industry: 'Digital Media', challenge: 'Manual content creation was bottlenecking growth. A team of 15 writers couldn\'t keep up with 50+ daily content pieces needed across 8 platforms.', solution: 'Deployed TARS AI to handle research, first drafts, SEO optimization, and multi-platform adaptation. Human editors review and approve in a streamlined dashboard.', results: ['Content output increased from 12 to 120 pieces/day', 'Editorial team refocused on strategy and quality', 'SEO rankings improved by 340% in 6 months', 'Cost per piece reduced by 85%'] },
  { title: 'TarsVision for Quality Inspection', category: 'Manufacturing', metric: '99.2% accuracy', desc: 'A manufacturing firm deployed TarsVision for automated visual quality inspection, achieving 99.2% defect detection accuracy.', company: 'PrecisionWorks GmbH', industry: 'Manufacturing', challenge: 'Manual quality inspection was catching only 87% of defects, leading to $2.3M in annual returns and warranty claims.', solution: 'Installed TarsVision cameras on 12 production lines with real-time defect detection and automated rejection systems.', results: ['Defect detection rate: 87% → 99.2%', 'Returns reduced by 94%', '$2.1M saved annually in warranty costs', 'Inspection speed increased 5x'] },
  { title: 'Lifecare AI in Rural Healthcare', category: 'Healthcare', metric: '5,000+ patients', desc: 'Lifecare AI was deployed in rural clinics to provide AI-assisted preliminary health assessments, serving over 5,000 patients in 6 months.', company: 'Global Health Initiative', industry: 'Healthcare', challenge: 'Remote clinics in underserved regions had 1 doctor per 3,000 patients, with average wait times of 4-6 hours.', solution: 'Deployed Lifecare AI tablets in 50 clinics for preliminary triage, symptom analysis, and remote specialist referral.', results: ['Average wait time reduced to 45 minutes', '5,000+ patients served in 6 months', '23% of cases resolved without doctor visit', 'Doctor productivity increased 3x'] },
  { title: 'AI-Powered Code Generation for Startups', category: 'Developer Tools', metric: '60% time saved', desc: 'Early-stage startups leveraged TARS AI\'s code generation capabilities to accelerate MVP development by 60%.', company: 'Y Combinator Batch W26', industry: 'Technology', challenge: '12 startups in the batch needed to ship MVPs in 3 months with teams of 2-3 engineers each.', solution: 'Integrated TARS AI code generation into development workflows for backend API scaffolding, frontend components, and test generation.', results: ['Average MVP delivery: 6 weeks instead of 14', '60% reduction in development time', '3 startups raised Series A within 6 months', 'Code quality scores improved by 25%'] },
  { title: 'Autonomous Research Summaries', category: 'Education & Research', metric: '200+ papers/day', desc: 'A research institution used TARS AI to autonomously summarize and categorize 200+ academic papers daily for their research teams.', company: 'Stanford AI Lab', industry: 'Academic Research', challenge: 'Researchers spent 30% of their time reading and categorizing papers, leaving less time for actual research.', solution: 'Built a TARS AI pipeline that ingests, summarizes, categorizes, and routes papers to relevant research groups with key finding highlights.', results: ['200+ papers processed daily', 'Researcher reading time reduced by 75%', 'Cross-disciplinary discovery increased 40%', '2x more papers cited in team publications'] },
  { title: 'Smart Customer Support Automation', category: 'Enterprise SaaS', metric: '85% resolution', desc: 'An enterprise SaaS company integrated TARS AI to handle L1 support tickets, achieving 85% first-response resolution rates.', company: 'CloudStack Technologies', industry: 'Enterprise SaaS', challenge: 'Support team handling 2,000+ tickets/day with 4-hour average first response time and $45/ticket cost.', solution: 'Deployed TARS AI as the first line of support, with smart routing to human agents for complex issues and continuous learning from resolved tickets.', results: ['85% first-contact resolution rate', 'Average response time: 12 seconds', 'Support costs reduced by 68%', 'Customer satisfaction increased to 4.8/5'] },
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
              See how organizations across industries are using TarsLabs Innovation products to transform their operations and achieve breakthrough results.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/enterprise" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Enterprise Solutions</Link>
              <Link to="/contact" className="btn-outline-glow px-6 py-2.5 font-display">Talk to Sales</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="border-b border-border/10 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '2,400+', l: 'Enterprise Customers', icon: Building2 },
            { v: '85+', l: 'Countries Served', icon: Globe },
            { v: '$4.2B+', l: 'Customer Revenue Impact', icon: TrendingUp },
            { v: '10M+', l: 'End Users Served', icon: Users },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel gradient-border p-8 hover:bg-muted/20 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-primary font-display tracking-wide">{s.category}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground font-display">{s.company}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-primary font-display text-sm font-bold">{s.metric}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div>
                <h4 className="text-xs font-display font-semibold text-primary tracking-wider uppercase mb-2">Challenge</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-display font-semibold text-primary tracking-wider uppercase mb-2">Solution</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.solution}</p>
              </div>
              <div>
                <h4 className="text-xs font-display font-semibold text-primary tracking-wider uppercase mb-2">Results</h4>
                <ul className="space-y-1">
                  {s.results.map(r => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-16 px-6 border-t border-border/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to write your own success story?</h2>
          <p className="text-muted-foreground text-sm mb-6">Join 2,400+ enterprises already transforming their operations with TarsLabs AI.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Get Started</Link>
            <Link to="/pricing" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">View Pricing <ArrowUpRight className="w-4 h-4" /></Link>
            <Link to="/partners" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">Partner Program <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
