import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
    toast({ title: 'Subscribed!', description: 'You\'ll receive the latest updates from TarsLabs Innovation.' });
  };

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(ellipse, hsl(210 100% 56% / 0.06), transparent)' }} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get the latest on AI research, product launches, and insights from TarsLabs Innovation.
          </p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel-solid gradient-border p-8 inline-block">
              <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-foreground font-display font-semibold text-lg">You're subscribed!</p>
              <p className="text-muted-foreground text-sm mt-2">Check your inbox for a welcome email.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-muted/20 border border-border/30 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
              <button type="submit" className="btn-glow text-primary-foreground text-sm px-6 py-3.5 flex items-center gap-2 shrink-0">
                <span>Subscribe</span> <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
