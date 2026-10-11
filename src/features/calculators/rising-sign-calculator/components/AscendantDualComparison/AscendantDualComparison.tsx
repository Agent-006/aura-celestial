"use client";

import React from "react";
import { RisingSignTelemetryData } from "../../types/rising-sign.types";
import styles from "./ascendant-dual-comparison.module.scss";

interface AscendantDualComparisonProps {
  data: RisingSignTelemetryData;
}

export const AscendantDualComparison: React.FC<
  AscendantDualComparisonProps
> = ({ data }) => {
  return (
    <div className={styles.comparisonSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>ORBITAL TELEMETRY REPORT</span>
        <h3 className={styles.title}>
          Western Tropical Ascendant vs. Vedic Sidereal Lagna
        </h3>
        <p className={styles.subtitle}>
          The difference of 24° 10&apos; 28&quot; (Ayanamsha Shift) shifts the
          calculations back to true sidereal star constellations, contrasting
          psychological outward masking with core soul destiny.
        </p>
      </div>

      <div className={styles.resultsGrid}>
        {/* Tropical Card */}
        <div className={`${styles.resultCard} ${styles.tropical}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardType}>TROPICAL (SEASONAL) LAGNA</span>
            <span className={styles.degrees}>{data.tropical.degrees}</span>
          </div>

          <div className={styles.signDisplay}>
            <h4 className={`${styles.signTitle} ${styles.tropicalTitle}`}>
              {data.tropical.signName}
            </h4>
            <p className={styles.signDesc}>
              In Western/Tropical astrology, the Ascendant represents the
              persona, physical vehicle, and behavioral filter through which the
              soul interacts with the material world. With Scorpio rising, an
              enigmatic, penetrating presence precedes the native, characterized
              by hyper-perceptive psychological intuition and an instinctive
              shield against vulnerability.
            </p>
          </div>

          <div className={styles.attributesList}>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>
                First Impression & Lifestyle
              </span>
              <span className={styles.attrValue}>
                {data.tropical.firstImpressionStyle}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>Defensive Response</span>
              <span className={styles.attrValue}>
                {data.tropical.defensiveResponse}
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>Descendant (7th Cusp)</span>
              <span className={styles.attrValue}>
                {data.tropical.descendant}
              </span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.footerLabel}>
              Calculated via: Placidus Cusp System
            </span>
            <span className={styles.footerLink}>ABOUT TROPICAL ZODIAC</span>
          </div>
        </div>

        {/* Sidereal Card */}
        <div className={`${styles.resultCard} ${styles.sidereal}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardType}>
              SIDEREAL (CONSTELLATION) LAGNA
            </span>
            <span className={styles.degrees}>{data.sidereal.degrees}</span>
          </div>

          <div className={styles.signDisplay}>
            <h4 className={`${styles.signTitle} ${styles.siderealTitle}`}>
              {data.sidereal.signName}
            </h4>
            <p className={styles.signDesc}>
              In Jyotish (Sidereal), the Lagna is the primary seat of Deha
              (physical vessel) and Jiva (conscious incarnational path).
              Governed by Mangala situated auspiciously in the 9th House of
              Dharma/Bhagya, this native is steered by deep spiritual fortitude,
              profound investigating intellect, and unwavering tenacity through
              existential transitions.
            </p>
          </div>

          <div className={styles.attributesList}>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>
                Lagnesha (Strength & Position)
              </span>
              <span className={styles.attrValue}>{data.sidereal.lagnesha}</span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>Nakshatra Deity</span>
              <span className={styles.attrValue}>
                Mitra (God of Divine Friendship & Alliance)
              </span>
            </div>
            <div className={styles.attribute}>
              <span className={styles.attrLabel}>
                Navamsha Lagna (D9 Chart)
              </span>
              <span className={styles.attrValue}>
                {data.sidereal.navamshaLagna} - Balanced Dharma Destiny
              </span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.footerLabel}>
              Calculated via: Lahiri (Chitra Paksha) Ayanamsha
            </span>
            <span className={styles.footerLink}>ABOUT VEDIC LAGNA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
