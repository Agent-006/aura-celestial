import React from "react";
import styles from "./illumination-card.module.scss";

export function IlluminationCard() {
  const bars = [
    { label: "PHYSICAL VITALITY", score: 92, color: "#00e5ff" },
    { label: "MENTAL CLARITY", score: 85, color: "#00e5ff" },
    { label: "SPIRITUAL RECEPTIVITY", score: 78, color: "#e6b553" },
    { label: "EMOTIONAL STABILITY", score: 88, color: "#00e5ff" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>LUNAR ILLUMINATION METRICS</span>
        <span className={styles.badge}>WAXING GIBBOUS</span>
      </div>
      <div className={styles.dialSection}>
        <div className={styles.dialWrapper}>
          <svg viewBox="0 0 100 100" className={styles.dialSvg}>
            <circle cx="50" cy="50" r="45" className={styles.dialTrack} />
            <circle
              cx="50"
              cy="50"
              r="45"
              className={styles.dialProgress}
              strokeDasharray="282.7"
              strokeDashoffset="43.5"
            />
          </svg>
          <div className={styles.dialCenter}>
            <span className={styles.score}>84.6%</span>
          </div>
        </div>
        <div className={styles.dialDetails}>
          <h4>WAXING GIBBOUS</h4>
          <p>
            Phase of realization, momentum and gathering energy for full
            manifestation.
          </p>
        </div>
      </div>
      <div className={styles.barsContainer}>
        {bars.map((bar, i) => (
          <div key={i} className={styles.barRow}>
            <div className={styles.barHeader}>
              <span className={styles.barLabel}>{bar.label}</span>
              <span className={styles.barScore}>{bar.score}%</span>
            </div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ width: `${bar.score}%`, backgroundColor: bar.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>NEXT PHASE: FULL MOON IN 4 DAYS</div>
    </div>
  );
}
