import React from "react";
import { MulankPillar } from "../../types/mulank-calculator.types";
import { Globe, MapPin, Milestone, Layers } from "lucide-react";
import styles from "./mulank-pillars.module.scss";

interface MulankPillarsProps {
  pillars: MulankPillar[];
}

export const MulankPillars: React.FC<MulankPillarsProps> = ({ pillars }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "planet":
        return <Globe size={16} />;
      case "matrix":
        return <Layers size={16} />;
      case "coordinates":
        return <MapPin size={16} />;
      case "milestone":
        return <Milestone size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pillarsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>COSMIC ARCHITECTURE</span>
        <h3 className={styles.title}>The 4 Sacred Pillars of Mulank 9</h3>
        <p className={styles.subtitle}>
          Core attributes, elemental resonance, harmonized vectors, and
          chronological life span events for this specific root number.
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <div className={styles.cardHeader}>
              <div className={styles.subtitleRow}>
                <span className={styles.pSubtitle}>{pillar.subtitle}</span>
                <div className={styles.iconCyan}>{getIcon(pillar.icon)}</div>
              </div>
              <h4 className={styles.pTitle}>{pillar.title}</h4>
            </div>
            <p className={styles.pContent}>
              {pillar.content as React.ReactNode}
            </p>
            {idx === 0 && (
              <div className={styles.badgeRow}>
                <span>High Conviction</span>
                <span>Martial Dominance</span>
                <span>Spiritual Vanguard</span>
              </div>
            )}
            {idx === 1 && (
              <div className={styles.matrixRow}>
                <div className={styles.left}>
                  Allies: 1 (Sun), 2 (Moon), 3 (Jup)
                </div>
                <div className={styles.right}>
                  <span className={styles.dotGreen}></span>
                  <span className={styles.dotGreen}></span>
                  <span className={styles.dotGreen}></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
