import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { name: 'TARS API', status: 'operational', uptime: '99.98%' },
  { name: 'TARS Vision API', status: 'operational', uptime: '99.95%' },
  { name: 'TARS Code API', status: 'operational', uptime: '99.99%' },
  { name: 'Agent Orchestration', status: 'operational', uptime: '99.94%' },
  { name: 'Authentication Service', status: 'operational', uptime: '99.99%' },
  { name: 'Dashboard & Console', status: 'operational', uptime: '99.97%' },
  { name: 'Webhook Delivery', status: 'operational', uptime: '99.96%' },
  { name: 'File Storage', status: 'operational', uptime: '99.98%' },
];

const incidents = [
  { date: 'Mar 1, 2026', title: 'Elevated latency on Vision API', status: 'resolved', duration: '23 min' },
  { date: 'Feb 24, 2026', title: 'Scheduled maintenance — Agent Orchestration', status: 'completed', duration: '45 min' },
  { date: 'Feb 18, 2026', title: 'Brief API degradation', status: 'resolved', duration: '12 min' },
];

const statusIcon = (s: string) => {
  if (s === 'operational') return <CheckCircle className="w-4 h-4 text-accent" />;
  if (s === 'degraded') return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
  return <Clock className="w-4 h-4 text-muted-foreground" />;
};

export default function Status() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-display mb-6">
              <CheckCircle className="w-4 h-4" /> All Systems Operational
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              System <span className="text-gradient">Status</span>
            </h1>
            <p className="text-muted-foreground">Real-time status of TarsLabs infrastructure and services.</p>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel gradient-border divide-y divide-border/20 mb-10">
            {services.map(s => (
              <div key={s.name} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  {statusIcon(s.status)}
                  <span className="text-sm text-foreground font-display">{s.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground font-mono">{s.uptime} uptime</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent capitalize">{s.status}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Uptime bars */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel gradient-border p-6 mb-10">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">90-Day Uptime</h2>
            <div className="flex gap-0.5 h-8">
              {Array.from({ length: 90 }, (_, i) => (
                <div key={i} className={`flex-1 rounded-sm ${i === 62 || i === 71 ? 'bg-yellow-400/60' : 'bg-accent/40'}`} title={`Day ${90 - i}`} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
              <span>90 days ago</span><span>Today</span>
            </div>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel gradient-border p-6">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((inc, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/10">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground font-display">{inc.title}</p>
                    <p className="text-xs text-muted-foreground">{inc.date} · {inc.duration} · <span className="capitalize text-accent">{inc.status}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
