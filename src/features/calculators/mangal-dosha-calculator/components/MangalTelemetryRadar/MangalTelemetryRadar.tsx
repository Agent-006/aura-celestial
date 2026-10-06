import React from "react";
import { Activity } from "lucide-react";
import { MangalDoshaTelemetryData } from "../../types/mangal-dosha.types";
import styles from "./mangal-telemetry-radar.module.scss";

interface MangalTelemetryRadarProps {
  data: MangalDoshaTelemetryData;
}

export const MangalTelemetryRadar: React.FC<MangalTelemetryRadarProps> = ({
  data,
}) => {
  return (
    <div className={styles.radarContainer}>
      <div className={styles.header}>
        <span>
          <Activity size={16} /> MANGAL TELEMETRY ARCHITECTURE // EPHEMERIS MARTIAN ORBITAL STATUS
        </span>
      </div>

      <div className={styles.visualArea}>
        <div className={styles.radarOverlay}>
          <div className={styles.radarRings}></div>
          <div className={styles.sunPoint}></div>
          <div className={styles.marsPoint}></div>
          <div className={styles.earthPoint}></div>
        </div>
      </div>

      <div className={styles.hudCard}>
        <h4 className={styles.hudTitle}>Mangal (Mars) Astrometric Vector</h4>
        <div className={styles.hudSubtitle}>
          <span>
            House placement: <strong>{data.radar.housePlacement}</strong>
          </span>
          <span>
            Strength: <strong>{data.radar.strength}</strong>
          </span>
        </div>

        <div className={styles.intensityBar}>
          <div className={styles.barLabels}>
            <span>Dosha Intensity Vector</span>
            <span className={styles.statusText}>{data.radar.intensityVector}</span>
            <span>{data.radar.intensityLabel}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{ width: `${data.doshaPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.metricGrid}>
          <div className={styles.metricBox}>
            <span className={styles.label}>MANGAL DEGREE</span>
            <span className={styles.value}>{data.radar.mangalDegree}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.label}>DOSHA STATUS</span>
            <span className={styles.value}>{data.radar.doshaStatusLabel}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.label}>DIGNITY</span>
            <span className={styles.value}>{data.radar.dignity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
