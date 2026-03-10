import { motion } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, Activity, Heart, Hand } from 'lucide-react';

const TARS_URL = 'https://tars-ai-blush.vercel.app/';
const TARSVISION_URL = 'https://tarsvision.vercel.app/';
const LIFECARE_URL = 'https://lifecareai-health-guardian.vercel.app/';
const GITHUB_URL = 'https://github.com/CyberMohit-sys';

const projects = [
  {
    title: 'TARS AI',
    desc: 'The autonomous intelligence platform — conversational AI with multi-model switching, real-time streaming, and autonomous agent orchestration.',
    link: TARS_URL,
    tag: 'AI Platform',
    status: 'Live',
    icon: Sparkles,
    showSource: false,
  },
  {
    title: 'TARS Vision',
    desc: 'Visual intelligence engine — text-to-image generation, image refinement, and contextual visual synthesis delivering cinematic, ultra-detailed outputs.',
    link: TARSVISION_URL,
    tag: 'Visual AI',
    status: 'Live',
    icon: Eye,
    showSource: false,
  },
  {
    title: 'Lifecare AI',
    desc: 'AI-powered healthcare intelligence platform for diagnostics, patient analysis, and medical research automation.',
    link: LIFECARE_URL,
    tag: 'Healthcare AI',
    status: 'Live',
    icon: Heart,
    showSource: false,
  },
  {
    title: 'Mouse Gesture Controller',
    desc: 'Computer vision-based gesture recognition system for hands-free device control using real-time hand tracking and motion analysis.',
    link: '#',
    tag: 'Computer Vision',
    status: 'In Development',
    icon: Hand,
    showSource: true,
    sourceLink: GITHUB_URL,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
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
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real products shipping real AI — from conversational intelligence to computer vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="glass-panel gradient-border p-8 group hover:bg-muted/20 transition-all duration-300 hover:shadow-[0_0_50px_hsl(210_100%_56%/0.12)] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Subtle corner glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-[60px] transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-primary/20 text-primary font-display">{p.tag}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-display tracking-wider uppercase ${
                      p.status === 'Live'
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'bg-secondary/10 text-secondary border border-secondary/20'
                    }`}>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${p.status === 'Live' ? 'bg-accent animate-pulse' : 'bg-secondary'}`} />
                      {p.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>

                  <div className="flex items-center gap-3">
                    {p.link !== '#' && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-glow text-primary-foreground text-sm px-5 py-2 inline-flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5" /> Launch
                      </a>
                    )}
                    {p.showSource && p.sourceLink && (
                      <a href={p.sourceLink} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-sm px-5 py-2 inline-flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
