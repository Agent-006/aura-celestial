import React from "react";
import { MobilePhaseDistribution } from "../../types/mobile-number-calculator.types";
import styles from "./phase-distribution.module.scss";

interface PhaseDistributionProps {
  phases: MobilePhaseDistribution;
}

export const PhaseDistribution: React.FC<PhaseDistributionProps> = ({
  phases,
}) => {
  return (
    <div className={styles.phaseContainer}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>NUMEROLOGICAL PACING</span>
        <h3 className={styles.title}>Dyadic & Triadic Phase Distribution</h3>
      </div>

      <div className={styles.barsList}>
        <div className={styles.phaseRow}>
          <div className={styles.pLabel}>
            <span>PRIMARY INITIATION PHASE (40%)</span>
            <span className={styles.val}>{phases.primary.value}</span>
          </div>
          <div className={styles.barWrap}>
            <div
              className={`${styles.barFill} ${styles.cyanFill}`}
              style={{ width: `${phases.primary.percentage}%` }}
            ></div>
          </div>
        </div>

        <div className={styles.phaseRow}>
          <div className={styles.pLabel}>
            <span>SECONDARY MAINTENANCE PHASE (30%)</span>
            <span className={styles.val}>{phases.secondary.value}</span>
          </div>
          <div className={styles.barWrap}>
            <div
              className={`${styles.barFill} ${styles.goldFill}`}
              style={{ width: `${phases.secondary.percentage}%` }}
            ></div>
          </div>
        </div>

        <div className={styles.phaseRow}>
          <div className={styles.pLabel}>
            <span>TERMINAL RESOLUTION PHASE (30%)</span>
            <span className={styles.val}>{phases.terminal.value}</span>
          </div>
          <div className={styles.barWrap}>
            <div
              className={`${styles.barFill} ${styles.redFill}`}
              style={{ width: `${phases.terminal.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.lHeader}>Consecutive Pairs Analysis:</div>
        <ul>
          <li>9-8: Aggression meets Obstacles</li>
          <li>8-2: Delay in mental peace</li>
          <li>2-0: Intuitive amplification</li>
          <li>1-5: Rapid business networking</li>
          <li>5-7: Intellectual detachment</li>
          <li>7-8: Mystical discipline</li>
          <li>8-9: Final martial thrust</li>
        </ul>
      </div>
    </div>
  );
};
