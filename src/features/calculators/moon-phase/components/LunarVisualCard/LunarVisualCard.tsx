import React from "react";
import styles from "./lunar-visual-card.module.scss";

export function LunarVisualCard() {
  return (
    <div className={styles.card}>
      <div className={styles.moonGraphicContainer}>
        {/* We use a CSS styled glowing orb to simulate the moon */}
        <div className={styles.moonOrb}>
          <div className={styles.moonTexture}></div>
          <div className={styles.moonShadow}></div>
        </div>
      </div>

      <div className={styles.coordinatesGrid}>
        <div className={styles.coordCol}>
          <div className={styles.coordItem}>
            <span className={styles.label}>ZODIACAL LONGITUDE (SIDEREAL)</span>
            <span className={styles.value}>
              052° 18&apos; 42.5&quot;{" "}
              <span className={styles.sub}>(TAURUS/VRISHABHA)</span>
            </span>
          </div>
          <div className={styles.coordItem}>
            <span className={styles.label}>RIGHT ASCENSION (RA)</span>
            <span className={styles.value}>
              03h 48m 22s <span className={styles.sub}>(EQUATORIAL)</span>
            </span>
          </div>
          <div className={styles.coordItem}>
            <span className={styles.label}>MOON DISTANCE (EARTH CENTER)</span>
            <span className={styles.value}>384,400 km</span>
          </div>
        </div>

        <div className={styles.coordCol}>
          <div className={styles.coordItem}>
            <span className={styles.label}>ECLIPTIC LATITUDE</span>
            <span className={styles.value}>-01° 24&apos; 18.2&quot;</span>
          </div>
          <div className={styles.coordItem}>
            <span className={styles.label}>DECLINATION (DEC)</span>
            <span className={styles.value}>+16° 42&apos; 55&quot;</span>
          </div>
          <div className={styles.coordItem}>
            <span className={styles.label}>NEXT SYZYGY (FULL MOON)</span>
            <span className={styles.value}>
              Purnima{" "}
              <span className={styles.sub}>[23 May 2026, 18:42:00 UTC]</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
