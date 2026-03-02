import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Eye, Code2, Bot } from 'lucide-react';

const techs = [
  { title: 'TARS Ultra', desc: 'Advanced reasoning model with multi-step logical chains', icon: Brain, accent: 'from-glow-blue to-glow-purple' },
  { title: 'TARS Vision', desc: 'Multimodal intelligence for visual understanding', icon: Eye, accent: 'from-glow-purple to-glow-cyan' },
  { title: 'TARS Code', desc: 'AI-powered development engine for autonomous coding', icon: Code2, accent: 'from-glow-cyan to-glow-blue' },
  { title: 'TARS Agents', desc: 'Autonomous task execution and orchestration layer', icon: Bot, accent: 'from-glow-blue to-accent' },
];

function TiltCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => { setRotation({ x: 0, y: 0 }); setHovering(false); };
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1000px' }}
    >
      <div
        className="glass-panel gradient-border p-8 h-full cursor-pointer transition-shadow duration-300 group"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${hovering ? 'translateZ(10px)' : ''}`,
          transition: 'transform 0.15s ease-out',
          boxShadow: hovering ? '0 0 40px hsl(210 100% 56% / 0.2), 0 20px 60px hsl(0 0% 0% / 0.3)' : 'none',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{tech.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
        
        {/* Bottom glow line */}
        <motion.div
          className="mt-6 h-px w-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}

export default function TechCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[180px]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Technology</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Technology <span className="text-gradient">Ecosystem</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <TiltCard key={tech.title} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
