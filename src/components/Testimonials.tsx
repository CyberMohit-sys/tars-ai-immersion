import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Patel', role: 'CTO, NexaTech', quote: 'TarsLabs Innovation\'s AI solutions transformed our workflow. The autonomous systems handle tasks we never thought possible.' },
  { name: 'Sarah Kim', role: 'AI Researcher', quote: 'The depth of research behind TARS AI is remarkable. It\'s clear this team understands the future of autonomous intelligence.' },
  { name: 'Rahul Sharma', role: 'Founder, DataBridge', quote: 'Partnering with TarsLabs Innovation was a game-changer. Their products are intuitive, powerful, and ahead of the curve.' },
  { name: 'Elena Volkov', role: 'Product Lead, CloudScale', quote: 'The team\'s commitment to innovation is unmatched. Every release pushes boundaries in meaningful ways.' },
  { name: 'David Chen', role: 'Engineering Manager', quote: 'TarsVision gave us capabilities we\'d been trying to build internally for months. Incredible time savings.' },
  { name: 'Priya Nair', role: 'Startup Founder', quote: 'As a startup, having access to TarsLabs\' AI tools leveled the playing field against much larger competitors.' },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
