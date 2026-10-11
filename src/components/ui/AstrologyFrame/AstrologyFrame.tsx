import React from "react";
import styles from "./AstrologyFrame.module.scss";

export type FrameVariant = "1" | "2" | "3" | "4" | "5" | "6";

interface AstrologyFrameProps {
  children: React.ReactNode;
  variant?: FrameVariant;
  className?: string;
}

// ----- Reusable SVG Helpers -----
const Sunburst = ({ cx, cy, radius, rays }: { cx: number; cy: number; radius: number; rays: number }) => (
  <g>
    <circle cx={cx} cy={cy} r={radius * 0.4} fill="currentColor" />
    <circle cx={cx} cy={cy} r={radius * 0.5} fill="none" stroke="currentColor" strokeWidth="0.5" />
    {Array.from({ length: rays }).map((_, i) => {
      const angle = (i * Math.PI * 2) / rays;
      const r1 = radius * 0.6;
      const r2 = i % 2 === 0 ? radius : radius * 0.8;
      return (
        <line
          key={i}
          x1={cx + Math.cos(angle) * r1}
          y1={cy + Math.sin(angle) * r1}
          x2={cx + Math.cos(angle) * r2}
          y2={cy + Math.sin(angle) * r2}
          stroke="currentColor"
          strokeWidth="0.5"
        />
      );
    })}
  </g>
);

const FourPointStar = ({ cx, cy, size }: { cx: number; cy: number; size: number }) => (
  <path
    d={`M${cx} ${cy - size} Q${cx} ${cy} ${cx + size} ${cy} Q${cx} ${cy} ${cx} ${cy + size} Q${cx} ${cy} ${cx - size} ${cy} Q${cx} ${cy} ${cx} ${cy - size} Z`}
    fill="currentColor"
  />
);

const Crescent = ({ cx, cy, size, angle = 0 }: { cx: number; cy: number; size: number; angle?: number }) => (
  <path
    d={`M${cx} ${cy - size} A${size} ${size} 0 1 0 ${cx} ${cy + size} A${size * 0.8} ${size * 0.8} 0 1 1 ${cx} ${cy - size} Z`}
    fill="currentColor"
    style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${cx}px ${cy}px` }}
  />
);

// ----- The 6 New Corner Variants -----

// 1. Floral + Star + dots
const Corner1 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <FourPointStar cx={40} cy={40} size={15} />
    <path d="M50.5 50.5 C20 50 10 30 30 15 C40 5 60 20 50 35" />
    <path d="M50.5 50.5 C50 20 30 10 15 30 C5 40 20 60 35 50" />
    <circle cx="50.5" cy="85" r="2" fill="currentColor" />
    <circle cx="50.5" cy="95" r="1.5" fill="currentColor" />
    <circle cx="85" cy="50.5" r="2" fill="currentColor" />
    <circle cx="95" cy="50.5" r="1.5" fill="currentColor" />
  </svg>
);

// 2. Knots + Crescent + Star
const Corner2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <path d="M50.5 50.5 C20 40 10 10 30 15 C50 20 50 40 30 45 C10 50 15 70 30 65 C45 60 40 40 50.5 50.5" />
    <Crescent cx={20} cy={20} size={8} angle={-45} />
    <FourPointStar cx={30} cy={10} size={5} />
    <circle cx="50.5" cy="80" r="2" fill="currentColor" />
    <circle cx="80" cy="50.5" r="2" fill="currentColor" />
  </svg>
);

// 3. Large Sunburst + dashes
const Corner3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <Sunburst cx={50.5} cy={50.5} radius={35} rays={24} />
    <line x1="50.5" y1="15" x2="50.5" y2="0" strokeDasharray="2 4" strokeWidth="2" />
    <line x1="15" y1="50.5" x2="0" y2="50.5" strokeDasharray="2 4" strokeWidth="2" />
  </svg>
);

// 4. Floral scrolls + Centered Star
const Corner4 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <FourPointStar cx={50.5} cy={50.5} size={25} />
    <path d="M50.5 50.5 C10 60 5 30 25 20 C40 10 60 30 40 40" />
    <path d="M50.5 50.5 C60 10 30 5 20 25 C10 40 30 60 40 40" />
  </svg>
);

// 5. Crescent Moon + Sun Rays
const Corner5 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <Crescent cx={40} cy={40} size={15} angle={45} />
    <g>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = Math.PI + (i * Math.PI) / 14;
        return (
          <line
            key={i}
            x1={50.5 + Math.cos(angle) * 15}
            y1={50.5 + Math.sin(angle) * 15}
            x2={50.5 + Math.cos(angle) * 35}
            y2={50.5 + Math.sin(angle) * 35}
            strokeWidth="0.5"
          />
        );
      })}
    </g>
    <FourPointStar cx={15} cy={35} size={6} />
  </svg>
);

// 6. Detailed Sunburst + Arrow tails
const Corner6 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.04">
    <path d="M50.5 100 L50.5 50.5 L100 50.5" />
    <circle cx="50.5" cy="50.5" r="15" fill="none" strokeWidth="2" />
    <circle cx="50.5" cy="50.5" r="8" fill="currentColor" />
    <Sunburst cx={50.5} cy={50.5} radius={45} rays={36} />
    <path d="M80 45.5 L70 50.5 L80 55.5 Z" fill="currentColor" />
    <path d="M45.5 80 L50.5 70 L55.5 80 Z" fill="currentColor" />
  </svg>
);


export const AstrologyFrame: React.FC<AstrologyFrameProps> = ({
  children,
  variant = "1",
  className,
}) => {
  return (
    <div className={`${styles.frameWrapper} ${styles[`variant-${variant}`]} ${className || ""}`}>
      {/* Borders */}
      <div className={styles.borderTop} />
      <div className={styles.borderBottom} />
      <div className={styles.borderLeft} />
      <div className={styles.borderRight} />

      {/* Corners */}
      <div className={`${styles.corner} ${styles.topLeft}`}>
        {variant === "1" && <Corner1 />}
        {variant === "2" && <Corner2 />}
        {variant === "3" && <Corner3 />}
        {variant === "4" && <Corner4 />}
        {variant === "5" && <Corner5 />}
        {variant === "6" && <Corner6 />}
      </div>
      <div className={`${styles.corner} ${styles.topRight}`}>
        {variant === "1" && <Corner1 />}
        {variant === "2" && <Corner2 />}
        {variant === "3" && <Corner3 />}
        {variant === "4" && <Corner4 />}
        {variant === "5" && <Corner5 />}
        {variant === "6" && <Corner6 />}
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        {variant === "1" && <Corner1 />}
        {variant === "2" && <Corner2 />}
        {variant === "3" && <Corner3 />}
        {variant === "4" && <Corner4 />}
        {variant === "5" && <Corner5 />}
        {variant === "6" && <Corner6 />}
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>
        {variant === "1" && <Corner1 />}
        {variant === "2" && <Corner2 />}
        {variant === "3" && <Corner3 />}
        {variant === "4" && <Corner4 />}
        {variant === "5" && <Corner5 />}
        {variant === "6" && <Corner6 />}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};
