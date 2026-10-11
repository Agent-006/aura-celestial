"use client";

import React from "react";
import { useNakshatraTelemetry } from "../../hooks/useNakshatraTelemetry";
import styles from "./nakshatra-dashboard.module.scss";

export function NakshatraDashboard() {
  const { data, isLoading } = useNakshatraTelemetry();

  if (isLoading || !data) {
    return <div className={styles.dashboardSplit}>Loading Telemetry...</div>;
  }

  const { nakshatra, pada } = data;

  return (
    <div className={styles.dashboardSplit}>
      {/* Left Card: Nakshatra Details */}
      <div className={styles.card}>
        <span className={styles.eyebrow}>✦ PRIMARY NAKSHATRA</span>
        <h2 className={styles.title}>{nakshatra.name}</h2>
        <span className={styles.translation}>{nakshatra.translation}</span>
        <p className={styles.description}>{nakshatra.description}</p>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>SCORE</span>
            <span className={styles.statValue}>{nakshatra.score}%</span>
            <div className={styles.scoreBar}>
              <div
                className={styles.fill}
                style={{ width: `${nakshatra.score}%` }}
              ></div>
            </div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>RULING PLANET</span>
            <span className={styles.statValue}>{nakshatra.rulingPlanet}</span>
            <span className={styles.statSub}>{nakshatra.rulingPlanetDesc}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>DEITY</span>
            <span className={styles.statValue}>{nakshatra.deity}</span>
            <span className={styles.statSub}>{nakshatra.deityDesc}</span>
          </div>
        </div>
      </div>
      {/* Right Card: Pada Details */}
      <div className={styles.card}>
        <span className={styles.eyebrow}>
          ✦ PADA {pada.padaNumber}: {pada.name}
        </span>
        <p className={styles.description}>{pada.description}</p>
        <div className={styles.listItems}>
          <div className={styles.listItem}>
            <h4>{pada.pushkaraStatus}</h4>
            <p>{pada.pushkaraDesc}</p>
          </div>
          <div className={styles.listItem}>
            <h4 style={{ color: "rgba(255, 255, 255, 0.4)" }}>
              {pada.vargottamaStatus}
            </h4>
            <p>{pada.vargottamaDesc}</p>
          </div>
        </div>
        <div className={styles.bottomMetrics}>
          <div className={styles.metric}>
            <span className={styles.label}>MOON SIGN (RASHI)</span>
            <span className={styles.value}>{pada.moonSign}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.label}>DEGREE</span>
            <span className={styles.value}>{pada.degree}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
