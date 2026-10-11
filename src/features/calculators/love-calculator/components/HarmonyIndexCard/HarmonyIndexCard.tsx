import React from "react";
import { ShieldCheck } from "lucide-react";
import styles from "./harmony-index-card.module.scss";

export function HarmonyIndexCard() {
  const percentage = (31 / 36) * 100;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className={styles.card}>
      <div className={styles.eyebrow}>ASHTAKOOTA HARMONY INDEX</div>

      <div className={styles.dialWrapper}>
        <svg viewBox="0 0 100 100" className={styles.dialSvg}>
          <circle cx="50" cy="50" r={radius} className={styles.dialTrack} />
          <circle
            cx="50"
            cy="50"
            r={radius}
            className={styles.dialProgress}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className={styles.dialCenter}>
          <span className={styles.dialScore}>31</span>
          <span className={styles.dialLabel}>Gunas Matching</span>
        </div>
      </div>
      <div className={styles.harmonyDetails}>
        <h3 className={styles.harmonyTitle}>
          Uttama Milan <span className={styles.bars}>|||||||||||||||||||</span>
        </h3>
        <p className={styles.harmonyDesc}>
          Exceptional synastry. Indicates profound emotional synchronization,
          financial stability, and long-term evolutionary growth.
        </p>
        <div className={styles.telemetryBadge}>
          <ShieldCheck size={14} /> VERIFIED TELEMETRY - 86.1% AFFINITY MATCH
        </div>
      </div>
    </div>
  );
}
