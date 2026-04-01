import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What is TarsLabs Innovation?', a: 'TarsLabs Innovation is an AI research and product company building autonomous intelligence systems including TARS AI, TarsVision, and Lifecare AI.' },
  { q: 'What is TARS AI?', a: 'TARS AI is our flagship autonomous intelligence system designed to think, create, and evolve — handling complex tasks from content generation to code creation.' },
  { q: 'How can I try TarsLabs products?', a: 'You can launch TARS AI directly from our homepage or visit the individual product pages. Most products offer free tiers for exploration.' },
  { q: 'Is TarsLabs hiring?', a: 'Yes! Visit our Careers page to see open roles. We\'re looking for passionate people across AI research, engineering, content, and strategy.' },
  { q: 'Can I partner with TarsLabs?', a: 'Absolutely. Visit our Partners page or contact us through the Company page to discuss collaboration opportunities.' },
  { q: 'What makes TarsLabs different?', a: 'We focus on truly autonomous systems — AI that doesn\'t just respond but proactively thinks, plans, and executes. Our research-first approach ensures cutting-edge capabilities.' },
];

export default function FAQ() {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-panel gradient-border px-6 border-none">
                <AccordionTrigger className="font-display text-sm font-semibold text-foreground hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
