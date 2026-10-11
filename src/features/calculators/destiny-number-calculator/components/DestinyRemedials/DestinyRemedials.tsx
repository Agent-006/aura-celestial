import React from "react";
import { Sparkles, Diamond, Shield } from "lucide-react";
import { DestinyRemedial } from "../../types/destiny-number-calculator.types";
import styles from "./destiny-remedials.module.scss";

interface DestinyRemedialsProps {
  remedials: DestinyRemedial[];
}

export const DestinyRemedials: React.FC<DestinyRemedialsProps> = ({
  remedials,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "mantra":
        return <Sparkles size={16} />;
      case "gem":
        return <Diamond size={16} />;
      case "yoga":
        return <Shield size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.remedialsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          Consecrated Remedial Protocols & Destiny Alignment
        </span>
        <h3 className={styles.title}>
          Resolving Karmic Blocks & Amplifying Resonance
        </h3>
      </div>

      <div className={styles.remedialsGrid}>
        {remedials.map((remedial, idx) => (
          <div key={idx} className={styles.remedialCard}>
            <div className={styles.cardHeader}>
              <div className={styles.left}>
                <span className={styles.subtitle}>{remedial.subtitle}</span>
                <h4 className={styles.cardTitle}>{remedial.title}</h4>
              </div>
              <div className={styles.iconWrap}>{getIcon(remedial.icon)}</div>
            </div>

            <div className={styles.cardContent}>{remedial.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
