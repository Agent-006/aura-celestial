"use client";

import React from "react";
import { Crosshair, Activity } from "lucide-react";
import { DashaTelemetryData } from "../../types/dasha.types";
import styles from "./dasha-telemetry-automator.module.scss";

interface DashaTelemetryAutomatorProps {
  data: DashaTelemetryData;
}

export const DashaTelemetryAutomator: React.FC<
  DashaTelemetryAutomatorProps
> = ({ data }) => {
  return (
    <div className={styles.automatorContainer}>
      <div className={styles.automatorHeader}>
        <div className={styles.label}>
          <Crosshair size={16} />
          DASHA TELEMETRY AUTOMATOR
        </div>
        <div className={styles.status}>
          <div className={styles.statusDot} />
          MONITORING CYCLE SYNC
        </div>
      </div>

      <div className={styles.dashboardImage}>
        <div className={styles.hudOverlay}>
          <Activity size={14} />
          <span>
            Real-Time Planetary Transit Radar // Active Dasha Projection Matrix:{" "}
            <span style={{ color: "#EBB55F" }}>STAGE 2 (AD)</span>
          </span>
        </div>
      </div>

      <div className={styles.activeCyclePanel}>
        <div className={styles.cycleHeader}>
          <div className={styles.lordName}>
            {data.activeCycle.mahadashaLord} Mahadasha
            <span className={styles.activeTag}>ACTIVE</span>
          </div>
          <div className={styles.cycleDate}>2027 — 2043 CE</div>
        </div>

        <div className={styles.subCycleInfo}>
          Sub-Period (Antardasha):{" "}
          <strong>{data.activeCycle.antardashaLord}</strong> - Active until{" "}
          {data.activeCycle.activeUntil} ({data.activeCycle.elapsedPercentage}%
          Elapsed)
        </div>

        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressFill}
            style={{ width: `${data.activeCycle.elapsedPercentage}%` }}
          />
        </div>

        <div className={styles.levelsGrid}>
          <div className={styles.levelCard}>
            <span className={styles.levelLabel}>Mahadasha (MD)</span>
            <span className={styles.levelValue}>
              {data.activeCycle.mahadashaLord.split(" ")[0]} (Jupiter)
            </span>
          </div>
          <div className={styles.levelCard}>
            <span className={styles.levelLabel}>Antardasha (AD)</span>
            <span className={styles.levelValue}>
              {data.activeCycle.antardashaLord.split(" ")[0]} (Saturn)
            </span>
          </div>
          <div className={styles.levelCard}>
            <span className={styles.levelLabel}>Pratyantardasha (PD)</span>
            <span className={styles.levelValue}>
              {data.activeCycle.pratyantardashaLord.split(" ")[0]} (Sun)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
