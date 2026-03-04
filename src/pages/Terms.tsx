import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using TarsLabs services, APIs, or any associated software (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services.' },
  { title: '2. Use of Services', content: 'You may use our Services only in compliance with these Terms and all applicable laws. You are responsible for your use of the Services and for any content you provide, including compliance with applicable laws, rules, and regulations.' },
  { title: '3. API Usage', content: 'Access to TarsLabs APIs is subject to rate limits and usage policies. You agree not to circumvent rate limits, reverse-engineer our models, or use outputs to train competing models without explicit written permission.' },
  { title: '4. Account Security', content: 'You are responsible for safeguarding your API keys and account credentials. TarsLabs cannot and will not be liable for any loss or damage arising from your failure to maintain the security of your account.' },
  { title: '5. Intellectual Property', content: 'TarsLabs retains all rights, title, and interest in our models, algorithms, and infrastructure. You retain ownership of your input data and the outputs generated through our APIs, subject to our usage policies.' },
  { title: '6. Data Privacy', content: 'We process personal data in accordance with our Privacy Policy. API inputs are not used for model training unless you explicitly opt in. We implement industry-standard encryption and access controls.' },
  { title: '7. Limitation of Liability', content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, TARSLABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.' },
  { title: '8. Termination', content: 'We may suspend or terminate your access to the Services at any time for violations of these Terms. Upon termination, your right to use the Services will immediately cease.' },
  { title: '9. Changes to Terms', content: 'We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through the Services. Continued use after changes constitutes acceptance.' },
  { title: '10. Contact', content: 'For questions about these Terms, contact us at legal@tarslabs.ai.' },
];

export default function Terms() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: March 1, 2026</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 pt-8 border-t border-border/20">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 1, 2026</p>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Data Collection:</strong> We collect account information (email, name), usage data (API calls, logs), and technical data (IP, device info) to provide and improve our Services.</p>
              <p><strong className="text-foreground">Data Use:</strong> Your data is used to operate the Services, provide support, ensure security, and improve performance. API inputs are not used for training unless you opt in.</p>
              <p><strong className="text-foreground">Data Sharing:</strong> We do not sell personal data. We may share data with service providers operating under strict data processing agreements.</p>
              <p><strong className="text-foreground">Data Retention:</strong> Account data is retained while your account is active. API logs are retained for 30 days. You may request data deletion at any time.</p>
              <p><strong className="text-foreground">Your Rights:</strong> Under GDPR and CCPA, you have the right to access, correct, delete, and port your data. Contact privacy@tarslabs.ai to exercise these rights.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
