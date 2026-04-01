import { motion } from 'framer-motion';
import mohidulImg from '@/assets/team-mohidul.png';
import farhanImg from '@/assets/team-farhan.png';
import amanulImg from '@/assets/team-amanul.png';
import rejwanImg from '@/assets/team-rejwan.png';
import firdousImg from '@/assets/team-firdous.jpg';
import mahmadulImg from '@/assets/team-mahmadul.png';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
}

const team: TeamMember[] = [
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
    name: 'Amanul Laskar',
    role: 'Editor — TarsLabs',
    description:
      'Amanul Laskar is an Editor at TarsLabs. He is responsible for reviewing, refining, and polishing content across all TarsLabs platforms, ensuring clarity, consistency, and quality in every piece of communication that reaches the audience.',
    initials: 'AL',
    image: amanulImg,
  },
  {
    name: 'Rejwan Hussain',
    role: 'Content Creator & Editor — TarsLabs',
    description:
      'Rejwan Hussain is a Content Creator and Editor at TarsLabs. He produces and edits high-quality video and multimedia content that showcases TarsLabs products and vision, helping bring the story of Tars AI and TarsVision to life for a growing audience.',
    initials: 'RH',
    image: rejwanImg,
  },
  {
    name: 'Salina Begum',
    role: 'Personal Assistant (PA) — TarsLabs',
    description:
      'Salina Begum serves as Personal Assistant at TarsLabs, coordinating schedules, communications, and daily operations to ensure smooth functioning across the team.',
    initials: 'SB',
  },
  {
    name: 'Adarsh Kurmi',
    role: 'Content Creator & Editor — TarsLabs',
    description:
      'Adarsh Kurmi is a Content Creator and Editor at TarsLabs, producing and refining multimedia content that effectively communicates the TarsLabs vision to a wider audience.',
    initials: 'AK',
  },
  {
    name: 'Juned Ahmed',
    role: 'Content Writer — TarsLabs',
    description:
      'Juned Ahmed is a Content Writer at TarsLabs, crafting clear and compelling written content including articles, product descriptions, and communication materials for the TarsLabs ecosystem.',
    initials: 'JA',
  },
  {
    name: 'Mahmadul Hussain',
    role: 'Collaborations Manager — TarsLabs',
    description:
      'Mahmadul Hussain manages collaborations and partnerships at TarsLabs, building strategic relationships that expand the reach and impact of TarsLabs products and services.',
    initials: 'MH',
    image: mahmadulImg,
  },
  {
    name: 'Maksud Laskar',
    role: 'Content Creator — TarsLabs',
    description:
      'Maksud Laskar is a Content Creator at TarsLabs, producing engaging visual and digital content that showcases TarsLabs products and helps grow the community.',
    initials: 'ML',
  },
  {
    name: 'Radiya Begum',
    role: 'Research Analyst — TarsLabs',
    description:
      'Radiya Begum is a Research Analyst at TarsLabs, conducting market research and data analysis to inform product decisions and strategic direction for the team.',
    initials: 'RB',
  },
  {
    name: 'Krish Singha',
    role: 'Business Strategist — TarsLabs',
    description:
      'Krish Singha is a Business Strategist at TarsLabs, developing growth strategies and business plans that drive the expansion and sustainability of TarsLabs operations.',
    initials: 'KS',
  },
  {
    name: 'Sajida Begum',
    role: 'Quality Assurance (QA) — TarsLabs',
    description:
      'Sajida Begum handles Quality Assurance at TarsLabs, rigorously testing products and features to ensure reliability, performance, and a seamless user experience.',
    initials: 'SB',
  },
  {
    name: 'Firdous Begum',
    role: 'Product Tester — TarsLabs',
    description:
      'Firdous Begum is a Product Tester at TarsLabs, evaluating new features and products to identify issues and provide feedback that helps improve the overall quality of TarsLabs offerings.',
    initials: 'FB',
    image: firdousImg,
  },
];

const Team = () => (
  <section className="section-padding relative z-10">
    <div className="max-w-7xl mx-auto">
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
          The minds behind TarsLabs Innovation — building the future of autonomous intelligence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            className="glass-panel gradient-border p-6 group hover:bg-muted/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.15)] text-center"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 overflow-hidden mx-auto mb-5 group-hover:border-primary/60 group-hover:shadow-[0_0_24px_hsl(210_100%_56%/0.25)] transition-all duration-300 flex items-center justify-center bg-primary/10">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <span className="text-primary font-display text-lg font-bold">
                  {member.initials}
                </span>
              )}
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-primary text-xs font-display tracking-wide mb-3">
              {member.role}
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
