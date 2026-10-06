"use client";

import React from "react";
import { RashiTelemetryData } from "../../types/rashi.types";
import styles from "./dual-lunar-ephemeris.module.scss";

interface DualLunarEphemerisProps {
  data: RashiTelemetryData;
}

export const DualLunarEphemeris: React.FC<DualLunarEphemerisProps> = ({
  data,
}) => {
  return (
    <div className={styles.comparisonSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>LUNAR LONGITUDE COMPARISON</span>
        <h3 className={styles.title}>
          Dual Ephemeris Revelation: Tropical vs. Sidereal
        </h3>
        <p className={styles.subtitle}>
          Astronomical alignments shift our Moon sign based on the Vernal
          Equinox (Tropical), which maps seasonal psychology. Vedic Sidereal
          astrology aligns calculations directly to the fixed stars, calculating
          the true subconscious emotional core (Rashi).
        </p>
      </div>

      <div className={styles.resultsGrid}>
        {/* Tropical Card */}
        <div className={`${styles.resultCard} ${styles.tropical}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardType}>WESTERN TROPICAL (SEASONAL)</span>
            <span className={styles.degrees}>{data.tropical.degrees}</span>
          </div>

          <h4 className={styles.signTitle}>{data.tropical.signName}</h4>

          <div className={styles.attributesGrid}>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>ELEMENT (TATTVA)</span>
              <span className={styles.attrValue}>{data.tropical.element}</span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>MODALITY</span>
              <span className={styles.attrValue}>{data.tropical.modality}</span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>ARCHETYPE</span>
              <span className={styles.attrValue}>
                {data.tropical.archetype}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>POLARITY</span>
              <span className={styles.attrValue}>{data.tropical.polarity}</span>
            </div>
          </div>

          <p className={styles.signDesc}>{data.tropical.description}</p>

          <div className={styles.cardFooter}>
            <span className={styles.footerLabel}>
              Calculated via: Placidus System
            </span>
            <span className={styles.footerLink}>Tropical vs Sidereal?</span>
          </div>
        </div>

        {/* Sidereal Card */}
        <div className={`${styles.resultCard} ${styles.sidereal}`}>
          <div className={styles.cardHeader}>
            <span className={`${styles.cardType} ${styles.gold}`}>
              TRUE SIDEREAL (FIXED STARS)
            </span>
            <span className={`${styles.degrees} ${styles.gold}`}>
              {data.sidereal.degrees}
            </span>
          </div>

          <h4 className={styles.signTitle}>{data.sidereal.signName}</h4>

          <div className={styles.attributesGrid}>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>RASHI LORD</span>
              <span className={styles.attrValue}>
                {data.sidereal.lordGraha}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>TATTVA (ELEMENT)</span>
              <span className={`${styles.attrValue} ${styles.cyan}`}>
                {data.sidereal.tattva}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>LUNAR MANSION</span>
              <span className={styles.attrValue}>
                {data.sidereal.nakshatra}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>NAKSHATRA PADA</span>
              <span className={`${styles.attrValue} ${styles.cyan}`}>
                {data.sidereal.pada} / 4 (Project Phase)
              </span>
            </div>
          </div>

          <p className={styles.signDesc}>{data.sidereal.description}</p>

          <div className={styles.cardFooter}>
            <span className={styles.footerLabel}>
              Ayanamsha Shift: 24° 10&apos; 28&quot;
            </span>
            <span className={styles.footerLink}>
              True Moon Sign Significance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
