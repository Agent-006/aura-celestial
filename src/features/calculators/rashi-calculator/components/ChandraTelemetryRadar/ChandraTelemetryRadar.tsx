"use client";

import React from "react";
import { Crosshair, Orbit } from "lucide-react";
import { RashiTelemetryData } from "../../types/rashi.types";
import styles from "./chandra-telemetry-radar.module.scss";

interface ChandraTelemetryRadarProps {
  data: RashiTelemetryData;
}

export const ChandraTelemetryRadar: React.FC<ChandraTelemetryRadarProps> = ({
  data,
}) => {
  return (
    <div className={styles.vectorContainer}>
      <div className={styles.radarHeader}>
        <div className={styles.label}>
          <Crosshair size={16} />
          CHANDRA TELEMETRY RADAR
        </div>
        <div className={styles.status}>ORBITAL TRACKING: SECURE</div>
      </div>

      <div className={styles.radarImage}>
        <div className={styles.overlayText}>
          LUNAR GEOCENTRIC ORBITAL RESOLVER
        </div>
        <div className={styles.radarData}>
          <span className={styles.dataTitle}>CURRENT CHANDRA LONGITUDE</span>
          <span className={styles.dataTime}>2024-11-20 18:24 GMT</span>
        </div>
      </div>

      <div className={styles.durationSection}>
        <div className={styles.durationTitle}>
          <Orbit size={16} />
          RASHI PHASE DURATION
        </div>

        <div className={styles.progressBlock}>
          <div className={styles.progressHeader}>
            <span className={styles.label}>Tropical Phase (Western)</span>
            <span className={styles.time}>
              {data.phaseDuration.tropicalTimeRemaining} Rem.
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${styles.tropical}`}
              style={{ width: `${data.phaseDuration.tropicalProgress}%` }}
            />
          </div>
          <div className={styles.progressFooter}>
            <span>{data.tropical.signName}</span>
            <span>Next: Capricorn (Makara)</span>
          </div>
        </div>

        <div className={styles.progressBlock}>
          <div className={styles.progressHeader}>
            <span className={styles.label}>Sidereal Phase (Vedic)</span>
            <span className={styles.time}>
              {data.phaseDuration.siderealTimeRemaining} Rem.
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${styles.sidereal}`}
              style={{ width: `${data.phaseDuration.siderealProgress}%` }}
            />
          </div>
          <div className={styles.progressFooter}>
            <span>{data.sidereal.sanskritName}</span>
            <span>Next: Dhanu (Sagittarius)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
