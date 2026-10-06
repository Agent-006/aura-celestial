import React from "react";
import { Metadata } from "next";
import { RashiCalculator } from "@/features/calculators/rashi-calculator/components/RashiCalculator/RashiCalculator";
import { CalculatorHeader } from "@/features/calculators/components/shared/CalculatorHeader/CalculatorHeader";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Rashi Calculator | Moon Sign | Aura Celestial",
  description:
    "Calculate your exact Chandra Rashi (Moon Sign) in both Western Tropical and Vedic Sidereal systems. Understand your emotional core.",
};

export default function RashiCalculatorPage() {
  return (
    <main className={styles.pageMain}>
      <CalculatorHeader
        eyebrow="AURA CELESTIAL EPHEMERIS / LUNAR TRACKING"
        title="Rashi Calculator (Chandra Rashi & Lunar Ephemeris)"
        description="Continuous geocentric lunar ephemeris telemetry determining exact placement in the zodiacal lunar mansion. Reveals subconscious emotional patterns and acts as the Dasha timeline anchor."
      />

      <RashiCalculator />
    </main>
  );
}
