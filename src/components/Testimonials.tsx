import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Patel', role: 'CTO, NexaTech', quote: 'TarsLabs Innovation\'s AI solutions transformed our workflow. The autonomous systems handle tasks we never thought possible.', rating: 5 },
  { name: 'Sarah Kim', role: 'AI Researcher', quote: 'The depth of research behind TARS AI is remarkable. It\'s clear this team understands the future of autonomous intelligence.', rating: 5 },
  { name: 'Rahul Sharma', role: 'Founder, DataBridge', quote: 'Partnering with TarsLabs Innovation was a game-changer. Their products are intuitive, powerful, and ahead of the curve.', rating: 5 },
  { name: 'Elena Volkov', role: 'Product Lead, CloudScale', quote: 'The team\'s commitment to innovation is unmatched. Every release pushes boundaries in meaningful ways.', rating: 5 },
  { name: 'David Chen', role: 'Engineering Manager', quote: 'TarsVision gave us capabilities we\'d been trying to build internally for months. Incredible time savings.', rating: 5 },
  { name: 'Priya Nair', role: 'Startup Founder', quote: 'As a startup, having access to TarsLabs\' AI tools leveled the playing field against much larger competitors.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[180px]" />

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
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Trusted by engineers, researchers, and founders worldwide.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all duration-300 group hover:shadow-[0_0_40px_hsl(210_100%_56%/0.1)] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-primary/80 text-primary/80" />
                ))}
              </div>

              <Quote className="w-7 h-7 text-primary/20 mb-3" />
              <p className="text-foreground/75 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                {/* Avatar initial */}
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display text-sm font-bold">{t.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
