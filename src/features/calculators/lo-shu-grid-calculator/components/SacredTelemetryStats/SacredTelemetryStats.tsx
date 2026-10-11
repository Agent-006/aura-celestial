import React from "react";
import { SacredTelemetryStats as TelemetryStatsType } from "../../types/lo-shu.types";
import { Circle, Crown, TriangleAlert, SunMoon } from "lucide-react";
import styles from "./sacred-telemetry-stats.module.scss";

interface SacredTelemetryStatsProps {
  stats: TelemetryStatsType;
}

export const SacredTelemetryStats: React.FC<SacredTelemetryStatsProps> = ({ stats }) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <div className={styles.iconBox}>
          <Circle className={styles.icon} size={16} />
        </div>
        <div className={styles.statInfo}>
          <span className={styles.label}>MULANK / PSYCHIC</span>
          <span className={styles.value}>{stats.mulank}</span>
          <span className={styles.subtext}>{stats.mulankLabel}</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.iconBox} style={{ color: "#FFD700" }}>
          <Crown className={styles.icon} size={16} />
        </div>
        <div className={styles.statInfo}>
          <span className={styles.label}>BHAGYANK / DESTINY</span>
          <span className={styles.value} style={{ color: "#FFD700" }}>{stats.bhagyank}</span>
          <span className={styles.subtext}>{stats.bhagyankLabel}</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.iconBox} style={{ color: "#ff4d4f" }}>
          <TriangleAlert className={styles.icon} size={16} />
        </div>
        <div className={styles.statInfo}>
          <span className={styles.label}>MISSING DIGITS</span>
          <span className={styles.value}>{stats.missingDigits}</span>
          <span className={styles.subtext}>{stats.missingDigitsLabel}</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.iconBox}>
          <SunMoon className={styles.icon} size={16} />
        </div>
        <div className={styles.statInfo}>
          <span className={styles.label}>YIN/YANG BALANCE</span>
          <span className={styles.value}>{stats.yinYangBalance}</span>
          <span className={styles.subtext}>{stats.yinYangLabel}</span>
        </div>
      </div>
    </div>
  );
};
