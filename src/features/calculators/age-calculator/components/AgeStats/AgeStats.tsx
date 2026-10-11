import React from "react";
import { AgeStats as StatsType } from "../../types/age-calculator.types";
import { Activity, Clock, Sun, Moon } from "lucide-react";
import styles from "./age-stats.module.scss";

interface AgeStatsProps {
  stats: StatsType;
}

export const AgeStats: React.FC<AgeStatsProps> = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>BIOLOGICAL / SOLAR AGE</span>
          <Activity size={14} className={styles.iconGold} />
        </div>
        <div className={styles.valueGold}>{stats.biologicalAge.value}</div>
        <div className={styles.subtext}>{stats.biologicalAge.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>VEDIC TEMPORAL UNITS</span>
          <Clock size={14} className={styles.iconCyan} />
        </div>
        <div className={styles.valueCyan}>{stats.vedicTemporal.value}</div>
        <div className={styles.subtext}>{stats.vedicTemporal.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>SOLAR RETURNS (VARSHPHAL)</span>
          <Sun size={14} className={styles.iconGold} />
        </div>
        <div className={styles.valueGold}>{stats.solarReturns.value}</div>
        <div className={styles.subtext}>{stats.solarReturns.desc}</div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>LUNAR AGE (TITHIS)</span>
          <Moon size={14} className={styles.iconCyan} />
        </div>
        <div className={styles.valueCyan}>{stats.lunarAge.value}</div>
        <div className={styles.subtext}>{stats.lunarAge.desc}</div>
      </div>
    </div>
  );
};
