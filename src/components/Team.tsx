import { motion } from 'framer-motion';
import mohidulImg from '@/assets/team-mohidul.png';
import farhanImg from '@/assets/team-farhan.png';
import alishaImg from '@/assets/team-alisha.png';
import amanulImg from '@/assets/team-amanul.png';
import rejwanImg from '@/assets/team-rejwan.png';

const team = [
  {
    name: 'Mohidul Alom Laskar',
    role: 'Founder & CEO',
    description: 'Founder of TarsLabs and creator of Tars AI, TarsVision, and Tars AI Studio. Building scalable AI systems for the autonomous future.',
    image: mohidulImg,
    highlight: true,
  },
  {
    name: 'Farhan Ansari',
    role: 'Co-Founder · Product & Marketing',
    description: 'Drives product testing, user feedback, and marketing initiatives. Supports Tars AI ecosystem growth and community outreach.',
    image: farhanImg,
  },
  {
    name: 'Alisha Munda',
    role: 'Content Creator & Strategist',
    description: 'Creates engaging digital content and social media storytelling that communicates TarsLabs vision to a wider audience.',
    image: alishaImg,
  },
  {
    name: 'Amanul Laskar',
    role: 'Editor',
    description: 'Reviews, refines, and polishes content across all TarsLabs platforms, ensuring clarity and quality in every communication.',
    image: amanulImg,
  },
  {
    name: 'Rejwan Hussain',
    role: 'Content Creator & Editor',
    description: 'Produces and edits high-quality video and multimedia content that showcases TarsLabs products and brings the vision to life.',
    image: rejwanImg,
  },
];

const Team = () => (
  <section className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          The People
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
          Meet the <span className="text-gradient">Team</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          The minds behind TarsLabs — building the future of autonomous intelligence.
        </p>
      </motion.div>

      {/* Top row: 3 cards centered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
        {team.slice(0, 3).map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

      {/* Bottom row: 2 cards centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {team.slice(3).map((member, i) => (
          <TeamCard key={member.name} member={member} index={i + 3} />
        ))}
      </div>
    </div>
  </section>
);

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-panel gradient-border p-8 group hover:bg-muted/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.15)] text-center ${member.highlight ? 'ring-1 ring-primary/20' : ''}`}
    >
      {/* Avatar */}
      <div className={`w-24 h-24 rounded-full border-2 overflow-hidden mx-auto mb-6 transition-all duration-300 ${
        member.highlight
          ? 'border-primary/50 shadow-[0_0_30px_hsl(210_100%_56%/0.25)] group-hover:shadow-[0_0_40px_hsl(210_100%_56%/0.35)]'
          : 'border-primary/30 group-hover:border-primary/60 group-hover:shadow-[0_0_24px_hsl(210_100%_56%/0.25)]'
      }`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {member.highlight && (
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-display tracking-wider uppercase mb-3">
          Founder
        </span>
      )}

      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
        {member.name}
      </h3>
      <p className="text-primary text-sm font-display tracking-wide mb-4">
        {member.role}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {member.description}
      </p>
    </motion.div>
  );
}

export default Team;
