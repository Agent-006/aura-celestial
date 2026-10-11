import React from "react";
import { MobilePillar } from "../../types/mobile-number-calculator.types";
import { Layers, Activity, Link, ShieldCheck } from "lucide-react";
import styles from "./mobile-pillars.module.scss";

interface MobilePillarsProps {
  pillars: MobilePillar[];
}

export const MobilePillars: React.FC<MobilePillarsProps> = ({ pillars }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "total":
        return <Layers size={16} />;
      case "highest":
        return <Activity size={16} />;
      case "pairs":
        return <Link size={16} />;
      case "suitability":
        return <ShieldCheck size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pillarsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>CELLULAR ARCHITECTURE</span>
        <h3 className={styles.title}>
          The 4 Sacred Pillars of Mobile Numerology Architecture
        </h3>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <div className={styles.cardHeader}>
              <div className={styles.titleRow}>
                <span className={styles.pIcon}>{getIcon(pillar.icon)}</span>
                <span className={styles.pEyebrow}>{pillar.subtitle}</span>
              </div>
              <h4 className={styles.pTitle}>{pillar.title}</h4>
            </div>
            <p className={styles.pContent}>{pillar.content}</p>

            {idx === 0 && (
              <div className={styles.badgeRow}>
                <span>Saturn (Shani)</span>
                <span>8</span>
              </div>
            )}

            {idx === 1 && (
              <div className={styles.matrixRow}>
                <div className={styles.left}>Highest Multiplier: 3x</div>
                <div className={styles.right}>
                  <span className={styles.dotGold}></span>
                  <span className={styles.dotGold}></span>
                  <span className={styles.dotGold}></span>
                </div>
              </div>
            )}

            {idx === 3 && (
              <div className={styles.matrixRow}>
                <div className={styles.left}>Alignment Score</div>
                <div className={styles.right}>
                  <span className={styles.scoreText}>92% MATCH</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
