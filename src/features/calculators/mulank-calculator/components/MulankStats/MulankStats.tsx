import React from "react";
import { MulankStats as StatsType } from "../../types/mulank-calculator.types";
import styles from "./mulank-stats.module.scss";

interface MulankStatsProps {
  stats: StatsType;
}

export const MulankStats: React.FC<MulankStatsProps> = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>ROOT NUMBER</span>
          <span className={styles.badgeGold}>ROOT (1-9)</span>
        </div>
        <div className={styles.valueGold}>{stats.rootNumber.value}</div>
        <div className={styles.subtext}>{stats.rootNumber.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>RULING GRAHA</span>
          <span className={styles.badgeRed}>RULING PLANET</span>
        </div>
        <div className={styles.valueRed}>{stats.rulingGraha.value}</div>
        <div className={styles.subtext}>{stats.rulingGraha.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>ELEMENTAL AFFINITY</span>
          <span className={styles.badgeCyan}>TATTVA</span>
        </div>
        <div className={styles.valueCyan}>{stats.elementalAffinity.value}</div>
        <div className={styles.subtext}>{stats.elementalAffinity.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>COSMIC FREQUENCY</span>
          <span className={styles.badgeGold}>SOLFEGGIO</span>
        </div>
        <div className={styles.valueGold}>{stats.cosmicFrequency.value}</div>
        <div className={styles.subtext}>{stats.cosmicFrequency.desc}</div>
      </div>
    </div>
  );
};
