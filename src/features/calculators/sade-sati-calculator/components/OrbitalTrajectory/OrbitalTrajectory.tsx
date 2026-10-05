"use client";

import React from "react";
import { useSadeSatiTelemetry } from "../../hooks/useSadeSatiTelemetry";
import styles from "./orbital-trajectory.module.scss";

export function OrbitalTrajectory() {
  const { data, isLoading } = useSadeSatiTelemetry();

  if (isLoading || !data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          The 7.5-Year Tri-Phasic Orbital Trajectory
        </h2>
      </div>

      <div className={styles.timelineBar}>
        <div className={styles.activeProgress}></div>
      </div>

      <div className={styles.cardsGrid}>
        {data.trajectory.map((phase) => (
          <div
            key={phase.id}
            className={`${styles.phaseCard} ${phase.isActive ? styles.active : ""}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.phaseId}>
                Phase {phase.id.replace("phase", "")} • {phase.house}
              </span>
              <span className={styles.badge}>
                {phase.isActive ? "Active Janma Transit" : "Pending Transit"}
              </span>
            </div>

            <h3 className={styles.phaseTitle}>{phase.title}</h3>
            <span className={styles.duration}>{phase.duration}</span>

            <p className={styles.description}>{phase.description}</p>

            <div className={styles.effectsBlock}>
              <span className={styles.effectLabel}>
                Material / Spiritual Effects:
              </span>
              <span className={styles.effectText}>{phase.effects}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
