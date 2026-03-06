import { motion } from 'framer-motion';
import { useState } from 'react';
import { z } from 'zod';
import { Mail, Send, CheckCircle, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be under 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be under 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be under 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be under 2000 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const info = [
  { icon: Mail, label: 'Email', value: 'contact@tarslabs.ai' },
  { icon: MapPin, label: 'Location', value: 'India' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast({ title: 'Message sent', description: "We'll get back to you shortly." });
    }, 1200);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel p-5 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-display">{item.label}</p>
                      <p className="text-sm text-foreground font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 glass-panel gradient-border p-8"
            >
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-6">Thank you for reaching out. We'll respond within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="btn-outline-glow text-sm px-6 py-2">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted-foreground font-display mb-1.5 block">Name</label>
                    <input value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Your name" className={`w-full bg-muted/20 border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 ${errors.name ? 'border-destructive/60' : 'border-border/30'}`} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground font-display mb-1.5 block">Email</label>
                    <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="you@company.com" className={`w-full bg-muted/20 border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 ${errors.email ? 'border-destructive/60' : 'border-border/30'}`} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-muted-foreground font-display mb-1.5 block">Subject</label>
                    <input value={form.subject} onChange={e => handleChange('subject', e.target.value)} placeholder="How can we help?" className={`w-full bg-muted/20 border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 ${errors.subject ? 'border-destructive/60' : 'border-border/30'}`} />
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-muted-foreground font-display mb-1.5 block">Message</label>
                    <textarea value={form.message} onChange={e => handleChange('message', e.target.value)} placeholder="Tell us about your project or inquiry..." rows={5} className={`w-full bg-muted/20 border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none ${errors.message ? 'border-destructive/60' : 'border-border/30'}`} />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" disabled={sending} className="btn-glow text-primary-foreground text-sm px-8 py-3 flex items-center gap-2 disabled:opacity-50">
                      {sending ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
