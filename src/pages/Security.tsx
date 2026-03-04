import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const practices = [
  { icon: <Lock className="w-5 h-5" />, title: 'Encryption at Rest & Transit', desc: 'All data encrypted with AES-256 at rest and TLS 1.3 in transit. Zero plaintext storage of credentials or API keys.' },
  { icon: <Shield className="w-5 h-5" />, title: 'SOC 2 Type II Compliance', desc: 'Annual third-party audits verifying security controls, availability, and confidentiality across all infrastructure.' },
  { icon: <Eye className="w-5 h-5" />, title: 'Privacy by Design', desc: 'GDPR and CCPA compliant. User data is never used for model training without explicit consent.' },
  { icon: <Server className="w-5 h-5" />, title: 'Infrastructure Security', desc: 'Deployed on isolated VPCs with network segmentation, WAF protection, and real-time intrusion detection.' },
  { icon: <FileCheck className="w-5 h-5" />, title: 'Vulnerability Management', desc: 'Continuous automated scanning, responsible disclosure program, and 24-hour patch SLA for critical vulnerabilities.' },
  { icon: <Users className="w-5 h-5" />, title: 'Access Controls', desc: 'Role-based access with MFA enforcement, session management, and comprehensive audit logging across all systems.' },
];

export default function Security() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Security at <span className="text-gradient">TarsLabs</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Security is foundational to everything we build. We implement defense-in-depth strategies to protect your data and models.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {practices.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-panel gradient-border p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">{p.icon}</div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-panel gradient-border p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Report a Vulnerability</h2>
            <p className="text-sm text-muted-foreground mb-4">Found a security issue? We appreciate responsible disclosure.</p>
            <a href="mailto:security@tarslabs.ai" className="btn-glow text-primary-foreground text-sm px-6 py-2.5 inline-flex">Contact Security Team</a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
