import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, X, Send, CheckCircle, ArrowUpRight, Heart, Zap, Globe, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openings = [
  { title: 'AI Research Scientist', dept: 'Research', location: 'Remote / San Francisco', type: 'Full-time', salary: '$180K - $280K', desc: 'Lead cutting-edge research in autonomous AI systems and contribute to TARS AI\'s core intelligence. PhD in ML/AI required.' },
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', salary: '$160K - $240K', desc: 'Build and scale the platforms powering TarsLabs products including TARS AI, TarsVision, and Lifecare AI.' },
  { title: 'Staff Product Designer', dept: 'Design', location: 'Remote / New York', type: 'Full-time', salary: '$150K - $220K', desc: 'Craft intuitive interfaces for AI-powered products used by developers and enterprises worldwide.' },
  { title: 'DevRel Engineer', dept: 'Developer Relations', location: 'Remote', type: 'Full-time', salary: '$140K - $200K', desc: 'Build developer tools, write documentation, create tutorials, and be the voice of TarsLabs in the developer community.' },
  { title: 'Senior ML Engineer', dept: 'Engineering', location: 'Remote / Bangalore', type: 'Full-time', salary: '$160K - $250K', desc: 'Design and implement machine learning pipelines and model serving infrastructure at massive scale.' },
  { title: 'Head of Content', dept: 'Marketing', location: 'Remote', type: 'Full-time', salary: '$130K - $180K', desc: 'Lead content strategy across blog, docs, social, and PR. Shape the narrative of TarsLabs Innovation globally.' },
  { title: 'Security Engineer', dept: 'Security', location: 'Remote', type: 'Full-time', salary: '$170K - $260K', desc: 'Protect TarsLabs infrastructure, implement zero-trust architecture, and lead security audits and compliance.' },
  { title: 'Community Manager', dept: 'Growth', location: 'Remote', type: 'Part-time', salary: '$60K - $90K', desc: 'Build and nurture the 125K+ member TarsLabs developer community across Discord, GitHub, and forums.' },
  { title: 'AI Safety Researcher', dept: 'Research', location: 'San Francisco', type: 'Full-time', salary: '$200K - $300K', desc: 'Research AI alignment, interpretability, and safety mechanisms. Publish papers and influence industry standards.' },
  { title: 'Enterprise Account Executive', dept: 'Sales', location: 'New York / London', type: 'Full-time', salary: '$120K - $180K + Commission', desc: 'Drive enterprise sales for Fortune 500 accounts. Manage complex deal cycles and build lasting partnerships.' },
];

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, vision. Mental health support. $500/mo wellness stipend.' },
  { icon: Zap, title: 'Equity & Compensation', desc: 'Competitive salary + meaningful equity. Annual refresh grants. 401(k) matching.' },
  { icon: Globe, title: 'Remote-First Culture', desc: 'Work from anywhere. $5K home office setup. Quarterly team retreats worldwide.' },
  { icon: GraduationCap, title: 'Learning & Growth', desc: '$10K annual education budget. Conference attendance. Internal mentorship program.' },
];

export default function Careers() {
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', linkedin: '', resume: '', coverLetter: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: 'Application Submitted! 🎉', description: `Your application for ${applyingTo} has been received. We'll be in touch within 5 business days.` });
    setTimeout(() => { setApplyingTo(null); setSubmitted(false); setFormData({ name: '', email: '', linkedin: '', resume: '', coverLetter: '' }); }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />

      {/* Apply Modal */}
      <AnimatePresence>
        {applyingTo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl overflow-y-auto flex items-start justify-center pt-20 pb-10 px-4">
            <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30 }} className="glass-panel gradient-border p-8 w-full max-w-lg relative">
              <button onClick={() => { setApplyingTo(null); setSubmitted(false); }} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
              
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Application Received!</h3>
                  <p className="text-muted-foreground text-sm">We'll review your application for <span className="text-primary">{applyingTo}</span> and get back to you within 5 business days.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">Apply for Position</h3>
                  <p className="text-primary text-sm font-display mb-6">{applyingTo}</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-display text-muted-foreground mb-1 block">Full Name *</label>
                      <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-muted/20 border border-border/30 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50" placeholder="Mohidul Alom Laskar" />
                    </div>
                    <div>
                      <label className="text-xs font-display text-muted-foreground mb-1 block">Email *</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-muted/20 border border-border/30 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-xs font-display text-muted-foreground mb-1 block">LinkedIn Profile</label>
                      <input value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })} className="w-full bg-muted/20 border border-border/30 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div>
                      <label className="text-xs font-display text-muted-foreground mb-1 block">Resume Link / Portfolio *</label>
                      <input required value={formData.resume} onChange={e => setFormData({ ...formData, resume: e.target.value })} className="w-full bg-muted/20 border border-border/30 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50" placeholder="https://drive.google.com/..." />
                    </div>
                    <div>
                      <label className="text-xs font-display text-muted-foreground mb-1 block">Why TarsLabs?</label>
                      <textarea value={formData.coverLetter} onChange={e => setFormData({ ...formData, coverLetter: e.target.value })} rows={4} className="w-full bg-muted/20 border border-border/30 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 resize-none" placeholder="Tell us why you want to join TarsLabs Innovation..." />
                    </div>
                    <button type="submit" className="btn-glow text-primary-foreground w-full py-3 font-display inline-flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Application
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Join <span className="text-gradient">TarsLabs Innovation</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Help us build the future of autonomous intelligence. We're 1,200+ people across 12 countries, and we're growing fast.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Why TarsLabs?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel gradient-border p-6">
              <b.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Open Positions</h2>
        <p className="text-muted-foreground text-sm mb-8">{openings.length} open roles across {new Set(openings.map(o => o.dept)).size} departments</p>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{job.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Briefcase className="w-3 h-3" /> {job.dept}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {job.type}</span>
                    <span className="text-xs text-primary font-display">{job.salary}</span>
                  </div>
                </div>
                <button onClick={() => setApplyingTo(job.title)} className="btn-glow text-primary-foreground text-sm px-6 py-2.5 shrink-0 inline-flex items-center gap-2">
                  <Send className="w-3.5 h-3.5" /> Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Don't see a perfect fit?</h2>
          <p className="text-muted-foreground text-sm mb-6">We're always looking for exceptional people. Send us your resume and we'll keep you in mind for future openings.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setApplyingTo('General Application')} className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2"><Send className="w-4 h-4" /> General Application</button>
            <Link to="/company" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> About Us</Link>
            <Link to="/community" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Community</Link>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
