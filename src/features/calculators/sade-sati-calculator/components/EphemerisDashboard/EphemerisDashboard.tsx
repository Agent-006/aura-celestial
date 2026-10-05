"use client";

import React from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { useSadeSatiTelemetry } from "../../hooks/useSadeSatiTelemetry";
import styles from "./ephemeris-dashboard.module.scss";

export function EphemerisDashboard() {
  const { data, isLoading } = useSadeSatiTelemetry();

  if (isLoading || !data) {
    return (
      <div className={styles.dashboard}>Syncing Saturnian Ephemeris...</div>
    );
  }

  const { ephemeris } = data;

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <span className={styles.eyebrow}>
            AURA CELESTIAL ALGORITHM | V1.2.0-STABLE
          </span>
          <h2 className={styles.title}>
            Native Natal Ingress & Saturnian Ephemeris Parameters
          </h2>
        </div>
        <div className={styles.statusIndicators}>
          <div className={`${styles.indicator} ${styles.active}`}>
            <span className={styles.dot}></span>
            Live Lunar Transit
          </div>
          <div className={`${styles.indicator} ${styles.warning}`}>
            <span className={styles.dot}></span>
            Saturnian Ephemeris Active
          </div>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>MOON SIGN (RASHI)</span>
          <div className={styles.metricValue}>{ephemeris.moonSign}</div>
          <div className={styles.metricSub}>{ephemeris.moonDegree}</div>
        </div>

        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>NATAL SATURN SIGN</span>
          <div className={styles.metricValue}>{ephemeris.natalSaturnSign}</div>
          <div className={styles.metricSub}>{ephemeris.natalSaturnDegree}</div>
        </div>

        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>CURRENT TRANSIT PHASE</span>
          <div className={styles.metricValue}>{ephemeris.currentPhase}</div>
          <div className={styles.metricSub}>{ephemeris.currentStatus}</div>
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.tags}>
          {ephemeris.activeTags.map((tag, idx) => (
            <div key={idx} className={styles.tag}>
              <CheckCircle2 size={12} />
              {tag}
            </div>
          ))}
        </div>
        <button className={styles.recalcBtn}>
          <RotateCcw size={14} />
          Recalculate Moon Ephemeris
        </button>
      </div>
    </div>
  );
}
