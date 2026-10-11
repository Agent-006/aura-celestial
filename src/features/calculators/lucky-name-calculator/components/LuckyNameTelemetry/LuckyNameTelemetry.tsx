import React from "react";
import { Activity, Shield } from "lucide-react";
import { LuckyNameTelemetryData } from "../../types/lucky-name-calculator.types";
import styles from "./lucky-name-telemetry.module.scss";

interface LuckyNameTelemetryProps {
  data: LuckyNameTelemetryData["telemetry"];
  name: string;
}

export const LuckyNameTelemetry: React.FC<LuckyNameTelemetryProps> = ({
  data,
  name,
}) => {
  return (
    <div className={styles.telemetryContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Activity size={16} className={styles.iconCyan} />
          <span className={styles.eyebrow}>
            Quantum Onomastic Decoding Complete
          </span>
        </div>
        <button className={styles.recalibrateBtn}>
          <Shield size={12} />
          RE-CALIBRATE PROTOCOL
        </button>
      </div>

      <div className={styles.titleArea}>
        <h2 className={styles.title}>
          The Martial Monarch: Namank {data.namankRoot.value} Vibrational
          Blueprint
        </h2>
        <p className={styles.subtitle}>
          Harmonic profile for &quot;{name}&quot;. Indicates core vibrational
          signatures and external manifestation vectors.
        </p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>DESTINY ROOT</span>
          <div className={styles.statValue}>
            {data.namankRoot.value}{" "}
            <span className={styles.unit}>(Namank)</span>
          </div>
          <p className={styles.statDesc}>{data.namankRoot.desc}</p>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>GOVERNING PLANET</span>
          <div className={styles.statValueCyan}>
            {data.governingPlanet.value}
          </div>
          <p className={styles.statDesc}>{data.governingPlanet.desc}</p>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>COMPOUND RESONANCE</span>
          <div className={styles.statValueGold}>
            {data.compoundResonance.value}
          </div>
          <p className={styles.statDesc}>{data.compoundResonance.desc}</p>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>CELLULAR FREQUENCY</span>
          <div className={styles.statValue}>{data.cellularFrequency.value}</div>
          <p className={styles.statDesc}>{data.cellularFrequency.desc}</p>
        </div>
      </div>
    </div>
  );
};
