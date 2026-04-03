import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, Globe, Lock, HeadphonesIcon, BarChart3, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  { icon: Shield, title: 'Enterprise-Grade Security', desc: 'SOC 2 Type II certified, end-to-end encryption, and advanced threat detection for your most sensitive data.' },
  { icon: Zap, title: 'Unlimited Scale', desc: 'Auto-scaling infrastructure that handles billions of API calls per day with 99.99% uptime SLA.' },
  { icon: Users, title: 'Dedicated Account Team', desc: 'A named technical account manager, solutions architect, and 24/7 priority support.' },
  { icon: Globe, title: 'Global Infrastructure', desc: 'Deploy across 28 regions worldwide with edge computing for sub-50ms latency anywhere.' },
  { icon: Lock, title: 'Data Residency', desc: 'Full control over data storage locations to comply with GDPR, HIPAA, and regional regulations.' },
  { icon: HeadphonesIcon, title: '24/7 Premium Support', desc: 'Direct Slack channel, 15-minute response time SLA, and dedicated engineering escalation.' },
  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Real-time dashboards, usage forecasting, cost optimization, and custom reporting.' },
  { icon: Building2, title: 'Custom Deployment', desc: 'On-premise, VPC, or hybrid cloud deployment options tailored to your infrastructure.' },
];

const logos = ['Fortune 500 Companies', 'Government Agencies', 'Global Banks', 'Healthcare Systems', 'Leading Universities', 'Defense Contractors'];

export default function Enterprise() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Enterprise</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              AI Infrastructure for the <span className="text-gradient">World's Largest</span> Organizations
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
              Trusted by Fortune 500 companies, government agencies, and global institutions. Deploy TarsLabs AI at any scale with enterprise security, compliance, and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact" className="btn-glow text-primary-foreground px-8 py-3 font-display">Contact Sales</Link>
              <Link to="/security" className="btn-outline-glow px-8 py-3 font-display">Security Whitepaper</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-b border-border/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {logos.map((l, i) => (
            <motion.span key={l} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: i * 0.1 }} className="text-sm text-muted-foreground font-display tracking-wide">
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="glass-panel gradient-border p-6 text-center hover:bg-muted/20 transition-all">
            <f.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-sm font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="border-t border-border/20 py-20 px-6 bg-muted/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '500M+', label: 'API Calls/Day' },
            { value: '28', label: 'Global Regions' },
            { value: '<50ms', label: 'Avg Latency' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
