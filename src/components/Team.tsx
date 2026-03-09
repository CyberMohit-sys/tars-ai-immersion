import { motion } from 'framer-motion';
import mohidulImg from '@/assets/team-mohidul.png';
import farhanImg from '@/assets/team-farhan.png';
import alishaImg from '@/assets/team-alisha.png';

const team = [
  {
    name: 'Mohidul Alom Laskar',
    role: 'Founder & CEO — TarsLabs',
    description:
      'Mohidul Alom Laskar is the founder of TarsLabs and the creator behind platforms such as Tars AI, TarsVision, and the upcoming Tars AI Studio. His focus is on building scalable artificial intelligence systems that help people create, automate tasks, and develop digital products using AI.',
    initials: 'ML',
    image: mohidulImg,
  },
  {
    name: 'Farhan Ansari',
    role: 'Co-Founder (Product & Marketing) — TarsLabs',
    description:
      'Farhan Ansari contributes to product testing, user feedback, and marketing initiatives for TarsLabs. He supports the growth of the Tars AI ecosystem by testing features, exploring user experience, and helping expand community outreach.',
    initials: 'FA',
    image: farhanImg,
  },
  {
    name: 'Alisha Munda',
    role: 'Content Creator & Business Strategist — TarsLabs',
    description:
      'Alisha Munda is a Content Creator at TarsLabs. She works on creating engaging digital content, social media posts, and creative storytelling that helps communicate the vision and updates of TarsLabs. Her work supports the growth of the TarsLabs community and helps present products like Tars AI and TarsVision to a wider audience.',
    initials: 'AM',
    image: alishaImg,
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-panel gradient-border p-8 group hover:bg-muted/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.15)] text-center"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full border-2 border-primary/30 overflow-hidden mx-auto mb-6 group-hover:border-primary/60 group-hover:shadow-[0_0_24px_hsl(210_100%_56%/0.25)] transition-all duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

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
        ))}
      </div>
    </div>
  </section>
);

export default Team;
