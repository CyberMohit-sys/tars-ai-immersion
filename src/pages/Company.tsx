import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Mail, Newspaper, Package } from 'lucide-react';

const sections = [
  { icon: Target, title: 'About TarsLabs', desc: 'An independent AI research company building autonomous intelligence systems that think, create, and execute.' },
  { icon: Target, title: 'Mission', desc: 'To transform artificial intelligence from reactive tools into proactive autonomous systems capable of independent creation and execution.' },
  { icon: Users, title: 'Careers', desc: 'We\'re building the future of AI. Join our team of researchers, engineers, and visionaries shaping autonomous intelligence.' },
  { icon: Mail, title: 'Contact', desc: 'Reach out for partnerships, enterprise inquiries, or general questions about TARS AI and TarsLabs.' },
  { icon: Newspaper, title: 'Press', desc: 'Media resources, press releases, and official communications from TarsLabs.' },
  { icon: Package, title: 'Brand Kit', desc: 'Official logos, brand guidelines, and media assets for TarsLabs and TARS AI.' },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Company</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              About <span className="text-gradient">TarsLabs</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Engineering the next evolution of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              className="glass-panel p-6 group cursor-pointer hover:bg-muted/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
