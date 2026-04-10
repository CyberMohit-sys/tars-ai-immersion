import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Eye, Code2, Bot, ArrowUpRight } from 'lucide-react';

const techs = [
  { title: 'TARS Ultra', desc: 'Advanced reasoning model with multi-step logical chains and deep analytical capabilities.', icon: Brain, color: 'from-blue-500/20 to-purple-500/10' },
  { title: 'TARS Vision', desc: 'Multimodal intelligence for visual understanding, generation, and creative synthesis.', icon: Eye, color: 'from-purple-500/20 to-cyan-500/10' },
  { title: 'TARS Code', desc: 'AI-powered development engine for autonomous coding, debugging, and deployment.', icon: Code2, color: 'from-cyan-500/20 to-blue-500/10' },
  { title: 'TARS Agents', desc: 'Autonomous task execution and orchestration layer for complex workflows.', icon: Bot, color: 'from-blue-500/15 to-emerald-500/10' },
];

function TiltCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setRotation({ x, y });
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => { setRotation({ x: 0, y: 0 }); setHovering(false); };
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1200px' }}
    >
      <div
        className="glass-panel gradient-border p-8 h-full cursor-pointer transition-all duration-300 group relative overflow-hidden"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${hovering ? 'translateZ(15px) scale(1.02)' : ''}`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          boxShadow: hovering ? '0 0 50px hsl(210 100% 56% / 0.15), 0 25px 80px hsl(0 0% 0% / 0.4)' : 'none',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Mouse follow glow */}
        {hovering && (
          <div
            className="absolute w-[200px] h-[200px] rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              left: `${mousePos.x}%`,
              top: `${mousePos.y}%`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, hsl(210 100% 56% / 0.12), transparent 70%)',
            }}
          />
        )}

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/10 group-hover:border-primary/20">
              <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{tech.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>

          {/* Bottom glow line */}
          <motion.div
            className="mt-6 animated-gradient-line h-px w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.12, duration: 0.8 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function TechCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="section-padding relative" ref={ref}>
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
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Four pillars of autonomous intelligence powering the TARS platform.</p>
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
