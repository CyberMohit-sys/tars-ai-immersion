import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Mail, ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pressArticles = [
  {
    id: 'series-c',
    date: 'Mar 28, 2026',
    title: 'TarsLabs Innovation Raises $250M Series C to Scale AI Infrastructure Globally',
    source: 'TarsLabs Newsroom',
    category: 'Funding',
    readTime: '5 min read',
    content: `TarsLabs Innovation, the rapidly growing artificial intelligence company founded by Mohidul Alom Laskar, announced today that it has closed a $250 million Series C funding round led by Sequoia Capital, with participation from Andreessen Horowitz, Lightspeed Ventures, and Tiger Global Management. The round values the company at $4.2 billion.

The funding will be used to expand TarsLabs' global AI infrastructure across 28 data center regions, accelerate research into next-generation multimodal models, and grow the team from 800 to over 1,500 employees by end of 2026.

"This investment validates our vision of making enterprise-grade AI accessible to every organization on Earth," said Mohidul Alom Laskar, Founder and CEO. "We're not just building AI tools — we're building the infrastructure layer that will power the next decade of intelligent applications."

Since its founding in 2024, TarsLabs has grown to serve over 2,400 enterprise customers across 85 countries. The company's flagship product, TARS AI, has processed over 50 billion API calls and maintains a 99.97% uptime SLA.

Sarah Chen, Partner at Sequoia Capital who led the round, stated: "TarsLabs represents the rare combination of cutting-edge research and practical enterprise execution. Their growth trajectory is among the most impressive we've seen in the AI space."

The company plans to open new R&D centers in London, Tokyo, and Bangalore in Q3 2026, and expects to reach $500M in annual recurring revenue by year-end.`
  },
  {
    id: 'tars-4-launch',
    date: 'Feb 15, 2026',
    title: 'TarsLabs Launches TARS-4 — Most Capable Multimodal AI Model to Date',
    source: 'TarsLabs Newsroom',
    category: 'Product',
    readTime: '7 min read',
    content: `TarsLabs Innovation today announced the launch of TARS-4, its most advanced multimodal AI model, setting new state-of-the-art benchmarks across 14 industry-standard evaluations including MMLU, HumanEval, MATH, and the newly introduced Enterprise AI Benchmark (EAB).

TARS-4 achieves 92.3% on MMLU (surpassing the previous best of 90.1%), 89.7% on HumanEval for code generation, and introduces breakthrough capabilities in real-time video understanding, multilingual document analysis, and autonomous workflow planning.

Key capabilities of TARS-4 include:
• 200K context window with near-perfect recall across the entire context
• Native multimodal processing of text, images, video, audio, and code
• Advanced reasoning with chain-of-thought verification
• Real-time tool use and API orchestration
• Support for 97 languages with native-quality output

"TARS-4 represents a fundamental leap in AI capability," said Dr. Elena Vasquez, VP of Research at TarsLabs. "We've achieved this through a novel training methodology we call 'Recursive Alignment Training' (RAT), which we detail in our accompanying research paper."

The model is available immediately through the TarsLabs API, with pricing starting at $3 per million input tokens and $15 per million output tokens. Enterprise customers receive priority access with dedicated compute allocation.

Early access partners including McKinsey, Deloitte, and Samsung have reported 10x productivity improvements in document analysis workflows and 40% reduction in software development time when using TARS-4 compared to previous-generation models.`
  },
  {
    id: 'who-partnership',
    date: 'Jan 10, 2026',
    title: 'TarsLabs Partners with World Health Organization for Global Health AI Initiative',
    source: 'TarsLabs Newsroom',
    category: 'Partnership',
    readTime: '4 min read',
    content: `TarsLabs Innovation announced a landmark partnership with the World Health Organization (WHO) to deploy AI-powered health diagnostics across 50 developing nations over the next three years. The initiative, dubbed "HealthAI Global," will leverage TarsLabs' Lifecare AI platform to provide early detection of diseases including tuberculosis, malaria, and diabetes.

The partnership includes a $20 million commitment from TarsLabs to provide free AI infrastructure, training, and support to healthcare providers in underserved regions. The first deployments are scheduled for Q2 2026 in Kenya, India, and Bangladesh.

"Technology must serve humanity's most pressing challenges," said Mohidul Alom Laskar. "With Lifecare AI already achieving 99.2% diagnostic accuracy in clinical trials, we have a moral obligation to make this technology accessible to the communities that need it most."

Dr. Tedros Adhanom Ghebreyesus, WHO Director-General, praised the partnership: "TarsLabs' AI technology has the potential to transform healthcare delivery in regions where specialist doctors are scarce. This partnership could save millions of lives."

Lifecare AI has already been deployed in over 200 clinics across Southeast Asia, where it has helped diagnose over 150,000 patients and reduced diagnostic wait times from weeks to minutes.`
  },
  {
    id: 'forbes-ai-50',
    date: 'Dec 5, 2025',
    title: 'TarsLabs Named to Forbes AI 50 List for Second Consecutive Year',
    source: 'Forbes',
    category: 'Award',
    readTime: '3 min read',
    content: `For the second consecutive year, TarsLabs Innovation has been named to the Forbes AI 50, an annual list recognizing the most promising artificial intelligence companies in the world. TarsLabs climbed from #18 to #7 on this year's list, making it one of the fastest-rising companies in the ranking's history.

Forbes cited TarsLabs' exceptional growth trajectory, noting that the company's revenue grew 240% year-over-year while maintaining one of the highest Net Promoter Scores (NPS) in the enterprise software industry at 82.

"What sets TarsLabs apart is their ability to deliver cutting-edge AI research and turn it into products that enterprises actually adopt at scale," wrote Forbes contributor Alex Konrad. "In a market crowded with AI startups, TarsLabs has emerged as a clear infrastructure leader."

The recognition follows a transformative year for TarsLabs, which saw the company launch TARS Vision (a multimodal computer vision platform), expand to 85 countries, and grow its enterprise customer base from 800 to over 2,400 organizations.

Other companies on this year's AI 50 list include OpenAI, Anthropic, Databricks, Scale AI, and Cohere.`
  },
  {
    id: 'bangalore-rd',
    date: 'Nov 20, 2025',
    title: 'TarsLabs Opens New R&D Center in Bangalore, Plans to Hire 500 Researchers',
    source: 'TarsLabs Newsroom',
    category: 'Company',
    readTime: '4 min read',
    content: `TarsLabs Innovation officially opened its new 120,000 square-foot Research & Development center in Bangalore, India, marking the company's largest investment in international expansion. The state-of-the-art facility will house up to 500 AI researchers and engineers, making it TarsLabs' second-largest office globally after its San Francisco headquarters.

The Bangalore R&D center features a custom-built GPU cluster with over 2,000 NVIDIA H100 GPUs for training large-scale AI models, along with specialized labs for robotics, computer vision, and natural language processing research.

"India has some of the world's most talented AI researchers, and Bangalore is the epicenter of that talent," said Mohidul Alom Laskar during the inauguration ceremony. "This center will play a critical role in developing the next generation of TarsLabs AI products."

The center will focus on three key research areas:
1. Efficient model architectures for edge deployment
2. Multilingual AI systems supporting 50+ Indian languages
3. AI safety and alignment research

TarsLabs has already received over 15,000 applications for the 500 positions, with the first cohort of 150 researchers beginning in January 2026. The company is offering competitive salaries, equity packages, and visa sponsorship for international candidates.

Dr. Arjun Nair, who will lead the Bangalore center, said: "We're building a world-class research lab that will compete with the best institutions globally. Our mission is to push the boundaries of what AI can do while ensuring it benefits everyone."

The investment was supported by a grant from the Indian government's AI Mission initiative, which recognized TarsLabs' commitment to developing AI solutions for local challenges including agriculture, healthcare, and education.`
  },
  {
    id: 'tars-vision-benchmark',
    date: 'Oct 8, 2025',
    title: 'TARS Vision Achieves State-of-the-Art Results on ImageNet and COCO Benchmarks',
    source: 'TarsLabs Research',
    category: 'Research',
    readTime: '6 min read',
    content: `TarsLabs Innovation's computer vision platform, TARS Vision, has achieved state-of-the-art results on both the ImageNet and COCO benchmark datasets, outperforming models from Google, Meta, and OpenAI. The results were published in a peer-reviewed paper accepted at NeurIPS 2025.

On ImageNet, TARS Vision achieved a top-1 accuracy of 91.4%, surpassing the previous record of 90.9% held by Google's ViT-22B model. On the COCO object detection benchmark, TARS Vision achieved a mAP of 67.2, beating Meta's DINOv2 by 2.1 points.

The breakthrough was enabled by TarsLabs' novel "Hierarchical Visual Reasoning" (HVR) architecture, which processes images at multiple scales simultaneously and uses a dynamic attention mechanism to focus computational resources on the most informative regions.

"Traditional vision models treat all parts of an image equally," explained Dr. Wei Zhang, lead researcher on the TARS Vision team. "Our HVR architecture mimics how humans actually see — focusing attention where it matters most while maintaining awareness of the broader context."

Key technical innovations include:
• Dynamic resolution scaling from 224px to 4096px
• Cross-modal pre-training on 2B image-text pairs
• Efficient sparse attention reducing compute by 40%
• Zero-shot transfer to 12 downstream tasks

TARS Vision is available through the TarsLabs API and has been adopted by over 500 enterprise customers for applications including medical imaging, autonomous vehicles, quality inspection, and satellite imagery analysis.

The research paper, "Hierarchical Visual Reasoning: Towards Human-Like Visual Understanding," will be presented at the NeurIPS 2025 main conference in Vancouver.`
  },
];

