import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Eye, Code2, Bot } from 'lucide-react';

const techs = [
  { title: 'TARS Ultra', desc: 'Advanced reasoning model', icon: Brain, color: 'glow-blue' },
  { title: 'TARS Vision', desc: 'Multimodal intelligence', icon: Eye, color: 'glow-purple' },
  { title: 'TARS Code', desc: 'AI-powered development engine', icon: Code2, color: 'glow-cyan' },
  { title: 'TARS Agents', desc: 'Autonomous task execution layer', icon: Bot, color: 'glow-blue' },
];

function TiltCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <div
        className={`glass-panel gradient-border p-8 h-full cursor-pointer transition-all duration-200 ${tech.color}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-6">
          <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{tech.title}</h3>
        <p className="text-muted-foreground text-sm">{tech.desc}</p>
      </div>
    </motion.div>
  );
}

export default function TechCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Technology</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
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
