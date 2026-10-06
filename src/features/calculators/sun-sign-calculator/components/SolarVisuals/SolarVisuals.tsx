import React from "react";
import { Sun, Compass } from "lucide-react";
import styles from "./solar-visuals.module.scss";

export const SolarVisuals: React.FC = () => {
  return (
    <div className={styles.visualsContainer}>
      <div className={styles.visualCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>TELEMETRY SOLAR ORBIT</span>
          <span className={styles.cardAccent}>AMPLITUDE</span>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.placeholderCircle}>
            <Sun className={styles.placeholderIcon} size={32} />
          </div>
        </div>
      </div>

      <div className={styles.visualCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>EQUINOCTIAL ZODIAC RADAR</span>
          <span className={styles.cardAccent}>AZ 34° 17&apos;</span>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.placeholderCircle}>
            <Compass className={styles.placeholderIcon} size={32} />
          </div>
        </div>
        <div className={styles.visualFooter}>
          <div className={styles.footerItem}>
            <span className={styles.itemLabel}>TROPICAL LOG</span>
            <span className={styles.itemValue}>22° 14&apos; 59&quot;</span>
          </div>
          <div className={styles.footerItem}>
            <span className={styles.itemLabel}>SIDEREAL DATA</span>
            <span className={`${styles.itemValue} ${styles.cyan}`}>
              28° 14&apos; 59&quot;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
