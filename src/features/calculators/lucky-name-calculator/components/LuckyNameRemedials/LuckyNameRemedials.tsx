import React from "react";
import { SlidersHorizontal, PenTool, Sparkles } from "lucide-react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./lucky-name-remedials.module.scss";

interface LuckyNameRemedialsProps {
  remedials: LuckyNameTelemetryData["remedials"];
}

export const LuckyNameRemedials: React.FC<LuckyNameRemedialsProps> = ({
  remedials,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "tune":
        return <SlidersHorizontal size={16} />;
      case "pen":
        return <PenTool size={16} />;
      case "mantra":
        return <Sparkles size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.remedialsContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          Consecrated Name Correction & Harmonization Upayas
        </span>
        <h3 className={styles.title}>
          Resolving Onomastic Dissonance & Synthesizing Resonance Vectors
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
