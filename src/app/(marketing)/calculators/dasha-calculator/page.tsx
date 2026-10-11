import React from "react";
import { Metadata } from "next";
import { DashaCalculator } from "@/features/calculators/dasha-calculator/components/DashaCalculator/DashaCalculator";
import styles from "./page.module.scss";
import { CalculatorHeader } from "@/features/calculators/components/shared";

export const metadata: Metadata = {
  title:
    "Vimshottari Dasha Calculator (120-Year Planetary Chronology) | Aura Celestial",
  description:
    "Calculate your Vedic life-cycle ephemeris detailing the exact unfoldment of karmic frequencies, Mahadashas, Antardashas, and Pratyantardashas tied to your natal Moon's Nakshatra.",
};

export default function DashaCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="VEDIC TIME-CYCLE EPHEMERIS"
        title="Vimshottari Dasha Calculator (120-Year Planetary Chronology)"
        description="Continuous Vedic time-cycle ephemeris detailing the exact unfoldment of karmic frequencies, Mahadashas, Antardashas, and Pratyantardashas tied to your natal Moon's Nakshatra placement and exact time of birth."
        badge={
          <div className={styles.badge}>
            <span className={styles.badgeLabel}>LATEST ACTIVE CYCLE</span>
            <span className={styles.badgeValue}>GURU (JUPITER) 16 YEARS</span>
          </div>
        }
      />
      <DashaCalculator />
    </main>
  );
}
