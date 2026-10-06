import React from "react";
import { ChronometryPillar } from "../../types/age-calculator.types";
import { Activity, Sun, Clock, Moon } from "lucide-react";
import styles from "./chronometry-pillars.module.scss";

interface ChronometryPillarsProps {
  pillars: ChronometryPillar[];
}

export const ChronometryPillars: React.FC<ChronometryPillarsProps> = ({
  pillars,
}) => {
  const renderIcon = (iconString: string) => {
    switch (iconString) {
      case "pulse":
        return <Activity size={16} className={styles.iconCyan} />;
      case "sun":
        return <Sun size={16} className={styles.iconGold} />;
      case "clock":
        return <Clock size={16} className={styles.iconGold} />;
      case "moon":
        return <Moon size={16} className={styles.iconCyan} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pillarsContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>The 4 Sacred Pillars of Vedic Chronometry</h3>
        </div>
        <div className={styles.right}>
          <span className={styles.badge}>
            CHRONOMETRIC SYSTEM ANALYSIS: ACTIVE INGRESS
          </span>
        </div>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <div className={styles.cardHeader}>
              <span className={styles.pLabel}>
                PILLAR {idx + 1} / {pillar.title.split(" ")[0].toUpperCase()}{" "}
                ANALYSIS
              </span>
              {renderIcon(pillar.icon)}
            </div>
            <h4 className={styles.pTitle}>{pillar.title}</h4>
            <p className={styles.pDesc}>{pillar.description}</p>
            <div className={styles.pBottom}>
              <span className={styles.bLabel}>CALCULATED RESULT</span>
              <span className={styles.bValue}>{pillar.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
