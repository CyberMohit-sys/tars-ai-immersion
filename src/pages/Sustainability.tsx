import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Recycle, Globe, Sun, Droplets } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const initiatives = [
  { icon: Leaf, title: 'Carbon Neutral by 2025', desc: 'We achieved carbon neutrality across all operations in 2025 through renewable energy investments and verified carbon offsets.' },
  { icon: Zap, title: '100% Renewable Energy', desc: 'All TarsLabs data centers run on 100% renewable energy sourced from wind and solar power purchase agreements.' },
  { icon: Recycle, title: 'Efficient AI Training', desc: 'Our proprietary training optimization reduces compute requirements by 40% compared to industry standard, cutting energy consumption significantly.' },
  { icon: Globe, title: 'AI for Climate', desc: 'We donate 5% of our compute to climate research organizations working on weather prediction, carbon capture, and ecosystem monitoring.' },
  { icon: Sun, title: 'Green Data Centers', desc: 'Purpose-built data centers with advanced cooling systems that reduce water usage by 60% and achieve PUE of 1.1.' },
  { icon: Droplets, title: 'Water Stewardship', desc: 'Zero water waste across our facilities through closed-loop cooling and partnerships with local water conservation programs.' },
];

export default function Sustainability() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Sustainability</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              AI That's Good for the <span className="text-gradient">Planet</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              We're committed to building powerful AI responsibly — minimizing environmental impact while maximizing positive outcomes for humanity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="glass-panel gradient-border p-8 hover:bg-muted/20 transition-all text-center">
            <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact numbers */}
      <div className="border-t border-border/20 py-20 px-6 bg-muted/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '0', l: 'Net Carbon Emissions' },
            { v: '100%', l: 'Renewable Energy' },
            { v: '40%', l: 'Less Compute Waste' },
            { v: '1.1', l: 'Data Center PUE' },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
