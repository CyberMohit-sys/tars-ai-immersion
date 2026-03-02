import { useEffect, useRef, useCallback } from 'react';

interface Trail {
  x: number;
  y: number;
  alpha: number;
}

export default function GlowCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trails = useRef<Trail[]>([]);
  const raf = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Add new trail point
    trails.current.push({ x: mouse.current.x, y: mouse.current.y, alpha: 1 });
    if (trails.current.length > 30) trails.current.shift();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw trail
    for (let i = 0; i < trails.current.length; i++) {
      const t = trails.current[i];
      t.alpha *= 0.88;
      const size = 4 + (i / trails.current.length) * 8;

      ctx.beginPath();
      ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(210, 100%, 56%, ${t.alpha * 0.15})`;
      ctx.fill();

      // Inner glow
      ctx.beginPath();
      ctx.arc(t.x, t.y, size * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(180, 100%, 60%, ${t.alpha * 0.3})`;
      ctx.fill();
    }

    // Main cursor glow
    const gradient = ctx.createRadialGradient(
      mouse.current.x, mouse.current.y, 0,
      mouse.current.x, mouse.current.y, 40
    );
    gradient.addColorStop(0, 'hsla(210, 100%, 56%, 0.15)');
    gradient.addColorStop(0.5, 'hsla(210, 100%, 56%, 0.05)');
    gradient.addColorStop(1, 'hsla(210, 100%, 56%, 0)');
    ctx.beginPath();
    ctx.arc(mouse.current.x, mouse.current.y, 40, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
