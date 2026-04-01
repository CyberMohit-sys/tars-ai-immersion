import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openings = [
  { title: 'AI Research Scientist', dept: 'Research', location: 'Remote', type: 'Full-time', desc: 'Lead cutting-edge research in autonomous AI systems and contribute to TARS AI\'s core intelligence.' },
  { title: 'Full-Stack Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', desc: 'Build and scale the platforms powering TarsLabs Innovation products including TARS AI and TarsVision.' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time', desc: 'Craft intuitive interfaces for AI-powered products used by developers and enterprises worldwide.' },
  { title: 'Content Strategist', dept: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Develop and execute content strategies that communicate TarsLabs Innovation\'s vision and products.' },
  { title: 'ML Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', desc: 'Design and implement machine learning pipelines and model serving infrastructure.' },
  { title: 'Community Manager', dept: 'Growth', location: 'Remote', type: 'Part-time', desc: 'Build and nurture the TarsLabs developer community across platforms.' },
];

export default function Careers() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Join <span className="text-gradient">TarsLabs Innovation</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Help us build the future of autonomous intelligence. We're looking for passionate people who want to make a difference.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{job.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Briefcase className="w-3 h-3" /> {job.dept}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {job.type}</span>
                  </div>
                </div>
                <button className="btn-outline-glow text-sm px-6 py-2 shrink-0">Apply</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
