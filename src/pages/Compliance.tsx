import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileText, Globe, Lock, ArrowUpRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified', desc: 'Annual audit by Deloitte covering security, availability, and confidentiality controls.', date: 'Renewed Feb 2026' },
  { name: 'ISO 27001:2022', status: 'Certified', desc: 'International standard for information security management systems.', date: 'Certified Dec 2025' },
  { name: 'ISO 27701', status: 'Certified', desc: 'Privacy information management extending ISO 27001 for GDPR alignment.', date: 'Certified Jan 2026' },
  { name: 'GDPR', status: 'Compliant', desc: 'Full compliance with EU General Data Protection Regulation. DPA available.', date: 'Ongoing' },
  { name: 'HIPAA', status: 'Compliant', desc: 'Healthcare data protection for Lifecare AI and enterprise health customers.', date: 'BAA Available' },
  { name: 'CCPA / CPRA', status: 'Compliant', desc: 'California Consumer Privacy Act compliance for US operations.', date: 'Ongoing' },
  { name: 'FedRAMP', status: 'In Progress', desc: 'Federal Risk and Authorization Management Program for US government.', date: 'Expected Q4 2026' },
  { name: 'CSA STAR Level 2', status: 'Certified', desc: 'Cloud Security Alliance Security, Trust, Assurance, and Risk certification.', date: 'Certified Mar 2026' },
];

const dataRegions = [
  { region: 'North America', locations: 'US-East, US-West, Canada' },
  { region: 'Europe', locations: 'Frankfurt, London, Amsterdam, Paris' },
  { region: 'Asia Pacific', locations: 'Tokyo, Singapore, Mumbai, Sydney' },
  { region: 'Middle East', locations: 'Bahrain, UAE' },
  { region: 'South America', locations: 'São Paulo' },
];

export default function Compliance() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Compliance</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Enterprise-Grade <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              TarsLabs maintains the highest standards of security and compliance certifications to protect your data and meet regulatory requirements worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2"><Download className="w-4 h-4" /> Download SOC 2 Report</a>
              <Link to="/security" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><Lock className="w-4 h-4" /> Security</Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Certifications & Standards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="glass-panel gradient-border p-6 flex items-start gap-4">
              <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.status === 'Certified' || c.status === 'Compliant' ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-semibold text-foreground">{c.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-display ${c.status === 'In Progress' ? 'bg-muted/30 text-muted-foreground' : 'bg-primary/10 border border-primary/20 text-primary'}`}>{c.status}</span>
                </div>
                <p className="text-muted-foreground text-xs mt-1">{c.desc}</p>
                <span className="text-[10px] text-muted-foreground mt-2 inline-block">{c.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 border-t border-border/20">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Data Residency Options</h2>
        <div className="glass-panel gradient-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Enterprise customers can choose data residency in any of our 28 regions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataRegions.map(r => (
              <div key={r.region} className="p-4 rounded-lg bg-muted/10 border border-border/10">
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{r.region}</h4>
                <p className="text-xs text-muted-foreground">{r.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Need compliance documentation?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/contact" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Contact Compliance Team</Link>
            <Link to="/enterprise" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Enterprise</Link>
            <Link to="/ethics" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> AI Ethics</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
