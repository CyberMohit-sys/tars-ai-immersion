import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Package, Wrench, Cpu, Rocket, ArrowUpRight, Code, Download, GitBranch } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const tools = [
  { icon: Terminal, name: 'TARS CLI', desc: 'Command-line interface for managing models, deployments, and API keys. Install with npm, pip, or brew.', install: 'npm install -g @tarslabs/cli', downloads: '890K+' },
  { icon: Package, name: 'Python SDK', desc: 'Official Python client with async support, streaming, function calling, and type safety.', install: 'pip install tarslabs', downloads: '2.4M+' },
  { icon: Code, name: 'TypeScript SDK', desc: 'Full-featured TypeScript/JavaScript SDK with React hooks, Next.js integration, and Edge Runtime support.', install: 'npm install @tarslabs/sdk', downloads: '1.8M+' },
  { icon: Wrench, name: 'VS Code Extension', desc: 'AI-powered code completion, inline chat, code refactoring, and documentation generation inside VS Code.', install: 'ext install tarslabs.tars-code', downloads: '520K+' },
  { icon: GitBranch, name: 'GitHub Action', desc: 'Automate AI-powered code review, test generation, and documentation in your CI/CD pipeline.', install: 'uses: tarslabs/ai-review@v2', downloads: '180K+' },
  { icon: Cpu, name: 'Model Playground', desc: 'Interactive sandbox to test all TARS models with different parameters, prompts, and multimodal inputs.', install: 'tarslabs.com/playground', downloads: '3.2M sessions' },
];

const quickstarts = [
  { lang: 'Python', code: 'from tarslabs import TARS\nclient = TARS()\nresponse = client.chat("Hello TARS!")\nprint(response.text)' },
  { lang: 'TypeScript', code: 'import { TARS } from "@tarslabs/sdk"\nconst tars = new TARS()\nconst res = await tars.chat("Hello TARS!")\nconsole.log(res.text)' },
  { lang: 'cURL', code: 'curl https://api.tarslabs.com/v1/chat \\\n  -H "Authorization: Bearer $TARS_KEY" \\\n  -d \'{"model":"tars-4","message":"Hello!"}\'' },
];

export default function DevTools() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border/20 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm font-display mb-6 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Developer Tools</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Build with <span className="text-gradient">TARS</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              SDKs, CLIs, extensions, and integrations to build AI-powered applications in minutes. Start in your preferred language.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/docs" className="btn-glow text-primary-foreground px-6 py-2.5 font-display inline-flex items-center gap-2"><Rocket className="w-4 h-4" /> Get Started</Link>
              <Link to="/playground" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><Terminal className="w-4 h-4" /> API Playground</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Tools & SDKs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel gradient-border p-6 hover:bg-muted/20 transition-all group">
              <t.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{t.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
              <code className="text-[11px] text-primary bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-md block font-mono">{t.install}</code>
              <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                <Download className="w-3 h-3" /> {t.downloads} downloads
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quickstart */}
      <div className="max-w-5xl mx-auto px-6 py-12 border-t border-border/20">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Quickstart</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickstarts.map((q, i) => (
            <motion.div key={q.lang} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="glass-panel gradient-border p-6">
              <h3 className="font-display text-sm font-semibold text-primary mb-3">{q.lang}</h3>
              <pre className="text-xs text-muted-foreground font-mono bg-muted/10 p-4 rounded-lg overflow-x-auto whitespace-pre">{q.code}</pre>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to build?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/docs" className="btn-glow text-primary-foreground px-6 py-2.5 font-display">Read the Docs</Link>
            <Link to="/open-source" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Open Source</Link>
            <Link to="/community" className="btn-outline-glow px-6 py-2.5 font-display inline-flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Community</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
