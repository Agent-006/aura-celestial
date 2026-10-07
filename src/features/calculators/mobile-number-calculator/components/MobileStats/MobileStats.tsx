import React from "react";
import { MobileStats as StatsType } from "../../types/mobile-number-calculator.types";
import styles from "./mobile-stats.module.scss";

interface MobileStatsProps {
  stats: StatsType;
}

export const MobileStats: React.FC<MobileStatsProps> = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>TOTAL COMPOUND</span>
          <span className={styles.badgeGold}>ROOT</span>
        </div>
        <div className={styles.valueGold}>{stats.compoundTotal.value}</div>
        <div className={styles.subtext}>{stats.compoundTotal.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>CORE ROOT REDUCTION</span>
          <span className={styles.badgeCyan}>VIBRATION</span>
        </div>
        <div className={styles.valueCyan}>{stats.rootReduction.value}</div>
        <div className={styles.subtext}>{stats.rootReduction.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>SYNASTRY HARMONY MATCH</span>
          <span className={styles.badgeGold}>SYNC %</span>
        </div>
        <div className={styles.valueGold}>{stats.synastryMatch.value}</div>
        <div className={styles.subtext}>{stats.synastryMatch.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>CELLULAR RESONANCE</span>
          <span className={styles.badgeGold}>FREQUENCY</span>
        </div>
        <div className={styles.valueGold}>{stats.cellularResonance.value}</div>
        <div className={styles.subtext}>{stats.cellularResonance.desc}</div>
      </div>
    </div>
  );
};
