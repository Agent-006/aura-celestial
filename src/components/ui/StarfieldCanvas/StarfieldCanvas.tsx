'use client';
import { useEffect, useRef } from 'react';
import styles from './StarfieldCanvas.module.scss';

interface StarfieldCanvasProps {
  count?: number;
  className?: string;
  cluster?: 'none' | 'bottom-left';
}

export const StarfieldCanvas = ({ 
  count = 150, 
  className = "", 
  cluster = 'none' 
}: StarfieldCanvasProps) => {
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

    // Generate stars
    const stars = Array.from({ length: count }).map(() => {
      let x = Math.random();
      let y = Math.random();

      if (cluster === 'bottom-left') {
        const rx = Math.pow(Math.random(), 1.5);
        const ry = Math.pow(Math.random(), 1.5);
        x = rx * 0.6;
        y = 1 - (ry * 0.8);
      }

      return {
        x,
        y,
        size: Math.random() * 1.5 + 0.5,
        blinkSpeed: Math.random() * 2 + 1,
        offset: Math.random() * Math.PI * 2,
      };
    });

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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      stars.forEach(star => {
         const sx = star.x * width;
         const sy = star.y * height;
         
         const opacity = 0.2 + Math.abs(Math.sin(time * star.blinkSpeed + star.offset)) * 0.8;
         
         ctx.beginPath();
         ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
         ctx.fill();
         
         if (star.size > 1.2) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(sx - star.size * 3, sy);
            ctx.lineTo(sx + star.size * 3, sy);
            ctx.moveTo(sx, sy - star.size * 3);
            ctx.lineTo(sx, sy + star.size * 3);
            ctx.stroke();
         }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, cluster]);

  return <canvas ref={canvasRef} className={`${styles.starfield} ${className}`} />;
};
