import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Copy, Check, ChevronDown, Zap, Code2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const models = ['tars-ultra', 'tars-vision', 'tars-code', 'tars-agent'];
const endpoints = [
  { label: 'Chat Completion', value: '/v1/chat/completions', method: 'POST' },
  { label: 'Image Generation', value: '/v1/images/generate', method: 'POST' },
  { label: 'Embeddings', value: '/v1/embeddings', method: 'POST' },
  { label: 'Models List', value: '/v1/models', method: 'GET' },
];

const samplePayloads: Record<string, string> = {
  '/v1/chat/completions': JSON.stringify({
    model: 'tars-ultra',
    messages: [{ role: 'user', content: 'Explain quantum computing in simple terms.' }],
    temperature: 0.7,
    max_tokens: 512,
  }, null, 2),
  '/v1/images/generate': JSON.stringify({
    model: 'tars-vision',
    prompt: 'A futuristic city skyline at sunset, cyberpunk style',
    size: '1024x1024',
    quality: 'hd',
  }, null, 2),
  '/v1/embeddings': JSON.stringify({
    model: 'tars-ultra',
    input: 'The quick brown fox jumps over the lazy dog.',
  }, null, 2),
  '/v1/models': '',
};

const sampleResponses: Record<string, string> = {
  '/v1/chat/completions': JSON.stringify({
    id: 'chatcmpl-tars-8x7k2m',
    object: 'chat.completion',
    model: 'tars-ultra',
    choices: [{
      index: 0,
      message: { role: 'assistant', content: 'Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously, unlike classical bits which are either 0 or 1. This allows quantum computers to process vast amounts of information in parallel, making them incredibly powerful for specific types of problems like cryptography, drug discovery, and optimization.' },
      finish_reason: 'stop',
    }],
    usage: { prompt_tokens: 12, completion_tokens: 64, total_tokens: 76 },
  }, null, 2),
  '/v1/images/generate': JSON.stringify({
    created: 1709847200,
    data: [{ url: 'https://api.tarslabs.ai/images/gen-8x7k2m.png', revised_prompt: 'A futuristic cyberpunk cityscape at golden hour...' }],
  }, null, 2),
  '/v1/embeddings': JSON.stringify({
    object: 'list',
    data: [{ object: 'embedding', index: 0, embedding: [0.0023, -0.0091, 0.0152, '... 1536 dimensions'] }],
    model: 'tars-ultra',
    usage: { prompt_tokens: 9, total_tokens: 9 },
  }, null, 2),
  '/v1/models': JSON.stringify({
    object: 'list',
    data: [
      { id: 'tars-ultra', object: 'model', owned_by: 'tarslabs' },
      { id: 'tars-vision', object: 'model', owned_by: 'tarslabs' },
      { id: 'tars-code', object: 'model', owned_by: 'tarslabs' },
      { id: 'tars-agent', object: 'model', owned_by: 'tarslabs' },
    ],
  }, null, 2),
};

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [payload, setPayload] = useState(samplePayloads[endpoints[0].value]);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState('sk-tars-demo-xxxxxxxxxxxx');

  const handleEndpointChange = (ep: typeof endpoints[0]) => {
    setSelectedEndpoint(ep);
    setPayload(samplePayloads[ep.value]);
    setResponse('');
  };

  const handleRun = () => {
    setLoading(true);
    setResponse('');
    setTimeout(() => {
      setResponse(sampleResponses[selectedEndpoint.value]);
      setLoading(false);
    }, 1200);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase">Interactive</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              API <span className="text-gradient">Playground</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">Test TARS API endpoints directly in your browser. Experiment with different models, parameters, and see real-time responses.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Request Panel */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-panel gradient-border p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" /> Request
                </h2>
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${selectedEndpoint.method === 'GET' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                  {selectedEndpoint.method}
                </span>
              </div>

              {/* API Key */}
              <div>
                <label className="text-xs text-muted-foreground font-display mb-1 block">API Key</label>
                <input
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  className="w-full bg-muted/30 border border-border/40 rounded-lg px-3 py-2 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Endpoint Select */}
              <div>
                <label className="text-xs text-muted-foreground font-display mb-1 block">Endpoint</label>
                <div className="grid grid-cols-2 gap-2">
                  {endpoints.map(ep => (
                    <button
                      key={ep.value}
                      onClick={() => handleEndpointChange(ep)}
                      className={`text-xs font-mono px-3 py-2 rounded-lg border transition-all ${selectedEndpoint.value === ep.value ? 'border-primary/60 bg-primary/10 text-primary' : 'border-border/30 text-muted-foreground hover:border-border/60'}`}
                    >
                      {ep.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model Select */}
              <div>
                <label className="text-xs text-muted-foreground font-display mb-1 block">Model</label>
                <div className="flex gap-2 flex-wrap">
                  {models.map(m => (
                    <button
                      key={m}
                      onClick={() => setSelectedModel(m)}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${selectedModel === m ? 'border-primary/60 bg-primary/10 text-primary' : 'border-border/30 text-muted-foreground hover:border-border/60'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payload */}
              {payload && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs text-muted-foreground font-display">Request Body</label>
                    <button onClick={() => handleCopy(payload)} className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} Copy
                    </button>
                  </div>
                  <textarea
                    value={payload}
                    onChange={e => setPayload(e.target.value)}
                    rows={10}
                    className="w-full bg-muted/20 border border-border/30 rounded-lg px-3 py-2 text-xs font-mono text-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              )}

              <button onClick={handleRun} disabled={loading} className="btn-glow text-primary-foreground text-sm w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50">
                {loading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {loading ? 'Processing...' : 'Send Request'}
              </button>
            </motion.div>

            {/* Response Panel */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-panel gradient-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold text-foreground">Response</h2>
                {response && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-mono">200 OK</span>
                    <button onClick={() => handleCopy(response)} className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-muted/20 border border-border/30 rounded-lg p-4 min-h-[400px] overflow-auto">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </motion.div>
                      <p className="text-sm text-muted-foreground font-display">Processing request...</p>
                    </div>
                  </div>
                ) : response ? (
                  <pre className="text-xs font-mono text-foreground/90 whitespace-pre-wrap">{response}</pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-center">
                    <div>
                      <Code2 className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">Send a request to see the response</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* cURL Example */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 glass-panel gradient-border p-6">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">cURL Equivalent</h3>
            <pre className="text-xs font-mono text-muted-foreground bg-muted/20 rounded-lg p-4 overflow-x-auto">
{`curl https://api.tarslabs.ai${selectedEndpoint.value} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\${selectedEndpoint.method === 'POST' ? `
  -d '${payload?.replace(/\n/g, '').replace(/\s+/g, ' ').slice(0, 120)}...'` : ''}`}
            </pre>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
