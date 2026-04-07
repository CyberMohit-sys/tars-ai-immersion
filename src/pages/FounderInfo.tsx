import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, MapPin, Mail, Briefcase, GraduationCap, Award, Rocket, Code2, Cpu, Brain, Globe, Gamepad2, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mohidulImg from '@/assets/team-mohidul.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const skills = [
  { category: 'Languages', items: ['Python', 'Bash'], icon: Code2 },
  { category: 'AI / ML', items: ['Machine Learning', 'Generative AI', 'Agentic AI Systems', 'LLM Integration'], icon: Brain },
  { category: 'Prompt Engineering', items: ['Prompt Design', 'Chain-of-Thought', 'Few-Shot Prompting', 'RAG Concepts'], icon: Target },
  { category: 'IoT', items: ['IoT Architecture', 'Smart System Design', 'Sensor Integration', 'Edge Computing'], icon: Cpu },
  { category: 'Tools & APIs', items: ['REST APIs', 'OpenAI API', 'Hugging Face', 'Supabase', 'WebRTC'], icon: Globe },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'], icon: Code2 },
];

const certifications = [
  { name: 'O Level – Internet of Things and its Application (IoT)', org: 'NIELIT', date: 'Feb 2026' },
  { name: 'Certificate Course in AI & Machine Learning using Python', org: 'NIELIT', date: 'Feb 2026' },
  { name: 'Programming with Generative AI', org: 'IIT Guwahati (via Coursera)', date: 'Feb 2026' },
  { name: 'Introduction to Internet of Things', org: 'IIT Bombay (via Coursera)', date: 'Feb 2026' },
  { name: 'Introduction to Agentic AI', org: 'NIELIT', date: 'Feb 2026' },
  { name: 'DEEPCRAFT™ Studio – Infineon Tech Champion Program', org: 'NIELIT', date: 'Feb 2026' },
  { name: 'CCC – Course on Computer Concepts', org: 'NIELIT', date: 'Feb 2026' },
  { name: 'Machine Learning for All', org: 'University of London (via Coursera)', date: 'Feb 2026' },
];

const projects = [
  {
    title: 'TARS AI — Multi-Feature AI Platform',
    description: 'Full-stack AI platform featuring an intelligent conversational assistant and Gemini-powered image generation. Implemented Google OAuth and Supabase-based authentication with a modern React + TypeScript frontend.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Google Gemini API', 'OpenAI API', 'Vercel'],
  },
  {
    title: 'Lifecare AI – Health Guardian',
    description: 'Progressive Web App providing AI-powered symptom analysis, visual diagnosis via image uploads, telemedicine video consultations (WebRTC), and medication reminders with push notifications. Multi-language support for 10+ Indian languages.',
    tech: ['React', 'TypeScript', 'Supabase', 'WebRTC', 'Framer Motion', 'Recharts', 'PWA', 'Vercel'],
  },
  {
    title: 'Gesture Controlled Virtual Mouse',
    description: 'Contactless human-computer interaction system using MediaPipe-based CNN hand detection for cursor control, clicks, scrolling, drag-and-drop, volume, and brightness control. Integrated voice assistant (Proton) for hands-free commands.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'CNN', 'PyAudio', 'SpeechRecognition'],
  },
  {
    title: 'NCMT Global Elevation',
    description: 'Professional web platform for NCMT UAE — a National Centre for Management & Training — delivering a clean, modern interface for showcasing training programs and institutional services.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Bharat Insights Hub',
    description: 'Open government data visualization platform aggregating public datasets from India\'s official sources. Features interactive charts, filterable datasets, and a clean dashboard UI.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualization', 'Vercel'],
  },
];

function SectionTitle({ icon: Icon, title, index }: { icon: React.ElementType; title: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className="flex items-center gap-3 mb-8"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </motion.div>
  );
}

export default function FounderInfo() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/6 blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Avatar */}
            <motion.div
              className="w-40 h-40 rounded-2xl border-2 border-primary/30 overflow-hidden shrink-0 relative"
              style={{ boxShadow: '0 0 80px hsl(210 100% 56% / 0.3), 0 0 140px hsl(260 80% 55% / 0.15)' }}
            >
              <img src={mohidulImg} alt="Mohidul Alom Laskar" className="w-full h-full object-cover object-top" />
            </motion.div>

            <div className="text-center md:text-left">
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-2">Founder & CEO</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Mohidul Alom Laskar</h1>
              <p className="text-muted-foreground text-lg mb-3">AI Engineer • Generative AI Developer • IoT Developer</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>India • Open to Remote & Hybrid Roles</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="https://in.linkedin.com/in/mohidul-alom-laskar-09626b320" target="_blank" rel="noopener noreferrer"
                  className="btn-glow text-primary-foreground text-sm inline-flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/CyberMohit-sys" target="_blank" rel="noopener noreferrer"
                  className="btn-outline-glow text-sm inline-flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={Briefcase} title="Professional Summary" index={0} />
          <motion.div
            className="glass-panel gradient-border p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Certified AI & IoT Developer with hands-on expertise in Python, Generative AI, Agentic AI systems, and smart IoT architectures. Trained through industry-recognized programs authorized by IIT Guwahati, IIT Bombay, and NIELIT, with practical experience building intelligent automation pipelines, AI-integrated embedded systems, and LLM-powered applications. Passionate about bridging the gap between AI and connected hardware to deliver real-world, scalable solutions. A fast learner with a builder's mindset, actively seeking entry-level AI or AI+IoT roles where innovation drives impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={Code2} title="Technical Skills" index={1} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                className="glass-panel gradient-border p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <skill.icon className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-sm font-semibold text-foreground">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={Award} title="Certifications & Training" index={2} />
          <div className="grid gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="glass-panel gradient-border p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{cert.org}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 shrink-0 w-fit">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={Gamepad2} title="Hackathons & Competitions" index={3} />
          <motion.div
            className="glass-panel gradient-border p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-2">DUHacks 5.0</h3>
            <p className="text-primary text-xs font-display tracking-wide mb-3">Google Developer Groups on-Campus, DDU • Jan 2026</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Participated in a 36-hour National Level Hackathon organized by GDG on-Campus at Dhirubhai Ambani Institute of Information and Communication Technology (DDU), January 24–25, 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={Rocket} title="Projects" index={4} />
          <div className="grid gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass-panel gradient-border p-6 md:p-8 group hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={GraduationCap} title="Career Objective" index={5} />
          <motion.div
            className="glass-panel gradient-border p-6 md:p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic relative">
              "To contribute as an entry-level AI Engineer or AI+IoT Developer in a forward-thinking organization where I can apply my expertise in Generative AI, agentic systems, and smart IoT design to build intelligent, real-world solutions — while continuously growing alongside a high-impact team."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
