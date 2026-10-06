import React from "react";
import { DifferentialPrecession } from "../../types/sun-sign.types";
import styles from "./precession-analysis.module.scss";

interface PrecessionAnalysisProps {
  data: DifferentialPrecession;
}

export const PrecessionAnalysis: React.FC<PrecessionAnalysisProps> = ({
  data,
}) => {
  return (
    <div className={styles.analysisSection}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>
          DIFFERENTIAL PRECESSION ANALYSIS
        </span>
        <span className={styles.accent}>REFERENCE DATE: J2000.0</span>
      </div>

      <h3 className={styles.title}>{data.title}</h3>

      <div className={styles.columns}>
        <div className={styles.column}>
          <span className={styles.colTitle}>1. TROPICAL: EARTH SEASONS</span>
          <p className={styles.colText}>{data.solarEarthSeasons}</p>
        </div>
        <div className={styles.column}>
          <span className={styles.colTitle}>2. THE 25,772-YEAR CYCLE</span>
          <p className={styles.colText}>{data.cycle25k}</p>
        </div>
        <div className={styles.column}>
          <span className={styles.colTitle}>3. SIDEREAL: FIXED STARS</span>
          <p className={styles.colText}>{data.fixedStarConstellations}</p>
        </div>
      </div>

      <div className={styles.visualTimeline}>
        <div className={styles.timelineBar}>
          <div className={`${styles.timelineNode} ${styles.left}`}>
            0° TROPICAL
          </div>
          <div className={styles.timelineCenter}>{data.offsetDegrees}</div>
          <div className={`${styles.timelineNode} ${styles.right}`}>
            0° SIDEREAL
          </div>
        </div>
      </div>
    </div>
  );
};
