import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { motion } from 'framer-motion';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = signIn(email, password);
    if (result.success) navigate('/');
    else setError(result.error || 'Sign in failed');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        className="glass-panel gradient-border p-8 md:p-12 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-wider text-foreground">
            TARS<span className="text-primary">LABS</span>
          </Link>
          <h1 className="font-display text-xl mt-4 text-foreground">Sign In</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back to the future</p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2 mb-6 text-destructive text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground font-display block mb-1.5">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground font-display block mb-1.5">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-glow text-primary-foreground w-full py-3 mt-2">Sign In</button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-primary hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