const coverage = [
  { source: 'TechCrunch', title: '"TarsLabs is building the AI infrastructure layer that every enterprise will need"', url: '#' },
  { source: 'The Verge', title: '"The most impressive AI demo we\'ve seen this year comes from an unexpected player"', url: '#' },
  { source: 'Wired', title: '"TarsLabs\' open-source approach is reshaping the competitive landscape of AI"', url: '#' },
  { source: 'MIT Technology Review', title: '"How TarsLabs is solving the AI safety problem from the ground up"', url: '#' },
  { source: 'Bloomberg', title: '"TarsLabs\' $4.2B valuation makes it one of the fastest unicorns in AI history"', url: '#' },
  { source: 'Financial Times', title: '"The Indian-founded AI startup taking on Silicon Valley giants — and winning"', url: '#' },
];

export default function Press() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const activeArticle = pressArticles.find(a => a.id === selectedArticle);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />

      {/* Article Detail Modal */}
      {activeArticle && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-20">
            <button onClick={() => setSelectedArticle(null)} className="text-muted-foreground hover:text-foreground text-sm font-display mb-8 inline-block">← Back to Press</button>
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-display">{activeArticle.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" /> {activeArticle.date}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {activeArticle.readTime}</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">{activeArticle.title}</h1>
              <p className="text-sm text-primary font-display mb-8">{activeArticle.source}</p>
              <div className="prose prose-invert max-w-none">
                {activeArticle.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-[15px]">{paragraph}</p>
                ))}
              </div>
              <div className="border-t border-border/20 mt-12 pt-8 flex flex-wrap gap-4">
                <Link to="/investors" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2 text-sm"><ArrowUpRight className="w-4 h-4" /> Investor Relations</Link>
                <Link to="/company" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2 text-sm"><ArrowUpRight className="w-4 h-4" /> About TarsLabs</Link>
                <Link to="/contact" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2 text-sm"><Mail className="w-4 h-4" /> Contact PR</Link>
              </div>
            </motion.article>
          </div>
        </motion.div>
      )}

      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Press & Media</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              In the <span className="text-gradient">News</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Press releases, media coverage, and brand resources. For press inquiries, contact our communications team.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:press@tarslabs.com" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> Press Inquiries
              </a>
              <Link to="/company" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" /> About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Media Coverage */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Media Coverage</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((c, i) => (
            <motion.div key={c.source} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group cursor-pointer">
              <span className="text-xs text-primary font-display tracking-wide uppercase">{c.source}</span>
              <p className="text-foreground text-sm mt-2 italic leading-relaxed group-hover:text-primary transition-colors">{c.title}</p>
              <span className="text-xs text-muted-foreground mt-3 inline-flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Read article</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Press Releases */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Press Releases</h2>
        <div className="space-y-4">
          {pressArticles.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              onClick={() => setSelectedArticle(p.id)}
              className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/10 transition-all group cursor-pointer border border-border/10 hover:border-primary/20">
              <div className="flex-shrink-0 text-center">
                <span className="text-xs text-muted-foreground font-display block min-w-[100px]">{p.date}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-display mt-1 inline-block">{p.category}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-muted-foreground">{p.source}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Kit */}
      <div className="max-w-5xl mx-auto px-6 py-12 mb-8">
        <div className="glass-panel gradient-border p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Brand Assets</h2>
          <p className="text-muted-foreground text-sm mb-6">Download logos, brand guidelines, product screenshots, and executive headshots.</p>
          <button className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Brand Kit
          </button>
        </div>
      </div>

      {/* Cross-links */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Learn More About TarsLabs</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/company" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> About Us</Link>
            <Link to="/investors" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Investors</Link>
            <Link to="/case-studies" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Case Studies</Link>
            <Link to="/events" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Events</Link>
            <Link to="/careers" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Careers</Link>
            <Link to="/accessibility" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Accessibility</Link>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
