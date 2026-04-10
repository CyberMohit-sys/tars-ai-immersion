import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';

const TARS_URL = 'https://tars-ai-company.vercel.app/';
const TARSVISION_URL = 'https://tarsvision.vercel.app/';
const LIFECARE_URL = 'https://lifecareai-health-guardian.vercel.app/';
const GITHUB_URL = 'https://github.com/CyberMohit-sys';

const projects = [
  {
    title: 'TARS AI',
    desc: 'The autonomous intelligence platform. Conversational AI with multi-model switching, real-time streaming, and agent orchestration.',
    link: TARS_URL,
    tag: 'AI Platform',
    showSource: false,
    featured: true,
  },
  {
    title: 'TARS Vision',
    desc: 'Visual intelligence engine — text-to-image generation, image refinement, and contextual visual synthesis delivering cinematic outputs.',
    link: TARSVISION_URL,
    tag: 'Visual AI',
    showSource: false,
    featured: true,
  },
  {
    title: 'Lifecare AI',
    desc: 'AI-powered healthcare intelligence platform for diagnostics, patient analysis, and medical research automation.',
    link: LIFECARE_URL,
    tag: 'Healthcare AI',
    showSource: false,
  },
  {
    title: 'Mouse Gesture Controller',
    desc: 'Computer vision-based gesture recognition system for hands-free device control using real-time hand tracking.',
    link: '#',
    tag: 'Computer Vision',
    showSource: true,
    sourceLink: GITHUB_URL,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Projects</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            What We've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Real products solving real problems — from healthcare to creative AI.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`glass-panel gradient-border p-8 group hover:shadow-[0_0_50px_hsl(210_100%_56%/0.1)] transition-all duration-500 ${p.featured ? 'shimmer' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="tag-pill">{p.tag}</span>
                {p.link !== '#' && <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="flex items-center gap-3">
                {p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground text-sm px-5 py-2 inline-flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" /> <span>Launch</span>
                  </a>
                )}
                {p.showSource && p.sourceLink && (
                  <a href={p.sourceLink} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-sm px-5 py-2 inline-flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5" /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
