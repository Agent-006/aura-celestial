import React from "react";
import styles from "./nadi-dosha-card.module.scss";

export function NadiDoshaCard() {
  const bars = [
    { label: "Dashakoota Mental Level", score: "45/50", percent: 90 },
    { label: "Physical & Vitality Balance", score: "28/30", percent: 93 },
    { label: "Gana & Karmic Nature", score: "14/15", percent: 93 },
    { label: "Dosha & Cross-Rasi Yoga", score: "12/15", percent: 80 },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Janma & Anuradha Nadi</h3>
        <span className={styles.headerBadge}>MAGNETIC POLARITY</span>
      </div>

      <div className={styles.progressGrid}>
        {bars.map((bar, i) => (
          <div key={i} className={styles.progressRow}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>{bar.label}</span>
              <span className={styles.progressScore}>{bar.score}</span>
            </div>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${bar.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
