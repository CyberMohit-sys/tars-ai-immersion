import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Video, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const events = [
  { title: 'TarsLabs DevCon 2026', date: 'June 15-17, 2026', location: 'San Francisco, CA', type: 'Conference', attendees: '5,000+', desc: 'Our flagship annual developer conference featuring keynotes, hands-on workshops, product launches, and networking with the TarsLabs team.', featured: true },
  { title: 'AI Safety Summit', date: 'July 8, 2026', location: 'Virtual', type: 'Summit', attendees: '10,000+', desc: 'A global virtual summit on responsible AI development, featuring researchers, policymakers, and industry leaders.' },
  { title: 'TarsVision Workshop Series', date: 'Monthly', location: 'Virtual', type: 'Workshop', attendees: '500+', desc: 'Monthly hands-on workshops covering computer vision, model training, and real-world deployment with TarsVision.' },
  { title: 'Enterprise AI Forum', date: 'August 22, 2026', location: 'New York, NY', type: 'Forum', attendees: '1,200+', desc: 'Exclusive forum for enterprise leaders exploring AI transformation, featuring case studies and strategy sessions.' },
  { title: 'Hackathon: Build with TARS', date: 'September 5-7, 2026', location: 'Global (Virtual)', type: 'Hackathon', attendees: '3,000+', desc: '$100,000 in prizes. Build innovative applications using the TarsLabs API. Open to developers worldwide.' },
  { title: 'Research Symposium', date: 'October 10, 2026', location: 'London, UK', type: 'Academic', attendees: '800+', desc: 'Presenting our latest research papers on multimodal AI, reasoning, and alignment at this invite-only academic symposium.' },
];

export default function Events() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Events</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Connect, Learn, <span className="text-gradient">Build</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Join the TarsLabs community at conferences, workshops, hackathons, and summits around the world.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        {events.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className={`glass-panel gradient-border p-8 hover:bg-muted/20 transition-all group cursor-pointer ${e.featured ? 'ring-1 ring-primary/30' : ''}`}>
            {e.featured && <span className="text-[10px] font-display tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">Featured</span>}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{e.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{e.attendees}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-display">{e.type}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
