'use client';
import { useEffect, useRef } from 'react';
import styles from './ChakraCanvas.module.scss';

export const ChakraCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;


    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    // Utility to draw a geometric star
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, color: string) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Position in the top right corner
      const cx = width; 
      const cy = 0;
      
      // Calculate a base radius that feels substantial from the corner
      const maxDim = Math.max(width, height);
      const baseRadius = maxDim * 0.45; 

      time += 0.01;

      // Top Right Chakra glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 0.8);
      gradient.addColorStop(0, 'rgba(15, 25, 45, 0.6)');
      gradient.addColorStop(0.4, 'rgba(230, 181, 83, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Bottom Left Nebula Glow (Cyan contrast)
      const bottomLeftGradient = ctx.createRadialGradient(0, height, 0, 0, height, maxDim * 0.6);
      bottomLeftGradient.addColorStop(0, 'rgba(72, 229, 194, 0.15)'); // Cyan glow
      bottomLeftGradient.addColorStop(0.5, 'rgba(72, 229, 194, 0.03)');
      bottomLeftGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = bottomLeftGradient;
      ctx.fillRect(0, 0, width, height);

      // ---- Draw the Chakra (Top Right) ----
      ctx.save();
      ctx.translate(cx, cy);

      // Rotate the entire base wheel slowly
      ctx.rotate(time * 0.05);

      // Base Colors
      const ringColor = 'rgba(230, 181, 83, 0.3)';
      const accentColor = 'rgba(230, 181, 83, 0.7)';

      ctx.shadowBlur = 12;
      ctx.shadowColor = accentColor;
      ctx.strokeStyle = ringColor;

      // Concentric Rings
      [1, 0.95, 0.8, 0.75, 0.5, 0.45, 0.2].forEach((scale, index) => {
        ctx.beginPath();
        if (index === 1 || index === 3) {
          ctx.setLineDash([4, 8]);
          ctx.lineWidth = 1;
        } else if (index === 4) {
           ctx.setLineDash([2, 4]);
           ctx.lineWidth = 2;
           ctx.strokeStyle = accentColor;
        } else {
          ctx.setLineDash([]);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = ringColor;
        }
        ctx.arc(0, 0, baseRadius * scale, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.setLineDash([]);

      // 12 Zodiac Sections (Spokes)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(230, 181, 83, 0.2)';
      for(let i = 0; i < 12; i++) {
         const angle = (i * Math.PI) / 6;
         ctx.beginPath();
         ctx.moveTo(Math.cos(angle) * (baseRadius * 0.5), Math.sin(angle) * (baseRadius * 0.5));
         ctx.lineTo(Math.cos(angle) * (baseRadius * 0.95), Math.sin(angle) * (baseRadius * 0.95));
         ctx.stroke();
      }

      // Center Compass/Starburst
      drawStar(0, 0, 8, baseRadius * 0.4, baseRadius * 0.1, accentColor);
      drawStar(0, 0, 16, baseRadius * 0.2, baseRadius * 0.15, 'rgba(72, 229, 194, 0.4)');

      // Draw mystical nodes on outer ring
      for(let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 + (Math.PI / 12);
        const r = baseRadius * 0.875;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 17, 21, 1)';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
      }

      ctx.restore();

      // Eccentric Orbit 1 (Fiery Red/Orange path)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-time * 0.1 + Math.PI / 4);
      ctx.beginPath();
      ctx.shadowColor = 'rgba(255, 90, 50, 0.8)';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = 'rgba(255, 90, 50, 0.4)';
      ctx.lineWidth = 2;
      ctx.ellipse(baseRadius * 0.2, 0, baseRadius * 0.8, baseRadius * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Glowing orb on the orbit
      const planetX = baseRadius * 0.2 + (baseRadius * 0.8) * Math.cos(time * 0.5);
      const planetY = (baseRadius * 0.35) * Math.sin(time * 0.5);
      ctx.beginPath();
      ctx.arc(planetX, planetY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ff7a33';
      ctx.fill();
      
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.chakraCanvas} />;
};
