import React from "react";
import { Activity } from "lucide-react";
import { DestinyTelemetryData } from "../../types/destiny-number-calculator.types";
import styles from "./destiny-telemetry.module.scss";

interface DestinyTelemetryProps {
  telemetry: DestinyTelemetryData["telemetry"];
}

export const DestinyTelemetry: React.FC<DestinyTelemetryProps> = ({
  telemetry,
}) => {
  return (
    <div className={styles.telemetryContainer}>
      <div className={styles.header}>
        <Activity size={14} className={styles.iconGold} />
        <h3 className={styles.title}>
          Bhagyank Core Vibration & Dharmic Telemetry
        </h3>
        <span className={styles.subtitle}>
          CHRONOMETRIC TRANSLATION OF BIRTH VECTOR
        </span>
        <div className={styles.pulseIndicator}>
          <span>SIGNAL ACQUIRED (741 Hz)</span>
          <div className={styles.dot}></div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>DESTINY ROOT</span>
            <span className={styles.badgeGold}>BHAGYANK</span>
          </div>
          <div className={styles.valueGold}>{telemetry.destinyRoot.value}</div>
          <p className={styles.subtext}>{telemetry.destinyRoot.desc}</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>GOVERNING PLANET</span>
            <span className={styles.badgeCyan}>GRAHA</span>
          </div>
          <div className={styles.valueCyan}>
            {telemetry.governingPlanet.value}
          </div>
          <p className={styles.subtext}>{telemetry.governingPlanet.desc}</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>COMPOUND RESONANCE</span>
            <span className={styles.badgeGold}>MATRIX</span>
          </div>
          <div className={styles.valueGold}>
            {telemetry.compoundResonance.value}
          </div>
          <p className={styles.subtext}>{telemetry.compoundResonance.desc}</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>CELLULAR FREQUENCY</span>
            <span className={styles.badgeGold}>WAVEFORM</span>
          </div>
          <div className={styles.valueGold}>
            {telemetry.cellularFrequency.value}
          </div>
          <p className={styles.subtext}>{telemetry.cellularFrequency.desc}</p>
        </div>
      </div>
    </div>
  );
};
