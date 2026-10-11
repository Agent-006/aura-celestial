"use client";
import React, { useEffect, useState } from "react";
import { useSadeSatiTelemetry } from "../../hooks/useSadeSatiTelemetry";
import styles from "./peak-phase-telemetry.module.scss";

interface CircularProgressProps {
  percentage: number;
  label: string;
  subLabel: string;
  color: string;
}

function CircularProgress({
  percentage,
  label,
  subLabel,
  color,
}: CircularProgressProps) {
  const [offset, setOffset] = useState(251); // 2 * PI * 40
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div className={styles.progressItem}>
      <svg className={styles.svgRing} viewBox="0 0 100 100">
        <circle className={styles.bgCircle} cx="50" cy="50" r={radius} />
        <circle
          className={styles.progressCircle}
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text className={styles.percentageText} x="50" y="50">
          {percentage}
        </text>
      </svg>
      <span className={styles.label}>{label}</span>
      <span className={styles.subLabel}>{subLabel}</span>
    </div>
  );
}

export function PeakPhaseTelemetry() {
  const { data, isLoading } = useSadeSatiTelemetry();
  if (isLoading || !data) return null;
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          CURRENT TRANSIT STATUS: ACTIVE PHASE
        </span>
        <h2 className={styles.title}>
          Shani Sade Sati: Janma Shani (The Peak Phase)
        </h2>
      </div>
      <div className={styles.layoutGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.slokaBox}>
            <p className={styles.slokaText}>
              द्वादशे जन्मगे राशौ द्वितीये च शनैश्चरः । सार्धानि सप्त वर्षाणि
              तत् दुःखं नाम संज्ञितम् ॥
            </p>
            <p className={styles.translation}>
              &quote;When Saturn transits the 12th, 1st, and 2nd houses from the
              natal Moon, the period of seven and a half years is known as Sade
              Sati, a time of profound karmic testing.&quot;
            </p>
          </div>
          <div className={styles.progressRow}>
            <CircularProgress
              percentage={data.progress.overallPercentage}
              label="OVERALL PROGRESS"
              subLabel="2.5 Yrs Passed"
              color="#e6b553"
            />
            <CircularProgress
              percentage={data.progress.currentPhasePercentage}
              label="PHASE 2 PROGRESS"
              subLabel="Janma Shani Activation"
              color="#00e5ff"
            />
            <CircularProgress
              percentage={data.progress.dhaiyaPercentage}
              label="DHAIYA PROGRESS"
              subLabel="Kantaka Shani"
              color="#e6b553"
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.cardTitle}>The Ringed Master</h3>
          <div className={styles.imagePlaceholder}>[SATURN IMAGE]</div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Transit Velocity:</span>
            <span className={styles.statValue}>0.033°/day</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Distance from Earth:</span>
            <span className={styles.statValue}>8.92 AU</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Retrograde Status:</span>
            <span className={styles.statValue} style={{ color: "#e6b553" }}>
              Direct
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
