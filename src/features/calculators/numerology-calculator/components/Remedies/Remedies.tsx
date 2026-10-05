import React from "react";
import { RemedialUpaya } from "../../types/numerology.types";
import styles from "./remedies.module.scss";

interface RemediesProps {
  remedies: RemedialUpaya;
}

export const Remedies: React.FC<RemediesProps> = ({ remedies }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vibrational Harmonization Protocols</h3>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🎨</div>
          <h4 className={styles.cardTitle}>Favorable Frequencies</h4>
          <p className={styles.cardText}>{remedies.luckyColors.join(", ")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>💎</div>
          <h4 className={styles.cardTitle}>Gemstone Resonance</h4>
          <p className={styles.cardText}>{remedies.luckyGems.join(", ")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📅</div>
          <h4 className={styles.cardTitle}>Auspicious Days</h4>
          <p className={styles.cardText}>{remedies.luckyDays.join(", ")}</p>
        </div>
      </div>

      {remedies.nameSuggestion && (
        <div className={styles.nameCorrection}>
          <div className={styles.correctionHeader}>
            <span className={styles.icon}>✨</span>
            <h4>Karmic Name Rectification</h4>
          </div>

          <div className={styles.comparison}>
            <div className={styles.side}>
              <span className={styles.label}>Current Name</span>
              <span className={styles.name}>
                {remedies.nameSuggestion.original}
              </span>
              <span className={styles.value}>
                Value: {remedies.nameSuggestion.originalValue}
              </span>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={`${styles.side} ${styles.suggestedSide}`}>
              <span className={styles.label}>Optimized Resonance</span>
              <span className={styles.name}>
                {remedies.nameSuggestion.suggested}
              </span>
              <span className={styles.value}>
                Value: {remedies.nameSuggestion.suggestedValue}
              </span>
            </div>
          </div>

          <p className={styles.reason}>{remedies.nameSuggestion.reason}</p>
        </div>
      )}
    </div>
  );
};
