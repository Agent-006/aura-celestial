"use client";

import React from "react";
import { Compass } from "lucide-react";
import { RisingSignTelemetryData } from "../../types/rising-sign.types";
import styles from "./horizon-ephemeris-vector.module.scss";

interface HorizonEphemerisVectorProps {
  data: RisingSignTelemetryData;
}

export const HorizonEphemerisVector: React.FC<HorizonEphemerisVectorProps> = ({
  data,
}) => {
  return (
    <div className={styles.vectorContainer}>
      <div className={styles.radarWrapper}>
        <div className={`${styles.radarLabel} ${styles.top}`}>
          HORIZON RADAR // EAST. ACTIVE
        </div>
        <div className={styles.radarBg}>
          <Compass size={64} className={styles.cyan} />
        </div>
        <div className={`${styles.radarLabel} ${styles.bottomLeft}`}>
          HORIZON KINETICS: ASCENDANT SYNC
        </div>
        <div className={`${styles.radarLabel} ${styles.bottomRight}`}>
          AZIMUTH ANGLE RESOLVED
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>LAGNA EXACT DEGREE</span>
          <span className={styles.metricValue}>{data.exactDegree}</span>
          <span className={styles.metricSub}>{data.zodiacSign}</span>
        </div>

        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>LAGNA POLARITY (LAMA)</span>
          <span className={styles.metricValue}>{data.polarity}</span>
          <span className={`${styles.metricSub} ${styles.cyan}`}>
            Tattva: {data.tattva}
          </span>
        </div>

        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>ASCENDANT NAVAMSHA</span>
          <span className={styles.metricValue}>{data.nakshatra}</span>
          <span className={styles.metricSub}>
            PADA {data.pada} / {data.navamsha}
          </span>
        </div>

        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>TATTVA & POLARITY</span>
          <span className={styles.metricValue}>{data.tattva}</span>
          <span className={styles.metricSub}>Water / Fixed / Female</span>
        </div>
      </div>

      <div className={styles.durationSection}>
        <div className={styles.durationHeader}>
          <span className={styles.durationLabel}>
            ASCENDANT DURATION WINDOW
          </span>
          <span className={styles.durationTimes}>
            {data.ascendantDuration.start} — {data.ascendantDuration.end}
          </span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${data.ascendantDuration.progress}%` }}
          />
        </div>

        <div className={styles.durationFooter}>
          <span>CURRENT: {data.zodiacSign}</span>
          <span className={styles.nextLagna}>
            Next: Sagittarius in {data.ascendantDuration.timeUntilNext}
          </span>
        </div>
      </div>
    </div>
  );
};
