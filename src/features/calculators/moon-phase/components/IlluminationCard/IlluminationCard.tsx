"use client";

import React from "react";
import { useIlluminationMetrics } from "../../hooks/useIlluminationMetrics";
import styles from "./illumination-card.module.scss";

export function IlluminationCard() {
  const { metrics, isLoading } = useIlluminationMetrics();

  if (isLoading) {
    return <div className={styles.card}>Loading illumination metrics...</div>;
  }

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
        {metrics.map((bar, i) => (
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
