import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const entries = [
  { date: 'Mar 2026', version: 'v2.4', title: 'TARS AI Studio Preview', changes: ['Launched invite-only preview of Tars AI Studio', 'New multi-modal generation pipeline', 'Improved response latency by 40%', 'Added 5 new language model variants'] },
  { date: 'Feb 2026', version: 'v2.3', title: 'TarsVision 2.0', changes: ['Complete TarsVision architecture overhaul', 'Real-time object detection at 60fps', 'Added edge deployment support', 'New developer dashboard'] },
  { date: 'Jan 2026', version: 'v2.2', title: 'Enterprise Features', changes: ['SSO and team management', 'Custom model fine-tuning API', 'Priority support tier', 'SOC 2 compliance achieved'] },
  { date: 'Dec 2025', version: 'v2.1', title: 'Lifecare AI Launch', changes: ['Public launch of Lifecare AI', 'AI-powered health assessment engine', 'Multi-language support (12 languages)', 'HIPAA-compliant infrastructure'] },
  { date: 'Nov 2025', version: 'v2.0', title: 'TARS AI 2.0', changes: ['Major architecture upgrade', 'Autonomous task execution', 'Code generation improvements', 'New API playground'] },
  { date: 'Oct 2025', version: 'v1.5', title: 'Platform Expansion', changes: ['Developer API public beta', 'Documentation portal launch', 'Community forum launch', 'First research paper published'] },
];

export default function Changelog() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Changelog</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              What's <span className="text-gradient">New</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Product updates, new features, and improvements from TarsLabs Innovation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/30" />
          <div className="space-y-12">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-primary font-display font-bold px-2 py-0.5 rounded bg-primary/10">{entry.version}</span>
                  <span className="text-xs text-muted-foreground">{entry.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{entry.title}</h3>
                <ul className="space-y-1.5">
                  {entry.changes.map(c => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
