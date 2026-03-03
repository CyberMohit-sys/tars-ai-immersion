import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const tiers = [
  { name: 'Free', price: '$0', period: '/month', desc: 'For exploration and prototyping', features: ['1,000 API calls/month', 'TARS Code access', 'Community support', 'Basic rate limits'], cta: 'Get Started', highlighted: false },
  { name: 'Pro', price: '$49', period: '/month', desc: 'For developers and small teams', features: ['50,000 API calls/month', 'All models access', 'Priority support', 'Higher rate limits', 'Streaming API', 'Vision API access'], cta: 'Start Pro', highlighted: true },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For organizations at scale', features: ['Unlimited API calls', 'Dedicated infrastructure', 'Custom model training', 'SLA guarantee', 'SOC 2 compliance', 'Dedicated support'], cta: 'Contact Sales', highlighted: false },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Simple <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4">Scale with confidence. Pay for what you use.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            className={`glass-panel p-8 flex flex-col ${t.highlighted ? 'gradient-border glow-blue' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{t.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-foreground">{t.price}</span>
              <span className="text-muted-foreground text-sm">{t.period}</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">{t.desc}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {t.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full py-3 rounded-xl font-display font-medium text-sm transition-all ${t.highlighted ? 'btn-glow text-primary-foreground' : 'btn-outline-glow'}`}>
              {t.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
