import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  name?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => { success: boolean; error?: string };
  signUp: (email: string, password: string, name?: string) => { success: boolean; error?: string };
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = 'tarslabs_users';
const SESSION_KEY = 'tarslabs_session';

function getUsers(): Record<string, { password: string; name?: string; createdAt: string }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  } catch { return {}; }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const s = localStorage.getItem(SESSION_KEY);
      return s ? JSON.parse(s) : null;
    } catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  }, [user]);

  const signUp = (email: string, password: string, name?: string) => {
    const users = getUsers();
    if (users[email]) return { success: false, error: 'Account already exists' };
    if (password.length < 6) return { success: false, error: 'Password must be at least 6 characters' };
    const newUser = { password, name, createdAt: new Date().toISOString() };
    users[email] = newUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const sessionUser = { email, name, createdAt: newUser.createdAt };
    setUser(sessionUser);
    return { success: true };
  };

  const signIn = (email: string, password: string) => {
    const users = getUsers();
    const u = users[email];
    if (!u) return { success: false, error: 'Account not found' };
    if (u.password !== password) return { success: false, error: 'Invalid password' };
    setUser({ email, name: u.name, createdAt: u.createdAt });
    return { success: true };
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
