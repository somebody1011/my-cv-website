import { useEffect, useRef } from "react";

/**
 * Interactive background:
 *  - Particle network (drifting dots + connecting lines, mouse-reactive)
 *  - Subtle falling code glyphs (monochrome, low opacity)
 *  - Click → expanding shockwave ripple
 *  - No cursor halo/orb
 */
export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CHARS =
      "01{}<>/=;()[]+-*&|!?$#abcdefghijklmnopqrstuvwxyz";

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const mouse = { x: -9999, y: -9999, active: false };
    const ripples: { x: number; y: number; r: number; life: number }[] = [];

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    type G = { x: number; y: number; vx: number; vy: number; baseVy: number; ch: string; size: number; twinkle: number };

    let particles: P[] = [];
    let glyphs: G[] = [];
      const getColors = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        primary: s.getPropertyValue("--primary").trim() || "oklch(0.78 0.16 155)",
        accent: s.getPropertyValue("--accent").trim() || "oklch(0.72 0.17 200)",
        fg: s.getPropertyValue("--foreground").trim() || "oklch(0.92 0.008 240)",
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const pCount = Math.min(110, Math.floor((width * height) / 16000));
      particles = Array.from({ length: pCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 1.6,
      }));

      const gCount = Math.min(70, Math.floor((width * height) / 28000));
      glyphs = Array.from({ length: gCount }, () => makeGlyph());
    };
     const makeGlyph = (): G => {
      const baseVy = 0.2 + Math.random() * 0.7;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: baseVy,
        baseVy,
        ch: CHARS[Math.floor(Math.random() * CHARS.length)],
        size: 10 + Math.random() * 6,
        twinkle: Math.random() * Math.PI * 2,
      };
    };
 const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = mouse.y = -9999;
    };
    const onClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, life: 1 });
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mouse.x = t.clientX;
      mouse.y = t.clientY;
      mouse.active = true;
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      ripples.push({ x: t.clientX, y: t.clientY, r: 0, life: 1 });
    };

    const draw = () => {
      const c = getColors();

      ctx.clearRect(0, 0, width, height);

      const mouseR = 140;
      const mouseR2 = mouseR * mouseR;
 // --- Falling glyphs (subtle, monochrome) ---
      ctx.textBaseline = "middle";
      for (const g of glyphs) {
        // ripple impulse
        for (const rp of ripples) {
          const dx = g.x - rp.x;
          const dy = g.y - rp.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const ringWidth = 60;
          if (Math.abs(d - rp.r) < ringWidth) {
            const f = (1 - Math.abs(d - rp.r) / ringWidth) * 1.8 * rp.life;
            g.vx += (dx / d) * f;
            g.vy += (dy / d) * f;
          }
        }

        g.vx *= 0.92;
        g.vy = g.vy * 0.92 + g.baseVy * 0.08;
        g.x += g.vx;
        g.y += g.vy;
        g.twinkle += 0.04;

        if (g.y > height + 20) {
          g.y = -20;
          g.x = Math.random() * width;
          g.vx = 0;
          g.vy = g.baseVy;
        }
        if (g.x < -20) g.x = width + 20;
        if (g.x > width + 20) g.x = -20;

        const alpha = 8 + Math.floor((Math.sin(g.twinkle) + 1) * 6); // 8–20%
        ctx.fillStyle = `color-mix(in oklch, ${c.fg} ${alpha}%, transparent)`;
        ctx.font = `400 ${g.size}px var(--font-mono, monospace)`;
        ctx.fillText(g.ch, g.x, g.y);
      }// --- Particles + connecting lines ---
      for (const p of particles) {
        // gentle mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseR2) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / mouseR) * 0.6;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        // ripple impulse
        for (const rp of ripples) {
          const dx = p.x - rp.x;
          const dy = p.y - rp.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (Math.abs(d - rp.r) < 50) {
            const f = (1 - Math.abs(d - rp.r) / 50) * 1.6 * rp.life;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `color-mix(in oklch, ${c.primary} 55%, transparent)`;
        ctx.fill();
      }
       // connecting lines
      const linkDist = 130;
      const linkDist2 = linkDist * linkDist;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist2) {
            const t = 1 - d2 / linkDist2;
            ctx.strokeStyle = `color-mix(in oklch, ${c.accent} ${Math.round(t * 35)}%, transparent)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // line to mouse
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseR2) {
            const t = 1 - d2 / mouseR2;
            ctx.strokeStyle = `color-mix(in oklch, ${c.primary} ${Math.round(t * 45)}%, transparent)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
       // --- Ripples ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 7;
        rp.life *= 0.97;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `color-mix(in oklch, ${c.primary} ${Math.round(rp.life * 80)}%, transparent)`;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `color-mix(in oklch, ${c.accent} ${Math.round(rp.life * 50)}%, transparent)`;
        ctx.stroke();
        if (rp.life < 0.05 || rp.r > Math.max(width, height)) ripples.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}

