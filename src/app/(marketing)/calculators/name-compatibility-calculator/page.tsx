import React from "react";
import { NameCompatibilityCalculator } from "@/features/calculators/name-compatibility-calculator/components/NameCompatibilityCalculator/NameCompatibilityCalculator";
import styles from "./page.module.scss";

export const metadata = {
  title: "Name Compatibility Calculator | Aura Celestial",
  description:
    "Sub-arcsecond numerological and phonetic synergy tracking for relationships, utilizing Chaldean and Pythagorean algorithms to measure vibrational concordance.",
};

export default function NameCompatibilityCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          HELIOCENTRIC & CHALDEAN PHONETIC ALGORITHMS | ISO 8601 UTC
        </div>
        <h1 className={styles.title}>
          Name Compatibility Calculator & Onomastic Vibrational Concordance
          Cockpit
        </h1>
        <p className={styles.description}>
          Sub-arcsecond numerological and phonetic synergy tracking for
          relationships, parsing phonemes and syllables against planetary
          resonance to map total interpersonal vibration.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>CHALDEAN ONOMASTICS</span>
          <span className={styles.badgeCyan}>PYTHAGOREAN PHONETICS</span>
          <span className={styles.badgeGold}>DESTINY NUMBER SYNC</span>
        </div>
      </div>

      <div className={styles.calculatorWrapper}>
        <NameCompatibilityCalculator />
      </div>
    </div>
  );
}
